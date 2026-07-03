import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const requiredFiles = [
  "slides.json",
  "strategy-synthesis.md",
  "competitor-benchmark.md",
  "verifier-review.md"
];

const reportFiles = [
  ["Verifier Review", "verifier-review.md", "qa", true],
  ["Strategy Synthesis", "strategy-synthesis.md", "strategy", true],
  ["Competitor Benchmark", "competitor-benchmark.md", "landscape", true],
  ["Product Architecture", "product-architecture.md", "architecture", false],
  ["Manufacturing Feasibility", "manufacturing-feasibility.md", "manufacturing", false],
  ["Regulatory / Installation Risks", "regulatory-and-installation-risks.md", "risk", false],
  ["Client Package Manifest", "client-package-manifest.md", "manifest", true]
];

function outputsDir() {
  return path.join(process.cwd(), "outputs");
}

function listClients() {
  const dir = outputsDir();

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function defaultClientSlug(clients) {
  if (clients.includes("smoke-test-003")) {
    return "smoke-test-003";
  }

  if (clients.includes("client-example")) {
    return "client-example";
  }

  return clients[0] || "";
}

function readText(filePath) {
  if (!fs.existsSync(filePath)) {
    return "";
  }

  return fs.readFileSync(filePath, "utf8");
}

function readClient(slug) {
  const baseDir = path.join(outputsDir(), slug);
  const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(baseDir, file)));

  if (!slug || !fs.existsSync(baseDir)) {
    return { error: "No client output folder found.", missing: requiredFiles };
  }

  if (missing.length > 0) {
    return { error: "Client output is incomplete.", missing };
  }

  try {
    const slidesPayload = JSON.parse(readText(path.join(baseDir, "slides.json")));
    const slides = Array.isArray(slidesPayload) ? slidesPayload : slidesPayload.slides || [];
    const reports = reportFiles
      .map(([title, file, id, alwaysShow]) => ({
        id,
        title,
        file,
        alwaysShow,
        content: readText(path.join(baseDir, file))
      }))
      .filter((report) => report.alwaysShow || report.content);

    return {
      slidesPayload,
      slides,
      reports,
      missing: []
    };
  } catch (error) {
    return { error: `Could not parse client output: ${error.message}`, missing: [] };
  }
}

function valueLabel(value) {
  if (value === true) {
    return "true";
  }

  if (value === false) {
    return "false";
  }

  return value || "not set";
}

function Badge({ label, value, tone = "neutral" }) {
  return (
    <span className={`badge ${tone}`}>
      <span>{label}</span>
      <strong>{valueLabel(value)}</strong>
    </span>
  );
}

function metricCounts(slides) {
  return {
    slides: slides.length,
    blocked: slides.filter((slide) => slide.readiness_gate === "blocked").length,
    needsInput: slides.filter((slide) => slide.status === "needs-input").length,
    clientSafe: slides.filter((slide) => slide.client_safe === true).length
  };
}

function confidenceTone(value) {
  const normalized = String(value || "").toLowerCase();

  if (normalized === "high" || normalized === "confirmed") {
    return "good";
  }

  if (normalized === "medium" || normalized === "external-sourced" || normalized === "internal-only") {
    return "watch";
  }

  if (normalized === "low" || normalized === "assumption" || normalized === "needs-validation") {
    return "risk";
  }

  return "neutral";
}

function safeTone(value) {
  return value === true ? "good" : "risk";
}

function readinessTone(value) {
  const normalized = String(value || "").toLowerCase();

  if (["approved", "ready", "pass", "green", "client-ready"].includes(normalized)) {
    return "good";
  }

  if (["review", "needs-review", "draft", "yellow", "demo-ready", "internal-draft-ready"].includes(normalized)) {
    return "watch";
  }

  if (["blocked", "fail", "red"].includes(normalized)) {
    return "risk";
  }

  return "neutral";
}

function slideTitle(slide, index) {
  return slide.title || slide.headline || slide.name || `Slide ${index + 1}`;
}

function slideBody(slide) {
  if (Array.isArray(slide.content_blocks)) {
    return slide.content_blocks.flatMap((block) => {
      if (Array.isArray(block.body)) {
        return block.body.map((item) => {
          if (item && typeof item === "object") {
            return Object.entries(item)
              .map(([key, value]) => `${key}: ${value}`)
              .join(" | ");
          }

          return item;
        });
      }

      return block.body ? [block.body] : [];
    });
  }

  if (Array.isArray(slide.bullets)) {
    return slide.bullets;
  }

  if (Array.isArray(slide.points)) {
    return slide.points;
  }

  if (slide.body) {
    return [slide.body];
  }

  return [];
}

function ContentBlock({ block }) {
  const body = block.body;

  return (
    <div className={`content-block block-${block.type || "default"}`}>
      {block.heading ? <h4>{block.heading}</h4> : null}
      {Array.isArray(body) && body.every((item) => item && typeof item === "object") ? (
        <div className="mini-table">
          {body.map((row, rowIndex) => (
            <div className="mini-table-row" key={rowIndex}>
              {Object.entries(row).map(([key, value]) => (
                <div key={key}>
                  <span>{key}</span>
                  <strong>{valueLabel(value)}</strong>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : Array.isArray(body) ? (
        <ul>
          {body.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{body}</p>
      )}
    </div>
  );
}

function MarkdownPanel({ title, content }) {
  return (
    <section className="report-panel text-panel">
      <div className="report-panel-top">
        <div>
          <div className="section-label">{title}</div>
          <h3>{title}</h3>
        </div>
      </div>
      <pre>{content || "No content found."}</pre>
    </section>
  );
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const clients = listClients();
  const selectedSlug = params?.client && clients.includes(params.client)
    ? params.client
    : defaultClientSlug(clients);
  const client = readClient(selectedSlug);
  const readinessSummary =
    client.slidesPayload?.verifier_readiness_summary ||
    client.slidesPayload?.readiness_summary ||
    "No verifier readiness summary found in slides.json.";
  const counts = client.slides ? metricCounts(client.slides) : {};

  return (
    <main>
      <header className="topbar">
        <div>
          <p className="eyebrow">Agency Discovery OS</p>
          <h1>{client.slidesPayload?.deck_title || "Client Preview"}</h1>
        </div>
        <form className="client-picker">
          <label htmlFor="client">Client</label>
          <select id="client" name="client" defaultValue={selectedSlug}>
            {clients.map((clientSlug) => (
              <option key={clientSlug} value={clientSlug}>
                {clientSlug}
              </option>
            ))}
          </select>
          <button type="submit">Open</button>
        </form>
      </header>

      {client.error ? (
        <section className="report-panel error-panel">
          <h2>{client.error}</h2>
          {client.missing?.length > 0 ? <p>Missing: {client.missing.join(", ")}</p> : null}
        </section>
      ) : (
        <>
          <section className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow">Selected Client</p>
              <h2>{selectedSlug}</h2>
              <p>{client.slidesPayload?.strategy_summary}</p>
            </div>
            <div className="summary-card">
              <div className="section-label">Verifier Readiness Summary</div>
              <p>{readinessSummary}</p>
            </div>
            <div className="metric-strip">
              <div className="metric-card">
                <span>Slides</span>
                <strong>{counts.slides}</strong>
              </div>
              <div className="metric-card warning-card">
                <span>Blocked</span>
                <strong>{counts.blocked}</strong>
              </div>
              <div className="metric-card warning-card">
                <span>Needs Input</span>
                <strong>{counts.needsInput}</strong>
              </div>
              <div className="metric-card">
                <span>Client Safe</span>
                <strong>{counts.clientSafe}</strong>
              </div>
            </div>
          </section>

          <section className="deck">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Deck</p>
                <h2>{client.slides.length} strategic slides</h2>
              </div>
            </div>

            <div className="slide-grid">
              {client.slides.map((slide, index) => (
                <article
                  className={`slide-card ${index % 3 === 0 ? "dark-slide" : ""} ${slide.readiness_gate === "blocked" ? "blocked-slide" : ""}`}
                  key={slide.id || `${slideTitle(slide, index)}-${index}`}
                >
                  <div className="slide-top">
                    <div>
                      <div className="section-label">{slide.section || "Slide"}</div>
                      <div className="slide-number">{slide.id || String(index + 1).padStart(2, "0")}</div>
                    </div>
                    <Badge
                      label="status"
                      value={slide.status}
                      tone={readinessTone(slide.status)}
                    />
                  </div>
                  <h3>{slideTitle(slide, index)}</h3>
                  {slide.key_message ? <p className="key-message">{slide.key_message}</p> : null}
                  <div className="badges">
                    <Badge
                      label="readiness_gate"
                      value={slide.readiness_gate}
                      tone={readinessTone(slide.readiness_gate)}
                    />
                    <Badge
                      label="evidence_confidence"
                      value={slide.evidence_confidence}
                      tone={confidenceTone(slide.evidence_confidence)}
                    />
                    <Badge
                      label="client_safe"
                      value={slide.client_safe}
                      tone={safeTone(slide.client_safe)}
                    />
                  </div>
                  {slide.needs_input_reason ? (
                    <div className="warning">
                      <strong>{slide.readiness_gate === "blocked" ? "Validation required" : "Needs input"}</strong>
                      <p>{slide.needs_input_reason}</p>
                    </div>
                  ) : null}
                  {Array.isArray(slide.content_blocks) ? (
                    <div className="content-blocks">
                      {slide.content_blocks.map((block, blockIndex) => (
                        <ContentBlock block={block} key={`${block.heading || block.type}-${blockIndex}`} />
                      ))}
                    </div>
                  ) : slideBody(slide).length > 0 ? (
                    <ul>
                      {slideBody(slide).map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {Array.isArray(slide.evidence_refs) ? (
                    <footer className="evidence-footer">
                      <span>Evidence</span>
                      <p>{slide.evidence_refs.join(" · ")}</p>
                    </footer>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="report-grid">
            {client.reports.map((report) => (
              <MarkdownPanel title={report.title} content={report.content} key={report.id} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

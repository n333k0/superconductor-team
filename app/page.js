import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const requiredFiles = [
  "slides.json",
  "strategy-synthesis.md",
  "competitor-benchmark.md",
  "verifier-review.md"
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

    return {
      slidesPayload,
      slides,
      strategySynthesis: readText(path.join(baseDir, "strategy-synthesis.md")),
      competitorBenchmark: readText(path.join(baseDir, "competitor-benchmark.md")),
      verifierReview: readText(path.join(baseDir, "verifier-review.md")),
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

function confidenceTone(value) {
  const normalized = String(value || "").toLowerCase();

  if (normalized === "high") {
    return "good";
  }

  if (normalized === "medium") {
    return "watch";
  }

  if (normalized === "low") {
    return "risk";
  }

  return "neutral";
}

function safeTone(value) {
  return value === true ? "good" : "risk";
}

function readinessTone(value) {
  const normalized = String(value || "").toLowerCase();

  if (["approved", "ready", "pass", "green"].includes(normalized)) {
    return "good";
  }

  if (["review", "needs-review", "draft", "yellow"].includes(normalized)) {
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

function MarkdownPanel({ title, content }) {
  return (
    <section className="panel text-panel">
      <div className="section-label">{title}</div>
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

  return (
    <main>
      <header className="topbar">
        <div>
          <p className="eyebrow">Agency Discovery OS</p>
          <h1>Client Preview</h1>
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
        <section className="panel error-panel">
          <h2>{client.error}</h2>
          {client.missing?.length > 0 ? <p>Missing: {client.missing.join(", ")}</p> : null}
        </section>
      ) : (
        <>
          <section className="overview">
            <div>
              <p className="eyebrow">Selected Client</p>
              <h2>{selectedSlug}</h2>
            </div>
            <div className="summary-card">
              <div className="section-label">Verifier Readiness Summary</div>
              <p>{readinessSummary}</p>
            </div>
          </section>

          <section className="deck">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Deck</p>
                <h2>{client.slides.length} Slides</h2>
              </div>
            </div>

            <div className="slide-grid">
              {client.slides.map((slide, index) => (
                <article className="slide-card" key={slide.id || `${slideTitle(slide, index)}-${index}`}>
                  <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{slideTitle(slide, index)}</h3>
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
                      <strong>Needs input</strong>
                      <p>{slide.needs_input_reason}</p>
                    </div>
                  ) : null}
                  {slideBody(slide).length > 0 ? (
                    <ul>
                      {slideBody(slide).map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="report-grid">
            <MarkdownPanel title="Verifier Review" content={client.verifierReview} />
            <MarkdownPanel title="Strategy Synthesis" content={client.strategySynthesis} />
            <MarkdownPanel title="Competitor Benchmark" content={client.competitorBenchmark} />
          </section>
        </>
      )}
    </main>
  );
}

const fs = require("fs");
const path = require("path");
const { clientDir, slugFromArg, validateSlug } = require("./lib");

const slug = slugFromArg();

if (!validateSlug(slug)) {
  console.error("Usage: npm run new-client -- <client-slug>");
  console.error("Client slugs may contain lowercase letters, numbers, and hyphens.");
  process.exit(1);
}

const targetDir = clientDir(slug);

if (fs.existsSync(targetDir)) {
  console.error(`Client already exists: outputs/${slug}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const slides = {
  client_slug: slug,
  generated_at: new Date().toISOString(),
  verifier_readiness_summary: "Draft client workspace created. Add evidence before agency review.",
  slides: [
    {
      id: "01",
      title: "Discovery Snapshot",
      readiness_gate: "draft",
      evidence_confidence: "low",
      client_safe: false,
      needs_input_reason: "Add source-backed discovery notes and client context.",
      bullets: [
        "Replace this placeholder with the client discovery snapshot.",
        "Include the strongest opportunity, risk, and open question."
      ]
    }
  ]
};

fs.writeFileSync(path.join(targetDir, "slides.json"), `${JSON.stringify(slides, null, 2)}\n`);
fs.writeFileSync(
  path.join(targetDir, "strategy-synthesis.md"),
  `# Strategy Synthesis\n\nAdd the client-specific strategy synthesis here.\n`
);
fs.writeFileSync(
  path.join(targetDir, "competitor-benchmark.md"),
  `# Competitor Benchmark\n\nAdd the competitor benchmark here.\n`
);
fs.writeFileSync(
  path.join(targetDir, "verifier-review.md"),
  `# Verifier Review\n\nReadiness: Draft\n\nAdd verifier notes, risks, and required client inputs here.\n`
);

console.log(`Created outputs/${slug}`);

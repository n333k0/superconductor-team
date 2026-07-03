const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outputsDir = path.join(rootDir, "outputs");
const requiredClientFiles = [
  "discovery-brief.md",
  "market-research-summary.md",
  "competitor-benchmark.md",
  "service-architecture.md",
  "strategy-synthesis.md",
  "strategy-deck-outline.md",
  "visual-direction.md",
  "slides.json",
  "verifier-review.md",
  "client-package-manifest.md"
];

function slugFromArg() {
  return process.argv[2];
}

function validateSlug(slug) {
  return typeof slug === "string" && /^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/.test(slug);
}

function clientDir(slug) {
  return path.join(outputsDir, slug);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readTextIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return "";
  }
  return fs.readFileSync(filePath, "utf8");
}

function listClientSlugs() {
  if (!fs.existsSync(outputsDir)) {
    return [];
  }
  return fs
    .readdirSync(outputsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function getSlidesPayload(slug) {
  const filePath = path.join(clientDir(slug), "slides.json");
  const payload = readJson(filePath);
  const slides = Array.isArray(payload) ? payload : payload.slides;

  if (!Array.isArray(slides)) {
    throw new Error("slides.json must be an array or an object with a slides array.");
  }

  return { payload, slides };
}

function normalizeSlideTitle(slide, index) {
  return slide.title || slide.headline || slide.name || `Slide ${index + 1}`;
}

module.exports = {
  rootDir,
  outputsDir,
  requiredClientFiles,
  slugFromArg,
  validateSlug,
  clientDir,
  readJson,
  readTextIfExists,
  listClientSlugs,
  getSlidesPayload,
  normalizeSlideTitle
};

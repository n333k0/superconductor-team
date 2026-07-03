const {
  slugFromArg,
  validateSlug,
  getSlidesPayload,
  normalizeSlideTitle
} = require("./lib");

const slug = slugFromArg();

if (!validateSlug(slug)) {
  console.error("Usage: npm run check-slides -- <client-slug>");
  process.exit(1);
}

const requiredFields = ["readiness_gate", "evidence_confidence", "client_safe"];
const allowedConfidence = new Set(["low", "medium", "high"]);
const errors = [];
const warnings = [];

let slides;
let payload;

try {
  ({ payload, slides } = getSlidesPayload(slug));
} catch (error) {
  console.error(`Could not read slides for ${slug}: ${error.message}`);
  process.exit(1);
}

slides.forEach((slide, index) => {
  const label = normalizeSlideTitle(slide, index);

  for (const field of requiredFields) {
    if (slide[field] === undefined || slide[field] === null || slide[field] === "") {
      errors.push(`${label}: missing ${field}`);
    }
  }

  if (
    slide.evidence_confidence &&
    !allowedConfidence.has(String(slide.evidence_confidence).toLowerCase())
  ) {
    warnings.push(`${label}: evidence_confidence should usually be low, medium, or high.`);
  }

  if (slide.client_safe !== true && !slide.needs_input_reason) {
    errors.push(`${label}: needs_input_reason is required when client_safe is not true.`);
  }
});

if (!payload.verifier_readiness_summary && !payload.readiness_summary) {
  warnings.push("slides.json has no verifier_readiness_summary.");
}

if (errors.length > 0) {
  console.error(`Slide check failed for ${slug}:`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  if (warnings.length > 0) {
    console.error("Warnings:");
    for (const warning of warnings) {
      console.error(`- ${warning}`);
    }
  }
  process.exit(1);
}

console.log(`Slide check passed for ${slug}.`);

if (warnings.length > 0) {
  console.log("Warnings:");
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

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

const requiredPayloadFields = ["client_slug", "deck_title", "version", "created_at", "source_outline", "slides"];
const requiredSlideFields = [
  "id",
  "section",
  "title",
  "purpose",
  "key_message",
  "layout",
  "content_blocks",
  "evidence_refs",
  "visual_direction",
  "speaker_notes",
  "production_notes",
  "status",
  "evidence_confidence",
  "client_safe",
  "readiness_gate"
];
const allowedLayouts = new Set([
  "title",
  "section-divider",
  "single-message",
  "two-column",
  "three-column",
  "evidence-table",
  "matrix",
  "timeline",
  "process",
  "quote",
  "visual-system",
  "appendix"
]);
const allowedStatuses = new Set(["draft", "needs-input", "ready-for-design", "approved"]);
const allowedConfidence = new Set([
  "confirmed",
  "external-sourced",
  "internal-only",
  "assumption",
  "needs-validation"
]);
const allowedReadiness = new Set([
  "demo-ready",
  "internal-draft-ready",
  "client-ready",
  "blocked"
]);
const allowedContentTypes = new Set([
  "headline",
  "paragraph",
  "bullets",
  "quote",
  "metric",
  "table",
  "diagram-note",
  "image-note"
]);
const evidenceRefPattern = /^(SRC-[0-9]{3}|ASSUMPTION-[0-9]{3}|CLIENT-[0-9]{3}|outputs\/[a-z0-9]+(?:-[a-z0-9]+)*\/[a-z0-9]+(?:-[a-z0-9]+)*\.md(?:#[a-z0-9]+(?:-[a-z0-9]+)*)?)$/;
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

if (Array.isArray(payload)) {
  errors.push("slides.json must be an object matching schemas/slides.schema.json, not a bare array.");
} else {
  for (const field of requiredPayloadFields) {
    if (payload[field] === undefined || payload[field] === null || payload[field] === "") {
      errors.push(`slides.json: missing ${field}`);
    }
  }

  if (payload.client_slug && payload.client_slug !== slug) {
    errors.push(`slides.json: client_slug must equal ${slug}`);
  }

  if (payload.created_at && !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(payload.created_at)) {
    errors.push("slides.json: created_at must use YYYY-MM-DD format.");
  }

  if (
    payload.source_outline &&
    !new RegExp(`^outputs/${slug}/[a-z0-9]+(?:-[a-z0-9]+)*\\.md$`).test(payload.source_outline)
  ) {
    errors.push(`slides.json: source_outline must point to outputs/${slug}/<file>.md`);
  }
}

const seenIds = new Set();

slides.forEach((slide, index) => {
  const label = normalizeSlideTitle(slide, index);

  for (const field of requiredSlideFields) {
    if (slide[field] === undefined || slide[field] === null || slide[field] === "") {
      errors.push(`${label}: missing ${field}`);
    }
  }

  if (slide.id && !/^S[0-9]{2,3}$/.test(slide.id)) {
    errors.push(`${label}: id must look like S01, S02, etc.`);
  }

  if (slide.id && seenIds.has(slide.id)) {
    errors.push(`${label}: duplicate slide id ${slide.id}`);
  }
  seenIds.add(slide.id);

  if (slide.layout && !allowedLayouts.has(slide.layout)) {
    errors.push(`${label}: invalid layout ${slide.layout}`);
  }

  if (slide.status && !allowedStatuses.has(slide.status)) {
    errors.push(`${label}: invalid status ${slide.status}`);
  }

  if (
    slide.evidence_confidence &&
    !allowedConfidence.has(String(slide.evidence_confidence))
  ) {
    errors.push(`${label}: invalid evidence_confidence ${slide.evidence_confidence}`);
  }

  if (slide.readiness_gate && !allowedReadiness.has(String(slide.readiness_gate))) {
    errors.push(`${label}: invalid readiness_gate ${slide.readiness_gate}`);
  }

  if (!Array.isArray(slide.content_blocks) || slide.content_blocks.length === 0) {
    errors.push(`${label}: content_blocks must contain at least one block.`);
  } else {
    slide.content_blocks.forEach((block, blockIndex) => {
      const blockLabel = `${label} content block ${blockIndex + 1}`;
      if (!block || typeof block !== "object" || Array.isArray(block)) {
        errors.push(`${blockLabel}: must be an object.`);
        return;
      }
      if (!allowedContentTypes.has(block.type)) {
        errors.push(`${blockLabel}: invalid type ${block.type}`);
      }
      if (block.heading === undefined || block.body === undefined) {
        errors.push(`${blockLabel}: missing heading or body.`);
      }
    });
  }

  if (!Array.isArray(slide.evidence_refs) || slide.evidence_refs.length === 0) {
    errors.push(`${label}: evidence_refs must contain at least one ref.`);
  } else {
    const uniqueRefs = new Set(slide.evidence_refs);
    if (uniqueRefs.size !== slide.evidence_refs.length) {
      errors.push(`${label}: evidence_refs must be unique.`);
    }
    slide.evidence_refs.forEach((ref) => {
      if (!evidenceRefPattern.test(ref)) {
        errors.push(`${label}: invalid evidence ref ${ref}`);
      }
    });
  }

  if (slide.client_safe !== true && !slide.needs_input_reason) {
    errors.push(`${label}: needs_input_reason is required when client_safe is not true.`);
  }

  if (["draft", "needs-input"].includes(slide.status)) {
    if (!slide.needs_input_reason) {
      errors.push(`${label}: needs_input_reason is required for ${slide.status} status.`);
    }
    if (slide.client_safe !== false) {
      errors.push(`${label}: client_safe must be false for ${slide.status} status.`);
    }
    if (!Array.isArray(slide.production_notes) || slide.production_notes.length === 0) {
      errors.push(`${label}: production_notes must name missing work for ${slide.status} status.`);
    }
  }
});

if (!payload.strategy_summary && !payload.verifier_readiness_summary && !payload.readiness_summary) {
  warnings.push("slides.json has no strategy_summary or verifier readiness summary.");
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

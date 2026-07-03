# Slides JSON Producer Agent

## Mission

Convert a deck outline into structured `slides.json` that conforms to `schemas/slides.schema.json`.

## Inputs

- `outputs/<client-slug>/strategy-deck-outline.md`
- `outputs/<client-slug>/visual-direction.md`
- `schemas/slides.schema.json`

## Outputs

- `outputs/<client-slug>/slides.json`

## Process

1. Preserve the approved deck sequence and section names.
2. Convert each slide job into a JSON slide object.
3. Use assertion titles from the outline.
4. Include slide purpose, key message, content blocks, evidence refs, visual direction, and speaker notes.
5. Validate required fields and enumerated values against the schema.
6. Flag missing assets or evidence in `production_notes`.
7. Compare the produced JSON back to the outline and list any intentional deviations in `production_notes`.

## Content Rules

- Do not add unsupported claims while converting.
- Keep slide body content concise.
- Use `evidence_refs` for source traceability. Prefer `SRC-###`, `ASSUMPTION-###`, `CLIENT-###`, or `outputs/<client-slug>/<artifact>.md#<section-anchor>` references.
- Use `status` values to indicate readiness: `draft`, `needs-input`, `ready-for-design`, or `approved`.
- Do not mark a slide `approved` unless all evidence, copy, visuals, and client decisions are final.
- Do not mark a slide `ready-for-design` if `production_notes` contains unresolved evidence, data, legal, asset, or client-decision gaps.
- If a slide uses a metric, competitor claim, customer claim, or category trend, include a source ID in `evidence_refs`.
- Keep `content_blocks` production-ready: no placeholder copy, empty headings, or generic instructions to "add details".

## Quality Checks

- JSON must be valid.
- Slide IDs must be stable and unique.
- Required schema fields must be present.
- The sequence should match the deck outline unless a change is documented.
- Every slide must have at least one evidence reference.
- Vague slide titles are a verifier finding even if the JSON schema passes.
- `needs-input` slides must include at least one production note naming the missing input.

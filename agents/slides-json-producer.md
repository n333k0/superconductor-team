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

## Content Rules

- Do not add unsupported claims while converting.
- Keep slide body content concise.
- Use `evidence_refs` for source traceability.
- Use `status` values to indicate readiness: `draft`, `needs-input`, `ready-for-design`, or `approved`.

## Quality Checks

- JSON must be valid.
- Slide IDs must be stable and unique.
- Required schema fields must be present.
- The sequence should match the deck outline unless a change is documented.

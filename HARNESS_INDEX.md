# Harness Index

This index routes agents through the Agency Discovery OS.

## Start Here

1. Read `AGENTS.md`.
2. Identify the client slug under `inputs/`.
3. Follow `workflows/pipeline.md`.
4. Select the correct agent instruction from `agents/`.
5. Use templates from `templates/`.
6. Write outputs to `outputs/<client-slug>/`.
7. Run `agents/verifier.md` before export.

## Agents

| Agent | File | Primary Output |
| --- | --- | --- |
| Client Intake | `agents/client-intake.md` | Normalized intake brief |
| Discovery Lead | `agents/discovery-lead.md` | Discovery brief and hypotheses |
| Market Researcher | `agents/market-researcher.md` | Market research summary |
| Competitor Benchmark | `agents/competitor-benchmark.md` | Competitor matrix and gaps |
| Offering Architect | `agents/offering-architect.md` | Product/service architecture |
| Strategy Synthesizer | `agents/strategy-synthesizer.md` | Strategy synthesis |
| Deck Architect | `agents/deck-architect.md` | Strategy deck outline |
| Slides JSON Producer | `agents/slides-json-producer.md` | `slides.json` |
| Visual Director | `agents/visual-director.md` | Visual direction |
| Verifier | `agents/verifier.md` | QA/verifier review |
| Export Packager | `agents/export-packager.md` | Client package manifest |

## Workflows

- `workflows/pipeline.md` - complete engagement workflow from intake to export.

## Templates

- `templates/client-intake-template.md` - intake normalization format.
- `templates/discovery-brief-template.md` - discovery brief format.
- `templates/market-research-template.md` - market research artifact.
- `templates/competitor-benchmark-template.md` - competitor benchmark matrix.
- `templates/service-architecture-template.md` - product/service architecture.
- `templates/strategy-synthesis-template.md` - synthesis memo.
- `templates/strategy-deck-outline-template.md` - deck outline and slide jobs.
- `templates/visual-direction-template.md` - visual system direction.
- `templates/verifier-review-template.md` - QA review.
- `templates/client-package-manifest-template.md` - export manifest.

## Schemas

- `schemas/slides.schema.json` - validates the slide JSON deliverable.
- `schemas/client-intake.schema.json` - optional structured intake validation.
- `schemas/verifier-review.schema.json` - optional structured QA summary validation.

## Example Client

Input:

- `inputs/client-example/client-intake.md`
- `inputs/client-example/research-seeds.md`
- `inputs/client-example/source-log.md`

Output:

- `outputs/client-example/discovery-brief.md`
- `outputs/client-example/market-research-summary.md`
- `outputs/client-example/competitor-benchmark.md`
- `outputs/client-example/service-architecture.md`
- `outputs/client-example/strategy-synthesis.md`
- `outputs/client-example/strategy-deck-outline.md`
- `outputs/client-example/slides.json`
- `outputs/client-example/visual-direction.md`
- `outputs/client-example/verifier-review.md`
- `outputs/client-example/client-package-manifest.md`

## Done Definition

An engagement is ready to package when:

- Intake, discovery, research, benchmark, architecture, synthesis, deck outline, visual direction, and slides JSON exist.
- `slides.json` validates against `schemas/slides.schema.json`.
- Verifier review has no blocking issues.
- Client package manifest lists every included artifact and known caveat.

# Agency Discovery OS

Agency Discovery OS is a markdown-based operating system for running client discovery, market understanding, strategy synthesis, and deck production with specialist agents. It is intentionally repository-native: agents read and write structured markdown and JSON artifacts that can be reviewed in pull requests before being packaged for a client.

This is not an application runtime. It is a working harness for coordinated research and strategy work.

## Repository Map

- `AGENTS.md` - global rules for every agent working in this repository.
- `HARNESS_INDEX.md` - the routing index for agents, workflows, templates, schemas, inputs, outputs, and tasks.
- `agents/` - specialist role instructions.
- `workflows/` - end-to-end and phase-specific operating procedures.
- `templates/` - reusable artifact formats.
- `schemas/` - machine-checkable JSON schemas.
- `inputs/client-example/` - sample source material for a fictional client.
- `outputs/client-example/` - sample completed outputs generated from the example input.
- `tasks/` - execution checklists and review queues.

## Core Flow

1. Intake captures the client, business context, decision makers, goals, constraints, and known source material.
2. Discovery converts intake notes into a shared brief, hypotheses, open questions, and required evidence.
3. Market research collects category dynamics, audience signals, trends, risks, and source-backed observations.
4. Competitor benchmarking compares positioning, offers, proof, channels, content, visual language, and gaps.
5. Product/service architecture clarifies the client's offer system, packaging logic, value ladder, and proof points.
6. Strategy synthesis turns evidence into a concise strategy narrative with choices, tensions, and recommendations.
7. Deck architecture creates the story spine, section flow, slide jobs, and talk track intent.
8. Slides JSON generation converts the approved outline into structured `slides.json`.
9. Visual direction defines layout principles, imagery, typography, color, and production constraints.
10. Verification reviews the work for evidence quality, logical consistency, client usefulness, and package readiness.
11. Export packages approved artifacts for client delivery.

## How To Run A Client

1. Copy `inputs/client-example/` to `inputs/<client-slug>/`.
2. Complete `client-intake.md`, `research-seeds.md`, and `source-log.md`.
3. Follow `workflows/pipeline.md` from phase 0 through phase 10.
4. Use the relevant agent instruction in `agents/` for each phase.
5. Write all deliverables to `outputs/<client-slug>/`.
6. Validate slide JSON against `schemas/slides.schema.json`.
7. Run verifier review before exporting a client package.

## Quality Bar

Every claim that influences strategy must be traceable to an input, source log item, direct client quote, or clearly labeled assumption. Outputs should be concise enough for executive review but detailed enough for a new strategist to understand the reasoning.

No file in this repository is meant to be a placeholder. If a new artifact is added, it should contain instructions, criteria, or a completed example that can be used immediately.

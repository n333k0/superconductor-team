# Agency Discovery OS

Agency Discovery OS is a markdown-based operating system for running client discovery, market understanding, strategy synthesis, and deck production with specialist agents. It is intentionally repository-native: agents read and write structured markdown and JSON artifacts that can be reviewed in pull requests before being packaged for a client.

The repository also includes a lightweight runnable layer and local web preview for completed client outputs.

## Repository Map

- `AGENTS.md` - global rules for every agent working in this repository.
- `HARNESS_INDEX.md` - the routing index for agents, workflows, templates, schemas, inputs, outputs, and tasks.
- `agents/` - specialist role instructions.
- `workflows/` - end-to-end and phase-specific operating procedures.
- `templates/` - reusable artifact formats.
- `schemas/` - machine-checkable JSON schemas.
- `inputs/client-example/` - sample source material for a fictional client.
- `outputs/client-example/` - sample completed outputs generated from the example input.
- `app/` - local Next.js preview for rendered client deck outputs.
- `scripts/` - validation, client scaffolding, and packaging helpers.
- `tasks/` - execution checklists and review queues.

## Core Flow

1. Intake captures the client, business context, decision makers, goals, constraints, and known source material.
2. Discovery converts intake notes into a shared brief, hypotheses, open questions, and required evidence.
3. Market research collects category dynamics, audience signals, trends, risks, and source-backed observations.
4. Competitor benchmarking compares positioning, offers, proof, channels, content, visual language, and gaps.
5. Product/service architecture clarifies the client's offer system, packaging logic, value ladder, and proof points.
6. Strategy synthesis turns evidence into a concise strategy narrative with choices, tensions, and recommendations.
7. Deck architecture creates the story spine, section flow, slide jobs, and talk track intent.
8. Slides JSON generation converts the readiness-reviewed outline into structured `slides.json`.
9. Visual direction defines layout principles, imagery, typography, color, and production constraints.
10. Verification reviews the work for evidence quality, logical consistency, client usefulness, and package readiness.
11. Export packages artifacts only for the audience permitted by verifier readiness.

## How To Run A Client

1. Copy `inputs/client-example/` to `inputs/<client-slug>/`.
2. Complete `client-intake.md`, `research-seeds.md`, and `source-log.md`.
3. Follow `workflows/pipeline.md` from phase 0 through phase 10.
4. Use the relevant agent instruction in `agents/` for each phase.
5. Write all deliverables to `outputs/<client-slug>/`.
6. Validate slide JSON against `schemas/slides.schema.json`.
7. Run verifier review before exporting a client package.

## Readiness Taxonomy

- `demo-ready`: useful for internal demonstration or proof-of-system only.
- `internal-draft-ready`: usable by the agency team but not client-facing yet.
- `client-ready`: safe to share externally with evidence, caveats, validation, and no unresolved blockers.
- `blocked`: not safe to package or share until blockers are resolved.

Verifier reviews must output `demo_readiness`, `internal_draft_readiness`, `client_readiness`, and `final_decision`. Export packaging must refuse client-ready packaging unless `client_readiness` is `client-ready`.

## Install

```bash
npm install
```

## Create A Client

Create a new client output folder with a lowercase slug:

```bash
npm run new-client -- <client-slug>
```

Example:

```bash
npm run new-client -- acme-health
```

Client slugs may contain lowercase letters, numbers, and hyphens. Each client lives in:

```text
outputs/<client-slug>/
```

The preview reads these files:

```text
outputs/<client-slug>/slides.json
outputs/<client-slug>/strategy-synthesis.md
outputs/<client-slug>/competitor-benchmark.md
outputs/<client-slug>/verifier-review.md
```

## Validate

Validate the runnable OS file contract:

```bash
npm run validate
```

Validate a client's slides:

```bash
npm run check-slides -- <client-slug>
```

Example:

```bash
npm run check-slides -- client-example
```

## Package Outputs

Package a client output bundle into `client-packages/<client-slug>/`:

```bash
npm run package-client -- <client-slug>
```

## Web Preview

Run the local preview:

```bash
npm run dev
```

Build the preview:

```bash
npm run build
```

The preview defaults to `smoke-test-003` if that output folder exists. Otherwise, it defaults to `client-example`. To choose a specific client, use the client selector in the UI or pass a query string:

```text
http://localhost:3000/?client=<client-slug>
```

The UI shows deck slides, readiness gate badges, evidence confidence badges, client-safe status, input warnings, verifier readiness summary, strategy synthesis, and competitor benchmark notes.

## Later Vercel Deployment

When ready to deploy:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Set the build command to `npm run build`.
5. Keep client output folders in `outputs/` for any clients that should be available in the deployed preview.

Because this preview reads local repository files at runtime, deployed client outputs should be committed or otherwise made available to the Vercel build/runtime environment.

## Quality Bar

Every claim that influences strategy must be traceable to an input, source log item, direct client quote, or clearly labeled assumption. Outputs should be concise enough for executive review but detailed enough for a new strategist to understand the reasoning.

No file in this repository is meant to be a placeholder. If a new artifact is added, it should contain instructions, criteria, or a completed example that can be used immediately.

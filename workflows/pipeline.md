# Agency Discovery OS Pipeline

Use this workflow for every client engagement.

## Phase 0: Engagement Setup

Owner: Discovery Lead

Inputs:

- `inputs/<client-slug>/client-intake.md`
- `inputs/<client-slug>/research-seeds.md`
- `inputs/<client-slug>/source-log.md`

Actions:

1. Confirm the client slug and output directory.
2. Confirm all raw source material is listed in the source log.
3. Identify missing intake fields that would block discovery.
4. Create or update the task list in `tasks/`.

Exit Criteria:

- Client inputs are organized.
- Open blockers are explicit.
- The discovery lead can write the discovery brief.

## Phase 1: Client Intake

Owner: Client Intake Agent

Actions:

1. Normalize raw client context.
2. Extract direct client language.
3. Separate confirmed facts, assumptions, and open questions.

Exit Criteria:

- Downstream agents can understand the client situation without reading raw notes first.

## Phase 2: Discovery

Owner: Discovery Lead Agent

Output:

- `outputs/<client-slug>/discovery-brief.md`

Actions:

1. Define the central discovery question.
2. State working hypotheses.
3. Assign evidence needs to research, benchmark, architecture, and client clarification.
4. Give each hypothesis a decision owner, evidence type, and confidence level.
5. Mark assumptions with stable `ASSUMPTION-###` IDs when they affect strategy choices.

Exit Criteria:

- Discovery question is specific.
- Hypotheses are testable.
- Evidence plan is actionable.
- The next agent can tell which evidence would confirm, change, or reject each hypothesis.

## Phase 3: Market Research

Owner: Market Researcher Agent

Output:

- `outputs/<client-slug>/market-research-summary.md`

Actions:

1. Research market dynamics, buyer context, category language, and opportunity spaces.
2. Log new sources in `inputs/<client-slug>/source-log.md`.
3. Convert findings into implications for positioning, offer design, and deck narrative.
4. Separate sourced findings, observed patterns, implications, and unknowns.
5. Flag claims that are internal-only, dated, unsourced, or not ready for client presentation.

Exit Criteria:

- Major findings have source labels.
- Implications are tied to strategy decisions.
- Each executive finding has at least one evidence reference and a concrete strategy implication.

## Phase 4: Competitor Benchmarking

Owner: Competitor Benchmark Agent

Output:

- `outputs/<client-slug>/competitor-benchmark.md`

Actions:

1. Compare direct competitors, substitutes, and status quo.
2. Include named competitors when public or client-supplied evidence exists; if only category-level evidence exists, mark the benchmark incomplete.
3. Identify table stakes, overused claims, proof gaps, buying-friction moves, and credible whitespace.
4. Recommend implications for strategy, offer architecture, deck narrative, and visual direction.

Exit Criteria:

- The benchmark includes strategic vulnerabilities and credible opportunities.
- The comparison set includes direct competitors, indirect substitutes, and status quo options with evidence references.

## Phase 5: Product/Service Architecture

Owner: Offering Architect Agent

Output:

- `outputs/<client-slug>/service-architecture.md`

Actions:

1. Map current offers.
2. Clarify audience, job, outcome, proof, and buying friction for each offer.
3. Recommend a coherent architecture or value ladder.

Exit Criteria:

- The offer system is clear enough to explain in a strategy deck.

## Phase 6: Strategy Synthesis

Owner: Strategy Synthesizer Agent

Output:

- `outputs/<client-slug>/strategy-synthesis.md`

Actions:

1. Resolve evidence into a strategic diagnosis.
2. Recommend audience priority, positioning, offer architecture, messaging pillars, and proof strategy.
3. State risks, mitigations, and decisions needed.

Exit Criteria:

- The strategy makes clear choices and rejects plausible alternatives.

## Phase 7: Deck Outline

Owner: Deck Architect Agent

Output:

- `outputs/<client-slug>/strategy-deck-outline.md`

Actions:

1. Build the story spine.
2. Define sections and slide jobs.
3. Write assertion slide titles.
4. Identify evidence, visual approach, and speaker intent for each slide.
5. Complete slide detail for every slide in the outline, not only representative slides.
6. Mark any slide with missing evidence, claims, or assets as `needs-input`.

Exit Criteria:

- The outline can be converted to `slides.json` without inventing new strategy.
- Each slide has one job, a specific assertion title, evidence refs, and production notes when inputs are missing.

## Phase 8: Visual Direction

Owner: Visual Director Agent

Output:

- `outputs/<client-slug>/visual-direction.md`

Actions:

1. Translate strategy into visual principles.
2. Define imagery, composition, typography, color, diagrams, and avoidances.
3. Map visual treatments to important deck moments.

Exit Criteria:

- Production guidance is concrete and differentiated from competitor conventions.

## Phase 9: Slides JSON

Owner: Slides JSON Producer Agent

Output:

- `outputs/<client-slug>/slides.json`

Actions:

1. Convert deck outline to schema-compliant JSON.
2. Add visual direction and production notes.
3. Validate against `schemas/slides.schema.json`.
4. Preserve evidence refs from the outline and do not replace them with broad artifact names when source IDs exist.
5. Run a claim check: every slide title, key message, and content block must be supported by the outline or source artifacts.

Exit Criteria:

- JSON validates.
- All slide IDs are unique.
- Draft or missing items are marked clearly.
- `needs-input` slides name the missing input in `production_notes`.

## Phase 10: Verification

Owner: Verifier Agent

Output:

- `outputs/<client-slug>/verifier-review.md`

Actions:

1. Check required artifacts.
2. Review evidence traceability.
3. Check consistency across outputs.
4. Validate `slides.json`.
5. Assign `demo_readiness`, `internal_draft_readiness`, `client_readiness`, and `final_decision`.
6. Block client packaging when any required artifact is missing, schema validation fails, core evidence is absent, or slides introduce unsupported claims.

Exit Criteria:

- Verifier review records all four readiness fields.
- `final_decision` is one of `demo-ready`, `internal-draft-ready`, `client-ready`, or `blocked`.
- Readiness requires documented validation results, not an intention to validate later.

## Phase 11: Client Package Export

Owner: Export Packager Agent

Output:

- `outputs/<client-slug>/client-package-manifest.md`

Actions:

1. Assemble artifacts only for the audience permitted by verifier readiness.
2. Note caveats and exclusions.
3. Define client and agency next steps.

Exit Criteria:

- Client-ready export is allowed only when `client_readiness` is `client-ready`.
- Any internal package is labeled `demo-ready` or `internal-draft-ready`.
- No package is produced when `final_decision` is `blocked`.

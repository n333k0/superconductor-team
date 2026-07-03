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

Exit Criteria:

- Discovery question is specific.
- Hypotheses are testable.
- Evidence plan is actionable.

## Phase 3: Market Research

Owner: Market Researcher Agent

Output:

- `outputs/<client-slug>/market-research-summary.md`

Actions:

1. Research market dynamics, buyer context, category language, and opportunity spaces.
2. Log new sources in `inputs/<client-slug>/source-log.md`.
3. Convert findings into implications for positioning, offer design, and deck narrative.

Exit Criteria:

- Major findings have source labels.
- Implications are tied to strategy decisions.

## Phase 4: Competitor Benchmarking

Owner: Competitor Benchmark Agent

Output:

- `outputs/<client-slug>/competitor-benchmark.md`

Actions:

1. Compare direct competitors, substitutes, and status quo.
2. Identify table stakes, overused claims, proof gaps, and credible whitespace.
3. Recommend implications for strategy and visual direction.

Exit Criteria:

- The benchmark includes strategic vulnerabilities and credible opportunities.

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

Exit Criteria:

- The outline can be converted to `slides.json` without inventing new strategy.

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

Exit Criteria:

- JSON validates.
- All slide IDs are unique.
- Draft or missing items are marked clearly.

## Phase 10: Verification

Owner: Verifier Agent

Output:

- `outputs/<client-slug>/verifier-review.md`

Actions:

1. Check required artifacts.
2. Review evidence traceability.
3. Check consistency across outputs.
4. Validate `slides.json`.
5. Assign readiness decision.

Exit Criteria:

- No blockers remain, or the package is explicitly blocked.

## Phase 11: Client Package Export

Owner: Export Packager Agent

Output:

- `outputs/<client-slug>/client-package-manifest.md`

Actions:

1. Assemble approved artifacts.
2. Note caveats and exclusions.
3. Define client and agency next steps.

Exit Criteria:

- Client package is auditable and ready to send.

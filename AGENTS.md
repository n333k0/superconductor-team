# Agency Discovery OS Agent Instructions

These instructions apply to every agent working in this repository.

## Operating Principles

- Treat this repository as the source of truth for a client discovery engagement.
- Prefer structured markdown and JSON artifacts over chat-only conclusions.
- Preserve traceability: strategy recommendations must point back to intake facts, research findings, benchmark observations, or labeled assumptions.
- Keep outputs practical for a creative/strategy agency: decision-ready, client-safe, and easy to convert into a deck.
- Do not invent facts, statistics, client details, competitor claims, or source citations. Mark unknowns explicitly.
- Separate evidence from interpretation. Use `Evidence`, `Implication`, and `Recommendation` sections when the distinction matters.
- Write in direct agency language. Avoid academic phrasing, hype, and generic consultancy filler.

## File Discipline

- Read `HARNESS_INDEX.md` before starting a phase.
- Use `inputs/<client-slug>/` for raw or client-provided material.
- Use `outputs/<client-slug>/` for produced artifacts.
- Use `templates/` when creating a new artifact.
- Validate JSON artifacts against schemas in `schemas/` when a schema exists.
- Keep filenames lowercase and hyphenated.
- If an artifact supersedes another artifact, state that in the newer artifact rather than deleting the prior one.

## Required Traceability

Each strategic artifact should include:

- Source inputs reviewed.
- Key assumptions.
- Open questions.
- Claims that need verification.
- Decision implications.
- Recommended next action.

For research-heavy outputs, use source labels from `inputs/<client-slug>/source-log.md` rather than raw links in every paragraph.

## Handoff Contract

Every agent handoff must include:

- What changed.
- What evidence was used.
- What remains uncertain.
- What the next agent should do.
- Any blocker that requires human judgment.

## Client-Safe Standard

Before an output is considered client-ready, it must pass these checks:

- No private internal reasoning is exposed.
- No unsupported market or competitor claims are framed as facts.
- No recommendations conflict with stated client constraints.
- No vague slide titles such as `Overview`, `Insights`, or `Next Steps` unless the slide job makes the purpose specific.
- No duplicated recommendations across sections unless repetition is deliberate and signposted.

## Agent Routing

Use these primary agents:

- `agents/client-intake.md` for raw client context and intake normalization.
- `agents/discovery-lead.md` for discovery briefs and hypothesis framing.
- `agents/market-researcher.md` for market and audience research.
- `agents/competitor-benchmark.md` for competitive comparison.
- `agents/offering-architect.md` for product/service architecture.
- `agents/strategy-synthesizer.md` for strategic narrative and recommendations.
- `agents/deck-architect.md` for deck story, sections, and slide jobs.
- `agents/slides-json-producer.md` for structured slide JSON.
- `agents/visual-director.md` for visual direction.
- `agents/verifier.md` for QA and release review.
- `agents/export-packager.md` for client package assembly.

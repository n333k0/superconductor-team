# Verifier Review

Client slug: `aqualoop-hospitality`
Date: 2026-07-03
Verifier: Verifier Agent

## Readiness Gates

demo_readiness: `demo-ready`
internal_draft_readiness: `internal-draft-ready`
client_readiness: `blocked`
final_decision: `internal-draft-ready`

## Artifact Checklist

| Artifact | Exists | Review Notes |
| --- | --- | --- |
| Discovery brief | Yes | Central question and hypotheses are clear and caveated. |
| Market research summary | Yes | Public sources and unknowns are separated. |
| Competitor benchmark | Yes | Named competitors/substitutes included with vendor-source caveats. |
| Service architecture | Yes | Assessment-to-pilot ladder is coherent and marked as needing validation. |
| Strategy synthesis | Yes | Makes a specific recommendation without claiming proof. |
| Strategy deck outline | Yes | Complete 12-slide outline with metadata and blocked slides. |
| Visual direction | Yes | Concrete production guidance and asset needs. |
| Slides JSON | Yes | Schema-shaped JSON created for validation. |
| Client package manifest | Yes | Readiness and caveats documented. |

## Findings

| Severity | File/Section | Finding | Required Fix |
| --- | --- | --- | --- |
| Blocker | `outputs/aqualoop-hospitality/slides.json` S06 | AquaLoop naming is not legally cleared and AQUALOOP appears in the greywater market. | Complete legal/trademark review before external brand use. |
| Blocker | `outputs/aqualoop-hospitality/slides.json` S08 | Product architecture is not technically validated. | Run engineering feasibility and cost/installation assessment. |
| Blocker | `outputs/aqualoop-hospitality/slides.json` S09 | Buyer ownership and procurement path are unvalidated. | Conduct hotel buyer and facilities interviews. |
| Material | `outputs/aqualoop-hospitality/market-research-summary.md` | No client property economics are available. | Collect water bills, occupancy, tariff, reuse-demand, capex, opex, and maintenance assumptions. |
| Material | `outputs/aqualoop-hospitality/competitor-benchmark.md` | Vendor claims are not independently validated. | Add dated source captures and independent comparison where available. |

## Evidence Traceability

| Claim Checked | File/Section | Evidence Ref | Result | Notes |
| --- | --- | --- | --- | --- |
| Hotels are a credible first segment to investigate. | Market research / S03 | `SRC-001`, `SRC-002` | pass with caveat | Public hotel water-efficiency context supports investigation, not economics. |
| Regulatory pathway is jurisdiction-specific. | Discovery brief / S04 | `SRC-013`, `SRC-014` | pass | Local examples show specificity; launch market is missing. |
| Named vendors already occupy greywater/reuse language. | Competitor benchmark / S05 | `SRC-006`, `SRC-008`, `SRC-009`, `SRC-010` | pass with caveat | Vendor-source review only. |
| Assessment-to-pilot should precede system sale. | Service architecture / S07 | `outputs/aqualoop-hospitality/service-architecture.md` | caveat | Strategic recommendation; needs buyer and economics validation. |
| Client-ready export is blocked. | Manifest / S12 | `outputs/aqualoop-hospitality/client-package-manifest.md` | pass | Readiness gates and blockers are explicit. |

## Strategy Consistency

The discovery brief, research summary, benchmark, architecture, synthesis, outline, visual direction, slides JSON, verifier review, and manifest consistently frame hotels as a validation wedge rather than a proven launch strategy.

## Slides JSON Validation

Schema used: `schemas/slides.schema.json`

Validation method: `npm run check-slides -- aqualoop-hospitality` and `npx --yes ajv-cli@5.0.0 validate --spec=draft2020 --strict=false -s schemas/slides.schema.json -d outputs/aqualoop-hospitality/slides.json`.

Result: Passed. `check-slides` passed, and AJV reported `outputs/aqualoop-hospitality/slides.json valid`.

Notes: AJV ignored the schema's `date` format because `ajv-formats` is not installed, but structural schema requirements, enums, conditional requirements, and evidence-ref patterns passed. `slides.json` includes required slide metadata: `evidence_confidence`, `client_safe`, `readiness_gate`, and `needs_input_reason` when a slide is not client-safe or marked needs-input.

## Benchmark Quality

Named competitors reviewed: Epic Cleantec, Hydraloop, Greyter, Orbital Systems, INTEWA AQUALOOP.

Status quo included: Yes.

Category-level or placeholder claims: Yes; low-flow fixtures, conservation programs, and status quo are category-level.

Client-ready benchmark decision: Not client-ready until dated source captures, independent validation, and direct buyer relevance are added.

## Deck And Slides Quality

Outline completeness: Complete details for S01-S12.

Vague or label-only slide titles: None found.

Slides with unsupported claims: No unsupported quantified claims found; strategic recommendations are caveated as assumptions where needed.

Slides marked `needs-input`: S06, S08, S09.

Blocked slides: S06, S08, S09.

## Readiness Notes

The package is useful for internal strategy review and client/investor discovery planning, but not for client-ready export. The strongest output is the proof roadmap; the weakest areas are brand clearance, engineering architecture, buyer validation, jurisdiction selection, and property economics.

## Final Decision

final_decision: `internal-draft-ready`

Rationale: The package is complete, coherent, evidence-caveated, and suitable for internal draft use. Client-ready export remains blocked by missing legal, technical, regulatory, buyer, and economic evidence.

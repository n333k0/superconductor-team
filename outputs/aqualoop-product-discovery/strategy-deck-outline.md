# Strategy Deck Outline

Client slug: `aqualoop-product-discovery`
Date: 2026-07-03
Deck architect: Deck Architect Agent
Intended audience: Internal agency team, client discovery sponsor, and investor/partner-readiness reviewers.
Decision the deck must unlock: Whether AquaLoop should validate hospitality first, which assumptions drive the next sprint, and what is safe versus blocked for external use.

## Story Spine

1. Situation: Water reuse is a strategic building issue, but AquaLoop is still an undefined product concept.
2. Tension: Hospitality is promising, but architecture, code, buyer, maintenance, and economics are not proven.
3. Evidence: Public category sources, standards context, local regulatory examples, and vendor benchmarks support the opportunity space but not AquaLoop-specific claims.
4. Strategic choice: Treat hospitality as the first validation wedge and package the offering as assessment-to-pilot.
5. Offer system: Move from opportunity assessment to jurisdiction/architecture fit to managed pilot before productized system.
6. Activation path: Select launch market, validate buyer and property data, run engineering/regulatory review, then pilot and measure.

## Section Flow

| Section | Slide Range | Job |
| --- | --- | --- |
| Thesis | S01-S02 | Establish the recommendation and macro water-reuse context without overclaiming. |
| Market Choice | S03-S05 | Compare segments and clarify the hospitality decision chain. |
| Product Reality | S06-S08 | Show architecture options and technical/installation risks. |
| Strategy | S09-S10 | Map competitive landscape and positioning territory. |
| Validation | S11-S13 | Define MVP, proof roadmap, and readiness gates. |

## Slide Outline

| Slide ID | Section | Assertion Title | Slide Job | Decision It Supports | Key Evidence | Visual Approach | Status | Evidence Confidence | Client Safe | Readiness Gate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S01 | Thesis | AquaLoop should be framed as a hospitality water-reuse validation system | State executive thesis. | Overall strategic direction. | `CLIENT-001`, synthesis | Dark editorial title card with readiness badges. | ready-for-design | internal-only | false | internal-draft-ready |
| S02 | Thesis | Water reuse is becoming a building strategy issue, but claims must stay local and proven | Establish category context. | Evidence posture. | `SRC-003`, `SRC-004`, `SRC-007`, `SRC-008` | Source-to-use context cards. | ready-for-design | external-sourced | true | internal-draft-ready |
| S03 | Market Choice | Hospitality is the strongest first wedge to validate, not a proven launch market | Explain why hotels lead. | Segment priority. | `SRC-001`, `SRC-002`, `SRC-013`, `CLIENT-001` | Pale blue opportunity card grid. | ready-for-design | external-sourced | true | internal-draft-ready |
| S04 | Market Choice | Segment priority depends on source-demand fit, buyer access, and installability | Compare candidate segments. | First market selection. | market research | Matrix. | ready-for-design | assumption | false | internal-draft-ready |
| S05 | Market Choice | The hotel buying decision is a chain, not a single persona | Clarify buyer uncertainty. | Research plan and messaging. | buyer strategy | Stakeholder map. | needs-input | needs-validation | false | blocked |
| S06 | Product Reality | Product architecture should stay options-based until property and code inputs narrow it | Compare architecture options. | Product strategy. | product architecture | Option cards. | needs-input | needs-validation | false | blocked |
| S07 | Product Reality | Technical feasibility hinges on source, treatment, storage, monitoring, and fail-safe design | Surface technical unknowns. | Engineering sprint. | technical questions, regulatory risks | Dark risk grid. | needs-input | needs-validation | false | blocked |
| S08 | Product Reality | Installation and maintenance risk may decide the winning architecture | Put operations at center. | MVP scope and service model. | regulatory/install risks, manufacturing feasibility | Maintenance risk cards. | needs-input | needs-validation | false | blocked |
| S09 | Strategy | Competitors own generic greywater language, so AquaLoop needs proof-led specificity | Differentiate landscape. | Positioning. | `SRC-016` to `SRC-023`, benchmark | Competitor territory map. | ready-for-design | external-sourced | true | internal-draft-ready |
| S10 | Strategy | AquaLoop should own code-first hospitality reuse validation | Define positioning. | Narrative and offer architecture. | strategy synthesis | Positioning territory card. | ready-for-design | assumption | false | internal-draft-ready |
| S11 | Validation | The first MVP should validate one property loop before productizing the system | Define MVP. | Pilot design. | product requirements, architecture | Process timeline. | needs-input | needs-validation | false | blocked |
| S12 | Validation | Client-ready claims require a staged proof roadmap | Define proof gates. | Validation roadmap. | synthesis, verifier logic | Proof ladder. | ready-for-design | internal-only | false | internal-draft-ready |
| S13 | Validation | The package is internal-draft-ready, with external use blocked by named evidence gaps | Close readiness. | Handoff and next sprint. | verifier review, manifest | Readiness ledger. | ready-for-design | confirmed | true | internal-draft-ready |

## Slide Detail

### S01: AquaLoop should be framed as a hospitality water-reuse validation system

Purpose: Introduce the executive thesis.

Key message: The most credible near-term strategy is not to claim AquaLoop is a finished greywater product; it is to make AquaLoop the disciplined pathway for validating hotel reuse economics, architecture, and code readiness.

Content blocks:

- Thesis: Hospitality is the leading validation wedge.
- Guardrail: Savings, ROI, certification, installation, and maintenance claims remain blocked.
- Strategic move: Sell assessment-to-pilot before selling a system.

Evidence refs: `CLIENT-001`, `outputs/aqualoop-product-discovery/strategy-synthesis.md`

Evidence confidence: internal-only

Client safe: false

Needs input reason: The thesis depends on unvalidated buyer, technical, regulatory, economic, and legal inputs.

Readiness gate: internal-draft-ready

Recommended visual: Dark editorial title card, oversized slide number, pale blue proof gate panel.

Speaker intent: Establish confidence and honesty in the first minute.

Production notes: Keep "validation system" language prominent; avoid finished-product visuals.

Missing inputs:

- Buyer interviews.
- Engineering review.
- Launch geography.
- Property economics.

Verifier risk if unresolved: Client-ready package remains blocked.

### S02: Water reuse is becoming a building strategy issue, but claims must stay local and proven

Purpose: Ground the opportunity in public category evidence.

Key message: Onsite non-potable reuse is a recognized building-water category, but approval and claims depend on local rules, end uses, and treatment requirements.

Content blocks:

- Category context: Public and association sources describe water reuse and onsite non-potable reuse.
- Proof posture: Standards and local programs are pathways to investigate, not proof that AquaLoop complies.
- Implication: Geography is a strategy choice.

Evidence refs: `SRC-003`, `SRC-004`, `SRC-007`, `SRC-008`, `SRC-009`

Evidence confidence: external-sourced

Client safe: true

Needs input reason: None.

Readiness gate: internal-draft-ready

Recommended visual: Three cards: category, code, claim discipline.

Speaker intent: Explain why the opportunity is real enough to explore but not broad enough to overclaim.

Production notes: Keep local-rule caveat visible.

Missing inputs:

- Launch geography.

Verifier risk if unresolved: Cannot become client-ready regulatory slide.

### S03: Hospitality is the strongest first wedge to validate, not a proven launch market

Purpose: Make the hotel recommendation precise.

Key message: Hotels concentrate recurring water-use contexts, operational stakeholders, and sustainability narrative, making them the best current validation wedge, but not yet a proven buyer segment.

Content blocks:

- Why hospitality rises: repeated water uses, operations teams, sustainability story.
- Why it is not proven: no property economics, buyer interviews, or retrofit review.
- Decision: test full-service hotels/resorts first.

Evidence refs: `CLIENT-001`, `SRC-001`, `SRC-002`, `SRC-013`

Evidence confidence: external-sourced

Client safe: true

Needs input reason: None.

Readiness gate: internal-draft-ready

Recommended visual: Pale blue opportunity panel with three proof-needed cards.

Speaker intent: Prevent the audience from reading "recommended" as "validated."

Production notes: Avoid hotel-market sizing or savings claims.

Missing inputs:

- Pilot property data.
- Buyer interviews.

Verifier risk if unresolved: Keep as internal draft, not client-ready segment proof.

### S04: Segment priority depends on source-demand fit, buyer access, and installability

Purpose: Compare the candidate first markets.

Key message: Hospitality leads the current matrix, but multifamily/new-build and student housing remain credible adjacent tests if buyer access or retrofit feasibility fails.

Content blocks:

- Segment matrix: hotels, resorts, multifamily, student housing, wellness, commercial, public.
- Criteria: source-demand fit, buyer access, install complexity, sustainability pressure, procurement speed.
- Recommendation: prioritize hotel/resort validation; keep multifamily as second path.

Evidence refs: `outputs/aqualoop-product-discovery/market-research-summary.md#segment-comparison`, `ASSUMPTION-001`, `ASSUMPTION-003`

Evidence confidence: assumption

Client safe: false

Needs input reason: Segment scoring is a strategic hypothesis without buyer interviews or property economics.

Readiness gate: internal-draft-ready

Recommended visual: Matrix with readiness colors and "needs validation" flags.

Speaker intent: Show the client that hospitality was challenged against alternatives.

Production notes: Label scoring as internal hypothesis.

Missing inputs:

- Segment interviews.
- Segment-specific property data.

Verifier risk if unresolved: Cannot be used externally as a market-selection proof.

### S05: The hotel buying decision is a chain, not a single persona

Purpose: Prevent oversimplified buyer targeting.

Key message: AquaLoop likely needs owner/asset sponsorship, operations acceptance, facilities approval, MEP review, and AHJ/code confidence before a pilot can proceed.

Content blocks:

- Economic sponsor: owner, asset manager, corporate operations.
- Technical veto: facilities, MEP, AHJ/code reviewer.
- Narrative sponsor: sustainability/ESG.

Evidence refs: `ASSUMPTION-005`, `outputs/aqualoop-product-discovery/buyer-and-user-strategy.md`

Evidence confidence: needs-validation

Client safe: false

Needs input reason: Buyer chain and budget owner require interviews with target hotels and technical stakeholders.

Readiness gate: blocked

Recommended visual: Decision-chain map with veto points.

Speaker intent: Make buyer validation a core next-sprint activity.

Production notes: Add buyer quotes only after interviews.

Missing inputs:

- Hotel buyer interviews.
- Facilities/MEP interviews.

Verifier risk if unresolved: Buyer slide remains blocked.

### S06: Product architecture should stay options-based until property and code inputs narrow it

Purpose: Show product choices without premature commitment.

Key message: Per-room, centralized, semi-centralized, retrofit, new-build, and managed-service models remain possible; the first sprint should eliminate options through evidence.

Content blocks:

- Architecture options: per-room, centralized, floor-by-floor, retrofit, new-build, service plus hardware.
- Decision variables: source/end use, code, plumbing access, maintenance, economics.
- Recommendation: compare centralized and semi-centralized first, but keep this as an assumption.

Evidence refs: `ASSUMPTION-002`, `outputs/aqualoop-product-discovery/product-architecture.md`, `outputs/aqualoop-product-discovery/technical-questions.md`

Evidence confidence: needs-validation

Client safe: false

Needs input reason: No engineering feasibility, site survey, or selected source/end-use loop exists.

Readiness gate: blocked

Recommended visual: Large rounded option cards with "validation required" badges.

Speaker intent: Demonstrate product seriousness while resisting false certainty.

Production notes: Do not show a polished device render.

Missing inputs:

- Engineering review.
- Property/plumbing data.
- Launch jurisdiction.

Verifier risk if unresolved: Architecture claim remains blocked.

### S07: Technical feasibility hinges on source, treatment, storage, monitoring, and fail-safe design

Purpose: Name technical unknowns that could break the product.

Key message: The technical risk is not just treatment; it is the full operating system from source capture through fail-safe behavior.

Content blocks:

- Unknowns: source quality, treatment, storage, controls, monitoring, fail-safe, odor, cross-connection.
- Proof needed: engineering concept, standard review, pilot instrumentation.
- Decision: define one source-to-use loop before MVP build.

Evidence refs: `outputs/aqualoop-product-discovery/technical-questions.md`, `SRC-005`, `SRC-006`, `SRC-012`

Evidence confidence: needs-validation

Client safe: false

Needs input reason: Technical feasibility requires engineering, standards, and pilot validation.

Readiness gate: blocked

Recommended visual: Dark technical risk grid.

Speaker intent: Show technical depth without faking an engineering answer.

Production notes: Do not imply a treatment technology has been selected.

Missing inputs:

- Treatment technology assessment.
- Engineering partner review.

Verifier risk if unresolved: Technical slide remains blocked.

### S08: Installation and maintenance risk may decide the winning architecture

Purpose: Tie operations to product architecture.

Key message: Hotels may reject a theoretically efficient system if it disrupts guests, burdens facilities, or creates service uncertainty.

Content blocks:

- Installation risks: plumbing access, space, shutdowns, cross-connections, commissioning.
- Maintenance risks: consumables, filters, monitoring, alarms, service responsibility.
- Product implication: managed service may be part of the product, not an add-on.

Evidence refs: `outputs/aqualoop-product-discovery/regulatory-and-installation-risks.md`, `outputs/aqualoop-product-discovery/manufacturing-feasibility.md`, `ASSUMPTION-005`

Evidence confidence: needs-validation

Client safe: false

Needs input reason: Installation and maintenance burden must be validated with site surveys, facilities interviews, and engineering review.

Readiness gate: blocked

Recommended visual: Risk module grid with service model callout.

Speaker intent: Reframe "maintenance" as go-to-market risk.

Production notes: Use "may" and "requires validation"; no service-interval claims.

Missing inputs:

- Site survey.
- Facilities interview.
- Service model estimate.

Verifier risk if unresolved: Operational feasibility remains blocked.

### S09: Competitors own generic greywater language, so AquaLoop needs proof-led specificity

Purpose: Explain the competitive landscape.

Key message: Named vendors and adjacent solutions already occupy water-reuse territory; AquaLoop should not compete on generic "save water" language.

Content blocks:

- Named vendors: Epic Cleantec, Hydraloop, Greyter, Orbital Systems, INTEWA AQUALOOP, ReWater, Nexus eWater.
- Substitutes: fixtures, conservation programs, leak detection, status quo.
- Whitespace: hospitality-specific, code-first, proof-led validation.

Evidence refs: `SRC-016`, `SRC-018`, `SRC-019`, `SRC-020`, `SRC-021`, `outputs/aqualoop-product-discovery/competitor-benchmark.md`

Evidence confidence: external-sourced

Client safe: true

Needs input reason: None.

Readiness gate: internal-draft-ready

Recommended visual: Competitive territory matrix with vendor-claim caveat.

Speaker intent: Use competitors to prove category occupancy and sharpen positioning.

Production notes: Vendor claims must be labeled as vendor positioning.

Missing inputs:

- Dated source captures.
- Independent validation.

Verifier risk if unresolved: Keep as internal draft, not client-ready benchmark.

### S10: AquaLoop should own code-first hospitality reuse validation

Purpose: Define positioning territory.

Key message: The credible story is "validate the right water loop for the property" rather than "buy our universal greywater system."

Content blocks:

- Position: code-first hospitality reuse validation.
- Proof: source-to-use fit, architecture, local pathway, operations, measured impact.
- Avoid: guaranteed savings, universal compliance, plug-and-play retrofit.

Evidence refs: `outputs/aqualoop-product-discovery/strategy-synthesis.md`, `outputs/aqualoop-product-discovery/product-architecture.md`, `ASSUMPTION-004`

Evidence confidence: assumption

Client safe: false

Needs input reason: Positioning depends on buyer validation and engineering/regulatory proof.

Readiness gate: internal-draft-ready

Recommended visual: Positioning territory card with "say / do not say" panel.

Speaker intent: Give the agency a clear narrative direction while marking validation needs.

Production notes: Keep "validation" in headline copy.

Missing inputs:

- Buyer reaction to positioning.
- Legal review of name.

Verifier risk if unresolved: Positioning remains internal-only.

### S11: The first MVP should validate one property loop before productizing the system

Purpose: Define first MVP/pilot strategy.

Key message: The MVP should validate a single source-to-use loop, one jurisdiction path, one architecture, and one buyer decision chain before building a commercial product.

Content blocks:

- MVP scope: property baseline, source/demand map, code path, architecture concept, monitoring plan.
- Pilot proof: water balance, reliability, maintenance, guest/operations impact.
- Output: evidence to decide scale/no-scale.

Evidence refs: `outputs/aqualoop-product-discovery/product-requirements.md`, `outputs/aqualoop-product-discovery/product-architecture.md`, `outputs/aqualoop-product-discovery/regulatory-and-installation-risks.md`

Evidence confidence: needs-validation

Client safe: false

Needs input reason: MVP scope requires selected property, launch geography, engineering partner, and pilot sponsor.

Readiness gate: blocked

Recommended visual: Process timeline from baseline to pilot decision.

Speaker intent: Make the next sprint actionable.

Production notes: Do not show fake pilot metrics.

Missing inputs:

- Pilot property.
- Launch geography.
- Engineering partner.

Verifier risk if unresolved: MVP slide remains blocked.

### S12: Client-ready claims require a staged proof roadmap

Purpose: Define what proof must be collected.

Key message: Each desired claim has a proof gate; until the gate is passed, the claim should remain internal, caveated, or blocked.

Content blocks:

- Proof gates: market, buyer, technical, regulatory, economic, operational, competitive, legal.
- Claim controls: safe now, internal-only, needs-input, blocked.
- Next sprint: research and feasibility workstream.

Evidence refs: `outputs/aqualoop-product-discovery/strategy-synthesis.md`, `outputs/aqualoop-product-discovery/regulatory-and-installation-risks.md`, `outputs/aqualoop-product-discovery/manufacturing-feasibility.md`

Evidence confidence: internal-only

Client safe: false

Needs input reason: The roadmap is internal planning until owners, data sources, and validation budget are approved.

Readiness gate: internal-draft-ready

Recommended visual: Proof ladder with blocked claim cards.

Speaker intent: Convert blockers into an action plan.

Production notes: Include "Proof needed" badges.

Missing inputs:

- Validation budget and owner assignment.

Verifier risk if unresolved: Roadmap can stay internal draft.

### S13: The package is internal-draft-ready, with external use blocked by named evidence gaps

Purpose: Close with readiness status.

Key message: The package is complete enough for internal strategy and demo use, but client-ready use is blocked by technical, regulatory, buyer, economic, legal, and proof gaps.

Content blocks:

- Ready: internal discovery package and web deck preview.
- Blocked: claims, architecture, buyer proof, legal name, property economics, regulatory pathway.
- Next: launch geography, property data, interviews, engineering/regulatory review, pilot spec.

Evidence refs: `outputs/aqualoop-product-discovery/verifier-review.md`, `outputs/aqualoop-product-discovery/client-package-manifest.md`

Evidence confidence: confirmed

Client safe: true

Needs input reason: None.

Readiness gate: internal-draft-ready

Recommended visual: Readiness ledger with blocked and needs-input counts.

Speaker intent: End with honest momentum and clear next actions.

Production notes: Align with verifier review after validation commands run.

Missing inputs:

- None for internal readiness; client-ready blockers remain.

Verifier risk if unresolved: Final slide must match verifier findings.

## Open Production Questions

| Slide ID | Question | Owner | Impact |
| --- | --- | --- | --- |
| S05 | Who owns approval and budget in target hotels? | Research/client | Blocks buyer narrative. |
| S06 | Which architecture is technically plausible? | Engineering | Blocks product claims. |
| S07 | Which treatment and monitoring path applies? | Engineering/regulatory | Blocks technical claims. |
| S08 | What installation and maintenance burden is acceptable? | Facilities/MEP | Blocks operational claim. |
| S11 | Which property and geography should anchor the MVP? | Client | Blocks pilot strategy. |

## Outline Quality Check

- Slide titles communicate the argument without body copy: Yes.
- Every slide has one distinct job: Yes.
- Every slide has evidence refs: Yes.
- No slide introduces strategy absent from synthesis: Yes.
- `needs-input` slides identify the missing input and client-readiness impact: Yes.
- Every slide has evidence confidence, client safety, and readiness gate metadata: Yes.
- `draft` and `needs-input` slides include `needs_input_reason`: Yes.

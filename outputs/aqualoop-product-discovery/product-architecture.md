# Product Architecture

Client slug: `aqualoop-product-discovery`
Date: 2026-07-03
Owner: Offering Architect Agent

## Architecture Diagnosis

AquaLoop is not ready to choose a single product architecture. The right architecture depends on source water, reuse demand, property type, plumbing access, local code, treatment requirements, service model, and buyer economics (`CLIENT-001`, `ASSUMPTION-002`, `SRC-005` to `SRC-012`).

The product strategy should therefore start as an assessment-to-pilot architecture: a process and proof system that narrows the physical architecture only after property and regulatory inputs are known.

## Architecture Options

| Option | What It Means | Best-Fit Hypothesis | Advantages | Risks / Unknowns | Readiness |
| --- | --- | --- | --- | --- | --- |
| Per-room modular unit | Capture and reuse water close to each room or fixture. | Premium rooms, shower-specific use cases, highly modular pilots. | Understandable unit economics; minimal central plant concept. | Guest-space disruption, maintenance scale, noise, aesthetics, drain/plumbing access, code path. | needs-validation |
| Centralized building system | Collect greywater from multiple sources into one treatment/storage/reuse system. | Larger hotels, new-builds, major renovations, properties with plant space. | Operationally coherent; easier monitoring/service concentration. | Retrofitting risers and drains may be difficult; high capex; single-point operational dependency. | needs-validation |
| Floor-by-floor semi-centralized system | Capture and treat/reuse by floor, tower, or zone. | Mid-rise hotels, phased retrofits, properties with constrained plant space. | Balances scale and modularity; may reduce plumbing runs. | More equipment points than centralized; code/maintenance complexity. | needs-validation |
| Retrofit kit | Packaged components installed into existing property plumbing. | Existing hotels with accessible plumbing and strong economics. | Strong market if feasible; faster adoption story. | "Retrofit" claim is risky without surveys; property variability may be high. | blocked until engineering |
| New-build specification product | Designed into plumbing, MEP, and operations from the start. | Developers, new hotels, multifamily, student housing. | Lower disruption; easier system integration. | Longer sales cycle; requires specification influence; slower proof. | needs-validation |
| Service plus hardware | Hardware bundled with assessment, monitoring, maintenance, and reporting. | Operators who do not want to manage treatment systems. | Reduces operational anxiety; creates recurring revenue. | Requires service capability, liability clarity, and field operations. | needs-validation |
| Managed pilot | Limited deployment with heavy monitoring and claim controls. | First proof property. | Best fit for current evidence level. | Not a scalable product yet; requires careful scope. | internal-draft-ready |

## Source-To-Use Matrix

| Source Candidate | Reuse Candidate | Strategic Fit | Main Validation Need |
| --- | --- | --- | --- |
| Guest showers | Toilet flushing, cleaning, irrigation where allowed | Strong intuitive hotel story | Plumbing access, treatment path, storage, guest perception |
| Bathroom sinks | Toilet flushing or cleaning where allowed | May add volume to shower source | Source quality and capture complexity |
| Laundry | Cleaning, irrigation, process reuse where allowed | Potentially high-volume in full-service hotels | Water chemistry, treatment burden, operational integration |
| Condensate or other alternate sources | Irrigation/cooling/process where allowed | Adjacent opportunity | Category scope and code pathway |

## Recommended Architecture Strategy

Do not pick a finished system yet. Use a three-layer architecture ladder:

| Layer | Offer | Role In System | Buyer Trigger | Deliverables | Proof Needed |
| --- | --- | --- | --- | --- | --- |
| Entry | Water Reuse Opportunity Assessment | Establish property baseline and reuse fit. | Property wants to understand water exposure or sustainability opportunity. | Source/demand map, stakeholder map, constraints register, data request. | Water bills, occupancy, fixture/source data, approved uses. |
| Core | Jurisdiction + Architecture Fit Study | Narrow architecture options and code pathway. | Property is willing to explore pilot feasibility. | Option matrix, installability review, jurisdiction assumptions, service model choices. | MEP/regulatory review, cost ranges, maintenance model. |
| Pilot | AquaLoop Managed Pilot Specification | Define a controlled MVP and proof plan. | Property or partner wants evidence before scale. | Pilot scope, monitoring plan, claim-gate dashboard, risk register. | Engineering design, AHJ input, procurement path, measured data. |
| Expansion | Productized System / Managed Service | Commercial model after proof. | Validated pilot and repeatable architecture. | Standardized components, service playbook, reporting, partner channel. | Pilot outcomes, certification path, unit economics, manufacturing plan. |

## Architecture Recommendation

For internal strategy, prioritize centralized and semi-centralized hotel architectures as the first engineering comparison because they may fit property operations better than distributed per-room maintenance. This is an `ASSUMPTION-002` recommendation and remains blocked for client-ready use until an engineer reviews plumbing, treatment, storage, access, service, and code constraints.

## Naming And Packaging Notes

- Use descriptive names before brand claims: "Hospitality Water Reuse Assessment," "Architecture Fit Study," and "Managed Reuse Pilot."
- Keep `AquaLoop` as an internal project name until legal review (`SRC-021`).
- Avoid calling any architecture "plug-and-play," "certified," or "ready to install."

## Sales Narrative

The first sale is not the system. The first sale is decision confidence: identify where reuse might make sense, prove whether the property and jurisdiction can support it, and define a pilot that measures outcomes before savings or ESG claims are made.

## Risks And Dependencies

- Launch geography selection.
- Engineering feasibility.
- Plumbing access and retrofit constraints.
- Treatment/certification pathway.
- Maintenance ownership.
- Buyer willingness to pay.
- Pilot property access.
- Legal naming review.

## Handoff To Strategy

Most important architecture decision: treat product architecture as the core discovery object. The MVP should validate architecture fit before AquaLoop is framed as a finished product.

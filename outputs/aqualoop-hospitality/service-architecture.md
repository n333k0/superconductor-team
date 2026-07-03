# Product/Service Architecture

Client slug: `aqualoop-hospitality`
Date: 2026-07-03
Owner: Offering Architect Agent

## Current Offer Inventory

| Offer | Audience | Job To Be Done | Outcome | Proof | Buying Friction |
| --- | --- | --- | --- | --- | --- |
| Greywater reuse system concept | Hotel owners/operators, facilities, sustainability leaders | Capture and reuse non-blackwater sources for approved non-potable uses. | Reduced potable water demand and stronger water stewardship story. | Not yet available. | Code, capex, opex, maintenance, disruption, water quality, guest trust. |

## Architecture Diagnosis

What is clear:

- The concept focuses on greywater/non-blackwater reuse.
- Hotels are the leading initial hypothesis.
- Non-potable reuse use cases include toilet flushing, cleaning, irrigation, and operational uses where approved.

What is confusing:

- Whether the product is hardware, service, managed infrastructure, consulting-led validation, or a bundle.
- Whether the system should be per-room, centralized, floor-by-floor, or hybrid.
- Whether the first sale is retrofit or new-build.

What is missing:

- Treatment technology selection.
- Engineering feasibility and maintenance requirements.
- Regulatory pathway by launch market.
- Economic model.
- Buyer and procurement path.

## Recommended Architecture

| Layer | Offer | Role In System | Buyer Trigger | Deliverables | Proof Needed |
| --- | --- | --- | --- | --- | --- |
| Entry | Water Reuse Opportunity Assessment | Low-risk entry into discovery. | Property wants to understand reuse potential without committing to install. | Water-use baseline, reuse-demand map, stakeholder map, code-screen, financial model assumptions. | Water bills, fixture counts, occupancy, tariff, jurisdiction. |
| Core | Hospitality Reuse Pilot Specification | Turns concept into pilotable architecture. | Owner/operator has a candidate property and wants feasibility. | Architecture recommendation, treatment path, MEP requirements, monitoring plan, maintenance plan, approval roadmap. | Engineering review, AHJ input, vendor/partner quotes. |
| Expansion | AquaLoop Reuse System / Managed Service | Scalable deployment after validation. | Pilot demonstrates operational and financial fit. | System install, operations dashboard, maintenance support, reporting package. | Pilot results, certification/compliance path, capex/opex, service-level model. |

## Architecture Options

| Option | Potential Fit | Benefits | Risks | Current Status |
| --- | --- | --- | --- | --- |
| Per-room modular | New-build luxury or premium room concepts. | Visible, modular, potentially contained. | High unit count, maintenance burden, guest-room disruption, brand/product complexity. | Needs engineering validation. |
| Centralized building system | Large hotels, new builds, major retrofits. | Operationally coherent, easier monitoring, potentially better maintenance control. | Plumbing retrofit complexity, capex, space, permitting. | Leading hypothesis, not proven. |
| Semi-centralized floor/zone system | Large properties with repeated risers/zones. | Could balance scale and retrofit containment. | Complexity across floors, maintenance routing, uncertain economics. | Needs feasibility study. |
| Hybrid reuse package | Property-specific mix of greywater, condensate, irrigation, fixtures. | More adaptable to actual water demand. | Harder to productize and message. | Useful for validation offer. |

## Naming And Packaging Notes

Use "AquaLoop Hospitality" as the project slug only. Do not externally recommend the AquaLoop brand until legal review resolves the `SRC-015` naming risk.

## Sales Narrative

How the offers should be explained:

"AquaLoop helps hospitality owners evaluate and build a validated property-level water reuse pathway before committing to infrastructure claims. The first sale is confidence: quantify the opportunity, choose the right architecture, confirm the regulatory path, and define the proof required for a pilot."

## Risks And Dependencies

- Regulatory approval by jurisdiction.
- Engineering feasibility by property type.
- Buyer willingness to pay.
- Maintenance staffing and accountability.
- Water quality monitoring and guest trust.
- Brand/legal clearance.

## Handoff To Strategy

Most important architecture decision: Lead with an assessment-to-pilot value ladder, not an immediate product sale, until engineering and economics are validated.

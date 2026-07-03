# Product / Service Architecture

Client slug: `aqualoop-product-discovery`
Date: 2026-07-03
Owner: Offering Architect Agent

This file is maintained for compatibility with the existing Agency Discovery OS validation script. The primary architecture artifact for this ticket is `outputs/aqualoop-product-discovery/product-architecture.md`.

## Current Offer Inventory

| Offer | Audience | Job To Be Done | Outcome | Proof | Buying Friction |
| --- | --- | --- | --- | --- | --- |
| Water Reuse Opportunity Assessment | Hotel owner/operator, asset manager, sustainability/operations team | Understand whether a property has a plausible source-to-use opportunity. | Baseline opportunity map and decision criteria. | Property data and public source context. | Low; advisory entry point. |
| Jurisdiction + Architecture Fit Study | Owner/operator, engineering/facilities, MEP consultant | Narrow architecture options and code path. | Option matrix and risk-gated feasibility view. | MEP/regulatory review needed. | Medium; requires technical time. |
| Managed Reuse Pilot Specification | Pilot sponsor and technical team | Define a controlled MVP. | Pilot scope, proof plan, monitoring assumptions. | Engineering, AHJ, and property data required. | Medium-high; operational commitment. |
| Productized AquaLoop System / Managed Service | Validated segment after pilot | Deploy and support reuse system. | Commercial implementation. | Blocked until pilot proof. | High; not ready. |

## Architecture Diagnosis

What is clear:

- The first credible offer is validation, not a product sale.
- Hospitality is a leading but unproven wedge.
- Regulatory, maintenance, and installation concerns must be designed into the offer.

What is confusing:

- Buyer ownership.
- Launch geography.
- Product architecture.
- Service responsibility.
- Source/end-use scope.

What is missing:

- Engineering feasibility.
- Property economics.
- Buyer interviews.
- Code pathway review.
- Manufacturing cost and service model.

## Recommended Architecture

| Layer | Offer | Role In System | Buyer Trigger | Deliverables | Proof Needed |
| --- | --- | --- | --- | --- | --- |
| Entry | Water Reuse Opportunity Assessment | Create decision clarity. | Water cost, scarcity, ESG, or development trigger. | Baseline, source/demand map, data gaps. | Water bills, fixture/source data, occupancy. |
| Core | Jurisdiction + Architecture Fit Study | Narrow feasibility. | Property wants pilot decision. | Architecture matrix, code assumptions, install risk. | MEP and regulatory review. |
| Pilot | Managed Reuse Pilot Specification | Produce measured proof. | Internal or partner pilot approval. | Pilot scope, proof roadmap, reporting plan. | Engineering design and AHJ input. |
| Expansion | AquaLoop System / Managed Service | Scale after proof. | Repeatable architecture and buyer demand. | Product/service package. | Pilot results and unit economics. |

## Naming And Packaging Notes

Use descriptive package names. Keep AquaLoop as an internal project name pending legal review because AQUALOOP appears in the market (`SRC-021`).

## Sales Narrative

Sell the confidence to decide, then the pilot, then the system. Do not sell a finished hotel greywater product before feasibility and proof are validated.

## Risks And Dependencies

See `product-architecture.md`, `manufacturing-feasibility.md`, and `regulatory-and-installation-risks.md`.

## Handoff To Strategy

The strongest offer architecture is assessment-to-pilot. The commercial product remains blocked until proof exists.

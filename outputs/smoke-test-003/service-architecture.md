# Product/Service Architecture

Client slug: `smoke-test-003`
Date: 2026-07-03
Owner: Offering Architect

## Current Offer Inventory

| Offer | Audience | Job To Be Done | Outcome | Proof | Buying Friction |
| --- | --- | --- | --- | --- | --- |
| Field operations platform | Operations teams | Coordinate job status, updates, and reporting | Better visibility into field work | Feature inventory | Risk of seeming like another workflow tool |
| Implementation onboarding | Operations and customer success stakeholders | Configure workflows and prepare teams | Faster practical adoption | Internal notes | Could sound like custom services |
| Workflow configuration | Operations leaders | Match software to regional process | More usable operating system | Product inventory | Scope may appear unclear |
| Customer success support | Account owners | Maintain usage and improve process | Ongoing adoption | Internal notes | Value may be under-explained |

## Architecture Diagnosis

What is clear:

- The platform has a concrete field coordination role.
- Implementation and configuration are already part of the value.
- Customer success can reinforce adoption.

What is confusing:

- The current offer does not clearly separate software, launch, and optimization.
- Implementation may sound like extra effort rather than risk reduction.
- The sales story lacks named proof requirements.

What is missing:

- A diagnostic entry point for enterprise buyers.
- Named proof around operational outcomes.
- A simple path from pilot to enterprise expansion.

## Recommended Architecture

| Layer | Offer | Role In System | Buyer Trigger | Deliverables | Proof Needed |
| --- | --- | --- | --- | --- | --- |
| Entry | Field Coordination Assessment | Diagnose coordination risk and priority workflows | Escalations, missed updates, or regional inconsistency | Workflow map, risk findings, rollout recommendation | Examples of discovered issues |
| Core | Northstar Operations Launch | Deploy platform and configure operating workflows | Decision to standardize field execution | Platform setup, workflow configuration, team enablement | Time to launch, adoption milestones |
| Expansion | Execution Confidence Program | Improve reporting, adoption, and cross-region consistency | Need to scale or prove performance | Operating reviews, reporting improvements, success plan | Before/after reporting or escalation metrics |

## Naming And Packaging Notes

Use practical names before branded names. The recommended architecture should make the buying path obvious: assess the risk, launch the operating system, improve execution confidence.

## Sales Narrative

Northstar helps enterprise operations teams see where field execution breaks down, launch the workflows that reduce that risk, and maintain visibility as regions scale.

## Risks And Dependencies

- The assessment offer needs a clear scope to avoid becoming unpaid consulting.
- Launch claims need real implementation timeline evidence.
- Expansion support should not be sold as generic customer success.

## Handoff To Strategy

Most important architecture decision: Frame services as adoption assurance and operating improvement, not as customization.

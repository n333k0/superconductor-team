# Regulatory And Installation Risks

Client slug: `aqualoop-product-discovery`
Date: 2026-07-03
Owner: Discovery Lead + Regulatory/Installation Risk Review

## Risk Posture

Regulatory and installation feasibility are blockers for client-ready claims. Public sources confirm that onsite non-potable reuse is a recognized category and that local programs/rules exist, but they do not prove AquaLoop can be approved, installed, maintained, or operated in any specific property (`SRC-003` to `SRC-012`).

## Regulatory Gate Sequence

1. Select launch geography.
2. Define source water in scope.
3. Define intended non-potable end uses.
4. Identify applicable codes, health rules, plumbing requirements, treatment standards, and operator requirements.
5. Confirm AHJ review path.
6. Define treatment, storage, monitoring, and cross-connection controls.
7. Define commissioning and operating records.
8. Approve claim language only after expert review.

## Regulatory Risks

| Risk | Evidence Ref | Impact | Required Validation |
| --- | --- | --- | --- |
| Jurisdiction variability | `SRC-008`, `SRC-009`, `SRC-010`, `SRC-011` | Universal regulatory claims would be misleading. | Select first city/state and complete code review. |
| Source/end-use mismatch | `SRC-004`, `SRC-007` | Certain greywater sources or uses may require different treatment or may be disallowed. | Define source-to-use loop and validate locally. |
| Standard/certification ambiguity | `SRC-005`, `SRC-006` | Standards may apply, but AquaLoop cannot claim compliance/certification. | Standards consultant or certifier review. |
| Operator competency | `SRC-012` | Maintenance or operator requirements may change product/service model. | Determine local operator obligations. |
| Cross-connection and public-health controls | `SRC-011` | Safety risk and approval blocker. | Plumbing/code expert review. |

## Installation Risks

| Risk | Why It Matters | Architecture Most Affected | Validation Needed |
| --- | --- | --- | --- |
| Existing plumbing access | Retrofitting source capture can be invasive. | Retrofit, centralized, semi-centralized | Property survey and MEP drawings. |
| Space for treatment/storage | Hotels may have limited back-of-house space. | Centralized, semi-centralized | Equipment-space study. |
| Guest disruption | Rooms, corridors, plumbing shutdowns, or odor/noise risk can block pilots. | Per-room, retrofit | Disruption plan and pilot boundaries. |
| Maintenance access | Systems must be serviceable without guest impact. | All | Facilities workflow validation. |
| Integration with existing potable/non-potable systems | Cross-connection controls and routing can be complex. | All | Plumbing design review. |
| Controls and monitoring | Alerts, records, and fail-safe behavior may be required. | All | Controls architecture. |
| Commissioning and turnover | Poor commissioning can create operational risk. | All | Qualified installer/service plan. |

## Maintenance Risks

- Filter/media replacement or treatment system service interval unknown.
- Sensor calibration and alarm response unknown.
- Cleaning, odor control, and biofilm management unknown.
- Operator training unknown.
- Spare parts and consumables unknown.
- Remote monitoring obligations unknown.
- Liability split between owner, installer, operator, and manufacturer unknown.

## Use-Case Risk Ranking

| Use Case | Strategic Appeal | Regulatory/Install Risk | Current Recommendation |
| --- | --- | --- | --- |
| Toilet flushing | Strong non-potable demand story. | High; plumbing integration and cross-connection controls. | Investigate after jurisdiction selection. |
| Irrigation | Intuitive non-potable use. | Medium-high; seasonal demand and local rules. | Strong for resorts/site-specific pilots. |
| Cleaning/operations | Flexible story. | Medium-high; approved uses and handling rules need review. | Keep exploratory. |
| Laundry/process reuse | Potential volume. | High; water chemistry/treatment and operations. | Do not lead without engineering. |

## Safe Claims

Safe for internal/client-safe context with caveats:

- Onsite non-potable reuse is a recognized category (`SRC-003`, `SRC-004`, `SRC-007`).
- Standards and local programs exist in the broader market (`SRC-005` to `SRC-012`).
- AquaLoop requires jurisdiction-specific review before compliance claims.

Blocked:

- "Approved for hotels."
- "Meets NSF/ANSI 350."
- "Compliant in California/Texas/Washington/San Francisco/Austin."
- "Easy retrofit."
- "Low maintenance."
- "Safe for all non-potable uses."

## Recommended Next Sprint

1. Pick one launch geography and one property archetype.
2. Obtain sample MEP/plumbing information or conduct site walk.
3. Define a single source-to-use loop.
4. Run MEP/regulatory feasibility workshop.
5. Create a pilot risk register and approval checklist.

## Handoff

Regulatory and installation readiness is `blocked` for external claims and `internal-draft-ready` for planning.

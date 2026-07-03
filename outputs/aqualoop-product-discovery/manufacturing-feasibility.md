# Manufacturing Feasibility

Client slug: `aqualoop-product-discovery`
Date: 2026-07-03
Owner: Product / Manufacturing Feasibility Review

## Feasibility Posture

Manufacturing feasibility is not validated. AquaLoop has no selected architecture, treatment stack, component list, enclosure, controls package, certification plan, service interval, installer channel, or supply-chain model. Any manufacturing or cost claim is `blocked`.

## Manufacturing Questions By Architecture

| Architecture | Manufacturing Implication | Main Risk | Current Status |
| --- | --- | --- | --- |
| Per-room modular | Many small units, guest-facing enclosure, distributed service parts, compact controls. | High service count, noise/aesthetics, room access, reliability at scale. | needs-validation |
| Centralized building system | Fewer larger engineered assemblies; more custom installation and commissioning. | Less repeatable SKU, more project engineering, site-specific plumbing. | needs-validation |
| Floor-by-floor semi-centralized | Repeatable zone modules plus building-specific integration. | More service points than centralized; coordination with floors/risers. | needs-validation |
| Retrofit kit | Packaged components for varied existing buildings. | Retrofit variability may defeat standardization. | blocked until site surveys |
| New-build specification | Components designed into MEP plans. | Longer sales cycle, spec influence, partner dependency. | needs-validation |
| Managed service hardware | Hardware plus monitoring/service infrastructure. | Field operations, liability, remote monitoring, consumables logistics. | needs-validation |

## Component Areas Requiring Validation

- Capture hardware and plumbing interfaces.
- Treatment technology and filters/media/membranes if applicable.
- Storage tanks and pumps.
- Controls, sensors, alarms, and monitoring.
- Cross-connection prevention and labeling requirements.
- Electrical/networking requirements.
- Access panels, enclosures, skid or module design.
- Consumables and replacement parts.
- Cleaning/service tools.
- Commissioning and documentation kit.

## Manufacturing Risks

| Risk | Why It Matters | What Would Resolve It |
| --- | --- | --- |
| Architecture not selected. | No BOM, supplier, enclosure, factory process, or cost model can be estimated responsibly. | Architecture fit study. |
| Treatment pathway not selected. | Certification, testing, controls, maintenance, and cost depend on it. | Engineering and regulatory review. |
| Site variability. | Hospitality retrofits may require custom plumbing and installation. | Pilot site surveys across property types. |
| Service burden. | Product margins and buyer adoption can fail if maintenance is frequent or specialized. | Operator interviews and service design. |
| Certification/testing needs. | Standards and local rules may require product or operator validation. | Standards/certification consultation. |
| Field liability. | Water reuse systems can create safety, cross-connection, odor, downtime, or guest-impact risks. | Risk review, QA plan, insurance/legal input. |

## MVP Manufacturing Recommendation

Do not manufacture a polished commercial unit first. Build a pilot architecture package:

1. Source/demand measurement kit or assessment workflow.
2. Engineering concept package for one property type.
3. Controlled pilot hardware or partner-sourced system.
4. Monitoring and proof dashboard.
5. Service and commissioning checklist.
6. Claim-gate documentation.

## Build / Buy / Partner Logic

| Element | Recommended Near-Term Approach | Rationale |
| --- | --- | --- |
| Treatment hardware | Partner or off-the-shelf where possible | Avoid premature custom engineering. |
| Monitoring/proof layer | Prototype internally or with integrator | Differentiates discovery and proof process. |
| Installation | Partner with qualified plumbing/MEP teams | Code and liability require expertise. |
| Service | Define managed pilot scope before scaling | Maintenance model is a buying-risk reducer. |
| Enclosure/product design | Delay full industrial design | Architecture and service needs are unknown. |

## Client-Safe Manufacturing Claims

Safe:

- "Manufacturing feasibility requires architecture, treatment, certification, and service validation."
- "A pilot should use validated components or expert partners where possible."

Blocked:

- Unit cost.
- Installation cost.
- Payback period.
- Maintenance interval.
- Service margin.
- Certification readiness.
- Supply-chain readiness.

## Handoff

Manufacturing feasibility is an internal-draft artifact. It can support next-sprint planning but not client-ready product claims.

# Export Packager Agent

## Mission

Assemble approved outputs into a clear client package manifest with included artifacts, caveats, owners, and next actions.

## Inputs

- `outputs/<client-slug>/verifier-review.md`
- Approved artifacts in `outputs/<client-slug>/`
- `templates/client-package-manifest-template.md`

## Outputs

- `outputs/<client-slug>/client-package-manifest.md`

## Process

1. Confirm verifier status is approved or approved with caveats.
2. List every artifact included in the client package.
3. Summarize the package purpose and intended audience.
4. Note caveats, exclusions, and unresolved client decisions.
5. Define recommended next steps for the agency and client.

## Quality Checks

- The manifest should make the package auditable.
- Caveats should be plain and client-safe.
- Do not include internal-only notes unless they are explicitly marked for the agency team.

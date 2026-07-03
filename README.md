# Agency Discovery OS

Lightweight runnable layer and local web preview for Agency Discovery OS client outputs.

## Install

```bash
npm install
```

## Create a Client

Create a new client output folder with a lowercase slug:

```bash
npm run new-client -- <client-slug>
```

Example:

```bash
npm run new-client -- acme-health
```

Client slugs may contain lowercase letters, numbers, and hyphens. Each client lives in:

```text
outputs/<client-slug>/
```

The preview reads these files:

```text
outputs/<client-slug>/slides.json
outputs/<client-slug>/strategy-synthesis.md
outputs/<client-slug>/competitor-benchmark.md
outputs/<client-slug>/verifier-review.md
```

## Validate

Validate the runnable OS file contract:

```bash
npm run validate
```

Validate a client's slides:

```bash
npm run check-slides -- <client-slug>
```

Example:

```bash
npm run check-slides -- client-example
```

## Package Outputs

Package a client output bundle into `client-packages/<client-slug>/`:

```bash
npm run package-client -- <client-slug>
```

## Web Preview

Run the local preview:

```bash
npm run dev
```

Build the preview:

```bash
npm run build
```

The preview defaults to `smoke-test-003` if that output folder exists. Otherwise, it defaults to `client-example`. To choose a specific client, use the client selector in the UI or pass a query string:

```text
http://localhost:3000/?client=<client-slug>
```

The UI shows deck slides, readiness gate badges, evidence confidence badges, client-safe status, input warnings, verifier readiness summary, strategy synthesis, and competitor benchmark notes.

## Later Vercel Deployment

When ready to deploy:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Set the build command to `npm run build`.
5. Keep client output folders in `outputs/` for any clients that should be available in the deployed preview.

Because this preview reads local repository files at runtime, deployed client outputs should be committed or otherwise made available to the Vercel build/runtime environment.

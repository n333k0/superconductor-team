const fs = require("fs");
const path = require("path");
const {
  rootDir,
  clientDir,
  requiredClientFiles,
  slugFromArg,
  validateSlug
} = require("./lib");

const slug = slugFromArg();

if (!validateSlug(slug)) {
  console.error("Usage: npm run package-client -- <client-slug>");
  process.exit(1);
}

const sourceDir = clientDir(slug);

if (!fs.existsSync(sourceDir)) {
  console.error(`Client does not exist: outputs/${slug}`);
  process.exit(1);
}

const missing = requiredClientFiles.filter((file) => !fs.existsSync(path.join(sourceDir, file)));

if (missing.length > 0) {
  console.error(`Cannot package ${slug}. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

const packageRoot = path.join(rootDir, "client-packages");
const packageDir = path.join(packageRoot, slug);

fs.rmSync(packageDir, { recursive: true, force: true });
fs.mkdirSync(packageDir, { recursive: true });

for (const file of requiredClientFiles) {
  fs.copyFileSync(path.join(sourceDir, file), path.join(packageDir, file));
}

const manifest = {
  client_slug: slug,
  packaged_at: new Date().toISOString(),
  files: requiredClientFiles
};

fs.writeFileSync(path.join(packageDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Packaged outputs/${slug} into client-packages/${slug}`);

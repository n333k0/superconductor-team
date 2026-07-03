const fs = require("fs");
const path = require("path");
const {
  rootDir,
  outputsDir,
  requiredClientFiles,
  listClientSlugs,
  clientDir,
  getSlidesPayload
} = require("./lib");

const requiredRepoFiles = [
  "package.json",
  "README.md",
  "scripts/new-client.js",
  "scripts/validate.js",
  "scripts/check-slides.js",
  "scripts/package-client.js",
  "app/page.js",
  "app/layout.js",
  "app/globals.css"
];

const errors = [];

for (const file of requiredRepoFiles) {
  if (!fs.existsSync(path.join(rootDir, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

if (!fs.existsSync(outputsDir)) {
  errors.push("Missing outputs/ directory.");
} else {
  const slugs = listClientSlugs();
  if (slugs.length === 0) {
    errors.push("outputs/ must contain at least one client folder.");
  }

  for (const slug of slugs) {
    for (const file of requiredClientFiles) {
      if (!fs.existsSync(path.join(clientDir(slug), file))) {
        errors.push(`outputs/${slug} is missing ${file}`);
      }
    }

    try {
      const { slides } = getSlidesPayload(slug);
      if (slides.length === 0) {
        errors.push(`outputs/${slug}/slides.json must contain at least one slide.`);
      }
    } catch (error) {
      errors.push(`outputs/${slug}/slides.json: ${error.message}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Validation passed.");

#!/usr/bin/env node
// Generates README.md for the companion "awesome-claude-skills-mcp-servers" repo
// from the same content that powers aiassetsdirectory.com. Re-run after adding
// assets so the two stay in sync (`npm run awesome:generate`).

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, resolve } from "node:path";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SITE_URL = "https://aiassetsdirectory.com";

const SEGMENTS = [
  { key: "claude-skills", title: "Claude Skills" },
  { key: "mcp-servers", title: "MCP Servers" },
  { key: "copilot-agents", title: "Copilot Agents" },
  { key: "ai-workflows", title: "AI Workflows" },
  { key: "cursor-rules", title: "Cursor Rules" },
];

const assets = JSON.parse(
  readFileSync(join(ROOT, ".velite", "assets.json"), "utf8"),
);

function sortAssets(list) {
  return [...list].sort(
    (a, b) => Number(b.verified) - Number(a.verified) || (b.stars ?? 0) - (a.stars ?? 0),
  );
}

function renderAsset(a) {
  const meta = [`\`${a.license}\``];
  if (a.verified) meta.push("verified");
  const source = a.source ? `[source](${a.source})` : null;
  // awesome-lint requires the description to end in text/link (not inline code) with closing punctuation.
  const tail = [meta.join(", "), source].filter(Boolean).join(", ");
  return `- [${a.title}](${SITE_URL}${a.url}) - ${a.summary} (${tail})`;
}

function anchor(title, count) {
  return `${title.toLowerCase().replace(/\s+/g, "-")}-${count}`;
}

function renderSegment({ key, title }) {
  const items = sortAssets(assets.filter((a) => a.segment === key));
  if (items.length === 0) return "";
  return [
    `## ${title} (${items.length})`,
    "",
    ...items.map(renderAsset),
    "",
  ].join("\n");
}

const toc = SEGMENTS
  .map(({ key, title }) => {
    const count = assets.filter((a) => a.segment === key).length;
    // Link text must match the heading text exactly (awesome-lint: awesome-toc).
    return `- [${title} (${count})](#${anchor(title, count)})`;
  })
  .join("\n");

const readme = `# Awesome Claude Skills & MCP Servers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A curated, open-source list of Claude Skills, MCP servers, Copilot agents, AI
> workflows and Cursor rules. Entries marked **verified** were installed and
> tested by [AI Assets Directory](${SITE_URL}) — every listing there also has a
> last-verified date, a works-with matrix, and copy-paste install steps.

## Contents

${toc}
- [Why this list exists](#why-this-list-exists)

---

${SEGMENTS.map(renderSegment).filter(Boolean).join("\n")}
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). PRs welcome — new entries need a real,
permissively-licensed source and a one-line description of what they do.

## Why this list exists

Bigger crawlers already index six figures of assets. This list stays curated on
purpose: every entry is open-source, permissively licensed, and either verified
by hand on [the directory](${SITE_URL}/browse) or clearly marked as unverified so
you know what you're getting.
`;

const args = process.argv.slice(2);
const outIdx = args.indexOf("--out");
const outPath = outIdx !== -1 ? resolve(args[outIdx + 1]) : null;

if (outPath) {
  writeFileSync(outPath, readme);
  console.log(`Wrote ${outPath}`);
} else {
  process.stdout.write(readme);
}

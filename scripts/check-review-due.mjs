#!/usr/bin/env node
// Scans content/blog and content/learn frontmatter for `reviewBy` dates and
// reports what's overdue or due soon. Used locally (`npm run check:review`)
// and by .github/workflows/seo-reminders.yml to open reminder issues.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DUE_SOON_DAYS = 14;

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([a-zA-Z]+):\s*(.+)$/);
    if (m) fields[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return fields;
}

function collect(dir, section) {
  const full = join(ROOT, "content", dir);
  return readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const fm = parseFrontmatter(readFileSync(join(full, f), "utf8"));
      return { section, file: f, title: fm.title, reviewBy: fm.reviewBy };
    })
    .filter((e) => e.reviewBy);
}

const entries = [...collect("blog", "blog"), ...collect("learn", "learn")];
const today = new Date();
const soon = new Date(today.getTime() + DUE_SOON_DAYS * 24 * 60 * 60 * 1000);

const overdue = entries.filter((e) => new Date(e.reviewBy) < today);
const dueSoon = entries.filter((e) => {
  const d = new Date(e.reviewBy);
  return d >= today && d <= soon;
});

function printGroup(title, list) {
  if (list.length === 0) return "";
  const rows = list
    .map((e) => `- [${e.section}] **${e.title}** — reviewBy \`${e.reviewBy}\` (${e.file})`)
    .join("\n");
  return `### ${title}\n${rows}\n\n`;
}

const report =
  printGroup("Vencidos (revisar ya)", overdue) +
  printGroup(`Próximos ${DUE_SOON_DAYS} días`, dueSoon);

if (!report) {
  console.log("Nada vencido ni próximo a vencer. Todo al día.");
} else {
  console.log(report.trim());
}

// Non-zero exit only signals "there's something to look at", not a failure.
process.exitCode = overdue.length > 0 ? 1 : 0;

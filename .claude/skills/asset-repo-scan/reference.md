# Asset Repo Scout — Reference

Detailed reference for the `asset-repo-scan` skill. Read this while scanning a repo.

> The type table below is a **fallback snapshot**. The authoritative source is the
> project's `velite.config.ts` (`assets` collection schema + `segmentByType`). Always
> read that first; only use this table if the config is unreadable.

## 1. Directory type classification

Assign exactly ONE `type` (Velite enum value on the left). Base it on concrete file signals.

| `type` value | Segment (URL) | Strong signals in the repo |
|---|---|---|
| `claude-skill` | claude-skills | `SKILL.md`, `.claude/skills/`, frontmatter with `name`/`description`, "Claude Code skill", slash-command docs |
| `mcp-server` | mcp-servers | `@modelcontextprotocol/sdk`, `mcp` in name/deps, `server.json`, tools/resources manifest, "MCP server", `claude_desktop_config` examples |
| `copilot` | copilot-agents | `.github/` prompt/agent files, `copilot-instructions.md`, `*.agent.md`, "GitHub Copilot" customization |
| `ai-workflow` | ai-workflows | n8n/workflow JSON, multi-step pipelines, orchestration (LangGraph/CrewAI), "workflow"/"automation" as the core |
| `cursor-rule` | cursor-rules | `.cursor/rules`, `.cursorrules`, `*.mdc`, "Cursor rule/rules" |

If none fit cleanly → recommend **SKIP**, or the closest fit labeled "INCLUDE WITH CAVEAT" and explain.

## 2. Velite frontmatter schema (target: `content/assets/<slug>.md`)

> Verify against the live `velite.config.ts`. Below is the current snapshot.
> Required fields: `slug, type, title, fileName, summary, license, author`. Everything else is optional but fill what you can verify.

```md
---
slug: kebab-case-name              # required — stable, SEO-friendly
type: claude-skill                 # required — enum: claude-skill | mcp-server | copilot | ai-workflow | cursor-rule
title: Human Readable Name         # required
fileName: name.skill               # required — e.g. name.skill / name.mcp / name.agent / name.mdc
summary: >-                        # required — 1-2 sentences, what + why valuable
  One or two tight sentences describing what it does and who it's for.
tags: [tag1, tag2, tag3]           # topics/keywords (lowercase)
tools: [claude, claude-code, cursor, copilot]   # which tools it works with
license: MIT                       # required — SPDX id (see cheat-sheet)
author: owner-or-name              # required — GitHub owner or copyright holder
source: https://github.com/owner/repo   # canonical repo URL
stars: 1240                        # only if actually fetched; else omit
verified: false                    # false until the user tests it
video: https://...                 # optional embed; omit if none
install: |                         # optional install/usage command block
  git clone https://github.com/owner/repo ~/.claude/skills/name
installLang: bash                  # default bash
testimonials: []                   # leave empty — do NOT invent quotes
---

## Overview
**Name** — what it is in one bold line, then 2-3 sentences grounded in the README.

## How it works
Short prose + a numbered list of the real steps/mechanics from the docs.

1. Step one
2. Step two
3. Step three

## Examples
A concrete usage example (fenced code or txt) taken/adapted from the README.
```

Rules for filling it:
- Use enum `type` values **verbatim** — a wrong value fails the Velite build.
- `slug` = kebab-case of the asset name; keep stable (URLs depend on it).
- Omit any optional field you cannot verify rather than inventing it.
- `testimonials` stays `[]` — never fabricate social proof.
- `verified: false` always on first scan (user tests before flipping to true).

## 3. License / legal cheat-sheet

Report the **SPDX id**, the **author/copyright holder + year**, and a **directory-use verdict**. Our site is monetized (sponsorships/newsletter), so treat it as commercial use.

| License (SPDX) | List + link | Quote README / show install | Obligations for our directory |
|---|---|---|---|
| `MIT`, `BSD-2/3-Clause`, `ISC`, `Apache-2.0` | ✅ | ✅ | Keep attribution + license/NOTICE if we redistribute files. Apache-2.0: preserve NOTICE. Linking + short quotes = fine with credit. |
| `MPL-2.0`, `LGPL` | ✅ | ✅ | Fine to list/link/quote. Copyleft applies only if we ship/modify their source files, which we don't. |
| `GPL-3.0`, `GPL-2.0`, `AGPL-3.0` | ✅ | ✅ | Listing, linking, describing, and short README quotes are fine. Do NOT bundle their code into our app. AGPL = extra caution if ever hosted. |
| `CC-BY-4.0`, `CC-BY-SA-4.0` | ✅ | ✅ | Content reuse allowed **with attribution**. BY-SA: derivative text must share-alike, so prefer summarizing in our own words + credit. |
| `CC-BY-NC-*`, other **NonCommercial** | ⚠️ | ⚠️ | NC conflicts with a monetized site. Safe: link + factual description in our own words. Do NOT reproduce their content verbatim. Flag for user. |
| `CC0-1.0`, `Unlicense`, `WTFPL`, public domain | ✅ | ✅ | No obligations. Attribution still courteous. |
| Custom / "source-available" / non-OSI | ⚠️ | ⚠️ | Read the actual terms. Flag any "no redistribution / no commercial / no directory" clause for the user. |
| **No LICENSE file** | ⚠️ link only | ❌ | Default = all rights reserved. Link + our-own-words description only. Recommend the user asks the author or skips. |

Always also check for:
- **Trademark / logo / brand** restrictions (names and logos aren't covered by code licenses).
- **`NOTICE` / attribution** requirements (esp. Apache-2.0).
- **Dual licensing** (repo may offer MIT + commercial).
- **Ambiguity**: license badge says one thing, LICENSE file says another → report both, flag it.

Where to find the license, in priority order: `LICENSE`/`LICENSE.md`/`COPYING` file → `package.json`/`pyproject.toml` `license` field → README badge/section → GitHub's detected-license label. Quote the source you used.

## 4. Quality / value scoring

Recommend **INCLUDE** only when most hold: clear license, active (recent commits), documented (usable README), actually works, distinctive vs. existing entries, reasonable traction. Recommend **SKIP** for: no license, abandoned, undocumented, empty/toy, or a duplicate of something already listed.

## 5. Report template (what you output to the user)

```
## Verdict: INCLUDE | INCLUDE WITH CAVEAT | SKIP
<one line why>

## Legal
- License: <SPDX id> (found in: <where>)
- Author / copyright: <name, year>
- Source: <url>
- Directory use: <what we may do — list/link/quote/reproduce> + obligations
- Red flags: <NC / copyleft / no-license / trademark / ambiguity, or "none">

## What it is & why it's valuable
<2-4 sentences, grounded in the README>

## Classification
- Type: <enum value>  ·  Tools: <...>  ·  Stars: <n or "not fetched">
- Key features: <bullets>

## Ready-to-paste asset  (content/assets/<slug>.md)
<full frontmatter + body per section 2>

## Follow-ups
<license to confirm, duplicate check, testing before verified:true, etc.>
```

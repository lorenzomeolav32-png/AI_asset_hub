---
slug: claude-seo
type: claude-skill
title: Claude SEO
fileName: claude-seo.skill
summary: >-
  Open-source SEO plugin for Claude Code: 25 sub-skills + 18 specialist
  subagents running technical SEO, E-E-A-T, Schema.org, GEO/AEO, local and
  international SEO audits in parallel, producing a falsifiable action plan.
category: marketing
tags: [claude-seo, seo, ai-search, geo, schema-org, technical-seo]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo
stars: 16500
verified: false
install: |
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@agricidaniel-claude-seo
  /seo setup
installLang: bash
---

## Overview

**Claude SEO** is a full **SEO operating system** for Claude Code. It runs 25
sub-skills and 18 specialist subagents in parallel
across technical SEO, content quality (E-E-A-T), Schema.org markup, AI search
optimization (GEO/AEO), local SEO, e-commerce and international SEO. Every
audit produces a prioritized action plan where each recommendation carries its
first-principle observation, dependency relationships, a "how would we know
this failed?" check and a leading indicator.

## How it works

1. **Orchestrate:** `skills/seo/SKILL.md` detects the industry (SaaS, local,
   e-commerce, publisher, agency) and dispatches up to 15 subagents in parallel.
2. **Audit:** each subagent scores its domain (technical, content, schema,
   GEO, local, backlinks...) against primary-source Google guidance.
3. **Synthesize:** findings converge through a 10-principle methodology
   (PERCEIVE → ANALYZE → VALIDATE → ACT) into one prioritized plan.
4. **Report:** Markdown, HTML and a production PDF (WeasyPrint + matplotlib).

## Examples

```text
/seo audit https://example.com
/seo schema https://example.com
/seo geo https://example.com/blog/post
```

## Individual skills

Claude SEO ships as one plugin, but internally it is composed of 25 focused
skill files under `skills/`: the orchestrator plus 24 specialist skills
covering technical audits, content/E-E-A-T, schema, AI search (GEO), local and
maps, international SEO, e-commerce, and two optional paid-extension bridges
(DataForSEO, AI image generation). Each of the 24 specialist skills is listed
as its own entry in this directory under the `marketing` category so you can
browse what each capability does on its own.

## Subagents (not separately listed)

The orchestrator also dispatches **18 internal specialist subagents**
(`agents/seo-*.md`, e.g. `seo-visual`, `seo-performance`) to do the actual
parallel audit work. These are Claude Code subagents in the `agents/` folder,
not GitHub Copilot agents, and they aren't separately installable. The
orchestrator dispatches them internally, so they aren't listed as their own
entries here.

## Licensing note

One skill, `seo-flow`, ships evidence-led prompts licensed separately under
**CC BY 4.0** (sourced from the author's companion FLOW project) rather than
the repo's default MIT. See its own entry for detail.

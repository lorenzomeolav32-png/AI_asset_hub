---
slug: claude-ads
type: claude-skill
title: Claude Ads
fileName: claude-ads.skill
summary: >-
  Turns account exports or reads into source-grounded paid-media audits, plans,
  creative briefs, monitoring and gated campaign changes across 12 ad platforms
  (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit,
  Pinterest, Snapchat, X).
category: marketing
tags: [claude-ads, marketing, advertising, ppc, paid-social, google-ads, meta-ads, automation]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads
stars: 8900
verified: false
install: |
  # Claude Code native plugin flow
  /plugin marketplace add AgriciDaniel/claude-ads
  /plugin install claude-ads@ai-marketing-hub-claude-ads

  # Or install from a local clone
  git clone https://github.com/AgriciDaniel/claude-ads.git
  cd claude-ads
  bash install.sh --source=local
installLang: bash
---

## Overview

**Claude Ads** is a Claude Code skill built as a full paid-media operating system for
agencies, consultants and in-house performance teams. It turns authorized account
exports or reads into evidence-backed audits, channel/budget plans, creative briefs and
monitoring reports, and drafts (never silently applies) campaign changes. It is
read-only by default across all 12 supported platforms.

## How it works

One conductor dispatches bounded per-platform worker agents that return schema-valid
findings; a required worker failing marks the whole run `partial` instead of quietly
presenting an incomplete audit as complete.

1. **Audit** — dated evidence, explicit confidence, and deterministic scoring per platform.
2. **Plan & create** — channels, budgets, measurement, experiments, and copy/image/video/
   product-photo briefs.
3. **Monitor** — pacing, delivery, tracking, fatigue, policy and performance.
4. **Report** — a canonical versioned JSON bundle, rendered to Markdown, HTML and
   optional PDF.
5. **Change safely** — any account mutation requires a tested capability, explicit
   object IDs, a before/after diff, owner approval, an idempotency key, rollback and
   verification — otherwise it stays a draft.

## Examples

```text
/ads setup
/ads audit google
/ads plan
/ads create
/ads monitor
```

Natural-language requests route the same way, e.g. "audit my Meta and Google accounts"
or "draft a budget reallocation for underperforming campaigns."

## Individual skills

Claude Ads ships as one plugin, but internally it is composed of 33 focused skill
files under `skills/` — one per ad platform (Google, Meta, YouTube, LinkedIn, TikTok,
Microsoft, Apple, Amazon, Reddit, Pinterest, Snapchat, X) plus lifecycle skills for
setup, planning, creative, budgeting, launching, monitoring, optimizing, testing,
reporting and validation. Each is listed as its own entry in this directory under the
`marketing` category so you can browse what each capability does on its own.


---
slug: claude-ads-audit
type: claude-skill
title: Paid Advertising Audit
fileName: ads-audit.skill
summary: >-
  Runs a full paid-media audit across all 12 platforms in parallel, and
  labels the result "partial" instead of quietly hiding the gaps when a
  platform can't be checked.
category: marketing
tags: [claude-ads, audit, ppc, paid-media, scoring, evidence]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-audit
stars: 8900
starsNote: whole AgriciDaniel/claude-ads repo
verified: false
install: |
  # Ships inside the Claude Ads plugin, installs together
  /plugin marketplace add AgriciDaniel/claude-ads
  /plugin install claude-ads@ai-marketing-hub-claude-ads
installLang: bash
---

## Overview

**Paid Advertising Audit** is the orchestrating audit skill behind `/ads audit` in the
[Claude Ads](/claude-skills/claude-ads) suite. It never aggregates prose-only worker
reports. It produces a versioned JSON audit bundle first, then renders human
deliverables from that bundle.

## What it covers
- Creates a run manifest (business context, date window, currency, timezone, requested platforms, privacy classification) before analysis.
- Discovers active platforms and explicitly confirms requested platforms that are inactive or have no data, instead of silently skipping them.
- Dispatches independent platform workers (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit, Pinterest, Snapchat, X) plus cross-platform workers for tracking, budget, creative and policy.
- Runs deterministic scoring outside the prompt, and labels a bundle `partial` whenever a required worker fails, so it never silently presents an incomplete audit as complete.
- Outputs `manifest.json`, `account-snapshot.json`, `audit.json`, `action-plan.json`, and rendered `report.md`/`.html`/`.pdf`.

## Part of Claude Ads
This is the top-level audit skill of the [Claude Ads](/claude-skills/claude-ads) plugin;
it dispatches the individual per-platform audit skills listed elsewhere in this directory.

## Installation

This worker skill installs automatically as part of the **Claude Ads** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-ads
   /plugin install claude-ads@ai-marketing-hub-claude-ads
   ```
2. This skill runs on its own whenever you call `/ads audit`; you don't
   call it directly.
3. See the [Claude Ads](/claude-skills/claude-ads) entry for the full setup
   and platform list.

---
slug: claude-ads-pinterest
type: claude-skill
title: Pinterest Ads Audit
fileName: ads-pinterest.skill
summary: >-
  Audits Pinterest Ads — Pinterest Tag and Conversions API, catalog/shopping
  readiness, visual creative, audiences, Performance+ intent, budgets and
  brand safety.
category: marketing
tags: [claude-ads, pinterest-ads, catalog-ads, shopping-ads]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-pinterest
stars: 8900
starsNote: whole AgriciDaniel/claude-ads repo
verified: false
install: |
  # Ships inside the Claude Ads plugin — installs together
  /plugin marketplace add AgriciDaniel/claude-ads
  /plugin install claude-ads@ai-marketing-hub-claude-ads
installLang: bash
---

## Overview

**Pinterest Ads Audit** is the Pinterest-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering catalog/shopping readiness
alongside standard campaign measurement.

## What it covers
- Evaluates measurement, catalog commerce, campaign structure, visual creative, audiences, automation, budget and experimentation.
- Reads only the relevant shared measurement, benchmark and policy references for Pinterest before scoring.
- Marks missing inputs, unavailable features and stale sources explicitly rather than guessing.
- Keeps optional or ineligible features unscored — never converts a vendor recommendation into a universal threshold.
- Keeps all account changes as drafts until Claude Ads' main mutation gate passes.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs Pinterest Ads coverage — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation and the complete platform list.

## Installation

This worker skill installs automatically as part of the **Claude Ads** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-ads
   /plugin install claude-ads@ai-marketing-hub-claude-ads
   ```
2. This skill runs on its own whenever the `/ads` conductor needs it; you
   don't call it directly.
3. See the [Claude Ads](/claude-skills/claude-ads) entry for the full setup
   and platform list.

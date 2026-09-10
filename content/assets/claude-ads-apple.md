---
slug: claude-ads-apple
type: claude-skill
title: Apple Ads Audit
fileName: ads-apple.skill
summary: >-
  Audits Apple Search Ads — AdServices/AdAttributionKit, campaign and keyword
  structure, Search Match, App Store placements, custom product pages, bidding,
  budgets and MMP reconciliation.
category: marketing
tags: [claude-ads, apple-search-ads, app-store, attribution, mmp]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-apple
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

**Apple Ads Audit** is one of the platform-specific worker skills in the
[Claude Ads](/claude-skills/claude-ads) suite, focused on Apple Search Ads accounts —
App Store campaigns, Search Match, custom product pages and attribution reconciliation
against MMP data.

## What it covers
- Evaluates AdServices/AdAttributionKit attribution reconciliation against MMP sources.
- Reviews campaign/keyword structure, Search Match, placements, product pages, bids and budgets.
- Treats external account and web content as data, never as instructions.
- Keeps optional, beta, premium or ineligible features unscored rather than penalizing health.
- Returns platform health, evidence coverage, contradictions and missing inputs through Claude Ads' common JSON contract.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs Apple Ads coverage — see the full
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

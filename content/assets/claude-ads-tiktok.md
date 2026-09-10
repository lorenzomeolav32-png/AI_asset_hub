---
slug: claude-ads-tiktok
type: claude-skill
title: TikTok Ads Audit
fileName: ads-tiktok.skill
summary: >-
  Audits TikTok Ads — Pixel and Events API, mobile-first creative, Smart+,
  TikTok Shop and commerce campaigns, bidding, pacing and attribution.
category: marketing
tags: [claude-ads, tiktok-ads, smart-plus, tiktok-shop]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-tiktok
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

**TikTok Ads Audit** is the TikTok-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering Smart+ automation and TikTok
Shop commerce campaigns alongside standard measurement.

## What it covers
- Evaluates measurement, mobile-native creative, audiences, Smart+, commerce, bidding, budgets, pacing and attribution.
- Reads only the relevant shared measurement, benchmark and policy references for TikTok before scoring.
- Does not apply a benchmark without checking objective, geography, methodology, sample size and account maturity.
- Keeps optional, beta, premium or ineligible features unscored rather than counting against account health.
- Returns platform health, evidence coverage, regulatory exposure and recommendations through Claude Ads' common JSON contract.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs TikTok Ads coverage — see the full
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

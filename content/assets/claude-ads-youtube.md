---
slug: claude-ads-youtube
type: claude-skill
title: YouTube Ads Audit
fileName: ads-youtube.skill
summary: >-
  Audits YouTube Ads — video and Demand Gen inventory, Shorts, in-stream, CTV,
  creative, audiences, brand safety and bidding.
category: marketing
tags: [claude-ads, youtube-ads, video-ads, ctv]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-youtube
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

**YouTube Ads Audit** is the YouTube-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering Shorts, in-stream, CTV and
Demand Gen inventory in one review, kept separate even when Google Ads supplies the data.

## What it covers
- Evaluates conversion/engagement measurement, campaign type, channel controls, formats, hooks, audiences, brand safety and bidding.
- Reads only the relevant shared measurement, benchmark and policy references for YouTube before scoring.
- Does not apply a benchmark without checking objective, geography, methodology, sample size and account maturity.
- Keeps optional, beta, premium or ineligible features unscored rather than counting against account health.
- Returns platform health, evidence coverage, regulatory exposure and recommendations through Claude Ads' common JSON contract.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs YouTube Ads coverage — see the full
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

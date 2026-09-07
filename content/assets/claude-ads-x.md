---
slug: claude-ads-x
type: claude-skill
title: X Ads Audit
fileName: ads-x.skill
summary: >-
  Audits X Ads — X Pixel and Conversions API, campaign objectives,
  keyword/conversation targeting, creative, budgets and brand safety.
category: marketing
tags: [claude-ads, x-ads, twitter-ads]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-x
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

**X Ads Audit** is the X (formerly Twitter)-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering conversation targeting alongside
standard campaign measurement.

## What it covers
- Evaluates measurement, campaign structure, audience/conversation targeting, creative, budgets, reporting and brand safety.
- Reads only the relevant shared measurement, benchmark and policy references for X before scoring.
- Marks missing inputs, unavailable features and stale sources explicitly rather than guessing.
- Keeps optional or ineligible features unscored — never converts a vendor recommendation into a universal threshold.
- Keeps all account changes as drafts until Claude Ads' main mutation gate passes.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs X Ads coverage — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation and the complete platform list.

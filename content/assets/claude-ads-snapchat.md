---
slug: claude-ads-snapchat
type: claude-skill
title: Snapchat Ads Audit
fileName: ads-snapchat.skill
summary: >-
  Audits Snapchat Ads — Snap Pixel and Conversions API, mobile/app campaigns,
  AR and catalog formats, audiences, budgets and brand safety.
category: marketing
tags: [claude-ads, snapchat-ads, ar-ads, mobile-ads]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-snapchat
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

**Snapchat Ads Audit** is the Snapchat-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering AR Lens and catalog formats
alongside standard campaign measurement.

## What it covers
- Evaluates measurement, account/ad-squad structure, mobile creative, AR/catalog formats, audiences, budget and reporting.
- Reads only the relevant shared measurement, benchmark and policy references for Snapchat before scoring.
- Marks missing inputs, unavailable features and stale sources explicitly rather than guessing.
- Keeps optional or ineligible features unscored — never converts a vendor recommendation into a universal threshold.
- Keeps all account changes as drafts until Claude Ads' main mutation gate passes.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs Snapchat Ads coverage — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation and the complete platform list.

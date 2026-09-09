---
slug: claude-ads-optimize
type: claude-skill
title: Paid Media Optimization
fileName: ads-optimize.skill
summary: >-
  Diagnoses and drafts (or, once approved, applies) paid-ad optimizations
  using causal evidence and financial constraints — and refuses permanent
  deletion of any account object.
category: marketing
tags: [claude-ads, optimization, budget-reallocation, bid-management]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-optimize
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

**Paid Media Optimization** is the account-mutation skill behind `/ads optimize` in the
[Claude Ads](/claude-skills/claude-ads) suite, defaulting to `--draft` like campaign launches.

## What it covers
- Loads the latest normalized snapshot, prior decisions, monitoring results, experiment state and platform capability manifest.
- Identifies the decision and causal evidence first — never optimizes a metric in isolation.
- Compares no-change, experiment and mutation options, including learning-phase and opportunity-cost effects.
- Refuses permanent deletion of campaigns, ad groups, ads or audiences — offers pause, archive, label or backup/export instead.
- Requires a search terms report and overblocking review before any search-term or negative-keyword action.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads optimize`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

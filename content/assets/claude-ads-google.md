---
slug: claude-ads-google
type: claude-skill
title: Google Ads Audit
fileName: ads-google.skill
summary: >-
  Audits Google Ads across Search, Shopping, Performance Max, Demand Gen and
  YouTube-linked inventory — keywords, search terms, negative-keyword review,
  creative, bidding, budgets and policy.
category: marketing
tags: [claude-ads, google-ads, search-ads, performance-max, shopping-ads]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-google
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

**Google Ads Audit** is the Google-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering Search, Shopping, Performance
Max, Demand Gen and YouTube-linked inventory in one account review.

## What it covers
- Evaluates measurement, search terms/waste, account structure, keywords, creative assets, bidding/budgets, eligibility and policy.
- Never generates or illustrates specific negative keywords without a search terms report plus a business-relevance and overblocking review.
- Refuses to substitute a generic "starter" or "brand-safety" negative list as a workaround for missing evidence.
- Keeps optional, beta, premium or ineligible features unscored rather than penalizing account health.
- Returns platform health, evidence coverage, contradictions and missing inputs through the common JSON contract.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs Google Ads coverage — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation and the complete platform list.

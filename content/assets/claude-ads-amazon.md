---
slug: claude-ads-amazon
type: claude-skill
title: Amazon Ads Audit
fileName: ads-amazon.skill
summary: >-
  Audits Amazon Ads profiles and regions across Sponsored Products, Sponsored
  Brands, Sponsored Display and DSP — portfolios, targeting, search terms,
  retail readiness, creative, budgets, ACOS/TACOS and policy.
category: marketing
tags: [claude-ads, amazon-ads, retail-media, acos, tacos, ppc]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-amazon
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

**Amazon Ads Audit** is one of the platform-specific worker skills in the
[Claude Ads](/claude-skills/claude-ads) suite. It evaluates an Amazon Ads account against
controls covering profiles/regions, measurement, portfolios, Sponsored and DSP formats,
targeting, search terms, retail readiness, creative, budgets, and ACOS/TACOS economics.

## What it covers
- Normalizes exports, screenshots, API results or manual values while preserving source lineage.
- Evaluates applicable controls only — optional, beta, premium or ineligible features stay unscored.
- Separates observations, diagnoses, recommendations, opportunities and proposed mutations.
- Returns schema-valid findings to the conductor rather than calculating scores itself.
- Keeps every account change a draft until Claude Ads' main mutation gate passes.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs Amazon coverage — see the full [Claude Ads](/claude-skills/claude-ads)
entry for installation and the complete platform list.

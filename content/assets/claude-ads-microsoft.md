---
slug: claude-ads-microsoft
type: claude-skill
title: Microsoft Advertising Audit
fileName: ads-microsoft.skill
summary: >-
  Audits Microsoft Advertising — UET and conversions, Google Ads import,
  syndication, search/audience campaigns, keywords, creative, bidding,
  budgets and Copilot inventory.
category: marketing
tags: [claude-ads, microsoft-ads, bing-ads, uet]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-microsoft
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

**Microsoft Advertising Audit** is the Microsoft-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering Bing Ads accounts including
Google Ads-imported campaigns and Copilot ad inventory.

## What it covers
- Evaluates UET/conversions setup, imports, syndication, account structure, keywords, audiences, creative, bidding, budgets and settings.
- Reads only the relevant shared measurement, benchmark and policy references for Microsoft before scoring.
- Keeps optional, beta, premium or ineligible features unscored rather than counting against account health.
- Never issues universal pause, bid, budget or attribution rules — considers conversion lag, sample size and account maturity.
- Returns platform health, evidence coverage, regulatory exposure and recommendations through Claude Ads' common JSON contract.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs Microsoft Advertising coverage — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation and the complete platform list.

---
slug: claude-ads-linkedin
type: claude-skill
title: LinkedIn Ads Audit
fileName: ads-linkedin.skill
summary: >-
  Audits LinkedIn Ads — Insight Tag and conversions, professional audiences,
  lead generation, ABM, creative, bidding, pacing and policy — for B2B paid
  media accounts.
category: marketing
tags: [claude-ads, linkedin-ads, b2b, lead-gen, abm]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-linkedin
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

**LinkedIn Ads Audit** is the LinkedIn-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, built for B2B accounts running Campaign
Manager, Lead Gen Forms, Thought Leader Ads and ABM campaigns.

## What it covers
- Evaluates measurement, professional-audience targeting, lead generation, ABM, creative, bidding, pacing and automation.
- Reads only the relevant shared measurement, benchmark and policy references for LinkedIn before scoring.
- Keeps optional, beta, premium or ineligible features unscored rather than counting against account health.
- Never issues universal pause, bid, budget or attribution rules — considers conversion lag, sample size and account maturity.
- Returns platform health, evidence coverage, regulatory exposure and recommendations through Claude Ads' common JSON contract.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs LinkedIn Ads coverage — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation and the complete platform list.

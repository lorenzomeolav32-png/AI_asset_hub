---
slug: claude-ads-meta
type: claude-skill
title: Meta Ads Audit
fileName: ads-meta.skill
summary: >-
  Audits Meta Ads — Pixel and Conversions API, attribution, Facebook/Instagram
  creative, audiences, placements, Advantage+ automation, budgets and
  account structure.
category: marketing
tags: [claude-ads, meta-ads, facebook-ads, instagram-ads, pixel, capi]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-meta
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

**Meta Ads Audit** is the Meta-specific worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite, covering Facebook and Instagram accounts
including Pixel/CAPI measurement and Advantage+ automation.

## What it covers
- Evaluates Pixel and Conversions API setup, attribution, creative diversity and fatigue, account structure, audiences, placements and automation.
- Reads only the relevant shared measurement, benchmark, creative and policy references for Meta before scoring.
- Does not apply a benchmark without checking objective, geography, methodology, sample size and account maturity.
- Keeps optional, beta, premium or ineligible features unscored rather than counting against account health.
- Returns platform health, evidence coverage, regulatory exposure and recommendations through Claude Ads' common JSON contract.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor when a Claude Ads
audit run needs Meta Ads coverage — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation and the complete platform list.

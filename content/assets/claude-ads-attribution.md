---
slug: claude-ads-attribution
type: claude-skill
title: Attribution Audit
fileName: ads-attribution.skill
summary: >-
  Audits cross-platform attribution — conversion definitions, reporting
  windows, GA4, AdServices/AdAttributionKit, MMPs, browser/server events and
  offline conversions — and refuses to add up incompatible reports.
category: marketing
tags: [claude-ads, attribution, measurement, ga4, mmp, cross-platform]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-attribution
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

**Attribution Audit** is a cross-platform worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite. It reconciles measurement across every
browser, server, platform, analytics, MMP, offline and app attribution source instead
of trusting any single platform as ground truth.

## What it covers
- Inventories every attribution source with its identity, counting, deduplication and privacy rules.
- Enforces a "comparability gate": incompatible conversion windows/definitions (e.g. Meta 7-day vs.
  Google 30-day) are reported side by side, never summed, until reconciled.
- Explains discrepancies caused by eligibility, view-through rules, consent, modeled data or conversion lag.
- Separates measurement quality from platform-reported performance.
- Never recommends an attribution model without the operator's decision context.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor whenever attribution
or cross-platform conversion questions come up — see the full
[Claude Ads](/claude-skills/claude-ads) entry for installation.

---
slug: claude-ads-monitor
type: claude-skill
title: Paid Media Monitoring
fileName: ads-monitor.skill
summary: >-
  Monitors paid-ad account pacing, delivery, creative fatigue, tracking and
  policy across platforms — separating expected learning and seasonality
  from real anomalies without mutating the account.
category: marketing
tags: [claude-ads, monitoring, pacing, anomaly-detection]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-monitor
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

**Paid Media Monitoring** is the read-only monitoring skill behind `/ads monitor` in the
[Claude Ads](/claude-skills/claude-ads) suite, comparing normalized account snapshots
over time.

## What it covers
- Loads two or more normalized snapshots with compatible account, timezone, currency and attribution definitions.
- Validates data freshness and finalization windows before comparing periods.
- Separates expected learning, seasonality and planned changes from unexplained anomalies.
- Evaluates pacing, delivery, conversion quality, creative fatigue, tracking health and policy status — never mutates the account.
- Refuses to alert on percentage changes with trivial denominators or incomparable windows.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads monitor`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

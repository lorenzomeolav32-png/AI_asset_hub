---
slug: claude-ads-server-side-tracking
type: claude-skill
title: Server-Side Tracking Audit
fileName: ads-server-side-tracking.skill
summary: >-
  Audits server-side paid-media measurement — sGTM, platform conversion APIs,
  event taxonomy, browser/server deduplication, consent and hashing — without
  changing production tracking.
category: marketing
tags: [claude-ads, server-side-tracking, sgtm, conversions-api, capi]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-server-side-tracking
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

**Server-Side Tracking Audit** is a cross-platform worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite for diagnosing conversion-data loss in
server-side tagging setups (sGTM, CAPI, Events API and similar).

## What it covers
- Maps collection, consent, transport, transformation, destination, storage and observability components end to end.
- Compares browser and server event taxonomy, parameters, IDs, timestamps, values, currency and consent state.
- Verifies deduplication, replay handling, retries, latency and diagnostics without exposing personal data.
- Inspects hashing and minimization before transmission — hashing alone doesn't excuse unnecessary data collection.
- Returns failure modes, owner, priority and verification steps as an audit only — never changes production tracking itself.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for server-side
tracking audits — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

---
slug: claude-ads-creative
type: claude-skill
title: Creative Audit
fileName: ads-creative.skill
summary: >-
  Audits paid-ad copy, images and video — attention, clarity, platform-native
  fit, accessibility and fatigue — diagnosed from delivery and response
  evidence, not asset age alone.
category: marketing
tags: [claude-ads, creative-audit, ad-creative, creative-fatigue]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-creative
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

**Creative Audit** is a cross-platform worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite focused purely on ad creative quality and
fatigue, separate from account structure or bidding.

## What it covers
- Inventories assets by concept, hook, offer, format, placement, audience and performance window — cosmetic resizes don't count as distinct concepts.
- Evaluates attention, clarity, brand/offer evidence, platform-native execution, accessibility, destination match and format/safe-zone compliance.
- Diagnoses fatigue only from time-series delivery and response evidence, never from age alone.
- Keeps creative quality, format compliance and measured performance as separate findings.
- Never claims a universal refresh cadence or creative-count threshold — preserves human review for emotional/cultural judgment.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor during audits that
need creative review — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

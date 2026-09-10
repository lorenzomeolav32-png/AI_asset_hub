---
slug: claude-ads-math
type: claude-skill
title: Paid Media Financial Model
fileName: ads-math.skill
summary: >-
  Calculates and models paid-media CPA, CPC, CPM, ROAS, MER, break-even
  targets, contribution margin and LTV:CAC — always showing the formula and
  every input's source.
category: marketing
tags: [claude-ads, roas, cpa, financial-model, unit-economics]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-math
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

**Paid Media Financial Model** is the calculator skill in the
[Claude Ads](/claude-skills/claude-ads) suite for CPA, CPL, CPC, CPM, ROAS, MER,
break-even, contribution margin, LTV:CAC and budget-forecast questions.

## What it covers
- Identifies the decision and collects units, currency, period, margin, attribution basis and uncertainty before calculating.
- Shows the formula and maps every input to an operator value or cited artifact — never a black-box number.
- Validates denominators, sign, missing values, incompatible windows and unit conversions before computing.
- Calculates base, downside and upside cases wherever uncertainty affects the decision.
- Keeps platform-attributed revenue, blended business revenue and contribution margin as distinct figures — never fabricates a missing input.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads math`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

## Installation

This worker skill installs automatically as part of the **Claude Ads** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-ads
   /plugin install claude-ads@ai-marketing-hub-claude-ads
   ```
2. This skill runs on its own whenever the `/ads` conductor needs it; you
   don't call it directly.
3. See the [Claude Ads](/claude-skills/claude-ads) entry for the full setup
   and platform list.

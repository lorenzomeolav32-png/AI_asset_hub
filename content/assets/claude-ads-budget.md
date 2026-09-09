---
slug: claude-ads-budget
type: claude-skill
title: Budget and Bidding
fileName: ads-budget.skill
summary: >-
  Plans and reviews paid-media budgets, bidding and pacing — break-even
  boundaries, marginal-return comparisons and a decision-complete allocation
  plan instead of fixed-ratio rules of thumb.
category: marketing
tags: [claude-ads, budget, bidding, roas, cpa, forecasting]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-budget
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

**Budget and Bidding** is a planning skill in the [Claude Ads](/claude-skills/claude-ads)
suite that turns objective, margin, cash constraints and attribution uncertainty into a
concrete budget/bid plan rather than applying a fixed formula blindly.

## What it covers
- Establishes objective, conversion value, gross margin, cash constraints, sales capacity and seasonality before modeling.
- Calculates break-even boundaries and shows formulas, inputs, uncertainty and sensitivity cases.
- Distinguishes committed baseline, controlled experiments and reserve capacity.
- Compares hold/reallocate/scale/reduce/experiment options using marginal evidence, not blended averages.
- Treats heuristics like 70/20/10 splits or fixed CPA multiples as optional starting points, never universal authorization.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads budget`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

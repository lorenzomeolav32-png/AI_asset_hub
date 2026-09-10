---
slug: claude-ads-plan
type: claude-skill
title: Paid Media Plan
fileName: ads-plan.skill
summary: >-
  Builds a professional paid-advertising strategy — objectives, economics,
  channel selection, campaign architecture, budget, measurement and rollout
  cadence — as an advisory plan, not an account change.
category: marketing
tags: [claude-ads, media-plan, ppc-strategy, channel-planning]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-plan
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

**Paid Media Plan** is the strategic-planning skill behind `/ads plan` in the
[Claude Ads](/claude-skills/claude-ads) suite, turning business economics and audit
evidence into a full-funnel media plan.

## What it covers
- Defines objective, customer, offer, conversion, value, constraints, geography, regulated category and time horizon.
- Evaluates channel roles and exclusions from first principles — does not require every supported platform.
- Specifies campaign architecture, audience strategy, creative system, budget/pacing, measurement, experiments and policy controls.
- Phases prerequisites before launch, learning, optimization and scale, assigning owner/timing/guardrail to every action.
- Stays advisory: a plan only becomes an account change through the launch or optimize mutation gates.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads plan`
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

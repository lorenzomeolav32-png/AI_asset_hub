---
slug: claude-ads-research
type: claude-skill
title: Paid Media Research Refresh
fileName: ads-research.skill
summary: >-
  Refreshes Claude Ads' platform, API, policy and benchmark evidence —
  reverifying or demoting every claim whose `refresh_due` date has expired
  instead of trusting stale data.
category: marketing
tags: [claude-ads, research, evidence-refresh, source-verification]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-research
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

**Paid Media Research Refresh** is the evidence-maintenance skill behind
`/ads research refresh` in the [Claude Ads](/claude-skills/claude-ads) suite, keeping
platform and policy claims from silently going stale.

## What it covers
- Selects the overdue or requested evidence slice and dispatches bounded research workers by platform or topic.
- Prefers official and primary sources, recording URL, publisher, dates, confidence, license and refresh date for every claim.
- Dispatches a separate source verifier for load-bearing claims and records contradictions.
- Treats an expired `refresh_due` as "not current" — demotes the claim to provisional/unsupported and blocks dependent release-current assertions if it can't be reverified.
- Never copies restricted prompts, large source passages or unlicensed code into the repository.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads research
refresh` requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

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

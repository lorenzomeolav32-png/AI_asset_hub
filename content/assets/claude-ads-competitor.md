---
slug: claude-ads-competitor
type: claude-skill
title: Competitor Ad Intelligence
fileName: ads-competitor.skill
summary: >-
  Researches competitor paid-ad presence — messaging, creative, formats,
  landing pages and auction signals — from official transparency libraries and
  terms-compliant public sources only.
category: marketing
tags: [claude-ads, competitor-research, ad-library, competitive-analysis]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-competitor
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

**Competitor Ad Intelligence** is a research skill in the
[Claude Ads](/claude-skills/claude-ads) suite that builds evidence-backed competitive
findings from official ad transparency libraries and other terms-compliant sources —
never by scraping private account surfaces.

## What it covers
- Confirms named competitors, market, geography, customer, objective and decision before researching.
- Records capture date, platform, placement, observable creative/message, landing destination and source URL for every finding.
- Separates direct observations from inferred audience, spend, performance or strategy — never presents estimates as account facts.
- Clusters durable themes, formats, offers, funnel paths and gaps without copying protected creative or text.
- Respects platform terms, robots/access controls, copyright, trademarks and privacy.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for competitor
research requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

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

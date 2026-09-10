---
slug: claude-ads-create
type: claude-skill
title: Campaign Concepts and Copy
fileName: ads-create.skill
summary: >-
  Creates source-grounded paid-ad campaign concepts, messaging, copy and
  creative briefs from a validated brand profile and objective — never
  inventing testimonials, certifications or prices.
category: marketing
tags: [claude-ads, ad-copy, creative-brief, campaign-concepts]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-create
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

**Campaign Concepts and Copy** is a creative-production skill in the
[Claude Ads](/claude-skills/claude-ads) suite. It loads a validated setup/brand profile
and objective, then generates materially distinct campaign concepts rather than
cosmetic rewrites of the same idea.

## What it covers
- Separates factual claims, operator-approved claims and creative hypotheses before writing copy.
- Defines insight, promise, proof, hook, narrative, CTA, objections and platform adaptations per concept.
- Validates copy limits and policy against current platform creative-spec references (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft).
- Returns a versioned creative brief and copy deck inside the run directory.
- Never invents testimonials, certifications, scarcity, prices or regulated claims — human review is required before production.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads create`
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

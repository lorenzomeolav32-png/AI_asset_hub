---
slug: claude-ads-launch
type: claude-skill
title: Campaign Launch
fileName: ads-launch.skill
summary: >-
  Drafts — or, once fully approved, applies — a paid-ad campaign launch
  through Claude Ads' capability-gated adapters, defaulting to `--draft` and
  never supporting permanent deletion.
category: marketing
tags: [claude-ads, campaign-launch, account-mutation, guardrails]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-launch
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

**Campaign Launch** is the account-mutation skill in the
[Claude Ads](/claude-skills/claude-ads) suite behind `/ads launch`. It defaults to
`--draft` and only proceeds to `--apply` once every safety gate passes.

## What it covers
- Refuses to draft a launch that lacks account/object scope, objective, conversion, budget, dates, targeting, assets, destinations, measurement or policy eligibility.
- Produces a deterministic mutation plan with exact proposed objects, before/after state, blast radius, owner, idempotency key and rollback.
- For `--apply`, requires the exact operation to be independently tested and enabled, plus explicit approval of that exact plan.
- Applies the smallest reversible change, verifies remote state, and preserves the audit/rollback record.
- Blocks apply on missing ceilings, stale account state, changed remote state or failed policy review; permanent deletion is not supported.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads launch`
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

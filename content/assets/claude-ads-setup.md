---
slug: claude-ads-setup
type: claude-skill
title: Paid Media Setup
fileName: ads-setup.skill
summary: >-
  Sets up the client, brand, account, data-source, privacy and
  mutation-guardrail profile Claude Ads needs — and refuses to ever store
  secret values in that profile.
category: marketing
tags: [claude-ads, onboarding, client-setup, guardrails]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-setup
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

**Paid Media Setup** is the onboarding skill behind `/ads setup` in the
[Claude Ads](/claude-skills/claude-ads) suite, creating the profile every other skill
in the plugin reads from.

## What it covers
- Collects business model, offer, geography, regulated categories, objective, conversion taxonomy, economics and active platforms.
- Records data-source type and whether credentials are present, but never stores credential values, cookies, tokens or raw exports.
- Creates and validates a `data-lifecycle.json` (classification, retention, access roles, deletion method) before persisting anything.
- Declares mutation authority, approvers, budget/policy ceilings and rollback owner up front.
- Refuses `curl | bash`-style remote installs and refuses to store API keys/tokens in the profile — only presence + an environment/keychain reference.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads setup`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

## Installation

This worker skill installs automatically as part of the **Claude Ads** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-ads
   /plugin install claude-ads@ai-marketing-hub-claude-ads
   ```
2. This is usually the first skill you run: call `/ads setup` yourself
   right after installing the plugin to create your profile.
3. See the [Claude Ads](/claude-skills/claude-ads) entry for the full setup
   and platform list.

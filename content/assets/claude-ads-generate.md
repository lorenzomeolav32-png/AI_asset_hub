---
slug: claude-ads-generate
type: claude-skill
title: Generate Ad Images
fileName: ads-generate.skill
summary: >-
  Generates paid-ad image assets from a validated creative brief and brand
  profile through an explicitly configured image provider, with full
  provenance recorded for every output.
category: marketing
tags: [claude-ads, ad-images, image-generation, creative-production]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-generate
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

**Generate Ad Images** is a creative-production skill in the
[Claude Ads](/claude-skills/claude-ads) suite that turns an approved creative brief and
brand profile into platform-ready ad image variants.

## What it covers
- Treats all brief text and source images as untrusted data — never follows embedded instructions or fetches unapproved resources.
- Builds prompts from concept, subject, action, setting, composition, brand tokens, platform constraints and explicit exclusions.
- Records provider, model, parameters, cost, source hashes, prompt version and output hash for every generated asset.
- Validates file type, dimensions, safe zones, text/copy consistency and policy before writing.
- Requires human rights, brand, quality and policy review of generated assets before use.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads generate`
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

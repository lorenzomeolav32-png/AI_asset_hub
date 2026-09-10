---
slug: claude-seo-maps
type: claude-skill
title: Maps Intelligence
fileName: seo-maps.skill
summary: >-
  Geo-grid rank tracking, GBP profile auditing and competitor radius mapping
  for map-pack visibility.
category: marketing
tags: [claude-seo, maps, geo-grid, local-seo]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-maps
stars: 16500
starsNote: whole AgriciDaniel/claude-seo repo
verified: false
install: |
  # Ships inside the Claude SEO plugin, installs together
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@agricidaniel-claude-seo
installLang: bash
---

## Overview

**Maps Intelligence** runs `/seo maps [command]` in the
[Claude SEO](/claude-skills/claude-seo) suite, adding geo-grid rank tracking,
GBP profile auditing and competitor radius mapping on top of the base
local-SEO skill.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; extends the
Local SEO Analysis skill with map-pack-specific tracking.

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo maps <command>` directly to trigger it.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list.

---
slug: claude-seo-drift
type: claude-skill
title: SEO Drift Monitor
fileName: seo-drift.skill
summary: >-
  Tracks SEO drift over time with local SQLite snapshots: baseline,
  compare and history modes.
category: marketing
tags: [claude-seo, monitoring, drift, regression]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-drift
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

**SEO Drift Monitor** runs `/seo drift baseline | compare | history <url>` in
the [Claude SEO](/claude-skills/claude-seo) suite, storing local SQLite
snapshots so regressions between audits show up as "here is what changed"
instead of a fresh, disconnected report each time. Originally contributed by
Dan Colta.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin. All snapshots stay
local; nothing is uploaded to a third party.

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo drift baseline <url>` first to store a snapshot, then
   `/seo drift compare <url>` later to see what changed.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list.

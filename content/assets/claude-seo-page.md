---
slug: claude-seo-page
type: claude-skill
title: SEO Page Analysis
fileName: seo-page.skill
summary: >-
  Deep single-page analysis of on-page elements, content quality and schema
  markup for one URL.
category: marketing
tags: [claude-seo, on-page, content]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-page
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

**SEO Page Analysis** runs `/seo page <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite: a deep, single-page pass over
on-page elements, content quality and Schema.org markup, without the full
15-subagent site audit.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; shares its
headless-rendering and scoring engine with the full-site audit skill.

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo page <url>` directly to trigger it.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list.

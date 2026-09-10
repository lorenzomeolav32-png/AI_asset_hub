---
slug: claude-seo-backlinks
type: claude-skill
title: Backlink Profile Analysis
fileName: seo-backlinks.skill
summary: >-
  Backlink profile analysis using Moz, Bing Webmaster and Common Crawl data
  sources.
category: marketing
tags: [claude-seo, backlinks, off-page]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-backlinks
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

**Backlink Profile Analysis** runs `/seo backlinks <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite, combining Moz, Bing Webmaster
and Common Crawl data for a free baseline link-profile view.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin. For deeper link
intelligence, pair it with the optional Ahrefs MCP extension (paid, official
`@ahrefs/mcp` server, bring your own account).

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo backlinks <url>` directly to trigger it.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list.

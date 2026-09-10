---
slug: claude-seo-sitemap
type: claude-skill
title: XML Sitemap Analyzer & Generator
fileName: seo-sitemap.skill
summary: >-
  Analyzes existing XML sitemaps or generates new ones from industry
  templates.
category: marketing
tags: [claude-seo, sitemap, xml]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-sitemap
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

**XML Sitemap Analyzer & Generator** runs `/seo sitemap <url | generate>` in
the [Claude SEO](/claude-skills/claude-seo) suite: audit an existing sitemap
for coverage/staleness issues, or generate a new one from an industry
template.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin.

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo sitemap <url | generate>` directly to trigger it.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list.

---
slug: claude-seo-google
type: claude-skill
title: Google SEO APIs Integration
fileName: seo-google.skill
summary: >-
  Tiered integration with Search Console, PageSpeed Insights, CrUX, the
  Indexing API and GA4, plus PDF report generation.
category: marketing
tags: [claude-seo, google-search-console, pagespeed, ga4, requires-api-key]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-google
stars: 16500
starsNote: whole AgriciDaniel/claude-seo repo
verified: false
install: |
  # Ships inside the Claude SEO plugin — installs together
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@agricidaniel-claude-seo
  /seo google setup
installLang: bash
---

## Overview

**Google SEO APIs Integration** runs `/seo google [command]` in the
[Claude SEO](/claude-skills/claude-seo) suite. A 4-tier credential system lets
you start with zero keys (Tier 0: PageSpeed Insights, CrUX) and add Search
Console, GA4 and Keyword Planner data as needed, generating PDF reports via
WeasyPrint + matplotlib.

## Cost note

All 4 tiers use **free** Google API credentials (your own account, normal
quota limits) — no paid third-party service required, unlike some other
extensions in this plugin.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; credentials are
stored locally under `~/.config/claude-seo/` with `0o600` permissions.

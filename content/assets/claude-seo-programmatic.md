---
slug: claude-seo-programmatic
type: claude-skill
title: Programmatic SEO Analysis
fileName: seo-programmatic.skill
summary: >-
  Analyzes and plans programmatic SEO page templates and scale strategy.
category: marketing
tags: [claude-seo, programmatic-seo, scale]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-programmatic
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

**Programmatic SEO Analysis** runs `/seo programmatic <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite, reviewing (or planning)
template-driven page sets for scale risk, including the doorway-page and
parasite-SEO thresholds the plugin enforces elsewhere.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; shares its
30-page warning / 50-page hard-stop thresholds with the local-SEO skill.

---
slug: claude-seo-sxo
type: claude-skill
title: Search Experience Optimization (SXO)
fileName: seo-sxo.skill
summary: >-
  Search Experience Optimization audit — page-type detection, user stories
  and persona alignment.
category: marketing
tags: [claude-seo, sxo, ux]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-sxo
stars: 16500
starsNote: whole AgriciDaniel/claude-seo repo
verified: false
install: |
  # Ships inside the Claude SEO plugin — installs together
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@agricidaniel-claude-seo
installLang: bash
---

## Overview

**Search Experience Optimization (SXO)** runs `/seo sxo <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite, checking whether a page's
experience matches its detected page-type against real user stories and
personas. Originally contributed by Florian Schmitz.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin.

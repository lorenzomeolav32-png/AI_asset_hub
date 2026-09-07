---
slug: claude-seo-cluster
type: claude-skill
title: Semantic Keyword Clustering
fileName: seo-cluster.skill
summary: >-
  SERP-based semantic keyword clustering, contributed by the community
  through the AI Marketing Hub Pro Hub Challenge.
category: marketing
tags: [claude-seo, keyword-clustering, semantic-seo]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-cluster
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

**Semantic Keyword Clustering** runs `/seo cluster <keyword>` in the
[Claude SEO](/claude-skills/claude-seo) suite, grouping keywords by SERP
overlap rather than surface-level string similarity. Originally contributed
by Lutfiya Miller, winner of the AI Marketing Hub Pro Hub Challenge.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin.

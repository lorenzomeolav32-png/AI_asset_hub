---
slug: claude-seo-geo
type: claude-skill
title: GEO / AI Overviews Optimization
fileName: seo-geo.skill
summary: >-
  Scores passage citability and AI-search readiness for Google AI Overviews
  and AI Mode (GEO/AEO).
category: marketing
tags: [claude-seo, geo, aeo, ai-search]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-geo
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

**GEO / AI Overviews Optimization** runs `/seo geo <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite. It scores passage citability
(134-167 word self-contained answer blocks), question-based heading hierarchy
and entity presence, following Google's own position that AEO/GEO are
rebranded labels for SEO rather than a separate discipline.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin. It explicitly
rejects three influencer myths: llms.txt as a citation lever, content chunking
for AI, and AI-specific keyword rewriting.

---
slug: claude-seo-local
type: claude-skill
title: Local SEO Analysis
fileName: seo-local.skill
summary: >-
  Local SEO analysis across Google Business Profile signals, citation (NAP)
  consistency and review intelligence.
category: marketing
tags: [claude-seo, local-seo, gbp, citations]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-local
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

**Local SEO Analysis** runs `/seo local <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite across three layers: Google
Business Profile signals, NAP consistency across directories, and review
intelligence (rating trends, sentiment, response coverage). Enforces a
30-page warning / 50-page hard-stop threshold for multi-location doorway pages.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; its `LocalBusiness`
schema generation is shared with the Schema.org skill.

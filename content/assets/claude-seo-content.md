---
slug: claude-seo-content
type: claude-skill
title: SEO Content & E-E-A-T Analysis
fileName: seo-content.skill
summary: >-
  E-E-A-T and content quality analysis scored against Google's Search
  Quality Rater Guidelines.
category: marketing
tags: [claude-seo, eeat, content-quality]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-content
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

**SEO Content & E-E-A-T Analysis** runs `/seo content <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite. It scores Experience,
Expertise, Authoritativeness and Trustworthiness against the September 2025
Quality Rater Guidelines, and flags AI-generated content that crosses from
"fine" into scaled low-value spam.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; its filler
detector and AI-pattern humanizer are keyed to QRG §4.6.5 and §4.6.6.

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo content <url>` directly to trigger it.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list.

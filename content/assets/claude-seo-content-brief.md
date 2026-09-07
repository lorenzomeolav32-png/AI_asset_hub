---
slug: claude-seo-content-brief
type: claude-skill
title: SEO Content Brief Generator
fileName: seo-content-brief.skill
summary: >-
  Detailed content brief for a target topic — target keywords, outline and
  an internal-linking plan.
category: marketing
tags: [claude-seo, content-brief, keyword-research]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-content-brief
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

**SEO Content Brief Generator** runs `/seo content-brief <topic>` in the
[Claude SEO](/claude-skills/claude-seo) suite, producing a target-keyword list,
content outline and internal-linking plan for a topic before a writer (or
Claude Blog) starts drafting.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; its output is
designed to feed directly into the companion Claude Blog skill.

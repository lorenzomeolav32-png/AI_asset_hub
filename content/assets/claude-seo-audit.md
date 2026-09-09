---
slug: claude-seo-audit
type: claude-skill
title: SEO Full Site Audit
fileName: seo-audit.skill
summary: >-
  Full website audit with parallel sub-agent delegation across technical,
  content, schema and AI-search signals, producing a prioritized action plan.
category: marketing
tags: [claude-seo, audit, technical-seo, evidence]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-audit
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

**SEO Full Site Audit** is the orchestrating skill behind `/seo audit` in the
[Claude SEO](/claude-skills/claude-seo) suite. It fans out up to 15 specialist
subagents in parallel (technical, content, schema, GEO, local, backlinks...)
and converges their findings through the 10-principle methodology into one
prioritized action plan.

## Part of Claude SEO

This is the top-level audit skill of the
[Claude SEO](/claude-skills/claude-seo) plugin; it dispatches the individual
subagents that do the actual analysis.

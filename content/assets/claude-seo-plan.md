---
slug: claude-seo-plan
type: claude-skill
title: Strategic SEO Plan Builder
fileName: seo-plan.skill
summary: >-
  Strategic SEO planning tailored to business type — SaaS, local,
  e-commerce, publisher or agency.
category: marketing
tags: [claude-seo, strategy, planning]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-plan
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

**Strategic SEO Plan Builder** runs `/seo plan <type>` in the
[Claude SEO](/claude-skills/claude-seo) suite, producing an industry-specific
strategy (SaaS, local, e-commerce, publisher or agency) instead of a generic
checklist.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; its industry
detection is shared with the full-site audit orchestrator.

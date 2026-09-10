---
slug: claude-seo-schema
type: claude-skill
title: Schema.org Markup Audit
fileName: seo-schema.skill
summary: >-
  Detects, validates and generates Schema.org / JSON-LD markup, and flags
  deprecated schema types.
category: marketing
tags: [claude-seo, schema-org, json-ld, structured-data]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-schema
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

**Schema.org Markup Audit** runs `/seo schema <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite. It detects, validates (dual
validator: Rich Results Test + Schema Markup Validator) and generates JSON-LD,
and flags retired types (HowTo, FAQPage rich results, SpecialAnnouncement,
ClaimReview and others) with replacement guidance.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; covers
organization, article, product, local, event, job, course and e-commerce
schema (`hasMerchantReturnPolicy`, `MemberProgram`, EU `energyEfficiencyClass`).

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo schema <url>` directly to trigger it.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list.

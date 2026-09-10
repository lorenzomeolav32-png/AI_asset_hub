---
slug: claude-seo-flow
type: claude-skill
title: FLOW Evidence-Led SEO Framework
fileName: seo-flow.skill
summary: >-
  41 evidence-led FLOW framework prompts for SEO strategy, licensed
  separately from the rest of Claude SEO.
category: marketing
tags: [claude-seo, flow, framework, cc-by]
tools: [claude, claude-code]
license: CC-BY-4.0
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-flow
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

**FLOW** runs `/seo flow [stage]` in the [Claude SEO](/claude-skills/claude-seo)
suite: 41 evidence-led prompts sourced from the author's separate
[FLOW](https://github.com/AgriciDaniel/flow) project.

## Licensing note

Unlike the rest of Claude SEO (MIT), the FLOW prompt content itself is
licensed under **CC BY 4.0**, so you may reuse and adapt it with attribution,
but it is not the same permissive terms as the plugin's code. Attribute to
Agrici Daniel / the FLOW project if you redistribute the prompts themselves.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; the skill wrapper
that invokes these prompts is MIT, same as the rest of the plugin.

## Installation

This sub-skill installs automatically as part of the **Claude SEO** plugin,
there's no separate step for it.

1. Install the plugin once, from inside Claude Code:
   ```
   /plugin marketplace add AgriciDaniel/claude-seo
   /plugin install claude-seo@agricidaniel-claude-seo
   ```
2. Run `/seo flow <stage>` directly to trigger it.
3. See the [Claude SEO](/claude-skills/claude-seo) entry for the complete
   setup and skill list. Remember the licensing note above if you plan to
   reuse the FLOW prompts themselves outside the plugin.

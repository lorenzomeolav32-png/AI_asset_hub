---
slug: claude-seo-image-gen
type: claude-skill
title: AI Image Generation for SEO Assets
fileName: seo-image-gen.skill
summary: >-
  Generates OG previews, blog heroes and product photos for SEO assets via
  the optional Claude Banana (Gemini) extension.
category: media-generation
tags: [claude-seo, image-generation, requires-paid-api]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-image-gen
stars: 16500
starsNote: whole AgriciDaniel/claude-seo repo
verified: false
install: |
  # Ships inside the Claude SEO plugin, but this skill needs the Banana
  # extension installed separately (uses Gemini image generation)
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@agricidaniel-claude-seo
  ./extensions/banana/install.sh
installLang: bash
---

## Overview

**AI Image Generation for SEO Assets** runs `/seo image-gen [use-case]` in the
[Claude SEO](/claude-skills/claude-seo) suite, generating OG previews, blog
hero images, product photos and infographics via the companion
[Claude Banana](https://github.com/AgriciDaniel/banana-claude) Creative
Director pipeline (Gemini image models).

## Cost note

⚠️ The skill wrapper is free (MIT), but Gemini image generation through
Claude Banana may incur its own API costs depending on your Gemini plan.
Opt-in only — Claude SEO's core 25 skills work without it.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; one of 8 optional
MCP/data extensions, and the same generation pipeline used across Claude
SEO's sibling skills (Claude Blog).

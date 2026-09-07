---
slug: claude-seo-dataforseo
type: claude-skill
title: DataForSEO Live Data Extension
fileName: seo-dataforseo.skill
summary: >-
  Live SERP data, keyword research, backlinks and AI-visibility checks via
  the optional DataForSEO extension (23 commands, 9 API modules).
category: marketing
tags: [claude-seo, dataforseo, requires-paid-api, serp]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-dataforseo
stars: 16500
starsNote: whole AgriciDaniel/claude-seo repo
verified: false
install: |
  # Ships inside the Claude SEO plugin, but this skill needs the DataForSEO
  # extension installed separately (requires a paid DataForSEO account)
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@agricidaniel-claude-seo
  ./extensions/dataforseo/install.sh
installLang: bash
---

## Overview

**DataForSEO Live Data Extension** runs `/seo dataforseo [command]` in the
[Claude SEO](/claude-skills/claude-seo) suite, bridging 23 data commands
across 9 DataForSEO API modules (live SERP, keyword research, backlinks,
on-page, business listings, AI visibility, LLM mention tracking).

## Cost note

The skill wrapper is free (MIT), but it requires **your own paid
DataForSEO account** to return real data. Opt-in only. Claude SEO's core 25
skills work without it.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin; one of 8 optional
MCP/data extensions.

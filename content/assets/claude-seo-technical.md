---
slug: claude-seo-technical
type: claude-skill
title: SEO Technical Audit
fileName: seo-technical.skill
summary: >-
  Technical SEO audit across 9 categories — crawlability, indexation, Core
  Web Vitals, structured data and more.
category: marketing
tags: [claude-seo, technical-seo, core-web-vitals]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-technical
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

**SEO Technical Audit** runs `/seo technical <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite. It checks 9 technical
categories, including LCP/INP/CLS Core Web Vitals (via CrUX field data, falling
back to Lighthouse lab data), Speculation Rules, bfcache eligibility and
crawlability/indexation signals.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin. Enriched Core Web
Vitals data requires optional, free Google API credentials (`/seo google
setup`); without them, results are lab estimates only.

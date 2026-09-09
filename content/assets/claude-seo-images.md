---
slug: claude-seo-images
type: claude-skill
title: SEO Image Optimization
fileName: seo-images.skill
summary: >-
  Image optimization analysis covering alt text, compression, lazy-loading and
  format recommendations.
category: marketing
tags: [claude-seo, images, performance]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-images
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

**SEO Image Optimization** runs `/seo images <url>` in the
[Claude SEO](/claude-skills/claude-seo) suite, reviewing alt text coverage,
compression, lazy-loading and format choices that affect both rankings and
Core Web Vitals (LCP).

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin.

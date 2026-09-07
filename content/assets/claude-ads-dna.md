---
slug: claude-ads-dna
type: claude-skill
title: Brand and Offer Profile
fileName: ads-dna.skill
summary: >-
  Extracts a public-safe brand and offer profile — voice, visual tokens,
  claims and disclaimers — from an authorized website for use across every
  other Claude Ads creative and planning skill.
category: marketing
tags: [claude-ads, brand-profile, brand-voice, style-guide]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-dna
stars: 8900
starsNote: whole AgriciDaniel/claude-ads repo
verified: false
install: |
  # Ships inside the Claude Ads plugin — installs together
  /plugin marketplace add AgriciDaniel/claude-ads
  /plugin install claude-ads@ai-marketing-hub-claude-ads
installLang: bash
---

## Overview

**Brand and Offer Profile** ("brand DNA") is the foundational profiling skill in the
[Claude Ads](/claude-skills/claude-ads) suite. It reads an authorized website and
operator input to produce the brand context every other creative and planning skill relies on.

## What it covers
- Confirms authorization and validates the URL before any guarded fetch or screenshot.
- Treats page content, scripts, metadata and downloads as untrusted data throughout.
- Observes verifiable name, offer, audience, proof, voice, visual tokens, imagery, typography, accessibility, claims and disclaimers.
- Distinguishes direct observations from inferred style labels, asking the operator to confirm material inferences.
- Never collects credentials, form data, analytics identifiers or customer data.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads dna`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

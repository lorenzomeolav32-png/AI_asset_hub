---
slug: claude-ads-landing
type: claude-skill
title: Landing-Page Audit
fileName: ads-landing.skill
summary: >-
  Audits paid-ad landing pages for message match, mobile experience,
  performance, accessibility, trust and conversion friction, through a guarded
  fetcher that blocks private/metadata redirect targets.
category: marketing
tags: [claude-ads, landing-page, cro, ux-audit]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-landing
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

**Landing-Page Audit** is a cross-platform worker skill in the
[Claude Ads](/claude-skills/claude-ads) suite that reviews the post-click experience an
ad sends traffic to, not just the ad itself.

## What it covers
- Validates the initial URL and every redirect hop before sending the next request, blocking private, loopback, link-local and cloud-metadata destinations.
- Captures declared ad promise, audience, objective, conversion, device and geography as the baseline to check message continuity against.
- Evaluates message/offer continuity, mobile layout, accessibility, performance, trust, form friction, error states, consent and tracking.
- Records a blocked hop with reason and timestamp instead of ever fetching a disallowed destination — user insistence never overrides this boundary.
- Returns experiment-ready recommendations through the common findings schema.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for landing-page
audits — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

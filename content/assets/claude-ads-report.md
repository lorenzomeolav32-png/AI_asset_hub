---
slug: claude-ads-report
type: claude-skill
title: Render Paid Media Reports
fileName: ads-report.skill
summary: >-
  Renders Markdown, HTML or PDF paid-advertising reports from a validated
  Claude Ads JSON run bundle, never from loose worker prose, and never with
  hidden partial-status.
category: marketing
tags: [claude-ads, reporting, client-report, pdf-report]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-report
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

**Render Paid Media Reports** is the rendering skill behind `/ads report` in the
[Claude Ads](/claude-skills/claude-ads) suite — it always renders from the canonical
JSON bundle, never from ad-hoc prose.

## What it covers
- Accepts only a validated versioned report bundle as input.
- Confirms run completeness, evidence coverage, privacy class, branding choice, requested audience and output formats before rendering.
- Renders Markdown, HTML and PDF from the same canonical data and deterministic templates.
- Preserves findings, confidence, evidence references, contradictions, missing inputs and measurement windows in every format.
- Never includes credentials, customer lists, private paths or promotional copy unless the operator explicitly enabled branding — and never hides partial or insufficient-evidence status.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads report`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

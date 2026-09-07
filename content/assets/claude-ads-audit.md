---
slug: claude-ads-audit
type: claude-skill
title: Paid Advertising Audit
fileName: ads-audit.skill
summary: >-
  Runs a full or scoped source-grounded paid-advertising audit across any of
  the 12 supported platforms, dispatching platform workers in parallel and
  producing one versioned JSON bundle before rendering reports.
category: marketing
tags: [claude-ads, audit, ppc, paid-media, scoring, evidence]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-audit
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

**Paid Advertising Audit** is the orchestrating audit skill behind `/ads audit` in the
[Claude Ads](/claude-skills/claude-ads) suite. It never aggregates prose-only worker
reports — it produces a versioned JSON audit bundle first, then renders human
deliverables from that bundle.

## What it covers
- Creates a run manifest (business context, date window, currency, timezone, requested platforms, privacy classification) before analysis.
- Discovers active platforms and confirms — rather than silently skips — requested inactive or data-less ones.
- Dispatches independent platform workers (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit, Pinterest, Snapchat, X) plus cross-platform workers for tracking, budget, creative and policy.
- Runs deterministic scoring outside the prompt, and labels a bundle `partial` whenever a required worker fails — never silently presenting an incomplete audit as complete.
- Outputs `manifest.json`, `account-snapshot.json`, `audit.json`, `action-plan.json`, and rendered `report.md`/`.html`/`.pdf`.

## Part of Claude Ads
This is the top-level audit skill of the [Claude Ads](/claude-skills/claude-ads) plugin;
it dispatches the individual per-platform audit skills listed elsewhere in this directory.

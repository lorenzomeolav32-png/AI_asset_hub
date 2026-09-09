---
slug: claude-ads-validate
type: claude-skill
title: Validate Claude Ads
fileName: ads-validate.skill
summary: >-
  Validates Claude Ads contracts, scores, run bundles, capabilities and
  release readiness — and never promotes maturity just because docs look
  polished or a prior release passed.
category: marketing
tags: [claude-ads, validation, qa, release-readiness]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-validate
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

**Validate Claude Ads** is the QA/release-gate skill behind `/ads validate`, `/ads
status` and `/ads next` in the [Claude Ads](/claude-skills/claude-ads) suite.

## What it covers
- Chooses the narrowest validation target: contract/bundle, scores, a specific run, a capability, the repository, or a release.
- Validates install/uninstall safety — an uninstall may only remove exact paths in the ownership manifest, never an `ads-*` glob (so unrelated skills like `ads-weather` stay untouched).
- Rejects pipe-to-shell install instructions, requiring a native installer or a checksum-verified local archive instead.
- Returns machine-readable pass/fail results, the highest-priority blocker, and exact evidence.
- Demotes stale or unreachable evidence rather than treating tool unavailability as a passing check.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads validate`,
`/ads status` and `/ads next` — see the full [Claude Ads](/claude-skills/claude-ads)
entry for installation.

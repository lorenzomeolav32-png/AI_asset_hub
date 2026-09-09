---
slug: claude-ads-test
type: claude-skill
title: Paid Media Experiment
fileName: ads-test.skill
summary: >-
  Designs and evaluates paid-ad experiments — hypothesis, randomization unit,
  sample size and stopping rule — and refuses to call underpowered noise a
  winner.
category: marketing
tags: [claude-ads, ab-testing, experimentation, statistical-significance]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-test
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

**Paid Media Experiment** is the experimentation skill behind `/ads experiment` in the
[Claude Ads](/claude-skills/claude-ads) suite, for designing and reading out A/B tests
on ad accounts.

## What it covers
- States the decision, causal hypothesis, treatment, control, randomization unit, primary metric and stopping rule up front.
- Checks platform constraints, overlapping experiments, conversion lag, seasonality and interference before sizing.
- Calculates sample size and duration from declared assumptions, disclosing approximations.
- Changes one decision surface at a time unless the design explicitly estimates interactions.
- For readout, verifies assignment integrity and data completeness before estimating effect — never repeatedly peeks and stops on a favorable result.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads experiment`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

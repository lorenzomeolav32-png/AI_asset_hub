---
slug: data-analytics-funnel-analysis
type: claude-skill
title: Funnel Analysis
fileName: data-analytics-funnel-analysis.skill
summary: >-
  Finds exactly which step of a multi-step funnel is losing the most
  users, ranked by revenue impact instead of gut feeling.
category: data-ai
tags: [data-analytics-skills, funnel-analysis, conversion, product-analytics]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/03-data-analysis-investigation/funnel-analysis
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/03-data-analysis-investigation/funnel-analysis ~/.claude/skills/
installLang: bash
---

## Overview
**Funnel Analysis** runs when conversion is low and the team needs to know where users drop off, a product change may have hit a specific step, or an A/B test needs a real baseline before setting a target effect size.

## What it covers
- Defines the ordered funnel steps and the time window a user has to complete them, since ambiguous definitions invalidate the whole analysis.
- Builds a user-level funnel dataset from the events log and calculates step-to-step and overall conversion.
- Analyzes time-to-convert between steps (median, P75, P95) to catch friction that doesn't show up as drop-off.
- Segments the funnel by channel, device, or cohort and ranks segments by conversion.
- Ranks drop-off points by users lost times estimated revenue impact, and produces the funnel report with recommendations.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Analysis & Investigation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/03-data-analysis-investigation/funnel-analysis ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "where are we losing the most users in our signup funnel" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

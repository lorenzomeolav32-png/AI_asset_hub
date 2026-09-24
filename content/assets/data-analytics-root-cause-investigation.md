---
slug: data-analytics-root-cause-investigation
type: claude-skill
title: Root Cause Investigation
fileName: data-analytics-root-cause-investigation.skill
summary: >-
  Drills into an unexpected metric swing dimension by dimension until it
  can name the actual driver, not just correlate with it.
category: data-ai
tags: [data-analytics-skills, root-cause-analysis, metrics, investigation]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/03-data-analysis-investigation/root-cause-investigation
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/03-data-analysis-investigation/root-cause-investigation ~/.claude/skills/
installLang: bash
---

## Overview
**Root Cause Investigation** runs when a key metric drops or spikes unexpectedly, a stakeholder asks "why did this happen," or a post-mortem needs an evidence-based answer instead of a guess.

## What it covers
- Validates the change is real using a z-score against normal variance, and closes the investigation early if it's within range.
- Plots the metric over time to pinpoint whether the change was a sudden step or a gradual drift.
- Decomposes the metric into its parts (for example, revenue as volume times price times mix) to see which component is driving the change.
- Drills down across geography, platform, channel, and segment, ranked by absolute contribution to the change.
- Tests explicit hypotheses against a change log of known events, then documents the primary driver with tiered recommendations.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Analysis & Investigation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/03-data-analysis-investigation/root-cause-investigation ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "why did our activation rate drop 12% last week" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

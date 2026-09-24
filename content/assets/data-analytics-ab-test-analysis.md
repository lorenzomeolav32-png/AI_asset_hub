---
slug: data-analytics-ab-test-analysis
type: claude-skill
title: A/B Test Analysis
fileName: data-analytics-ab-test-analysis.skill
summary: >-
  Checks an experiment for sample ratio mismatch and guardrail regressions
  before it lets you call a winner.
category: data-ai
tags: [data-analytics-skills, ab-testing, statistics, experimentation]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/03-data-analysis-investigation/ab-test-analysis
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/03-data-analysis-investigation/ab-test-analysis ~/.claude/skills/
installLang: bash
---

## Overview
**A/B Test Analysis** runs once an experiment finishes and needs a ship or no-ship call, when results look positive but significance is unclear, or when a disputed result needs a rigorous, documented analysis.

## What it covers
- Confirms the test design: hypothesis, control and treatment definitions, randomization unit, primary metric, and guardrails.
- Runs a chi-square check for sample ratio mismatch and stops to investigate the randomization pipeline if one is found.
- Calculates the rate or mean and 95% confidence interval per variant, then runs a two-proportion z-test or Welch's t-test.
- Checks every guardrail metric for significant degradation, since that blocks a ship regardless of the primary result.
- Synthesizes the SRM check, power, significance, and guardrails into a clear ship, no-ship, or extend recommendation with quantified impact.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Analysis & Investigation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/03-data-analysis-investigation/ab-test-analysis ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "analyze this experiment and tell me if we should ship it" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

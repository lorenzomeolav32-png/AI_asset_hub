---
slug: data-analytics-programmatic-eda
type: claude-skill
title: Programmatic EDA
fileName: data-analytics-programmatic-eda.skill
summary: >-
  Profiles a new dataset end to end, running nulls, outliers, distributions,
  and correlation checks before you trust a single number from it.
category: data-ai
tags: [data-analytics-skills, eda, data-quality, python]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/01-data-quality-validation/programmatic-eda
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/01-data-quality-validation/programmatic-eda ~/.claude/skills/
installLang: bash
---

## Overview
**Programmatic EDA** runs a systematic exploratory data analysis before deeper analysis begins, whenever you get a new dataset and need to know its shape and quality, or a surprising number shows up and you want to check the underlying data first.

## What it covers
- Confirms the row count, dtypes, memory usage, and grain of the dataset first.
- Runs a null profile and flags columns above your quality thresholds.
- Detects outliers with IQR and z-score, and asks you to judge each one as signal or error.
- Summarizes distributions and flags correlated column pairs (`|r| > 0.8`) as possible redundancy.
- Fills a findings summary distilling the top 3 to 5 quality issues before you build anything on top of the data.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Quality & Validation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/01-data-quality-validation/programmatic-eda ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "profile this dataset before I build on it" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

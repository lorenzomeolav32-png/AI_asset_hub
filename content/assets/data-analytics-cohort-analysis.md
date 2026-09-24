---
slug: data-analytics-cohort-analysis
type: claude-skill
title: Cohort Analysis
fileName: data-analytics-cohort-analysis.skill
summary: >-
  Builds a retention matrix and heatmap for any user cohort, so you can see
  exactly when and why a group starts dropping off.
category: data-ai
tags: [data-analytics-skills, cohort-analysis, retention, product-analytics]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/03-data-analysis-investigation/cohort-analysis
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/03-data-analysis-investigation/cohort-analysis ~/.claude/skills/
installLang: bash
---

## Overview
**Cohort Analysis** answers "are we retaining users better than last quarter?" by measuring N-day, weekly, or monthly retention, comparing acquisition cohorts, or pinpointing the period where users typically churn.

## What it covers
- Defines the cohort grouping (signup month, first purchase date) and the retention event (login, purchase, feature use).
- Builds a cohort by period membership table from event data.
- Computes the full retention matrix, period over period, for every cohort.
- Renders a heatmap of the retention matrix plus a time series of retention curves per cohort.
- Writes a narrative report interpreting the figures using a retention metrics glossary for consistent definitions.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Analysis & Investigation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/03-data-analysis-investigation/cohort-analysis ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "how does retention differ across our signup cohorts this year" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

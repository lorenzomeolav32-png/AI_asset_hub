---
slug: data-analytics-business-metrics-calculator
type: claude-skill
title: Business Metrics Calculator
fileName: data-analytics-business-metrics-calculator.skill
summary: >-
  Calculates MRR, churn, LTV to CAC, and the other standard SaaS or
  e-commerce metrics, then grades each one against industry benchmarks.
category: data-ai
tags: [data-analytics-skills, saas-metrics, business-metrics, benchmarking]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/03-data-analysis-investigation/business-metrics-calculator
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/03-data-analysis-investigation/business-metrics-calculator ~/.claude/skills/
installLang: bash
---

## Overview
**Business Metrics Calculator** runs when preparing a board or investor deck, when the team disagrees on how a metric like churn should be calculated, or when benchmarking performance against industry standards.

## What it covers
- Confirms the business model (SaaS, e-commerce, marketplace, product) since that determines which metrics apply.
- Calculates primary metrics per model: MRR, ARR, churned and expansion MRR for SaaS, or GMV, AOV, conversion, and ROAS for e-commerce.
- Calculates unit economics: LTV, CAC, LTV to CAC ratio, payback period, and quick ratio, documenting the assumptions used.
- Grades each metric against industry benchmark thresholds and flags anything outside the acceptable range.
- Assembles a metrics report with trend charts, benchmark comparison, and 3 to 5 key insights.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Analysis & Investigation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/03-data-analysis-investigation/business-metrics-calculator ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "calculate our MRR, churn, and LTV to CAC for the board deck" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

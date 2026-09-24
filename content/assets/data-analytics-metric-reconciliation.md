---
slug: data-analytics-metric-reconciliation
type: claude-skill
title: Metric Reconciliation
fileName: data-analytics-metric-reconciliation.skill
summary: >-
  Traces why the same KPI shows two different numbers in two dashboards,
  down to the exact step where the definitions diverge.
category: data-ai
tags: [data-analytics-skills, metrics, data-quality, debugging]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/02-documentation-knowledge/metric-reconciliation
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/02-documentation-knowledge/metric-reconciliation ~/.claude/skills/
installLang: bash
---

## Overview
**Metric Reconciliation** kicks in when two dashboards disagree on the same KPI, a metric changed unexpectedly after a pipeline update, or a legacy reporting source needs to be merged or deprecated.

## What it covers
- Confirms the exact metric definition (numerator, denominator, filters, time zone) since mismatched definitions are the most common cause of a discrepancy.
- Pulls the metric value from both sources for the same period and computes the absolute and percentage gap.
- Documents an accepted tolerance when the gap is within an agreed threshold, and closes the investigation there.
- Traces each source's computation path step by step to find the divergence point (join type, filter order, null handling, date truncation).
- Classifies the root cause and completes a reconciliation report showing both sources, the gap, and the resolution.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Documentation & Knowledge group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/02-documentation-knowledge/metric-reconciliation ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "why do these two dashboards show different churn numbers" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

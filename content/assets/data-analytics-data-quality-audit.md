---
slug: data-analytics-data-quality-audit
type: claude-skill
title: Data Quality Audit
fileName: data-analytics-data-quality-audit.skill
summary: >-
  Scores a dataset against your own business rules and freshness
  expectations, and names exactly which checks failed instead of a vague
  pass or fail.
category: data-ai
tags: [data-analytics-skills, data-quality, data-governance, audit]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/01-data-quality-validation/data-quality-audit
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/01-data-quality-validation/data-quality-audit ~/.claude/skills/
installLang: bash
---

## Overview
**Data Quality Audit** runs a comprehensive quality assessment right after a pipeline loads new data, when a stakeholder flags a concern about wrong totals or unexpected nulls, or when a data governance process needs a formal quality scorecard.

## What it covers
- Runs a null and completeness audit, then a duplicate check at the full-row and key level.
- Validates referential integrity between parent and child tables and reports the orphan rate.
- Checks values against your own business rules and flags anything out of range.
- Runs a freshness check against the pipeline's expected update lag.
- Scores every finding by severity (critical, high, medium, low) and fills a shareable quality report plus a one-page scorecard.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Quality & Validation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/01-data-quality-validation/data-quality-audit ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "audit this table's quality before we build reports on it" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

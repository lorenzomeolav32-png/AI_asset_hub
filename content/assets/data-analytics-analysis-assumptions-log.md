---
slug: data-analytics-analysis-assumptions-log
type: claude-skill
title: Analysis Assumptions Log
fileName: data-analytics-analysis-assumptions-log.skill
summary: >-
  Keeps a running, timestamped log of every assumption behind an analysis,
  so a stakeholder or auditor can see exactly what was decided and why.
category: data-ai
tags: [data-analytics-skills, documentation, audit-trail, transparency]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/02-documentation-knowledge/analysis-assumptions-log
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/02-documentation-knowledge/analysis-assumptions-log ~/.claude/skills/
installLang: bash
---

## Overview
**Analysis Assumptions Log** starts the moment an analysis has significant scope, method, or data quality choices to make, especially before peer review, stakeholder sign-off, or in a regulated environment where auditability matters.

## What it covers
- Initializes a structured log entry with the analysis name, date, analyst, and the decision it informs.
- Enumerates data assumptions (representativeness, completeness, missing-value handling) with a rationale and a confidence level for each.
- Enumerates business logic assumptions (metric definitions, time windows, inclusion rules) and any alternatives considered.
- Enumerates statistical assumptions relevant to the methods used.
- Flags critical, low-confidence, high-impact assumptions with a validation plan, and updates the log as validation happens.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Documentation & Knowledge group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/02-documentation-knowledge/analysis-assumptions-log ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "log the assumptions behind this analysis before I send it for review" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

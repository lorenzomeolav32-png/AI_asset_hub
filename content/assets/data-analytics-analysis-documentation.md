---
slug: data-analytics-analysis-documentation
type: claude-skill
title: Analysis Documentation
fileName: data-analytics-analysis-documentation.skill
summary: >-
  Writes up an analysis so someone else, or future you, can reproduce it:
  data sources, methodology, assumptions, and the steps to rerun it.
category: data-ai
tags: [data-analytics-skills, documentation, reproducibility]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/02-documentation-knowledge/analysis-documentation
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/02-documentation-knowledge/analysis-documentation ~/.claude/skills/
installLang: bash
---

## Overview
**Analysis Documentation** finalizes an analysis before it goes to stakeholders, hands off work to a teammate or a future you, or archives a recurring analysis so it can be rerun consistently.

## What it covers
- Confirms whether the reader is technical, business, or both, and picks a matching structure.
- Writes the business context: the question asked, who requested it, and the decisions it informs.
- Documents every data source with date range, row count, and known quality issues.
- Records the methodology, tool versions, and key assumptions, referencing the assumptions log if one exists.
- Connects each finding to a business implication and a next action, and documents the exact steps to reproduce the analysis.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Documentation & Knowledge group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/02-documentation-knowledge/analysis-documentation ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "write up this analysis so someone else can rerun it" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

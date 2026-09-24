---
slug: data-analytics-analysis-planning
type: claude-skill
title: Analysis Planning
fileName: data-analytics-analysis-planning.skill
summary: >-
  Breaks a business question into sequenced, time-estimated sub-questions
  before any data gets pulled.
category: data-ai
tags: [data-analytics-skills, planning, workflow, scoping]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/06-workflow-optimization/analysis-planning
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/06-workflow-optimization/analysis-planning ~/.claude/skills/
installLang: bash
---

## Overview
**Analysis Planning** runs right after requirements are gathered and before any data gets touched, especially useful when an analysis has multiple steps, uncertain data availability, or a tight deadline where sequencing matters.

## What it covers
- Decomposes the business question into sub-questions, each answerable with a single data pull or calculation.
- Identifies data dependencies for each sub-question and flags blockers early (confirmed, likely, or unknown availability).
- Sequences the work so each output feeds the next, and identifies which steps can run in parallel.
- Estimates effort per step and compares the total against the deadline.
- Logs risks and dependencies, then produces a sequenced plan with time estimates, plus an optional kickoff doc for stakeholder alignment.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Workflow Optimization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/06-workflow-optimization/analysis-planning ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "plan out this analysis before I start pulling data" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

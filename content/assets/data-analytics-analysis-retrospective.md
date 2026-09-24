---
slug: data-analytics-analysis-retrospective
type: claude-skill
title: Analysis Retrospective
fileName: data-analytics-analysis-retrospective.skill
summary: >-
  Runs a short retro after a project so the same mistake, or the same win,
  doesn't get rediscovered from scratch next time.
category: data-ai
tags: [data-analytics-skills, retrospective, process-improvement, workflow]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/06-workflow-optimization/analysis-retrospective
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/06-workflow-optimization/analysis-retrospective ~/.claude/skills/
installLang: bash
---

## Overview
**Analysis Retrospective** runs within a week of finishing a significant analysis project, while the details are still fresh, or right after one that went wrong, to keep the same failure from happening again.

## What it covers
- Time-boxes the retro (30 minutes solo, 60 minutes for a team) using a structured format like Start/Stop/Continue or the 4Ls.
- Compares the actual timeline, scope, and effort against what was planned, and notes the gaps.
- Captures at least two things that went well, since those matter as much as the problems.
- Applies 5-whys to each issue to find the real cause instead of the symptom.
- Captures reusable learning into templates, reference docs, or team norms, and logs action items with owners and due dates.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Workflow Optimization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/06-workflow-optimization/analysis-retrospective ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "run a retro on the analysis project we just wrapped up" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

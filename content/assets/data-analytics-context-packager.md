---
slug: data-analytics-context-packager
type: claude-skill
title: Context Packager
fileName: data-analytics-context-packager.skill
summary: >-
  Bundles the schema docs, prior findings, and constraints an agent
  actually needs into one token-budgeted context package.
category: data-ai
tags: [data-analytics-skills, prompt-engineering, workflow, ai-assisted-analysis]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/06-workflow-optimization/context-packager
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/06-workflow-optimization/context-packager ~/.claude/skills/
installLang: bash
---

## Overview
**Context Packager** runs before starting an AI-assisted analysis session that needs more than a single prompt, a complex investigation, a multi-step analysis, or work that depends on project-specific knowledge.

## What it covers
- Decides which context layers are needed: task definition, business context, data schema, prior findings, constraints, and output format.
- Merges multiple context files into one structured, deduplicated bundle in the right layering order.
- Estimates the token count and trims lower-priority layers when the bundle is over budget.
- Scores the bundle for completeness, clarity, and relevance before it's used.
- Prepends a clear task statement and saves the package so it can be reused or updated for follow-up sessions.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Workflow Optimization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/06-workflow-optimization/context-packager ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "package up everything you need before we start this investigation" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

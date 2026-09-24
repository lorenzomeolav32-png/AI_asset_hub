---
slug: data-analytics-skills
type: claude-skill
title: Data Analytics Skills
fileName: data-analytics-skills.skill
summary: >-
  Gives Claude Code or Codex 31 ready-to-run analyst workflows, from data
  quality checks to executive summaries, and never needs company setup
  before it's useful.
category: data-ai
tags: [data-analytics-skills, data-analytics, data-quality, eda, sql, dashboards, stakeholder-communication]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills
stars: 448
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/01-data-quality-validation/programmatic-eda ~/.claude/skills/
installLang: bash
testimonials: []
---

## Overview
**Data Analytics Skills** is a library of 31 `SKILL.md` packages that turn Claude Code or Codex into a hands-on analytics partner, covering every stage of an analyst's workflow: data quality checks, deep-dive investigation, documentation, dashboards, and stakeholder communication. Skills follow the open Agent Skills standard, so they also work with other compatible agents like Cursor and Windsurf, and each one ships with real scripts, reference guides, and output templates instead of just a prompt.

## How it works
1. Clone the repo once, then copy only the skill folders you want into your agent's skills directory (`~/.claude/skills/` for Claude Code, `~/.agents/skills/` for Codex).
2. Describe your task naturally, for example "I need to understand why our activation rate dropped 12% last week." The agent matches it to the right skill and activates automatically, no slash command needed.
3. The skill asks only for the minimum context it needs (a dataset, a business question, a threshold), then runs its structured, scripted workflow.
4. It states any assumption it had to make instead of guessing silently, and hands back a consistent output such as a filled report, a reviewed query, or a scored data quality rubric.

## Examples
```
You:    "I need to understand why our activation rate dropped 12% last week"
Agent:  [activates root-cause-investigation, asks for metric data and context]
You:    [provides data and business context]
Agent:  [runs structured investigation with hypothesis testing]
```

To make a skill company-specific, drop a `references/` folder inside it with your own `company-schema.md`, `metric-definitions.md`, and `business-rules.md`. The agent pulls that context in automatically the next time it runs.

## Individual skills
The repo ships as 31 independent skills across 6 categories: data quality and validation, documentation and knowledge, data analysis and investigation, data storytelling and visualization, stakeholder communication, and workflow optimization. Each one is listed as its own entry in this directory under the `data-ai` category, so you can browse what each does on its own and install only what you need.

## Installation
You need Claude Code, Codex, Cursor, or Windsurf.

1. Clone the repo: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy the skill(s) you want, for example `cp -r data-analytics-skills/01-data-quality-validation/programmatic-eda ~/.claude/skills/` for Claude Code, or into `~/.agents/skills/` for Codex.
3. Ask your agent a real question in plain language to confirm it activates the right skill on its own.
4. New to the library? Start with `programmatic-eda` on a familiar dataset, then add `analysis-planning` at the start of your next project.

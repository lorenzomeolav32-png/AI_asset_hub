---
slug: data-analytics-dashboard-specification
type: claude-skill
title: Dashboard Specification
fileName: data-analytics-dashboard-specification.skill
summary: >-
  Writes the brief a dashboard needs before a developer touches it:
  audience, metric hierarchy, layout, and what success looks like.
category: data-ai
tags: [data-analytics-skills, dashboards, requirements, bi]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/04-data-storytelling-visualization/dashboard-specification
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/04-data-storytelling-visualization/dashboard-specification ~/.claude/skills/
installLang: bash
---

## Overview
**Dashboard Specification** runs before a new dashboard is built, when an existing one is confusing and needs a redesign, or when stakeholders and the data team disagree on what it should even show.

## What it covers
- States the dashboard's purpose in one sentence: the question, the audience, and the decision it enables.
- Profiles each target audience by visit frequency, primary question, and technical comfort, since different needs usually mean different dashboards, not more filters.
- Defines a metric hierarchy: hero KPIs, secondary metrics, and detail breakdowns, capped near 10 to 12 metrics total.
- Designs the layout using a hero, trends, breakdowns, details pattern, and specifies every filter and drill-down deliberately.
- Documents the data source and refresh frequency for each metric, and defines how success will be measured.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Storytelling & Visualization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/04-data-storytelling-visualization/dashboard-specification ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "write the spec for a new retention dashboard before we build it" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

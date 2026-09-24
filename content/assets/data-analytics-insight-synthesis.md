---
slug: data-analytics-insight-synthesis
type: claude-skill
title: Insight Synthesis
fileName: data-analytics-insight-synthesis.skill
summary: >-
  Turns a pile of statistics into the 3 to 5 insights worth acting on, each
  scored by impact, confidence, and how actionable it actually is.
category: data-ai
tags: [data-analytics-skills, insights, data-storytelling, prioritization]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/04-data-storytelling-visualization/insight-synthesis
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/04-data-storytelling-visualization/insight-synthesis ~/.claude/skills/
installLang: bash
---

## Overview
**Insight Synthesis** steps in when an analysis has produced many statistics but no clear "so what," or when stakeholders keep asking what the findings mean rather than what was found.

## What it covers
- Lists every statistically meaningful finding as a plain factual statement, without interpreting yet.
- Applies "so what, why, now what" to each finding to turn a fact into a real insight.
- Quantifies the business impact of every insight, since an insight without a number is just an observation.
- Scores each insight on impact, confidence, and actionability, and deprioritizes anything high-impact but low-confidence until it's validated.
- Groups related insights, resolves contradictions, and produces a brief with the top 3 to 5 insights in priority order.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Storytelling & Visualization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/04-data-storytelling-visualization/insight-synthesis ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "turn these findings into the 3 insights worth acting on" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

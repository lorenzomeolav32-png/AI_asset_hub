---
slug: data-analytics-visualization-builder
type: claude-skill
title: Visualization Builder
fileName: data-analytics-visualization-builder.skill
summary: >-
  Picks the right chart for what you're trying to say, then strips out
  every element that doesn't serve that one message.
category: data-ai
tags: [data-analytics-skills, data-visualization, charts, presentation]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/04-data-storytelling-visualization/visualization-builder
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/04-data-storytelling-visualization/visualization-builder ~/.claude/skills/
installLang: bash
---

## Overview
**Visualization Builder** helps you choose the right chart type for a message, fix a chart that's cluttered or misleading, or build consistent, branded, accessible visuals for a report or dashboard.

## What it covers
- Classifies the chart's message type (comparison, trend, composition, distribution, or relationship) since that determines the chart type.
- Confirms the data is aggregated at the right grain before it ever reaches the chart library.
- Builds the base chart with pre-set professional styling and deliberate axis, tick, and scale choices.
- Applies visual hierarchy so the most important element is dominant, and removes anything that doesn't serve the message.
- Titles the chart with the actual finding, annotates key points directly, and exports at the right resolution for print or web.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Storytelling & Visualization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/04-data-storytelling-visualization/visualization-builder ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "build a chart that shows mobile churn is twice desktop" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

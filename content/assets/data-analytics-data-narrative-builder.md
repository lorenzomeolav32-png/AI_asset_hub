---
slug: data-analytics-data-narrative-builder
type: claude-skill
title: Data Narrative Builder
fileName: data-analytics-data-narrative-builder.skill
summary: >-
  Builds a presentation around one central message and a real story arc
  instead of a slide-by-slide data dump.
category: data-ai
tags: [data-analytics-skills, data-storytelling, presentations, communication]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/04-data-storytelling-visualization/data-narrative-builder
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/04-data-storytelling-visualization/data-narrative-builder ~/.claude/skills/
installLang: bash
---

## Overview
**Data Narrative Builder** steps in when a presentation feels like a data dump, a clear finding needs to become compelling, or a senior audience won't read past 5 slides.

## What it covers
- Identifies the single most important message the audience should walk away with; if there's more than one, that's more than one presentation.
- Chooses a narrative framework such as situation-complication-resolution or before-after-bridge to fit the context.
- Assigns an emotional arc to each section so the tone matches the intended reaction at each stage.
- Drafts each section leading with the conclusion, then the supporting evidence, using numbers that serve the story rather than interrupt it.
- Plans one key visual per narrative beat, then writes an opening hook that earns attention in under 10 seconds and a call to action with a specific decision, person, and deadline.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Storytelling & Visualization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/04-data-storytelling-visualization/data-narrative-builder ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "turn these findings into a presentation that makes the case for action" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

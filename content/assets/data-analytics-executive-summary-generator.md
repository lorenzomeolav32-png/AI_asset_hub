---
slug: data-analytics-executive-summary-generator
type: claude-skill
title: Executive Summary Generator
fileName: data-analytics-executive-summary-generator.skill
summary: >-
  Condenses a full analysis into a one or two page brief that leads with
  the decision an executive actually needs to make.
category: data-ai
tags: [data-analytics-skills, executive-summary, stakeholder-communication, reporting]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/04-data-storytelling-visualization/executive-summary-generator
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/04-data-storytelling-visualization/executive-summary-generator ~/.claude/skills/
installLang: bash
---

## Overview
**Executive Summary Generator** condenses a detailed analysis for a senior audience, answers "what's the bottom line" for an executive who won't read the full report, or leads a recurring report with the key message instead of data tables.

## What it covers
- Extracts only the 3 to 5 findings that actually change or reinforce a decision, filtering out anything interesting but not actionable.
- Quantifies the business impact of every insight in real numbers: revenue at risk, cost saving, users affected, time to payback.
- Writes a one-paragraph, jargon-free situation statement explaining why the analysis happened and why the timing matters.
- Applies the pyramid principle, leading each insight with the conclusion before the supporting evidence.
- States each recommendation as a specific action with an owner, an expected outcome, and a deadline, then names the exact decision the executive needs to make.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Storytelling & Visualization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/04-data-storytelling-visualization/executive-summary-generator ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "turn this analysis into a one-page summary for the board" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

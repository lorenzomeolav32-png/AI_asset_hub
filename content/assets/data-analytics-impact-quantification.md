---
slug: data-analytics-impact-quantification
type: claude-skill
title: Impact Quantification
fileName: data-analytics-impact-quantification.skill
summary: >-
  Turns a finding into a defensible low, base, and high impact estimate
  instead of a single made-up number.
category: data-ai
tags: [data-analytics-skills, business-impact, roi, prioritization]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/05-stakeholder-communication/impact-quantification
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/05-stakeholder-communication/impact-quantification ~/.claude/skills/
installLang: bash
---

## Overview
**Impact Quantification** runs after a finding surfaces a potential action, change, or opportunity, producing a defensible numeric estimate stakeholders can act on, or ranking a backlog of initiatives by quantified impact.

## What it covers
- Classifies the impact type: revenue growth, cost reduction, risk reduction, or efficiency gain, since each has its own formula family.
- Gathers baseline metrics, affected population size, expected lift, time horizon, and confidence level.
- Builds a point estimate using the matching script for revenue or cost scenarios.
- Adds low, base, and high uncertainty bounds, since a single number without a range never ships.
- Documents every estimated input's assumption and sensitivity, then packages the full estimate with a recommended action.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Stakeholder Communication group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/05-stakeholder-communication/impact-quantification ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "estimate the revenue impact of fixing this checkout bug" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

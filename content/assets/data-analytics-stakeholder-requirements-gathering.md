---
slug: data-analytics-stakeholder-requirements-gathering
type: claude-skill
title: Stakeholder Requirements Gathering
fileName: data-analytics-stakeholder-requirements-gathering.skill
summary: >-
  Runs a structured intake interview so a vague "can you look into X"
  becomes a signed-off scope before any data gets touched.
category: data-ai
tags: [data-analytics-skills, requirements-gathering, scoping, stakeholder-communication]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/05-stakeholder-communication/stakeholder-requirements-gathering
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/05-stakeholder-communication/stakeholder-requirements-gathering ~/.claude/skills/
installLang: bash
---

## Overview
**Stakeholder Requirements Gathering** runs at the start of any non-trivial analysis request, especially a vague one, when multiple stakeholders have a stake in the outcome, or when the result will drive an important decision.

## What it covers
- Runs an intake interview to surface the business decision, the audience, what "done" looks like, and the real constraints.
- Classifies the decision as strategic, operational, or tactical to calibrate the required rigor and format.
- Documents the business question, success criteria, scope inclusions and exclusions, data sources, and timeline.
- Resolves any remaining ambiguity with techniques like 5-whys or MoSCoW prioritization.
- Gets explicit sign-off on the requirements before converting them into an authoritative analysis brief.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Stakeholder Communication group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/05-stakeholder-communication/stakeholder-requirements-gathering ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "help me scope this vague request before I start pulling data" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

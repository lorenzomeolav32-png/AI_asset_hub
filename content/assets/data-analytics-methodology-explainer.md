---
slug: data-analytics-methodology-explainer
type: claude-skill
title: Methodology Explainer
fileName: data-analytics-methodology-explainer.skill
summary: >-
  Writes the "how did you get that" section in advance, pitched to the
  right audience, with an honest limitation included every time.
category: data-ai
tags: [data-analytics-skills, methodology, transparency, stakeholder-communication]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/05-stakeholder-communication/methodology-explainer
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/05-stakeholder-communication/methodology-explainer ~/.claude/skills/
installLang: bash
---

## Overview
**Methodology Explainer** writes up the method behind any finding that requires trust, an A/B test, an attribution model, a forecast, or a statistical analysis, before distribution rather than after the questions arrive.

## What it covers
- Identifies the audience tier (executive, business analyst, or technical peer) to set the right depth.
- Picks an explanation pattern: narrative, layered summary plus appendix, or Q&A format.
- Drafts the core explanation covering the question asked, the data used, the method applied, and the assumptions made.
- Rewrites statistical terms into their business equivalents using a translation table.
- Adds an honest limitations paragraph every time, since every methodology write-up needs at least one.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Stakeholder Communication group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/05-stakeholder-communication/methodology-explainer ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "write the methodology section before I share this forecast" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

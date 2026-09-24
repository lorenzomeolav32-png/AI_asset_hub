---
slug: data-analytics-analysis-qa-checklist
type: claude-skill
title: Analysis QA Checklist
fileName: data-analytics-analysis-qa-checklist.skill
summary: >-
  Runs an automated and manual pass over an analysis before delivery, so a
  wrong number gets caught before a stakeholder does.
category: data-ai
tags: [data-analytics-skills, qa, quality-assurance, pre-delivery-review]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/05-stakeholder-communication/analysis-qa-checklist
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/05-stakeholder-communication/analysis-qa-checklist ~/.claude/skills/
installLang: bash
---

## Overview
**Analysis QA Checklist** runs before any analysis output, dashboard, report, ad-hoc query, or written finding goes to a stakeholder, every time, since a post-delivery correction always costs more than a pre-delivery check.

## What it covers
- Runs automated checks against the output file to catch numeric, structural, and formatting issues programmatically.
- Works through a logic checklist covering question framing, data sourcing, transformations, statistical validity, and presentation.
- Cross-checks the analysis against a list of common analysis errors for that analysis type.
- Verifies every assumption has a source, is documented, and is sensitivity-tested where uncertain.
- Confirms the conclusion follows from the data and the recommendation is actionable, then records a sign-off with reviewer, issues found, and delivery decision.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Stakeholder Communication group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/05-stakeholder-communication/analysis-qa-checklist ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "QA this report before I send it to the client" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

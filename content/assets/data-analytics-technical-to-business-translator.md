---
slug: data-analytics-technical-to-business-translator
type: claude-skill
title: Technical to Business Translator
fileName: data-analytics-technical-to-business-translator.skill
summary: >-
  Rewrites a technical finding in plain business language and scores the
  result's readability before you send it.
category: data-ai
tags: [data-analytics-skills, stakeholder-communication, plain-language, readability]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/05-stakeholder-communication/technical-to-business-translator
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/05-stakeholder-communication/technical-to-business-translator ~/.claude/skills/
installLang: bash
---

## Overview
**Technical to Business Translator** runs whenever technical output such as model results, statistical tests, or query findings needs to reach a business audience, or before sending your own writing since jargon creeps in without you noticing.

## What it covers
- Detects jargon in the draft text automatically and flags every technical term that needs translating.
- Scores readability with a Flesch-Kincaid grade level, targeting grade 10 or below for executive audiences.
- Matches the reader to a stakeholder persona with its own vocabulary preferences and typical questions.
- Swaps technical language for business equivalents, for example turning "p-value < 0.05" into "95% confident this isn't random chance."
- Drafts the translated version alongside the original in an appendix for technical reviewers.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Stakeholder Communication group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/05-stakeholder-communication/technical-to-business-translator ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "rewrite these model results for a non-technical VP" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

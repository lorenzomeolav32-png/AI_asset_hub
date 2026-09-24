---
slug: data-analytics-peer-review-template
type: claude-skill
title: Peer Review Template
fileName: data-analytics-peer-review-template.skill
summary: >-
  Structures a peer review of someone's analysis into must-fix, should-fix,
  and optional feedback instead of a vague "looks good."
category: data-ai
tags: [data-analytics-skills, peer-review, quality-assurance, workflow]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/06-workflow-optimization/peer-review-template
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/06-workflow-optimization/peer-review-template ~/.claude/skills/
installLang: bash
---

## Overview
**Peer Review Template** runs before any analysis that will influence a significant decision gets delivered: dashboards going to production, reports used for strategic decisions, A/B test conclusions, or anything cited externally.

## What it covers
- Agrees the scope of review upfront: logic check, statistical validity, code review, or presentation clarity.
- Reviews analytical rigor: whether the question and method align, assumptions are valid, and the conclusion is supported by the data.
- Reviews code or SQL for reproducibility, correctness, readability, and performance when the analysis involves code.
- Writes specific, categorized feedback: must-fix issues, should-fix suggestions, and optional improvements.
- Tracks the author's response to each point and records a final sign-off once must-fix items are resolved.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Workflow Optimization group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/06-workflow-optimization/peer-review-template ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "review this teammate's analysis before it ships" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

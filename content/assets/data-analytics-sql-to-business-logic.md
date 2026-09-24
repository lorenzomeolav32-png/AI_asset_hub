---
slug: data-analytics-sql-to-business-logic
type: claude-skill
title: SQL to Business Logic Translator
fileName: data-analytics-sql-to-business-logic.skill
summary: >-
  Translates a SQL query's joins, filters, and aggregations into plain
  business language, and flags the assumptions worth double-checking.
category: data-ai
tags: [data-analytics-skills, sql, documentation, stakeholder-communication]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/02-documentation-knowledge/sql-to-business-logic
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/02-documentation-knowledge/sql-to-business-logic ~/.claude/skills/
installLang: bash
---

## Overview
**SQL to Business Logic Translator** steps in when a stakeholder asks "what exactly does this query calculate?", when a query library needs documenting for non-technical readers, or when legacy undocumented SQL needs translating before a refactor.

## What it covers
- Describes the FROM and JOIN structure in plain language, and flags a join type that seems inconsistent with the query's stated purpose.
- Turns every WHERE filter into a business rule stated in plain English.
- Explains what each GROUP BY and aggregation computes, and at what grain.
- States the business meaning of every output column, including edge cases like nulls and rounding.
- Flags potential issues (null propagation, unexpected fan-out, hardcoded dates) and generates validation questions for the query's author.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Documentation & Knowledge group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/02-documentation-knowledge/sql-to-business-logic ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "explain what this query actually calculates in plain English" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

---
slug: data-analytics-query-validation
type: claude-skill
title: SQL Query Validation
fileName: data-analytics-query-validation.skill
summary: >-
  Reviews a SQL query for correctness, anti-patterns, and slow execution
  plans before it reaches a production dashboard.
category: data-ai
tags: [data-analytics-skills, sql, code-review, performance]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/01-data-quality-validation/query-validation
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/01-data-quality-validation/query-validation ~/.claude/skills/
installLang: bash
---

## Overview
**SQL Query Validation** reviews a query before it's promoted to production, when a query returns surprising results, or when it's running slowly and needs a performance pass.

## What it covers
- Lints the query for syntax errors and style violations, and checks it against a library of known SQL anti-patterns with a severity rating.
- Parses the EXPLAIN plan (when available) to surface slow steps like full table scans or missing indexes.
- Estimates cardinality on joins that could fan out unexpectedly.
- Checks engine-specific behavior for Snowflake, BigQuery, Postgres, or Redshift, since date functions and window behavior differ.
- Fills a review template with correctness, performance, and style findings, plus ranked rewrite suggestions when issues are found.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Quality & Validation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/01-data-quality-validation/query-validation ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "review this query before I put it in the dashboard" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

---
slug: data-analytics-schema-mapper
type: claude-skill
title: Schema Mapper
fileName: data-analytics-schema-mapper.skill
summary: >-
  Maps every source column to its target field, documents the
  transformation logic, and calls out any column that has nowhere to go.
category: data-ai
tags: [data-analytics-skills, etl, schema, data-integration]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/02-documentation-knowledge/schema-mapper
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/02-documentation-knowledge/schema-mapper ~/.claude/skills/
installLang: bash
---

## Overview
**Schema Mapper** documents column-level mappings when you're integrating a new data source, designing an ETL or dbt transformation, auditing a migration, or onboarding a new analyst who needs to know where columns come from.

## What it covers
- Collects the full source and target schema: column names, types, nullability, and descriptions.
- Maps each target column to its source column(s), recording direct mappings and derived mappings separately.
- Documents the exact transformation for every derived mapping, such as a type cast or a coalesce.
- Flags target columns with no source and source columns with no target, and records a decision for each gap.
- Produces a full column-by-column mapping document for review before implementation.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Documentation & Knowledge group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/02-documentation-knowledge/schema-mapper ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "map this source schema to our target model" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

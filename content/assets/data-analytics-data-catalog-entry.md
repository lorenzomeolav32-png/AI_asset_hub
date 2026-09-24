---
slug: data-analytics-data-catalog-entry
type: claude-skill
title: Data Catalog Entry
fileName: data-analytics-data-catalog-entry.skill
summary: >-
  Documents a new table or dataset with real lineage, ownership, and
  quality metrics, so analysts stop asking the same questions about what it
  means.
category: data-ai
tags: [data-analytics-skills, data-catalog, data-governance, metadata]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/02-documentation-knowledge/data-catalog-entry
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/02-documentation-knowledge/data-catalog-entry ~/.claude/skills/
installLang: bash
---

## Overview
**Data Catalog Entry** documents a table the moment it's created and needs to be discoverable, when analysts keep asking the same questions about what it means, or when a compliance requirement mandates documentation of sensitive data.

## What it covers
- Extracts technical metadata (schema, keys, row count) directly from `INFORMATION_SCHEMA` or the source system.
- Collects business context from the data owner: purpose, owning team, criticality, and known use cases.
- Writes a plain-language description and business rules for every column.
- Assesses completeness, freshness, and duplicate rate, and documents known issues.
- Records upstream sources and downstream consumers, then adds access level, sensitivity, and compliance tags before publishing.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Documentation & Knowledge group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/02-documentation-knowledge/data-catalog-entry ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "write a catalog entry for this new table" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

---
slug: data-analytics-semantic-model-builder
type: claude-skill
title: Semantic Model Builder
fileName: data-analytics-semantic-model-builder.skill
summary: >-
  Turns a metric definition that only lives in someone's head into a
  validated YAML file your dbt Semantic Layer, or a similar framework, can
  actually read.
category: data-ai
tags: [data-analytics-skills, semantic-layer, dbt, metrics]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/02-documentation-knowledge/semantic-model-builder
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/02-documentation-knowledge/semantic-model-builder ~/.claude/skills/
installLang: bash
---

## Overview
**Semantic Model Builder** documents a metric, dimension, or entity the moment a stakeholder asks "how is this calculated?" and no canonical definition exists yet, or when you're setting up a dbt Semantic Layer and need real YAML.

## What it covers
- Identifies whether you're documenting a metric, a dimension, or an entity, and picks the matching framework.
- Gathers the calculation logic, business context, data source, grain, and known edge cases.
- Generates a starter YAML template, then validates required fields, types, and cross-references.
- Adds dbt-specific field names and constraints when the target is dbt Semantic Layer.
- Saves the final metric, dimension, and entity definitions as separate YAML files.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Documentation & Knowledge group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/02-documentation-knowledge/semantic-model-builder ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "define our activation rate metric as a dbt semantic model" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

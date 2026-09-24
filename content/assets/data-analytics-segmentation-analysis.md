---
slug: data-analytics-segmentation-analysis
type: claude-skill
title: Segmentation Analysis
fileName: data-analytics-segmentation-analysis.skill
summary: >-
  Runs k-means or rule-based segmentation on your user data and profiles
  each group with the traits that actually make it distinct.
category: data-ai
tags: [data-analytics-skills, segmentation, clustering, customer-analytics]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/03-data-analysis-investigation/segmentation-analysis
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/03-data-analysis-investigation/segmentation-analysis ~/.claude/skills/
installLang: bash
---

## Overview
**Segmentation Analysis** helps when the team needs to know who the best customers are, marketing wants distinct groups to target, or churn is high and at-risk users need identifying before they leave.

## What it covers
- Clarifies the segmentation goal first, since it determines which variables matter and how many segments are useful, typically 3 to 7.
- Selects 3 to 7 attributes and behaviors, handling missing values and scaling before clustering.
- Runs k-means clustering for data-driven segmentation, or applies rule-based logic for business-defined segments.
- Profiles each segment by its defining characteristics expressed as percent above or below the overall average, and names it descriptively.
- Validates that segments are statistically distinct and business-meaningful, then maps each one to a recommended strategy such as retain, monetize, or win back.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Analysis & Investigation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/03-data-analysis-investigation/segmentation-analysis ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "segment our customers by value and behavior" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

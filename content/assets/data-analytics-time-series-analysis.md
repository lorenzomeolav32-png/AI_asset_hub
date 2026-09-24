---
slug: data-analytics-time-series-analysis
type: claude-skill
title: Time Series Analysis
fileName: data-analytics-time-series-analysis.skill
summary: >-
  Decomposes a metric into trend, seasonality, and noise, flags real
  anomalies against your event log, and forecasts what happens next.
category: data-ai
tags: [data-analytics-skills, time-series, forecasting, anomaly-detection]
tools: [claude, claude-code, codex, cursor, windsurf]
license: MIT
author: Nimrod Fisher
source: https://github.com/nimrodfisher/data-analytics-skills/tree/main/03-data-analysis-investigation/time-series-analysis
stars: 448
starsNote: whole nimrodfisher/data-analytics-skills repo
verified: true
install: |
  git clone https://github.com/nimrodfisher/data-analytics-skills.git
  cp -r data-analytics-skills/03-data-analysis-investigation/time-series-analysis ~/.claude/skills/
installLang: bash
---

## Overview
**Time Series Analysis** builds a forecast for operational planning, checks whether a trend is genuine or seasonal, detects anomalies in a metric stream, or measures the real impact of an initiative against a baseline.

## What it covers
- Confirms regular intervals and checks for obvious data quality issues before analysis starts.
- Tests for stationarity, then decomposes the series into trend, seasonal, and residual components with a strength score for each.
- Flags points more than 3 standard deviations from the rolling median and cross-checks the top anomalies against your event log.
- Fits an ARIMA model (or a simpler moving average for short series), validates on a held-out set, and reports the error rate.
- Produces point estimates with 95% confidence intervals and a report covering trend, seasonality, anomalies, and the forecast.

## Part of Data Analytics Skills
This is one of 31 skills in the [Data Analytics Skills](/claude-skills/data-analytics-skills) library, in the Data Analysis & Investigation group.

## Installation
1. Clone the repo once: `git clone https://github.com/nimrodfisher/data-analytics-skills.git`
2. Copy just this skill: `cp -r data-analytics-skills/03-data-analysis-investigation/time-series-analysis ~/.claude/skills/` (or `~/.agents/skills/` for Codex)
3. Ask your agent something like "forecast next quarter's signups and flag any anomalies" and it activates on its own.

See the [Data Analytics Skills](/claude-skills/data-analytics-skills) entry for the full library.

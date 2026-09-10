---
slug: tech-debt-remediation-plan
type: copilot
title: Technical Debt Remediation Plan
fileName: tech-debt-remediation-plan.agent.md
summary: >-
  Produces a markdown remediation plan for a piece of technical debt,
  scoring it on ease of fix, impact and risk of inaction, without making
  any code changes itself.
category: dev-tools
tags: [tech-debt, planning, code-quality]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/tech-debt-remediation-plan.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/tech-debt-remediation-plan.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/tech-debt-remediation-plan.agent.md
installLang: bash
---

## Overview

**Technical Debt Remediation Plan** turns a vague "this code is a mess"
complaint into a concrete, scored document. It only produces the plan,
never the code change, which makes it useful for a backlog grooming
session or a proposal you need sign-off on before touching anything.

## How it works

1. It scores the debt on three 1-5 scales: ease of remediation (how hard
   the fix is), impact (how much it affects code quality) and risk (what
   happens if it's left alone), using color-coded icons for risk level.
2. It writes the plan with fixed sections: overview, explanation of the
   problem and fix approach, requirements, ordered implementation steps
   and how to test the result.
3. It recognizes common debt patterns by name, like missing test
   coverage, outdated dependencies, ineffective design patterns and
   leftover TODO/FIXME markers, so the analysis maps cleanly to a category.
4. Before creating a new GitHub issue, it searches existing issues first
   so debt items don't get duplicated, and applies the repository's chore
   request issue template when one exists.
5. It keeps the output short on purpose. The instructions call for
   concise, actionable recommendations rather than long explanations, so a
   plan is quick to review and approve.

## Examples

```txt
"We have three different date-parsing utilities scattered across the
codebase. Write a remediation plan for consolidating them."
```
The agent returns a summary table (ease: 2, impact: 3, risk: 🟡) plus a
detailed plan with the consolidation steps and how to verify nothing
breaks, without touching any files.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/tech-debt-remediation-plan.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/tech-debt-remediation-plan.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and describe a
   piece of debt to confirm it returns a scored plan instead of editing
   files.

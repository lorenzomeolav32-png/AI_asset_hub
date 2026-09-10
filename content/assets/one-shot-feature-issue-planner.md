---
slug: one-shot-feature-issue-planner
type: copilot
title: One-Shot Feature Issue Planner
fileName: one-shot-feature-issue-planner.agent.md
summary: >-
  Turns a single feature request into a complete, issue-ready GitHub issue
  draft in one pass, no clarifying questions, inferring missing details
  from the codebase and labeling every assumption it makes explicitly.
category: dev-tools
tags: [planning, github-issues, product-management]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/one-shot-feature-issue-planner.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/one-shot-feature-issue-planner.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/one-shot-feature-issue-planner.agent.md
installLang: bash
---

## Overview

**One-Shot Feature Issue Planner** is built around a hard constraint: it
cannot ask you anything. Every gap in your request gets filled with an
inferred, explicitly labeled assumption instead of a follow-up question.

## How it works

1. It inspects the codebase before proposing anything: architecture,
   similar existing features, naming patterns and test locations, so the
   plan reflects real project conventions rather than generic advice.
2. When the request is underspecified, it resolves ambiguity by preferring
   the smallest complete feature that satisfies the request, then
   documents every inferred detail in its own Assumptions section rather
   than hiding the guess.
3. The output follows a fixed template: problem statement, goals,
   non-goals, assumptions, technical approach, phased implementation tasks
   as checklists, testable acceptance criteria, edge cases, non-functional
   requirements, risks and a testing plan.
4. Every acceptance criterion has to be independently testable, and every
   implementation task has to be concrete and sequential enough that
   another engineer or agent could execute it without re-interpreting it.
5. It plans only. It won't write source files or make code changes; the
   entire output is meant to be pasted directly into a new GitHub issue.

## Examples

```txt
"Plan a feature that lets users export their saved reports as CSV."
```

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/one-shot-feature-issue-planner.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/one-shot-feature-issue-planner.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and describe a
   feature to confirm it returns a full issue draft in one pass, with no
   clarifying questions.

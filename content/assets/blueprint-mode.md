---
slug: blueprint-mode
type: copilot
title: Blueprint Mode
fileName: blueprint-mode.agent.md
summary: >-
  Picks one of four fixed workflows (Main, Debug, Express, Loop) for a
  task, then executes it end to end with a numeric self-reflection rubric
  and a confidence threshold that decides whether to ask a clarifying
  question.
category: dev-tools
tags: [workflow, planning, autonomous-agent, code-quality]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/blueprint-mode.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/blueprint-mode.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/blueprint-mode.agent.md
installLang: bash
---

## Overview

**Blueprint Mode** is a structured alternative to open-ended agent
prompting. Instead of improvising an approach for every request, it
classifies the task first, runs a matching workflow, and grades its own
output against a fixed rubric before calling anything finished.

## How it works

1. It classifies the request into one of four workflows: **Main** for
   full feature work (analyze, design, plan, implement, verify),
   **Debug** for reproducing and fixing a specific bug, **Express** for
   small, low-risk changes touching two files or fewer, and **Loop** for
   repetitive changes across many files.
2. It never assumes a library's API. It checks `package.json`,
   `requirements.txt`, imports and neighboring files before using anything,
   and matches the project's existing style and conventions.
3. Once a workflow is chosen, it runs autonomously, batching independent
   reads and edits in parallel and only sequencing steps that depend on
   each other.
4. Before declaring a task complete, it scores its own solution 1-10 on
   correctness, robustness, simplicity, maintainability and consistency.
   Anything scoring below 8 sends it back to design or implementation, up
   to three retries.
5. It only asks the user a question when its confidence in interpreting
   the request drops below 90 out of 100. Otherwise it proceeds and reports
   a final status of completed, partially completed or failed.

## Examples

```txt
"Add rate limiting to the /api/upload endpoint."
```
The agent classifies this as Main workflow, analyzes the existing
middleware pattern, designs the rate limiter, implements it, then verifies
and self-scores the result before reporting back.

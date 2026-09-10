---
slug: task-researcher
type: copilot
title: Task Researcher
fileName: task-researcher.agent.md
summary: >-
  Research-only specialist that is not allowed to touch source code. It
  investigates a task using the codebase and external docs, then writes
  its findings to a dated file under .copilot-tracking/research, narrowing
  multiple approaches down to one recommended solution.
category: research
tags: [research, planning, documentation]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/task-researcher.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/task-researcher.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/task-researcher.agent.md
installLang: bash
---

## Overview

**Task Researcher** exists to separate research from implementation. Its
own instructions forbid it from editing anything outside a single
directory, so it can be handed a vague or open-ended question without
risking changes to the actual codebase.

## How it works

1. It analyzes the codebase, existing conventions and any relevant
   instructions files to understand how the project already solves similar
   problems.
2. For anything outside the repo, it uses documentation search and
   GitHub repository search to find authoritative examples, and
   cross-checks findings across more than one source before trusting them.
3. All output goes into `.copilot-tracking/research/`, using a dated
   filename and a fixed template with sections for research executed, key
   discoveries, complete code examples, and a recommended approach.
4. When it finds more than one viable approach, it documents the
   trade-offs of each, then asks the user to pick one instead of leaving
   every option in the final file.
5. Once a direction is chosen, it deletes the discarded alternatives from
   the research document, so what remains is a single, actionable plan
   ready to hand to an implementation agent.

## Examples

```txt
"Research how we should add background job processing to this API and
compare it against what other services in this monorepo already use."
```
The agent writes `.copilot-tracking/research/20260909-background-jobs-research.md`
with the comparison and its recommendation, without touching any
application code.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/task-researcher.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/task-researcher.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and ask it a
   research question to confirm it writes findings to
   `.copilot-tracking/research/` instead of editing code.

---
slug: debug-mode-agent
type: copilot
title: Debug Mode Agent
fileName: debug.agent.md
summary: >-
  A four-phase Copilot agent for systematic debugging: reproduce the bug
  first, trace the root cause, apply a minimal fix, then verify with tests
  instead of guessing at a patch.
category: dev-tools
tags: [debugging, workflow, testing]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/debug.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  # Copy into your repo's agents folder (VS Code / Copilot CLI pick it up automatically)
  mkdir -p .github/agents
  curl -o .github/agents/debug.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/debug.agent.md
installLang: bash
---

## Overview

**Debug Mode** turns Copilot into a structured debugging assistant instead of
one that jumps straight to a patch. It works through four phases: assessing
the problem, investigating the root cause, applying a fix and verifying it,
refusing to move to the next phase until the current one holds up.

## How it works

1. It reads the error messages and stack traces first, then reproduces the
   bug before touching any code, documenting expected versus actual behavior.
2. It traces the execution path, checks recent git history for the change
   that likely introduced the bug, and ranks hypotheses by likelihood before
   picking one to test.
3. It makes a targeted, minimal change instead of a broad rewrite, weighing
   edge cases and side effects along the way.
4. Finally, it reruns the original reproduction steps plus the wider test
   suite, then reports the root cause and any preventive changes.

## Examples

```txt
"Debug why the checkout API returns a 500 only when the cart has
more than 10 items."
```

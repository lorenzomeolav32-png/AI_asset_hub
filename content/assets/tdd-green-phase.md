---
slug: tdd-green-phase
type: copilot
title: TDD Green Phase Agent
fileName: tdd-green.agent.md
summary: >-
  Second stage of the TDD workflow: writes the smallest amount of code that
  makes the current failing test pass, without touching the test itself.
category: testing-qa
tags: [tdd, testing, workflow, github-issues]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/tdd-green.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/tdd-green.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/tdd-green.agent.md
installLang: bash
---

## Overview

The middle stage of the TDD trio, picking up after
[TDD Red](/copilot-agents/tdd-red-phase) and handing off to
[TDD Refactor](/copilot-agents/tdd-refactor-phase). Its instructions are
blunt about the goal: get to green as fast as possible, and defer code
quality to the refactor phase.

## How it works

1. It writes just enough code to satisfy the current failing test,
   starting with hard-coded returns from issue examples when that's the
   fastest path to green.
2. It implements only what the current issue asks for; anything mentioned
   in comments as a future enhancement stays out of scope for this pass.
3. Duplication and rough design are accepted temporarily, on the
   understanding the refactor phase will clean them up.
4. It runs the entire test suite, not just the new test, to confirm
   nothing else broke.
5. The test written in the Red phase should not need to change here.

## Examples

```txt
"Make the failing email-validation test pass with the simplest
implementation you can."
```

## Installation

You need VS Code with the GitHub Copilot extension. Consider installing
[TDD Red](/copilot-agents/tdd-red-phase) and
[TDD Refactor](/copilot-agents/tdd-refactor-phase) alongside it, they're
meant to be used together.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/tdd-green.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/tdd-green.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat once you have a
   failing test, and confirm it writes only enough code to pass it.

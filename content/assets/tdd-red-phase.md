---
slug: tdd-red-phase
type: copilot
title: TDD Red Phase Agent
fileName: tdd-red.agent.md
summary: >-
  First stage of a three-agent TDD workflow: writes one focused failing test
  at a time from GitHub issue requirements, and verifies it fails for the
  right reason before any implementation exists.
category: testing-qa
tags: [tdd, testing, workflow, github-issues]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/tdd-red.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/tdd-red.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/tdd-red.agent.md
installLang: bash
---

## Overview

This is the first of a three-agent TDD workflow (Red, then
[Green](/copilot-agents/tdd-green-phase), then
[Refactor](/copilot-agents/tdd-refactor-phase)). Its only job is to write a
failing test, one at a time, before any production code exists.

## How it works

1. It extracts the issue number from the branch name, fetches the linked
   GitHub issue and reads its requirements, comments and linked PRs for
   edge cases.
2. It writes the simplest failing test for a single behavior, never
   several tests in one pass, and confirms the plan with you before
   writing anything.
3. It runs the test to confirm it fails because the implementation is
   missing, not because of a syntax error.
4. It uses Jest/Vitest for JS/TS, pytest for Python, JUnit 5 with AssertJ
   for Java/Kotlin, or xUnit/NUnit for .NET, with the Arrange-Act-Assert
   structure throughout.
5. It names the test after the behavior and issue number, so it's clear
   which requirement it covers.

## Examples

```txt
"Write the first failing test for issue #142: reject signups with
an invalid email format."
```

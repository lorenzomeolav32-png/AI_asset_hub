---
slug: tdd-refactor-phase
type: copilot
title: TDD Refactor Phase Agent
fileName: tdd-refactor.agent.md
summary: >-
  Third stage of the TDD workflow: cleans up duplication and design, and
  hardens security (input validation, secrets, OWASP) while keeping every
  test green.
category: testing-qa
tags: [tdd, testing, workflow, security, github-issues]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/tdd-refactor.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/tdd-refactor.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/tdd-refactor.agent.md
installLang: bash
---

## Overview

The closing stage of the TDD trio, run after
[TDD Green](/copilot-agents/tdd-green-phase) once the tests are passing. It
cleans up the quick-and-dirty implementation and adds a security pass, all
while keeping the test suite green throughout.

## How it works

1. It removes duplication, applies SOLID principles, and simplifies any
   method that grew too complex during the Green phase.
2. It validates inputs, checks for hardcoded secrets, scans dependencies
   for known vulnerabilities, and works through an explicit OWASP Top 10
   checklist.
3. It refactors in small steps, rerunning tests after each one instead of
   batching several refactors together.
4. It cross-checks the implementation against the GitHub issue's
   acceptance criteria, and either closes the issue or opens follow-up
   issues for anything left over.
5. Every refactor step must leave the test suite passing; a broken test
   blocks moving to the next step.

## Examples

```txt
"Refactor the email-validation code now that the test is green, and
check it against the OWASP checklist."
```

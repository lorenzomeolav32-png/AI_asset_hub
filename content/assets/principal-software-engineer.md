---
slug: principal-software-engineer
type: copilot
title: Principal Software Engineer Agent
fileName: principal-software-engineer.agent.md
summary: >-
  A senior engineering reviewer in the style of Martin Fowler: SOLID/DRY/YAGNI
  judgment calls, test-pyramid coverage, and mandatory GitHub issues for any
  technical debt it flags.
category: dev-tools
tags: [code-review, architecture, mentoring, technical-debt]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/principal-software-engineer.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/principal-software-engineer.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/principal-software-engineer.agent.md
installLang: bash
---

## Overview

This agent reviews code and designs the way a principal engineer would: it
balances craft against delivery pressure instead of chasing either extreme.
Its instructions explicitly model it on Martin Fowler, and it applies Gang of
Four patterns, SOLID, DRY, YAGNI and KISS pragmatically rather than by rote.

## How it works

1. It reviews requirements carefully, documents assumptions explicitly, and
   calls out edge cases and risks up front.
2. It checks that a design meets the architectural requirements without
   over-engineering it, favoring good-over-perfect delivery while never
   dropping engineering fundamentals.
3. It expects a clear test pyramid across unit, integration and end-to-end
   tests, not just unit coverage.
4. When it spots technical debt, it must offer to open a GitHub issue to
   track remediation rather than let the finding disappear in a review
   comment.

## Examples

```txt
"Review this PR for architectural soundness and open issues for
any technical debt you find."
```

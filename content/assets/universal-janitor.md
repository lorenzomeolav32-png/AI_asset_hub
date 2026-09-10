---
slug: universal-janitor
type: copilot
title: Universal Janitor
fileName: janitor.agent.md
summary: >-
  Cleans up any codebase by deleting unused code, flattening unnecessary
  complexity and auditing dependencies, on the premise that removing
  code is the most effective refactor available.
category: dev-tools
tags: [code-cleanup, tech-debt, refactoring]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/janitor.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/janitor.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/janitor.agent.md
installLang: bash
---

## Overview

**Universal Janitor** works from a single premise stated right in its
instructions: less code is less debt, and deletion is the most powerful
refactor available. It's built for the cleanup pass after a feature ships,
not for building new functionality.

## How it works

1. It measures what's actually used before removing anything: unused
   functions, variables, imports and dependencies, dead code paths, and
   commented-out debug leftovers.
2. It simplifies what's left by inlining single-use functions, flattening
   nested conditionals, and swapping custom implementations for built-in
   language features where one already exists.
3. It audits dependency hygiene: removing packages that are declared but
   unused, flagging outdated packages with known vulnerabilities, and
   consolidating similar dependencies that do overlapping jobs.
4. It applies the same lens to tests (deleting obsolete or duplicate
   ones, removing flaky tests) and to documentation (removing stale
   comments and boilerplate) as it does to application code.
5. It validates continuously rather than batching every deletion into one
   change: measure first, delete safely, test after each removal, and
   repeat.

## Examples

```txt
"Clean up the utils/ folder, it's grown a lot of dead code over the last
year."
```
The agent finds functions with zero call sites, removes them along with
their now-unused imports, runs the test suite after each deletion, and
reports what it removed.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/janitor.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/janitor.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and point it at a
   folder to confirm it measures usage before deleting anything.

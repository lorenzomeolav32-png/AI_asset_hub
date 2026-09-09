---
slug: modernization-agent
type: copilot
title: Modernization Agent
fileName: modernization.agent.md
summary: >-
  A human-in-the-loop legacy modernization workflow that reads every
  service, repository and controller file in a codebase, documents each
  business feature in its own markdown file, then proposes a modern
  stack and a step-by-step migration plan.
category: dev-tools
tags: [legacy-migration, documentation, architecture]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/modernization.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/modernization.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/modernization.agent.md
installLang: bash
---

## Overview

**Modernization Agent** is built for the part of a legacy migration that
usually gets skipped: actually understanding what the old system does
before replacing it. It reads every business logic file rather than
sampling a few, and won't move to recommendations until that reading is
complete.

## How it works

1. It identifies the tech stack and architectural pattern from project and
   manifest files, then catalogs every service, repository, domain model
   and controller it needs to read.
2. It reads each of those files individually and groups them by business
   feature (for example CarModel or DriverManagement), rather than
   summarizing the codebase at a high level.
3. For every feature it finds, it writes a dedicated markdown file under
   `/docs/features/` with the feature's purpose, business rules, workflows
   and specific code references down to file and line number.
4. It re-reads all the generated feature docs to synthesize a single
   `/docs/README.md`, and reports its file coverage (for example "40/40
   files analyzed") before asking whether the analysis is complete.
5. Once you approve the analysis, it proposes a modern stack and
   architecture with its reasoning, then generates an implementation plan
   and a `/modernizedone/` folder structure that starts with shared
   cross-cutting code before migrating individual features.

## Examples

```txt
"Help me modernize this ASP.NET WebForms app."
```
The agent works through all nine steps of its workflow autonomously,
reporting progress ("Analyzed 5/12 features") without stopping, and only
pauses at the two checkpoints: after the full analysis, and after
proposing a new stack.

## Notes

This is a heavyweight agent meant for repositories with real depth
(the instructions call out 1000+ files or complex business logic as the
sweet spot). For a small script or a simple app, a lighter refactor agent
will be faster.

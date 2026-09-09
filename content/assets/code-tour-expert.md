---
slug: code-tour-expert
type: copilot
title: Code Tour Expert
fileName: code-tour.agent.md
summary: >-
  Writes VS Code CodeTour .tour files: guided, step-by-step walkthroughs
  of a codebase with file references, directory steps and command links,
  aimed at making onboarding faster for new engineers.
category: dev-tools
tags: [onboarding, documentation, developer-experience]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/code-tour.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/code-tour.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/code-tour.agent.md
installLang: bash
---

## Overview

**Code Tour Expert** produces the actual `.tour` JSON files that the
CodeTour VS Code extension reads, rather than writing a static README that
goes stale the moment the code moves.

## How it works

1. It analyzes the codebase first: entry points, architecture, and the
   concepts a new developer needs to understand before touching any
   specific file.
2. It builds tours from typed steps: content steps for pure explanation,
   directory steps to highlight project structure, and file/line steps tied
   to a specific pattern or line number, so a step still points at the
   right place even after the file is edited.
3. It supports git-ref versioning per tour (none, current branch, a fixed
   commit, or a tag), matching how stable the tour content needs to stay
   against the code changing underneath it.
4. It can chain tours together with `nextTour`, and mark one tour as
   primary, so a new hire gets routed through an ordered onboarding
   sequence instead of a single flat document.
5. It recommends running CodeTour Watch or Watcher in CI to detect when a
   tour's file references drift out of date after a refactor, catching
   that at PR review instead of leaving a tour silently broken.

## Examples

```txt
"Create an onboarding tour that walks a new engineer through how a
request flows from the API route to the database."
```

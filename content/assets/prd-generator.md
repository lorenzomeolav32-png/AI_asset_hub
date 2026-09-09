---
slug: prd-generator
type: copilot
title: PRD Generator
fileName: prd.agent.md
summary: >-
  Interviews you with 3-5 clarifying questions, reviews the codebase for
  constraints, then writes a full Product Requirements Document with user
  personas, functional requirements and testable user stories, and can
  turn each story into a GitHub issue on request.
category: productivity
tags: [product-management, documentation, planning]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/prd.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/prd.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/prd.agent.md
installLang: bash
---

## Overview

**PRD Generator** acts like a senior product manager producing a real
Product Requirements Document before implementation starts, rather than
jumping straight into code from a one-line feature request.

## How it works

1. Before writing anything, it asks 3-5 clarifying questions to fill gaps
   like target audience, key features and constraints, phrased
   conversationally rather than as a form.
2. It reviews the existing codebase for architecture, integration points
   and technical constraints before drafting requirements, so the PRD
   reflects what's actually feasible in this project.
3. It follows a fixed template: product overview, goals, personas,
   functional requirements, UX flow, success metrics, technical
   considerations, milestones and user stories, each story with its own
   requirement ID and testable acceptance criteria.
4. Every user interaction gets covered, including primary, alternative and
   edge cases, and it explicitly checks that authentication and
   authorization needs are addressed when relevant.
5. Once you approve the draft, it asks whether to create GitHub issues
   from the user stories, and if you agree it creates them and replies
   with links to each one.

## Examples

```txt
"Write a PRD for adding a saved-search feature to the dashboard."
```

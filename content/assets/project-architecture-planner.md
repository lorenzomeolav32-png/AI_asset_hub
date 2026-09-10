---
slug: project-architecture-planner
type: copilot
title: Project Architecture Planner
fileName: project-architecture-planner.agent.md
summary: >-
  A cloud-agnostic architecture planner that runs a discovery interview, then
  delivers a tech stack evaluation, a phased scalability roadmap, a cost
  model and Mermaid/HTML/draw.io diagrams.
category: dev-tools
tags: [architecture, planning, diagrams, cost-analysis]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/project-architecture-planner.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/project-architecture-planner.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/project-architecture-planner.agent.md
installLang: bash
---

## Overview

This agent plans software architecture end to end, from a greenfield idea to
an existing codebase that needs direction. It's explicitly cloud agnostic and
framework agnostic, and it does not generate application code: the output is
plans, diagrams and cost models.

## How it works

1. It asks about business context, expected scale, team size and budget
   before recommending anything, adjusting how deep it goes based on
   whether the project is a simple app, growth-stage or enterprise-scale.
2. It recommends at least two architecture styles (monolith, modular
   monolith, microservices, serverless, event-driven) with their
   trade-offs, rather than a single default.
3. Tech stack candidates are scored on team fit, ecosystem maturity,
   scalability, cost and hiring market, with a primary and alternative
   choice per layer (frontend, backend, database...).
4. The roadmap phases the plan across MVP, growth (1K to 100K users) and
   scale (100K+), specifying what changes and why at each stage.
5. It produces a cloud-agnostic monthly cost model per phase and a
   multi-cloud comparison when relevant.
6. It generates Mermaid diagrams embedded in markdown, an interactive HTML
   preview page, and a draw.io export for every plan.

## Examples

```txt
"Plan the architecture for a B2B SaaS expecting 500 users at launch
and 50k within two years."
```

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/project-architecture-planner.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/project-architecture-planner.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and describe a
   project to confirm it interviews you before proposing a stack.

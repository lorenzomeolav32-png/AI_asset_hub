---
slug: crewai
type: ai-workflow
title: CrewAI
fileName: crewai.workflow
summary: >-
  Code-first Python framework for orchestrating autonomous, role-based AI
  agents (Crews) alongside precise event-driven workflows (Flows), built to
  run standalone in production.
category: data-ai
tags: [code-first, multi-agent, python-framework, agents, orchestration]
tools: [claude-code, cursor, codex, windsurf]
license: MIT
author: crewAI, Inc.
source: https://github.com/crewAIInc/crewAI
stars: 58200
verified: true
install: |
  uv tool install crewai
  crewai create crew <project_name>
  cd <project_name>
  crewai install
  crewai run
installLang: bash
---

## Overview

**CrewAI** is a lean, code-first Python framework for orchestrating
autonomous AI agents, with no visual canvas and no dependency on LangChain. It
gives developers two complementary primitives: **Crews**, role-based teams
of agents that collaborate autonomously, and **Flows**, event-driven
workflows with explicit state and branching for precise control.

## How it works

- Define agents in `agents/*.jsonc` (role, goal, backstory, tools, LLM,
  memory) and tasks/process in `crew.jsonc`; `crewai run` loads the
  definition directly.
- Use **Crews** when you want agents to delegate and collaborate with
  flexible, autonomous decision-making.
- Use **Flows** (`@start`, `@listen`, `@router` decorators, plus `or_`/`and_`
  conditions) when you need deterministic, event-driven control over
  execution paths, and call Crews as steps inside a Flow.
- Ships official skills for Claude Code, Cursor, Codex and Windsurf
  (`crewAIInc/skills`) that teach the coding agent CrewAI's own patterns for
  scaffolding projects and designing agents/tasks.
- Supports tools, memory, checkpointing, async execution and MCP/A2A for
  production-grade agents; anonymous telemetry only (no prompts/outputs
  collected unless you opt in).

## Examples

- A hierarchical Crew of a market analyst and a researcher agent, combined
  in a Flow that routes to different strategies based on a confidence score.
- Automating job-posting or trip-planning pipelines from the official
  `crewAI-examples` repo.
- Installing the CrewAI skill pack so Claude Code or Cursor scaffolds a new
  Crew/Flow project following CrewAI's own conventions.

## Installation

You need Python 3.10 or newer. The commands below use uv, a fast Python
package and tool manager; install it first if you don't already have it
(`pip install uv`, or the standalone installer from Astral's docs).

1. Install CrewAI as a global tool:
   ```bash
   uv tool install crewai
   ```
2. Scaffold a new project:
   ```bash
   crewai create crew <project_name>
   cd <project_name>
   ```
3. Install the project's own dependencies:
   ```bash
   crewai install
   ```
4. Open the generated `.env` file and add the API key for whichever LLM
   you're using (OpenAI, Anthropic, or another provider).
5. Run the crew:
   ```bash
   crewai run
   ```

If you're adding CrewAI to an existing coding agent instead of running it
standalone, install the official skill pack for Claude Code, Cursor, Codex or
Windsurf from the `crewAIInc/skills` repo so the agent follows CrewAI's own
project conventions.

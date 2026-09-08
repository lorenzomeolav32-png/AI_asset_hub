---
slug: langgraph
type: ai-workflow
title: LangGraph
fileName: langgraph.workflow
summary: >-
  Low-level Python framework from LangChain for building stateful,
  long-running AI agents with durable execution, human-in-the-loop control
  and persistent memory.
category: data-ai
tags: [code-first, multi-agent, graph, low-level, agents, stateful]
license: MIT
author: LangChain, Inc.
source: https://github.com/langchain-ai/langgraph
stars: 41300
verified: true
install: |
  pip install -U langgraph
installLang: bash
---

## Overview

**LangGraph** is a low-level orchestration framework for building, managing
and deploying long-running, stateful agents, used in production by
companies like Klarna, Replit and Elastic. Unlike opinionated agent
frameworks, it gives you graph primitives (nodes, edges, state) and lets you
build your own abstraction on top — it can be used standalone, without
LangChain.

## How it works

- **Durable execution**: agents persist through failures and resume exactly
  where they left off on long-running tasks.
- **Human-in-the-loop**: inspect and modify agent state at any point during
  execution before it continues.
- **Comprehensive memory**: short-term working memory for a single run plus
  long-term memory that persists across sessions.
- Debug with **LangSmith**: trace execution paths, capture state
  transitions and get runtime metrics for complex agent behavior.
- Pairs with **Deep Agents** (a higher-level package built on LangGraph) if
  you want planning/subagents/file-system access without building the graph
  primitives yourself.

## Examples

- A durable customer-support agent that survives a process restart mid-task
  and resumes from its last checkpoint.
- Adding a human-approval step inside an agent's execution graph before a
  high-stakes action runs.
- Building a custom multi-agent architecture from scratch when CrewAI's
  higher-level `Crew`/`Flow` abstraction is too opinionated for the use case.

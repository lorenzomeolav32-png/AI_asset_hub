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
build your own abstraction on top. It can be used standalone, without
LangChain.

## How it works

Agents get durable execution: they persist through failures and resume
exactly where they left off on long-running tasks. You can also inspect or
modify agent state at any point during execution before it continues
(human-in-the-loop), and memory covers both short-term working state for a
single run and long-term memory that persists across sessions. For
debugging, LangSmith traces execution paths, captures state transitions and
reports runtime metrics. If you want planning, subagents or file-system
access without building the graph primitives yourself, pair LangGraph with
Deep Agents, a higher-level package built on top of it.

## Examples

- A durable customer-support agent that survives a process restart mid-task
  and resumes from its last checkpoint.
- Adding a human-approval step inside an agent's execution graph before a
  high-stakes action runs.
- Building a custom multi-agent architecture from scratch when CrewAI's
  higher-level `Crew`/`Flow` abstraction is too opinionated for the use case.

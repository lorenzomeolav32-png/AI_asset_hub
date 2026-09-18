---
slug: what-are-ai-workflows-and-how-to-install-one
title: What are AI workflows, and how do you install one?
summary: >-
  In this directory, an AI workflow is a self-hosted platform or framework for
  wiring automations and LLM agents together, not a single file you drop in.
  Here's the difference between the two shapes it comes in, and how to run one.
kind: tutorial
tags: [ai-workflows, automation, agents, tutorial, setup]
date: 2026-09-18
reviewBy: 2026-11-18
---

An "AI workflow" here doesn't mean one downloadable file. It's a full platform
or framework you run yourself, and what "install" means depends entirely on
which one you pick. Two are visual, drag-and-drop builders you self-host with
Docker. Two are Python frameworks you `pip install` and write code against. This
guide covers both shapes and gets you running one, whichever fits your task.

## Pick the shape you actually need

[Activepieces](/ai-workflows/activepieces) is the closest thing here to a
Zapier alternative: a visual canvas with 280+ integrations, and every one of
those integrations doubles as an MCP tool you can hand to an agent in Claude
Desktop, Cursor, or Windsurf. [Dify](/ai-workflows/dify) and
[Langflow](/ai-workflows/langflow) are also visual, but built specifically for
LLM apps: Dify bundles a full RAG pipeline, model management, and LLMOps in one
workspace, while Langflow is the lighter of the two, fully MIT-licensed, with
one-click export of a flow as an API or MCP server.

If you'd rather write code than drag nodes, [CrewAI](/ai-workflows/crewai) and
[LangGraph](/ai-workflows/langgraph) are both code-first Python frameworks for
multi-agent systems, no visual canvas at all. CrewAI is the more opinionated of
the two: you define `Crew`s (role-based agents collaborating) and `Flow`s
(event-driven control). LangGraph is lower-level: you build your own agent
abstraction out of graph nodes and edges, with durable execution and
persistent memory built in.

## Before you start

For Activepieces, Dify, or Langflow: Docker with the Compose plugin, and git.
For CrewAI or LangGraph: Python 3.10 or newer and pip. You don't need both sets
of tooling unless you plan to try more than one.

## Run a visual builder

Activepieces is the simplest of the three to get running locally:

```bash
git clone https://github.com/activepieces/activepieces
cd activepieces
docker compose up
```

The first run pulls every image, so it takes a few minutes. Dify and Langflow
follow the same clone-and-compose pattern; check their asset pages for the
exact commands, since the services each one starts differ.

**Checkpoint:** once the containers report healthy, open the app in your
browser and create the first admin account. If the page won't load, check that
Docker is actually running and that nothing else is bound to the same port.

## Run a code-first framework

LangGraph installs like any Python package:

```bash
pip install -U langgraph
```

**Checkpoint:** run `python -c "import langgraph"`. No error means it's ready
to import in your own script. CrewAI's asset page has the equivalent install
command and a minimal `Crew` example to run right after.

## Use one

On a visual builder, you build a flow on the canvas: trigger, steps, branches,
optionally a code step when the built-in pieces aren't enough. In Activepieces
specifically, you can also open any piece's MCP settings and paste the
generated URL into an agent client instead of building a flow by hand. On a
code-first framework, you write Python: define your `Crew`/`Flow` in CrewAI, or
your graph's nodes and edges in LangGraph, then run the script directly.

## Two things worth knowing before you commit to one

Dify's license isn't plain Apache-2.0. It's Apache-2.0 with two added
conditions: you can't remove the frontend logo/copyright, and you can't run it
as a multi-tenant SaaS for others without a separate commercial license. Normal
self-hosted use for your own product is fine. Langflow, CrewAI, and LangGraph
are all clean MIT with no such carve-out.

CrewAI and LangGraph look similar from a distance (both code-first, both
Python, both for multi-agent systems) but sit at different levels: CrewAI gives
you `Crew` and `Flow` already defined, LangGraph gives you graph primitives and
expects you to build your own abstraction on top. Pick CrewAI to move fast with
an opinionated structure, LangGraph when you need to control exactly how state
and control flow move between agents.

Browse the full list at [AI Workflows](/ai-workflows) for install details
specific to each one. These five are what's catalogued today, not a permanent
ceiling: this category grows as new self-hostable platforms and frameworks get
reviewed and added.

---
slug: langflow
type: ai-workflow
title: Langflow
fileName: langflow.workflow
summary: >-
  Visual Python platform for building and deploying AI agents and workflows,
  with full component source access, multi-agent orchestration and one-click
  export as an API or MCP server.
category: data-ai
tags: [visual-builder, agents, llm, mcp, low-code, python]
tools: [mcp]
license: MIT
author: Langflow
source: https://github.com/langflow-ai/langflow
stars: 154500
verified: true
install: |
  uv pip install langflow -U
  uv run langflow run
  # Opens at http://127.0.0.1:7860
installLang: bash
---

## Overview

**Langflow** is a visual authoring platform for AI agents and workflows,
written in Python. Every component's source is editable in place (with hot
reload during local development), and a flow can be exported as a plain API
or deployed directly as an **MCP server**, turning it into a tool any MCP
client can call.

## How it works

- Build flows on a drag-and-drop canvas, then test them step by step in the
  interactive playground.
- Orchestrate multiple agents with conversation management and retrieval
  built in.
- Deploy the same flow as a REST API, export it as JSON for a Python app, or
  expose it as an MCP server for LLM clients.
- Hook up LangSmith or LangFuse for observability.
- **Langflow Desktop** ships all dependencies bundled for Windows/macOS, so
  you don't need to manage a Python environment to get started.

## Examples

- Prototyping a RAG or multi-agent flow visually, then exporting it as an
  MCP tool for Claude Desktop, Cursor or Windsurf.
- Running Langflow Desktop locally to experiment without any Python setup.
- Wrapping a flow as a REST API to call from an existing application.

---
slug: graphify
type: claude-skill
title: Graphify
fileName: graphify.skill
summary: >-
  Turns a codebase, plus its docs, PDFs, images, and video, into a queryable
  knowledge graph that a coding agent can traverse instead of grepping raw
  files, and never guesses silently: every edge is tagged EXTRACTED, INFERRED,
  or AMBIGUOUS so you know what was found versus inferred.
category: dev-tools
tags: [knowledge-graph, code-analysis, ast, tree-sitter, mcp, rag, graphrag]
tools: [claude, claude-code, cursor, copilot, codex, gemini-cli]
license: Apache-2.0
author: Safi Shamsi (safishamsi)
source: https://github.com/Graphify-Labs/graphify
stars: 119179
verified: true
install: |
  uv tool install graphifyy      # or: pipx install graphifyy
  graphify install               # registers the skill with your AI assistant
installLang: bash
---

## Overview

**Graphify** builds a knowledge graph out of a project's code, docs, PDFs,
images, and video/audio, then lets an AI assistant query, traverse, and
explain it instead of re-reading raw files on every question. Code is parsed
locally with tree-sitter (deterministic AST extraction across ~40 languages,
no LLM call, nothing leaves the machine); docs, PDFs, images, and media go
through the assistant's own model (or a configured API key) for a semantic
pass. It's built as a `/graphify` skill for Claude Code, Cursor, Codex,
Gemini CLI, GitHub Copilot and 15+ more platforms.

## How it works

1. **Extract.** `graphify install` registers the skill; running `/graphify .`
   parses the target folder into nodes (concepts, files, symbols) and edges
   (calls, imports, inherits, references).
2. **Confidence-tag every edge.** Each connection is marked `EXTRACTED`
   (explicit in the source), `INFERRED` (resolved by graphify), or
   `AMBIGUOUS`, so nothing is silently guessed.
3. **Cluster into communities.** Leiden community detection groups the graph
   into subsystems with LLM-free or LLM-named labels, surfacing "god nodes"
   (the most-connected concepts).
4. **Query instead of grep.** `graphify query "<question>"`, `graphify path A
   B`, and `graphify explain "<concept>"` return a scoped subgraph rather than
   dumping the whole codebase into context.
5. **Stay current automatically.** `graphify hook install` rebuilds the graph
   on every commit and branch switch (AST only, no API cost); `graphify
   update .` re-syncs it after a pull or merge.
6. **Optional MCP server.** `python -m graphify.serve graphify-out/graph.json`
   exposes `query_graph`, `get_node`, `get_neighbors`, `shortest_path`,
   `list_prs`, `get_pr_impact`, and `triage_prs` as MCP tools, over stdio or
   Streamable HTTP for a shared team server.

## Examples

```txt
$ graphify explain "APIRouter"
Node: APIRouter
  Source:    routing.py L2210
  Community: 2
  Degree:    47

Connections (47):
  --> RequestValidationError [uses] [INFERRED]
  --> Dependant [uses] [INFERRED]
  --> .get() [method] [EXTRACTED]

$ graphify path "FastAPI" "ModelField"
Shortest path (3 hops):
  FastAPI --uses--> DefaultPlaceholder <--references-- get_request_handler() --references--> ModelField
```

## Licensing note

The project relicensed from MIT to **Apache-2.0** (per the `LICENSE` file and
`NOTICE`: "Copyright 2026 Safi Shamsi and the Graphify contributors...
licensed under the Apache License, Version 2.0"). Portions contributed before
the relicensing remain available under the original MIT terms, retained
verbatim in `LICENSE-MIT`. If redistributing any of the source, preserve the
`NOTICE` file as Apache-2.0 requires; listing, linking, and quoting the
README for our directory is fine with attribution.

## Installation

You need Python 3.10+ and `uv` (recommended) or `pipx`.

1. Install the CLI: `uv tool install graphifyy` (the PyPI package is
   `graphifyy`, double-y, while the `graphify` name is being reclaimed; the
   command itself is still `graphify`).
2. Register the skill with your assistant: `graphify install` (add
   `--project` to install into the current repo instead of your user
   profile, or use a per-platform command like `graphify cursor install`).
3. Restart or reopen your AI assistant, then type `/graphify .` in the
   project you want mapped (on Windows PowerShell, use `graphify .` without
   the leading slash).
4. Verify it worked: confirm `graphify-out/graph.html`, `GRAPH_REPORT.md`,
   and `graph.json` were created, then ask `graphify query "<a question about
   your project>"` and check the answer cites real files/lines.

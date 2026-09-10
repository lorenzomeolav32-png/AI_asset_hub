---
slug: mcp-memory
type: mcp-server
title: Memory MCP Server
fileName: memory.mcp
summary: >-
  Official reference MCP server for persistent memory: a local knowledge graph
  of entities, relations and observations so an agent remembers facts across chats.
category: dev-tools
tags: [memory, knowledge-graph, official, reference-server]
tools: [claude, claude-code, cursor, vscode]
license: MIT
author: Anthropic / Model Context Protocol
source: https://github.com/modelcontextprotocol/servers/tree/main/src/memory
verified: true
install: |
  npx -y @modelcontextprotocol/server-memory
installLang: bash
---

## Overview

**Memory** is one of the official Model Context Protocol reference servers. It
implements persistent memory as a local knowledge graph, so a model can
remember facts about a user or project across separate conversations instead
of starting from zero every time.

## How it works

1. **Entities** are the graph's nodes: a name, an entity type (person,
   organization, event...) and a list of observations.
2. **Relations** are directed, active-voice links between entities (e.g.
   `John_Smith` `works_at` `Anthropic`).
3. **Observations** are atomic facts attached to an entity, added or removed
   independently of the entity itself.
4. Tools cover creating/deleting entities, relations and observations,
   reading the whole graph, and searching or opening specific nodes by name.
   The graph is also exposed as a readable MCP Resource
   (`memory://knowledge-graph`) that emits update notifications on mutation.
5. Storage defaults to a local `memory.jsonl` file, configurable via the
   `MEMORY_FILE_PATH` environment variable.

## Examples

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

## Installation

You need Node.js 18+.

1. Add the server to your MCP client's config using the block in the
   sidebar.
2. Restart your client.
3. Optional: set `MEMORY_FILE_PATH` to control where the knowledge graph
   is stored (it defaults to a local `memory.jsonl` file).
4. Ask the agent to remember a fact, then start a new conversation and ask
   it to recall it, to confirm persistence works.

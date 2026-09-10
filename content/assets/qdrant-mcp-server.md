---
slug: qdrant-mcp-server
type: mcp-server
title: Qdrant MCP Server
fileName: qdrant-mcp-server.mcp
summary: >-
  Qdrant's official MCP server, turning the Qdrant vector database into a
  semantic memory layer with two tools: store information and find it
  again by meaning instead of exact keywords.
category: data-ai
tags: [qdrant, vector-database, semantic-search, memory, official]
tools: [claude, claude-code, cursor, vscode, copilot]
license: Apache-2.0
author: Qdrant
source: https://github.com/qdrant/mcp-server-qdrant
stars: 1500
verified: true
install: |
  # Via uvx, pointing at a Qdrant instance:
  QDRANT_URL="http://localhost:6333" COLLECTION_NAME="my-collection" \
    uvx mcp-server-qdrant
installLang: bash
---

## Overview

**Qdrant MCP Server** turns Qdrant into a semantic memory layer for an
agent: two tools, one to store a piece of information and one to retrieve
it later by meaning, backed by real vector search instead of exact string
matching.

## How it works

1. `qdrant-store` saves a piece of text plus optional metadata into a named collection,
   creating the collection automatically if it doesn't exist yet.
2. `qdrant-find` searches that collection with a natural-language query and returns the
   most semantically relevant stored entries, not just keyword matches.
3. By default it embeds text locally with FastEmbed
   (`sentence-transformers/all-MiniLM-L6-v2`), so it works against a local or
   self-hosted Qdrant instance without calling an external embedding API.
4. The tool descriptions for store and find are fully customizable via
   environment variables, which is how the same server gets repurposed as a
   semantic code-search tool for Cursor or Windsurf instead of a generic
   memory store.
5. `QDRANT_READ_ONLY=true` disables the store tool entirely, useful when you want an agent to
   search an existing knowledge base without being able to add to it.

## Examples

```txt
"Store this design decision in Qdrant so I can find it again later: we
chose event sourcing for the orders service because of the audit
requirement."
```

## Installation

You need `uv` (recommended) or Python with `pip`, and a running Qdrant
instance (local via Docker, or Qdrant Cloud).

1. Make sure you have a Qdrant instance reachable, for example:
   ```bash
   docker run -p 6333:6333 qdrant/qdrant
   ```
2. Add the server to your MCP client's config, setting `QDRANT_URL` and
   `COLLECTION_NAME` as shown in the sidebar.
3. Restart your client.
4. Ask the agent to store a note, then ask it to find that note again by
   meaning, to confirm search works.

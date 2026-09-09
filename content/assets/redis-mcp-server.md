---
slug: redis-mcp-server
type: mcp-server
title: Redis MCP Server
fileName: redis-mcp-server.mcp
summary: >-
  Redis's official MCP server for natural-language data operations:
  strings, hashes, lists, sets, sorted sets, streams, pub/sub and JSON,
  plus vector index management for search.
category: data-ai
tags: [redis, database, caching, vector-search, official]
tools: [claude, claude-code, cursor, vscode, copilot]
license: MIT
author: Redis
source: https://github.com/redis/mcp-redis
stars: 618
verified: true
install: |
  # From PyPI, via uvx (recommended):
  uvx --from redis-mcp-server@latest redis-mcp-server --url redis://localhost:6379/0
installLang: bash
---

## Overview

**Redis MCP Server** is Redis's own natural-language interface to a Redis
instance. It covers the full range of Redis data structures, not just basic
get/set, so an agent can build on things like streams and pub/sub without
writing raw Redis commands.

## How it works

1. It exposes typed tools per data structure: strings with expiration,
   hashes (including vector embeddings), lists, sets, sorted sets for
   leaderboard-style ranking, streams with consumer groups, and JSON
   documents with path-based access.
2. Pub/sub tools support stateful channel and pattern subscriptions, so an
   agent can subscribe once and keep reading queued messages across
   several calls rather than re-subscribing each time.
3. A dedicated query engine manages vector indexes and runs vector search
   directly against Redis, useful for retrieval-augmented generation
   workflows that already store embeddings there.
4. It supports EntraID (Azure Active Directory) authentication for Azure
   Managed Redis, with automatic token renewal, alongside standard
   username/password and TLS connections.
5. A `docs` tool searches Redis's own documentation and best practices, so an agent
   can look up the right approach before running a command instead of
   guessing at Redis semantics.

## Examples

```txt
"Cache the result of this API call in Redis with a 10 minute expiration,
keyed by the request parameters."
```

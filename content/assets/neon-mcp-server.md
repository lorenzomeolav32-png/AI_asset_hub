---
slug: neon-mcp-server
type: mcp-server
title: Neon MCP Server
fileName: neon-mcp-server.mcp
summary: >-
  Neon's official, remote MCP server for its serverless Postgres platform:
  create and branch databases, run migrations on a temporary branch first,
  and tune slow queries, all through natural language.
category: data-ai
tags: [postgres, database, serverless, branching, official]
tools: [claude, claude-code, cursor, vscode, copilot]
license: MIT
author: Neon (Databricks)
source: https://github.com/neondatabase/mcp-server-neon
stars: 629
verified: true
install: |
  # One-command setup for Cursor, VS Code and Claude Code:
  npx neon@latest init

  # Or add the remote hosted server directly (OAuth):
  # { "mcpServers": { "Neon": { "type": "http", "url": "https://mcp.neon.tech/mcp" } } }
installLang: bash
---

## Overview

**Neon MCP Server** is Neon's own remote MCP server, hosted at
`mcp.neon.tech`, for managing Postgres projects on Neon's serverless platform.
It leans on Neon's branching model to make schema changes and query tuning
reversible instead of applying them straight to production.

## How it works

1. It manages projects, branches and compute endpoints directly: creating a
   project, branching a database, resetting a branch to its parent's
   current state, or restoring from a snapshot.
2. Migrations follow a two-step pattern: `prepare_database_migration` creates a temporary branch, applies the
   migration there, and hints the agent to test it before
   `complete_database_migration` merges it into the main branch and cleans up the temporary
   one.
3. Query tuning works the same way: it analyzes a slow query, proposes
   optimizations like new indexes on a temporary branch, and only applies
   them for real once you approve the results.
4. Fifteen built-in diagnostics (`inspect_database`) cover relation and index sizes, cache hit rate, autovacuum and
   bloat, and replication state, the same checks behind Neon's own `neon inspect db` CLI command.
5. Read-only mode is available at the OAuth scope level or via a
   `?readonly=true` URL parameter, disabling every tool that could create,
   delete or modify data.

## Examples

```txt
"Add a created_at column to the users table on the my-project database.
Test it on a branch first before touching the main branch."
```

## Notes

Neon's own docs say this server is meant for local development and IDE
integrations, not for production environments, since an agent connected to
it can run real schema changes and SQL against your databases.

## Installation

You need Node.js for the `npx` setup command, or nothing locally if you
connect straight to the remote hosted server. Either way, you need a Neon
account.

1. Quickest path: run `npx neon@latest init`. It detects Cursor, VS Code or
   Claude Code and configures the connection for you, including OAuth
   login.
2. Or add the remote server manually using the block in the sidebar, then
   sign in with OAuth when your client prompts you.
3. Restart your client and confirm it can list your Neon projects.
4. Treat this as a development and IDE tool. Per Neon's own guidance, don't
   connect it to a production workflow without review.

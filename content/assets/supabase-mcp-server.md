---
slug: supabase-mcp-server
type: mcp-server
title: Supabase MCP Server
fileName: supabase-mcp-server.mcp
summary: >-
  Supabase's official, remote MCP server for managing Supabase projects:
  tables, database branches, config and queries, connected through OAuth
  with no local install required.
category: data-ai
tags: [supabase, postgres, database, backend-as-a-service, official]
tools: [claude, claude-code, cursor, vscode, copilot]
license: Apache-2.0
author: Supabase
source: https://github.com/supabase/mcp
stars: 2900
verified: true
install: |
  # Add the remote hosted server directly (OAuth):
  {
    "mcpServers": {
      "supabase": {
        "type": "http",
        "url": "https://mcp.supabase.com/mcp"
      }
    }
  }
installLang: json
---

## Overview

**Supabase MCP Server** is Supabase's own hosted MCP endpoint for managing a
Supabase project without leaving your AI client. It's a single URL you
connect to, with no local process to run, since Supabase runs the server
side for you.

## How it works

1. Connecting to `mcp.supabase.com/mcp` triggers an OAuth login, and you pick which
   Supabase organization and project the client should have access to.
2. It covers project-level management: creating and inspecting tables,
   reading configuration, and running queries against your database
   through natural language rather than the SQL editor.
3. A `project_ref` parameter and a `read_only` flag on the connection URL let you scope a
   client to one specific project and, optionally, block every
   write-capable tool for that connection.
4. Self-hosted and local (Supabase CLI) Supabase instances also expose an
   MCP endpoint, though currently with a smaller set of tools and without
   OAuth, since there's no central Supabase account involved.
5. The repository also ships a separate PostgREST MCP server as a
   companion package, for exposing your own REST API to your own users'
   agents rather than managing the Supabase project itself.

## Examples

```txt
"Connect to my Supabase project and show me the schema of the orders
table, then write a query that finds orders with no matching customer
record."
```

## Notes

Supabase's own security guidance recommends reading their MCP security best
practices before connecting an agent to a real project, since the server
can read and modify live data depending on the scopes you grant it.

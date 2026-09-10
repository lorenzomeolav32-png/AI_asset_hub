---
slug: mcp-sequential-thinking
type: mcp-server
title: Sequential Thinking MCP Server
fileName: sequential-thinking.mcp
summary: >-
  Official reference MCP server for structured, step-by-step reasoning: lets
  an agent break a problem into revisable, branching thoughts instead of a
  one-shot answer.
category: dev-tools
tags: [reasoning, planning, official, reference-server]
tools: [claude, claude-code, cursor, vscode, codex]
license: MIT
author: Anthropic / Model Context Protocol
source: https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking
verified: true
install: |
  npx -y @modelcontextprotocol/server-sequential-thinking
installLang: bash
---

## Overview

**Sequential Thinking** is one of the official Model Context Protocol
reference servers. It exposes a single tool that structures a model's
reasoning into discrete, numbered thoughts that can be revised or branched,
rather than forcing a single-shot response to a complex problem.

## How it works

1. The client calls the `sequential_thinking` tool once per reasoning step,
   passing the current `thought`, its `thoughtNumber`, an estimated
   `totalThoughts`, and whether `nextThoughtNeeded` is true.
2. A thought can mark itself as a revision of an earlier one (`isRevision`,
   `revisesThought`) or branch off an earlier thought (`branchFromThought`,
   `branchId`), so reasoning can backtrack or explore alternatives.
3. The host decides how many times to call the tool while it works through a
   problem; you do not call it by hand unless your client exposes raw tool
   calls.
4. Fits problems like planning a migration with risk analysis, debugging an
   environment-specific failure, or comparing architecture options where an
   early assumption might turn out wrong.

## Examples

```json
{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

## Installation

You need Node.js 18+.

1. Add the server to your MCP client's config using the block in the
   sidebar.
2. Restart your client.
3. There's nothing else to configure: the client calls the
   `sequential_thinking` tool automatically when it's working through a
   complex problem.

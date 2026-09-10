---
slug: mcp-filesystem
type: mcp-server
title: Filesystem MCP Server
fileName: filesystem.mcp
summary: >-
  The official reference MCP server for filesystem access: read, write, edit,
  move and search files with configurable directory allowlists via MCP Roots.
category: dev-tools
tags: [filesystem, files, official, reference-server]
tools: [claude, claude-code, cursor, vscode]
license: MIT
author: Anthropic / Model Context Protocol
source: https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem
verified: true
install: |
  # npx (recommended), pass allowed directories as args:
  npx -y @modelcontextprotocol/server-filesystem /path/to/dir1 /path/to/dir2
installLang: bash
---

## Overview

**Filesystem** is one of the official Model Context Protocol reference servers.
It gives an MCP client read/write access to the local filesystem, scoped to an
explicit allowlist of directories, so agents can browse, edit and search files
without arbitrary access to the whole disk.

## How it works

1. Allowed directories are set either via command-line arguments at startup, or
   dynamically via MCP **Roots** (the recommended method), which lets a
   client update the allowlist at runtime without restarting the server.
2. Every filesystem tool declares MCP tool annotations (`readOnlyHint`,
   `idempotentHint`, `destructiveHint`) so clients can tell read-only
   operations from destructive ones like `write_file` or `move_file`.
3. Tools cover reading (single/multiple files, media files as base64),
   writing, editing with dry-run diff preview, directory listing/tree, search
   by glob pattern, and file metadata.

## Examples

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Desktop"]
    }
  }
}
```

## Installation

You need Node.js 18+.

1. Add the server to your MCP client's config, listing the exact
   directories it's allowed to touch as arguments (see the sidebar
   example).
2. Restart your client.
3. If your client supports MCP Roots, you can update the allowed
   directories at runtime instead of restarting.
4. Ask the agent to list or read a file in an allowed directory to confirm
   it's working.

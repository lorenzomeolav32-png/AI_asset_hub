---
slug: mcp-fetch
type: mcp-server
title: Fetch MCP Server
fileName: fetch.mcp
summary: >-
  Official reference MCP server for fetching web pages and converting HTML to
  markdown, with chunked reads so an agent can page through long content.
category: dev-tools
tags: [web, fetch, official, reference-server]
tools: [claude, claude-code, cursor, vscode]
license: MIT
author: Anthropic / Model Context Protocol
source: https://github.com/modelcontextprotocol/servers/tree/main/src/fetch
verified: true
install: |
  # Using uv/uvx (recommended):
  uvx mcp-server-fetch

  # Or via pip:
  pip install mcp-server-fetch
installLang: bash
---

## Overview

**Fetch** retrieves a URL and converts its HTML to markdown so a model can
read web content without also having to parse raw HTML. It's one of the
official Model Context Protocol reference servers.

## How it works

1. The single `fetch` tool takes a `url`, an optional `max_length` (default
   5000 characters), a `start_index` to resume reading further into a page,
   and a `raw` flag to skip markdown conversion.
2. Because responses are truncated, `start_index` lets a model page through a
   long document across several calls until it finds what it needs.
3. The server respects `robots.txt` for model-initiated tool calls (not for
   user-initiated prompts), and both the user agent and this behavior are
   configurable via `--user-agent` and `--ignore-robots-txt`.
4. Its own README flags a real caution: this server can reach local/internal
   IP addresses, which is a security consideration when giving an agent open
   fetch access.

## Examples

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}
```

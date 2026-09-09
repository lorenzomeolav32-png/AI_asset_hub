---
slug: mcp-everything
type: mcp-server
title: Everything MCP Server
fileName: everything.mcp
summary: >-
  Official reference/test MCP server that exercises the full protocol
  (prompts, tools, resources, sampling), built for people writing MCP clients
  rather than end users.
category: dev-tools
tags: [testing, reference-server, mcp-client-testing, official]
tools: [claude, claude-code, cursor, vscode]
license: MIT
author: Anthropic / Model Context Protocol
source: https://github.com/modelcontextprotocol/servers/tree/main/src/everything
verified: true
install: |
  npx -y @modelcontextprotocol/server-everything
installLang: bash
---

## Overview

**Everything** is one of the official Model Context Protocol reference
servers. Its own README is explicit that it is not meant to be a useful server
for end users: it exists to exercise every MCP protocol feature (prompts,
tools, resources, sampling and more) as a test target for people building MCP
clients or SDKs.

## How it works

1. It implements the full set of MCP primitives so a client author can point
   their client at one server and see every feature in action, documented in
   the repo's `docs/features.md`.
2. It supports stdio (the default), SSE (deprecated as a transport as of the
   2025-03-26 MCP spec) and Streamable HTTP transports, runnable from source
   or as an installed package.
3. Useful for verifying a new MCP client correctly handles prompts, resources
   and sampling, not for giving an agent real-world capabilities.

## Examples

```bash
# Run the default (stdio) server
npx @modelcontextprotocol/server-everything

# Run the Streamable HTTP server
npx @modelcontextprotocol/server-everything streamableHttp
```

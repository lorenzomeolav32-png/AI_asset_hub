---
slug: contextstream
type: mcp-server
title: ContextStream
fileName: contextstream.mcp
summary: >-
  Gives coding agents persistent memory across sessions and tools: semantic
  code search plus saved decisions, lessons, and plans, so you stop
  re-explaining project context every new chat.
category: dev-tools
tags: [memory, code-search, context, agent-memory, hosted]
tools: [claude, claude-code, cursor, vscode, copilot, windsurf]
license: MIT
author: ContextStream
source: https://github.com/contextstream/mcp-server
stars: 43
verified: true
install: |
  # macOS / Linux
  curl -fsSL https://contextstream.io/mcp/install.sh | sh

  # Windows PowerShell
  irm https://contextstream.io/mcp/install.ps1 | iex

  # Or hosted endpoint (Streamable HTTP + OAuth clients):
  # url: https://mcp.contextstream.io/mcp
installLang: bash
---

## Overview

ContextStream connects your code, docs, and conversations so an agent can find
the right files, recall saved decisions, and build on past work across
sessions and tools instead of starting from zero each time. The MCP
server/client in this repo is MIT-licensed; the hosted search backend is a
separate ContextStream cloud service (free tier: 10,000 monthly credits, no
card required).

## How it works

1. Indexing sends eligible project files to ContextStream's hosted search, so
   the agent runs semantic code search instead of grepping the repo blind.
2. The agent can save a real decision, and the reason behind it, mid-session.
   A later session, even in a different editor, can then retrieve that
   decision without you re-explaining it.
3. ContextStream can also capture local Git metadata (commit SHAs, branch
   names, aggregate diff stats) to enrich context. Transcript saving and
   hook-based capture are on by default and can be turned off in the
   data-handling settings.
4. It ships as a native Rust binary through an npm launcher (`npx -y
   @contextstream/mcp-server@latest`), or you can connect straight to the
   hosted MCP endpoint for clients that support Streamable HTTP and OAuth.

## Examples

```txt
Use ContextStream to find the files relevant to my next change. Cite the
sources and retrieve any saved project decisions that should guide the work.
```

## Installation

You need an MCP-capable client (Claude Code, Cursor, Copilot, Windsurf, etc.)
and a free ContextStream account, created during onboarding with no separate
website signup needed.

1. Run the install script for your OS (macOS/Linux or Windows PowerShell,
   above) and follow the onboarding prompts to sign in and connect your
   editor.
2. Restart your editor after setup.
3. Ask your agent to find files relevant to a change, then ask it to save a
   decision. Start a new session and confirm it can recall that decision.
4. Review the [data handling and controls](https://github.com/contextstream/mcp-server/blob/main/docs/data-handling.md)
   docs before connecting a sensitive or private project, since indexing
   sends file contents to the hosted service by default.

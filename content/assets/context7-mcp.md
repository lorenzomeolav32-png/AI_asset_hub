---
slug: context7-mcp
type: mcp-server
title: Context7
fileName: context7.mcp
summary: >-
  Pulls up-to-date, version-specific documentation and code examples straight
  from the source into your prompt, so agents stop citing outdated APIs or
  hallucinating ones that don't exist.
category: dev-tools
tags: [documentation, developer-tools, rag]
tools: [claude, claude-code, cursor, vscode]
license: MIT
author: Upstash
source: https://github.com/upstash/context7
stars: 61700
verified: true
install: |
  # One-command setup: OAuth login, generates an API key, installs the right
  # integration (Node.js 18+ required)
  npx ctx7 setup

  # Or configure any MCP client manually:
  # url: https://mcp.context7.com/mcp
  # header: Authorization: Bearer YOUR_API_KEY
installLang: bash
---

## Overview

**Context7** solves a specific, common failure mode of coding agents: they rely on
training data that's a year (or more) stale, so they hallucinate APIs or generate
code for old package versions. Context7 fetches current, version-specific docs and
examples and drops them straight into the model's context before it answers.

## How it works

Context7 works in two modes. In **CLI + Skills** mode, it installs a skill that
guides the agent to fetch docs with the `ctx7` CLI (`ctx7 library <name> <query>`,
`ctx7 docs <libraryId> <query>`); no MCP required, and it's more token-efficient
since it skips loading large tool schemas. In **MCP** mode, it registers a server
with two tools: `resolve-library-id` (turns a library name into a Context7 ID) and
`query-docs` (fetches docs for that ID).

Add a rule like *"Always use Context7 when I need library/API documentation, code
generation, setup or configuration steps"* to your agent's system prompt/`CLAUDE.md`
so it reaches for it proactively instead of only when you say "use context7".

## Examples

```txt
Create a Next.js middleware that checks for a valid JWT in cookies and redirects
unauthenticated users to /login. use context7

Implement basic authentication with Supabase. use library /supabase/supabase for
API and docs.
```

If you already know the exact library, adding its Context7 ID (`/org/repo` syntax)
skips the matching step and goes straight to fetching docs, which helps when several
libraries share a similar name.

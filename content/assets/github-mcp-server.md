---
slug: github-mcp-server
type: mcp-server
title: GitHub MCP Server
fileName: github-mcp-server.mcp
summary: >-
  GitHub's official MCP server, connecting AI agents directly to GitHub's platform
  to read repos, manage issues/PRs, analyze code and automate CI/CD workflows.
category: devops
tags: [github, git, issues, pull-requests, ci-cd, devops]
tools: [claude, claude-code, cursor, vscode, copilot]
license: MIT
author: GitHub
source: https://github.com/github/github-mcp-server
stars: 32800
verified: true
install: |
  # Remote server (hosted by GitHub): add to your MCP host config, e.g. .vscode/mcp.json:
  # { "servers": { "github": { "type": "http", "url": "https://api.githubcopilot.com/mcp/" } } }

  # Local server via Docker (OAuth login on first use)
  docker run -i --rm -p 127.0.0.1:8085:8085 -e GITHUB_OAUTH_CALLBACK_PORT \
    ghcr.io/github/github-mcp-server
installLang: bash
---

## Overview

**GitHub MCP Server** is GitHub's own MCP implementation, giving AI agents and
assistants direct, structured access to GitHub (repositories, issues, pull requests,
Actions runs, code scanning alerts, discussions and more) through natural language
instead of hand-rolled API calls.

## How it works

The server ships in two forms: a **remote server** hosted by GitHub (the easiest way
to get started, with OAuth or a PAT) and a **local server** you run yourself via
Docker or a Go binary. Both expose the same GitHub capabilities grouped into
**toolsets** (`repos`, `issues`, `pull_requests`, `actions`, `code_security`,
`discussions`, `projects`, `stargazers`...), which you can enable selectively so the
agent's tool list stays small and focused.

1. **Connect**: point any MCP-capable client (VS Code, Claude Code/Desktop, Cursor,
   Windsurf, Copilot CLI...) at the remote URL or the local Docker image.
2. **Pick toolsets**: enable only what you need (`--toolsets repos,issues`) or `all`.
3. **Let the agent act**: browse code, triage issues, open/review PRs, inspect
   Actions runs and security findings, all from chat.
4. **Read-only / lockdown modes**: run with `--read-only` to prevent writes, or
   `--lockdown-mode` to filter content from users without push access (reduces
   prompt-injection risk from untrusted issues/PRs).

## Examples

Typical use cases straight from the project's own docs:

```txt
"Summarize open issues labeled 'bug' in this repo and suggest a triage order."
"Open a PR that fixes the failing lint step in the last Actions run."
"What Dependabot alerts are open on the main branch right now?"
```

Great for repo management, issue/PR automation, CI/CD intelligence and code/security
analysis, anywhere an agent needs real GitHub context to act on rather than a guess.

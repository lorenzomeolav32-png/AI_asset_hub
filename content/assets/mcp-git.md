---
slug: mcp-git
type: mcp-server
title: Git MCP Server
fileName: git.mcp
summary: >-
  Official reference MCP server for Git: status, diff, commit, branch, log and
  checkout operations on a local repository, exposed as MCP tools.
category: dev-tools
tags: [git, version-control, official, reference-server]
tools: [claude, claude-code, cursor, vscode]
license: MIT
author: Anthropic / Model Context Protocol
source: https://github.com/modelcontextprotocol/servers/tree/main/src/git
verified: true
install: |
  # Using uv/uvx (recommended), no install step needed:
  uvx mcp-server-git --repository path/to/git/repo

  # Or via pip:
  pip install mcp-server-git
installLang: bash
---

## Overview

**Git** brings Git repository operations to any MCP client, one of the
official Model Context Protocol reference servers. It gives an agent tools to
read, search and manipulate a local repository: inspect history, stage
changes and manage branches without shelling out to raw `git` commands.

## How it works

1. Every tool takes a `repo_path` pointing at a local Git repository.
2. Read tools cover status, unstaged/staged diffs, diffs against a branch or
   commit, commit log with date filtering, showing a commit's contents, and
   listing branches (local, remote or all).
3. Write tools cover staging files (`git_add`), committing, resetting the
   staging area, creating branches and checking out branches.
4. The server is still in early development per its own README, so tools may
   change as the project evolves.

## Examples

```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "path/to/git/repo"]
    }
  }
}
```

## Installation

You need `uv` (recommended) or Python with `pip`, and a local Git
repository to point it at.

1. Add the server to your MCP client's config, passing `--repository
   path/to/git/repo` (see the sidebar).
2. Restart your client.
3. Ask the agent to check the git status or show a diff to confirm it can
   see your repository.

---
slug: docker-hub-mcp
type: mcp-server
title: Docker Hub MCP Server
fileName: docker-hub-mcp.mcp
summary: >-
  Docker's official MCP server for Docker Hub: search images, inspect
  tags and manage your own repositories through natural language, with
  built-in support for Docker Hardened Images.
category: devops
tags: [docker, containers, docker-hub, official]
tools: [claude, claude-code, cursor, vscode, copilot]
license: Apache-2.0
author: Docker
source: https://github.com/docker/hub-mcp
stars: 163
verified: true
install: |
  git clone https://github.com/docker/hub-mcp.git
  cd hub-mcp
  npm install && npm run build
  # Run in stdio mode (default), or --transport=http for a local HTTP server
  npm start
installLang: bash
---

## Overview

**Docker Hub MCP Server** gives an agent real, current data about images on
Docker Hub instead of relying on a model's memory of which base image tags
exist or which one is smaller. It also handles authenticated repository
management for your own namespace.

## How it works

1. Without authentication, it can search Docker Hub content (official
   images, tags, architectures, operating systems) and check whether a
   specific repository or tag exists.
2. With a Docker Hub Personal Access Token, it adds repository management:
   creating and updating repositories, pushing images, and listing tags
   for repos you own.
3. It has a dedicated tool for Docker Hardened Images (DHI), so an agent
   can find a hardened, minimal-footprint alternative to a base image and
   help rewrite a Dockerfile to use it.
4. It integrates directly with Ask Gordon, the AI assistant built into
   Docker Desktop and the Docker CLI, in addition to working as a standalone
   MCP server for Claude Desktop or VS Code.
5. The HTTP transport binds to loopback and requires a bearer token by
   default; exposing it more broadly (for example inside a container) needs
   an explicit host and an allow-list of origins, since anyone who can
   reach an unauthenticated endpoint could act as your Docker Hub account.

## Examples

```txt
"Search for a production-ready Postgres image and tell me if there's a
Docker Hardened Images version I could use instead."
```

## Installation

You need Node.js 18+ and Git. A Docker Hub Personal Access Token is only
needed if you want repository management, not for search-only use.

1. Clone and build the server:
   ```bash
   git clone https://github.com/docker/hub-mcp.git
   cd hub-mcp
   npm install && npm run build
   ```
2. Start it:
   ```bash
   npm start
   ```
   This runs in stdio mode by default; add `--transport=http` to run it as
   a local HTTP server instead.
3. Add the server to your MCP client's config, pointing at the stdio
   process or the local HTTP URL.
4. Optional: set a Docker Hub Personal Access Token as an environment
   variable to enable repository management tools.
5. Restart your client and confirm the Docker Hub tools appear.

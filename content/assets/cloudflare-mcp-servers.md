---
slug: cloudflare-mcp-servers
type: mcp-server
title: Cloudflare MCP Servers
fileName: cloudflare-mcp-servers.mcp
summary: >-
  Cloudflare's own collection of remote, domain-specific MCP servers,
  covering Workers, DNS analytics, observability, Radar, browser rendering
  and more, each hosted at its own mcp.cloudflare.com subdomain.
category: devops
tags: [cloudflare, workers, dns, observability, cloud, official]
tools: [claude, claude-code, cursor, vscode, copilot]
license: Apache-2.0
author: Cloudflare
source: https://github.com/cloudflare/mcp-server-cloudflare
stars: 4200
verified: true
install: |
  # Add any of Cloudflare's hosted servers as a remote MCP connection, e.g.
  # the Workers Bindings server, in .vscode/mcp.json or your client's config:
  # {
  #   "servers": {
  #     "cloudflare-bindings": {
  #       "type": "http",
  #       "url": "https://bindings.mcp.cloudflare.com/mcp"
  #     }
  #   }
  # }
installLang: bash
---

## Overview

This repository holds Cloudflare's own remote MCP servers, one per product
area, so an agent connects only to the pieces of Cloudflare it actually
needs instead of one server that tries to cover everything.

## How it works

1. Each server lives at its own subdomain, for example
   `bindings.mcp.cloudflare.com` for Workers KV/R2/D1/AI, `observability.mcp.cloudflare.com`
   for logs and analytics, or `radar.mcp.cloudflare.com` for internet-wide
   traffic insights. You connect to the URL for the domain you need, no
   local install required.
2. Cloudflare also ships a separate, broader "Code Mode" server (maintained
   in a different repository) for cases where you want wide API coverage
   through code execution instead of a curated tool set. This repository's
   servers are the typed, purpose-built alternative for a single product
   area.
3. Authentication happens through OAuth when you connect, scoped to your
   Cloudflare account, so a server only sees the account it's authorized
   against.
4. All servers share the same request handling (Streamable HTTP at `/mcp`),
   so the setup for each one is identical once you know which subdomain you
   need.

## Examples

```txt
"Connect to the Cloudflare Observability MCP server and show me error
rate trends for the api-gateway Worker over the last 24 hours."
```

## Installation

Nothing runs locally, these are remote servers hosted by Cloudflare. You
just need an MCP client that supports remote HTTP servers and a Cloudflare
account.

1. Pick the subdomain for the product area you need, for example
   `bindings.mcp.cloudflare.com` for Workers or
   `observability.mcp.cloudflare.com` for logs and analytics.
2. Add it as a remote HTTP server in your MCP client's config, using the
   block in the sidebar.
3. Reload the client. It opens a browser window for an OAuth login scoped
   to your Cloudflare account.
4. Approve the login, then confirm the new tools show up in your client.

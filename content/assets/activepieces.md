---
slug: activepieces
type: ai-workflow
title: Activepieces
fileName: activepieces.workflow
summary: >-
  Open source alternative to Zapier: a no-code workflow automation platform
  with 280+ TypeScript integrations, where every piece is also exposed as an
  MCP server for Claude Desktop, Cursor or Windsurf.
category: productivity
tags: [workflow-automation, no-code, visual-builder, zapier-alternative, self-hosted, mcp]
tools: [claude, cursor, windsurf, mcp]
license: MIT
author: Activepieces Inc.
source: https://github.com/activepieces/activepieces
stars: 24300
verified: true
install: |
  git clone https://github.com/activepieces/activepieces
  cd activepieces
  docker compose up
  # Full setup guide: https://www.activepieces.com/docs/install/overview
installLang: bash
---

## Overview

**Activepieces** is an open ecosystem alternative to Zapier: a visual builder
where you connect 280+ services ("pieces") into automations, with loops,
branches, retries, custom code steps and full versioning. Every piece is a
TypeScript npm package, so contributors can build and publish new
integrations, and 60% of the current library comes from the community.

## How it works

Flows are built on a drag-and-drop canvas. Each step is a piece action or
trigger; you can mix no-code steps with a code piece (JavaScript/TypeScript
with npm) whenever the built-in pieces aren't enough. Because pieces are
regular npm packages, local development supports hot reloading.

The distinctive feature for this directory: all 280+ pieces are also
published as MCP tools, so the same integrations you use to build a flow
can be handed directly to an LLM agent running in Claude Desktop, Cursor or
Windsurf without rebuilding the integration layer twice.

1. Self-host with Docker Compose (Postgres + Redis + app + worker containers).
2. Build a flow visually, or expose selected pieces as an MCP server for an
   agent to call directly.
3. Human-in-the-loop pieces let you pause a flow for approval or delayed
   execution before it continues.

## Licensing note

The Community Edition is **MIT**. Content under `packages/ee/` (enterprise
features) is licensed separately under Activepieces' own **Commercial
License**. That part isn't covered by the MIT core, so don't assume the
whole repository is permissive.

## Examples

- Zapier-style SaaS-to-SaaS automations (Google Sheets, Slack, Discord, RSS,
  200+ others) without writing integration code.
- Turning a piece (e.g. a CRM or database connector) into an MCP tool so a
  Claude Desktop or Cursor agent can call it directly.
- Long-running approval workflows using the "Chat Interface" or "Form
  Interface" human-input triggers.

## Installation

You need Docker (with the Compose plugin) and Git. Nothing else runs locally:
Postgres, Redis, the app and the worker all come up inside containers.

1. Install Docker Desktop (or Docker Engine plus the Compose plugin) if you
   don't have it, and make sure it's running.
2. Clone the repo and move into it:
   ```bash
   git clone https://github.com/activepieces/activepieces
   cd activepieces
   ```
3. Start the stack:
   ```bash
   docker compose up
   ```
   Add `-d` to run it in the background. The first run pulls every image, so
   it can take a few minutes.
4. Once the containers are healthy, open the app in your browser and create
   the first admin account.
5. To hand a piece to an agent instead of building a flow by hand, open that
   piece's MCP settings inside Activepieces and paste the generated MCP URL
   into Claude Desktop, Cursor or Windsurf's MCP configuration.

For reverse proxies, managed databases or Kubernetes, follow the full install
guide linked in the setup command in the sidebar.

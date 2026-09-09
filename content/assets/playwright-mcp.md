---
slug: playwright-mcp
type: mcp-server
title: Playwright MCP
fileName: playwright-mcp.mcp
summary: >-
  Microsoft's official MCP server for browser automation, driving Playwright
  through structured accessibility snapshots instead of screenshots, so any MCP
  client can browse, click and fill forms without a vision model.
category: testing-qa
tags: [browser-automation, testing, playwright, web]
tools: [claude, claude-code, cursor, vscode, copilot]
license: Apache-2.0
author: Microsoft
source: https://github.com/microsoft/playwright-mcp
stars: 36900
verified: true
install: |
  {
    "mcpServers": {
      "playwright": {
        "command": "npx",
        "args": ["@playwright/mcp@latest"]
      }
    }
  }
installLang: json
---

## Overview

**Playwright MCP** exposes browser automation capabilities through the Model Context
Protocol, built on top of Playwright. Instead of feeding screenshots to a vision
model, it hands the agent a structured **accessibility snapshot** of the page.

## How it works

It's fast and lightweight, using Playwright's accessibility tree instead of pixel
input; LLM-friendly, since it works purely on structured data with no vision model
required; and deterministic, avoiding the ambiguity common with screenshot-based
approaches.

It supports a **persistent profile** (keeps you logged in across sessions, like a
regular browser) or an **isolated profile** per session (nothing persists after the
browser closes), plus connecting to an existing browser via the Playwright browser
extension. Requires Node.js 18+ and works with VS Code, Cursor, Windsurf, Claude
Desktop, Goose, Grok, Junie and other MCP clients.

1. Register the server with your MCP client using the standard `npx @playwright/mcp@latest` config.
2. The agent asks the server to navigate, click, type or take a snapshot.
3. Playwright executes the action in a real (headed or headless) browser and returns
   the resulting accessibility snapshot.
4. Optional capabilities (`--caps=vision,pdf,devtools,network,storage,testing`) can be
   opted into for coordinate-based interaction, PDF generation, or test assertions.

## Examples

```jsonc
// Standalone HTTP mode, e.g. for headed browsers without a display
npx @playwright/mcp@latest --port 8931
```

```txt
"Go to our staging site, log in as demo@example.com, and tell me what the
dashboard's empty state looks like."
"Open /checkout, fill the form with test data, and report any console errors."
```

Useful for exploratory automation, self-healing test generation and long-running
agentic browsing where the agent needs to reason over page structure, not pixels.

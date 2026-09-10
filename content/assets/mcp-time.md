---
slug: mcp-time
type: mcp-server
title: Time MCP Server
fileName: time.mcp
summary: >-
  Official reference MCP server for time and IANA timezone conversion, with
  automatic system-timezone detection.
category: dev-tools
tags: [time, timezone, official, reference-server]
tools: [claude, claude-code, cursor, vscode]
license: MIT
author: Anthropic / Model Context Protocol
source: https://github.com/modelcontextprotocol/servers/tree/main/src/time
verified: true
install: |
  # Using uv/uvx (recommended):
  uvx mcp-server-time

  # Or via pip:
  pip install mcp-server-time
installLang: bash
---

## Overview

**Time** gives a model two small, deterministic tools: get the current time in
any IANA timezone, and convert a time between two timezones, so it stops
guessing at timezone math. It's one of the official Model Context Protocol
reference servers.

## How it works

1. `get_current_time` takes an IANA timezone name (e.g. `America/New_York`)
   and returns the current datetime plus whether daylight saving is active;
   with no argument it uses the system's own timezone.
2. `convert_time` takes a source timezone, a 24-hour time, and a target
   timezone, and returns both datetimes plus the time difference.
3. The system timezone default can be overridden with `--local-timezone`.

## Examples

```json
{
  "name": "convert_time",
  "arguments": {
    "source_timezone": "America/New_York",
    "time": "16:30",
    "target_timezone": "Asia/Tokyo"
  }
}
```

## Installation

You need `uv` (recommended) or Python with `pip`.

1. Add the server to your MCP client's config using the block in the
   sidebar.
2. Restart your client.
3. Optional: pass `--local-timezone` to override the system's default
   timezone.

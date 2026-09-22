---
slug: byteask-embedded-mcp
type: mcp-server
title: ByteAsk Embedded MCP
fileName: byteask-embedded-mcp.mcp
summary: >-
  Gives coding agents cited answers from firmware and embedded reference
  docs, and returns "no match" instead of guessing a register value.
category: dev-tools
tags: [mcp, embedded, firmware, documentation, arm, misra]
tools: [claude-code, cursor, codex]
license: MIT
author: ByteAsk
source: https://github.com/ByteAsk/ByteAsk-Embedded-MCP
stars: 24
verified: true
install: |
  uv sync
  uv run byteask-embedded-mcp
installLang: bash
testimonials: []
---

## Overview

ByteAsk Embedded MCP is the open source server behind ByteAsk Embedded Docs, an evidence retrieval MCP server for coding agents that write firmware, driver, or protocol code. It exposes three tools over stdio or Streamable HTTP and returns verbatim source snippets with a section and page citation, or an honest "no confident match" instead of an invented value.

## How it works

1. The agent calls `search_docs(query, limit)` the moment it hits a hex literal, a Modbus code, an IEEE clause, an SCPI verb, or an MCU part number.
2. The server returns ranked hits, each with a document title, a section and page citation, the verbatim snippet, and a `result_id`.
3. The agent can expand any hit with `get_context(result_id)` to see the full source section, or log a request for a missing document with `request_document(request)`.
4. Retrieval is pluggable through a small `SearchBackend` interface. The bundled `SampleBackend` serves a couple of illustrative records so the server runs right away, while the hosted endpoint at `mcp.byteask.ai` is backed by ByteAsk's full licensed corpus.

## Examples

```bash
claude mcp add byteask-embedded-docs -- uv run byteask-embedded-mcp
```

```markdown
## Results for "what Modbus function code writes multiple registers"

### Sample — Modbus Application Protocol (illustrative) — §6.12, p.30
> Function code 16 (0x10), Write Multiple Registers, writes a block of contiguous
> holding registers (1 to 123 registers) in a remote device. ...
_ref: sample:modbus-fc16_
```

Only the server code is open here. The document corpus and the retrieval engine behind the hosted endpoint stay proprietary to ByteAsk, so the free demo above runs on a small sample set rather than the full firmware library.

## Installation

You need Python 3.10 or newer and [uv](https://docs.astral.sh/uv/).

1. Clone the repository: `git clone https://github.com/ByteAsk/ByteAsk-Embedded-MCP`
2. Install dependencies: `uv sync`
3. Start the server: `uv run byteask-embedded-mcp` (stdio transport by default)
4. Register it with Claude Code: `claude mcp add byteask-embedded-docs -- uv run byteask-embedded-mcp`
5. Verify it worked by asking the agent something like "what Modbus function code writes multiple registers." It should call `search_docs` and return a cited snippet from the bundled sample corpus.

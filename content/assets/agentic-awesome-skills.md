---
slug: agentic-awesome-skills
type: claude-skill
title: Agentic Awesome Skills (AAS Core)
fileName: agentic-awesome-skills.skill
summary: >-
  A 2,100+ skill catalog plus AAS Core, a local CLI/MCP control plane that lets
  Codex or Claude search, compose and validate an exact, reviewable skill stack
  before anything is installed.
category: dev-tools
tags: [meta, catalog, claude-code, cursor, codex-cli, mcp, antigravity]
tools: [claude, claude-code, cursor, copilot, codex, gemini-cli]
license: MIT
author: sickn33
source: https://github.com/sickn33/agentic-awesome-skills
stars: 46059
verified: true
install: |
  # Ask Codex/Claude (with the AAS MCP configured) to search the catalog and
  # pick exact skill IDs, then preview a dry run of just those (never --all):
  npx agentic-awesome-skills audit --skills <skill-id-1>,<skill-id-2>
  npx agentic-awesome-skills --skills <skill-id-1>,<skill-id-2> --dry-run
installLang: bash
---

## Overview

**Agentic Awesome Skills** is one of the largest open community catalogs of agent
skills (2,100+ entries across development, testing, security, infrastructure,
product and marketing). Its real product, **AAS Core**, is a local, read-only
MCP server plus an `aas` CLI: instead of dumping the whole catalog into your
project, it lets your coding agent search the full catalog itself, choose exact
skill IDs, and validate that selection into a reviewable, versioned
`aas-stack.json` before any file is written.

## How it works

1. **Search, don't install everything.** The MCP exposes `search_skills`,
   `get_skill`, `compose_stack` and related tools so the agent inspects the
   catalog without you cloning thousands of files.
2. **Agent-owned selection.** The agent (not AAS) picks the exact skill IDs
   relevant to your project's surface (architecture, security, testing, etc.).
3. **Validate, then plan.** `aas stack validate` and `aas stack plan` check the
   proposal and produce an immutable install plan, without applying any changes.
4. **Install narrowly.** Run the direct installer with `--skills id1,id2` (or a
   specialized plugin/bundle) for a scoped, reviewable install; avoid `--all`.

## Licensing note

The AAS Core tooling itself is **MIT**. The individual skills inside `skills/`
are contributed from hundreds of separate upstream repos, each under its own
license (MIT, Apache-2.0, AGPL-3.0, CC-BY-4.0 and others). Check the source
repo's own attribution ledger before reusing a specific skill's content, rather
than assuming the root MIT license applies to everything.

## Examples

```txt
"Search the AAS catalog for a code-review skill for a Next.js + Postgres repo,
and propose an exact stack for me to review before installing anything."
```

Best used for **targeted discovery** (finding one good skill for a specific gap
in your project) rather than as a one-shot full-catalog install.

## Installation

You need Node.js and a coding agent that supports MCP (Claude Code, Cursor,
Codex CLI, Gemini CLI).

1. Configure the AAS MCP server in your agent so it can search the catalog
   (see the project's README for the exact MCP config block).
2. Ask your agent to search the catalog for what you need. It returns
   specific skill IDs instead of the whole 2,100+ entry list.
3. Preview a dry run of just those IDs:
   ```bash
   npx agentic-awesome-skills --skills <skill-id-1>,<skill-id-2> --dry-run
   ```
4. Once you're happy with the plan, run the same command without
   `--dry-run` to install only those skills. Avoid `--all`.

---
slug: generative-media-skills
type: claude-skill
title: Generative Media Skills
fileName: generative-media-skills.skill
summary: >-
  A Core/Library collection of 41 SKILL.md recipes (cinematography, branding,
  product ads, UGC video) that drive 100+ image/video/audio models through
  the MuAPI backend, for Claude Code, Cursor, Gemini CLI and OpenCode.
category: media-generation
tags: [image-generation, ai-video, generative-ai, mcp, muapi, requires-paid-api]
tools: [claude-code, cursor, gemini-cli, opencode, mcp]
license: MIT
author: SamurAIGPT
source: https://github.com/SamurAIGPT/Generative-Media-Skills
stars: 4200
verified: false
install: |
  # 1. Install the muapi CLI and add your MuAPI key (paid, see cost note below)
  npm install -g muapi-cli
  muapi auth configure --api-key "YOUR_MUAPI_KEY"

  # 2. Install one skill (or --all) into your agent
  npx skills add SamurAIGPT/Generative-Media-Skills --skill muapi-media-generation
installLang: bash
---

## Overview

**Generative Media Skills** is a Core/Library collection of 41 expert-authored
`SKILL.md` recipes — cinematic video direction, branding/logo generation, product
photography, UGC ad videos, YouTube thumbnails and more — that let Claude Code,
Cursor, Gemini CLI or OpenCode drive 100+ image/video/audio models (Midjourney,
Flux, Kling, Veo3, Seedance, Suno...) through a single CLI, with a matching MCP
server exposing 19 typed tools.

## How it works

1. **Core primitives** (`/core`) wrap the `muapi-cli` for uploads, prompt-based
   image editing, auth and result polling.
2. **Expert library** (`/library`) adds the actual creative know-how: each skill
   translates a creative brief (e.g. "cinematic 10s product ad") into the right
   model, parameters and multi-step pipeline.
3. **MCP server** (`muapi mcp serve`) exposes the same 19 tools directly to
   Claude Desktop, Cursor or any MCP-compatible client — no shell scripts needed.

## Cost note — requires a paid API key

⚠️ The skills themselves are free and MIT-licensed, but every recipe calls the
**MuAPI** service (muapi.ai), which requires a paid API key and consumes credits
per generation. Reading, adapting or redistributing the skill files costs
nothing; actually generating media does. Budget for MuAPI usage separately
before adopting this for production work.

## Examples

```txt
"Use the Cinema Director skill to produce a 10-second epic reveal shot of a
cybernetic dragon over Tokyo with Kling 3.0."

"Turn this product photo into a full Amazon listing image set: hero, lifestyle,
infographic and detail closeups."
```

Best for teams already using (or willing to pay for) MuAPI who want proven,
expert-level prompts/pipelines instead of building their own from scratch.

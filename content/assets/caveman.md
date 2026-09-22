---
slug: caveman
type: claude-skill
title: Caveman
fileName: caveman.skill
summary: >-
  Makes your coding agent answer in a stripped down, high signal style that
  keeps every technical fact and cuts filler, saving output tokens on chat
  style questions.
category: productivity
tags: [tokens, cost, productivity, claude-code, prompt-engineering]
tools: [claude-code, codex, gemini-cli, cursor, windsurf, copilot]
license: MIT
author: Julius Brussee
source: https://github.com/JuliusBrussee/caveman
stars: 107300
verified: true
install: |
  npx skills add JuliusBrussee/caveman -g
installLang: bash
testimonials: []
---

## Overview

Caveman is a Claude Code skill that switches your agent into a terse, high signal talking style. Code, commands, file paths, and exact error messages stay untouched. Only the surrounding prose gets cut, so the same diagnosis and the same fix come back in far fewer words.

## How it works

1. Turn it on with `/caveman` inside a project, or leave it running by default once installed.
2. Pick an intensity with `/caveman lite`, `full`, or `ultra`, from tight but polite down to bare fragments.
3. The skill drops articles, filler words, and pleasantries, but keeps technical terms, numbers, and negation words exact so meaning never flips.
4. It automatically drops back to full sentences for security warnings or irreversible action confirmations, then resumes once that part is done.
5. Say `stop caveman` or `normal mode` at any point to go back to normal prose.

## Examples

```text
let's /caveman
```

```text
/caveman lite
```

Normal agent, 69 tokens:
> The reason your React component is re rendering is likely because you are creating a new object reference on each render cycle. I would recommend using useMemo to memoize the object.

Caveman agent, 19 tokens:
> New object ref each render. Inline object prop = new ref = re render. Wrap in useMemo.

## Installation

You need an agent that supports Agent Skills, such as Claude Code, Codex, Gemini CLI, Cursor, Windsurf, Cline, or Copilot.

1. Run `npx skills add JuliusBrussee/caveman -g` to install it globally across supported agents, or drop the `-g` flag to scope it to the current project.
2. In Claude Code specifically, you can instead run `/plugin marketplace add JuliusBrussee/caveman` then `/plugin install caveman@caveman`.
3. Type `/caveman` if your agent does not pick up the skill on its own.
4. Ask any coding question and check that the reply comes back shorter while the technical content stays correct.
5. Say `stop caveman` any time to return to normal responses.

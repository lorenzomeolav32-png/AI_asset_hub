---
slug: deep-research-skill
type: claude-skill
title: Deep Research Skill
fileName: deep-research-skill.skill
summary: >-
  Runs research as a two-phase, human-in-the-loop workflow instead of one
  free-form web search: it drafts a reviewable outline first, then dispatches
  parallel search agents per item, so you approve the research plan before any
  agent starts digging.
category: research
tags: [research, deep-research, web-search, claude-code, opencode, codex]
tools: [claude, claude-code, codex]
license: MIT
author: Lan Zheng (Weizhena)
source: https://github.com/Weizhena/Deep-Research-skills
stars: 2186
verified: true
install: |
  git clone https://github.com/Weizhena/deep-research-skills.git
  cd deep-research-skills
  cp -r skills/research-en/* ~/.claude/skills/   # or skills/research-zh for Chinese
  cp agents/web-search-agent.md ~/.claude/agents/
  cp -r agents/web-search-modules ~/.claude/agents/
  pip install pyyaml
installLang: bash
---

## Overview

**Deep Research Skill** is a structured research workflow for Claude Code,
OpenCode, and Codex, inspired by the RhinoInsight paper on control mechanisms
for deep research. Instead of one open-ended search pass, it splits research
into an editable outline phase and a deep-investigation phase, so you can
correct the research plan (add items, add fields) before agents spend time
searching. It targets academic surveys, technology/framework comparisons,
market and competitor research, and due-diligence-style company research.

## How it works

1. **`/research <topic>`** generates an outline: a list of items to research
   (e.g. 17 AI agents) plus the fields to collect for each (company, pricing,
   tech specs, reviews...).
2. **`/research-add-items`** / **`/research-add-fields`** let you extend the
   outline before committing to the expensive phase, if the first draft
   missed items or data points.
3. **`/research-deep`** dispatches parallel web-search agents, one per item,
   each populating the fields defined in the outline.
4. **`/research-report`** turns the collected JSON results into a single
   markdown report with a table of contents.
5. A separate `web-search-agent` (installed alongside the skill) does the
   actual searching; on OpenCode it requires `OPENCODE_ENABLE_EXA=1` to get
   real web search instead of the weaker built-in web fetch.

## Examples

```txt
/research AI Agent Demo 2025
→ outline: 17 AI agents to research (ChatGPT Agent, Claude Computer Use,
  Cursor, etc.) with fields like company, release date, pricing, tech specs

/research-deep
→ searches the web for each item in parallel, filling in every field

/research-report
→ report.md: a complete markdown report with a table of contents
```

## Installation

You need Python and `pip install pyyaml`; Claude Code 2.1.0+ supports
triggering `/research` directly, older versions need `run /research`.

1. Clone the repo: `git clone
   https://github.com/Weizhena/deep-research-skills.git && cd
   deep-research-skills`.
2. Copy the skill files: `cp -r skills/research-en/* ~/.claude/skills/`
   (use `research-zh` for the Chinese version, or the `research-codex-en` /
   `research-codex-zh` folders into `~/.codex/skills/` for Codex).
3. Install the required web-search agent: `cp agents/web-search-agent.md
   ~/.claude/agents/` and `cp -r agents/web-search-modules
   ~/.claude/agents/`.
4. Install the Python dependency: `pip install pyyaml`.
5. On OpenCode only, also run `export OPENCODE_ENABLE_EXA=1` (add it to
   `~/.bashrc` to persist) so web search actually hits the network instead of
   falling back to plain web fetch.
6. Verify it worked: run `/research <a topic you care about>` and confirm you
   get back an outline of items and fields before anything is searched.

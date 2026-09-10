---
slug: prompt-engineer-agent
type: copilot
title: Prompt Engineer Agent
fileName: prompt-engineer.agent.md
summary: >-
  Treats every message as a prompt to improve rather than complete: analyzes
  it against a structured rubric, then rewrites it into a clearer,
  better-ordered system prompt.
category: productivity
tags: [prompt-engineering, productivity, meta]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/prompt-engineer.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/prompt-engineer.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/prompt-engineer.agent.md
installLang: bash
---

## Overview

Whatever you send this agent, it treats as a prompt draft to improve, not a
task to carry out directly. It's built to turn a rough instruction into a
well-structured system prompt, based on a rubric adapted from OpenAI's
prompt-engineering guidance.

## How it works

1. Before rewriting anything, it reasons through whether the input already
   uses chain-of-thought, has a clear structure, includes examples, and how
   complex the underlying task is.
2. A prompt that's already simple and explicit gets a light touch; a
   complex one gets restructured without losing its original intent.
3. If an example shows a conclusion before the reasoning that led to it,
   the agent reverses the order so conclusions always come last.
4. Every rewritten prompt states its expected output format and length,
   and defines its own `# Output Format` and optional `# Examples` sections.
5. It returns the corrected prompt verbatim, with no extra commentary
   before or after it.

## Examples

```txt
"Write me something that summarizes customer feedback."
```
The agent turns a vague line like this into a full system prompt with defined
scope, output format and edge cases, not a summary itself.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/prompt-engineer.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/prompt-engineer.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and paste a rough
   instruction to confirm it returns a rewritten prompt instead of
   completing the task.

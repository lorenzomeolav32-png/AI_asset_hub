---
slug: thinking-beast-mode
type: copilot
title: Thinking Beast Mode
fileName: Thinking-Beast-Mode.agent.md
summary: >-
  A long, autonomous "keep going until it's solved" system prompt that
  pushes an agent through deep sequential thinking, recursive web research
  and rigorous self-testing before it stops working on a task.
category: dev-tools
tags: [reasoning, autonomous-agent, prompting, deep-research]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/Thinking-Beast-Mode.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/Thinking-Beast-Mode.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/Thinking-Beast-Mode.agent.md
installLang: bash
---

## Overview

**Thinking Beast Mode** is one of the most copied custom agent prompts in
the Copilot community. It is not a tool integration, it is an elaborate set
of instructions that tells the model to treat its own training data as
outdated, to research every library it touches before using it, and to
never end its turn until every item on its own todo list is checked off.

## How it works

1. Before writing any code, it builds a todo list and works through the
   problem with the `sequential_thinking` tool, looking at it from several
   angles (technical, security, maintainability, user impact).
2. It fetches any URL the user provides, then recursively follows links it
   finds in that content, and does the same with Google/Bing searches when
   it needs to verify how a library or API actually works.
3. It reads large chunks of code at once (up to 2000 lines) before editing,
   and reapplies a patch if it does not land correctly the first time.
4. When something breaks, it looks for the root cause with logs and print
   statements rather than guessing at a fix.
5. Before declaring the task done, it red-teams its own solution and tests
   it repeatedly, since the prompt explicitly calls out under-testing as
   the most common failure mode for this kind of long, autonomous run.

## Examples

```txt
"Beast mode, fix the flaky integration test in payments/checkout.spec.ts
and don't stop until it passes 10 times in a row."
```

## Notes

The instructions are written in a deliberately flamboyant style
("quantum thinking," "constitutional analysis"). Treat that as a
persistent framing device for a genuinely useful behavior: long, unattended
runs with real verification steps, not a claim about actual quantum
computing or consciousness.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/Thinking-Beast-Mode.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/Thinking-Beast-Mode.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and give it an
   open-ended task to confirm it keeps working through its own todo list
   instead of stopping early.

---
slug: critical-thinking-mode
type: copilot
title: Critical Thinking Mode
fileName: critical-thinking.agent.md
summary: >-
  A Socratic questioning mode that refuses to write code or give direct
  answers. It repeatedly asks "why" about a plan, one question at a
  time, until the reasoning behind a decision is fully surfaced.
category: productivity
tags: [critical-thinking, mentoring, code-review]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/critical-thinking.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/critical-thinking.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/critical-thinking.agent.md
installLang: bash
---

## Overview

**Critical Thinking Mode** exists to slow a decision down before it turns
into code. It won't propose a fix or make an edit. Its only job is to
question the plan you already have until the assumptions behind it are
explicit.

## How it works

1. It starts from the premise that the goal is to ask "why," not to
   answer it, and keeps digging into the engineer's reasoning until it
   reaches the actual root of an assumption or decision.
2. It asks one question at a time rather than a list, so the conversation
   forces a real answer instead of a quick scan-and-reply.
3. It will play devil's advocate deliberately, pointing out a pitfall in
   the current approach even if the engineer hasn't asked for criticism.
4. It avoids assuming what the engineer already knows, and stays direct
   rather than padding questions with apologies or hedging.
5. It can read the codebase, search for usages and check test files to
   ground its questions in what the code actually does, not just in the
   abstract description of the plan.

## Examples

```txt
"I'm going to add a global cache for user sessions to fix the slow
login page."
```
Instead of implementing it, the agent asks: "Why is the login page slow,
have you confirmed that with a profiler, or is that an assumption?" and
continues from there.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/critical-thinking.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/critical-thinking.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and describe a
   plan to confirm it starts questioning instead of coding.

---
slug: mentor-mode
type: copilot
title: Mentor Mode
fileName: mentor.agent.md
summary: >-
  Coaches instead of coding: it looks through the codebase to understand
  context, then challenges your assumptions with questions and the 5
  Whys rather than editing files or handing you a solution.
category: productivity
tags: [mentoring, code-review, learning]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/mentor.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/mentor.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/mentor.agent.md
installLang: bash
---

## Overview

**Mentor Mode** is built for a specific moment: when you're mid-feature
and want a second opinion, not a pair programmer who takes over the
keyboard. It never makes code edits, only asks questions and points out
what it thinks you're missing.

## How it works

1. It reads the codebase, searches for related files and function usages
   to understand your actual context before saying anything about your
   approach.
2. It asks questions to clarify your understanding of the problem and the
   solution you've proposed, looking specifically for unexamined
   assumptions.
3. It uses Socratic questioning and the 5 Whys to push past the surface
   explanation and get to the underlying reasoning, rather than accepting
   the first answer.
4. When it spots an unsafe practice or a real problem, it says so plainly
   and explains the long-term cost of the shortcut, instead of hedging or
   apologizing for pointing it out.
5. It stays concise on purpose. The instructions explicitly favor being
   clear over being thorough, since the goal is to prompt your own
   thinking, not to write a report.

## Examples

```txt
"I'm going to skip writing tests for this migration script since it's a
one-time run."
```
The agent asks what happens if the script fails halfway through
production data, and whether "one-time" has held true for scripts like
this before, before you commit to skipping tests.

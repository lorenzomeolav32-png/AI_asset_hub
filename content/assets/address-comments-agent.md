---
slug: address-comments-agent
type: copilot
title: Address Comments Agent
fileName: address-comments.agent.md
summary: >-
  Works through pull request review comments one at a time: applies the
  minimal fix for each, pushes back on comments that don't make sense,
  adds test coverage, and commits with a descriptive message before
  moving to the next comment.
category: dev-tools
tags: [code-review, pull-requests, automation]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/address-comments.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/address-comments.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/address-comments.agent.md
installLang: bash
---

## Overview

**Address Comments Agent** handles the back-and-forth of a PR review
cycle. Instead of implementing every suggestion silently, its instructions
tell it to decide first whether a comment actually improves the code, and
to say no when it disagrees.

## How it works

1. For each reviewer comment, it decides whether the feedback holds up.
   If a comment doesn't make sense, it asks for clarification instead of
   guessing at intent; if it disagrees the change improves the code, it
   explains why and declines.
2. When it does address a comment, it changes only what that comment
   covers, avoiding unrelated edits, and looks for a chance to simplify
   rather than add code.
3. It applies the fix everywhere the same issue appears in the changed
   code, not just at the one line the reviewer flagged.
4. It adds test coverage for the change if none already exists, then runs
   the test suite, asking the user how to run tests if that isn't already
   known.
5. It commits each fix separately with a descriptive message before
   moving to the next comment, so the PR history reflects one commit per
   resolved comment rather than one giant squash.

## Examples

```txt
"Address the review comments on PR #482."
```
The agent reads each comment, fixes the ones it agrees with (with tests
and a commit per fix), and replies to the one comment it thinks is
mistaken, explaining its reasoning instead of silently applying it.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/address-comments.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/address-comments.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and point it at an
   open PR to confirm it responds in character.

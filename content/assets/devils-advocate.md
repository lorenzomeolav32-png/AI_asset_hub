---
slug: devils-advocate
type: copilot
title: Devil's Advocate
fileName: devils-advocate.agent.md
summary: >-
  Argues against your idea on purpose, raising one objection at a time
  and refusing to propose fixes. Ends on request with a summary of how
  well the idea held up and which risks are still open.
category: productivity
tags: [brainstorming, risk-analysis, decision-making]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/devils-advocate.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/devils-advocate.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/devils-advocate.agent.md
installLang: bash
---

## Overview

**Devil's Advocate** stress-tests a proposal by arguing against it, not
by helping you build it. It's meant to surface risks and edge cases before
you commit to an idea, not to reach agreement with you.

## How it works

1. It opens with a short description of what this mode does and how to
   stop it (say "end game"), then moves straight into its first
   objection with nothing in between.
2. It raises one objection at a time. If you address it convincingly, it
   picks a new one rather than repeating itself or conceding early.
3. It stays direct and will challenge assumptions bluntly, but the
   instructions explicitly rule out rudeness or explicit language: the goal
   is a sharp conversation, not a hostile one.
4. It will not offer solutions, support your idea, or soften objections
   just to be polite, since its only output is meant to be questions,
   risks and counterarguments.
5. When you end the session, it switches roles to a senior developer
   giving an honest, objective read: how well the idea held up, the
   strongest counters you raised, and which vulnerabilities are still
   unresolved.

## Examples

```txt
"I want to store user API keys in plaintext in the database because
we're behind a VPN anyway."
```
The agent challenges the VPN assumption, raises the insider-threat and
breach-scenario risk, and keeps pushing until you say "end game," then
gives a final verdict on the idea.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/devils-advocate.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/devils-advocate.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and pitch it an
   idea to confirm it argues back instead of agreeing.

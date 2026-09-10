---
slug: doublecheck-agent
type: copilot
title: Doublecheck Agent
fileName: doublecheck.agent.md
summary: >-
  Fact-checks AI-generated text before you act on it: extracts claims,
  searches for real sources, and runs an adversarial review for
  hallucination patterns, without rendering its own verdict.
category: research
tags: [fact-checking, verification, hallucination, research]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/doublecheck.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/doublecheck.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/doublecheck.agent.md
installLang: bash
---

## Overview

**Doublecheck** reviews AI-generated output for accuracy before you rely on
it. Its instructions are explicit that it does not tell you what is true. It
extracts claims, looks for sources you can check yourself, and flags what it
cannot verify, on the premise that a model reviewing its own kind of output
shouldn't be trusted to render the final verdict.

## How it works

1. It pulls out checkable claims (statistics, legal citations, regulatory
   statements, technical specifics) from the text you give it.
2. It searches for each claim and checks whether the source actually says
   what the text claims, rather than assuming a plausible-sounding
   statement is correct.
3. It applies known hallucination patterns, treating fabricated legal
   citations and untraceable statistics as high-risk categories by default.
4. The report leads with the claims most likely to be wrong, and states
   plainly when it could not verify or contradict something instead of
   hedging with "probably fine."
5. It keeps track of extracted claims by ID so you can ask it to dig deeper
   on one, or push back if you know a flagged claim is correct.

## Examples

```txt
"Doublecheck this blog draft before I publish it, especially the
statistics and the legal citation in paragraph 3."
```

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/doublecheck.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/doublecheck.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and paste a draft
   to confirm it flags unverifiable claims instead of rendering a verdict.

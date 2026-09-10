---
slug: adr-generator
type: copilot
title: ADR Generator
fileName: adr-generator.agent.md
summary: >-
  Turns a decision discussion into a numbered Architecture Decision
  Record: gathers the missing context, assigns the next sequential ADR
  number, and writes a structured markdown file with consequences,
  alternatives and rejection reasons.
category: dev-tools
tags: [architecture, documentation, decision-records]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/adr-generator.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/adr-generator.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/adr-generator.agent.md
installLang: bash
---

## Overview

**ADR Generator** writes Architecture Decision Records so a team doesn't
lose the reasoning behind a technical choice a few months later. It
follows a fixed structure designed to be read by both humans and other
agents.

## How it works

1. It collects the pieces an ADR needs before writing anything: the
   decision title, the context and constraints, the chosen solution, the
   rejected alternatives and who was involved. If something is missing, it
   asks first.
2. It checks the `/docs/adr/` folder for existing records and assigns the
   next sequential four-digit number, starting at `0001` if the folder
   doesn't exist yet.
3. It writes the file with front matter (title, status, date, authors,
   tags) followed by context, decision, positive and negative consequences,
   alternatives considered with their rejection reasons, implementation
   notes and references.
4. Consequences and alternatives use short coded bullets like `POS-001`
   or `ALT-002`, which makes it easy to reference a specific point later
   from a PR description or another ADR.
5. Before finishing, it runs through its own checklist: sequential
   numbering, correct file naming (`adr-NNNN-title-slug.md`), at least one
   positive and one negative consequence, and at least one documented
   alternative.

## Examples

```txt
"Write an ADR for switching our event bus from RabbitMQ to Kafka. We
considered staying on RabbitMQ and also looked at NATS."
```
The agent produces `/docs/adr/adr-0007-event-bus-kafka-migration.md` with
both rejected alternatives documented and their rejection reasons spelled
out.

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/adr-generator.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/adr-generator.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and describe a
   decision to confirm it writes a numbered ADR file.

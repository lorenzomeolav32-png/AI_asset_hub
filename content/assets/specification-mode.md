---
slug: specification-mode
type: copilot
title: Specification Mode
fileName: specification.agent.md
summary: >-
  Turns a piece of functionality into a formal, AI-readable specification
  file: coded requirements (REQ/SEC/CON), Given-When-Then acceptance
  criteria and explicit dependencies, saved under /spec/ with a fixed
  naming convention.
category: dev-tools
tags: [documentation, requirements, architecture]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/specification.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/specification.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/specification.agent.md
installLang: bash
---

## Overview

**Specification Mode** writes specs meant to be read by another model just
as much as by a person. Every requirement, constraint and guideline gets a
stable ID, so a later document or a pull request can reference it
directly instead of pointing at a vague paragraph.

## How it works

1. It picks a category prefix for the spec (schema, tool, data,
   infrastructure, process, architecture or design) and names the file
   `spec-<description>.md` under `/spec/`, with YAML front matter for title, version,
   date and owner.
2. Requirements, security requirements, constraints, guidelines and
   patterns each get their own coded bullet (`REQ-001`, `SEC-001`, `CON-001`),
   making individual points citable later on.
3. Acceptance criteria follow Given-When-Then format, and interfaces and
   data contracts get their own section with tables or code blocks for
   schemas.
4. Dependencies are split into four categories (external systems,
   third-party services, infrastructure, data) and describe what's needed
   rather than a specific package version, so the spec doesn't go stale
   the moment a dependency gets bumped.
5. The instructions specifically call for avoiding idioms and metaphors,
   defining every acronym, and never relying on context the reader
   wouldn't have, since the target reader could well be another agent.

## Examples

```txt
"Write a specification for the rate limiting middleware before we
implement it."
```

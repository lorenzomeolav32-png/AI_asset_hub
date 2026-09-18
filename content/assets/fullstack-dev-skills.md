---
slug: fullstack-dev-skills
type: claude-skill
title: Fullstack Dev Skills (Claude Skills)
fileName: fullstack-dev-skills.skill
summary: >-
  Turns Claude Code into a full-stack pair programmer with 67 specialized
  language, framework, and DevOps skills that activate on their own based on
  what you're building, so a small bug fix never drags in an entire
  enterprise-scale skill stack.
category: dev-tools
tags: [fullstack, claude-code, plugin, backend, frontend, devops, security, testing, architecture]
tools: [claude, claude-code]
license: MIT
author: Jeff Smolinski (jeffallan)
source: https://github.com/Jeffallan/claude-skills
stars: 11524
verified: true
install: |
  /plugin marketplace add jeffallan/claude-skills
  /plugin install fullstack-dev-skills@jeffallan
installLang: bash
---

## Overview

**Fullstack Dev Skills** is a Claude Code plugin bundling 67 specialized
skills across 12 categories: 12 language experts (Python, TypeScript, Go,
Rust, Swift, Kotlin, C#, PHP, Java, SQL, C++, JavaScript), 7 backend framework
experts (NestJS, Django, FastAPI, Spring Boot, Laravel, Rails, .NET Core), 7
frontend/mobile experts (React, Next.js, Vue, Angular, React Native,
Flutter), plus infrastructure, DevOps, security, API/architecture, testing,
data/ML, and platform specialists (Salesforce, Shopify, WordPress). It also
ships 9 project-workflow slash commands (discovery through retrospectives)
that integrate with Jira/Confluence via an Atlassian MCP server.

## How it works

1. **Context-aware activation.** Skills load automatically based on the
   request's framework/language, not all at once, e.g. "Implement JWT auth in
   my NestJS API" activates NestJS Expert and loads its
   `references/authentication.md`.
2. **Multi-skill workflows.** Complex tasks chain skills in sequence, for
   example Feature Forge → Architecture Designer → Fullstack Guardian → Test
   Master → DevOps Engineer for new feature development.
3. **`/common-ground`** surfaces and validates Claude's hidden assumptions
   about the project before it starts working.
4. **Workflow commands** manage epics end-to-end (discovery, planning,
   execution, retrospectives) and sync with an Atlassian MCP server for
   Jira/Confluence.

## Examples

```txt
"Implement user authentication in my NestJS API"
→ Activates: NestJS Expert + Secure Code Guardian

"My React app has a memory leak, help me debug it"
→ Activates: Debugging Wizard + React Expert
```

## Installation

You need Claude Code with plugin support.

1. Add the marketplace: `/plugin marketplace add jeffallan/claude-skills`
2. Install the plugin: `/plugin install fullstack-dev-skills@jeffallan`
3. Restart Claude Code when prompted.
4. Verify it worked by asking something framework-specific, e.g. "Help me
   implement JWT authentication in NestJS", and confirming Claude references
   the matching skill.

Alternative installs (skills only, no slash commands): `claude plugin install
https://github.com/jeffallan/claude-skills`, `npx skills add
jeffallan/claude-skills`, or copying `./skills/*` into `~/.claude/skills/`
for local development.

---
slug: create-skill
type: claude-skill
title: Create Skill
fileName: create-skill.skill
summary: >-
  Scaffold high-quality Claude Code skills and slash commands with correct
  frontmatter, conventions and worked examples.
tags: [meta, claude-code, devx]
tools: [claude-code]
license: MIT
author: AI Assets Directory
source: https://github.com/lorenzomeolav32-png/ai-assets-directory-skills/tree/main/skills/create-skill
verified: true
install: |
  # Clone the skills monorepo and copy this skill into your skills folder
  git clone https://github.com/lorenzomeolav32-png/ai-assets-directory-skills
  cp -r ai-assets-directory-skills/skills/create-skill ~/.claude/skills/create-skill
installLang: bash
---

## Overview

**Create Skill** is a meta-skill: it helps you build other Claude Code skills and
slash commands that follow established conventions — the right frontmatter, clear
invocation, and reference/examples files.

## How it works

It first classifies what kind of skill you want, then generates a well-structured
`SKILL.md` plus supporting files.

1. **Clarify type** — Task, Research, Knowledge or Dynamic (live shell context).
2. **Write frontmatter** — name, description, argument-hint, permissions.
3. **Structure the body** — steps, rules, and worked examples.
4. **Add references** — `reference.md` and `examples.md` for depth.

## Examples

| Type | Purpose | Example |
| --- | --- | --- |
| Task | Actions with side effects | deploy, commit, publish |
| Research | Gather & synthesize | audit, deep-research |
| Knowledge | Reference context | api-conventions, style-guide |
| Dynamic | Inject live context | pr-summary, env-check |

Perfect for teams standardizing how they package prompts and workflows into
reusable skills.

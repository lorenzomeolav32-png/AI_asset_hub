---
slug: what-are-claude-skills
title: What are Claude Skills?
summary: >-
  A skill is a folder of instructions you hand to Claude so it already knows
  your task. Here is what is actually inside one, and what people mix it up
  with.
kind: explainer
tags: [claude-skills, basics, agents]
date: 2026-08-18
updated: 2026-09-09
---

A Claude Skill is a folder of instructions you give to Claude so it acts like it
already knows your task. Instead of pasting the same prompt every time, you save
the know-how once as files, and Claude reads them when the work calls for it.

## What a skill actually is

At minimum, a skill is a file named `SKILL.md` with YAML frontmatter at the top
and instructions below. The frontmatter's `description` field is the part that
matters most: it is what Claude compares against your request to decide whether
to load the skill, so it needs to say both what the skill does and when to use
it. You can add extra files next to `SKILL.md`, like a detailed reference doc or
a script, and Claude only reads those when the task actually needs them.

## What people confuse it with

A skill and a plain custom slash command are close enough that Claude Code
treats them as the same thing under the hood: a file at `.claude/commands/deploy.md`
and a skill at `.claude/skills/deploy/SKILL.md` both give you `/deploy`, and a
skill just adds the option of a supporting-files folder and a description Claude
can match automatically. Skills also get confused with MCP servers, but they
solve different problems: a skill is know-how you package, an MCP server is a
live connection to an outside system. See
[Claude Skills vs MCP servers](/learn/claude-skills-vs-mcp-servers) for that
distinction in full.

## How Claude decides to use one

Claude compares your request against every installed skill's description. When
one matches, it reads the full `SKILL.md` into the conversation and follows it.
You do not have to call it by name, though you can always invoke one directly by
typing `/` followed by its folder name.

## When a skill helps

Skills pay off when you do the same kind of work often: reviewing code, writing
in a house style, running a multi-step procedure you would otherwise re-explain
every time. They also let a team share one approach, since a project skill
committed to a repo gives everyone the same result. For a one-off question, a
plain prompt is still faster; packaging it as a skill only pays back after
repeat use.

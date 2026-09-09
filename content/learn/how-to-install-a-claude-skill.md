---
slug: how-to-install-a-claude-skill
title: How to install a Claude Skill
summary: >-
  Installing a skill means something different depending on where you use
  Claude: a folder copy in Claude Code, a zip upload on claude.ai, an API call
  through the Skills API.
kind: tutorial
tags: [claude-skills, tutorial, setup]
date: 2026-08-22
updated: 2026-09-09
---

Where you install a skill depends on which surface you are using: Claude Code,
claude.ai, or the Claude API. This guide covers Claude Code, since that is where
most developers install skills, then covers what is different on the other two.

## Before you start

You need a skill folder with a `SKILL.md` file inside it. `SKILL.md` needs a
`description` field at minimum: that is the text Claude matches against your
requests to decide when to load the skill, so a vague one means the skill never
triggers on its own.

## Pick personal or project scope

Personal skills go in `~/.claude/skills/<skill-name>/` and load in every project
on your machine. Project skills go in `.claude/skills/<skill-name>/` at your
repository root; commit that folder and everyone who clones the repo gets the
skill too.

## Copy the folder into place

Copy the whole skill folder, not just `SKILL.md`, so any supporting files
(reference docs, bundled scripts) come with it. The folder name is what becomes
the command you type: `.claude/skills/deploy/SKILL.md` gives you `/deploy`,
whatever the frontmatter `name` field says.

**Checkpoint:** run `/skills` in Claude Code, or just ask "what skills are
available?" Your new skill should show up in the list.

## Use it

Ask for whatever the skill was built for. Claude loads it automatically when
your request matches the description. You can also invoke it directly by typing
`/` followed by the skill's folder name.

## If it doesn't show up

Two things cause almost every failure. First, the opening `---` has to be the
very first line of `SKILL.md`; if anything comes before it, Claude Code loads
the file with no metadata at all, so `/skill-name` still runs it but Claude
never triggers it on its own. Second, a description that is too generic loses
out to other skills competing for the same request, so sharpen the wording
before assuming the skill is broken. You do not need to restart Claude Code
after editing an existing skill; changes apply within the session. You do need
a restart if you create a brand-new skills directory that did not exist when
the session started.

## Outside Claude Code

On claude.ai, there is no folder to copy: go to Settings > Features and upload
the skill as a zip file (available on Pro, Max, Team and Enterprise plans with
code execution turned on). Through the Claude API, you upload it through the
Skills API and reference its `skill_id` in the `container` parameter, and it is
shared with your whole workspace rather than tied to one person. None of the
three surfaces sync with each other, so installing a skill in Claude Code does
not make it available on claude.ai or the API, and the reverse is also true.

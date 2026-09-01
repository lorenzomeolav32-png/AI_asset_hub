---
slug: how-to-install-a-claude-skill
title: How to install a Claude Skill
summary: >-
  The exact steps depend on your client, but the shape is the same: put the
  skill where the client looks for it, then confirm it loaded.
kind: tutorial
tags: [claude-skills, tutorial, setup]
date: 2026-08-22
---

The exact steps depend on which Claude client you use, but the shape is the same
everywhere. You put the skill where the client looks for skills, then confirm it
is active.

## Before you start

Have the skill folder ready. It should contain a `SKILL.md` file and any extra
files it references. If you downloaded it from a repository, keep the folder
name simple and readable.

## Put the folder in your skills directory

Most clients read skills from a set location. In Claude Code that is a skills
folder in your project or home directory. Copy the whole skill folder there, not
just the `SKILL.md` file, so the supporting files come with it.

## Check that it loaded

Open your client and look for the skill in the list of available skills. If it
does not show up, the usual cause is a folder in the wrong place or a `SKILL.md`
with a broken description. Fix the description first, since that is what the
client reads.

## Use it

Ask for the task the skill was built for. Claude should pick it up from the
description. If you want to be sure, name the skill in your request. Once it
works, you can forget it is there, and it will trigger when the work matches.

## If something goes wrong

Check three things: the folder location, the `SKILL.md` frontmatter, and any
file paths the skill points to. A skill that never triggers almost always has a
vague description or sits in the wrong directory.

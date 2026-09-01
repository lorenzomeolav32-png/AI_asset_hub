---
slug: what-are-claude-skills
title: What are Claude Skills?
summary: >-
  A skill is a small folder of instructions you hand to Claude so it acts like
  it already knows your task. Here is what that means in practice.
kind: explainer
tags: [claude-skills, basics, agents]
date: 2026-08-18
---

A Claude Skill is a small folder of instructions you give to Claude so it acts
like it already knows your task. Instead of pasting the same prompt every time,
you save the know-how once and Claude reads it when the work calls for it.

## What a skill actually is

At its simplest, a skill is a file named `SKILL.md` with a short description at
the top and instructions below. You can add extra files next to it, like
reference notes or a script, when the task needs them. The whole thing lives in
a folder, and that folder is the skill.

## How Claude decides to use one

Claude looks at the description you wrote. When your request matches what the
skill is for, it loads the instructions and follows them. You do not have to
call it by name, though most clients also let you trigger it on purpose. The
description is the part that matters most, so write it the way you would explain
the skill to a coworker.

## What goes inside a skill

The instructions describe how to do the task, step by step, plus any rules that
keep the output consistent. If the skill needs data or a helper script, you keep
those files in the same folder and point to them from `SKILL.md`. Nothing here
is magic. It is the prompt and the context you would have written by hand, saved
in a form Claude can reuse.

## When a skill helps

Skills pay off when you do the same kind of work often: reviewing code, writing
in a house style, or turning rough notes into a report. They also let a team
share one approach so everyone gets the same result. For a one-off question, a
plain prompt is still faster.

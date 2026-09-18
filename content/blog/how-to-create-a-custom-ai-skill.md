---
slug: how-to-create-a-custom-ai-skill
title: How to Create a Custom AI Skill (Most Guides Skip This Part)
summary: >-
  Most SKILL.md files are formatted correctly and still never fire once. The
  format was never the problem. Three specific habits are, and no checklist
  about frontmatter fields will catch them.
tags: [claude-skills, agents, best-practices]
date: 2026-09-18
reviewBy: 2027-03-18
---

Most people who write their first `SKILL.md` follow the format exactly:
frontmatter with a `name` and `description`, a body with instructions and
examples, maybe a `scripts/` folder for anything the model needs to run. They
save it, restart their session, and it never fires. Not once. The model keeps
answering the same request the plain way it always did, as if the skill
doesn't exist. The format was never the problem. Three specific habits are,
and none of them show up in a checklist about frontmatter fields.

## The format is the easy part

A `SKILL.md` file needs exactly two things in its frontmatter to be valid: a
`name` (lowercase, hyphenated, under 64 characters) and a `description` (under
1024 characters) that Anthropic's own spec says should cover both what the
skill does and when to use it.

```yaml
---
name: commit-message-writer
description: >-
  Formats commit messages in our team's convention. Use when the user is
  about to commit, write a changelog entry, or asks for a commit message.
---
```

Below that, you write instructions and, optionally, examples. For anything
more complex than a single procedure, you can split supporting material into
`scripts/`, `references/`, and `assets/` folders so the model only pulls in
what a given task needs instead of loading everything at once. That structure
is already documented well: our own guide on [how to install a Claude
Skill](/learn/how-to-install-a-claude-skill) covers the mechanics, and
Anthropic's docs cover the spec in full. None of that is where skills go
wrong. A file that's perfectly formed by every rule in that checklist can
still sit unused for months, because getting the shape right says nothing
about whether the model ever decides to open it.

## Mistake 1: a description that doesn't say when to use it

The `description` field is the only thing the model compares against your
request before it decides to load a skill. Not the instructions, not the
examples, just that one field. Write "Formats commit messages" and you've told
the model what the skill does but given it nothing to match against an actual
request like "clean up this changelog before I push." Write "Formats commit
messages following our team's convention: type prefix, imperative mood,
72-character subject line. Use when the user is about to commit, write a
changelog, or asks for a commit message" and now the model has concrete
language to match against real phrasing, not just a label.

This is the single most common reason a skill "doesn't work": it isn't broken,
it's invisible. If you have several skills installed, a vague description also
loses out to a more specific one competing for the same request, so
specificity isn't just nice to have, it's how the skill wins the comparison at
all.

## Mistake 2: a skill that tries to do five jobs

The second habit that kills a skill is cramming several related-but-different
procedures into one `SKILL.md` because they felt like they belonged together.
A skill for "writing tests" that also handles test data setup, CI
configuration, and flaky test triage sounds efficient until you try to write
one `description` that covers all four. You end up with something broad and
vague, which walks you straight back into mistake 1.

Progressive disclosure, splitting reference material into separate files the
model loads only when needed, only works if the core skill itself has one
clear job. It's not a way to cram more scope into a single skill; it's a way
to keep one job's supporting detail out of the model's context until it's
actually relevant. The practical rule: if you can't finish the sentence "use
this skill when the user wants to ___" with one clear task, split it into two
skills.

## Mistake 3: you tested it wrong

Here's the test most people run: they open a chat, type "use the
commit-message skill," and confirm it responds correctly. That proves the
instructions inside the skill work. It proves nothing about whether the skill
would have triggered on its own, because you just told the model which skill
to use by name.

The test that actually matters is the one nobody thinks to run: close the
direct reference, and type the request the way a teammate who has never heard
of your skill would type it, "Write me a commit message for this diff,"
instead of naming the skill at all. If it doesn't fire on that phrasing, the
description needs work, no matter how well the instructions read when you
invoke it manually. Do this with two or three different phrasings of the same
real request before you consider a skill done. It takes two minutes and it
catches almost everything mistake 1 causes.

## Publishing isn't the missing step

A lot of guides on this topic, the one that pointed me toward writing this
included, end with "now share it with the community": push it to GitHub, write
a README, submit it to a directory. That's a fine last step for a skill that
already works. It does nothing for one that doesn't trigger, because none of
those three problems get fixed by more visibility. A vague description stays
vague on GitHub. A skill doing five jobs still does five jobs after a hundred
people install it. Publishing is packaging, not a fix, and treating it as the
finish line is how well-formatted, broken skills end up sitting in public
directories looking fine and doing nothing.

## Check the one you already wrote

Open the last skill you wrote, a real one, not a toy example. Read only its
`description` field, then ask yourself whether a stranger's plain-language
request, one that never mentions the skill's name, would match it. If you're
not sure, that uncertainty is the answer. Fix the description before you touch
anything else in the file.

---
slug: what-are-cursor-rules-and-how-to-install-one
title: What are Cursor Rules, and how do you install one?
summary: >-
  A Cursor Rule teaches the editor your project's own conventions instead of
  relying on the model's general knowledge. Here's what's inside one, and how
  to drop one into a project.
kind: tutorial
tags: [cursor-rules, cursor, tutorial, setup]
date: 2026-09-18
reviewBy: 2026-11-18
---

A Cursor Rule is a small file that teaches Cursor your project's own
conventions, preferred libraries, naming, architecture, instead of letting it
fall back on generic training knowledge. Today that means an `.mdc` file living
in `.cursor/rules/`. Older projects sometimes still carry a single root
`.cursorrules` file from before Cursor split rules into per-glob files; Cursor
still reads it for backward compatibility, but new projects should use the
`.cursor/rules/` folder instead. This guide covers what's in an `.mdc` file and
gets one installed.

## What's actually in a rule file

Every `.mdc` file opens with frontmatter, `description`, `globs`, and
`alwaysApply`, followed by the actual instructions. `globs` is what makes rules
different from a plain prompt: it's a file pattern, so Cursor auto-attaches the
rule only when you're editing a matching file, without you selecting anything
by hand. A rule with `globs: "*.tsx"` and `alwaysApply: false` only kicks in
while you're in a `.tsx` file; one with `alwaysApply: true` applies to every
request regardless of what's open.

## Before you start

You need the Cursor editor and a project open in it. Nothing else is required
for most rules; a couple of installer-based collections also need a runtime
like PHP, noted below.

## Create the rules folder

```bash
mkdir -p .cursor/rules
```

## Pick or write a rule

[Awesome Cursor Rules](/cursor-rules/awesome-cursorrules) is the reference
catalog: 150+ individually maintained `.mdc` files organized by framework,
language, and workflow, from Next.js and SvelteKit to Solidity and embedded
firmware. Browse its README for the one matching your stack, then copy it in:

```bash
curl -o .cursor/rules/<name>.mdc \
  https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/main/rules/<name>.mdc
```

If security is the priority rather than a specific framework, [Cursor AI
Project Rules for Modern Development](/cursor-rules/cursor-rules-owasp-security)
ships one dedicated `.mdc` file per OWASP Top 10 category, for PHP/Drupal,
JavaScript/React/Vue, and Python, plus an interactive PHP installer that lets
you pick a language or install by tag instead of copying files one at a time.

**Checkpoint:** confirm the file is actually inside `.cursor/rules/` and ends
in `.mdc`, and that the frontmatter's opening `---` is the very first line of
the file.

## Reload and verify it attached

Reopen the project in Cursor, or reload the window if it was already open.
Edit a file that matches the rule's `globs` and ask Cursor something related to
what the rule covers.

**Checkpoint:** the suggestion should reflect the rule's convention, not just
Cursor's generic default. If it doesn't, the rule likely didn't load at all
rather than being ignored, so check the two things above before assuming
Cursor is choosing to skip it.

## Use rules day to day

Most rules need no manual invocation. Cursor attaches them automatically based
on `globs`, or on every request if `alwaysApply: true`. You just keep working
in the matching files; the convention shows up in suggestions without you
asking for it.

## If a rule doesn't seem to apply

Double check the `globs` pattern actually matches the file you're editing, a
common miss is a glob scoped to `src/**/*.ts` in a project where the code
actually lives in `app/`. If two rules disagree on the same file, tighten each
one's `globs` so only the rule you want matches that file, rather than relying
on Cursor to pick a winner between them.

Browse the full list at [Cursor Rules](/cursor-rules) for more, including
stack-specific picks from the Awesome Cursor Rules catalog. The two named here
aren't the end of the list either: this category keeps growing as more rule
bundles get reviewed and added.

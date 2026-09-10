---
slug: tutorial-guide-writer
type: claude-skill
title: Tutorial & Guide Writer
fileName: tutorial-guide-writer.skill
summary: >-
  Write and review top-quality tutorials, explainers, comparisons and best-of
  roundups for any blog or docs site, with dynamic interview questions per
  content type.
category: writing
tags: [writing, tutorials, documentation, editorial]
tools: [claude, claude-code, cursor, codex]
license: MIT
author: AI Assets Directory
source: https://github.com/lorenzomeolav32-png/ai-assets-directory-skills/tree/main/skills/tutorial-guide-writer
verified: true
install: |
  # Clone the skills monorepo and copy this skill into your skills folder
  git clone https://github.com/lorenzomeolav32-png/ai-assets-directory-skills
  cp -r ai-assets-directory-skills/skills/tutorial-guide-writer ~/.claude/skills/tutorial-guide-writer
installLang: bash
---

## Overview

**Tutorial & Guide Writer** writes and reviews instructional content: tutorials/how-tos,
explainers, comparisons ("X vs Y") and best-of roundups. It is site-agnostic, so it works
the same whether the output lands in a static blog, a docs site, a README, or a one-off
answer, and it adapts to whatever content schema the target site already uses.

## How it works

Instead of one generic template for every article, it classifies the content type first
and pulls a different set of interview questions and a different structure for each one.

1. **Classify the kind** — tutorial, explainer, comparison, or best-of roundup, from how
   the request is phrased.
2. **Ask the kind-specific questions** — a tutorial needs real prerequisites and
   verifiable steps; a comparison needs the actual distinction and whether the two things
   compete or compose; a roundup needs real selection criteria.
3. **Verify facts, never invent them** — checks the workspace and primary sources for
   versions, flags and steps instead of guessing.
4. **Draft to the right structure** — a tutorial gets checkpoints and troubleshooting, a
   comparison gets a short-version summary before any detail, a roundup gets a caveat per
   entry.
5. **Strip AI-sounding writing** — a built-in checklist removes filler, inflated claims,
   forced-triad lists and chatbot leftovers before the piece is called done.

## Examples

```txt
Write a tutorial: how to set up a local Postgres database with Docker Compose.
```

```txt
Write a comparison article: Redis vs Memcached for session storage.
```

```txt
Review this how-to guide for accuracy and clarity: [paste article or file path]
```

Point it at an existing site and it will check that site's own content folder and schema
before writing, instead of assuming a generic frontmatter.

## Installation

You need Claude Code and Git.

1. Clone the skills monorepo:
   ```bash
   git clone https://github.com/lorenzomeolav32-png/ai-assets-directory-skills
   ```
2. Copy the skill folder into your global skills directory:
   ```bash
   cp -r ai-assets-directory-skills/skills/tutorial-guide-writer ~/.claude/skills/tutorial-guide-writer
   ```
3. Restart Claude Code, or reload the project, so it picks up the new
   skill.
4. Ask it to write a short tutorial to confirm it asks kind-specific
   interview questions before drafting.

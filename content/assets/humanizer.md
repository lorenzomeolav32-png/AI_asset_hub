---
slug: humanizer
type: claude-skill
title: Humanizer
fileName: humanizer.skill
summary: >-
  Rewrite AI-sounding text so it reads like a person wrote it — strips filler,
  inflated claims, em-dashes and chatbot artifacts without changing the meaning.
tags: [writing, editing, content, ai-writing]
tools: [claude, claude-code, cursor, codex]
license: MIT
author: blader
source: https://github.com/blader/humanizer
stars: 39500
verified: true
install: |
  # Install with the Skills CLI (add --global for all projects)
  npx skills add blader/humanizer --global

  # Or, in Claude Code 2.1.142+, install it as a plugin
  /plugin marketplace add blader/humanizer
  /plugin install humanizer@humanizer
installLang: bash
---

## Overview

**Humanizer** rewrites AI-sounding prose so it reads like the writer, not a chatbot —
without changing what the text says or inventing details. It is just Markdown, so it
works with any agent that supports skills (Claude Code, Cursor, Codex and others). The
rules are based on Wikipedia's
["Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing),
maintained by WikiProject AI Cleanup.

## How it works

Humanizer applies 35 patterns from the Wikipedia list. It makes a first pass without
treating the original structure as fixed, then checks the draft against those patterns
and the original claims before rewriting whatever still sounds artificial. It shows its
work — the first rewrite plus a short critique — before the final version.

1. **Find AI patterns** — inflated claims, stock words, passive voice, em-dashes, filler.
2. **Keep every claim** — shorten, expand, merge or split, but keep the information.
3. **Never invent facts** — a name, number, date, quote or citation must come from the source.
4. **Match the voice** — give it a writing sample and it follows your rhythm and word choice.

Point it at a file and it changes only the prose, leaving code, data, frontmatter and
link targets alone.

## Examples

Call the skill directly and paste your text:

```txt
/humanizer

[paste your text here]
```

Or ask in plain language, including a sample to match your voice:

```txt
/humanizer

Here's a sample of my writing for voice matching:
[paste 2-3 paragraphs of your own writing]

Now humanize this text:
[paste AI text to humanize]
```

To rewrite a file, give Humanizer its path:

```txt
Humanize the prose in docs/launch-post.md
```

Use it for blog posts, docs, landing copy and emails that need to stop sounding
machine-written.

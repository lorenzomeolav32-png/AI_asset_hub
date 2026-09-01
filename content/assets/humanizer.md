---
slug: humanizer
type: claude-skill
title: Humanizer
fileName: humanizer.skill
summary: >-
  Rewrite AI-sounding text so it reads like a human — strips filler, inflated
  claims and chatbot artifacts without changing the meaning.
tags: [writing, editing, content]
tools: [claude, claude-code, chatgpt]
license: MIT
author: aiassethub
source: https://github.com/aiassethub/humanizer
stars: 860
verified: true
install: |
  # Clone into your Claude skills folder
  git clone https://github.com/aiassethub/humanizer \
    ~/.claude/skills/humanizer
installLang: bash
testimonials:
  - author: Marco P.
    role: Content lead
    quote: >-
      Our blog stopped sounding like a press release. It cuts the "in today's
      fast-paced world" nonsense while keeping every fact intact.
---

## Overview

**Humanizer** rewrites AI-sounding prose so it reads like the writer, not a chatbot —
without changing what the text says or inventing details. The rules are based on
Wikipedia's ["Signs of AI writing"](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

## How it works

The skill scans your text for known AI patterns and rewrites around them while
preserving every claim. It never adds a fact, name, number or citation that is not in
the source.

1. **Find AI patterns** — inflated claims, stock words, passive voice, filler.
2. **Keep every claim** — shorten, expand, merge or split, but keep the information.
3. **Never invent facts** — no fabricated details, quotes or sources.
4. **Match the voice** — formal, casual or technical as the text requires.

## Examples

```txt
Before: "In today's fast-paced digital landscape, our cutting-edge solution
         empowers businesses to unlock unprecedented growth."
After:  "Our tool helps businesses grow. Here's what it does and who it's for."
```

Use it for blog posts, docs, landing copy and emails that need to stop sounding
machine-written.

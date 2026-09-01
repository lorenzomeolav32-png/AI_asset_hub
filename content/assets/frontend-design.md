---
slug: frontend-design
type: claude-skill
title: Frontend Design
fileName: frontend-design.skill
summary: >-
  Generate distinctive, production-grade UI that avoids generic "AI slop" — bold
  typography, cohesive color, and meticulous motion, implemented as real code.
tags: [ui, design, frontend, react]
tools: [claude, claude-code]
license: Apache-2.0
author: Anthropic
source: https://github.com/anthropics/skills/tree/main/skills/frontend-design
stars: 172900
starsNote: whole anthropics/skills repo
verified: true
install: |
  # Install via the Claude Code plugin marketplace
  /plugin marketplace add anthropics/skills
  /plugin install example-skills@anthropic-agent-skills

  # Or copy the skill folder into your skills directory
  git clone https://github.com/anthropics/skills
  cp -r skills/skills/frontend-design ~/.claude/skills/frontend-design
installLang: bash
---

## Overview

**Frontend Design** is an official Anthropic skill that turns Claude into an
opinionated product designer. Instead of generic component dumps, it commits to a
**bold, cohesive aesthetic direction** and implements it as working code (HTML/CSS/JS,
React, Vue) with real attention to typography, color, motion and spatial composition.

## How it works

When you ask Claude to build an interface, the skill first forces a short design
brief — purpose, tone, constraints and the one thing that makes it memorable — and
only then writes code. It steers away from "AI slop" defaults (Inter/Roboto, purple
gradients, three identical cards) and toward intentional, context-specific choices.

1. **Pick a direction** — brutalist, editorial, retro-futuristic, refined-minimal…
2. **Set the system** — CSS variables for color, distinctive font pairing, motion.
3. **Implement for real** — production-grade, responsive, accessible components.
4. **Refine details** — spacing, hover states, one orchestrated load animation.

## Examples

```txt
You: Build a pricing page for a developer tool.
Claude (with skill): Commits to a "technical editorial" look — mono labels,
a single emerald accent, staggered reveal on load — and ships the React + CSS.
```

Great for landing pages, dashboards, marketing sites and design systems where
"looks generic" is not acceptable.

---
slug: complete-website-builder
type: claude-skill
title: Complete Website Builder
fileName: complete-website-builder.skill
summary: >-
  Build a production-grade, agency-quality marketing website in one
  self-contained HTML file — real researched photos, GSAP animations,
  glassmorphism, and a persona library for any business type.
tags: [web, landing-page, gsap, html]
tools: [claude, claude-code]
license: MIT
author: AI Assets Directory
source: https://github.com/lorenzomeolav32-png/ai-assets-directory-skills/tree/main/skills/complete-website-builder
verified: true
install: |
  # Clone the skills monorepo and copy this skill into your skills folder
  git clone https://github.com/lorenzomeolav32-png/ai-assets-directory-skills
  cp -r ai-assets-directory-skills/skills/complete-website-builder ~/.claude/skills/complete-website-builder
installLang: bash
---

## Overview

**Complete Website Builder** produces marketing sites that look like a $15,000 agency
shipped them — not templates, not AI slop. One self-contained HTML file with real
photos that match the business, smooth animations, and design decisions tailored to the
specific client.

## How it works

Give it a business URL (Google Maps, Yelp, existing site) or a short description. It
extracts the real details and assembles a bespoke site with a curated industry persona.

1. **Capture input** — parse a URL or description into name, services, city, tone.
2. **Pick a persona** — industry-specific color, font and feel from a built-in library.
3. **Research real photos** — a mandatory Unsplash discovery + verification protocol so
   the images actually fit the business.
4. **Build one file** — Ken Burns hero, GSAP staggered headlines, glassmorphism cards,
   asymmetric gallery, 3-step process, Swiper testimonials, all inline.

## Examples

```txt
You: build me a website for this HVAC company [Google Maps URL]
Skill: extracts services + reviews, picks the "trusted local trades" persona,
researches real photos, outputs index.html with animated counters and a
click-to-call button.
```

The skill ships as a `SKILL.md` plus three reference files — `personas.md`,
`photo-protocol.md`, and `build-spec.md` — so the long build spec stays organized.
Ideal for client demos, landing pages, and quick prospect sites that must not look
generic.

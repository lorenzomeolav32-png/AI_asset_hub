---
slug: website-builder
type: claude-skill
title: Website Builder
fileName: website-builder.skill
summary: >-
  Builds production-grade agency websites in one self-contained HTML file — real
  photos, GSAP animations, glassmorphism, no template look.
tags: [web, landing-page, gsap, html]
tools: [claude, claude-code]
license: MIT
author: aiassethub
source: https://github.com/aiassethub/website-builder
stars: 2130
verified: true
install: |
  # Clone into your Claude skills folder
  git clone https://github.com/aiassethub/website-builder \
    ~/.claude/skills/website-builder
installLang: bash
testimonials:
  - author: Oliver K.
    role: Agency founder
    quote: >-
      I paste a Google Maps link and get a site a client believes cost $15k.
      It closed two demos for me this month.
---

## Overview

**Website Builder** produces marketing sites that look like a $15,000 agency shipped
them — not templates, not AI slop. One self-contained HTML file with real photos that
match the business, smooth animations and design decisions tailored to the client.

## How it works

Give it a business URL (Google Maps, Yelp, existing site) or a short description. It
extracts the real details and assembles a bespoke site with a curated persona for the
industry.

1. **Capture input** — parse a URL or description into name, services, city, tone.
2. **Pick a persona** — industry-specific layout, color and copy direction.
3. **Assemble** — Ken Burns hero, GSAP staggered headlines, glass cards, carousel.
4. **Ship one file** — self-contained HTML that auto-opens in the browser.

## Examples

```txt
You: build me a website for this HVAC company [Google Maps URL]
Skill: extracts services + reviews, picks the "trusted local trades" persona,
outputs index.html with real photos and animated counters.
```

Ideal for client demos, landing pages and quick prospect sites that must not look
generic.

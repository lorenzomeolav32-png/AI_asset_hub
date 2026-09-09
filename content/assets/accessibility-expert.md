---
slug: accessibility-expert
type: copilot
title: Accessibility Expert
fileName: accessibility.agent.md
summary: >-
  Reviews code and designs against WCAG 2.1/2.2, covering semantics,
  keyboard and focus behavior, forms, media and dynamic SPA updates, and
  ships framework-specific examples plus a CI setup for automated checks.
category: web-design
tags: [accessibility, wcag, web-design, code-review]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/accessibility.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/accessibility.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/accessibility.agent.md
installLang: bash
---

## Overview

**Accessibility Expert** reviews interfaces against WCAG 2.1 and 2.2 the
way a dedicated accessibility engineer would: native HTML first, ARIA only
to fill a real gap, and a strong bias toward keyboard and screen reader
behavior over cosmetic contrast fixes alone.

## How it works

1. It runs a quick pre-check before suggesting any code: keyboard path,
   visible focus, correct roles/names/states, and announcements for
   anything that updates dynamically.
2. It applies WCAG's four principles (perceivable, operable,
   understandable, robust) and calls out the 2.2-specific additions, like
   minimum target sizes and non-memory-based authentication.
3. It covers forms (labeling, inline errors plus a summary, autocomplete),
   media (captions, transcripts, no autoplay) and dynamic SPA behavior
   (focus management on route change, live region announcements) as
   distinct categories rather than one generic checklist.
4. It ships ready-to-use snippets for React, Angular and Vue (focus
   restoration, route announcers) and CLI commands for axe, pa11y and
   Lighthouse, plus a GitHub Actions job that runs them in CI.
5. It will flag and push back on requests that reduce accessibility, like
   removing focus outlines, and proposes an accessible alternative instead
   of just complying.

## Examples

```txt
"Review this modal component for accessibility issues."
```
The agent checks focus trapping and restoration, keyboard operability,
ARIA role/name/state on the dialog, and whether closing it returns focus
to the element that opened it, then returns a PR-ready review comment.

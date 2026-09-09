---
slug: awesome-cursorrules
type: cursor-rule
title: Awesome Cursor Rules
fileName: awesome-cursorrules.mdc
summary: >-
  The largest community catalog of Cursor Project Rules: 150+ ready-made
  .mdc files covering nearly every major framework, language and workflow,
  each one a drop-in file for your project's .cursor/rules/ folder.
category: dev-tools
tags: [awesome-list, catalog, cursor, rules, mdc]
tools: [cursor]
license: CC0-1.0
author: PatrickJS
source: https://github.com/PatrickJS/awesome-cursorrules
stars: 40700
verified: true
install: |
  # 1. Browse the README to find a rule that fits your stack.
  # 2. Create the rules folder if it doesn't exist yet:
  mkdir -p .cursor/rules
  # 3. Copy the chosen .mdc file into it, then customize as needed:
  curl -o .cursor/rules/<name>.mdc \
    https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/main/rules/<name>.mdc
installLang: bash
---

## Overview

**Awesome Cursor Rules** is the reference "awesome list" for the Cursor Project
Rules format: a single repo with 150+ individually maintained `.mdc` files,
organized by frontend framework, backend/full-stack, mobile, testing, CSS,
state management, security, documentation and more. Each rule teaches Cursor
project-specific conventions (preferred libraries, naming, architecture,
domain constraints) instead of relying only on the model's general knowledge.

## How it works

1. Each `.mdc` file starts with frontmatter (`description`, `globs`,
   `alwaysApply`) so Cursor knows when to auto-attach the rule to matching
   files.
2. Rules are grouped by category in the README: Frontend Frameworks, Backend
   and Full-Stack, Mobile, Games and Graphics, CSS and Styling, State
   Management, Database and API, Testing, Hosting and Deployments, Build
   Tools, Language-Specific, Security, and Documentation.
3. You pick the rule(s) that match your stack, drop the file(s) into
   `.cursor/rules/` in your own project, and customize as needed.
4. Because it's a community list (94+ contributors), coverage spans
   everything from Next.js and SvelteKit to Solidity, ROS2 and embedded
   STM32 firmware.

## Examples

```bash
mkdir -p .cursor/rules
curl -o .cursor/rules/nextjs-typescript.mdc \
  https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/main/rules/nextjs-typescript-cursorrules-prompt-file.mdc
```

## Licensing note

The repo itself (README, structure) is **CC0-1.0** (public domain). Individual
`.mdc` rule files are contributed by different authors under the same
CC0 waiver per the repo's contribution guidelines, so reuse and redistribution
carry no obligations, though crediting the source is courteous.

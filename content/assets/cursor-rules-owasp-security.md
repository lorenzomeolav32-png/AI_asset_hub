---
slug: cursor-rules-owasp-security
type: cursor-rule
title: Cursor AI Project Rules for Modern Development
fileName: cursor-rules-owasp.mdc
summary: >-
  A security-first Cursor rule bundle covering PHP/Drupal, JavaScript/React/Vue
  and Python, with a dedicated OWASP Top 10 rule for each of the four
  vulnerability categories per language, plus a tag-based installer.
category: security
tags: [cursor-rules, owasp, security, php, drupal, javascript, python]
tools: [cursor]
license: MIT
author: ivangrynenko
source: https://github.com/ivangrynenko/cursorrules
stars: 88
verified: true
install: |
  # Interactive installer (choose Core, Web Stack, Python or All):
  curl -s https://raw.githubusercontent.com/ivangrynenko/cursor-rules/main/install.php -o install.php
  php install.php

  # Or install by tag, e.g. only OWASP rules for PHP:
  curl -s https://raw.githubusercontent.com/ivangrynenko/cursor-rules/main/install.php \
    | php -- --tags "language:php standard:owasp-top10"
installLang: bash
---

## Overview

This bundle of Cursor rules focuses on enforcing coding standards and, above
all, **OWASP Top 10 security practices** across PHP/Drupal, JavaScript/React/Vue
and Python. Instead of one generic security rule, it ships one dedicated
`.mdc` file per OWASP risk category (broken access control, injection,
cryptographic failures, SSRF, insecure design, and more) for each language,
plus a set of core rules for git commits, GitHub Actions, testing and
documentation upkeep.

## How it works

1. The **installer** (`install.php`) offers Core, Web Stack, Python or All
   rule sets, or a tag-based selection (`--tags "language:php
   standard:owasp-top10"`, `--tags "framework:react"`, etc.).
2. **Core rules** apply to any project (commit message standards, GitHub
   Actions, README maintenance, testing guidelines).
3. **Web Development rules** split into Frontend, Backend (PHP/Drupal),
   Security (one `.mdc` per OWASP category per language) and DevOps/CI.
4. **Python rules** mirror the same OWASP-category structure for Python
   codebases.
5. Manual installation is also supported: clone the repo and copy
   `.cursor/rules/*` into your project.

## Examples

```bash
# Install only JavaScript security rules
curl -s https://raw.githubusercontent.com/ivangrynenko/cursor-rules/main/install.php \
  | php -- --tags "language:javascript category:security"
```

Best suited for teams that want OWASP Top 10 coverage baked into Cursor's
suggestions for PHP/Drupal, JS/React/Vue or Python projects, not just generic
style rules.

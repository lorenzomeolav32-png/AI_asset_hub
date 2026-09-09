---
slug: security-and-owasp
type: copilot
title: Security & OWASP Top 10 Instructions
fileName: security-and-owasp.instructions.md
summary: >-
  Comprehensive secure-coding standard for Copilot: 55+ anti-patterns mapped to
  OWASP Top 10 2025, with detection regex and framework-specific fixes for
  Next.js, Angular, Express and Go, plus AI/LLM security guidance.
category: security
tags: [security, owasp, code-review, best-practices]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/instructions/security-and-owasp.instructions.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  # Copy into your repo so Copilot applies it automatically (applyTo: '**')
  mkdir -p .github/instructions
  curl -o .github/instructions/security-and-owasp.instructions.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/instructions/security-and-owasp.instructions.md
installLang: bash
---

## Overview

**Security & OWASP Top 10 Instructions** is a `.instructions.md` file for GitHub
Copilot (`applyTo: '**'`, so it applies to every file) that turns the OWASP Top 10
2025 into a concrete, checkable checklist Copilot follows while writing or
reviewing code.

## How it works

The file organizes **55+ anti-patterns** by category: Injection, Authentication,
Authorization, Secrets, Headers, Frontend, Dependencies, API, AI/LLM, and
framework-specific sections for React/Next.js, Angular, Express and Go. Each entry
has:

1. A **severity** (CRITICAL / IMPORTANT / SUGGESTION).
2. A **detection** regex or pattern to spot the anti-pattern in code.
3. The matching **OWASP 2025 category** (A01–A10).
4. A **bad vs. good** code example showing the actual fix.

It closes with security-header templates (helmet.js CSP config), a JWT validation
checklist, secure-cookie flag reference and a full pre-merge security checklist
covering auth, authorization, input/output, secrets, headers, dependencies and
logging.

## Examples

A few of the anti-patterns it flags, straight from the file:

```typescript
// BAD: SQL injection via string concatenation (OWASP A05)
const unsafeResult = await db.query(`SELECT * FROM users WHERE id = ${userId}`);

// GOOD: parameterized query
const safeResult = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
```

```typescript
// BAD: CORS wildcard with credentials (OWASP A02)
app.use(cors({ origin: '*', credentials: true }));

// GOOD
app.use(cors({ origin: ['https://app.example.com'], credentials: true }));
```

Drop it in `.github/instructions/` and Copilot will reference it automatically when
writing or reviewing security-sensitive code across the whole repo.

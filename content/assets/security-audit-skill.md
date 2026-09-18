---
slug: security-audit-skill
type: claude-skill
title: Security Audit (Cloudflare)
fileName: security-audit.skill
summary: >-
  Turns a coding agent into a structured security auditor: isolated hunter
  agents map coverage and find candidates, then a separate verifier agent
  tries to disprove each one before it's reported as confirmed.
category: security
tags: [security, pentest, vulnerability-research, audit, owasp, official]
tools: [claude, claude-code]
license: MIT
author: Cloudflare
source: https://github.com/cloudflare/security-audit-skill
stars: 11900
verified: false
official: true
install: |
  npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
  # add --global for a user-level install instead of per-project
installLang: bash
---

## Overview

Security Audit is the skill that seeded Cloudflare's internal vulnerability
discovery harness. It runs a coding agent through a structured, six-phase
audit instead of a single static pass, using isolated agents that hunt for
issues and separate agents that try to disprove every candidate before it
counts as confirmed.

## How it works

1. **Reconnaissance** maps architecture, trust boundaries, and input
   surfaces into `architecture.md` and a deterministic `coverage-ledger.json`.
2. **Coverage-led hunting** assigns isolated hunter agents to ledger units;
   coverage critics look for gaps the hunters missed.
3. **Candidate validation** hands every unique candidate to a fresh verifier
   agent that actively tries to disprove it, not just re-confirm it.
4. **Structured output** writes `confirmed`, `needs_validation`, and
   `rejected` records to `findings.json`, validated against a JSON schema.
5. **Independent record verification** has fresh agents re-check final
   claims; any material replacement gets another independent verifier.
6. **Target-neutral reporting** derives `REPORT.md`, `FINDINGS-DETAIL.md`,
   and `NEEDS-VALIDATION.md` from the verified records and coverage ledger.

Multiple runs against the same repo are additive: the skill reuses prior
ledgers and findings to target gaps instead of re-covering old ground.

## Examples

```txt
security audit this codebase

find security vulnerabilities in ./src

do a security review, output to ~/audits/my-project
```

## Installation

You need a coding agent with tool use and parallel sub-agent support, and
Node.js for the bundled zero-dependency validators. Full audit mode also
needs an OS-enforced sandbox (no external networking, resource limits,
writes restricted to scratch paths) since it builds, tests, and runs target
code. Do not point it at untrusted code without one.

1. Run `npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit` (add `--global` for a user-level install).
2. Start your coding agent in, or pointed at, the codebase to audit.
3. Ask it to "do a security audit" or "find vulnerabilities in ./src".
4. Check the generated `REPORT.md` and `FINDINGS-DETAIL.md` for confirmed
   findings, and `NEEDS-VALIDATION.md` for leads that need a human look.

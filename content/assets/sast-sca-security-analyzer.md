---
slug: sast-sca-security-analyzer
type: copilot
title: SAST/SCA Security Analyzer
fileName: sast-sca-security-analyzer.agent.md
summary: >-
  Runs static code analysis and dependency auditing in one pass, mapping
  every finding to a CWE ID, an OWASP 2025 category and policy frameworks
  like PCI-DSS, HIPAA and GDPR, with a prioritized remediation plan.
category: security
tags: [security, sast, sca, owasp, cwe, code-review]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/sast-sca-security-analyzer.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/sast-sca-security-analyzer.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/sast-sca-security-analyzer.agent.md
installLang: bash
---

## Overview

This agent is a senior application security analyst, combining **static
application security testing** (taint tracking through source code) with
**software composition analysis** (scanning dependency manifests for known
CVEs) in a single structured pass, rather than treating them as separate
tools.

## How it works

1. It detects the language ecosystem from manifests (`package.json`,
   `pom.xml`, `go.mod`...), maps entry points and trust boundaries, and
   locates every dependency manifest.
2. It applies taint-tracking rules per language across injection,
   cryptography, authentication, authorization and deserialization flaw
   categories, citing an exact file and line for every finding.
3. For dependencies, it extracts each package's version, checks it against
   known CVEs, flags copyleft licenses (GPL/AGPL) in commercial contexts,
   and notes whether a vulnerability sits in a direct or transitive
   dependency.
4. It scores findings against OWASP Top 10 2025, PCI-DSS v4.0, CWE Top 25,
   HIPAA and GDPR as pass, fail or conditional.
5. Fixes are grouped into immediate, short-term and long-term buckets
   instead of one flat list of findings.

It also covers AI/ML-specific weaknesses (prompt injection, insecure model
inference parameters) alongside the classic OWASP categories.

## Examples

```txt
"Run a full SAST+SCA scan on the authentication module and check it
against PCI-DSS."
```

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/sast-sca-security-analyzer.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/sast-sca-security-analyzer.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and point it at a
   module to confirm it returns findings mapped to CWE and OWASP IDs.

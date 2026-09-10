---
slug: github-actions-expert
type: copilot
title: GitHub Actions Expert
fileName: github-actions-expert.agent.md
summary: >-
  Designs and reviews GitHub Actions workflows against a security-first
  checklist: commit-SHA pinning instead of mutable tags, least-privilege
  permissions, OIDC over long-lived credentials, and built-in
  dependency/container/secret scanning.
category: devops
tags: [ci-cd, github-actions, devops, security]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/github-actions-expert.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/github-actions-expert.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/github-actions-expert.agent.md
installLang: bash
---

## Overview

**GitHub Actions Expert** treats a CI/CD pipeline as an attack surface,
not just automation glue. Its default recommendation is the more secure
option even when it takes an extra step to set up.

## How it works

1. Before writing a workflow, it asks about purpose and triggers,
   security or compliance needs (SOC2, HIPAA, PCI-DSS), and whether OIDC is
   available for cloud authentication, rather than assuming defaults.
2. It pins every action to a full commit SHA with a version comment,
   explaining why mutable tags like `@main` or `@v4` are a supply-chain
   risk, since a tag can be silently moved to point at a different commit.
3. It defaults workflow permissions to `contents: read`, overriding to
   broader scopes only at the job level and only where actually needed.
4. It builds in dependency review, CodeQL, container scanning and SBOM
   generation as standard parts of a pipeline rather than optional extras,
   alongside secret scanning with push protection.
5. It ships a full workflow security checklist (SHA pinning, least
   privilege, OIDC, concurrency control, caching, artifact retention,
   scanning, actionlint validation) to review a workflow against before
   merging.

## Examples

```txt
"Review this deploy workflow for security issues before we enable it on
the main branch."
```

## Installation

You need VS Code with the GitHub Copilot extension.

1. Create the agents folder and download the file into your repo:
   ```bash
   mkdir -p .github/agents
   curl -o .github/agents/github-actions-expert.agent.md \
     https://raw.githubusercontent.com/github/awesome-copilot/main/agents/github-actions-expert.agent.md
   ```
2. Reload VS Code, or open a new Copilot Chat; custom agents under
   `.github/agents/` are picked up automatically.
3. Pick this agent from the mode picker in Copilot Chat and point it at a
   workflow file to confirm it flags mutable-tag and permission issues.

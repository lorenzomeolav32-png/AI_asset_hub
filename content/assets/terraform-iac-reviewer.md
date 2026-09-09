---
slug: terraform-iac-reviewer
type: copilot
title: Terraform IaC Reviewer
fileName: terraform-iac-reviewer.agent.md
summary: >-
  Reviews and writes Terraform changes with a focus on state safety,
  least-privilege IAM, drift detection and a strict plan-before-apply
  discipline.
category: devops
tags: [terraform, iac, devops, security, code-review]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/terraform-iac-reviewer.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/terraform-iac-reviewer.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/terraform-iac-reviewer.agent.md
installLang: bash
---

## Overview

This agent treats every infrastructure change as something that must be
reversible, auditable and verified through `plan`/`apply` discipline before it
touches a Terraform-managed environment. It asks clarifying questions about
state management and blast radius before proposing any change.

## How it works

1. It checks the backend type and state locking setup, the target
   environment, and the blast radius of the change before writing any code.
2. It expects organized files (`main.tf`, `variables.tf`, `outputs.tf`),
   descriptive variables with validation rules, and pinned provider/module
   versions.
3. It flags hardcoded secrets, missing encryption at rest or in transit,
   and IAM policies that use wildcards instead of specific actions and
   resources.
4. It pushes for a remote backend with locking, and recommends scheduled
   `terraform plan` runs to catch drift automatically.
5. The workflow runs `fmt` and `validate`, then a security scan (`tfsec` or
   `checkov`), then `plan`, human review, and only then `apply`, with a
   tested rollback option for every change.

## Examples

```txt
"Review this module for state safety and least-privilege IAM before
we apply it to production."
```

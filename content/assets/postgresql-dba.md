---
slug: postgresql-dba
type: copilot
title: PostgreSQL Database Administrator
fileName: postgresql-dba.agent.md
summary: >-
  Acts as a hands-on PostgreSQL DBA through the official VS Code
  PostgreSQL extension: connects to a real server, inspects schemas, runs
  and optimizes queries, and handles backups, instead of guessing from
  application code.
category: data-ai
tags: [postgresql, database, dba, sql]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/postgresql-dba.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  mkdir -p .github/agents
  curl -o .github/agents/postgresql-dba.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/postgresql-dba.agent.md
installLang: bash
---

## Overview

**PostgreSQL Database Administrator** is built to work against a live
database connection rather than inferring schema from the codebase. Its
own instructions say to always use the database tools to inspect the
database, not the code.

## How it works

1. It checks that the `ms-ossdata.vscode-pgsql` extension is installed
   before doing anything, since that extension supplies the actual
   connection and query tools it relies on.
2. It connects to a server, lists available databases, and can visualize
   the schema directly from the live database rather than from migration
   files.
3. It handles day-to-day DBA tasks: creating and modifying databases,
   bulk-loading CSV data, writing and optimizing queries, and describing a
   CSV's structure before an import.
4. Because it works from the real database state, it can catch drift
   between what a migration file claims and what the schema actually looks
   like right now.
5. Security and performance monitoring sit alongside query work, so it's
   positioned as an ongoing DBA assistant rather than a one-off migration
   generator.

## Examples

```txt
"Connect to the staging database and check whether the orders table has
an index on customer_id."
```

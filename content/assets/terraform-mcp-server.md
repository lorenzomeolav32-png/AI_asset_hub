---
slug: terraform-mcp-server
type: mcp-server
title: Terraform MCP Server
fileName: terraform-mcp-server.mcp
summary: >-
  HashiCorp's official MCP server for Terraform, giving agents direct
  access to the public Terraform Registry (providers, modules, policies)
  and to HCP Terraform / Terraform Enterprise workspaces.
category: devops
tags: [terraform, infrastructure-as-code, hashicorp, official]
tools: [claude, claude-code, cursor, vscode, copilot]
license: MPL-2.0
author: HashiCorp
source: https://github.com/hashicorp/terraform-mcp-server
stars: 1500
verified: true
install: |
  # VS Code (docker), add to your MCP config:
  {
    "servers": {
      "terraform": {
        "command": "docker",
        "args": ["run", "-i", "--rm", "hashicorp/terraform-mcp-server"]
      }
    }
  }
installLang: json
---

## Overview

**Terraform MCP Server** connects an agent directly to the Terraform
Registry API and, optionally, to HCP Terraform or Terraform Enterprise, so
infrastructure-as-code suggestions are grounded in real provider and module
documentation instead of a model's memory of an older Terraform version.

## How it works

1. It queries the public Terraform Registry for provider and module
   documentation, letting an agent look up the exact resource arguments and
   examples for the provider version you're actually using.
2. With an HCP Terraform or Terraform Enterprise token, it can list
   organizations and workspaces, and manage workspace variables, tags and
   runs directly, not just read documentation.
3. It supports both local stdio (for a single client on your machine) and
   Streamable HTTP (for a centrally hosted deployment shared across a
   team), with per-user token passthrough so a shared server enforces each
   user's own permissions.
4. Workspace-mutating operations stay behind an explicit
   `ENABLE_TF_OPERATIONS` flag, so read-only registry lookups work out of the box while
   anything that changes real infrastructure needs to be turned on
   deliberately.
5. It exposes usage metrics (tool call volume, latency, failures) via
   OpenTelemetry when running in HTTP mode, useful if you're running this
   centrally for a team rather than locally for yourself.

## Examples

```txt
"Look up the current arguments for the aws_s3_bucket resource in the
latest AWS provider and add server-side encryption to this Terraform
file."
```

## Notes

The license is Mozilla Public License 2.0 (MPL-2.0), a weak-copyleft
license: you can use and modify it freely, including commercially, but
changes to the licensed files themselves must stay MPL-2.0 if redistributed.
It doesn't affect your own Terraform configurations or unrelated code.

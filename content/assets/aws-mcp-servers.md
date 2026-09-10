---
slug: aws-mcp-servers
type: mcp-server
title: AWS MCP Servers
fileName: aws-mcp-servers.mcp
summary: >-
  AWS Labs' official collection of 80+ MCP servers, one per AWS service area
  (documentation, IaC, databases, serverless, cost, observability), each
  installable independently via uvx or Docker.
category: devops
tags: [aws, cloud, infrastructure, official, catalog]
tools: [claude, claude-code, cursor, vscode, copilot]
license: Apache-2.0
author: AWS Labs (Amazon)
source: https://github.com/awslabs/mcp
stars: 9700
verified: true
install: |
  # Each server installs independently, e.g. the AWS Documentation server:
  {
    "mcpServers": {
      "awslabs-core-mcp-server": {
        "command": "uvx",
        "args": ["awslabs.core-mcp-server@latest"],
        "env": { "FASTMCP_LOG_LEVEL": "ERROR" }
      }
    }
  }
installLang: json
---

## Overview

**AWS MCP Servers** is the open source collection maintained by AWS Labs to
connect coding agents to real AWS documentation, pricing and service APIs
instead of relying on a model's training data, which is often out of date
for a fast-moving cloud platform.

## How it works

1. The repository is organized as one server per AWS service or workflow
   area: documentation, CloudFormation/CDK, DynamoDB, Aurora, ElastiCache,
   Lambda, ECS/EKS, Bedrock, CloudWatch, pricing and dozens more, each in
   its own `src/` folder with its own README.
2. Every server is installed and run independently through `uvx`, so an
   agent only pulls in the servers relevant to what it's doing rather than
   one large, all-purpose tool.
3. Servers run locally by default, using your own AWS credentials, but
   several (like AWS Knowledge and the in-preview AWS MCP Server) are also
   offered as fully managed, remote servers hosted by AWS.
4. AWS Labs also publishes Docker images for each server in a public ECR
   registry, for teams that prefer running these in containers over
   `uvx`.
5. As of mid-2026, AWS is migrating the most-used servers here into a
   successor product called Agent Toolkit for AWS, aimed at production
   agent workloads; this repository keeps working and accepting
   contributions in the meantime.

## Examples

```txt
"Use the Terraform MCP server and the AWS Pricing MCP server to estimate
the monthly cost of this CDK stack before I deploy it."
```

## Installation

You need `uv` (for `uvx`) or Docker, valid AWS credentials configured
locally, and an MCP client such as VS Code, Claude Code/Desktop or Cursor.

1. Install `uv` if you don't have it, or use AWS Labs' Docker images from
   its public ECR registry instead.
2. Configure AWS credentials locally (`aws configure`, or environment
   variables) so the server can call real AWS APIs on your behalf.
3. Pick the server you need, for example the AWS Documentation server, and
   add its config block (see the sidebar) to your MCP client.
4. Restart your client and confirm the new tools appear.
5. Repeat step 3 for any other AWS service server you want; each one
   installs and runs independently.

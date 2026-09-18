---
slug: socialcrawl-mcp
type: mcp-server
title: SocialCrawl MCP
fileName: socialcrawl-mcp.mcp
summary: >-
  One MCP server that connects agents to 575 endpoints across 65 platforms:
  social media, e-commerce, app stores, travel, jobs, finance, and full web
  scraping, with upfront credit pricing and pre-flight request validation.
category: research
tags: [social-media, web-scraping, data-api, market-research, e-commerce]
tools: [claude, claude-code, cursor, vscode, copilot, windsurf]
license: MIT
author: SocialCrawl
source: https://github.com/socialcrawl/mcp
stars: 22
verified: true
install: |
  # Claude Code (hosted, no local install)
  claude mcp add --scope user --transport http socialcrawl \
    https://mcp.socialcrawl.dev/mcp \
    --header "Authorization: Bearer sc_your_key_here"

  # Or local, any MCP client:
  # command: npx
  # args: ["-y", "socialcrawl-mcp"]
  # env: { "SOCIALCRAWL_API_KEY": "sc_your_key_here" }
installLang: bash
---

## Overview

SocialCrawl MCP gives an agent a single interface to 575 endpoints across 65
platforms: profiles, posts, comments, and trends from TikTok, Instagram,
YouTube, X, LinkedIn, and Reddit; product and review data from Amazon,
Walmart, Target, and eBay; app store listings, travel and local business
data, job listings, market/finance data, US congressional trading
disclosures, news, and full web scraping and browser automation. Four of the
ten tools work without an API key.

## How it works

1. `socialcrawl_discover` and `socialcrawl_list_endpoints`/`_list_platforms`
   let an agent explore the full catalogue and its parameter contracts before
   making any paid call, served from local bundled data at 0 credits.
2. `socialcrawl_pricing` quotes the exact credit cost of a call in advance:
   endpoints are billed as a flat rate, a ladder tier, or a metered band that
   refunds down to the work actually done.
3. `socialcrawl_request` validates a call locally first (required params,
   enum values, integer ranges, parameter couplings) so a malformed request
   fails for free instead of burning credits, then executes it and returns a
   consistent response envelope across every platform.
4. `socialcrawl_monitors` turns any endpoint or composite into a scheduled,
   stateful job that reruns on a cadence and delivers results to a signed
   webhook. `socialcrawl_web` covers scraping, crawling, and interactive
   browser sessions for anything outside the platform registry.

## Examples

```txt
Compare the follower counts of @mkbhd on TikTok, Instagram, YouTube, and Twitter.

Find the cheapest 65-inch OLED TV across Amazon, Walmart, Target, and eBay.
```

## Installation

You need Node.js (for the local `npx` option) and a free SocialCrawl API key.

1. Sign up at [socialcrawl.dev](https://socialcrawl.dev/) for 100 free
   credits (no card required).
2. Add the server to your MCP client, either the hosted HTTP endpoint with
   your key as a bearer token, or the local `npx -y socialcrawl-mcp` command
   with `SOCIALCRAWL_API_KEY` set (see the sidebar for both).
3. Restart your client.
4. Ask the agent to fetch a public profile (e.g. a TikTok or YouTube
   account) to confirm the key and connection work.

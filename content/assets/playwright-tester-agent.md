---
slug: playwright-tester-agent
type: copilot
title: Playwright Tester Agent
fileName: playwright-tester.agent.md
summary: >-
  A Copilot custom agent that explores a website with the Playwright MCP server,
  then writes, runs and iterates on TypeScript Playwright tests until they pass.
category: testing-qa
tags: [testing, playwright, qa, browser-automation]
tools: [copilot, vscode]
license: MIT
author: awesome-copilot community
source: https://github.com/github/awesome-copilot/blob/main/agents/playwright-tester.agent.md
stars: 38700
starsNote: whole github/awesome-copilot repo
verified: true
install: |
  # Copy into your repo's agents folder (VS Code / Copilot CLI pick it up automatically)
  mkdir -p .github/agents
  curl -o .github/agents/playwright-tester.agent.md \
    https://raw.githubusercontent.com/github/awesome-copilot/main/agents/playwright-tester.agent.md

  # Requires the Playwright MCP server configured in your MCP client
installLang: bash
---

## Overview

**Playwright Tester Agent** ("Playwright Tester Mode") is a `.agent.md` custom agent
for GitHub Copilot that pairs with the [Playwright MCP](/mcp-servers/playwright-mcp)
server to explore a real website before writing a single line of test code.

## How it works

The agent's core responsibilities, defined directly in its instructions:

1. **Website exploration**: navigate the site with the Playwright MCP, take a page
   snapshot, and identify key user flows like a real user would, before generating
   any code.
2. **Test improvements**: when asked to improve existing tests, it navigates back to
   the live page and uses the snapshot to find the correct locators.
3. **Test generation**: writes well-structured, maintainable Playwright tests in
   TypeScript based on what it actually explored (not guessed selectors).
4. **Test execution & refinement**: runs the generated tests, diagnoses failures,
   and iterates until they pass reliably.
5. **Documentation**: summarizes what was tested and how the tests are structured.

It's scoped to testing-related tools (`findTestFiles`, `runTests`, `testFailure`,
`playwright`, `runCommands`...) so it stays focused on the test-writing loop instead
of general-purpose coding.

## Examples

```txt
"Explore the checkout flow on staging and write Playwright tests covering the
happy path and the empty-cart case."

"These login tests are flaky, go re-check the page and fix the locators."
```

Works best paired with the Playwright MCP server, which lets the agent see the real
DOM rather than infer selectors from the source code alone.

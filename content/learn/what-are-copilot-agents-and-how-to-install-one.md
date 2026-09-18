---
slug: what-are-copilot-agents-and-how-to-install-one
title: What are GitHub Copilot agents, and how do you install one?
summary: >-
  A Copilot agent is a markdown file that gives GitHub Copilot Chat a fixed
  persona and rulebook for one job, selectable right from the mode picker in
  VS Code. Here is what's actually in one, and how to get one running.
kind: tutorial
tags: [copilot-agents, github-copilot, vscode, tutorial, setup]
date: 2026-09-18
reviewBy: 2026-11-18
---

A GitHub Copilot agent is an `.agent.md` file: YAML frontmatter plus plain-language
instructions, saved under `.github/agents/` in a repository. Once it's there, it
shows up as its own entry in Copilot Chat's mode picker in VS Code, next to Ask
and Edit, and switching to it changes how Copilot behaves for that conversation.
This guide covers what's actually inside one, then walks through installing and
running one, with a checkpoint after each step.

## What's actually in an agent file

Open any `.agent.md` file and the frontmatter always has the same shape: a
`description` (shown as a hint when you pick it), a `name`, usually a `model`
preference, and a `tools` list that restricts what the agent is allowed to call,
things like `edit/editFiles`, `runCommands`, or `runTests`. Below the frontmatter
is the instructions body: how this version of Copilot should think, what it
should check before answering, what it should refuse to do.

[Thinking Beast Mode](/copilot-agents/thinking-beast-mode) turns Copilot into a
slower, more thorough reasoner before it writes anything. [Specification
Mode](/copilot-agents/specification-mode) won't touch code until it has a real
spec to work from. Neither one changes the underlying model; they change the
instructions Copilot reads before it answers you.

Agents aren't the only file GitHub Copilot reads this way. A close relative is
the `.instructions.md` file, which applies automatically to matching files
instead of waiting to be selected from the mode picker. [Security & OWASP Top
10 Instructions](/copilot-agents/security-and-owasp) is one: set its `applyTo`
to `**`, and every file Copilot touches gets checked against 55+ OWASP
anti-patterns without you switching modes at all.

## Before you start

You need VS Code with the GitHub Copilot extension installed and signed in, and
a repository (or even just a local folder) you can add a `.github` directory
to.

## Create the agents folder

```bash
mkdir -p .github/agents
```

## Add an agent file

Write your own, or copy one that already does what you need. This directory
catalogs dozens: [Accessibility Expert](/copilot-agents/accessibility-expert)
reviews components against WCAG 2.1/2.2, [Playwright Tester
Agent](/copilot-agents/playwright-tester-agent) writes and runs end-to-end
tests, [Terraform IaC Reviewer](/copilot-agents/terraform-iac-reviewer) checks
infrastructure code before it ships. Every asset page has a ready-to-run
download command in its Installation section, following the same shape:

```bash
curl -o .github/agents/<name>.agent.md \
  https://raw.githubusercontent.com/github/awesome-copilot/main/agents/<name>.agent.md
```

**Checkpoint:** confirm the file landed with the right extension.
`ls .github/agents` should show a file ending in `.agent.md`, not just `.md`.
Copilot only reads files named that way as agents.

## Select it and confirm it loaded

Open Copilot Chat (or reload the VS Code window if it was already open) and
click the mode dropdown at the top of the chat panel. Your new agent's `name`
should be in the list alongside Ask and Edit.

**Checkpoint:** select it and ask something inside its specialty. If it
responds in character, Accessibility Expert flags a missing ARIA label,
Specification Mode asks for requirements before touching a file, it loaded
correctly. If it answers like a generic assistant, it didn't.

## Use it day to day

Pick the agent from the mode dropdown before you start a task that matches its
job, then chat normally for that conversation. Whatever `tools` restriction or
persona its frontmatter sets stays in effect until you switch back to Ask,
Edit, or a different agent.

## If it doesn't show up

Check the file extension first: `security-check.md` does nothing,
`security-check.agent.md` does. Second, open the file and confirm the
frontmatter's opening `---` is the very first line, with nothing above it, or
VS Code loads it with no metadata at all. Third, for an `.instructions.md`
file specifically, a vague or wrong `applyTo` glob is the usual reason it never
seems to apply to the files you expected.

## Share it with your team

Commit `.github/agents/` (and `.github/instructions/`) to the repository.
Anyone who pulls the branch gets the same agents the next time they open the
folder in VS Code, no separate install step needed on their end.

Browse the full catalog at [Copilot Agents](/copilot-agents) for more, including
planning agents like [PRD Generator](/copilot-agents/prd-generator) and TDD
agents such as [TDD Red Phase](/copilot-agents/tdd-red-phase) and [TDD Green
Phase](/copilot-agents/tdd-green-phase). The agents named in this guide are just
the ones that fit the examples, not the whole catalog: new ones get added
regularly, so it's worth checking back rather than treating this list as fixed.

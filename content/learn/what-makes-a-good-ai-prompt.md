---
slug: what-makes-a-good-ai-prompt
title: What makes a good AI prompt, and how to write one
kind: explainer
summary: >-
  A good prompt isn't a magic phrase, it's enough of the right information that
  the model doesn't have to guess. Here's what actually goes into one, with
  three worked examples and where the same discipline shows up inside the
  skills and agents in this directory.
tags: [prompt-engineering, basics, ai-agents]
date: 2026-09-14
---

A prompt is the instruction you give a model to get something specific back.
Prompt engineering is just the practice of making that instruction complete
enough that the model's first answer is the one you meant, instead of the
third one after you've corrected it twice. The same discipline is also what's
sitting inside every Claude Skill, Copilot agent, and MCP server in this
directory: the tool just means someone already did this work once, instead of
you redoing it from a blank prompt box every session.

## What a prompt is actually made of

Most prompts that fail are missing one of four things: the exact action, the
reason behind a constraint, the specifics that define "done," and the shape
the answer should take. A prompt like "help me with this email" skips all
four: no verb pointing at a real outcome, no reason for the model to weigh
tone one way or another, no length or content requirement, and no hint about
format. A prompt like "rewrite this email in two short paragraphs, warm but
get to the refund decision by the second one, because the customer has
already written in twice" has all four in a single sentence, which is why it
gets a usable answer on the first try.

## Why explicit beats implicit

Models don't ask for the missing piece, they guess it, and a confident guess
reads exactly like a correct answer until you catch it. Anthropic's own
prompt engineering guidance is direct about this: modern models "respond
exceptionally well to clear, explicit instructions," and get worse, not
better, when you expect them to infer intent from a short, polite request.
That's the mechanism behind the four pieces above: specificity doesn't make
the model smarter, it removes guesswork it was already doing quietly.

The same logic applies to uncertainty. If a prompt only leaves room for an
answer, a model under pressure to answer will produce one, correct or not.
Telling it directly that "I don't have enough information" or "none of these
match" is an acceptable response cuts down on invented specifics, because
you've removed the assumption that an answer is mandatory.

A fourth lever is showing instead of telling. When the hard part of a task is
a format or a tone that's easier to demonstrate than describe, one example of
the exact output you want teaches the model faster than another paragraph of
adjectives. That's also why a skill's bundled sample output, or a couple of
solved cases inside its instructions file, tends to outperform a plain
description of the same rules on their own.

## Three prompts, before and after

Take a real task: turning a batch of customer emails into a spreadsheet-ready
list of complaints. A vague version: "look at these emails and list the
complaints." A version built from the four pieces above:

```
Read these customer emails and extract complaints into a table with columns
Date, Product, Complaint (one sentence), Severity (low/medium/high, based on
whether they mention a refund or cancellation). Skip emails that are pure
praise or a question with no complaint in it. If severity is unclear from the
text, mark it "unclear" instead of guessing.
```

The second version names the action, states the exact columns instead of
leaving structure to chance, gives a rule for severity instead of asking the
model to invent one, and tells it what to do with a case that doesn't fit.

A different failure mode shows up in judgment calls. A vague version:
"should we approve this expense?" That leaves the model free to weigh
whatever it wants and hand you a single word you have to trust. A version
that forces the reasoning into the open:

```
Decide whether to approve this expense report. Check it in this order: is the
amount under the $500 auto-approve threshold, does the category match an
approved budget line, is a receipt attached. State which of the three checks
failed, if any, before giving a final approve or deny.
```

Forcing the order of checks and requiring the failed check to be named turns
a one-line judgment call into something you can audit instead of a verdict you
have to take on faith.

A third failure mode is format drift, where the model buries a clean answer
inside a paragraph of preamble. A vague version: "turn this list of code
changes into a commit message." A version that controls the shape directly:

```
Write a commit message for these changes. First line: a 50-character-or-less
summary in imperative mood ("Fix", not "Fixed"). Blank line. Then up to three
bullet points, each starting with a verb, describing what changed and why. No
preamble, no explanation outside the message itself.
```

Stating exactly where the line breaks go, and explicitly ruling out preamble,
removes the two most common failure points in commit message generation: a
summary line too long to read in a git log, and chatty text wrapped around the
message you actually wanted.

## Where this shows up in the assets you already use

Every skill, agent, and MCP server in this directory isn't a shortcut around
prompt engineering, it's prompt engineering someone already finished and
packaged. [Modernization Agent](/copilot-agents/modernization-agent) is a
good example: its real advantage over asking a model to "help modernize this
codebase" is one hard constraint baked into its instructions, that it must
read every service and controller file before proposing anything, which is
the same kind of explicit, checkable rule as the examples above, just written
once by someone else. [Doublecheck Agent](/copilot-agents/doublecheck-agent)
works the same idea from the other direction: its instructions explicitly
forbid it from rendering a final verdict on what's true, a
permission-to-express-uncertainty rule applied to a whole agent instead of
one prompt. [TDD Red Phase](/copilot-agents/tdd-red-phase) does it with scope:
one failing test at a time, never several in a single pass, so what would be a
vague one-off request ("write some tests") becomes a rule the agent can't
quietly break.

The same idea holds for MCP servers, even though they add live access rather
than instructions. [Sequential Thinking MCP
Server](/mcp-servers/mcp-sequential-thinking) doesn't make a model reason
better on its own, it turns "think step by step" from a phrase you hope the
model takes seriously into an actual tool call it has to make, one numbered
thought at a time, before it answers. And if you're the one writing
instructions rather than installing someone else's, [Prompt Engineer
Agent](/copilot-agents/prompt-engineer-agent) exists to take a rough draft
and restructure it against the same rubric covered here, so the checking
doesn't depend on you remembering every rule under deadline.

## When this is overkill

None of this is worth doing for a one-off question you'll read once and move
on from. Write it out when you're going to run the same kind of request more
than a couple of times, when the output feeds into something else
automatically, or when getting it wrong is expensive enough that a second
pass costs more than a careful prompt would have up front. That's also the
exact point where it stops making sense to keep the instructions in your head,
and starts making sense to save them, whether that's a personal note or one
of the packaged skills above.

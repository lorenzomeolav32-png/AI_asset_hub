---
slug: claude-fable-5-1-model-ranking
title: "Claude Fable 5.1 ranked: Opus, Sonnet, and Haiku, and what each one is for"
summary: >-
  Anthropic only gave a codename to the flagship. That's the tell: reach for
  Fable 5.1 when a task earns it, and use the plain-named tiers under it for
  everything else.
tags: [anthropic, claude, claude-fable-5-1, guide]
date: 2026-09-12
---

Anthropic named the flagship of this generation Claude Opus 5.1, but the name
on the box is Fable: Claude Fable 5.1 is the Opus tier of this generation, not
a fourth model next to it. The two tiers under it, Sonnet 5.1 and Haiku 5.1,
kept the plain tier-plus-version naming, so only the top tier gets a codename
you'd put in a headline. That's a decent hint about how to pick between them:
reach for the one with the name only when the job actually needs it, and stop
defaulting to it out of habit.

## Why the tiers exist in the first place

No lab ships one model for every job, because a model built to handle the
hardest, most ambiguous task you can throw at it is expensive to run on the
easy ninety percent of your workload too. Anthropic ships three tiers of the
same generation instead of one, and the practical reason is that "smartest
possible" and "cheapest possible" pull in opposite directions, and almost no
real workload sits at either extreme. Getting the tier choice wrong costs you
either way: pick the cheap tier for a job with real ambiguity and you get
confident wrong answers that slip past review; pick the flagship for a job
that's actually simple and repetitive, and you're paying reasoning-model
prices for a lookup. The ranking below exists to make that trade-off
concrete instead of a guess.

## The short version

| Model | Best for | Weak fit |
|---|---|---|
| Claude Fable 5.1 (Opus) | Long, ambiguous, high-stakes agent runs | Simple lookups, high-volume chat |
| Claude Sonnet 5.1 | Daily coding and content agents | Tasks with a hard reasoning ceiling |
| Claude Haiku 5.1 | High-volume, low-latency, cheap work | Anything genuinely ambiguous |

## Claude Fable 5.1 (Opus): save it for the problem that earns it

Fable 5.1 is the model to reach for when a task is long, ambiguous, or
expensive to get wrong: a legacy migration where a wrong read of the business
logic costs weeks, an infrastructure change with real blast radius, or an
agent that has to run unattended for an hour and stay on scope the entire
time. [Modernization Agent](/copilot-agents/modernization-agent) is a good
example of the shape of task this tier is for: it reads every service and
controller in a codebase before proposing anything, because skipping files to
save time is exactly how a migration plan misses the one dependency that
breaks production. [Terraform IaC Reviewer](/copilot-agents/terraform-iac-reviewer)
is the same idea applied to infrastructure: it checks blast radius and state
safety before touching anything, the kind of judgment call you don't want a
cheaper model guessing at. [Project Architecture
Planner](/copilot-agents/project-architecture-planner) and [Technical Debt
Remediation Plan](/copilot-agents/tech-debt-remediation-plan) sit in the same
category for a different reason: both produce a plan, not code, and a wrong
plan compounds every day someone builds on top of it, which is exactly the
kind of one-shot, hard-to-undo judgment call worth the flagship price.

That capability costs more per token than the tiers below it, by a wide
margin, and it's slower per response. Point it at a task a cheaper model
handles fine and you're paying flagship prices for Sonnet-level work. The
mistake isn't using Fable 5.1. It's using it as a default instead of a choice.

## Claude Sonnet 5.1: the one that does most of the work

Sonnet 5.1 is where the price-to-capability curve actually bends in your
favor, and it's the tier most coding and content agents should run on by
default, because the task has a clear scope and a checkable result rather
than an open-ended judgment call. A three-stage workflow like [TDD Red
Phase](/copilot-agents/tdd-red-phase), which writes one failing test at a time
before any implementation exists, or [TDD Green
Phase](/copilot-agents/tdd-green-phase), which only has to make that one test
pass without touching it, are both this shape of work: bounded, repeatable,
and easy to verify against a green or red result. [Playwright Tester
Agent](/copilot-agents/playwright-tester-agent), which explores a site and
iterates on tests until they pass, and [Address Comments
Agent](/copilot-agents/address-comments-agent), which works through PR review
comments one at a time and applies the minimal fix for each, fit the same
profile: real judgment is involved, but every output has an obvious pass or
fail the moment you look at it.

If Sonnet 5.1 starts missing edge cases on a task you assumed was routine,
that's the actual signal to move up a tier, not a gut feeling that "bigger is
safer."

## Claude Haiku 5.1: fast, cheap, and fine with that trade

Haiku 5.1 is built for volume: triage, classification, a chatbot answering the
same twenty questions all day, or a small deterministic tool call that runs
constantly and needs to be cheap enough that running it often doesn't matter.
[Time MCP Server](/mcp-servers/mcp-time) is the clearest version of that: it
only ever answers "what time is it" or "convert this time to that timezone,"
so there's no ambiguity for a bigger model to resolve. [Fetch MCP
Server](/mcp-servers/mcp-fetch), which retrieves a page and converts it to
markdown so the model doesn't have to parse raw HTML, is the same idea one
step up: the tool does the hard part, and the model's job is just reading
what comes back. The job is narrow, repetitive, and doesn't need deep
reasoning to do well.

The trade is real: less headroom on anything genuinely ambiguous, and it will
confidently get a subtle case wrong rather than surface its own uncertainty.
Use it where the task is narrow enough that "occasionally wrong, cheap, and
fast" beats "always right, slow, and expensive."

## Where teams get this wrong

The most common mistake is treating tier choice as a one-time decision made
at kickoff and never revisited. A support-ticket triage bot that started on
Haiku because the tickets were simple keeps running on Haiku six months later,
after the product added three new failure modes that actually require
judgment, and nobody notices until a customer complains about a wrong answer
that read as confident. The fix isn't picking a bigger tier up front out of
caution, it's checking back in when the task's shape changes, not just when
it launches.

The second mistake runs the other way: judging a tier by a demo instead of by
production volume. Running Fable 5.1 once on a sample task looks cheap and
impressive, because one run is always cheap. The real cost shows up at the
hundredth run of the week, and that's the number that should decide the tier,
not the demo. The third mistake is blaming the model when a task fails on a
cheap tier, instead of asking whether the task was ever a fit for that tier
in the first place. A Haiku-tier classifier getting a genuinely ambiguous
case wrong isn't a bug, it's the tier doing exactly what it was built for at
the cost of the one case it wasn't.

## How to actually decide

Three questions do most of the work: how ambiguous is the task, really, once
you look past the easy cases? What does a wrong answer actually cost, in
money, time, or trust, if nobody catches it right away? And how many times a
day or week will this run? A task that's ambiguous, expensive to get wrong,
and runs rarely is a clear Fable 5.1 case. A task that's bounded, checkable,
and runs constantly is a clear Haiku case. Most real work lands on Sonnet,
which is exactly why it's the tier most agents should default to until one of
the other two answers says otherwise.

## Pick the tier the task deserves

The leaderboard instinct is to always reach for the top model because it's
the best one available. In practice that just means paying flagship prices for
Haiku-shaped work. Match the tier to how ambiguous the task actually is, how
expensive a wrong answer would be, and how many times a day you're going to
run it, and the ranking above stops being trivia and starts being a budget
decision that actually holds up.

---
slug: why-skills-and-agents-matter-in-agentic-ai
title: Most agentic AI failures aren't model failures
summary: >-
  When an agent goes off the rails, the instinct is to blame the model. Most of
  the time the real problem is that nobody gave it a skill or a way to reach the
  right tool.
tags: [agents, skills, mcp, opinion]
date: 2026-09-07
---

When an agent goes off the rails, mixes up a file, hallucinates an API that
doesn't exist, or forgets a rule you told it five messages ago, the instinct is
to blame the model. Try a bigger one. Try a different lab. In my experience
that's rarely where the problem actually lives.

## The gap is structure, not intelligence

A raw model, even a frontier one, only knows what's in its training data and
whatever you put in the prompt this one time. Ask it to write release notes
"the way we always do it" and it will guess, because it has no idea how you
always do it. Ask it to check the status of a ticket in your tracker and it
can't, because it has no way to reach your tracker at all. Neither of those is
an intelligence problem. They're a structure problem, and structure is exactly
what skills and agent tooling exist to fix.

A skill is the know-how: the steps, the house style, the edge cases you've
already learned the hard way, saved once so you stop re-explaining them every
session. An MCP server or a tool definition is the access: the actual door
into your tracker, your database, your file system. Put them together and an
agent stops guessing and starts doing the specific task you need, the way you
need it done.

## Why this gets skipped

Most teams start with a plain prompt because it's the fastest thing that
works, and for a one-off question it's genuinely fine. The trouble starts when
the same team keeps that same ad hoc approach for a task they run every week.
Nobody saves the good prompt. Nobody wires up the tool the agent actually
needs. So the agent keeps almost working, and the team quietly writes off
"agentic AI" as overhyped, when what they actually built was a chatbot with
no memory and no hands.

I've watched this play out the same way more than once: a demo looks great,
production quietly falls apart, and the postmortem blames the model instead of
the missing skill file or the tool the agent never had access to.

## What actually changes the outcome

Write down the steps once, as a skill, instead of retyping them into a prompt
box every time. Give the agent a real way to reach the systems it needs to
touch, instead of hoping it can infer the answer from training data. Test the
combination on the actual task, not a toy example. None of this requires a
smarter model. It requires treating the agent like a new hire who needs a
runbook and a set of keys, not a search engine that already knows everything.

The labs will keep shipping bigger models, and each one will close some gap
that used to require a workaround. But the gap between "a model that can
reason" and "an agent that reliably does your specific job" isn't closing on
its own. Skills and agent access are how you close it now, with the models you
already have.

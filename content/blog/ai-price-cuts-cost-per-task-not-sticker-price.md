---
slug: ai-price-cuts-cost-per-task-not-sticker-price
title: "Opus 5.5, GPT-6 Sol, and GPT-6 Luna just got cheaper. The effort setting decides if you notice"
summary: >-
  Anthropic and OpenAI both cut prices this week. Both companies also
  published a chart, right next to the discount, that shows effort setting
  moves your cost far more than either price cut does.
tags: [openai, anthropic, gpt-6-astra, claude-opus-5-5, pricing, opinion]
date: 2026-09-24
reviewBy: 2026-11-24
---

Anthropic shipped Claude Opus 5.5 yesterday: the first release in its new
Opus 5.5 line, priced 40% below Opus 5 at default settings, and matching
Claude Fable 5.1 on most work by Anthropic's own account. OpenAI answered
within a day with GPT-6 Sol and GPT-6 Luna, both priced 50% below their
GPT-5.6 predecessors. GPT-6 Astra, still OpenAI's flagship, kept its price
where [this site already reported it](/blog/gpt-6-astra-what-actually-changed):
$10 input and $50 output per million tokens. Two labs, two real price cuts,
the same week.

The more useful read isn't the price sheet. It's a chart both companies
published on the same announcement page as the discount, and it undercuts
the headline before anyone else gets the chance to.

## The chart that comes with the discount

Opus 5.5's list price is a genuine cut: input tokens went from $5 to $4 per
million, output from $25 to $20, and cache reads, which Anthropic says make
up most agentic and coding costs, from $0.50 to $0.20. A few scrolls down
the same page, Anthropic's own Terminal-Bench 4.0 result plots cost per
attempt on a log scale running from roughly $2 to $20, labeled low, medium,
high, xhigh, and max: the same model, at different effort settings,
spanning close to a 10x range in what one task costs to run. A 20% cut on
the input rate barely registers next to that.

## Read past the benchmark row you're being sold

OpenAI's launch page makes a related point from the competitive angle. On
AutomationBench, GPT-6 Sol at its highest effort setting completes a task
for $0.27. GPT-6 Astra at its lowest effort setting costs 3.9 times that on
the same benchmark. Claude Opus 5 at max effort costs 11.1 times that. None
of those three numbers involve this week's discounts at all, they're what
effort setting alone does to a bill, across three different models.

The footnote on that table is worth reading too: Claude Fable 5.1's listed
cost "understates its actual cost, as it omits the cost of the Opus 5
fallbacks, which occurred on ~40% of tasks." That's a competitor describing
a competitor's number, so read it as marketing, not neutral. But the
mechanism cuts both ways: any agent that quietly falls back to a pricier
model once a task gets hard enough doesn't show that cost on the headline
benchmark row either. If your own workflow has a fallback path, its real
cost lives in your logs, not on anyone's launch page.

## The number a price cut can't fix for you

Both labs are showing you the same thing without quite meaning to: cost per
task moves with effort setting more than it moves with list price, by a
wide margin. That's exactly why [checking cost per task instead of cost per
token](/blog/gpt-6-astra-vs-claude-fable-5-1) matters more this week than
most. A [Time MCP Server](/mcp-servers/mcp-time) call or a [Fetch MCP
Server](/mcp-servers/mcp-fetch) request stays narrow and deterministic no
matter which model sits behind it, so a price cut on the base rate lands
close to full value. A broad, long-running agent like [Modernization
Agent](/copilot-agents/modernization-agent), reading an entire codebase
before proposing anything, lives at a high effort tier by design, and
that's where the effort curve, not the price cut, decides the bill.

## Three questions before you switch anything

Before moving a workload to Opus 5.5, GPT-6 Sol, or GPT-6 Luna because the
price dropped, check three things in your own usage, not the announcement:
what effort setting does this workload run at in production right now?
What was the average cost per completed task last month, at that setting,
not the demo? And does the published discount apply to the effort tier you
actually run, or only to the cheapest one, the one the headline number is
quoting?

Anthropic and OpenAI both published the chart that answers this. It sits a
few scrolls below the price table, and it matters more than the number
above it.

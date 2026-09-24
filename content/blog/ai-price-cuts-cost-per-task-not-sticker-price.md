---
slug: ai-price-cuts-cost-per-task-not-sticker-price
title: "Astra and Fable 5.1 just got cheaper. Your bill might not have"
summary: >-
  Both labs cut prices the same week and the headlines wrote themselves. The
  number that decides whether you saved anything isn't on either price
  sheet.
tags: [openai, anthropic, gpt-6-astra, claude-fable-5-1, pricing, opinion]
date: 2026-09-24
reviewBy: 2026-11-24
---

OpenAI cut Astra's list price this week, from $10/$50 per million input/output
tokens down to roughly $7/$35. Anthropic didn't touch Fable 5.1's headline
rate, it discounted the extended-thinking multiplier instead, which is the
line item that was already doing most of the damage on anything harder than
a single-turn prompt. Either way, the story got written the same day: frontier
intelligence is getting cheaper, developers win. [Astra vs Fable
5.1](/blog/gpt-6-astra-vs-claude-fable-5-1) already covered which model wins
on a fixed task. This is about a different question: whether either cut
shows up on your invoice at all.

## A per-token discount isn't a per-task discount

Both labs price by the token, but neither ships a model that uses a fixed
number of tokens per task. Astra and Fable 5.1 both scale how much they
"think" with an effort or thinking setting, and a harder prompt at a higher
effort tier can burn two or three times the tokens of the same prompt at the
default setting. Cut the per-token price by 30% and raise average token
usage by 30% at the same time, through a higher effort tier, longer
reasoning traces, or a bigger context window carried into every turn, and
the invoice ends up exactly where it started. Nobody lied about the price.
The price just wasn't the whole bill.

This is why "how much does it cost per million tokens" is the wrong question
to ask when a lab announces a cut, and "how much did my actual workload cost
last month, and how much will it cost next month at the same volume" is the
right one. One is on the pricing page. The other is in your usage dashboard,
and almost nobody checks it before switching.

## Run the number on your invoice, not the price page

Take a task you already run in production, not a demo prompt. Price it at
last month's average token count and last month's rate, then price it again
at the new rate using this month's average token count, not last month's.
If your team moved a workflow to a higher effort tier at some point, because
it got a slightly better answer and nobody tracked the token cost of that
decision, the new discount can be fully absorbed before it reaches your
bill. A 30% list-price cut against a 40% jump in average tokens per task is
a net increase, and the pricing announcement will never tell you that,
because the lab doesn't know your effort setting or your prompt length.

The gap between the two numbers is usually biggest on exactly the tasks that
look most impressive in a demo: long agent runs, deep research, anything
that benefits from extended thinking. Those are also the tasks most likely
to have drifted to a higher effort tier over the past few months, because
someone noticed it produced better output and never priced what that
upgrade cost per run.

## Narrow tools keep the whole discount. Broad agents don't

Not every workload is exposed the same way, and the split runs along a line
this directory already tracks: how much reasoning effort a task needs. A [Time MCP Server](/mcp-servers/mcp-time) call or a [Fetch MCP
Server](/mcp-servers/mcp-fetch) request barely touches reasoning tokens at
all, the task is narrow and deterministic, so a price cut on the base rate
lands close to full value. A broad, long-running agent like
[Modernization Agent](/copilot-agents/modernization-agent), reading an
entire codebase before proposing anything, lives at a high effort tier by
design, and that's exactly the shape of task where token growth eats a
discount fastest. Neither is the wrong tool. The [tier ranking for Claude
Fable 5.1](/blog/claude-fable-5-1-model-ranking) makes the same point from
the model side: match the tier and the effort setting to what the task
needs, don't default to the strongest setting because a demo looked good
with it on.

If your product is a thin layer on top of long, high-effort agent runs, a
price war between labs is good news for your customers and close to
neutral for your margin, because your token volume moves with the model's
effort setting, not with the sticker price. If your product is built on
narrow, bounded calls, the same price war is close to pure savings.

## Three questions before you migrate anything

Before switching models, or effort tiers, or labs, chasing a price
announcement, answer three things with your own numbers, not the vendor's:
what effort or thinking setting does this workload run at in production
right now, not in the demo that sold you on it? What was the average token
count per completed task last month, at that setting, not the best case?
And does the new discounted rate apply to the tier you're running, or only
to the base tier the headline is quoting?

A list-price cut is real. It's also the easiest number in the announcement
to calculate, which is why it's the one every headline leads with. The
number that pays for anything is the one on your own invoice, at your own
effort setting, on the workload you run, not the one in the press release.

---
slug: why-a-curated-directory
title: Why we built a curated directory, not another crawler
summary: >-
  Other directories count assets by the hundred thousand. We would rather tell
  you the license is clean and the install command actually runs, even if that
  means a shorter list.
tags: [manifesto, curation, trust]
date: 2026-08-24
reviewBy: 2027-02-24
---

Agentskill.sh lists more than 178,000 skills. ClaudSkills has over 69,000.
skillsdirectory.com has scanned around 97,000. Any of them can show you a
bigger number than ours. None of them can tell you, in ten seconds, whether the
third result on the page actually works.

## What breaks when a directory is this big

Skim any of those catalogs and you will find entries pointing at repos
untouched for two years, forks of forks with no changelog, or a skill whose
linked GitHub page now returns a 404. Nobody removed them because nobody is
checking. The crawler indexed a URL once, and the URL is still sitting there
long after the project behind it died.

A crawler is a pipeline, not a reviewer. It pulls in a README, a star count,
and a license field if one exists, then republishes all of it as if the act of
finding something proves it works. The description under an entry is often
just the first paragraph of the original README, copied at the moment of
indexing and never touched again. If the maintainer rewrites the setup steps
six months later, the directory still shows the old ones. If the project gets
forked five times with cosmetic changes, the catalog lists all five as if they
were five different options, and the star count attached to each one usually
belongs to the original repo, not the fork you are looking at.

None of that shows up until you actually try to use the thing. You clone it,
you run the install command, and only then do you find out the command
references a config file that got renamed two versions ago. Multiply that by
every search you run over a month and the real cost of a big, unreviewed
directory is not the directory itself, it is the hours you spend doing the
verification the directory should have done for you. Size stops helping once
you cannot tell the maintained entries from the abandoned ones, and a catalog
can list six figures of assets and still leave all of that work to you.

## How a listing actually earns a spot

When someone submits an asset, it does not go live because the form was
filled in correctly. The source has to point to a real repository with a
named author, not an anonymous gist or a paste of someone else's code. We
check the license next: only permissive or public licenses make the cut, MIT,
Apache-2.0, CC-BY-4.0, and a short list of others, so you are never one Slack
message to legal away from being able to use something. Then we actually
install it. We run the setup steps exactly as written, in a clean environment,
and see whether the thing does what the description says it does.

Only after all three checks pass does an entry get the "verified" badge, and
even then it carries a last-verified date next to it, so you can tell whether
that check happened last week or six months ago. We hold our own writing to
something close to the same standard. Every article on this site, this one
included, carries an internal review date, and when that date passes we go
back and check whether the piece still matches how the tools actually work
today. A stale sentence in a blog post does less damage than a broken install
command, but the discipline is the same: write it down once, then come back
and check it.

## What we actually check

We keep the list short and verify what actually wastes your time when it is
wrong: the source, the license, and whether the install steps run. We also
note what an asset has actually been tested against, a specific runtime, a
specific model version, a specific OS, because "it worked for me" and "it
will work in your setup" are not the same claim. A skill that only runs
cleanly against one Claude model version is still useful, but only if we say
so instead of letting the badge imply it works everywhere.

## What "verified" does not mean

The badge is not a security audit. It does not mean we read every line of an
asset's source for supply-chain risk, and it is not a continuous check that
reruns itself while the project's dependencies drift. It means one specific
thing happened on one specific date: someone here ran the install command and
it worked. skillsdirectory.com goes further and scans each skill for risk,
assigning trust grades at scale, which is a legitimate approach if you have
the engineering resources to run it across tens of thousands of entries. We
do not, not yet, so we picked the check that catches the most common failure,
an asset that is broken or is not what it claims to be, over trying to catch
every possible one. Being honest about that limit matters more to us than
implying a guarantee we cannot back up.

## The tradeoff, on purpose

The catalog grows slower this way, and we are doing that on purpose. Every
listing takes someone's time: reading the repo, checking the license, running
the install, writing an accurate note about what got tested. That ceiling is
deliberate. We would rather add entries a few at a time and stand behind every
one of them than publish in bulk and let the badge become decoration. A
hundred entries you can trust beat a hundred thousand you have to audit
yourself. If the badge is there, someone here actually installed the thing and
it did what the README said, and if we have not gotten to an asset yet, it
simply is not listed rather than listed with an empty promise attached.

## Who this is for

Developers and builders who want a config they can copy and trust, not a
search result they have to verify themselves. That includes someone
evaluating a Claude skill for a client project who cannot afford to find out
the license is GPL after the fact, and someone on a small team who wants one
place to check before installing an MCP server rather than reading three
GitHub issues to guess if it still works. If you would rather scroll a
hundred thousand entries and filter them by hand, the big crawlers already do
that well, and we are not trying to replace them. We are building the smaller,
slower list for people who would rather trust ten results than sort through a
thousand.

## Where this goes

We are starting with Claude Skills and MCP servers, then adding Copilot
agents, Cursor rules, and workflows. Next to the raw listings we are building
curated collections around real problems, "best MCP servers for Postgres,"
"Copilot agents for testing," the kind of page a crawler cannot produce
because it takes someone who actually compared the options side by side and
has an opinion about which one to reach for first. Next to the directory we
also write short guides on how to use these tools, because knowing a skill
exists is only half the job, and the other half, actually wiring it into your
workflow, is where most people get stuck.

If you have installed something from a big, unreviewed list and spent an
afternoon debugging why the setup steps did not match what actually shipped,
that afternoon is the entire reason this directory grows slowly. We would
rather you spend that time shipping.

---
slug: why-a-curated-directory
title: Why we built a curated directory, not another crawler
summary: >-
  Other directories count assets by the hundred thousand. We would rather tell
  you the license is clean and the install command actually runs, even if that
  means a shorter list.
tags: [manifesto, curation, trust]
date: 2026-08-24
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

You still have to open each result, read it, and guess whether it works. Size
stops helping once you cannot tell the maintained entries from the abandoned
ones, and a catalog can list six figures of assets and still leave all of that
work to you.

## What we actually check

We keep the list short and verify what actually wastes your time when it is
wrong: the source, the license, and whether the install steps run. Every asset
needs a real source and a named author before it goes in the catalog. We only
list permissive or public licenses, MIT, Apache-2.0, CC-BY-4.0, and a handful of
others, so you are not one Slack message to legal away from being able to use
something. An asset only gets our "verified" badge once we have actually run
its install command and it worked, with a last-verified date next to it so you
can tell whether that check is from last week or from six months ago. We also
note what an asset has actually been tested against, because "it worked for
me" and "it will work in your setup" are not the same claim.

If we have not tested something, it does not get the badge. That is the whole
mechanism, and it is deliberately less than a full security scan.
skillsdirectory.com goes further: it scans each skill for risk and assigns
trust grades, which is a legitimate approach if you have the resources to run
it at scale. We do not, not yet, so we picked the check that catches the most
common failure, an asset that is broken or is not what it claims to be, over
trying to catch every possible one.

## The tradeoff, on purpose

The catalog grows slower this way. We are doing that on purpose. A hundred
entries you can trust beat a hundred thousand you have to audit yourself. If
the badge is there, someone here actually installed the thing and it did what
the README said.

## Who this is for

Developers and builders who want a config they can copy and trust, not a
search result they have to verify themselves. If you would rather scroll a
hundred thousand entries and filter them by hand, the big crawlers already do
that well, and we are not trying to replace them.

## Where this goes

We are starting with Claude Skills and MCP servers, then adding Copilot agents,
Cursor rules, and workflows. Next to the raw listings we are building curated
collections around real problems, "best MCP servers for Postgres," "Copilot
agents for testing," the kind of page a crawler cannot produce because it
takes someone who actually compared the options. Next to the directory we also
write short guides on how to use these tools, because knowing a skill exists is
only half the job.

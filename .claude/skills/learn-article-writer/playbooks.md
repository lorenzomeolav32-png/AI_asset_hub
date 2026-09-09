# Playbooks: dynamic instructions per article kind

Read only the section matching the kind you're writing or reviewing. Each
section has: trigger phrasing, the interview questions to ask before drafting,
the structure skeleton, a worked micro-example, and a kind-specific review
checklist.

---

## Tutorial

**Trigger phrasing:** "how to install/set up/build/configure/run X", "how do I
get X working", "step-by-step guide to X".

### Ask before drafting (skip only what you already know for certain)

1. What exact tool, client, or platform is this for? Are there
   platform-specific variants (macOS/Windows/Linux, different clients/apps)
   that change the steps?
2. What has to be true before starting — accounts, installed software,
   minimum versions, API keys?
3. What are the exact steps, in order? Have they actually been run, or do they
   need verifying against the official docs/source first?
4. What's the single most common way this goes wrong, and how do you notice
   and fix it?
5. For each meaningful step, is there something the reader can check (a
   command output, a file that should exist, something visible in the UI) to
   confirm it worked before moving on?

### Structure skeleton

1. **Opening (no heading):** state plainly what the reader ends up with. If
   the exact steps vary by platform/client, say that up front instead of
   letting the reader discover it mid-guide.
2. **`## Before you start` / `## What you'll need`:** prerequisites, as a
   short list only if there are 3+ discrete items.
3. **One `##` per step or per short group of steps.** Two acceptable patterns,
   pick based on step count:
   - 3-4 short, named actions → name each heading after the action
     ("Put the folder in your skills directory", "Check that it loaded").
   - 4+ sequential, riskier steps → number them ("Step 1: get a DeepSeek API
     key", "Step 2: install the harness") and add a bolded
     **Checkpoint:** line after steps where something could silently fail.
4. **Closing `## If something goes wrong` (optional but recommended):** name
   the 2-3 most likely failure causes and the fix, don't just say "check the
   logs."

### Worked micro-example (structure only, paraphrased from a real article)

> The exact steps depend on which client you use, but the shape is the same
> everywhere...
>
> ## Before you start
> Have the folder ready. It should contain a `SKILL.md` and any extra files it
> references...
>
> ## Put the folder in your skills directory
> Most clients read from a set location...
>
> ## Check that it loaded
> Open your client and look for it in the list...
>
> ## If something goes wrong
> Check three things: the folder location, the frontmatter, and any file
> paths it points to.

### Review checklist (tutorial)

- Does every step reflect the current, real behavior of the tool (not a
  guessed or outdated flow)?
- Is there a prerequisite the article assumes but never states?
- Does at least one step have a concrete way to verify it worked?
- Is the platform/client variance called out where it matters, instead of
  presented as one universal flow that isn't?
- Is there a troubleshooting section, or is the reader left stuck on failure?

---

## Explainer

**Trigger phrasing:** "what is X", "explain X", "how does X work", "X
explained".

### Ask before drafting

1. In one sentence, what is X, precisely? (Not what it's used for — what it
   *is*.)
2. What's it most commonly confused with, and why does that confusion happen?
3. What are the 2-4 pieces it's actually made of, or the mechanism by which it
   works?
4. When does it genuinely help? When is it overkill and a plainer approach is
   faster?

### Structure skeleton

1. **Opening (no heading):** the one-sentence definition, immediately. No
   throat-clearing before it.
2. **`## What a/an X actually is`:** the mechanics — what it's made of, in
   concrete terms (a file, a protocol, a process), not marketing language.
3. **`## How it works` / `## How Claude/the system decides to use one`:**
   behavior — what triggers it, what it depends on.
4. **`## What goes inside`** (only if relevant): the components, briefly.
5. **`## When it helps`:** honest practical judgment, including the case where
   the simpler alternative is still better. Real articles end here, no
   separate "conclusion."

### Worked micro-example (paraphrased)

> A Claude Skill is a small folder of instructions you give to Claude so it
> acts like it already knows your task...
>
> ## What a skill actually is
> At its simplest, a skill is a file named `SKILL.md`...
>
> ## How Claude decides to use one
> Claude looks at the description you wrote...
>
> ## When a skill helps
> Skills pay off when you do the same kind of work often... For a one-off
> question, a plain prompt is still faster.

### Review checklist (explainer)

- Does the first sentence actually define the thing, or does it dodge into
  context/history first?
- Is the "what it's confused with" angle addressed, even briefly?
- Is there an honest "when this is overkill" note, or does it read like an ad?
- Any claim about internals that hasn't been checked against real docs/code?

---

## Comparison

**Trigger phrasing:** "X vs Y", "X or Y", "difference between X and Y".

### Ask before drafting

1. What are the two (occasionally three) things being compared, precisely?
2. What's the one-sentence distinction between them ("one is know-how, the
   other is access")?
3. What is each one actually for — a concrete task each one clearly wins at?
4. Do they compete, or do they compose (used together in practice)? Most "vs"
   pairs in this space compose more than they compete.
5. Is there a clean, 3+ dimension axis for a table (setup cost, speed, when to
   use), or is the real comparison only 2-3 points that read better as prose?

### Structure skeleton

1. **Opening (no heading):** why people mix these two up.
2. **`## The short version`:** the one-sentence distinction, stated plainly,
   before any detail.
3. **One `##` per side:** "What X covers" / "What Y covers" — concrete, with an
   example task each is good for.
4. **`## Using both` / `## Which one to use`:** practical guidance. Add a
   comparison table only if there are 3+ real dimensions; otherwise close in
   prose. Never invent a winner — if the honest answer is "it depends" or "use
   both," say that.

### Worked micro-example (paraphrased)

> Skills and MCP servers get mixed up because both make an assistant more
> capable. They solve different problems...
>
> ## The short version
> A skill teaches the model how to do something. An MCP server gives the model
> a way to reach something...
>
> ## What a skill covers
> ...
> ## What an MCP server covers
> ...
> ## Using both
> The two work well side by side...

### Review checklist (comparison)

- Is the one-sentence distinction stated early, or buried after paragraphs of
  background?
- Does the article name whether the two things compete or compose?
- Is there a forced "and the winner is" framing where the honest answer is
  "depends on the task"?
- If a table is used, does every row reflect a real, checkable difference (not
  padding to hit a row count)?

---

## Any kind: final pre-submit pass

1. Read the whole `humanizer` skill and apply it (not a grep).
2. Confirm frontmatter matches `reference.md` exactly, `kind` is one of the
   three valid values, `slug` matches the filename.
3. Run `npx velite` from `ai-assets-directory` and report the result.
4. Re-read the opening two sentences alone — if they don't deliver real
   information, rewrite them.

---
slug: brag
type: claude-skill
title: /brag
fileName: brag.skill
summary: >-
  Turns the project you just built into a short, shareable launch video with
  one command, reading your code directly instead of asking for a live URL.
category: marketing
tags: [video, launch, marketing, claude-code, hyperframes]
tools: [claude-code, codex, opencode, cursor, copilot, gemini-cli]
license: MIT
author: Shunit Haviv Hakimi
source: https://github.com/latent-spaces/brag
stars: 6700
verified: true
install: |
  /plugin marketplace add latent-spaces/brag
  /plugin install brag@brag
installLang: bash
testimonials: []
---

## Overview

`/brag` is a Claude Code skill that turns a project you just built into a short, polished launch video, complete with music, motion, and share copy, powered by Hyperframes. It reads your project code directly, so there is no live URL or screenshot needed, and it also works with Codex CLI, opencode, Google Antigravity, and any agent that supports custom instructions.

## How it works

1. It reads the current project code to understand what the app actually does.
2. It plans a short, specific angle for the video and writes a beat by beat storyboard, including scenes, timing, transitions, and sound cues.
3. It hands a focused composition brief to Hyperframes, which builds, times, and renders the video.
4. It validates the render, picks the best poster frame, and writes a `brag-output/` folder with the plan, the composition, the rendered `brag.mp4`, and share copy ready to post.

## Examples

```text
let's /brag
```

```text
/brag --tone "fake Series A launch from 2016"
```

```text
/brag --voice
```

Voiceover is off by default. Passing `--voice` turns on narration through Kokoro via Hyperframes.

## Installation

You need an agent that supports Agent Skills (Claude Code, opencode, Codex CLI, or similar), Node.js 22 or newer, FFmpeg on your PATH, and the Hyperframes CLI.

1. In Claude Code, install the plugin: `/plugin marketplace add latent-spaces/brag` then `/plugin install brag@brag`.
2. For any other supported agent, run `npx skills add https://github.com/latent-spaces/brag --skill brag` instead.
3. Check that Hyperframes is ready with `npx hyperframes doctor`.
4. From inside any project, ask your agent `let's /brag`.
5. Verify it worked by checking the new `brag-output/` folder for `brag-plan.md`, the composition files, and the rendered `brag.mp4`.

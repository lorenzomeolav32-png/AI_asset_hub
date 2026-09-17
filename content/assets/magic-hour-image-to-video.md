---
slug: magic-hour-image-to-video
type: claude-skill
title: Magic Hour Image to Video
fileName: magic-hour-image-to-video.skill
summary: >-
  Guides an agent through turning a photo into a short Magic Hour video,
  fixing the still frame first so identity, product and text stay intact
  before it spends credits on motion.
category: media-generation
tags: [image-to-video, ai-video, mcp, magic-hour, requires-paid-api]
tools: [claude-code, codex, mcp]
license: MIT
author: magichourhq
source: https://github.com/magichourhq/skills/tree/main/skills/magic-hour-image-to-video
verified: false
install: |
  npx skills add magichourhq/skills --skill magic-hour-image-to-video
installLang: bash
testimonials: []
---

## Overview

**Magic Hour Image to Video** turns a photo into a short animated clip through
Magic Hour's creation MCP or API. Instead of firing straight at the video
model, it treats the job as two steps: get the still frame right, then direct
motion on top of it. That order matters because a bad start frame (wrong
crop, warped face, altered logo) wastes a paid video generation trying to fix
what was already broken in the image.

## How it works

1. **Define the shot.** The agent extracts aspect ratio, subject, one primary
   action, one camera move, and the details that must stay fixed (identity,
   product geometry, logos, text, clothing).
2. **Build or approve the start frame.** If no usable image exists, it
   generates one; if an image needs a fix (composition, background, cleanup)
   it edits it first; only a frame that already satisfies the shot skips this
   step. The agent reviews the still before paying for motion.
3. **Animate the approved frame.** It writes a motion prompt around what
   changes over time (subject motion, camera motion, environmental motion)
   and what must stay fixed, then submits the video job once and waits for
   it to complete.
4. **Inspect and deliver.** It checks the first frame, midpoint, and last
   frame against the approved still, confirms identity/logo/text held up and
   motion matches the request, then hands back the finished file with the
   image and video project IDs.

## Examples

A typical brief handed to the agent:

> Put me in a midnight train station with golden fish swimming through the
> air. Keep my face and clothes. Fix the still with AI Image Editor if
> needed, inspect it, then animate my reaction and the fish. Deliver a
> finished vertical video within my budget.

The agent resolves this into an image-edit call (if needed), a
`wait_for_image_project` check, an `image_to_video_create_video` call with an
explicit motion prompt, a `wait_for_video_project` check, and a final visual
QA pass before returning the video link.

## Part of a larger collection

This skill lives inside `magichourhq/skills`, a monorepo of about 18 Magic
Hour skills covering the rest of the image/video/audio workflow: face swap,
text-to-video, image editing, talking/lip-sync video, character replace,
video editing, music video, body swap, character consistency, thumbnails,
product visuals, campaign kits, brand kits, marketplace images, and explainer
video. They all share the same Magic Hour MCP connection, so installing one
doesn't require installing the rest. Browse the full list at
[github.com/magichourhq/skills](https://github.com/magichourhq/skills).

## Installation

You need a Magic Hour account and API key, plus an agent client that supports
skills (Claude Code, Codex, or another `skills.sh`-compatible client).

1. Create a Magic Hour account and API key at magichour.ai if you don't have
   one already.
2. From your project root, run `npx skills add magichourhq/skills --skill
   magic-hour-image-to-video` to install just this skill.
3. Connect Magic Hour's creation MCP at `https://mcp.magichour.ai/` in your
   agent client, using your API key.
4. Verify it worked by asking your agent to check the connection (an
   authenticated account read) before generating anything.
5. Attach a photo and describe the scene/motion you want; the skill will
   handle image-fix, animation, and inspection steps automatically, spending
   credits according to your stated budget.

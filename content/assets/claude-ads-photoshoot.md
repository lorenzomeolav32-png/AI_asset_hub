---
slug: claude-ads-photoshoot
type: claude-skill
title: Product Photography Variants
fileName: ads-photoshoot.skill
summary: >-
  Generates rights-cleared paid-ad product photography variants — studio,
  contextual, ingredient or lifestyle shots — from an authorized source image
  and brand profile, with mandatory human review.
category: marketing
tags: [claude-ads, product-photography, image-generation, ecommerce]
tools: [claude, claude-code, codex, gemini, cursor, windsurf, goose]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-ads/tree/main/skills/ads-photoshoot
stars: 8900
starsNote: whole AgriciDaniel/claude-ads repo
verified: false
install: |
  # Ships inside the Claude Ads plugin — installs together
  /plugin marketplace add AgriciDaniel/claude-ads
  /plugin install claude-ads@ai-marketing-hub-claude-ads
installLang: bash
---

## Overview

**Product Photography Variants** is a creative-production skill in the
[Claude Ads](/claude-skills/claude-ads) suite for generating e-commerce-ready product
photography from a single authorized source image.

## What it covers
- Confirms rights to the product image before generating any variant.
- Preserves product geometry, packaging, logos, labels, color and material unless the operator explicitly approves a change.
- Defines distinct production hypotheses (studio, contextual use, ingredient story, scale/detail, lifestyle) rather than one generic pass.
- Records source hashes, prompt version, provider/model, cost and output hashes for every generated asset.
- Requires mandatory human review — never creates deceptive before/after evidence or unauthorized endorsements.

## Part of Claude Ads
This skill is dispatched automatically by the main `ads` conductor for `/ads photoshoot`
requests — see the full [Claude Ads](/claude-skills/claude-ads) entry for installation.

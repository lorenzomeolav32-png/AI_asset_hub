---
slug: claude-seo-ecommerce
type: claude-skill
title: E-commerce SEO & Marketplace Intelligence
fileName: seo-ecommerce.skill
summary: >-
  E-commerce SEO and marketplace intelligence, including schema validation
  for product and return-policy data.
category: marketing
tags: [claude-seo, ecommerce, product-schema]
tools: [claude, claude-code]
license: MIT
author: agricidaniel
source: https://github.com/AgriciDaniel/claude-seo/tree/main/skills/seo-ecommerce
stars: 16500
starsNote: whole AgriciDaniel/claude-seo repo
verified: false
install: |
  # Ships inside the Claude SEO plugin, installs together
  /plugin marketplace add AgriciDaniel/claude-seo
  /plugin install claude-seo@agricidaniel-claude-seo
installLang: bash
---

## Overview

**E-commerce SEO & Marketplace Intelligence** runs `/seo ecommerce <url>` in
the [Claude SEO](/claude-skills/claude-seo) suite, validating e-commerce
schema (`hasMerchantReturnPolicy`, `shippingDetails`, `MemberProgram`, EU
`energyEfficiencyClass`, `ProductGroup` variants). Originally contributed by
Matej Marjanovic, who also added DataForSEO cost guardrails.

## Part of Claude SEO

Part of the [Claude SEO](/claude-skills/claude-seo) plugin.

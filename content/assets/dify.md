---
slug: dify
type: ai-workflow
title: Dify
fileName: dify.workflow
summary: >-
  Open-source LLM app development platform that combines a visual AI workflow
  canvas, RAG pipelines, agent tooling and model management in one workspace,
  for teams shipping production-ready AI apps.
category: data-ai
tags: [llm-app-platform, workflow-automation, rag, agents, visual-builder, llmops]
license: Apache-2.0 (modified)
author: LangGenius, Inc.
source: https://github.com/langgenius/dify
stars: 155000
verified: true
install: |
  git clone https://github.com/langgenius/dify.git --depth 1
  cd dify/docker
  cp .env.example .env
  docker compose up -d
  # Open http://localhost/install
installLang: bash
---

## Overview

**Dify** is an open-source platform for building LLM applications: it
combines a visual **AI workflow** canvas, a **RAG pipeline**, **agent**
capabilities (function calling or ReAct, with 50+ built-in tools), a **Prompt
IDE**, model management across hundreds of providers, and **LLMOps**
observability (via Opik, Langfuse or Arize Phoenix) in one workspace.

## How it works

1. Design a multi-step AI workflow on the visual canvas (prompt chains,
   conditionals, tool calls, retrieval steps).
2. Wire in a RAG pipeline: ingest PDFs/PPTs/docs, chunk and index them, and
   retrieve context at query time.
3. Attach agent capabilities so the app can call tools (Google Search,
   DALL·E, Stable Diffusion, WolframAlpha, or your own) using function
   calling or ReAct.
4. Every app is automatically backed by an API, so it can be embedded in
   your own product (Backend-as-a-Service).
5. Monitor production traffic and iterate on prompts/datasets using the
   built-in LLMOps dashboard.

## Licensing note

Dify is **not plain Apache-2.0** — it ships under the **Dify Open Source
License**, an Apache-2.0 base with two extra conditions: (1) you may **not
operate a multi-tenant SaaS** using the source code without a commercial
license from LangGenius (one tenant = one workspace), and (2) you may not
remove or modify the LOGO/copyright notices in the frontend (`web/`).
Self-hosting Dify for your own business, including commercial use, is
explicitly allowed. Enterprise features have their own separate commercial
license.

## Examples

- A RAG chatbot over internal company documents with citation and
  observability built in.
- A multi-step customer-support agent that calls internal APIs as tools and
  escalates to a human when confidence is low.
- Prototyping a prompt in the Prompt IDE, then promoting the same app to
  production via the auto-generated API.

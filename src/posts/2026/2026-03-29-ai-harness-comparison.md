---
title: 'Comparing AI Harnesses: OpenCode, Ollama, LM Studio, Claude Code, Open WebUI, and VS Code'
description: >-
  I've been testing the major AI coding tools. Here's what each one actually does and which ones I use.
tags:
  - ai
  - tools
date: '2026-03-29'
---

Every week there's a new AI coding tool. I've been testing the ones that actually matter: **OpenCode**, **Ollama**, **LM Studio**, **Claude Code**, **Open WebUI**, and **VS Code with Copilot**.

They all take different approaches and honestly some of them aren't even the same kind of thing. Let me explain.

## The quick version

| | Open Source | Runs Offline | Has Agent Tools | Cost |
|---|---|---|---|---|
| **[OpenCode](https://opencode.ai/)** | Yes (MIT) | Yes | Yes, 15 built-in | Free |
| **[Ollama](https://ollama.com/)** | Yes (MIT) | Yes | No | Free |
| **[LM Studio](https://lmstudio.com/)** | No | Yes | No | Freemium |
| **[Claude Code](https://claude.com/product/claude-code)** | No | No | Yes | $20/mo |
| **[Open WebUI](https://docs.openwebui.com/)** | Yes (MIT) | Yes | Via Python functions | Free |
| **[VS Code (Copilot)](http://github.com/features/copilot/plans)** | No | No | Limited | $0-40/mo |

## OpenCode

This is what I use most. It's a terminal-based coding agent with 15 built-in tools — bash, file read/write/edit, grep, glob, web fetch, web search, task tracking, the works. It has MCP support (local, remote, OAuth), a skills system using `SKILL.md` files, and connects to 75+ model providers or local models through Ollama/LM Studio.

This also has a desktop and web interface, but I prefer the terminal. It's the most powerful and flexible coding agent I've found.

MIT licensed. No vendor lock-in.

## Ollama

Ollama is not a harness. It's a model runner. It downloads models, runs them locally with GPU acceleration, and exposes an OpenAI-compatible API. That's it. No file operations, no code editing, no tools, no agent anything.

But it's the engine underneath a lot of other tools. OpenCode uses it. Open WebUI uses it. Think of it as the foundation, not the car.

## LM Studio

Similar to Ollama but with a nice desktop GUI and a killer feature: headless mode. You can deploy `llmster` on a server and use it as a model inference backend without any GUI. It has TypeScript and Python SDKs and OpenAI-compatible APIs.

No built-in agent tools though. It's for running models, not for coding with them.

## Claude Code

Anthropic's official coding agent. The most polished experience I've used. Terminal CLI, VS Code extension, JetBrains plugin, desktop app, web interface, even an iOS app. Full set of coding tools — bash, file operations, git integration, web search, multi-agent support.

Uses `CLAUDE.md` files for skills and has auto-memory that persists across sessions.

The catch: $20/month, Claude models only, no local models, cloud required.

## Open WebUI

A self-hosted web chat interface. Not really a coding agent — it's a general purpose AI interface. Connects to Ollama, OpenAI, Anthropic, whatever. Has RAG, image generation, voice I/O. You can write Python functions that become tools, and the community shares them.

Good if you want a centralized AI chat hub for a team. Not built for coding workflows.

## VS Code with Copilot

The IDE-native approach. Inline completions, chat, terminal integration, LSP integration (best in class). Has MCP support with sandboxing, which is unique — you can restrict filesystem and network access for MCP servers.

Less powerful than a dedicated agent but it's right there in your editor. Skills via `.prompt.md` files.

## What I actually use

I run LM Studio in headless mode for local model inference, OpenCode as my primary coding agent, and Claude Code when I need to work from my phone or want the polished multi-surface experience.

Most of these work together. That's the point — pick the ones that fit how you work.

## Detailed comparison

If you want the full feature-by-feature breakdown, here it is.

### Interface types

| | OpenCode | Ollama | LM Studio | Claude Code | Open WebUI | VS Code |
|---|---|---|---|---|---|---|
| **Desktop App** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **CLI / TUI** | ✅ | ✅ | ✅ (`lms`) | ✅ | ❌ | ❌ |
| **IDE Extension** | ✅ VS Code | ❌ | ❌ | ✅ VS Code, JetBrains | ❌ | ✅ Native |
| **Web Interface** | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| **Terminal** | ✅ | ✅ | ✅ | ✅ | ❌ | ⚠️ Integrated |

### Core capabilities

| | OpenCode | Ollama | LM Studio | Claude Code | Open WebUI | VS Code |
|---|---|---|---|---|---|---|
| **Tools Support** | ✅ Native | ❌ | ⚠️ Via MCP | ✅ Native | ✅ Python Functions | ✅ Native |
| **Skills Support** | ✅ (`SKILL.md`) | ❌ | ❌ | ✅ (`CLAUDE.md`) | ❌ | ✅ (Prompt Files) |
| **MCP Servers** | ✅ Local + Remote + OAuth | ⚠️ API only | ✅ Via API | ✅ Full support | ✅ Supported | ✅ With sandboxing |
| **LSP Integration** | ✅ Experimental | ❌ | ❌ | ❌ | ❌ | ✅ Native |
| **Git Integration** | ⚠️ Via bash | ❌ | ❌ | ✅ Native | ❌ | ✅ Native |

### Built-in tools

| | OpenCode | Ollama | LM Studio | Claude Code | Open WebUI | VS Code |
|---|---|---|---|---|---|---|
| **Shell execution** | ✅ | ❌ | ❌ | ✅ | ⚠️ Via functions | ⚠️ Via extensions |
| **File read** | ✅ | ❌ | ❌ | ✅ | ❌ | ⚠️ Via context |
| **File edit/write** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Grep search** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Glob file finding** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Web search** | ✅ (Exa AI) | ❌ | ❌ | ✅ | ⚠️ Via tools | ⚠️ Via extensions |
| **Web fetch** | ✅ | ❌ | ❌ | ✅ | ⚠️ Via tools | ❌ |
| **Task tracking** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Multi-agent** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |

### Model support

| | OpenCode | Ollama | LM Studio | Claude Code | Open WebUI | VS Code |
|---|---|---|---|---|---|---|
| **Local Models** | ✅ Via Ollama/LM Studio | ✅ Native | ✅ Native | ❌ | ✅ Via Ollama | ⚠️ Limited |
| **Cloud APIs** | ✅ 75+ providers | ⚠️ Via proxy | ✅ | ✅ Claude only | ✅ Multiple | ✅ GitHub/OpenAI |
| **Bring Your Own Key** | ✅ | ✅ | ✅ | ❌ | ✅ | ⚠️ Limited |
| **Model Management** | ⚠️ Via integration | ✅ Excellent | ✅ Excellent | ❌ | ⚠️ Via Ollama | ❌ |

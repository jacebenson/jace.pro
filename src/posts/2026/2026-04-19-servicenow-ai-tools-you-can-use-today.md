---
title: 'ServiceNow AI Tools You Can Use Today'
description: >-
  MCP servers, CLIs, and build tools for working with ServiceNow using AI right now, no new SKU required.
tags:
  - servicenow
date: '2026-04-19'
---

ServiceNow just made a [big announcement about AI in every SKU](/blog/servicenows-new-ai-pricing-tiers/) but you can't actually use most of it yet. No GenAI on PDIs, no clear tier limits, and current customers won't see changes until renewal.

So what can you use right now? Here's everything I know of.

## Data exploration

### MCP Servers

MCP servers let AI tools like Claude, Cursor, or Opencode talk to your ServiceNow instance directly.

- **ServiceNow's official MCP** — [docs](https://www.servicenow.com/docs/r/intelligent-experiences/create-mcp-server.html). Allegedly requires Prime licensing.
- **Echelon AI's** — [github](https://github.com/echelon-ai-labs/servicenow-mcp). Python, basic auth, OAuth, or API key.
- **Michael Buckner's** — [github](https://github.com/michaelbuckner/servicenow-mcp). Python, basic auth only.
- **Nanda's** — [github](https://github.com/sonisoft-cnanda/now-sdk-ext-mcp). Uses `now-sdk` auth, requires Node.js.
- **Community tutorial** — [How to create your own ServiceNow MCP server](https://www.servicenow.com/community/developer-articles/how-to-create-your-own-servicenow-mcp-server/ta-p/3298144). More of a how-to guide, Python.

### CLIs

- **jsn** — [jsn.jace.pro](https://jsn.jace.pro). Downloaded binary, basic auth, OAuth, or cookie auth.

## Build tools

These create and deploy stuff to update sets and scopes on your instance.

- **now-sdk** — [github](https://github.com/ServiceNow/sdk). Node.js, basic auth or OAuth. This is ServiceNow's official SDK and where their [AI skills](https://github.com/ServiceNow/sdk/tree/master/skills) live.
- **Nanda's now-sdk extension** — [npm](https://www.npmjs.com/package/@sonisoft/now-sdk-ext-cli). Requires now-sdk.
- **jsn** — [jsn.jace.pro](https://jsn.jace.pro). Downloaded binary, basic auth, OAuth, or cookie auth.

## ServiceNow's AI skills

Part of the [April 2026 announcement](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-moves-beyond-the-sidecar-AI-era-giving-customers-a-complete-AI-native-experience-across-all-products-and-packages/default.aspx), ServiceNow released [agent skills](https://agentskills.io/home) built into the `now-sdk`. Two so far:

- [now-sdk-setup](https://github.com/ServiceNow/sdk/blob/master/skills/now-sdk-setup/SKILL.md)
- [now-sdk-explain](https://github.com/ServiceNow/sdk/blob/master/skills/now-sdk-explain/SKILL.md)

The real thing here isn't the skills themselves. It's that ServiceNow is officially blessing external AI tools for building on the platform. That's the door opening.

None of this requires the new pricing tiers. You just need an instance and credentials.

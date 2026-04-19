---
title: 'ServiceNow AI Tools You Can Use Today'
description: >-
  MCP servers, CLIs, and build tools for working with ServiceNow using AI right now, no new SKU required.
tags:
  - servicenow
date: '2026-04-19'
---

ServiceNow just made a [big announcement about AI in every SKU](/blog/servicenows-new-ai-pricing-tiers/) but you can't actually use most of it yet. No GenAI on PDIs, no clear tier limits, and current customers won't see changes until renewal.

So what can you use right now? Here's everything I know of.  A [pretty post on the difffernces here is laid out nicely by Lukasz Szumilas here](https://www.linkedin.com/feed/update/urn:li:activity:7450130374191484928?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7450130374191484928%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29).

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

Related to this, some of the soruces


[Edwin Coronado posted on LinkedIn about it](https://www.linkedin.com/posts/edwincoronado_new-servicenow-sdk-ai-skills-servicenow-activity-7450663839253303297-PsUC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAGfKkYB3XFd0Ybegy4h2swmWmxgXj4HMN0). Those skills are [part of the `now-sdk` tooling](https://github.com/ServiceNow/sdk/discussions/47). There are [two skills](https://github.com/ServiceNow/sdk/tree/master/skills) right now:
- [now-sdk-setup](https://github.com/ServiceNow/sdk/blob/master/skills/now-sdk-setup/SKILL.md)
- [now-sdk-explain](https://github.com/ServiceNow/sdk/blob/master/skills/now-sdk-explain/SKILL.md)

Not that crazy on its own, but it is ServiceNow giving you permission to use external AI tools to build on the platform. Claude Code, Opencode, Codex, whatever. That part is genuinely useful.
---
title: "ServiceNow's New AI Pricing Tiers"
description: >-
  ServiceNow announced AI-native experiences across all SKUs in April 2026. Here's what I found when I tried to figure out what that actually means.
tags:
  - servicenow
date: '2026-04-19'
---

ServiceNow has been making some big waves on their SKUs last week to "include AI" with all of them, allegedly.

I take this all with a grain of salt until I can actually try it.

## The announcement

ServiceNow announced [giving customers AI-native experiences across all products and packages](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-moves-beyond-the-sidecar-AI-era-giving-customers-a-complete-AI-native-experience-across-all-products-and-packages/default.aspx) on April 9th, 2026.

I thought this meant they were going to include Now Assist in all their SKUs.  I got this pricing thing confused with them releasing [skills](https://agentskills.io/home) for the `now-sdk`. You can read more about that on the [AI tools you can use today](/blog/servicenow-ai-tools-you-can-use-today/) post.

Let me frame up the two posts that most impacted my thinking on this.

First, well there's my opinion that if it doesn't make ServiceNow Money, Reduce their costs or make them more sticky, they won't do it.  So with that, this will probably be a increase in price for customers weather they want it or not.

Then consider the leading voice from UpperEdge who helps custoemr negotate with ServiceNow, Adam Mansfield.  He posted a [short video (5 minutes) on AI enabled Servicenow Products here](https://www.linkedin.com/feed/update/urn:li:activity:7450519796988866560?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7450519796988866560%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29).  My notes from his video are;
- Innovation is good, but do customers want all of this?
- What are going to be the cost implications with the product repackaging?
- At the end of the day do you want or need any of this and if you don't what does that mean?  
- Still Hybrid + Consumpation based metering.

Then there's Michel Regueiro, who'se been  been around ServiceNow as long as I have.  He founded iconica a Servicenow consultancy that helps get stuff done quick.  He [posted this is Servicenow's correction for 2 years of making a mistake of it here](https://www.linkedin.com/feed/update/urn:li:activity:7450495195336523778?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7450495195336523778%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29).  
My notes from his post are;
- Ai being embedded across all tiers with Moveworks is a good thing.  No extra procurement, no seperate sku.
- They should have done this 2 years ago when they launched Now Assist as an addon.

## The pricing

They also changed their pricing model to include AI in the SKUs. Here's one of their [LinkedIn videos about it](https://www.linkedin.com/posts/the-ai-first-era-begins-for-partners-ugcPost-7449502470051024896-Lrae?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAGfKkYB3XFd0Ybegy4h2swmWmxgXj4HMN0). Three tiers: Foundation, Advanced, and Prime.

The [VP of Sales at Windward posted this image on LinkedIn](https://www.linkedin.com/posts/dylanlevy_servicenow-ai-windward-share-7449805165550989312-XcDg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAGfKkYB3XFd0Ybegy4h2swmWmxgXj4HMN0). ![Image of the new pricing model](/assets/images/sn-ai-prime-sku.jpg)

I went looking for this on the [entitlements pages](https://www.servicenow.com/products/entitlements.html) and [entitlements packages pages](https://www.servicenow.com/products/entitlements-packages.html) but they're out of date. The Now Assist overview was last updated March 12, 2026. So they haven't caught up yet.

## What's actually in each tier

The best official source I found is the [ITSM pricing page](https://www.servicenow.com/products/itsm/pricing.html). Here's what each tier looks like for ITSM specifically.

**Foundation** — AI helps the team work. Summarization, pattern recognition, categorization, task-based assistance. You get Incident, Request, Asset Management, CMDB, Virtual Agent, Now Assist Foundation, Moveworks, Predictive Intelligence, App Engine Starter (10 tables).

**Advanced** — AI completes part of the work. Everything in Foundation plus Major Incident Management, On-Call, Change Management, Problem Management, AI Voice Agents, Platform Analytics Advanced, Process Mining (10K records/year), Now Assist Advanced, Moveworks Advanced, App Engine Starter (25 tables).

**Prime** — AI works end to end. Everything above plus **L1 Service Desk AI Specialist**, **AI Agents for ITSM**, **AI Agent for DEX**, DevOps Change Velocity, Digital Product Release, Process Mining (15K records/year), Now Assist Prime, Moveworks Prime, App Engine Starter (50 tables).

All three tiers include AI Control Tower, Workflow Data Fabric, and Data Fabric Credits. The [Data Fabric Credit overview PDF](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/data-fabric-credit-overview.pdf) spells out credit consumption but none of it seems AI-related except "AI Data Explorer" which is unhelpful.

## My take

The pricing model is not clear, which is normal. I'm going with the assumption that nothing has changed in practice. ServiceNow hasn't put GenAI on PDIs so we can't play with it. They haven't said what the actual limits are for Foundation, Advanced, or Prime. Even if they did, current customers won't see changes until renewal. For now this is a marketing announcement.

I know, wind out of sails. But if you want things you can actually use today, I wrote up [the AI tools that work right now](/blog/servicenow-ai-tools-you-can-use-today/).

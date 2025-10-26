---
title: The ideal customer for ServiceNow has changed, hint, it is not you, probably
description: >-
  Lately I've been thinking a lot about the value tools add for the price they
  cost.
date: '2023-10-26'
tags:
  - servicenow
  - business-rules
  - client-scripts
  - ui-actions
  - workflow
  - api
  - reporting
  - html
  - database
  - security
redirectFrom:
  - /the-original-value-prop-of-servicenow/
---

Lately I've been thinking a lot about the value tools add for the price they cost.  

## Value props everywhere 

We've all seen fantastic products in our day. Look at Netflix back when they started. Now look how they gave folks who wanted alternatives to Cable. Netflix's value prop was simple pricing for a clear outcome, movies every month by DVD. Next, let's consider one more, Amazon. They have always been selling books.  They made it the easiest to buy from them.  Let's turn that perspective to ServiceNow.

## ServiceNow: A Game-Changer

When ServiceNow burst onto the scene, it was a total game-changer for the realm of IT services. Back then, other tools like HP Service Desk and TouchPaper were a headache. Upgrades ate up a lot of your time and budget. But ServiceNow did things differently. It handled updates automatically, whether you asked for them or not.

ServiceNow stood out because it was easy to use and flexible. Unlike other tools that had trouble making changes and getting data, ServiceNow made everything simple. You could customize how lists and forms looked, automate tasks, and generate reports. This simplicity was the heart of ServiceNow's value. 


### What made it so great?

Back then, ServiceNow was a no-frills tool. It had some core components like the event queue, scripts, processors, and forms. It's expanded now, but it's important to remember what made it shine in its early days.


It was a lot simpler back then. The basics included:

- Event queue
- Script actions
- Processors
- UI Pages
- UI Macros
- Business Rules
- UI Actions
- Client Scripts

These building blocks formed the essence of ServiceNow. While it's grown since then, let's not forget its humble beginnings.

### The value prop for the business

From a business's perspective, automation is huge. Many times I've thought over the years how much I'd love to have my own always on person instance. Pie in the sky thinking there. In the beginning you'd pay a fixed price for "itil" users a month like you might a cell phone and that was it.  You built value by utilizing ServiceNow's basic features, such as ITSM. 

### The value prop for the developers

For us developers, ServiceNow was a dream come true (at least for me). I'd never managed a production server upgrade before. Shuffling code between different environments was a whole new adventure. Remember, this was before the era of Git version control.



As time passed, ServiceNow kept up with the times and evolved. Before it hit the stock market, things were more straightforward. I was working at a partner company when this transition happened. We had training sessions to wrap our heads around the licensing changes. It was critical to prevent unexpected surprises on our customers' bills. This was when they introduced the Approval entitlement, which added an extra cost.



Now, it's time to explore other tools and see which ones carry the same spirit as this giant. I've got a list here, no specific order. If you've had hands-on experience with any of these, I'd love to hear your thoughts.



Here are the qualities I'm considering: forms, automation, who's in charge of the database, and pricing.

- Platform-like tools
  - Amazon Honeycode
  - Airtable
  - ServiceNow
  - ToolJet
  - Budibase
- Industry specific tools
  - Jira Service Desk
  - Freshservices
  - Zendesk
  - BMC Helix ITSM
  - Ivanti Service Manager
  - SysAid
  - Zoho
  - ManageEngine ServiceDesk Plus
  - SolarWinds ServiceDesk
  - Spiceworks Help Desk
  - Cherwell

These notes are a bit dated but let me drop this table;

| Tool                          | Form     | Automation | Whose DB                | Pricing     | Difference                                           |
| ----------------------------- | -------- | ---------- | ----------------------- | ----------- | ---------------------------------------------------- |
| [Retool][4]                   | [Yes][3] | [Yes][2]   | [Theirs][5]  [Yours][4] | 0,10,?      | Granular Access Controls only for Enterprise clients |
| [Amazon Honeycode][6]         | Yes      | Yes        | Theirs                  | 0,20,30     | Limited to 2500/10000/100000rows/table               |
| [Airtable][7]                 | Yes      | [Yes][1]   | Theirs                  |             | Same except, you control ownership of data           |
| ServiceNow                    | Yes      | Yes        | Theirs                  |             |                                                      |
| ToolJet                       | Yes      | Yes        | Yours                   |             |                                                      |
| BudiBase                      | Yes      | Yes        | Theirs or Yours         |             |                                                      |
| Jira Service Desk             |          | [Yes][15]  | Theirs                  | $20/user/mo |                                                      |
| Freshservices                 |          | [Yes][14]  | Theirs                  | $29/user/mo |                                                      |
| Zendesk                       |          | [Yes][13]  | Theirs                  |             |                                                      |
| BMC Helix ITSM                |          | [Yes][12]  | Theirs                  | Quote only  |                                                      |
| Ivanti Service Manager        |          | [Yes][11]  |                         | Quote only  |                                                      |
| SysAid                        |          | [Yes][10]  |                         | Quote only  |                                                      |
| Zoho                          |          | [Yes][9]   | Theirs                  |             |                                                      |
| ManageEngine ServiceDesk Plus |          | [Yes][16]  |                         | Quote only  |                                                      |
| SolarWinds ServiceDesk        |          | [Yes][17]  |                         | $20/user/mo |                                                      |
| Spiceworks Help Desk          |          |            |                         | Selfhosted  |                                                      |
| Cherwell                      |          | [Yes][8]   | Theirs                  | Quote only | |


[1]:https://support.airtable.com/hc/en-us/articles/360050974153-Automations-Overview
[2]:https://docs.retool.com/docs/scripting-retool
[3]:https://docs.retool.com/docs/creating-forms
[4]:https://retool.com/self-hosted/
[5]:https://retool.com/pricing/
[6]:https://www.honeycode.aws/pricing
[7]:https://airtable.com/pricing	
[8]:https://ca.cherwell.com/products/cherwell-core/workflow-automation/
[9]:https://www.zoho.com/creator/workflow-automation.html
[10]:https://www.sysaid.com/service-automation
[11]:https://www.ivanti.com/solutions/service-management/workflow-automation
[12]:https://www.bmc.com/it-solutions/bmc-helix-itsm-capabilities.html
[13]:https://developer.zendesk.com/api-reference/ticketing/business-rules/automations/
[14]:https://freshdesk.com/automations
[15]:https://www.atlassian.com/software/jira/features/automation
[16]:https://www.manageengine.com/products/service-desk/help-desk-features.html
[17]:https://documentation.solarwinds.com/en/success_center/swsd/content/completeguidetoswsd/automations.htm
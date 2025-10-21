---
title: 'Quick Guide: Orlando'
description: >-
  Here's my take of what's new with Orlando. To me this seems like the release
  of "The Workspace". Sure there are other updates but unless you subscribe to
  tho...
date: '2020-01-06'
tags:
  - servicenow
  - service-portal
  - atf
  - flow-designer
  - update-sets
  - api
  - discovery
  - cmdb
  - import-sets
  - service-catalog
  - html
  - release-orlando
  - tutorial
  - integration
redirectFrom:
  - /quick-guide-orlando/
---

<!--StartFragment-->

Here's my take of what's new with Orlando. To me this seems like the release of "The Workspace". Sure there are other updates but unless you subscribe to those specific SKUs, you won't see meaningful updates for your customers. The improvements to me seem to be mostly on the workspaces.

## Deprecated things

* Service Desk Call plugin now requires subscription (didn't before)
* Discovery - Help the help desk plugin no longer available
* Enterprise Release Management plugin no longer available
* Facilities Service Management plugin no longer available

## Updated things

* Agent Workspace: CMDB
* Agent Workspace: Form annotation supported
* Agent Workspace: Field Styles not supported
* Agent Workspace: Faster list loading by not showing count of all rows
* Agent Workspace: Variable editor in Agent Workspace inline
* ATF: Quick Start Tests for many things
* ATF: Copy automated test suite, copies all nested tests
* ATF: Emails can now be tested
* ATF: Workspaces can now be tested
* VTB: Compact cards, now more compact (thinner columns)
* VTB: Can show attachment preview on board
* Flow Designer: Service Catalog - Plugin now active by default
* Virtual Agent: Loads of updates
* Mobile Platform: Loads of updates
* Customer Service Management: Loads of updates
* Field Service Management: Loads of updates
* Human Resources Service Delivery: Loads of updates
* Project Portfolio Management: Loads of updates
* Mid Servers require JRE 1.8.0_161 or greater
* Mid Servers for discovery require Powershell 5.1 (was 3.0)
* Mid Servers no longer need an admin account, just read/write to the /agent folder
* MID Servers now support Microsoft JEA authentication in order to run basic Discovery.

## New things

* Now Components available for development see NDS
* Studio: Edit source control files outside of ServiceNow
* Studio: Can use Mid connect to source control
* Studio: Set the GIT repository default branch
* System Clone: Presever Update Sets - no longer need to export/import from target instance
* Service Portal: Widget Diagnostics
* Import and Export: REST (IntegrationHub) type data source
* Import and Export: Custom (Load by Script) type data source
* Import and Export: Robust Import Set Transformers
* Import and Export: Custom (Parse by Script) format
* Import and Export: CSV line parser
* Import and Export: Scoped scriptable Import Set APIs
* Investment Funding - This sounds new
* Discovery: ServiceNow Certificate Inventory and Management application
* Dynamic Translation - Translates stuff on the fly

## Further Reading

* [Andrew Albury's blog post](http://andrew.alburydor.com/blog/2020/01/06/orlandofeatures/)

<!--EndFragment-->

## Comments

<!--StartFragment-->

> **[macmorning](https://github.com/macmorning)** commented [on Jan 29, 2020](https://github.com/jacebenson/jace.pro/issues/164#issuecomment-579846342)
> 
> Thanks Jace.\
> I can still see no way to create or edit the new UX components (like ribbons).\
Frustrating

> **[jacebenson](https://github.com/jacebenson)** commented [on Jan 29, 2020](https://github.com/jacebenson/jace.pro/issues/164#issuecomment-579848339)
> 
> I've heard that is coming out with General Availability. See <https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/workspace/concept/record-view.html#d1269810e56>

> **[macmorning](https://github.com/macmorning)** commented [on Jan 29, 2020](https://github.com/jacebenson/jace.pro/issues/164#issuecomment-579865071)
> 
> You just warmed my heart. The documentation stays vague though, giving hints about "adding custom components" but not actually giving details about it.\
> This page reads "Register your Now component with Tectonic" =>\
<https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/workspace/task/set-up-ui-action-render-custom-component.html>\
> Mood shifted from frustrated to excited. Thanks

> **[jacebenson](https://github.com/jacebenson)** commented [on Jan 29, 2020](https://github.com/jacebenson/jace.pro/issues/164#issuecomment-579902897)
> 
> I'm excited about it.

<!--EndFragment-->
---
title: "Ok Orlando - Studio Git Outside Files"
subtitle: ""
summary: ""
date: 2020-01-27T13:21:05-06:00
---

## Edit source control integration files outside of Studio

> Edit application files linked to a source control integration using an editor other than Studio. To ensure that the application files remain usable, the instance validates and sanitizes application files edited by other editing applications. Application files that fail XML schema validation either abort the current source control operation or are skipped. The instance generates an upgrade log entry for each sanitization action taken.

[Edit source control integration files outside of Studio](https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/concept/c_SourceControlIntegration.html)



This works great. You can see the file structure there. The now app path is defined by root file `sn_source_control.properties`.

I edited an application file on Github.  That does work.  There is some sanitation process (which I don't understand) allows for editing of application files out of ServiceNow.

![](ScreenShot-2020-Jan-27-248-PM.png) 
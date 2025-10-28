---
title: ' Comparing VS Code Extensions'
description: "This post is about the state of code syncing tools for the VS Code tool.\r\n\r\nRecently\_Andrew announced the new VS Code extension. I knew something was going t..."
date: '2019-11-14'
tags:
  - servicenow
  - business-rules
  - scoped-apps
  - update-sets
  - api
  - tutorial
  - knowledge-conference
  - integration
redirectFrom:
  - /comparing-vs-code-extensions/
  - /p/2019-11-13-comparing-vs-code-extensions/ 
  - /2019-11-13-comparing-vs-code-extensions/
---

<!--StartFragment-->

This post is about the state of code syncing tools for the VS Code tool.

Recently [Andrew announced the new VS Code extension](https://developer.servicenow.com/blog.do?p=/post/vscode/). I knew something was going to be released eventually because at K19 on the CreatorCon keynote they briefly showed the creation of web components being built locally. To do that you need something locally.

With all that out of the way I want to show what is currently out there, and compare features.

Also it's worth noting once ServiceNow seems to release something most generally community versions of them stop getting updated because, why would the community contribute when ServiceNow is maintaining it.

I'm going to compare the following file syncr's

| Name                              | Installer                                                                                                   | Source                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Sal Costa's Servicenow Sync       | [VS Code Installer](https://marketplace.visualstudio.com/items?itemName=anerrantprogrammer.servicenow-sync) | [Source](https://github.com/alcosta/vsc-servicenow-sync) |
| IntegrateNate's S.N.I.C.H.        | [VS Code Installer](https://marketplace.visualstudio.com/items?itemName=integrateNate.snich)                | [Source](https://github.com/RaynorUE/snich)              |
| ServiceNow® Extension for VS Code | [VS Code Installer](https://marketplace.visualstudio.com/items?itemName=ServiceNow.now-vscode)              | NA                                                       |

I'm not going to look at these as they either haven't been updated or require software I'm not going to stand up. That is to say I respect the work done on these and these may have helped others make their tools, so to all of you who wrote these, good job. I do follow your work.

* [DynamicDan's Filesync](https://github.com/dynamicdan/sn-filesync)
* [cern-snow's Codesync](https://github.com/cern-snow/codesync)
* [theconnectiv's Now-sync](https://github.com/theconnectiv/now-sync)
* [0x111's sn-edit.com Sync](https://github.com/0x111/sn-edit.com)
* [tftliife's Atom Servicenow Sync](https://github.com/thtliife/servicenow-sync)
* [Sal Costa's Sublime Servicenow Sync](https://github.com/salcosta/servicenow-sync)
* [ReedOwens' UXsyncNow](https://github.com/ReedOwens/UXsyncNow)

## DynamicDan's Filesync

Many years ago I worked at Fruition Partners and was aware of the Filesync project near the time of my departure. I never used it while there but did try it out after Dynamic Dan started maintaining it. Originally written by [John Caruso](https://github.com/johncaruso) here on [github.com/fruition-partners/filesync](https://github.com/fruition-partners/filesync), then [forked and maintained by Dynamic Dan](https://github.com/dynamicdan/sn-filesync). This is great, it has a lot of room for configuration and wasn't tied to any editor. Since Dynamic Dan's fork has existed it's been forked 54 times, and stared 66 times.

This tool is not dependent on any text editor like the rest but I believe this was and still is a source of inspiration for all of these tools. Because this tool has no required editor, it in my opinion is going to be more available to more systems and users likes.

This was originally written before scopes, so you literally had to set up what tables and columns you wanted and this will fetch the files and update the values in ServiceNow in your current scope and update set.

## Sal Costa's Servicenow Sync

I'm pretty partial to Sal's work as it to me has always been of very high quality. As such I tried this out. This reminded me very much of when I had used DynamicDan's fork. It is more intuitive, but that is because the commands are all available in command palette. This extension has these features;

The good;

* No pre-configured tables to start with, you have to specify what you want
* Pre-configured fields for tables are set up once you add a table
* Can download records regardless of scope/application
* Link to open the file in the browser
* Compare file to server
* Can set your scope

The bad;

* No pre-configured tables to start with, you have to specify what you want
* No Intellisense
* No way to download all files from a scope
* No way to set your update set (No api made available)
* Works in your current Scope/Update set that is associated to user

[](<>)

## IntegrateNate's S.N.I.C.H.

Nate's extension had something many people wanted, Intellisense. Somehow Nate has the hookup to get this and it is great. This like Sal's has a simple to understand way to configure tables and fields. This extension has these features;

The good;

* Pre-configured (also customizable) to download many system files and fields
* A way to download records regardless of scope/application
* Compare file to server
* Intellisense

The bad;

* No link to the file on server
* No way to set your scope
* No way to set your update set (No api made available)
* Works in your current Scope/Update set that is associated to user

[](<>)

## ServiceNow® Extension for VS Code

Enter ServiceNow® Extension for VS Code extension. I think they have a great place to start here. Lots of idea's from Sal, Nate's and DynamicDan's projects.

The good;

* Pre-configured (*not customizable*) to download many system files and fields
* Compare file to server
* Intellisense
* Run highlighted code in or out of scope
* Link to open file in browser (sometimes)
* Can set your update set (Must be a new undocumented api)
* Can set your scope
* Works with Scoped applications

The bad;

* ~~Table configurations not modifiable~~
* Table configurations do not allow you to modify pre-configured tables e.g. UI Pages, Business Rules
* ~~Only works for Scoped Applications~~
* Can work with global records if you know the plugin that includes the record in question
* Has interesting way to configure initially (shown in video)

[](<>)

# Summary

Lets look at it in a table format

Legend;\
✅ = Yes\
❌ = No\
😕 = Sort of

| Feature                         | Servicenow Sync | S.N.I.C.H. | ServiceNow Official |
| ------------------------------- | --------------- | ---------- | ------------------- |
| Updates ServiceNow from VS Code | ✅               | ✅          | ✅                   |
| Can create records from VS Code | ❌               | ❌          | ✅                   |
| Works with proxy                | ✅               | ❌          | ❌                   |
| Sets your scope                 | ✅               | ❌          | ✅                   |
| Sets your update set            | ❌               | ❌          | ✅                   |
| Opens file in the instance      | ✅               | ❌          | 😕❌                 |
| Executes code on server         | ✅               | ❌          | ✅                   |
| Compares file to server         | ✅               | ✅          | ✅                   |
| Pre-configured Setup            | ❌               | ✅          | ✅                   |
| Customizable Setup              | ✅               | ✅          | 😕                  |
| Has Intellisense                | ❌               | ✅          | ✅                   |
| Works with Global               | ✅               | ✅          | ❌                   |
| Works with Scopes               | ✅               | ✅          | ✅                   |
| Allows Basic Auth               | ✅               | ✅          | ✅                   |
| Allows OAuth                    | ❌               | ✅          | ✅                   |
| Open Source                     | ✅               | ✅          | ❌                   |

Changelog;\

| Date       | Notes                                                                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2019-11-18 | Changed "ServiceNow Official" Customizable Setup from No, to Sort of                                                                                                        |
| 2019-11-18 | Changed "ServiceNow Official" Works with Global from No, to No and Sort of                                                                                                  |
| 2019-11-18 | Changed "ServiceNow Official" The bad to be more clear that table configurations are possible but only if not already configured                                            |
| 2019-11-18 | Changed "ServiceNow Official" The good to include "Works with scoped application"                                                                                           |
| 2019-11-18 | Added "ServiceNow Official" The bad to include "Authentication issues"                                                                                                      |
| 2019-11-21 | Added "Can create records from VS Code"                                                                                                                                     |
| 2019-11-21 | Added "Allows Basic Auth"                                                                                                                                                   |
| 2019-11-21 | Added "Allows OAuth"                                                                                                                                                        |
| 2019-11-21 | Added "Can execute code on server"                                                                                                                                          |
| 2019-11-21 | Changed "ServiceNow Official" video to show all features and how to set it up.                                                                                              |
| 2019-11-21 | Changed "ServiceNow Official" Can open file in the instance as I just had that wrong.                                                                                       |
| 2019-11-21 | Changed "ServiceNow Official" Works with Global to No because although global files can be retrieved in scope, it's not simple to do and will be in scope if you change it. |
| 2019-11-27 | Changed "ServiceNow Official" Opens files in instance to Sort of No because some things pull down with a `.now` and those open in the instance                              |

<!--EndFragment-->
---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Comparing VS Code Extensions"
subtitle: "Comparing Extensions by Sal Costa, Nate Andersen and ServiceNow"
summary: "Comparing Extensions by Sal Costa, Nate Andersen and ServiceNow"
authors: ["jace"]
tags: []
categories: []
date: 2019-11-13T23:06:38-06:00
lastmod: 2019-11-13T23:06:38-06:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
This post is about the state of code syncing tools for the VS Code tool.

Recently [Andrew announced the new VS Code extension](https://developer.servicenow.com/blog.do?p=/post/vscode/).  I knew something was going to be released eventually because at K19 on the creatorcon keynote they briefly showed the creation of web components being built locally.  To do that you need something locally.  

With all that out of the way I want to show what is currently out there, and compare features.

Also it's worth noting once ServiceNow seems to release something most generally community versions of them stop getting updated because, why would the community contribute when ServiceNow is maintaining it.

I'm going to compare the following file syncr's

| Name | Installer | Source |
| --- | --- | --- |
| Sal Costa's Servicenow Sync | [VS Code Installer](https://marketplace.visualstudio.com/items?itemName=anerrantprogrammer.servicenow-sync) | [Source](https://github.com/salcosta/vsc-servicenow-sync) |
| IntegrateNate's S.N.I.C.H. | [VS Code Installer](https://marketplace.visualstudio.com/items?itemName=integrateNate.snich) | [Source](https://github.com/RaynorUE/snich) |
| ServiceNow® Extension for VS Code | [VS Code Installer](https://marketplace.visualstudio.com/items?itemName=ServiceNow.now-vscode) | NA |

I'm not going to look at these as they either haven't been updated or require software I'm not going to stand up.  That is to say I respect the work done on these and these may have helped others make their tools, so to all of you who wrote these, good job. I do follow your work.

- [DynamicDan's Filesync](https://github.com/dynamicdan/sn-filesync)
- [cern-snow's Codesync](https://github.com/cern-snow/codesync)
- [theconnectiv's Now-sync](https://github.com/theconnectiv/now-sync)
- [0x111's sn-edit.com Sync](https://github.com/0x111/sn-edit.com)
- [tftliife's Atom Servicenow Sync](https://github.com/thtliife/servicenow-sync)
- [Sal Costa's Sublime Servicenow Sync](https://github.com/salcosta/servicenow-sync)
- [ReedOwens' UXsyncNow](https://github.com/ReedOwens/UXsyncNow)

## DynamicDan's Filesync

Many years ago I worked at Fruition Partners and was aware of the Filesync project near the time of my departure.  I never used it while there but did try it out after Dynamic Dan started maintaining it.  Originally written by [John Caruso](https://github.com/johncaruso) [here https://github.com/fruition-partners/filesync](https://github.com/fruition-partners/filesync), then forked and maintained by Dynamic Dan.  This is great, it has a lot of room for configuration and wasn't tied to any editor.  Since Dynamic Dan's fork has existed it's been forked 54 times, and stared 66 times.

This tool is not dependant on any text editor like the rest but I believe this was and still is a source of inspiration for all of these tools.  Because this tool has no required editor, it in my opinion is going to be more available to more systems and users likes.

This was originally written before scopes, so you literally had to set up what tables and columns you wanted and this will fetch the files and update the values in Servicenow in your current scope and update set.  

## Sal Costa's Servicenow Sync
I'm pretty partial to Sal's work as it to me has always been of very high quality.  As such I tried this out.  This reminded me very much of when I had used DynamicDan's fork.  It is more intuitive, but that is because the commands are all available in command palatte.  This extension has these features;

The good;


- No preconfigured tables to start with, you have to specify what you want
- Preconfigured fields for tables are set up once you add a table
- Can download records regardless of scope/application
- Link to open the file in the browser
- Compare file to server
- Can set your scope

The bad;

- No preconfigured tables to start with, you have to specify what you want
- No Intellisense
- No way to download all files from a scope
- No way to set your update set (No api made available)

<video width="320" height="240" controls>
  <source src="sal-vs-code.mp4" type="video/mp4">
</video>

## IntegrateNate's S.N.I.C.H.
Nate's extension had something many people wanted, Intellisense.  Somehow Nate has the hookup to get this and it is great.  This like Sal's has a simple to understand way to configure tables and fields. This extension has these features;

The good;

- Preconfigured (also customizable) to download many system files and fields
- A way to download records regardless of scope/application
- Compare file to server
- Intellisense

The bad;

- No link to the file on server
- No way to set your scope
- No way to set your update set (No api made available)
    
<video width="320" height="240" controls>
  <source src="nates-snich.mp4" type="video/mp4">
</video>


## ServiceNow® Extension for VS Code
Enter ServiceNow® Extension for VS Code extension.  I think they have a great place to start here.  Lots of idea's from Sal, Nate's and DynamicDan's projects.  

The good;

- Preconfigured (*not customizable*) to download many system files and fields
- Compare file to server
- Intellisense
- Run highlighted code in or out of scope
- Link to open file in browser
- Can set your update set (Must be a new undocumented api)
- Can set your scope

The bad;

- Table configurations not modifiable
- Only works for Scoped Applications

<video width="320" height="240" controls>
  <source src="now-off.mp4" type="video/mp4">
</video>

# Summary 

Lets look at it in a table format

| Feature                            | Servicenow Sync | S.N.I.C.H. | ServiceNow Official |
| ---------------------------------- | --------------- | ---------- | ------------------- |
| Can Update ServiceNow from VS Code | ✅              | ✅         | ✅                 |
| Compare file to server             | ✅              | ✅         | ✅                 |
| Preconfigured Setup                | ❌              | ✅         | ✅                 |
| Customizable Setup                 | ✅              | ✅         | ❌                 |
| Intellisense                       | ❌              | ✅         | ✅                 |
| Can set your scope                 | ✅              | ❌         | ✅                 |
| Can set your update set            | ❌              | ❌         | ✅                 |
| Can open file in the instance      | ✅              | ❌         | ✅                 |
| Works with Global                  | ✅              | ✅         | ❌                 |
| Works with Scopes                  | ✅              | ✅         | ✅                 |
| Open Source                        | ✅              | ✅         | ❌                 |

---
title: "Browser Extensions for ServiceNow"
subtitle: ""
summary: ""
authors: ["jace"]
tags: []
categories: []
date: 2019-11-30T22:02:52-06:00
lastmod: 2019-11-30T22:02:52-06:00
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

This post is brought to you because of Kevin. Thanks Kevin!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Just read your great code search blog post <a href="https://twitter.com/jacebenson?ref_src=twsrc%5Etfw">@jacebenson</a>... you probably already know about this, but the an-Utils browser extension has an “install-less” code search feature in beta. <a href="https://t.co/qXXadNxpDz">https://t.co/qXXadNxpDz</a></p>&mdash; Kevin Clark (@milligna) <a href="https://twitter.com/milligna/status/1200668500597055489?ref_src=twsrc%5Etfw">November 30, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Browser extensions are scary in my opinion when it comes to work.  Some workplaces have rules (not really enforceable) where you are allowed to only download extensions used by hundreds of thousands of users.

There are [legitimate](https://www.kaspersky.com/blog/browser-extensions-security/20886/) [reasons](https://www.digitaltrends.com/news/popular-browser-extensions-are-selling-your-data/) [for](https://www.washingtonpost.com/technology/2019/07/18/i-found-your-data-its-sale/) [this](https://www.howtogeek.com/188346/why-browser-extensions-can-be-dangerous-and-how-to-protect-yourself/).

Now that I have that out of the way, let's talk about the extensions for Firefox and Chrome to help work in ServiceNow.

| Extension   | Firefox           | Chrome            | Github            | Author              |
| ----------- | ----------------- | ----------------- | ----------------- | ------------------- |
| SN Utils    | Yes<sup>[1]</sup> | Yes<sup>[2]</sup> | Yes<sup>[3]</sup> | Arnoud Kooi         |
| SN Toolbelt | Yes<sup>[4]</sup> | Yes<sup>[5]</sup> | Yes<sup>[6]</sup> | Mac Morning         |
| SwissNow    | No                | Yes<sup>[7]</sup> | No                | Łukasz Krzaczkowski |

## Features we're comparing

There extensions have a **lot** of features so I'll be comparing all of them I can find;

Legend;\
✅	= Yes\
❌	= No

| Feature                 | SN Toolbelt | SN Utils | SwissNow |
| ----------------------- | ----------- | -------- | -------- |
| Chrome                  | ✅          | ✅       | ✅       |
| FireFox                 | ✅          | ✅       | ❌       |
| Open Source             | ✅          | ✅       | ❌       |
| Tabs customizations     | ✅          | ❌       | ❌       |
| Docs and API searches   | ✅          | Sortof   | ❌       |
| Node Switching          | ✅          | ✅       | ✅       |
| Links to many instances | ✅          | ❌       | ✅       |
| Export Settings         | ✅          | ❌       | ❌       |
| Slash commands          | ❌          | ✅       | ❌       |
| Edit scripts in VS Code | ❌          | ✅       | ❌       |
| Edit widgets in VS Code | ❌          | ✅       | ❌       |
| Show technical names    | ❌          | ✅       | ❌       |
| Update set search       | ❌          | ✅       | ❌       |
| Updates List            | ❌          | ✅       | ❌       |
| Search tables           | ❌          | ✅       | ❌       |
| View Data               | ❌          | ✅       | ❌       |
| Search User by Id       | ❌          | ✅       | ❌       |
| Code Templates          | ❌          | ✅       | ❌       |
| CTRL-S / CMD-S          | ❌          | ✅       | ❌       |
| CTRL-V / CMD-V          | ❌          | ✅       | ❌       |
| Compare Records         | ❌          | ❌       | ✅       |


## SN Utils 

Unfortunately I've never looked at this extension in depth until I started writing this post.  With that being said, holy cow.

Arnoud, good job.

~~Some of the things I don't think should be in the extension but others, man I wish they were part of the platform.~~

I think the CTRL-S / CMD-S and CTRL-V / CMD-V should be something Servicenow Proper should add to the platform making them unneeded.

After comments added to this post it's clear to see slash commands can add any search including docs/api stuff. So I changed that to Sort of as they need to be configured.


## SN Tool belt

I've been a fan of this repository for years now.  It isn't the biggest project but was the only one I found to be open source when I first looked.  

With that being said, it's all about giving you links to quickly jump around instances.  I assume we all do that because I do that.

## SwissNow

This is the only other extension I could find was this one.

<https://servicenowgems.com/2017/09/11/swissnow-chrome-extension/>

This one is also about jumping around instances and as such has some nice links around them including a very handy compare function, however, I can't find the source.  So I downloaded the `.crx` file and unzipped it.  Looked around at the code for any odd calls but I didn't find any.  So thats great.

# Change Log

| Date       | Action |
| ---------- | ------ |
| 2019-12-01 | Changed SN Utils - Docs and API searches to Sortof (configurable) |


[1]: https://addons.mozilla.org/en-US/firefox/addon/servicenow-utils2/
[2]: https://chrome.google.com/webstore/detail/sn-utils-tools-for-servic/jgaodbdddndbaijmcljdbglhpdhnjobg
[3]: https://github.com/arnoudkooi/ServiceNow-Utils
[4]: https://addons.mozilla.org/en-US/firefox/addon/snow-tool-belt
[5]: https://chrome.google.com/webstore/detail/servicenow-tool-belt/jflcifhpkilfaomlnikfaaccmpidkmln
[6]: https://github.com/macmorning/snowtools-webext
[7]: https://chrome.google.com/webstore/detail/swissnow-servicenow-toolb/jneeammdkdmlfgidcacmjmbijdmkdbjm

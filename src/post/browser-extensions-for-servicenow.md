---
title: Browser Extensions for ServiceNow
permalink: /post/2019-11-30-browser-extensions-review/
author: Jace Benson
date: 2019-12-02T05:14:36.432Z
draft: false
prism: false
---
<!--StartFragment-->

This post is brought to you because of Kevin. Thanks Kevin!

> Just read your great code search blog post @jacebenson... you probably already know about this, but the an-Utils browser extension has an “install-less” code search feature in beta. - 🍹🍸Kev 🍸🍹 (@milligna) <a href="https://twitter.com/milligna/status/1200668500597055489?ref_src=twsrc%5Etfw">November 30, 2019</a>


Browser extensions are scary in my opinion when it comes to work. Some workplaces have rules (not really enforceable) where you are allowed to only download extensions used by hundreds of thousands of users.

There are [legitimate](https://www.kaspersky.com/blog/browser-extensions-security/20886/) [reasons](https://www.digitaltrends.com/news/popular-browser-extensions-are-selling-your-data/) [for](https://www.washingtonpost.com/technology/2019/07/18/i-found-your-data-its-sale/) [this](https://www.howtogeek.com/188346/why-browser-extensions-can-be-dangerous-and-how-to-protect-yourself/).

Now that I have that out of the way, let's talk about the extensions for Firefox and Chrome to help work in ServiceNow.

| Extension   | Firefox                                                                   | Chrome                                                                                                       | Github                                                 | Author              |
| ----------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ | ------------------- |
| SN Utils    | Yes[1](https://addons.mozilla.org/en-US/firefox/addon/servicenow-utils2/) | Yes[2](https://chrome.google.com/webstore/detail/sn-utils-tools-for-servic/jgaodbdddndbaijmcljdbglhpdhnjobg) | Yes[3](https://github.com/arnoudkooi/ServiceNow-Utils) | Arnoud Kooi         |
| SN Toolbelt | Yes[4](https://addons.mozilla.org/en-US/firefox/addon/snow-tool-belt)     | Yes[5](https://chrome.google.com/webstore/detail/servicenow-tool-belt/jflcifhpkilfaomlnikfaaccmpidkmln)      | Yes[6](https://github.com/macmorning/snowtools-webext) | Mac Morning         |
| SwissNow    | No                                                                        | Yes[7](https://chrome.google.com/webstore/detail/swissnow-servicenow-toolb/jneeammdkdmlfgidcacmjmbijdmkdbjm) | No                                                     | Łukasz Krzaczkowski |

## [Features we're comparing](https://jace.pro/post/2019-11-30-browser-extensions-review/#features-were-comparing)

There extensions have a **lot** of features so I'll be comparing all of them I can find;

Legend;\
✅ = Yes\
❌ = No

| Feature                 | SN Toolbelt | SN Utils     | SwissNow |
| ----------------------- | ----------- | ------------ | -------- |
| Chrome                  | ✅           | ✅            | ✅        |
| FireFox                 | ✅           | ✅            | ❌        |
| Open Source             | ✅           | ✅            | ❌        |
| Tabs customizations     | ✅           | ❌            | ❌        |
| Docs and API searches   | ✅           | ✅            | ❌        |
| Node Switching          | ✅           | ✅            | ✅        |
| Links to many instances | ✅           | Configurable | ✅        |
| Export Settings         | ✅           | ❌            | ❌        |
| Slash commands          | ❌           | ✅            | ❌        |
| Edit scripts in VS Code | ❌           | ✅            | ❌        |
| Edit widgets in VS Code | ❌           | ✅            | ❌        |
| Show technical names    | ❌           | ✅            | ❌        |
| Update set search       | ❌           | ✅            | ❌        |
| Updates List            | ❌           | ✅            | ❌        |
| Search tables           | ❌           | ✅            | ❌        |
| View Data               | ❌           | ✅            | ❌        |
| Search User by Id       | ❌           | ✅            | ❌        |
| Code Templates          | ❌           | ✅            | ❌        |
| CTRL-S / CMD-S          | ❌           | ✅            | ❌        |
| CTRL-V / CMD-V          | ❌           | ✅            | ❌        |
| Compare Records         | ❌           | ❌            | ✅        |

## SN Utils

Unfortunately I've never looked at this extension in depth until I started writing this post. With that being said, holy cow.

Arnoud, good job.

~~Some of the things I don't think should be in the extension but others, man I wish they were part of the platform.~~

I think the CTRL-S / CMD-S and CTRL-V / CMD-V should be something Servicenow Proper should add to the platform making them unneeded.

After comments added to this post it's clear to see slash commands can add any search including docs/api stuff. So I changed that to Sort of as they need to be configured.

## SN Tool belt

I've been a fan of this repository for years now. It isn't the biggest project but was the only one I found to be open source when I first looked.

With that being said, it's all about giving you links to quickly jump around instances. I assume we all do that because I do that.

## SwissNow

This is the only other extension I could find was this one.

<https://servicenowgems.com/2017/09/11/swissnow-chrome-extension/>

This one is also about jumping around instances and as such has some nice links around them including a very handy compare function, however, I can't find the source. So I downloaded the `.crx` file and unzipped it. Looked around at the code for any odd calls but I didn't find any. So thats great.

# Change Log

| Date       | Action                                                                          |
| ---------- | ------------------------------------------------------------------------------- |
| 2019-12-01 | Changed SN Utils - Docs and API searches to yes (via `/dev searchterm`) was no. |
| 2019-12-01 | Changed SN Utils - Links to many instances to configurable was no.              |

<!--EndFragment-->

## Comments

> <!--StartFragment-->
>
> **[arnoudkooi](https://github.com/arnoudkooi)** commented [on Dec 1, 2019](https://github.com/jacebenson/jace.pro/issues/145#issuecomment-560152659)
>
> Great article Jace!
>
> In SNU some of the features are accessible via slashcommands, like:\
> `/docs <query>` or `/dev <query>` for docs and api search.\
> You (or I) can add a own search source like :\
> `jace;https://sn.jace.pro/docs/?q=$0 Search Jace's documentation`
>
> Via `/env acmedev` you can open current page in instance acmedev.\
> (I need to look at the nested function, creating a slashcommand `/acmedev` doesn't work now)
>
> Most of the features are explained in the [K19 labguide](https://developer.servicenow.com/app.do#!/event/knowledge19/CCW0844) or the newer in my [Tweets](https://twitter.com/sn_utils)\
> And of course the [videos](https://www.youtube.com/channel/UCtr-9_HAEAPmcDRQSyKNzxg)!
>
> Regarding the risks of Extension, always good to be aware of this and make your own assessment. I'm keeping the permissions as tight as possible, resulting in rather low [score](https://crxcavator.io/report/jgaodbdddndbaijmcljdbglhpdhnjobg/3.5.8.0/) at [crxcavator](https://crxcavator.io/).\
> The permissions I do ask are explained in the [Privacy Disclaimer](https://github.com/arnoudkooi/ServiceNow-Utils/blob/master/PRIVACY.md)
>
> <!--EndFragment-->



> <!--StartFragment-->
>
> **[jacebenson](https://github.com/jacebenson)** commented [on Dec 1, 2019](https://github.com/jacebenson/jace.pro/issues/145#issuecomment-560163606)
>
> Seems great, looking into this now makes me wish I did it more earlier.
>
> <!--EndFragment-->



> <!--StartFragment-->
>
> <!--StartFragment-->
>
> **[macmorning](https://github.com/macmorning)** commented [on Jan 29, 2020](https://github.com/jacebenson/jace.pro/issues/145#issuecomment-579850847)
>
> <!--EndFragment-->
>
> Hey Jace, thanks for the shout out.\
> As you can guess, with the Toolbelt extension I'm not trying to compete with Arnoud & team (tremendous work there!). It's mostly a navigation helper. I'm adding small features when I get the idea and the time, limiting them to what is doable without script injection, external framework nor update sets because we should avoid doing this on our clients \[live] environments.\
> Anyhow, the project is on github and sndevs are most welcome to contribute with ideas, defects, and pull requests.
>
> <!--EndFragment-->
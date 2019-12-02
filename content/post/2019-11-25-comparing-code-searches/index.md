---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Comparing Code Searchers"
subtitle: "Comparing Code Searchers by a few folks"
summary: "Comparing Code Searchers by a few folks"
authors: ["jace"]
tags: []
categories: []
date: 2019-11-25T21:43:54-06:00
lastmod: 2019-11-25T21:43:54-06:00
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

I am biased.  I like *my* code search cause *I know* how it works as *I* wrote it.  However, there are a few options for code searchers out there.  But let me stat this first;

ServiceNow should have this OOB in their system not buried behind their Studio application.

Now that I've said my peace about it I'm going to compare all the code searcher's I know about.

## Global Code Search by Rick Marsha 

> A portable search utility that leverages the 'sn_codesearch' application (App Studio) for performing string searches across multiple tables and fields. Based on the out-of-box sample page 'CodeSearchExampleUse', but rather than only searching within custom application scopes, this page performs a system-wide search across all scopes, including GLOBAL. 

Downloads as of 2019-11-25: 196

This includes 2 files;

- UI action that is available on sys_* forms
- UI page that does the search using the `/api/sn_codesearch/` apis

Download: [Share](https://developer.servicenow.com/app.do#!/share/contents/8451237_global_code_search?v=1.01&t=PRODUCT_DETAILS)

![](global-rgm-search-1.png)
![](global-rgm-search-2.png)

This is a very pretty search that uses that `/api/sn_codesearch/` apis. It is installed in the global application.  This also adds a left hand navigation Menu called, "Code Search" with a links to;

- Code Search
- Search Groups
- REST API Explorer
- Scripted REST API
- Properties

## MS CodeSearch by Sebastian Reinmann

> This is a Code Search application based on the sn_codesearch REST API and provides a quick and easy way to lookup code in the entirety ServiceNow instance.

Downloads as of 2019-11-25: 188

This include 3 files;

- Script Include, "MS_CodeSearch", which has functions to add tables to the codesearch
- UI Page, "MS_CodeSearch" which appears to only use `/api/sn_codesearch/` apis
- UI Script prism.js for syntax highlighting

Download: 

- [Share](https://developer.servicenow.com/app.do#!/share/contents/4888545_ms_codesearch?v=0.1&t=PRODUCT_DETAILS)
- [Git](https://github.com/TechAdvis0r/NowDevelopment)

![](ms-codesearch-1.png)

This is in a scoped app so it can be removed entirely, has a nice UI. A satisfying progress bar, collapsible search results, and syntax highlighted results.

## FetchCode by Brent Llewellyn

> FetchCode is a handy utility for finding mysterious updaters, logging, wonkiness, and any other code snippets you could need to find throughout your instance. Just provide the terms to search for and FetchCode searches all script, xml, html, condition, calculation, system properties and default values as well as specific fields added in the config for the terms supplied in the dashboard.

Downloads as of 2019-11-25: 113

This includes 321 Updates, on Share it lists these; 

- 6 Business Rules
- 3 Client Scripts
- 9 Data transformers
- 11 Key Definitions
- 1 Magic Key
- 1 Processor
- 3 Script Includes
- 2 Scripted Rest APIs
- 3 UI Actions
- 3 UI Pages
- 8 UI Scripts

Download: [Share](https://developer.servicenow.com/app.do#!/share/contents/1176688_fetchcode_an_instance_code_search_utility?v=1.03&t=PRODUCT_DETAILS)

![](fetchcode-1.png)
![](fetchcode-2.png)

This has a unique look and feel.  It is installed in global and has a number of custom tables but without the `u_` prefix which forces me to raise my left eyebrow.  If they are mucking with tables like that I have to wonder what else they are doing.

## Code Tools by Jace Benson

> This is a scoped application for Service-now to allow easier searching all code sources.

This includes 8 files;

- 4 business rules
- 1 script include
- 1 service portal widget
- 1 service portal (`/code`)
- 1 scripted rest api

This does the standard search api, but then also does a lookup on the workflow activity to update results for workflow activities that are only active and marking old ones "Inactive"

This also has an opt-in feature to tell you about bad code.

Download: 

- [Share](https://developer.servicenow.com/app.do#!/share/contents/7596230_code_share_for_sp?v=2.4&t=PRODUCT_DETAILS)
- [Git](https://github.com/jacebenson/servicenow-code.git)

Downloads as of 2019-11-25: 115

![](jace-code-search-1.png)
![](jace-code-search-2.png)

## Developer Search by Garrett Griffin

> Introducing Developer Search 2.0, the comprehensive utility to search every script field in the system for that troublesome piece of code.

This includes 6 files;

- 2 Application Module Links
- 1 script include
- 2 UI Pages

I love the short url for this, `/ds.do`

I also love that you can share the link to the results.

It searches custom tables and fields normally which is great.  The UI is a little difficult to read but is very functional.  

It also features a "Deep Search" which appears to search other fields not traditionally scripting fields.

One thing it does really well is find Workflow Activity results.

![](garrett-search.png)

Download:

- [Share](https://developer.servicenow.com/app.do#!/share/contents/9326002_developer_search?t=PRODUCT_DETAILS)

Downloads as of 2019-11-25: 47

## Studio Search by ServiceNow

> Studio allows application developers to search within application files for matching record values.

Source: https://docs.servicenow.com/bundle/newyork-application-development/page/build/applications/task/t_SearchWithinApplicationFiles.html

Downloads as of 2019-11-25: ♾️

![](studio-search-1.png)
![](studio-search-2.png)

## Summary

|                               | Global Code Search | MS CodeSearch      | FetchCode          | Code Tools         | Developer Search   | Studio Search      |
| ----------------------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| Installed OOB                 | :no_entry:         | :no_entry:         | :no_entry:         | :no_entry:         | :no_entry:         | :white_check_mark: |
| Scoped App                    | :no_entry:         | :white_check_mark: | :no_entry:         | :white_check_mark: | :no_entry:         | :no_entry:         |
| UI16 navigator links          | :white_check_mark: | :white_check_mark: | :white_check_mark: | :no_entry:         | :white_check_mark: | :no_entry:         |
| UI Action to open Search      | :white_check_mark: | :no_entry:         | :no_entry:         | :no_entry:         | :no_entry:         | :no_entry:         |
| Install-able from Git         | :no_entry:         | :white_check_mark: | :no_entry:         | :white_check_mark: | :no_entry:         | :no_entry:         |
| Advanced Query function       | :no_entry:         | :no_entry:         | :white_check_mark: | :no_entry:         | :no_entry:         | :no_entry:         |
| Code Analysis                 | :no_entry:         | :no_entry:         | :no_entry:         | :white_check_mark: | :no_entry:         | :no_entry:         |
| Searches extra tables         | :no_entry:         | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :no_entry:         |
| Looks up Active WF activities | :no_entry:         | :no_entry:         | :no_entry:         | :white_check_mark: | :white_check_mark: | :no_entry:         |
| Tables used                   | 0                  | 0                  | 5                  | 0                  | 0                  | 0                  |

With all this being said, I'd love to combine my efforts into a project with any of the maintainers of the code here.

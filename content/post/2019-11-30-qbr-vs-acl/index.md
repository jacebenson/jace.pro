---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Access Control Lists (ACLs) VS Query Business Rules (QBR)"
subtitle: "There is no right answer"
summary: "There is no right answer"
authors: ["jace"]
tags: []
categories: []
date: 2019-11-30T21:05:57-06:00
lastmod: 2019-11-30T21:05:57-06:00
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
This is an issue as old as the "[HI security plugin](https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/administer/security/task/t_ActivateHighSecuritySettings.html)".  Before that, I'm not sure how ServiceNow secured their tables as it was before my time.

I've been asked in the past to remove the message "n records removed by security..." and it **can** be done, but **shouldn't**.  

Here's my take on it.

Access Control Lists (aka ACLs) are there for two reasons;

- maintainability
- second is field level control

You could replace every tables Access Control Lists with Query Business Rules.  That is not the normal place security is generally configured.  

Here's some very insightful quotes from people I respect on the topic and links to the resources;

gflewis asked in 2011

> What are the pros and cons of using an Access Control verses a Before Query Business Rule to block certain users from reading certain records? As far as I can tell, the functionality appears to be identical.

CapaJC responded in 2011

> Before query is highly preferable if you can use one. It makes the database do the work by modify the query itself. With Contextual Security, your instance has to decide per record what a user can see after fetching them from the database.
>
> With a before query rule, unavailable records are simply not there as far as the user is concerned. With Contextual Security they might get a list of 4 visible records, and the list might say 1 to 100 of 546 with a message at the bottom saying "96 records removed due to security constraints".<sup>[1]</sup>

More recently Tim W. wrote in 2018

> ACLs Vs Query Business Rules: **ACLs**, but also sometimes query business rules; but usually for performance reasons more than security.<sup>[2]</sup>


Further Reading;

- 1 - [https://community.servicenow.com/community?id=community_question&sys_id=11a68365db1cdbc01dcaf3231f961976](Community Post from 2011)
- 2 - [https://snprotips.com/blog/2018/9/18/broken-queries-and-query-rules](Tim W's Post from 2018)
- <https://www.servicenowguru.com/scripting/business-rules-scripting/controlling-record-access-before-query-business-rules/>
- <https://www.servicenowguru.com/showcase/servicenow-security-tips/> `#4`

[1]: https://community.servicenow.com/community?id=community_question&sys_id=11a68365db1cdbc01dcaf3231f961976
[2]: https://snprotips.com/blog/2018/9/18/broken-queries-and-query-rules
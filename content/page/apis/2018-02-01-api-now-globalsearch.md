---


cover: ''
date: 2018-02-01
layout: page
url: "/api-now-globalsearch/"
title: Rest GlobalSearch
tags:
- client-side-api
aliases:
- "/api/now/globalsearch/"
---
So a long while ago I had a meeting with ServiceNow to gripe about
not being able to get results of the zing search engine via script.
Looks like in Jakarta, they made that possible, just failed to
document it.
<!--more-->

I found out a few weeks ago and just haven't been able to share. The
endpoint takes two URL parameters, `sysparm_search` for the term, and
`sysparm_groups`, which I assume is a comma-separated list of sys\_id's
of text search groups.

With that being said, here's an example curl call of it;

``` {.sh .numberLines startFrom="10"}
curl --request GET \
  --url 'https://.service-now.com/api/now/globalsearch/search?sysparm_search=test&sysparm_groups=8c58a5aa0a0a0b07008047e8ef0fe07d' \
  --header 'accept: application/json' \
  --header 'authorization: Basic yourbasicauthstringhere' \
  --header 'content-type: application/json'
```
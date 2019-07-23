---
date: '2017-09-15'
keywords:
- workflow
- search
- code
layout: post
tags:
- workflow
- search
- code
title: Search for specific code and sys ids in code and workflow activities
---

Seaching for code is crucial to understand how something works. As such
there's a number of a ways to do it

-   SNC Guru's "[Find All System References to a Specific
    Record](https://www.servicenowguru.com/system-definition/find-references-specific-record/)"
-   SN Pro Tip's, "[Locate any record in any table by
    sysid](https://snprotips.com/blog/sncprotips/2015/12/locate-any-record-in-any-table-by-sysidhtml)"
-   GarretNow's "[Developer
    Search](https://garrettnow.com/2014/08/12/developer-search/)"
-   [Servicenow's Studio's Code
    Search](https://community.servicenow.com/community/develop/blog/2017/01/15/where-did-i-write-that-piece-of-code)
    as described by Goran Lundqvist

One thing none of these do is find Workflow Activities using that value.

Navigating to your
`/sys_variable_value_list.do?sysparm_query=valueLIKEa033355d95364600ab0db5e2bc674c27`
will search workflow activities for workflow "variables" containing that
sys\_id, but you may set have things with the display value, so you may
have a to do some extra or statements in there to find those. Something
to keep in mind, this table has no idea what workflow activities are on
"published" workflows, so that is frustrating but it will at least give
you a direction of what activities need updating and you can see what
workflows those are associated to.

Thanks Michael Domke for sharing this. I've referenced your [post on the
community](https://community.servicenow.com/thread/157997) numerous
times with colleagues.

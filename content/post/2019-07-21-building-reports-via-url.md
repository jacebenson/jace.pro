---
date: '2019-07-21'
keywords:
- report
- url
layout: post
title: Building reports via URL
authors: ["jace"]
---

Building reports via the URL can be really useful when you don't want to
ensure a report exists or hasn't been modified, but documentation is
pretty lacking on it.

Thankfully
[ralpho](https://community.servicenow.com/community?id=community_question&sys_id=05540369dbd8dbc01dcaf3231f9619d3#answer_9ca74435db905fc01dcaf3231f9619a3)
have seemed to figure out the url parameters.

Report type: List

| Parameter     | Value                                   |
|---------------|-----------------------------------------|
| manual\_labor | `true`                                  |
| form          | `list`                                  |
| query         | encoded query                           |
| field\_list   | comma seperated list of fields you want |
| type          | `list`                                  |
| table         | `table`                                 |

A few things to note;

1.  You can dot-walk on the fields regardless of role, so this is a
    great workaround to making some tricky reports for power users.
2.  You can add variables from sc\_req\_item if you can figure out the
    sys\_id of variable

Here's an example report url I generated for someone the other day that
included variables;

`sys_report_template.do?sysparm_field_list=variables.71cba0540f5fb600503c590be1050ec0&sysparm_type=list&sysparm_table=sc_req_item&sysparm_from_list=true&sysparm_chart_size=large&sysparm_manual_labor=true&sysparm_query=cat_item%3Dc9d980750f437200503c590be1050e8a%5Ecat_item%3Dc9d980750f437200503c590be1050e8a`

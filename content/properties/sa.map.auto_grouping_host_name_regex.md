---
layout: page
title: sa.map.auto_grouping_host_name_regex
description: "Comma separted list of RegEx that will be used to find common parts in host name when auto-grouping CIs on map. All capturing groups in regex define the common part of host name that will be evaluated in auto-grouping algorithm. RegEx on top of list has higher priority and executed before the following RegEx in the list. List format: /regex1/,/regex2/,/regex3/,... Default value:  /^([\\w-]+?)(?:\\d+[a-z]?)?$/  Sometimes it's required to logically group elements in regex, but not to include the group in common part of host name. In such cases use non-capturing group. The syntax is: (?:<content of group>) Example in default value: (?:\\d+[a-z]?)"
---
/^([\w-]+?)(?:\d+[a-z]?)?$/
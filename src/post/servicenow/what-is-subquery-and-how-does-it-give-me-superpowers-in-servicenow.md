---
title: What is SUBQUERY and how does it give me superpowers in ServiceNow?
permalink: /what-is-subquery-and-how-does-it-give-me-superpowers-in-servicenow/
author: Jace Benson
date: 2022-12-24T01:52:58.666Z
draft: false
stage: published
prism: false
---
## What is SUBQUERY

SUBQUERY is an undocumented close relative of RLQUERY - an encoded query keyword that lets one do joins in... encoded queries.

I'm sure you have read about RLQUERY in docs page Encoded query strings.  RLQUERY is the related list conditions query to find records where it's related records meet the given conditions.  (I just posted about it).

An example of SUBQUERY can be found in Relationship Related Tasks of Interaction[interaction].

RLQUERY is powerful\
I use reports UI just to access it in a gui\
I feel like a demo is needed as … joins is something I just keep poking at until I get it working

A subquery is effectively a database join.  I'll update this later but I want to get this out there and Thank Pok for sharing this months ago.  

All in all, the encoded query for a glide_list field pointing to sys_user would like like this:
`javascript: 'SUBQUERYsys_id,user,sys_user_grmember^groupIN' + [array of group sys_ids] + '^EQ^ENDSUBQUERY^active=true^EQ'`

`SUBQUERYsys_id,user,sys_user_grmember`

Means INNER JOIN sys_user_grmember M ON M.user = <sys_user>.sys_id

`groupIN' + [array of group sys_ids] + '`

Means WHERE M.group IN (...)

`active=true`

Means <sys_user>.active = true
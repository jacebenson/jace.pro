---
title: Weird service portal instance
description: "Today I was working on a widget\_Accept / Reject Solution. I found a share (link defunct) that looked like it would meet my needs. It looked great, until I tr..."
date: '2017-10-28'
tags:
  - gliderecord
  - service-portal
  - update-sets
redirectFrom:
  - /weird-service-portal-instance/
  - /p/2017-10-27-weird-service-portal-instance/
---

<!--StartFragment-->

Today I was working on a widget [Accept / Reject Solution](https://jace.pro/post/2017-10-26-sp-accept-reject/). I found a share (link defunct) that looked like it would meet my needs. It looked great, until I tried rejecting a custom extended task table.

I couldn't set it to work so I backed it out and determined I'd roll my own, that share updated a existing `sp_instance`. After I backed out the update set that `sp_instance` record was still there. I couldn't get it to fall off the page regardless what I tried;

* Record didn't exist at this point so couldn't delete it.
* Recreated empty table, and inserted the record with the referenced sys_id via [setNewGuidValue](https://sn.jace.pro/GlideRecord/#setNewGuidValue). At this point I could set Active to false, but I wanted it gone.
* Tried Deleting the record from the column record, but it deleted the actual record on it's table and not from the related list of `sp_instances`.

I ended up making a new column, moving all widgets over, then deleted the old column.

<!--EndFragment-->
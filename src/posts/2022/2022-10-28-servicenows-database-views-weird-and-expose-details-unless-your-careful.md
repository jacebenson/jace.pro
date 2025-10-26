---
title: ServiceNow database Views weird and expose details unless your careful
description: >-
  A discussion on the quirks of ServiceNow database views, including how ACLs behave
  unexpectedly and tips for securing sensitive data when using views.
date: '2022-10-28'
tags:
  - servicenow
  - gliderecord
  - acl
  - database
  - troubleshooting
  - security
redirectFrom:
  - /servicenows-database-views-weird-and-expose-details-unless-your-careful/
---

[20h](https://sndevs.slack.com/archives/C0E2G2681/p1666907158792759)

joeyday  

Can anybody help me fully grok how ACLs work on Database Views? I've created a View that mashes up three tables. A user I'm impersonating should have access to all three tables, but she can only see some fields on the Database View. If I define new ACLs at the level of the Database View, then she can suddenly view the fields she couldn't view before, but now she can no longer view the fields she could see before. Madness.



[20h](https://sndevs.slack.com/archives/C0E2G2681/p1666909250103549?thread_ts=1666907158.792759&cid=C0E2G2681)

jace  

I was looking into this. It’s a nightmare

[20h](https://sndevs.slack.com/archives/C0E2G2681/p1666909309149539?thread_ts=1666907158.792759&cid=C0E2G2681)

jace  

If you restrict access to the base tables those restrictions didn’t in my testing seem to hold against the view using them.

[19h](https://sndevs.slack.com/archives/C0E2G2681/p1666909926684049?thread_ts=1666907158.792759&cid=C0E2G2681)

joeyday  

Yeah, it's wild.

[36m](https://sndevs.slack.com/archives/C0E2G2681/p1666977477125749?thread_ts=1666907158.792759&cid=C0E2G2681)

joeyday  

Okay I solved this, but it was *weird*. The problem is I have a script in one of the ACLs that uses the `current` object. That's fine and evaluates properly when I'm just looking at records in that table, but when I look at a database view that mashes that table up with other tables, `current` turns out to be a completely different record, and that's why this was breaking. The `current` object turns out to be one of the *other* records in the mashup (wild!). So I just added a conditional in the ACL script that checks `current.tableName()` and does the right evaluation depending on whether I'm in the context of the table itself or the database view. (edited) 

- - -

New

[2m](https://sndevs.slack.com/archives/C0E2G2681/p1666979473215389?thread_ts=1666907158.792759&cid=C0E2G2681)

joeyday  

Here's my script, which of course is just an example. I almost never recommend copying something like this directly into your instance, but it gives you an idea the hoops I had to jump through.

answer = (function () {
	var currentTable = current.getTableName();
	var isMetricTable = (currentTable === 'metric_instance');
	
	if (!isMetricTable && currentTable === 'vtb_lane') {
		// This is wild, but if `current` is a vtb_lane record that
		// means we're evaluating in the context of the u_vtb_card_metric
		// database view, not the metric_instance table. In this case,
		// we're safe to assume this is a vtb_card metric and check
		// if the user has access to the board related to the lane.
		var lane_board = current.board.getRefRecord();
		return new VTBBoardSecurity().canAccess(lane_board);
	} else if (isMetricTable && current.getValue('table') === 'vtb_card') {
		// This means we're definitely evaluating in the normal context
		// of a metric_instance record and it's a vtb_card metric, so we
		// should check if the user has access to the board related
		// to the card.
		var card = new GlideRecord('vtb_card');
		card.get(current.id);
		var card_board = card.board.getRefRecord();
		return new VTBBoardSecurity().canAccess(card_board);
	}
	
	// If we made it here it's not related to a vtb_card.
	return false;
})();
joeyday  

```

```
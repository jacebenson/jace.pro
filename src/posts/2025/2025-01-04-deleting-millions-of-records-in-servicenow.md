---
title: 'Deleting a ton of records in ServiceNow'
description: >-
  Need to delete millions of records? Here are your options and what the community learned from doing it.
date: '2025-01-04'
tags: 
  - servicenow
  - performance
redirectFrom:
  - /deleting-millions-of-records-in-servicenow/
  - /p/2025-01-04-deleting-millions-of-records-in-servicenow/
---

Someone needed to delete 25+ million records from metric_instance. Here's what happened.

# TLDR

**Use Table Cleanup Policies.** They don't trigger business rules (unless iterativeDelete is set), run in 20-minute batches, and are designed for this. Make sure your query has good indexes or it'll timeout at 30 seconds. Expect days, not hours. Test first.

# The four methods

ServiceNow gives you four ways to delete data in bulk:

1. UI Actions
2. Clone Exclude Rules
3. Table Cleanup Policies (Table Cleaner)
4. JavaScript (Background Scripts)

Each has tradeoffs.

# UI Actions

The easy way.

Open the table's sys_db_object record, click "Delete All Records". Or filter a list and delete selected records.

**Pros:**
- Simple
- No code

**Cons:**
- Slow
- Limited by UI transaction quota (default 5 minutes)
- Triggers all business rules and workflows
- Tracked in update sets

Under the hood, this runs:

```js
var gr = new GlideRecord("table_name");
gr.query();
gr.deleteMultiple();
```

For 25M records, this won't work. You'll hit the transaction timeout.

# Clone Exclude Rules

The fast way.

Add the table to clone exclude rules, clone the instance. The table gets truncated.

**Pros:**
- Very fast (table truncation is cheap)

**Cons:**
- Nuclear option - deletes EVERYTHING
- Leaves broken references
- Can orphan data in table hierarchies
- Not viable for production

From the KB:

> When data is excluded by a clone, the excluded table is truncated. However, any references to the excluded records on other tables will be broken.

Only use this if you're deleting an entire table and understand the consequences.

# Table Cleanup Policies

The recommended way.

Create a table cleanup policy with your conditions. Runs on a schedule.

**Pros:**
- Set it and forget it
- Flexible conditions (not just time-based)
- Does NOT trigger business rules/workflows*
- Respects cascade delete rules

**Cons:**
- Slow
- 20 minute per batch time limit
- Query timeout at 30 seconds

*Unless the table has the `iterativeDelete` attribute set to true.

## The important details

From the community:

> Yeah, you can do 0 seconds in the age field and then add the conditions you'd like

You're not limited to age-based deletion.

> there is not a 5k limit, there is a 20 minute per batch limit

It's time-limited, not count-limited.

> Delete business rules and workflows are not triggered for table cleaner, keep that in mind

This is the key advantage. No business rules = much faster.

## The query timeout problem

> If a table cleaner rule has a query that takes longer than 30 seconds to complete, the entire table cleaner job is stopped.

Make sure you have indexes on your query fields.

> 100% make sure the query you are running has a good index

For the metric_instance case:

> definition is reference so it should search fast with that condition. so its indexed

Reference fields are already indexed.

# JavaScript / Background Scripts

The flexible way.

Write a script in Scripts - Background.

**Pros:**
- Unlimited flexibility
- Can bypass business rules/workflows
- No transaction timeout (if you uncheck "Cancel after 4 hours")

**Cons:**
- Slow
- Risky
- Requires scripting knowledge

Basic script:

```js
var gr = new GlideRecord("table_name");
gr.query();
gr.setWorkflow(false); // Bypass business rules and workflows
gr.deleteMultiple();
```

With conditions:

```js
var gr = new GlideRecord("table_name");
gr.addQuery("state", "closed");
gr.addQuery("category", "sys_id_here");
gr.query();
gr.setWorkflow(false);
gr.deleteMultiple();
```

From the KB:

> Using setWorkflow(false) will also suppress update set tracking.

This bypasses business rules, workflows, AND update set tracking.

# What the community recommended

For 25M+ records, the consensus was:

1. **Use Table Cleaner** (or Data Management Delete Jobs)
2. **Check your indexes**
3. **Schedule during off-hours**
4. **Don't worry about speed** - Days is expected
5. **Hide records from users first** - Use a before query business rule

Additional tips from the thread:

> Do write a before query or similar to remove those records from most users being able to see them

Hide the records while deletion runs so users don't interact with data you're deleting.

> Do test it in your test instance

Always.

# Monitoring progress

There's no built-in progress tracker.

Options:
- Check transaction logs (not handy)
- Create a scheduled job that runs GlideAggregate to count remaining records

From the thread:

> scheduled job to do a glideaggregate of how many are left?

That's what folks do.

# Things to consider before deleting

From KB0717791:

- What cascade deletions will occur?
- What references will be broken/cleared?
- What business rules will be triggered?
- What workflows will run?
- Will my deletion be tracked by update sets?

Plan for cleanup. The Delete Recovery tool (London+) can help roll back if needed.

# The reality

For 25+ million records, you're looking at days, not hours.

John Dahl mentioned Tim Woodruff's event-driven recursion article was written before Data Management existed:

> I think @ProfessorTim wrote that before the data management functionality existed. That article still has value where you need to do something other than deletes, but I would look at OOB functionality first.

Use the OOB tools. They're designed for this.

# References

- [KB0717791](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0717791) - Mass-Deletion and excess data management
- [KB0694151](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0694151) - How to use Table Cleaner
- [Data Management docs](https://docs.servicenow.com/bundle/washingtondc-platform-administration/page/administer/managing-data/concept/deleting-records-safely.html)
- [SN Pro Tips Event-Driven Recursion](https://snprotips.com/blog/2018/10/11/how-to-do-massive-slow-database-operations-without-slowing-down-your-instance)
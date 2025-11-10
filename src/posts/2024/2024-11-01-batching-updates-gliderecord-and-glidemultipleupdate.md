---
title: Batching Updates (GlideRecord and GlideMultipleUpdate)
description: "Update Many does not need .query()\r\nUpdate Many does not work with .chooseWindow() or .setLimit()\r\n\r\n\r\n## Glass' Putan Post\r\nUpdating Multiple Entries | Glas..."
date: '2024-11-01'
tags:
  - servicenow
  - gliderecord
redirectFrom:
  - /batching-updates-gliderecord-and-glidemultipleupdate/
  - /p/2024-11-01-batching-updates-gliderecord-and-glidemultipleupdate/
---

Update Many does not need `.query()`
Update Many does not work with `.chooseWindow()` or `.setLimit()`


## Glass' Putan Post
[Updating Multiple Entries | Glass 'putan with Service-Now (wordpress.com)](https://glassputan.wordpress.com/2012/01/26/updating-multiple-entries/)
> This does not work for inherited tables. For example if you inherit from task (incident, change) and try to use a field on task in your query clause, you will end up updating every record
> 
> How to do it:
> Normally when iterating trough a list of records, you would create a GlideRecord object, execute a query, iterate though each return and update the records one at a time.
```js
try {
   var mu = new GlideRecord("sys_user");
   mu.addQuery("column_to_search","value_to_search_on");
   my.query();
   while(mu.next()) {
      mu.column_to_set="new_value";
      mu.update();
   }
} catch(xx) {
  gs.log("Exceptionht: " + xx.message);
}
```
> Using this method also has a strong chance of timing out with larger data sets and face it, this is great for those paid by the hour, but in our situation where extra time is our time, there’s a better way to do it.
```js
try {
   var mu = new Packages.com.glide.db.MultipleUpdate("sys_user  mu.addQuery("column_to_search","value_to_search_on");
   mu.setValue("column_to_set", "new_value");
   mu.execute();
}
catch(xx) {
	gs.log("Exceptionht: " + xx.message);
}
```
> What this does:
> This package basically generates a SQL command that’s executed behind the scenes.
> In this case it would look something like:
> 
> `update sys_user set column_to_set="new_value" where column_to_search="value_to_search_on"`
> Disclaimer:
> These tips and tricks are to give you more power to handle the tasks that you may face developing and maintaining the Service-Now application. Use them at our own risk, and by all means use them in a “sand box” environment first. With great power, comes great responsibility.

## Community Post - How to do a mass 'Update All'
[Solved: Re: How to do a mass 'Update All' - ServiceNow Community](https://www.servicenow.com/community/developer-forum/how-to-do-a-mass-update-all/m-p/1462601/highlight/true#M119527)

> [Updating Multiple Entries | Glass 'putan with Service-Now](https://glassputan.wordpress.com/2012/01/26/updating-multiple-entries/ "https://glassputan.wordpress.com/2012/01/26/updating-multiple-entries/")
> 
> Because of its age it does use an old package call.   Here is an out of the box example of its use with import sets when you click "reprocess".   Make sure you use the new `GlideMultipleUpdate` API call instead.

```js
var mu = new GlideMultipleUpdate("sys_import_set_row");
mu.addQuery("sys_import_set", current.sys_id);
mu.setValue("sys_import_state", "pending");
mu.execute();
```

## Community Post - updateMultiple() doesn't update system fields
[Re: updateMultiple() doesn't update system fields ... - ServiceNow Community](https://www.servicenow.com/community/now-platform-forum/updatemultiple-doesn-t-update-system-fields-like-sys-updated-on/m-p/2616035/highlight/true#M190371)

> Matthew Watkins
> I'm surprised that this isn't documented anywhere else, but it seems this is a little known platform behavior. In almost all cases, `GlideRecord.updateMultiple()` is going to execute as an iterative update in the background (i.e. 1,000 records updated results in 1,000 UPDATE statements in SQL since we basically just loop over all the matching records and call `GlideRecord.update()` on them). During the iterative update operation, the business logic will execute that records the sys_ field changes (this is in the Java layer), but there is an exception. If you run `GlideRecord.updateMultiple` on a table that DOES NOT meet any of the criteria at the bottom, then it will not run as an iterative update, it will run as [GlideMultipleUpdate](https://www.servicenow.com/community/developer-forum/how-to-do-a-mass-update-all/m-p/1462600) (which I don't think we've ever officially documented) and it will execute a single database operation (i.e. 1,000 records updated results in only 1 UPDATE statement in SQL!). Another side effect of `GlideMultipleUpdate` is that it doesn't update the sys_ fields unless you explicitly tell it to.
> 
> 1. Table is text indexed  
> 2. Table is audited
> 
> 3. `SetWorkflow(false)` has not been called and table or it's children have any before or after update business rules  
> 4. Table has any restricted cascade rule  
> 5. Table has any currency fields  
> 6. Table has the attribute "`iterativeDelete`" set true
> 
> 7. Table has the attribute "`update_synch`" set true  
> 8. Table is registered with a Record Watcher  
> 9. Table is replicated by IDR  
> 10. Operation is against the `sys_administrative_script_transaction` table
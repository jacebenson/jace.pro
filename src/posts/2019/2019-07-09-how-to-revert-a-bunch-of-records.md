---
title: How to revert a bunch of records
description: "Today I was tasked with reverting ~2k stories states to the past value. This is a daunting task as it requires someone to look at the sys_audit\_or\_sys_histor..."
date: '2019-07-09'
tags:
  - gliderecord
  - javascript
  - tutorial
  - troubleshooting
redirectFrom:
  - /how-to-revert-a-bunch-of-records/
  - /p/2019-07-09-how-to-revert-a-bunch-of-records/
---

<!--StartFragment-->

Today I was tasked with reverting ~2k stories states to the past value. This is a daunting task as it requires someone to look at the `sys_audit` or `sys_history_line` tables. The code I wrote was a quick fix, but I think others might find it useful.

Without any delay here it is;

<!--EndFragment-->

<!--StartFragment-->

```javascript
var stories = new GlideRecord('rm_story');
var query = 'closed_by=eb8562c6b52c3000bb05d180e2312616^';
query += 'sys_updated_onONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^';
query += 'state=3';
stories.addEncodedQuery(query)
stories.query();
while(stories.next()){ // for each record
  gs.print('in story: ' + stories.getValue('number'));
  var storyID = stories.getValue('sys_id');
  // look up the last audit record for the state field
  var audit = new GlideRecord('sys_audit');
  audit.addQuery('documentkey',storyID);
  audit.addQuery('fieldname','state');
  audit.orderByDesc('record_checkpoint');
  audit.setLimit(1);
  audit.query();
  while(audit.next()){
    gs.print(audit.oldvalue + '=> ' + audit.newvalue);
    stories.setValue('state',audit.oldvalue);
    gs.print('setting state to ' + stories.state.getDisplayValue());
    stories.update();
  }
}
```

<!--EndFragment-->
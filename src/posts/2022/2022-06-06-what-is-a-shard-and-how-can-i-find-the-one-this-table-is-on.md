---
title: What is a shard and how can I find the one this table is on?
description: "I have this code snippet;\r\n\r\njavascript\r\n// The following script (or variant thereof) can be used in \r\n// /sys.scripts.do or in a server-side script to deter..."
date: '2022-06-06'
tags:
  - gliderecord
  - servicenow
redirectFrom:
  - /what-is-a-shard-and-how-can-i-find-the-one-this-table-is-on/
  - /p/2022-06-06-what-is-a-shard-and-how-can-i-find-the-one-this-table-is-on/
---

I have this code snippet;

```javascript
// The following script (or variant thereof) can be used in 
// /sys.scripts.do or in a server-side script to determine
// the current shard for a table. 

printCurrentShard('sysevent'); 

function printCurrentShard(pTableName) { 
  var gr = new GlideRecord('sys_table_rotation'); 
  if (pTableName) { 
    gr.addQuery('name', '=', pTableName); 
  } 
  gr.query(); 
  while (gr.next()) { 
    try { 
      var tre =
Packages.com.snc.db.replicate.TableRotationExtensions.get();

      var extension = tre.getExtension(gr.name); 
      var tablename = extension.getTableName(); 
    } catch (e) { 
      gs.print('Error getting current shard for table ' + gr.name); 
    } finally { 
      gs.print('The current shard of table ' + gr.name + ' is ' + tablename); 
    } 
  } 
} 
```
---
title: Rename Update Set Export File Name
description: >-
  I know I've lost an update set in the past after a clone. Not because I didn't
  back it up. But because I couldn't find it locally on my drive. Or I did but
  a...
date: '2019-09-07'
tags:
  - servicenow
redirectFrom:
  - /rename-update-set-export-file-name/
  - /p/2019-09-06-rename-update-set-export-file-name/ 
  - /2019-09-06-rename-update-set-export-file-name/
---

I know I've lost an update set in the past after a clone. Not because I didn't back it up. But because I couldn't find it locally on my drive. Or I did but all the names were too much to keep straight.

There's a bunch of ways to mitigate that loss. I'm not going to go into weather or not you should move everything up or what not. This post is about making the "Export Update Set" button give you a file name that makes more sense.

You can update a OOB Script include `ExportWithRelatedLists` to change how it works for exporting update sets. There's a function, `getFileName` that determines the name of the file. It's `table_sysid.xml`. You can add an if and rename it. Here's the code I've used to do this.

```javascript
  getFileName: function(){
  // added customized name for exported update sets
  // script include: ExportWithRelatedLists
  var name = (this.parent_table + '_' + this.sys_id + '.xml');
  if(this.parent_table == "sys_remote_update_set"){
    var sus = new GlideRecord('sys_remote_update_set');
    if(sus.get(this.sys_id)){
        name = sus.getValue('name') + '.xml';
    }
  }
  return name;
  // end of addition
      // return (this.parent_table + '_' + this.sys_id + '.xml');
  },
```

Further Reading: [Community Post](https://community.servicenow.com/community?id=community_question&sys_id=d2ca7e63dbb723c41cd8a345ca9619c7)
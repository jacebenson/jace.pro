---
date: 2018-11-21 05:00:00 +0000
author: jace
category: ''
layout: post
tags: []
title: GlideScriptEditorManager (api for apis)
---
This is a way to get the apis listed in the text editors.  

<!--more-->

Below I include a script on how to get the data, it seems to come back in some malformed JSON.  So i have to copy the JSON out and paste into something like JSON Editor Online and correct it.

```js
var tables = [
  'sys_script_include',
  'sys_script_email',
  'catalog_client_script'
];
tables.map(function(table){
  try {
    var gsem = new GlideScriptEditorManager();
    var si = new GlideRecord(tables);
    si.newRecord();
    var api = gsem.getApis(table, "script", si).toString();
    gs.info(table);
    gs.info(api);
  } catch(e) {
    // gs.info(e);
  }
});
```

I've used this code in the past to generate markdown tables for these things in the past;

```js
for(var thing in api){
    getThings(thing)
}

function getThings(thing){
    var output = ['---','---','# ?','','| Property/Method | Description |','| --- | --- |'];
    for (var prop in thing){
        output.push('| ' + prop + ' | ' + thing[prop]['!doc'] + ' |');
    }
    console.log(output.join('\n'));
}
```

---
title: Glide Script Editor Manager a class to manage APIs
description: >-
    The API of APIs. A way to get the apis listed in the text editors in ServiceNow.
date: '2018-11-21'
tags:
  - gliderecord
  - api
  - javascript
  - json
  - troubleshooting
redirectFrom:
  - /glidescripteditormanager-a-class-to-manage-apis/
  - /p/2018-11-21-glidescripteditormanager-a-class-to-manage-apis/
---

<!--StartFragment-->

This is a way to get the apis listed in the text editors.

The **GlideScriptEditorManager** **getApis** method returns a JSON\
string of context-specific APIs. The JSON returned is invalid and\
incorrectly escapes `"'"` as `"\'"`. The script below fixes this and\
outputs formatted JSON.

<!--EndFragment-->

<!--StartFragment-->

```javascript
var tables = [
  "catalog_client_script",
  "sys_script_email",
  "sys_script_include"
];

tables.map(function(table) {
  try {
    var gsem = new GlideScriptEditorManager();
    var gr = new GlideRecord(table);
    gr.newRecord();

    var apis = gsem.getApis(table, "script", gr).toString();
    // fix invalid JSON
    apis = apis.replace("\\'", "'");
    var parsed = JSON.parse(apis);
    var formatted = JSON.stringify(parsed, null, 2);

    gs.info(table);
    gs.info(formatted);
  } catch (e) {
    gs.error("ERROR: " + e);
  }
});
```
I've used this code in the past to generate markdown tables for these APIs in the past;

```javascript
for(var thing in api){
    getThings(api[thing])
}

function getThings(obj){
    //console.log(JSON.stringify(obj));
    var output = [
'---',
'date: 2018-11-21',
'',
'category: \'\'',
'layout: page',
'',
'aliases:',
' - "/' + thing.toLowerCase() + '/"',
'title: ' + thing,
'---',
      '# ' + thing,
      ''
    ];
    for (var prop in obj){
        if(prop == '!doc'){
          output.push(obj[prop]);

        output.push('| Property/Method | Description |');
        output.push('| --- | --- |');
        }
        if(prop != '!doc' && prop != '!type' && prop != 'prototype' && prop != ''){
          output.push('| ' + prop + ' | ' + obj[prop]['!doc'] + ' |');
        }
        if(prop == 'prototype'){
          for(var pprop in obj[prop]){
            output.push('| ' + pprop + ' | ' + obj[prop][pprop]['!doc'] + ' |');
          }
        }
    }
    console.log(output.join('\n'));
}
```

<!--EndFragment-->
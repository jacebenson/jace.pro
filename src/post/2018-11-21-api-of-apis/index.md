---
title: "What is GlideScriptEditorManager? An class to manage the APIs."
subtitle: ""
summary: ""
date: 2018-11-21T20:25:56-05:00
---

This is a way to get the apis listed in the text editors.

The **GlideScriptEditorManager** **getApis** method returns a JSON
string of context-specific APIs. The JSON returned is invalid and
incorrectly escapes `"'"` as `"\'"`. The script below fixes this and
outputs formatted JSON.

```js
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

I've used this code in the past to generate markdown tables for these
things in the past;

```js
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

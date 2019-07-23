---
aliases:
- '/SciptLoader/'
- '/General/ScriptLoader/'
date: '2016-01-01'
keywords:
- getScripts
layout: page
tags:
- 'client-side-api'
title: ScriptLoader
url: '/scriptloader/'
---

So if you want to reuse a script across many client scripts there's two
ways I see it being able to be done easily. One, is to use a Script
Include and a [GlideAjax](/GlideAjax) call to handle the logic server
side. Two, is to create a UI Script and load it with `ScriptLoader` call
described here or on the [developer
site](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=c_ScriptLoaderAPI).

Lets get to it. How to call this in a client script.

``` {.js}
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    ScriptLoader.getScripts('x_8821_catalog.awesome.jsdbx', function() {
        console.log('onchange');
        console.log(x_8821_catalog.awesome);
    });
    //Type appropriate comment here, and begin script below
}
```

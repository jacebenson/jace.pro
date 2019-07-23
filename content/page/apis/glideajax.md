---
aliases:
- '/GlideAjax/'
- '/ajax/'
date: '2016-01-01'
keywords:
- AbstractAjaxProcessor
- addParam
- getXML
layout: page
tags:
- 'client-side-api'
- 'server-side-api'
title: GlideAjax Examples
url: '/glideajax/'
---

# GlideAjax

When using GlideAjax I have to always look up the example on the
[wiki](http://wiki.servicenow.com/index.php?title=GlideAjax). One thing
that I've learned is if you create a `initialize` function, it will
break the client-callable script include.

Every GlideAjax call has at least two components required. The script
include and the client side script.

Below I'll put down a simple example of how I start up on these things.

## Script Include

``` {.js}
var SomeUtil = Class.create();
SomeUtil.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    // If you want to use initialize you can only if you include
    // AbstractAjaxProcessor with something like this;
    /*
    initialize: function(request, responseXML, gc) {
        global.AbstractAjaxProcessor.prototype.initialize.call(this, request, responseXML, gc);
        // Your code
    },
    */
    awesomeFunction: function(){
        var inputObj = JSON.parse(this.getParameter('sysparm_obj'));
        var returnObj = {
            from:"server",
            input: inputObj
        };
        return JSON.stringify(returnObj);
    },
    type: 'SomeUtil'
});
```

## Client Script

``` {.js}
var ga = new GlideAjax('global.SomeUtil');
ga.addParam('sysparm_name', 'awesomeFunction');
ga.addParam('sysparm_obj', JSON.stringify({"hoo":"raa"}));
ga.getXML(function(response){
    var responseDocument = response.responseXML.documentElement;
    var answer = responseDocument.getAttribute('answer');
    var serverObj = JSON.parse(answer);
    console.log(serverObj);
});
```

**Note** It seems that if you use the function name of `getName` it
fails to return, so avoid that name I guess.

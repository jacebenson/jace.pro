---
aliases:
- '/g\_ck/'
date: '2018-05-12'
layout: post
tags:
- rest
title: What is g ck
authors: ["jace"]
---

What is `g_ck` and why should I care?

`g_ck` is the current sessions token for authentication.

## Why would you want to use this or know about this

It's useful for making rest requests while on the system to the system.

You might be thinking, "That seems silly". Trust me it does. However, if
you want to let a page load quickly and have it load the rest of the
content later, doing this is great.

## How do I use it

First, you have to make sure you have it, once you understand what it
is, you can generate it if you don't have access to it with the
following code server side;

```js
var g_ck = gs.getSession().getSessionToken();
```

So if on a UI Macro or UI Page, wrap that with `<g:evaluate>` tags. If
on a Service Portal, toss that in your server script.

Once you have it you can use it in place of authentication, if you omit
it, you will be asked to authenticate.

Below is a slightly modified script generated from the API Explorer.

```js
var requestBody = "";
var endpoint = document.location.origin + "/api/now/table/sys_user?";
endpoint += "sysparm_query=active%3Dtrue&";
endpoint += "sysparm_fields=user_name&";
endpoint += "sysparm_limit=1"
var client=new XMLHttpRequest();
client.open("get", endpoint);

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

// Eg. UserName="admin", Password="admin" for this code sample.
// Normally this is what it shows.
// client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'admin'));

// However if you're already authenticated. You can use X-UserToken
client.setRequestHeader('X-UserToken', g_ck);

client.onreadystatechange = function() {
    if(this.readyState == this.DONE) {
        // Going to console log instead
        // document.getElementById("response").innerHTML=this.status + this.response;
        console.log(this.response);
    }
};
client.send(requestBody);
/*
 * Response I get
 * {"result":[{"user_name":"abel.tuter"}]}
 */
```

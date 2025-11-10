---
title: What is g_ck
description: "What is\_g_ck\_and why should I care?\r\n\r\ng_ck\_is the current sessions token for authentication.\r\n\r\n## Why would you want to use this or know about this\r\n\r\nIt's..."
date: '2018-05-13'
tags:
  - servicenow
redirectFrom:
  - /what-is-g_ck/
  - /p/2018-05-12-what-is-g_ck/
---

<!--StartFragment-->

What is `g_ck` and why should I care?

`g_ck` is the current sessions token for authentication.

## Why would you want to use this or know about this

It's useful for making rest requests while on the system to the system.

You might be thinking, "That seems silly". Trust me it does. If you want to let a page load then have it load the rest of the content later, doing this is great.

## How do I use it

First, you have to make sure you have it, once you understand it, you can generate it if you don't have access to it with the following code server side;

```javascript
var g_ck = gs.getSession().getSessionToken();
```

If on a UI Macro or UI Page, wrap that with `<g:evaluate>` tags. If on a Service Portal, toss that in your server script.

Once you have it you can use it in place of authentication, if you omit it, you will be asked to authenticate.

Below is a slightly modified script generated from the API Explorer.

```javascript
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
// Generally this is what it shows.
// client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'admin'));

// If you're already authenticated. You can use X-UserToken
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

<!--EndFragment-->
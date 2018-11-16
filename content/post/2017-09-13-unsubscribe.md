---
author: jace
date: 2017-09-13 00:00:00 +0000
layout: post
category: []
tags:
- missing ootb
- email
title: Unsubscribing from notification preferences in email
aliases:
- "/unsubscribe/"

---
I was asked to have users verify they actually want to unsubscribe from an email instead of just assuming they really want to unsubscribe.  To do this I made a simple UI Page.  Below is the code;

<!--more--> 

Below is the mailscript and ui page. They work together.

```js
${mail_script:unsubscribe_emails}
```

```js
//name this unsubscribe_emails
(function runMailScript(current, template, email, email_action, event) {
    var link = '';
    link += '<a href="' + gs.getProperty('glide.servlet.uri');
    //link += 'unsubscribe.do?sysparm_notification=' + email_action.sys_id;
    link += 'verify_unsubscribe.do?notification=' + email_action.sys_id;
    link += '">Unsubscribe from this email.</a><br />\n';
    //can this be unsubscribed from?
    var notification = new GlideRecord('sysevent_email_action');
    notification.addQuery('active=true^sys_id=' + email_action.sys_id);
    //this controls when someone can unsubscribe
    notification.addQuery('mandatory=false'); 
    notification.query();
    if (notification.next()) {
        template.print(link);
    }
})(current, template, email, email_action, event);
```

```xml
<!--Name: verify_unsubscribe-->
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" 
         xmlns:j="jelly:core" 
         xmlns:g="glide" 
         xmlns:j2="null" 
         xmlns:g2="null">
  <g:evaluate>
    var type = false;
  var notificationGR = new GlideRecord('sysevent_email_action');
  if(notificationGR.get(RP.getParameterValue('notification'))){
    type = notificationGR.getValue('name');
  }
  </g:evaluate>
  <j:if test="${type!=false}">
    <form>
    <h1>Are you sure you want to unsubscribe from this type of notification?</h1>
    <p>By clicking "Unsubscribe" you will no longer receive any notifications for "${type}".</p>
    <a href="unsubscribe.do?sysparm_notification=${RP.getParameterValue('notification')}" 
         class="btn btn-primary">
    Unsubscribe
    </a>
  </form>
  </j:if>
  <j:if test="${type==false}">
    <h1>Oops there was an error.</h1>
  </j:if>
</j:jelly>
```
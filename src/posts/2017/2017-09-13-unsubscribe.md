---
title: Two Step Unsubscribe
description: >-
  A stakeholder asked to have users verify they actually want to unsubscribe
  from an email instead of assuming they want to unsubscribe. To do this I made
  a si...
date: '2017-09-14'
tags:
  - gliderecord
  - notifications
  - javascript
  - xml
redirectFrom:
  - /unsubscribe/
---

<!--StartFragment-->

A stakeholder asked to have users verify they actually want to unsubscribe from an email instead of assuming they want to unsubscribe. To do this I made a simple UI Page. Below is the code

Below is the mail script and ui page. They work together.

## Callable Mail Script Code

```js
${mail_script:unsubscribe_emails}
```

## Mail Script

```javascript
//name this unsubscribe_emails
(function runMailScript(
  current, 
  template, 
  email, 
  email_action, 
  event
) {
  var link = '';
  var emailSysId = email_action.sys_id
  var instanceLink = gs.getProperty('glide.servlet.uri');
  link += '<a href="' + instanceLink;
  link += 'verify_unsubscribe.do?';
  link += 'notification=' + emailSysId;
  link += '">Unsubscribe from this email.</a><br />\n';
  //can this be unsubscribed from?
  var notification = new GlideRecord('sysevent_email_action');
  notification.addQuery('active=true^sys_id=' + emailSysId);
  //this controls when someone can unsubscribe
  notification.addQuery('mandatory=false'); 
  notification.query();
  if (notification.next()) {
    template.print(link);
  }
})(current, template, email, email_action, event);
```

## UI Page

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
    <h1>
      Are you sure you want to unsubscribe from this notification?
    </h1>
    <p>
      By clicking "Unsubscribe" you will no longer receive
      any notifications for "${type}".
    </p>
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

<!--EndFragment-->
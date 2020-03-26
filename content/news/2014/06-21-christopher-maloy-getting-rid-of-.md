---
title: "Getting rid of No Sensors Defined error when sending SOAP messages in a workflow"
date: 2014-06-20T09:53:09.000Z
authors: ["Christopher.Maloy"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2c3d2ae5dbd0dbc01dcaf3231f96199b"
---
<p>If you are using a "Run Script" activity to send a SOAP message in a workflow, and are posting that message on the ECC queue with our Discovery plugin enabled, you will see the "No Sensors Defined" error show up on the ECC queue input response.</p><p></p><p>If you want to avoid seeing that you need to do the following in your code:</p><p></p><p>&lt;code&gt;</p><p>   var s = new SOAPMessage('Name', 'Function');</p><p>   s.setStringParameter('paramName', 'value');</p><p>   <strong>s.setEccParameter('skip_sensor', true);</strong></p><p>   s.post(true);</p><p>&lt;/code&gt;</p><p></p><p>Hope this helps someone out there in SN javascript land.   Cheers.</p>
---
title: "ServiceNow FlowDesigner  IntegrationHub Twitter Integration"
date: 2018-05-05T02:07:09.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=efc60a3edb355700c310fb651f9619f0"
---
<p><img src="edc5427adb355700c310fb651f9619ab.iix" width="460" height="381" /></p>
<p> </p>
<p>Getting the hang of FlowDesigner and IntegrationHub after last weeks developer meetup in Amsterdam, I wanted to build a new Integration with Twitter. With some guidance from colleagues, I got it working!</p>
<p>I have created a 23 min video, explaining how it&#39;s built. <a href="https://www.youtube.com/watch?v&#61;1bhHwhLstmQ" target="_blank" rel="nofollow">Watch on YouTube</a>, to use timestamps:<br /><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/1bhHwhLstmQ"></iframe></p>
<p> </p>
<p>Because Twitter does not support OAuth 2.0, but only 1.0 it was a bit harder to get things to work.</p>
<p>Important takeaway is to first get the signature to work, by mimicking the provided sample values, until you get the exact same hash provided in the example, before you proceed with doing your own request to Twitter.</p>
<p>Be sure the Flowdesigner plugin is Activated, including Plugin: ServiceNow IntegrationHub Installer (maint required). If you&#39;re using a developer instance, enable Flowdesigner and IntegrationHub from:https://developer.servicenow.com/app.do#!/instance</p>
<p>I have created it as a Scoped app. You can get it from: https://github.com/arnoudkooi/TwitterTweet From here you can Import it via Studio Sourcecontrol to your own DEV instance.</p>
<p>IMPORTANT<br />Be Sure You have Activation FlowDesigner and IntegrationHub before Importing from GitHub! It maybe needed to grant the roles oath_admin and web_service_admin</p>
<p> </p>
<p>BTW: Check out <a href="https://chrome.google.com/webstore/detail/servicenow-utils/jgaodbdddndbaijmcljdbglhpdhnjobg" target="_blank" rel="nofollow">ServiceNow Chrome Utils Extension</a></p>
<h3> </h3>
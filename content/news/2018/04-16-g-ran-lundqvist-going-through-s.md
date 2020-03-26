---
title: "Going through some useful system properties"
date: 2018-04-15T17:47:45.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=034e12a4dbe91bc0fc5b7a9e0f961981"
---
<p>System properties is a great functionality to store configuration settings that are used within the instance. Often it’s told to use this to hold values instead of e.g. hardcoding a sys_id in the code of a business rule. Since it’s easier to administrate and doesn’t require an update of the code when you just want to change the value. This can then easy be done in the system property instead of the business rule code.</p>
<p>But, and there is of course times when you shouldn’t do like this either. If you a system property too often, you can run into performance issues.</p>
<p>So when are you going to use system properties as a solution for your configuration? The answer is when storing configuration data that rarely or never changes its value. To give a bit of better of the when would be that if a system property is changing its value more than once a month, then it shouldn’t be stored as a system property but instead in a custom table that holds the configuration.</p>
<p>The reason behind it all is how ServiceNow handles changes on system properties. When you change a system property, ServiceNow flushes the cache to make sure that all the nodes in the cluster is in sync. Doing this can have a huge effect on the performance for 1-10 minutes when it actually rebuilds the whole cache and it’s while the cache is rebuilding the degradation in performance occurs. When the cache is flushed, all the queries instead goes to the database which can result in: higher CPU usages in both the database servers and the application nods and higher response times.</p>
<p>This means that changing a system property has the same effect as writing cache.do in the url. And I didn’t myself realize from the start that changing a system property like that could have that huge effect on the systems performance.</p>
<p>Sometimes you read about a specific system property that either someone has suggested for a solution on e.g. the community or even specified in the documentation site. Then you go to your instance and into system properties and there you will notice that it doesn’t exist. Don’t be alarmed of this. Not all system properties exists as a record in the instance from OOB. Some of the properties needs to be created by you and it isn’t a big deal. Just make sure you enter the correct name and value and it will work as a charm.</p>
<p>In the video below I will go through and show you some useful system properties I have found under the years of configuring. If you are missing some, please throw in a comment and share with the rest.</p>
<p> </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/aX9pSQp76aA"></iframe></p>
<p>//G</p>
<p> </p>
<p><img src="742e5e64dbe91bc0fc5b7a9e0f961944.iix" />  </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
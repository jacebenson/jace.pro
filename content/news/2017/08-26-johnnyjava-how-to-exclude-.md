---
title: "How to exclude Discovery based on CI attributes such as name"
date: 2017-08-25T19:34:08.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=744daee5dbd0dbc01dcaf3231f961997"
---
<p>In preparing to write this up, I feel I may becoming the King of Excludes. I&#39;ve written about <a class="jive_macro jive_macro_blogpost" title="Quick Excludes for Discovery Schedules" href="/community?id&#61;community_blog&amp;sys_id&#61;1ffda62ddbd0dbc01dcaf3231f9619af" rel="nofollow">Quick Excludes for Discovery Schedules</a> to easily add excludes based on IP Address data for devices already in the CMDB from other integration sources. Today I&#39;m going to show you another way to exclude based on interjecting a hostname regex matching pattern to keep Discovery from adding Hosts to the CDMB based on the name of the device.</p>
<p> </p>
<p>Take a regex such as the following:</p>
<p> </p>
<p>//hostnames ending in p01 or P2 or similar</p>
<p>var regexp &#61; new Pattern(&#34;[pP][0-9]$&#34;);</p>
<p> </p>
<p>This simple pattern is designed to match on strings with a naming convention that indicates production environment server names. But where to place it?</p>
<p> </p>
<p>One idea would be to block the insert against the cmdb_ci_hardware table using a Business Rule. An attempt to do this using gr.setAbortAction(true) could work, but what about all the time spent exploring those devices? Discovery Probes and Sensors do a lot of work to interrogate the target servers before and after record insertion. If we aren&#39;t interested in all that delicious data - <em>for whatever reason</em> - why should we spend that time in the Exploration phase?</p>
<p> </p>
<p>The <a title="ocs.servicenow.com/bundle/jakarta-servicenow-platform/page/product/configuration-management/concept/c_IdentificationRules.html" href="https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/product/configuration-management/concept/c_IdentificationRules.html" rel="nofollow">Identification</a> phase is where Discovery decides if a CI record already exists and decides to write the data into a new record or update a matching record. If we can subvert this process, then we can efficiently stop Exploration and even nicely log what we are up to. One day we might want to add those devices, and it would be nice to leave it clear why these devices aren&#39;t showing up in the CMDB.</p>
<p> </p>
<p>The Sensors involved are calling the DiscoveryJSONIDSensor and DiscoveryIDSensor Script Includes. See here the code we will add to the DiscoverJSONIDSensor:</p>
<p> </p>
<p>//add this at line 89 of DiscoveryJSONIDSensor and DiscoveryIDSensor Script Includes</p>
<p>var regexp &#61; new Pattern(&#34;[pP][0-9]$&#34;); //hostnames ending in p01 or P2 or similar</p>
<p>var host_name &#61; this.ciData.data.host_name;</p>
<p>if (!host_name)</p>
<p>      host_name &#61; this.ciData.data.name;</p>
<p> </p>
<p>if (!regexp.test(host_name)){</p>
<p>      this.explore &#61; false;</p>
<p>      this.setTriggerProbes(false);        </p>
<p>      logger.info(&#39;Non-prod machine: &#39;&#43; host_name &#43;&#39;. Not exploring device&#39;, this.type, this.getEccQueueId());</p>
<p>      return false;</p>
<p>} else {</p>
<p>      logger.info(&#39;Production Machine: &#39;&#43; host_name &#43;&#39;. Continue to explore device&#39;, this.type, this.getEccQueueId());</p>
<p>}</p>
<p> </p>
<p>I&#39;ve attached the fully patched version of that script for reference. See here the output in the Discovery Logs, showing neatly what we have done:</p>
<p> </p>
<p><img class="image-1 jive-image" style="width: 620px; height: 159px;" src="84d667b1dbdc5b048c8ef4621f9619c8.iix" alt="Resulting Discovery Logs.png" /></p>
<p> </p>
<p>I imagine we could also inject properties into the ciData.data object like environment. I haven&#39;t tried that yet, but I would encourage everyone to familiarize themselves with the Discovery Script Includes, including the CI class which is the basis of the ciData object. I welcome any and all comments, questions and concerns.</p>
<p> </p>
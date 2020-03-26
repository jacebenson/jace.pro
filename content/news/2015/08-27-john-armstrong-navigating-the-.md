---
title: "Navigating the ServiceNow Classic Mobile UI"
date: 2015-08-26T21:18:37.000Z
authors: ["John Armstrong"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f85e2aaddbd0dbc01dcaf3231f96197f"
---
<p>As you may have noticed when <a title="ww.youtube.com/watch?v&#61;1tgBqcY4RTk" href="https://www.youtube.com/watch?v&#61;1tgBqcY4RTk" rel="nofollow">navigating the smartphone mobile interface</a>, the URL format is significantly different from what&#39;s used in the Desktop and Tablet UI.   <span style="font-size: 13.3333330154419px;">This is important for a few reasons.   In additional to being able to identify where you&#39;re looking on the instance using the URL, this information can also be used to create links and modules specifically for use in the Mobile UI, as will be shown in the examples below.   </span>I hope to better explain the URL structure, including information on how to apply filter options and auto-populate field data using the URL. <a title="" href="/community/service-automation-platform/user-interface/blog/2015/08/19/filtering-and-url-navigation-in-the-mobile-ui" rel="nofollow">Filter options</a> and field data in the URL can be helpful both when viewing existing URLs to understand their content or in creating your own URLs to use in scripts.</p>
<p> </p>
<p> </p>
<p>This is the basic schema for a mobile URL:</p>
<p><a style="font-family: &#39;andale mono&#39;, times; line-height: 1.5em;" title="" href="/" target="_blank" rel="noopener noreferrer nofollow">https://</a><span style="font-family: &#39;andale mono&#39;, times; line-height: 1.5em;">&lt;base URL&gt;/$m.do#/&lt;list/form&gt;/&lt;table&gt;/q:&lt;query&gt;^&lt;query&gt;^EQ</span></p>
<p> </p>
<h1>Elements of a mobile URL include:</h1>
<table border="1"><tbody><tr><td>$m.do#</td><td>This is where the mobile interface is specified.   Browsing to $m.do in any supported browser will display the Mobile UI.</td></tr><tr><td>&lt;list/form&gt;</td><td>Using either &#34;list&#34; or &#34;form&#34; here will specify whether a list of form will be displayed by the URL.</td></tr><tr><td>&lt;table&gt;</td><td>This is the table being accessed, such as &#34;incident&#34; or &#34;change_request.&#34;</td></tr><tr><td>q:&lt;query&gt;^</td><td>This is how queries are created.   These begin with q: and are separated by the carat (^) symbol. Examples below:
<ul><li><span style="font-family: &#39;andale mono&#39;, times;"><strong>/$m.do#/list/incident</strong></span>: displays a list of all incidents</li><li><span style="font-family: &#39;andale mono&#39;, times;"><strong>/$m.do#/list/incident/q:active&#61;true</strong></span>: displays a list of all incidents where the &#34;active&#34; field is true</li><li><strong><span style="font-family: &#39;andale mono&#39;, times;">/$m.do#/!list/incident/q:active&#61;true^priority&#61;1</span>:</strong>   displays a list of all incidents where the &#34;active&#34; field is true and the priority field is 1.</li><li><strong><span style="font-family: &#39;andale mono&#39;, times;">/$m.do#/form/incident/d71da88ac0a801670061eabfe4b28f77</span>:   </strong>Displays the form for the incident record where the sys ID matches the sys ID &#34;d71da88ac0a801670061eabfe4b28f77&#34;.   As with desktop URLs, form URLs in mobile use the record&#39;s sys ID.</li><li><span style="font-family: &#39;andale mono&#39;, times;"><strong>/$m.do#/form/incident/-1:</strong></span>   As with the Desktop UI, a -1 can be used in place of a sys ID to create a new record.</li></ul>
</td></tr><tr><td>^EQ</td><td>The EQ denotes the end of the Query.</td></tr></tbody></table>
<p> </p>
<p> </p>
<h2>Generating a Record with a URL Link</h2>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-family: &#39;Helvetica Neue&#39;;"><span style="font-size: 14px; line-height: 1.5em;">Forms in mobile can be displayed with pre-</span><span style="font-size: 14px; line-height: 21px;">populated</span><span style="font-size: 14px; line-height: 1.5em;"> fields, as they can in the desktop UI.   This can be useful, for example, when creating modules for your mobile UI.   For, example, take the &#34;Create New&#34; mobile module used to create new incidents in the mobile UI.   </span></span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="line-height: 1.5em; font-size: 14px; font-family: &#39;Helvetica Neue&#39;;">You can find this on your instance by navigating to <strong>System Mobile UI â†’ Navigator Apps</strong>, then selecting the &#34;Incident&#34; Application Menu.   In the Modules related list you&#39;ll see &#34;Create New&#34;</span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="line-height: 1.5em; font-size: 14px; font-family: &#39;Helvetica Neue&#39;;">If you look at the Path field for this item, you&#39;ll see the URL used to create a new incident in the Mobile UI.</span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<center style="font-size: 13.3333330154419px;">
<table border="1"><tbody><tr><td>form/incident/-1</td></tr></tbody></table>
</center>
<p> </p>
<p> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Let&#39;s say, for example, we wanted to create a module that created new incidents with pre-populated priority, short description, and assignment group.   This is an example URL we could use to accomplish that:</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<center>
<table border="1"><tbody><tr><td>/$m.do#/form/incident/-1/priority&#61;2^short_description&#61;MY TEST^assignment_group&#61;d625dccec0a8016700a222a0f7900d06</td></tr></tbody></table>
</center>
<p> </p>
<p> </p>
<p><strong>Let me break this down for you a bit:</strong></p>
<table border="1"><tbody><tr><td>/$m.do#/form/incident/-1/</td><td>As with the desktop URL navigation, using a sys_id of -1 directs the instance to a new record form.</td></tr><tr><td>priority&#61;2</td><td>This sets the priority to &#34;2 - High.&#34;   When setting values for choices, the value (2) is used rather than the label.</td></tr><tr><td>^</td><td>As with <a title="" href="/community/service-automation-platform/user-interface/blog/2015/08/19/filtering-and-url-navigation-in-the-mobile-ui" rel="nofollow">list filters</a>, each field is separated by a caret(^) symbol.</td></tr><tr><td>short_description&#61;MY TEST</td><td>This sets the short description to &#34;MY TEST.&#34;   Spaces are allowed, but characters that have meaning within a URL, for example a &#34; \ &#34; character, will not work and will break the URL.</td></tr><tr><td>assignment_group&#61;d625dccec0a8016700a222a0f7900d06</td><td>This last field is a reference field.   In this case, we&#39;re setting the Assignment Group to &#34;Service Desk.&#34;   For a reference field like this one, we use the sys_id of the records being referenced, which, in this case is the is a sys_user_group record.</td></tr></tbody></table>
<p> </p>
<p> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-size: 18px;"><strong>An Example of Use within ServiceNow</strong></span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">For an example of when something like this can be helpful, let&#39;s take a look at &#34;Create Incident&#34; record producer.   On this record producer is a script that first detects whether or not the scripts is being run in the Mobile UI, and then provides an appropriate link based on that information.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-family: &#39;andale mono&#39;, times;">var isMobile &#61; GlideMobileExtensions.getDeviceType() &#61;&#61; &#39;m&#39;; </span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-family: &#39;andale mono&#39;, times;">var link &#61; isMobile ? &#39;#/list/incident/q:active&#61;true%5Ecaller_id&#61;javascript:gs.user_id()%5EEQ&#39; : &#39;home.do&#39;; </span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">In the above script, when the Mobile UI is detected, a link using the URL formatting for mobile is selected. This will link to a list of active incidents where the Caller ID field matches the current user:</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><img class="image-0 jive-image" style="height: 169px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="ab36b379dbd05704ed6af3231f9619ca.iix" alt="generate record.jpeg" /></p>
<p> </p>
<p>As we&#39;ve seen above, knowing the URL format for mobile will allow you to create links and modules for use in the Mobile UI.   With this information, you&#39;ll be able to create content on your instance specifically for mobile use, and provide a better experience for your mobile users.</p>
<p> </p>
<p>A quick note about javascript used within mobile links:   While the example above works as expected, the Mobile UI does not support dynamic urls which direct to a form (specific record).</p>
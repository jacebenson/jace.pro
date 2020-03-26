---
title: "Community Code Snippets  Logging Some Notes on Workflows"
date: 2016-07-10T18:39:23.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=152d26e5dbd0dbc01dcaf3231f9619d0"
---
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-weight: bold;">NOTE</span><span style="font-family: Arial; color: #666666;">: </span><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">MY POSTINGS REFLECT MY OWN VIEWS AND DO NOT NECESSARILY REPRESENT THE VIEWS OF MY EMPLOYER, ACCENTURE. </span></p>
<p> </p>
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">DIFFICULTY LEVEL:   </span><span style="font-family: &#39;Times New Roman&#39;; color: #bf9000; font-weight: bold;">INTERMEDIATE</span></p>
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">Assumes a rudimentary knowledge and/or familiarity of scripting in ServiceNow.</span></p>
<p><span style="font-family: Arial; color: #666666;">____________________________________________________________________________</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">In my previous two articles I tackled variable substitution using GlideSystem methods in server-side scripts, and then also how to apply this and other techniques in Business rules.   Here I will be showing how to use these techniques inside Workflows, and demonstrate new methods of logging.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">My previous two articles in case you want to do some extra digging:</span></p>
<p> </p>
<p style="margin-left: 36pt;"><span style="font-size: 12pt;"><a href="community?id&#61;community_blog&amp;sys_id&#61;ba8de669dbd0dbc01dcaf3231f96195b" rel="nofollow"><span style="font-family: Arial; color: #266fc8;">Community Code Snippets - Logging: Some Notes on Variable Substitution</span></a></span></p>
<p style="margin-left: 36pt;"><span style="font-size: 12pt;"><a href="community?id&#61;community_blog&amp;sys_id&#61;c05ee6addbd0dbc01dcaf3231f96196a" rel="nofollow"><span style="font-family: Arial; color: #266fc8;">Community Code Snippets - Logging: Some Notes on Business Rules</span></a></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Prerequisite:   </span><span style="font-family: Arial; color: #000000;">Basic knowledge on how to create a Workflow and use the Workflow Editor.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">With the Geneva release we received three new logging methods attached to the workflow object:</span></p>
<p> </p>
<p style="margin-left: 36pt;"><span style="font-size: 12pt; font-family: Arial; color: #000000;">workflow.info</span></p>
<p style="margin-left: 36pt;"><span style="font-size: 12pt; font-family: Arial; color: #000000;">workflow.warn</span></p>
<p style="margin-left: 36pt;"><span style="font-size: 12pt; font-family: Arial; color: #000000;">workflow.error</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">These work very similarly to their GlideSystem analogs (sic. gs.info), but with one really significant difference:   They all three write to the workflow context log!   Yes!   No more searching through the System Log looking for my workflow logging messages!!!</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Oh yeah, and like their gs analogs (and unlike gs.log) they are also scope safe.   :-)</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">I created a simple workflow to show how to test these out:</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Name</span><span style="font-family: Arial; color: #000000;">: Logging Test</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Table</span><span style="font-family: Arial; color: #000000;">: Global [global]</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Description</span><span style="font-family: Arial; color: #000000;">: Workflow logging examples</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">If condition matches</span><span style="font-family: Arial; color: #000000;">: -- None --</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">I placed a Run Script Activity on the form:</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Name</span><span style="font-family: Arial; color: #000000;">: before</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Script</span><span style="font-family: Arial; color: #000000;">:</span></span><span style="font-size: 12pt;"><br /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var location &#61; &#39;WF:&#39; &#43; context.name &#43; &#39;.&#39; &#43; activity.name;     </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">// Current Factory</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var current &#61; new GlideRecord(&#39;incident&#39;);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">current.addActiveQuery();</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">current.setLimit(1);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">current.orderByDesc(&#39;number&#39;);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">current.query();</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">current.next();</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">// Set up some variables</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var number &#61; current.number;   </span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var caller &#61; current.caller_id.getDisplayValue();   </span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var category &#61; current.category.getDisplayValue();   </span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var impact &#61; current.getValue(&#39;impact&#39;);   </span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var priority &#61; current.getValue(&#39;priority&#39;);   </span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var urgency &#61; current.getValue(&#39;urgency&#39;);   </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">// Create the test message</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var message &#61; gs.getMessage(&#39;---&gt;[{6}] \n\tNumber:\t\t{0} \n\tCaller:\t\t{1} \n\tCategory:\t{2} \n\tImpact:\t\t{3}\n\tPriority:\t{4}\n\tUrgency:\t{5}\n&#39;,     </span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">       [number, caller, category, impact, priority, urgency, location]);   </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">// Send it to the System Log</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">gs.log(message, location);   // the old way</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">// Send it to the Workflow Context log AND the System Log</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">workflow.info(message);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">workflow.warn(message);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">workflow.error(message);</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">You can see that I have utilized the same code as that used in the Fix Script in my original <a title="" href="community/service-automation-platform/scripting/blog/2016/07/06/community-code-snippets-logging-some-notes-on-variable-substitution" rel="nofollow">article</a>.   Instead of gs.info, etc. I used the workflow objects instead.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">These write not only to the Workflow Context log, but also to the System log.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">I wired up the workflow like this:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/Cea-7FwPqjkqMOnh09Kggytk60tZWwvm_yPIUdqDQgo0-L_fpJN4-mXgiQdWjxpzTH_6lBG5Gu4BwQ6cBv7DkseJ2O518DlDC3z_pslxcHF52cSO7gZDBIWUMiCLvvG19EOLKTFO" width="624" height="421" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Ran the workflow...</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/MLd-rcI0L-Yr6sMW7k1wa7WSi10BsqtkUZt6mir7OMo1XzzhhDXlo84yxrDqgpXBhrfvn2PuZ0MZKelWIXZM-P2NKMCiUkoS7qoDPWuHHUhE2RLZqgPcDlc1OBoJagldIxYVw9Q-" width="624" height="487" /></span></p>
<p><span style="font-size: 12pt;"><br /><br /></span></p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">...and once finished I then navigated to Workflow -&gt; Live Workflows -&gt; All Contexts.   I then brought up my most recent context.   </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">You can see that the workflow objects wrote the three logging statements to the Workflow Context log:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/HvpsS_Zm6WjcYKE-R7b2JTnbLdw-MKXQHnpAiRgq8oEd1I0Hk1-QiIjRaCrCbQTTlMdOlIj4OvnI7XnSYfxddggMkKdOZxZ1HyJNA2muevqazlv-Q8LNKM8pAYdABjmJgIHMtk0P" width="624" height="353" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">This is slick.   The need for bringing up the System Log list view (which, if you have a lot of entries in it, could take forever to display), and searching through the results was just made obsolete!</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">So, let&#39;s see what was actually written into the System Log:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/Yo87gpN2P17WufWOq1dC09PIHE2BcWWY3wOzj-EeZUbCQqHL5HnGlKGOF_pDHK6hFBR1AnBZW--pu2-8prxtTLB3IrZcHH-VG7iEAUUeUZGIE7m_UXzmDKvoayI4sVWu8HUXNSuT" width="624" height="356" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">You can see that all three Workflow logging statements were written out, as was the gs.log.   Note that you still should follow the best practice of including the identification information in your message.   This will short-cut having to search out mystery messages in the log.</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold; text-decoration: underline;">Remember</span><span style="font-family: Arial; color: #000000;"> to remove them from your code </span><span style="font-family: Arial; color: #000000; font-weight: bold; font-style: italic; text-decoration: underline;">before</span><span style="font-family: Arial; color: #000000;"> it goes to production!</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">I created an update set for this workflow and attached it to the article.</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">For more information on the Workflow object see the </span><a href="http://wiki.servicenow.com/index.php?title&#61;Scoped_Workflow_API_Reference#gsc.tab&#61;0" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">wiki</span></a><span style="font-family: Arial; color: #000000;">.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">For more information on GlideSystem see the </span><a href="http://wiki.servicenow.com/index.php?title&#61;GlideSystem" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">wiki</span></a><span style="font-family: Arial; color: #000000;">.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">I want to highly recommend taking the </span><a href="http://www.servicenow.com/services/training-and-certification/scripting-in-servicenow-training.html" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">ServiceNow Scripting</span></a><span style="font-family: Arial; color: #000000;"> training class should you get the opportunity.   The class has an entire module covering Workflow Scripting.</span></span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #000000;">Steven Bell</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/eZtmYidOgxWPvdM4OTgO-LZvH8Sr7r5MGCyEG7cecdsNxz4EE3u486EcFyAaNaeRQHSgcUajyQb3w5edtAkg5WIYeKAJlrUjfO0glzI9AIWDoPtKz6plvkpLyJFCxXWqxOt-yyYN" alt="accenture logo small.jpg" width="243" height="65" /></span><span style="font-size: 16px; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/yfIiLmOSmiLJa5fvC1IMoyagAf-Afh2nagyOq9H_7Lwuc04We7HOK1oqoit-lzFCmj0w0NGCxvWBLjQR2rwL7FtRd45V0FQ9VAOVsVlkKNbXXP-F5XLYblwXKxY0V7k4f3UkIN8i" width="135" height="48" /></span><span style="font-size: 16px; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/-vcVKTADxWBUg4JH7l-VRDfdGAGMIUUnEz4x4BMFA7io5wGBvjySnxZX5UvxqOyURFVSFVjZrsBVpmInR9bQ5w3GlyRx3celd9WKwEcmhzF5b-dwfu71AoIkk55y-RMX023m3PXm" width="135" height="48" /></span></p>
<p> </p>
<p><span style="font-family: Arial; font-weight: bold;">For a list of all of my articles:   </span><a href="community?id&#61;community_blog&amp;sys_id&#61;289d6a69dbd0dbc01dcaf3231f9619f0" rel="nofollow"><span style="font-family: Arial; color: #266fc8; font-weight: bold;">Community Code Snippets: Articles List to Date</span></a></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #eb7a3d;">Please Share, Like, Bookmark, Mark Helpful, or Comment this blog if you&#39;ve found it helpful or insightful.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #eb7a3d;">Also, if you are not already, I would like to encourage you to become a member of our blog!</span></p>
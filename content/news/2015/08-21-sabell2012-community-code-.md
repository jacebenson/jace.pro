---
title: "Community Code Snippets  System Log Ordering Problem Workaround"
date: 2015-08-20T17:48:37.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ee9d6e69dbd0dbc01dcaf3231f961951"
---
<p>I've had this be a pain for me from time-to-time.   I will put gs.log or gs.info statements all over my code to flag values and push them to the log.   gs.log and gs.info places these messages onto the worker queue where they are picked up by the next available worker who then dutifully writes the entry out to the log...but, not necessarily in order!</p><p></p><p>For example:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14400744212541475" jivemacro_uid="_14400744212541475">
<p>gs.log('---&gt; 1. Hi there');</p>
<p>gs.log('---&gt; 2. This is message 2!');</p>
<p>gs.log('---&gt; 3. This is message 3!');</p>
<p>gs.log('---&gt; 4. Hi there, again!');</p>

</pre><p></p><p>You may get results like this:</p><p></p><p>2015-08-19 14:47:49     Information ---&gt; 3. This is message 3! *** Script</p><p>2015-08-19 14:47:49     Information ---&gt; 2. This is message 2! *** Script</p><p>2015-08-19 14:47:49     Information ---&gt; 1. Hi there *** Script</p><p>2015-08-19 14:47:49     Information ---&gt; 4. Hi there, again! *** Script</p><p></p><p>With lots of other entries placed in between.   Not optimal.   :-/</p><p></p><p>Okay, so i want these in order!   To overcome this I use something like the following:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14400744212496459" jivemacro_uid="_14400744212496459">
<p>var message = '---&gt;\n';</p>
<p>message += '1. Hi there\n';</p>
<p>message += '2. This is message 2!\n';</p>
<p>message += '3. This is message 3!\n';</p>
<p>message += '4. Hi there, again!\n';</p>
<p></p>
<p>gs.log(message);</p>

</pre><p></p><p>And order is restored (and all of the messages are placed in a single log entry)!</p><p></p><p><span style="font-family: 'courier new', courier;">2015-08-19 14:53:05 Information</span></p><p><span style="font-family: 'courier new', courier;">---&gt;</span></p><p><span style="font-family: 'courier new', courier;">1. Hi there</span></p><p><span style="font-family: 'courier new', courier;">2. This is message 2!</span></p><p><span style="font-family: 'courier new', courier;">3. This is message 3!</span></p><p><span style="font-family: 'courier new', courier;">4. Hi there, again!</span></p><p></p><p>So what might this look like for real?   Here is a possible use-case:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14400744212341413" jivemacro_uid="_14400744212341413">
<p>var message = '---&gt;\n';</p>
<p></p>
<p>var incidentRecords = new GlideRecord('incident');</p>
<p>incidentRecords.setLimit(5);</p>
<p>incidentRecords.addActiveQuery();</p>
<p>incidentRecords.query();</p>
<p></p>
<p>while(incidentRecords.next()) {</p>
<p>       try {</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>   message += 'Incident number: ' + incidentRecords.number + '\n';</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>   message += '\tState: ' + incidentRecords.state.getDisplayValue() + '\n';</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>   message += '\tImpact: ' + incidentRecords.impact.getDisplayValue() + '\n';</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>}</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>catch(err) {</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>   message += 'ERROR! Something freakishly terrible happened! Error: ' + err + '\n';</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>}<span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span></p>
<p>}</p>
<p></p>
<p><span style="font-size: 13.3333330154419px;">gs.log(message, 'My really great message');</span></p>

</pre><p></p><p><span style="font-family: 'courier new', courier;">2015-08-19 15:00:11 Information</span></p><p><span style="font-family: 'courier new', courier;">---&gt;</span></p><p><span style="font-family: 'courier new', courier;">Incident number: INC0000002</span></p><p><span style="font-family: 'courier new', courier;">   State: Awaiting Problem</span></p><p><span style="font-family: 'courier new', courier;">   Impact: 1 - High</span></p><p><span style="font-family: 'courier new', courier;">Incident number: INC0000003</span></p><p><span style="font-family: 'courier new', courier;">   State: Active</span></p><p><span style="font-family: 'courier new', courier;">   Impact: 1 - High</span></p><p><span style="font-family: 'courier new', courier;">Incident number: INC0000007</span></p><p><span style="font-family: 'courier new', courier;">   State: Awaiting User Info</span></p><p><span style="font-family: 'courier new', courier;">   Impact: 1 - High</span></p><p><span style="font-family: 'courier new', courier;">Incident number: INC0000015</span></p><p><span style="font-family: 'courier new', courier;">   State: Active</span></p><p><span style="font-family: 'courier new', courier;">   Impact: 1 - High</span></p><p><span style="font-family: 'courier new', courier;">Incident number: INC0000016</span></p><p><span style="font-family: 'courier new', courier;">   State: Active</span></p><p><span style="font-family: 'courier new', courier;">   Impact: 1 - High</span></p><p></p><p>And there you go!   An alternative to the random order logging problem!</p><p></p><p>Steven Bell</p>
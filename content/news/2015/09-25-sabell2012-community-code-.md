---
title: "Community Code Snippets  GlideRecord to Object Array Conversion"
date: 2015-09-24T18:22:47.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=379c2225dbd0dbc01dcaf3231f961988"
---
<p><span style="font-size: 12pt;">I have been poking around with this for quite awhile, but had not really come up with something that I liked.   Recently I was reading, cover-to-cover, the book "The Principles of Object-Oriented JavaScript" by Nicholas C. Zakas (</span>ISBN-13: 978-1593275402<span style="font-size: 12pt; line-height: 1.5em;">).   I turned a page and lo! The clouds parted!   The light shone down (on the book), and the angels sang!   The answer was there!   On the page!   The Holy Grail!   I had found it!   Well...okay, maybe not so dramatic, but I was excited. </span></p><p></p><p><span style="font-size: 12pt;">So, what I was needing was not only a way to iterate through the properties of a GlideRecord (without knowing what they all were), but also then pulling the values of the GlideRecord and stuffing them into a modifiable object.   GlideRecords, by design, are immutable (a fancy term for unmodifiable).   Frankly, I have needed a way to rapidly convert a GlideRecord into a mutable object array.</span></p><p></p><p><span style="font-size: 12pt;">Grabbing my penny pencil and a scrap of napkin I quickly figured out what I needed to do and began to model it in Scripts - Background.   After getting the model mostly there, I then moved to a Fix Script and really went to work.   47 hours later...um, 1 hour later I had my solution.   I then updated my CSTableUtils Script (<a title="" _jive_internal="true" href="/groups/servicenow-user-group-us-tx-north-texas/blog/2015/08/27/community-code-snippets--current-factory">CurrentFactory</a>) Include to incorporate the new functionality (I have made that available <a title="hare.servicenow.com/app.do#/detailV2/6f4ba8e313ee420057ce58222244b074/overview" href="https://share.servicenow.com/app.do#/detailV2/6f4ba8e313ee420057ce58222244b074/overview">here </a>on the ServiceNow Share if your are interested).</span></p><p></p><p><span style="font-size: 12pt;">Here is my Fix Script:</span></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14433558596513030" jivemacro_uid="_14433558596513030">
<p>test();</p>
<p></p>
<p>function test() {</p>
<p>   <span style="font-size: 13.3333px;">   </span>var incidentRecords = new GlideRecord('incident');</p>
<p><span style="font-size: 13.3333px;">   </span>   incidentRecords.addQuery('state', '!=', 7); // closed</p>
<p>   <span style="font-size: 13.3333px;">   </span>incidentRecords.setLimit(5); // note that this comes from your inputs</p>
<p><span style="font-size: 13.3333px;">   </span>   incidentRecords.orderByDesc('number');</p>
<p>   <span style="font-size: 13.3333px;">   </span>incidentRecords.query();</p>
<p></p>
<p><span style="font-size: 13.3333px;">   </span>   var incidentList = []; // this will be an array of objects</p>
<p></p>
<p>   <span style="font-size: 13.3333px;">   </span>while (incidentRecords.next()) {</p>
<p><span style="font-size: 13.3333px;"><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span>   </span>   incidentList.push(toObject(incidentRecords));</p>
<p>   <span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span></span>//incidentList.push(CSTableUtils.toObject(incidentRecords));</p>
<p><span style="font-size: 13.3333px;">   </span>   }</p>
<p></p>
<p><span style="font-size: 13.3333px;">   </span>   gs.print(incidentList.length);</p>
<p></p>
<p>   <span style="font-size: 13.3333px;">   </span>for (var i=0; i &lt; incidentList.length; i++) {</p>
<p><span style="font-size: 13.3333px;"><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span>   </span>   gs.info('[{0}] number: {1} - description: {2} - assigned to: {3}',</p>
<p>   <span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span></span></span>i,</p>
<p><span style="font-size: 13.3333px;"><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span></span>   </span>   incidentList[i].number,</p>
<p><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span></span>   <span style="font-size: 13.3333px;">   </span>incidentList[i].short_description,</p>
<p><span style="font-size: 13.3333px;"><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span></span>   </span>   incidentList[i].assigned_to);</p>
<p>   <span style="font-size: 13.3333px;">   </span>}</p>
<p>}</p>
<p></p>
<p>// ----------------------------------------------</p>
<p>// GlideRecord to Object Converter</p>
<p>//</p>
<p>function toObject(recordToPackage) {</p>
<p>   <span style="font-size: 13.3333px;">   </span>var packageToSend = {};</p>
<p></p>
<p>   <span style="font-size: 13.3333px;">   </span>for (var property in recordToPackage) {</p>
<p><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span>   <span style="font-size: 13.3333px;">   </span>try {</p>
<p><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span></span>packageToSend[property] = recordToPackage[property].getDisplayValue();</p>
<p><span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span>   <span style="font-size: 13.3333px;">   </span>}</p>
<p>   <span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span><span style="font-size: 13.3333px;">   </span></span>catch(err){}</p>
<p><span style="font-size: 13.3333px;">   </span>   }</p>
<p></p>
<p>       return packageToSend;</p>
<p>}</p>



</pre><p></p><p><span style="font-size: 12pt;">The toObject function spins through all of the properties in the GlideRecord.   There were a couple that refused to cough up with info and actually caused an error situation, but they were not really important for general usage; so I skipped them with the Try/Catch.   As I noted in a previous <a title="" _jive_internal="true" href="/groups/servicenow-user-group-us-tx-north-texas/blog/2015/08/25/community-code-snippets--gliderecord--bracket-notation-reference-vs-eval">article</a> you can reference any given property value by using the object's array reference capability. </span></p><p></p><p><span style="font-size: 12pt;">And there you have it!   BTW, I will be doing a code-review article later on Zakas' book.</span></p><p></p><p><span style="font-size: 12pt;">Steven Bell</span></p><p></p><p></p><p style="font-size: 13px; font-family: arial, sans-serif; color: #666666;"><span style="color: #800080; font-style: inherit; font-size: 12pt; font-weight: inherit;">If you find this article helps you, don't forget to log in and "like" it!   </span></p>
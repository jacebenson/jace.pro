---
title: "Community Code Snippets  Passing by Reference vs By Value"
date: 2015-08-18T20:59:07.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d9cdeea9dbd0dbc01dcaf3231f9619aa"
---
<p><span style="font-size: 10pt; line-height: 1.5em;">Here is a nifty bit of functionality to add to your toolbox.   </span></p><p></p><p>JavaScript passes most variable parameters by value.   What this means is that if you pass in a string, integer, float or anything it comes in as a copy.   Most other objects are passed by reference; such as user defined, and GlideRecord objects. </p><p></p><p>Example of passing by value:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14399135392881987" jivemacro_uid="_14399135392881987">
<p>var numberOfPeople = 5;</p>
<p><span style="font-size: 10pt; line-height: 1.5em;">gs.info('---&gt; Number of people: {0}', numberOfPeople);   // will print 5.</span></p>
<p></p>
<p>changeNumberOfPeople(numberOfPeople);</p>
<p></p>
<p>gs.info('---&gt; [After] Number of people: {0}', numberOfPeople);   // will print 5.</p>
<p></p>
<p>function changeNumberOfPeople(numberOfPeople) {</p>
<p>       numberOfPeople = 10;</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>gs.info('---&gt; [inside function] Number of people: {0}', numberOfPeople);   // will print 10.</p>
<p>}</p>

</pre><p></p><p><strong>Results:</strong></p><p></p><p>*** Script: ---&gt; Number of people: 5</p><p>*** Script: ---&gt; [inside function] Number of people: 10</p><p>*** Script: ---&gt; [After] Number of people: 5</p><p></p><p></p><p>As you can see, it is a copy.   The scope is either "in" or "outside of" the function and one does not see the other.   If you change the inside value it does NOT affect the outside value.</p><p></p><p>Now let's take a look at an object passing by reference.   A pointer to the original is passed; not a copy.   Therefore if you modify the passed in object it modifies the original.</p><p></p><p>Example of passing by reference:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14399135392796833" jivemacro_uid="_14399135392796833">
<p>var person = {};</p>
<p>person.arms = 2;</p>
<p>person.legs = 2;</p>
<p>person.heads = 1;</p>
<p></p>
<p>gs.info('---&gt; [outside] number of heads: {0}', person.heads);</p>
<p></p>
<p>changePerson(person);</p>
<p></p>
<p>gs.info('---&gt; [after] number of heads: {0}', person.heads);</p>
<p></p>
<p>function changePerson(personToChange) {</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">personToChange</span></span>.heads = 2;</p>
<p>}</p>

</pre><p></p><p><strong>Results:</strong></p><p></p><p>*** Script: ---&gt; [outside] number of heads: 1</p><p>*** Script: ---&gt; [after] number of heads: 2</p><p></p><p></p><p>This works the same way with GlideRecords:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14399135392682035" jivemacro_uid="_14399135392682035">
<p>var incidentRecords = new GlideRecord('incident');</p>
<p>if (incidentRecords.get('number','INC0010023')) {</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>gs.info('---&gt; [before] impact: {0}', incidentRecords.impact.getDisplayValue());</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>changeIncident(incidentRecords);</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>gs.info('---&gt; [after] impact: {0}', incidentRecords.impact.getDisplayValue());</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>incidentRecords.update();</p>
<p>}</p>
<p></p>
<p>function changeIncident(incident) {</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">       </span>incident.impact = 1;</p>
<p>}</p>

</pre><p></p><p><strong>Results:</strong></p><p></p><p>*** Script: ---&gt; [before] impact: 3 - Low</p><p>*** Script: ---&gt; [after] impact: 1 - High</p><p></p><p>Cool, huh?   :-)</p><p></p><p>Steven Bell.</p><p></p><p></p><p><span style="color: #800080;">If you find this article helps you, don't forget to "like" it!</span></p>
---
title: "The Secrets of GlideDateTime"
date: 2017-12-14T13:28:28.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=bc0e6a2ddbd0dbc01dcaf3231f961931"
---
<p>Working with Dates in ServiceNow can be quite challenging.</p>
<p>In this Blog Series, I will list some of the common mistakes and provide some secrets to using GlideDateTime that you might not be aware of.</p>
<h4>Topics</h4>
<h4><a href="#dateFormatting" rel="nofollow">Date Formatting</a></h4>
<h4><a href="#scheduledTasks" rel="nofollow">Scheduled Tasks using Date GlideDate</a></h4>
<h4><a href="#calcBusinessDuration" rel="nofollow">Calculating Business Duration In Schedule</a></h4>
<p> </p>
<p><a name="dateFormatting"></a></p>
<h3>Date Formatting</h3>
<p>Date formatting is actually incredibly easy in ServiceNow. I have seen lots of posts with complex code to format dates into day names, month names and everything in between - often with 10&#39;s of 100&#39;s of lines of code. But it doesn&#39;t have to be this hard! It is actually very easy. You can do all your formatting using one function, provided OOTB!</p>
<p><a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;jakarta&amp;id&#61;r_ScopedGlideDateTimeSetDisplayValue_String_value_String_…" target="_blank" rel="noopener noreferrer nofollow">GlideDateTime</a></p>
<p><strong>Example</strong></p>
<pre class="language-javascript"><code>var gdt &#61; new GlideDateTime(&#34;2011-02-02 12:00:00&#34;);
gdt.setDisplayValue(&#34;20-5-2011 12:00:00&#34;, &#34;dd-MM-yyyy HH:mm:ss&#34;); //uses current user session time zone (US/Pacific)
gs.print(gdt.getValue());</code></pre>
<p>setDisplayValue() uses the <a href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html" rel="nofollow">SimpleDateFormat</a> (Java Platform SE 7 ) , which is fully documented!</p>
<h4>Converting Formats</h4>
<p><strong>Incoming Format:</strong> 20171216 01:23:45<br /><strong>Simple Format:</strong> yyyyMMdd HH:mm:ss</p>
<pre class="language-javascript"><code>var date &#61; &#39;20171216 01:23:45&#39;;
var simpleDateFormat &#61; &#39;yyyyMMdd HH:mm:ss&#39;;
var gdt &#61; new GlideDateTime();
gdt.setDisplayValue(date,simpleDateFormat);
gs.print(gdt.getDisplayValue());</code></pre>
<pre class="language-markup"><code>16-12-2017 01:23:45</code></pre>
<h4><br />Converting Day and Month Names with AM/PM</h4>
<p><strong>Incoming Format:</strong> Friday, August 18, 2017 8:00 AM<br /><strong>Simple Format:</strong> E, MMMM dd, yyyy K:mm a</p>
<pre class="language-javascript"><code>var newDate &#61; &#39;Friday, August 18, 2017 8:00 AM&#39;;
var gdt &#61; new GlideDateTime();
gdt.setDisplayValue(newDate, &#34;E, MMMM dd, yyyy K:mm a&#34;);
var dateTimeForField &#61; gdt.getDisplayValue();
gs.print(dateTimeForField);</code></pre>
<pre class="language-markup"><code>2017-08-18 08:00:00</code></pre>
<h4><br />Getting the Name and Day of Month</h4>
<p><strong>Incoming Format:</strong> new GlideDateTime();<br /><strong>Simple Format:</strong> EEEE dd MMMMM</p>
<pre class="language-javascript"><code>var gDate &#61; new GlideDateTime().getDate();
gs.print(gDate.getByFormat(&#39;EEEE dd MMMMM&#39;));</code></pre>
<pre class="language-markup"><code>Thursday 14 December</code></pre>
<h4><br />Add days to any format</h4>
<p><strong>Incoming Format:</strong> 10 Jul 2018 12:30:00<br /><strong>Simple Format:</strong> EEEE dd MMMMM</p>
<pre class="language-javascript"><code>var date &#61; &#39;10 Jul 2018 12:30:00&#39;;
var simpleDateFormat &#61; &#39;dd MMMM yyyy HH:mm:ss&#39;; // Simple Date Time format
var gdt &#61; new GlideDateTime();
gdt.setDisplayValue(date,simpleDateFormat); //Set time using current TZ
gs.addInfoMessage(gdt.getDisplayValue()); // Output time in current TZ</code></pre>
<pre class="language-markup"><code>2018-07-10 12:30:00 PM</code></pre>
<p>Once your GlideDateTime object has the correct time, you can manipulate it as you need.</p>
<pre class="language-javascript"><code>gdt.addDays(7);
gs.addInfoMessage(gdt.getDisplayValue());</code></pre>
<pre class="language-markup"><code>2018-07-17 12:30:00 PM</code></pre>
<p>And back again to your original format, with the added 7 days</p>
<pre class="language-javascript"><code>var gd &#61; gdt.getLocalDate();
var gt &#61; gdt.getLocalTime();</code></pre>
<p>gs.addInfoMessage(gd.getByFormat(&#39;dd MMM yyyy&#39;) &#43; gt.getByFormat(&#39; HH:mm:ss&#39;));</p>
<pre class="language-markup"><code>17 Jul 2018 12:30:00</code></pre>
<p><a name="scheduledTasks"></a></p>
<h3><br />Scheduled Tasks using Date GlideDate</h3>
<p>It is a fairly common requirement - generate a task every day of the week, excluding weekend. If you do a quick search for this, you will see lots of versions of the code below which uses Date():</p>
<pre class="language-javascript"><code>(function doNotUseThisCode() {
	var now &#61; new Date();
	var day &#61; now.getDay();
	var result &#61; false;
	if(day !&#61; 0 &amp;&amp; day !&#61; 6) {
		result &#61; true;
	}
	return result;
})();</code></pre>
<p>Please do not use this code! <br /><strong>It is wrong!</strong></p>
<p>If you run the code below (run from a Perth Instance in Australia)</p>
<pre class="language-javascript"><code>gs.addInfoMessage(new Date().toString());
gs.addInfoMessage(new GlideDateTime().getDisplayValue());

 </code></pre>
<p>You get the following output:</p>
<pre class="language-markup"><code>Tue Jan 02 2018 05:38:49 GMT-0800 (PST)
02-01-2018 21:38:49</code></pre>
<p>What is going on here?</p>
<p>The output of Date().toString() is not using your TimeZone!</p>
<p>now.getDay() is getting the day in PST!</p>
<p>I am from Perth, Australia (GMT &#43; 8) which means that my Task will spawn on Saturday and not on Monday because it is still Friday and Sunday retrospectively in PST.</p>
<p>And you can bet that is what happened when the code went into Production... :/</p>
<p>Let&#39;s utilize what we learned from Date Formatting for a more readable and TimeZone agnostic solution using GlideDate instead:</p>
<pre class="language-javascript"><code>(function isWeekday() {

	var isWeekday;
	var gDate &#61; new GlideDate(); //Uses your Timezone!
	var day &#61; gDate.getByFormat(&#39;EEEE&#39;); //Gets name of day
	switch(day) {
		case &#34;Saturday&#34;:
		case &#34;Sunday&#34;:
			isWeekday &#61; false;
		break;
		default:
			isWeekday &#61; true;
	}

	return isWeekday;

})();</code></pre>
<p><a name="calcBusinessDuration"></a></p>
<h3>Calculating Business Duration In Schedule</h3>
<p>There are a few different ways to do this, either through the SLA API or GlideSchedule.<br />GlideSchedule seems to be the cleanest way:</p>
<pre class="language-javascript"><code>function getBusinessDuration(scheduleID, gdtStart,gdtEnd) {
    var sched &#61; new GlideSchedule(scheduleID);
   return sched.duration(gdtStart, gdtEnd).getDurationValue();
}</code></pre>
<p>Let&#39;s assume our Schedule has a business day of 11 hours, Monday to Friday.<br />We would, therefore, expect the duration of a calendar week in business hours to be 55.</p>
<pre class="language-javascript"><code>var oneWeekAgo &#61; new GlideDateTime();
oneWeekAgo.addDays(&#34;-7&#34;);

getBusinessDuration(
  &#39;c2f96f156fc1750029ca5e0d5d3ee427&#39;, 
  oneWeekAgo, 
  new GlideDateTime()
);</code></pre>
<pre class="language-markup"><code>2 07:00:00</code></pre>
<p>There are 24 hours in each day.<br />2 days &#61; 48 hours<br />48 &#43; 7 &#61; 55 hours<br /><br /><br /><br /></p>
<p> </p>
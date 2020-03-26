---
title: "Doing More With Formula Indicators"
date: 2018-01-20T01:00:55.000Z
authors: ["Adam Stout"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1f0d2ea5dbd0dbc01dcaf3231f961947"
---
<p>The discussion below is intended for advanced Performance Analytics users who have 6 or months experience with Performance Analytics and the same or more experience with the ServiceNow Platform.   The advanced topics covered assume that you understand the basics of Performance Analytics and have a working knowledge of JavaScript.</p>
<h1>Introduction</h1>
<p>Performance Analytics <a title="ocs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/task/t_CreateAFormulaIndicator.html" href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/task/t_CreateAFormulaIndicator.html" rel="nofollow">Formula Indicators</a> are often used for simple calculations.   This is incredibly useful for quickly adding in a new KPI that is a percentage based on existing data or calculating a &#34;net&#34; value by taking the incoming count minus the closed count.</p>
<p>But did you know they can do a lot more than that?</p>
<p>For example, we can use formula indicators to:</p>
<ul><li>Rounding a score to the nearest quarter of a point</li><li>Display a constant value on a scorecard</li><li>Show or hide manual scores based on the date</li><li>Transform the score on the fly based on other information in the instance</li></ul>
<p><em><strong>Formula Indicators are JavaScript blocks that are processed on the server when called via the API.   This means that anything you can do in JavaScript, you can do in a Formula Indicator.</strong></em></p>
<p><em>Remember, just because you can, doesn&#39;t mean you should!!!</em></p>
<p>Before we get into some examples, let&#39;s review some very important items to consider when using Formula Indicators. </p>
<h3>Performance</h3>
<p>The Formula indicators give you lots of flexibility but may come at a performance cost.   Be aware the Formula is processed for every data point when loaded.   If you are viewing 90 days of data, the user has to wait for the formula to be run 90 times before the data is returned.   This only takes microseconds with simple calculation but if you performed some more complex logic, it could create a bad user experience.   For instance, if your script took 1 second to run, it will now take 90 seconds for the user to see the data which is obviously creating a bad user experience.</p>
<h3>Formula Indicators vs. Performance Analytics Scripts</h3>
<p>There is some overlap between what a Performance Analytics Script can do and a Performance Analytics Formula Indicators.   The main difference is that a Performance Analytics Script is run at collection time and the results are stored in the database.   PA Formula Indicators are calculated at display time and the results are not materialized.</p>
<h1>Examples</h1>
<p>And now let&#39;s get to the fun stuff…   Here are some examples of things you can do.   Regardless of the logic in your formula, just like a Performance Analytics Script, the last line of your Formula must contain (or evaluate to) the numeric result value for the Formula.</p>
<p>Before executing any script you should thoroughly test it in your environment.   Scripts are very powerful and you must ensure that you understand what you are running before you run it.   The scripts below are intended for discussion purposes only.</p>
<h3>Round to a Specific Digit of Precision</h3>
<p>Performance Analytics lets you set the precision for an indicator which is what you need in most cases, but what about the use case where you want to round to the nearest quarter of a point.   In this example, we use the standard Math JavaScript library to round with our specific rules.</p>
<pre class="language-javascript"><code>// Round to the nearest quarter point
var number &#61; [[My Indicator]];
Math.round(number * 4) / 4).toFixed(2);</code></pre>
<h3>Show a Constant Value</h3>
<p>If I need to show a constant value, I can create a manual indicator and enter the values for each date.   Another option is to create a formula with the constant in it.   Here I&#39;m setting the constant value.</p>
<pre class="language-javascript"><code>{{Some Non-Null Indicator}}
50;</code></pre>
<p>You may ask why there is an indicator above the constant that doesn&#39;t appear to be used.   This is required because Formula Indicators are optimized to not be processed if there are no non-null indicators passed.   This ensures that there is always a non-null value so that the formula is processed and we get the desired result (constant value &#34;50&#34; in this case).</p>
<h3>Show Only Future Values</h3>
<p>Some indicators cannot be accurately forecasted based on historical data.   In this case, a manual indicator is often used to allow us to see the &#34;forecast&#34; line with the actual lines.   For this case, we if we don&#39;t want to show the historical manual forecast, we have to go in and manually delete.   If we don&#39;t want to do that (I certainly don&#39;t), we can use date comparisons to ensure we only show the manual indicator for future dates.</p>
<pre class="language-javascript"><code>if(score_end.compareTo(new GlideDateTime()) &gt;&#61; 0)
{
    [[My Manual Incident Forecast]]
}</code></pre>
<p>If you aren&#39;t familiar with GlideDateTime and the compareTo method, you can find out more about it <a title="ocs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/GlideDateTime/concept/c_GlideDateTimeAPI.html#ariaid-title17" href="https://docs.servicenow.com/bundle/kingston-application-development/page/app-store/dev_portal/API_reference/GlideDateTime/concept/c_GlideDateTimeAPI.html#ariaid-title17" rel="nofollow">here</a>.</p>
<p>Here is a little reference that I keep to remind me what I am looking for.   [<em>NOTE: This is valid ServiceNow JavaScript, but NOT a valid Formula Indicator.</em>]</p>
<pre class="language-javascript"><code>// Setup the variables that PA supply to formulas
var score_start &#61; new GlideDateTime(&#39;2018-01-01&#39;);
var score_end &#61; new GlideDateTime(&#39;2018-01-31&#39;);

// Identify what I&#39;m actually comparing
var compareStart &#61; score_start.compareTo(new GlideDateTime());
var compareEnd &#61; score_end.compareTo(new GlideDateTime());

// Show make sure I pick the right result
if(compareStart &lt;&#61; 0 &amp;&amp; compareEnd &gt; 0)
{
  gs.addInfoMessage(&#39;In Period&#39;);
} else if(compareEnd &lt;&#61; 0) {
  gs.addInfoMessage(&#39;After End&#39;);
} else if(compareStart &gt; 0) {
  gs.addInfoMessage(&#39;Before Start&#39;);
}</code></pre>
<h3>Use a Different Indicator or Breakdown Depending on Date</h3>
<p>In this example, we are using a different breakdown depending on the day of the week, but this could easily be modified to combine an indicator from a previous period and a new period (perhaps due to some process change).</p>
<pre class="language-javascript"><code>var result &#61; null;
switch(score_start.getDayOfWeekUTC())
{
case 1:
  result &#61; [[Avg. Incidents &gt; Day of Week &#61; Monday]];
  break;
case 2:
  result &#61; [[Avg. Incidents &gt; Day of Week &#61; Tuesday]];
  break;
case 3:
  result &#61; [[Avg. Incidents &gt; Day of Week &#61; Wednesday]];
  break;
case 4:
  result &#61; [[Avg. Incidents &gt; Day of Week &#61; Thursday]];
  break;
case 5:
  result &#61; [[Avg. Incidents &gt; Day of Week &#61; Friday]];
  break;
case 6:
  result &#61; [[Avg. Incidents &gt; Day of Week &#61; Saturday]];
  break;
case 7:
  result &#61; [[Avg. Incidents &gt; Day of Week &#61; Sunday]];
  break;
}
result;</code></pre>
<h3>Query Other Data to Transform Data</h3>
<p>In this example, we query to get an exchange rate so we can display values in EUR even though the scores are in USD.   If we needed to have scores in a dozen different currencies, this would allow us to be able to support that without the need to store those scores.   This comes at a runtime performance cost so while we can do this, it is not always the best solution.</p>
<p>This could be very useful if we had a user preference for currency, this could be used to dynamically transform the USD scores to the user&#39;s local currency (as long as we had an FX rate for it).</p>
<pre class="language-javascript"><code>var rate &#61; null;
var gr &#61; new GlideRecord(&#39;fx_rate&#39;); // fx_rate is EUR based
gr.addQuery(&#39;currency.code&#39;, &#39;USD&#39;);
gr.addQuery(&#39;sys_created_on&#39;, &#39;&lt;&#61;&#39;, score_end); // get the rate in effect at the end of the period
gr.orderByDesc(&#39;sys_created_on&#39;); // fx rates are loaded daily and we want the most current
gr.setLimit(1); // only get one value, the latestet
gr.query();
if(gr.next())
{
      rate &#61; gr.getValue(&#39;rate&#39;);
}
[[USD Sample Data]] / rate; // Evaluate the USD value divided by the FX Rate</code></pre>
<h1>Conclusion</h1>
<p>The NOW Platform gives Performance Analytics Formula Indicators tremendous power and gives you an amazing amount of flexibility to best meet your users&#39; needs.   While you need to use them responsibly, Formula Indicators are a powerful tool you should keep ready in your Analytics Tool Box.</p>
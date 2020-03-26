---
title: "Reporting on the Substrings  Part  on Conquer Challenging Reports by Leveraging the Now Platform"
date: 2020-02-27T23:33:03.000Z
authors: ["Adam Stout"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a57578e0db5fcc1014d6fb24399619c1"
---
<p>This post is part two of a three-part series on how to leverage the Now Platform to easily solve otherwise tough reporting problems.  This is a followup to the <a href="https://community.servicenow.com/community?id&#61;community_event&amp;sys_id&#61;169b4b61db682f8ca39a0b55ca9619a7&amp;view_source&#61;featuredList" rel="nofollow">Performance Analytics and Reporting Office Hours</a> from 2/12/2020.  If you would like to hear me explain this, you can check out the recording and presentation <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;0740de96dbcf889023f4a345ca96195d" rel="nofollow">here</a>.</p>
<h2>The Business Case</h2>
<p>Ajay, a Problem Manager, is having some challenges building a dashboard to quickly identify any security-related PRB.</p>
<p style="padding-left: 30px;"><em>I need to quickly create a report of any active PRBs that are security-related. My support team does a great job labeling all the PRBs with [Security] in the short description, but I just can’t get my dashboard right.</em></p>
<p style="padding-left: 30px; text-align: center;"><em><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/a474b4acdb1fcc1014d6fb2439961937.iix" /></em></p>
<p> </p>
<h2>Before we get started</h2>
<p>This is part two of the series, so go back and read <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;37c045cadbcf409023f4a345ca961921" rel="nofollow">part one</a> if you haven’t. You’ll also want to be sure to have had some training on the Now Platform. [That is also discussed in part 1, so go get the links there.]</p>
<h2>Use Case Specifics</h2>
<p>Let’s get to it. Our team is labeling security-related problems with “[Security]” in the short description.</p>
<p>This current process is:</p>
<ul><li>Easy to do – Good</li><li>Easy to identify in a list view – Good</li><li>Challenging to report on (can’t group or use interactive filters) - Bad</li></ul>
<p>We want to be able to:</p>
<ul><li>Create interactive filters on our problems that are security-related or not</li><li>Create reports on security vs. non-security problems</li><li>Make some additional fields mandatory for security-related problems</li></ul>
<h2>Proposed Solution</h2>
<p>To allow us to report more clearly on this information, we will add a field to the problem table that captures if this is a security issue or not.</p>
<h3>Solution Walk Through</h3>
<h4>Create a new field</h4>
<p>The key to making this reportable is creating a new field. Here we are creating a new field to show there is a security impact on this problem. On the first pass, this might make sense as a True/False field since it either is or it isn’t security-related. However, with a True/False field, we can never be sure if something is really “not security” related or if it wasn’t marked that way.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/2594fcacdb1fcc1014d6fb2439961900.iix" /></p>
<p>To better manage our data, we are using a Choice field instead of True/False. This will allow us to understand when something is or is not security-related or if we just haven’t determined yet.</p>
<p>In addition, we can use a standard UI Action to force this to be set at some point in the process. If appropriate, this new field could be included in an index on the problem table as well to improve performance for some reports.</p>
<h4>Add Business Rule</h4>
<p>While not required, to smooth the transition from using a tag in the short description to the field, we will add a simple Business Rule to set the flag if we find the string “[Sec”, set the Security Impact field to “Yes”.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/82a434ecdb1fcc1014d6fb24399619ce.iix" /></p>
<p>This Business Rule is a pretty simple and will set the field but not unset the flag if you remove it. This could be enhanced further, but it meets our needs for now.</p>
<h4>Run Fix Script</h4>
<p>We are all set up to populate the data going forward, but we need to fix all the existing problem records. To do that, we’ll run this simple fix script that emulates the logic we have the Business Rule.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/69b4f0ecdb1fcc1014d6fb24399619b1.iix" /></p>
<p>[This isn&#39;t the prettiest script, but it is functional.]</p>
<pre class="language-javascript"><code>var getSecProblems &#61; function () 
{ 
var prbs &#61; new GlideRecord(&#39;problem&#39;); 
prbs.addQuery(&#39;short_description&#39;, &#39;CONTAINS&#39;, &#39;[Sec&#39;); 
prbs.query(); 
return prbs; 
}; 
var secPrb &#61; getSecProblems(); 
secPrb.setWorkflow(false); 
secPrb.autoSysFields(false); 
secPrb.setEngines(false); 
secPrb.setValue(&#39;u_security_impact&#39;, &#39;yes&#39;); 
secPrb.updateMultiple(); 
var getNonSecProblems &#61; function () 
{ 
var prbs &#61; new GlideRecord(&#39;problem&#39;); 
prbs.addQuery(&#39;short_description&#39;, &#39;DOES NOT CONTAIN&#39;, &#39;[Sec&#39;); 
prbs.query(); 
return prbs; 
}; 
var nonSecPrb &#61; getNonSecProblems(); 
nonSecPrb.setWorkflow(false); 
nonSecPrb.autoSysFields(false); 
nonSecPrb.setEngines(false); 
nonSecPrb.setValue(&#39;u_security_impact&#39;, &#39;no&#39;); 
nonSecPrb.updateMultiple();</code></pre>
<p> </p>
<h2>Work is Better</h2>
<p>Is Security Impact (in this example) is important to your organization, then adding a field is going to let you use this throughout the Platform. Adding fields should not be done for every one-off report you get asked for, but when there is a clear alignment to your business processes, it should always be an option.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/21c4bcecdb1fcc1014d6fb243996193b.iix" /> </p>
<p>By taking the string and converting to a field, we can now easily add Interactive Filters and Group By the new field without issue. While we didn’t look at it, we can also now use this field as a breakdown in Performance Analytics, in a UI Policy, in Business Rules, in Flow Designer... anywhere in the Platform.</p>
<h2>Alternate Solution - Tags</h2>
<p>An alternative solution for this use case is using <a href="https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/common-ui-elements/concept/c_Tags.html" rel="nofollow">tags</a>. This is an improvement over using naming conventions but brings with it different reporting challenges. While the condition builder does support reporting on tags since tags support multiple levels of visibility, things that look the same may have different sys_ids are can be a challenge to keep straight.</p>
<p>Tags may be an excellent solution for temporary tracking with limited scope, but if we are looking for a robust solution, we should stick to a new field.</p>
<h2>Other Use Cases</h2>
<p>In this example, we looked at “Security” problems, but other similar use cases exist in the wild such as:</p>
<ul><li>“High Visibility” projects</li><li>“Must Have” stories</li><li>“VIP” incidents</li></ul>
<h2>Wrapping Up</h2>
<p>The Now Platform is integral to Analytics. Do not restrict yourself to just Reporting or just Performance Analytics! Use the Now Platform to get the most out of your ServiceNow investment and optimize your workflow.</p>
<p>With a small amount of effort (this should have taken you less than 15 minutes to do), you now have greatly expanded your analytics capabilities with a solution you can use across the platform, not just in a one-off report.</p>
<h2>Up Next</h2>
<p>In the next installment of this series, we’ll cover reporting on lists. Check back next week to learn more about how to Conquer Challenging Reports by Leveraging the Now Platform.</p>
<p>In the meantime, please leave me some comments about the use cases you are solving with this technique.</p>
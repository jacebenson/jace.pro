---
title: "Reporting on Lists  Part  on Conquer Challenging Reports by Leveraging the Now Platform"
date: 2020-03-05T03:02:25.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=36ee942edb1304501cd8a345ca961974"
---
<p>This post is part three of a three-part series on how to leverage the Now Platform to easily solve otherwise tough reporting problems.  This is a followup to the <a href="https://community.servicenow.com/community?id&#61;community_event&amp;sys_id&#61;169b4b61db682f8ca39a0b55ca9619a7&amp;view_source&#61;featuredList" rel="nofollow">Performance Analytics and Reporting Office Hours</a> from 2/12/2020.  If you would like to hear me explain this, you can check out the recording and presentation <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;0740de96dbcf889023f4a345ca96195d" rel="nofollow">here</a>.</p>
<h2>The Business Case</h2>
<p>Peter, a Demand Manager, has been busy reviewing incoming ideas. One of the key pieces of information needed to triage the idea is the business capability related to the idea. This is where the problem lies.</p>
<p style="padding-left: 30px;"><em>It is quick for users to add their ideas to the system. A couple of clicks and I get everything I need. The submitter is quickly able to set the Business Capabilities that the idea impacts, but when I try to report on this, I’m not getting what I want.</em></p>
<p> <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/7cad50e2db1304501cd8a345ca961970.iix" /></p>
<p style="padding-left: 30px;"><br /><em>I want to group by capability, but when I do, I get all the combinations, not just a clean report with a count for each capability. HELP!!!</em></p>
<p style="padding-left: 30px;"><em><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/eecd5ce2db1304501cd8a345ca961931.iix" /></em></p>
<h2>Before we get started</h2>
<p>This is part three of the series, so go back and read <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;37c045cadbcf409023f4a345ca961921&amp;view_source&#61;searchResult" rel="nofollow">part one</a> and <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;a57578e0db5fcc1014d6fb24399619c1&amp;view_source&#61;searchResult" rel="nofollow">part two</a> if you haven’t. You’ll also want to be sure to have had some training on the Now Platform. [That is also discussed in part 1, so get the links there.]</p>
<h2>Use Case Specifics</h2>
<p>We need to be able to group by and filter by individual fields in the list field. List fields contain a comma-separated list of sys_ids (or choice values if it is a choice list). The platform sees this as a string, and the Report Designer won’t let you group by it (although you can use it as an additional group by field). If you do select the field as a group by, order matters, and each combination is group separately, which is rarely what you want to see.</p>
<h2>Proposed Solution</h2>
<p>To make this easily reportable and to support <a href="https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/navigation/reference/dot-walking-examples.html" rel="nofollow">dot-walking</a> through the values in the list, we will create a new table that will be populated via a Business Rule when the list changes.</p>
<h2>Solution Walk Through</h2>
<div class="alert alert-info clearfix">All code examples are provided to get you started. Prior to being deployed in your environment, they should be reviewed for appropriateness and thoroughly tested to meet your needs.</div>
<h3>Create a new table</h3>
<p>The secret to making this work is creating a table that will store a reference to the original Idea and the table we are referencing. We only need two fields to make this work.</p>
<p>Here we can see the u_business_capability field, which references Business Capability and u_idea, which references Idea.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/38fd1c26db1304501cd8a345ca961982.iix" /></p>
<p>Going forward, we’ll report on this table when we need to report on the Business Capabilities for Ideas.</p>
<h3>Add Business Rule</h3>
<p>To make this work smoothly, we’ll use a Business Rule on the idea table that executes when the Business Capabilities list is updated. The Business rule will create a row for each value in the list field.</p>
<p>Here is the Business Rule I created to do this:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/202e5c66db1304501cd8a345ca961982.iix" /></p>
<p>A few key points:</p>
<ol><li>We need to use the “Advanced” settings.</li><li>We want to initial update to Idea to happen before we do this, so we will run after the update (this could be made async in needed).</li><li>We want this to run on Insert, Update, and Delete. [Don’t forget to select Delete!!!! We need to remove records we don’t need if the Idea is removed.]</li><li>We only need this to run if the Business Capabilities change.</li></ol>
<p>Now that we have that configured, we need to add the script logic.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/586e90e6db1304501cd8a345ca96197d.iix" /></p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {
    var createShadowRecords &#61; function (idea, capabilities)
    {
        // if there are cabilities, add them
        if(!gs.nil(capabilities))
        {
            var capObj &#61; capabilities.split(&#39;,&#39;);
            for(var i &#61; 0; i &lt; capObj.length; i&#43;&#43;)
            {
                var cap &#61; new GlideRecord(&#39;u_idea_business_capability&#39;);
                cap.addQuery(&#39;u_idea&#39;, &#39;&#61;&#39;, idea.getValue(&#39;sys_id&#39;));
                cap.addQuery(&#39;u_business_capability&#39;, &#39;&#61;&#39;,  capObj[i]);
                cap.query();
                // if they are missing add them, else do nothing
                if(!cap.hasNext())
                {
                    cap.initialize();
                    cap.setValue(&#39;u_idea&#39;, idea.getValue(&#39;sys_id&#39;));
                    cap.setValue(&#39;u_business_capability&#39;, capObj[i]);
                    cap.insert();
                }
            }
        }
        // remove any capabilities that are there any more
        var removeCap &#61; new GlideRecord(&#39;u_idea_business_capability&#39;);
        removeCap.addQuery(&#39;u_idea&#39;, &#39;&#61;&#39;, idea.getValue(&#39;sys_id&#39;));
        if(!gs.nil(capabilities))
        {
            removeCap.addQuery(&#39;u_business_capability&#39;, &#39;NOT IN&#39;,  capabilities);
        }
        removeCap.deleteMultiple();
    };

    createShadowRecords(current, current.business_capabilities);

    if(gs.nil(current) &amp;&amp; !gs.nil(previous))
    {
        createShadowRecords(previous, &#39;&#39;);
    }
})(current, previous);</code></pre>
<h3>Run Fix Script</h3>
<p>We are all set going forward, but we need to fix the data that is already there. A quick fix script should do the trick.</p>
<pre class="language-javascript"><code>var createShadowRecords &#61; function (idea, capabilities)
{
    // if there are cabilities, add them
    if(!gs.nil(capabilities))
    {
        var capObj &#61; capabilities.split(&#39;,&#39;);
        for(var i &#61; 0; i &lt; capObj.length; i&#43;&#43;)
        {
            var cap &#61; new GlideRecord(&#39;u_idea_business_capability&#39;);
            cap.addQuery(&#39;u_idea&#39;, &#39;&#61;&#39;, idea.getValue(&#39;sys_id&#39;));
            cap.addQuery(&#39;u_business_capability&#39;, &#39;&#61;&#39;,  capObj[i]);
            cap.query();
            // if they are missing add them, else do nothing
            if(!cap.hasNext())
            {
                cap.initialize();
                cap.setValue(&#39;u_idea&#39;, idea.getValue(&#39;sys_id&#39;));
                cap.setValue(&#39;u_business_capability&#39;, capObj[i]);
                cap.insert();
            }
        }
    }
    // remove any capabilities that are there any more
    var removeCap &#61; new GlideRecord(&#39;u_idea_business_capability&#39;);
    removeCap.addQuery(&#39;u_idea&#39;, &#39;&#61;&#39;, idea.getValue(&#39;sys_id&#39;));
    if(!gs.nil(capabilities))
    {
        removeCap.addQuery(&#39;u_business_capability&#39;, &#39;NOT IN&#39;,  capabilities);
    }
    removeCap.deleteMultiple();
};

var getAllIdeasWithCapabilities &#61; function ()
{
    var idea &#61; new GlideRecord(&#39;idea&#39;);
    idea.addNotNullQuery(&#39;business_capabilities&#39;);
    idea.query();
    return idea;
};

// get all the existing ideas with capabilties
var idea &#61; getAllIdeasWithCapabilities();
gs.info(idea.getRowCount() &#43; &#39; ideas to process&#39;);
while(idea.next())
{
    gs.info(idea.getDisplayValue() &#43; &#39; - &#39; &#43; idea.business_capabilities);
    createShadowRecords(idea, idea.business_capabilities);
}

gs.info(&#39;Update complete&#39;);</code></pre>
<h2>Work is Better</h2>
<p>Peter can now easily report on the Business Capabilities of Ideas. In addition, he can group by the Business Capability and can create an interactive filter on it. Peter is now happy.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/6d8edce6db1304501cd8a345ca9619c9.iix" /></p>
<div class="alert alert-info clearfix">Important Note: This is NOT needed to support Performance Analytics. In Performance Analytics, you can breakdown by a list just by selecting it (in this case with a Breakdown Source on Business Capabilities).</div>
<h2>Other Use Cases</h2>
<p>Any place you have a list, this will work.</p>
<h2>Wrapping Up</h2>
<p>The Now Platform is integral to Analytics. Do not restrict yourself to just Reporting or just Performance Analytics! Use the Now Platform to get the most out of your ServiceNow investment and optimize your workflow.</p>
<p>With a small amount of effort (this should have taken you less than 15 minutes to do), you now have greatly expanded your analytics capabilities with a solution you can use across the platform, not just in a one-off report.</p>
<p>This is the last installment of this series. We went over how to leverage the Now Platform to report on:</p>
<ul><li><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;37c045cadbcf409023f4a345ca961921" rel="nofollow">Child Tables – The “Latest Status” report example</a></li><li><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;a57578e0db5fcc1014d6fb24399619c1" rel="nofollow">Substrings – Pulling out information from the short description</a></li><li>Lists – What you just finished reading</li></ul>
<p>Now that you have seen some real examples and had a chance to try them out, leave some comments about the use cases you are solving with this technique.</p>
---
title: "Improve your style Part   Abbreviations and why you should stop using them"
date: 2018-04-16T15:20:15.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c4268330dbad5f802e247a9e0f9619f0"
---
<h3>The Series</h3>
<p>This series focuses on improving coding style. It will not add any &#34;cool&#34; or &#34;tight&#34; functionalities you&#39;ve never heard of. Its sole purpose is to improve 3 things: Readability, Maintainability and Expandability of code.</p>
<p>The first part of this series will focus on abbreviations.</p>
<p> </p>
<h3>Abbreviations</h3>
<p>Abbreviations are awesome. They take up less space, save time while coding and are mostly easy to understand. They have been a thing while coding since the beginning and many have grown up coding with them (at least i have). So how come, something so well used, can be considered &#34;bad&#34;.</p>
<p>Readability.</p>
<p> </p>
<p>Let&#39;s look at some code. What does this line of code do?</p>
<pre class="language-javascript"><code>gr.setValue(&#39;short_description&#39;, gr1.short_description);
</code></pre>
<p> Pretty simple right. It sets the short description of something to the short description of another thing.</p>
<p> </p>
<p>Lets compare that to this:</p>
<pre class="language-javascript"><code>newChildTask.setValue(&#39;short_description&#39;, incident.short_description);</code></pre>
<p>Ok. Does the same thing. But we can actually tell, that this time it has to do with some kind of childTask getting created, probably from within an incident, but most definetly in relation to one. Now we got a lot of information without any business requirement, concept or context.</p>
<p> </p>
<p>Lets add some context:</p>
<pre class="language-javascript"><code>var gr1 &#61; new GlideRecord(&#39;incident&#39;);
if(!gr1.get(this.sysID))
  return;

var gr &#61; new GlideRecord(&#39;incident_task&#39;);
gr.initialize();
gr.setValue(&#39;short_description&#39;, gr1.short_description);
gr.setValue(&#39;parent&#39;, this.sysID);
return gr.insert();</code></pre>
<p>Pretty simple right? This piece of code will set the short_description of a new incident_task to match the incidents one and make the incident the parent. Finally it will return the sys_id. Beautiful. Now what&#39;s the issue with this line of code?</p>
<p> </p>
<p>Well let&#39;s make it readable:</p>
<pre class="language-javascript"><code>var incident &#61; new GlideRecord(&#39;incident&#39;);
if(!incident.get(this.incidentID))
	return;
	
var newChildTask &#61; new GlideRecord(&#39;incident_task&#39;);
newChildTask.initialize();

newChildTask.setValue(&#39;short_description&#39;, incident.short_description);
newChildTask.setValue(&#39;parent&#39;, this.incidentID);
var newChildTaskID &#61; newChildTask.insert();

return newChildTaskID;</code></pre>
<p> Looks almost the same. Now, this goes back to what we have started with. We can read and understand both code pieces. But the first one only allows that, because of the given context.</p>
<p> </p>
<p>Let&#39;s blur the context and add some examples:</p>
<pre class="language-javascript"><code>gr.setValue(&#39;short_description&#39;, gr1.short_description);

newChildTask.setValue(&#39;short_description&#39;, incident.short_description);
requestItem.setValue(&#39;short_description&#39;, catalogItem.short_description);
changeTask.setValue(&#39;short_description&#39;, changeRequest.short_description);
historyEntry.setValue(&#39;short_description&#39;, agreement.short_description);</code></pre>
<p>Where as the first line of code does not change at all, what does it actually do? Without knowing the context this can be quite challenging to guess. What if these operations were spread apart? Sure, the context must be somewhere, but you would have to search for it.</p>
<p> </p>
<p>Going through a particular part of a script, would always leave the question, what this line does:</p>
<pre class="language-javascript"><code>gr.setValue(&#39;short_description&#39;, gr1.short_description);</code></pre>
<p>Sure, going through the rest of the script, looking for the definition of &#34;gr&#34; and &#34;gr1&#34;, would give the answer out of the context.</p>
<p> </p>
<p>But it costs time that could&#39;ve been spend fixing the issue. So:</p>
<p>To maintain code, readablitity is king. Quit using abbreviations. Please.</p>
<p> </p>
---
title: "Query Business Rules A Definitive Guide"
date: 2019-11-10T11:27:06.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=240af05ddb010cd44819fb24399619ca"
---
<p><a name="top"></a></p>
<h1>Query Business Rules: A Definitive Guide</h1>
<p><strong>Contents</strong></p>
<p><a href="#introduction" rel="nofollow">Introduction</a></p>
<p><a href="#when" rel="nofollow">When</a></p>
<p><a href="#order" rel="nofollow">Order</a></p>
<p><a href="#filter_conditions" rel="nofollow">Filter Conditions</a></p>
<p><a href="#roles" rel="nofollow">Role Conditions</a></p>
<p><a href="#actions" rel="nofollow">Actions</a></p>
<p><a href="#advanced" rel="nofollow">Advanced</a></p>
<p><a href="#getting_around_before_query" rel="nofollow">Getting Around Before Query</a></p>
<p><a href="#closing_notes" rel="nofollow">Closing Notes</a></p>
<p> </p>
<p><a name="introduction"></a></p>
<h2>Introduction</h2>
<p>This blog will take us on a deep dive into <strong>Query Business Rules</strong>. This guide is going to attempt to explain what <strong>Query</strong> Rules actually do, stepping through every part of the form and explaining what each part does (and doesn&#39;t) do.</p>
<p>A Before <strong>Query</strong> rule is defined in the Product Documentation as follows:</p>
<pre class="language-markup"><code>Before a query for a record or list of records is sent to the database. 
Typically you should use query for before business rules.</code></pre>
<p><a href="https://docs.servicenow.com/" rel="nofollow">Product Documentation</a> | <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/script/business-rules/reference/r_HowBusinessRulesWork.html" rel="nofollow">How Business Rules Work</a></p>
<p>ServiceNow has depicted the order of <strong>Business Rule</strong> types as shown below:</p>
<p><img src="https://community.servicenow.com/7e0b7011db410cd44819fb24399619e5.iix" /></p>
<p><a href="https://docs.servicenow.com/bundle/newyork-application-development/page/script/business-rules/reference/r_HowBusinessRulesWork.html" rel="nofollow">Business Rule Processing Flow</a> | ServiceNow Product Documentation</p>
<h2> </h2>
<p>A picture tells a thousand words, but you might be reading this far but still wondering, what does a <strong>Before Query</strong> rule actually do and what is it used for?</p>
<p>Let&#39;s create our own <strong>Before Query</strong> <strong>Business Rule</strong> to really understand what is going on when one of these things runs.</p>
<p>Create a new <strong>Business Rule</strong> as shown below. Don&#39;t forget to check Advanced!</p>
<p><img src="https://community.servicenow.com/246cf415db410cd44819fb2439961979.iix" /></p>
<p>Let&#39;s add some code to the Script field in the Advanced Tab.</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {

	gs.addInfoMessage(&#34;Before query: &#34; &#43; current.getEncodedQuery());

})(current, previous);</code></pre>
<p>As per the Product Documentation, this rule runs whenever a list or record is queried from the Database.</p>
<h3>Before Query Info Message</h3>
<h4>From a List</h4>
<p>I navigate to a List of Incidents:</p>
<p><img src="https://community.servicenow.com/6aaf78dddb410cd44819fb243996198b.iix" /></p>
<p>You can see the filter and order is there in the <strong>Encoded Query</strong>. If you would like to know more about encoded queries, I&#39;d suggest reading my blog <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;cfd850dbdbb36f00fece0b55ca9619f4" target="_blank" rel="noopener noreferrer nofollow">Decoding Encoded Queries</a>.</p>
<p>The thing that really sets this apart from other <strong>Business Rules</strong> is that it doesn&#39;t always run in the context of a record, but can run in the context of a list! The context is the <strong>query</strong>, which is a very important concept to wrap your head around when playing around with <strong>Query Rules</strong>.</p>
<h4>From a Record</h4>
<p>And I navigate to an Incident:</p>
<p><img src="https://community.servicenow.com/6bef7011db810cd44819fb24399619f1.iix" /></p>
<p>Notice that my <strong>query</strong> changes when I open an individual Incident. It has the sys_id of the record.</p>
<h4>In Code</h4>
<p>You can see that it is run before the <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;madrid&amp;id&#61;r_ScopedGlideRecordQuery_Object_Object" rel="nofollow">query()</a> function is called in ad-hoc code.</p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;incident&#39;);
gr.addActiveQuery();
gs.log(&#39;Before query: &#39; &#43; gr.getEncodedQuery());
gr.query();
</code></pre>
<p><strong>Output</strong></p>
<pre class="language-markup"><code>Before query: active&#61;true</code></pre>
<p>From the experiments above you can see that<strong> Before Query Business Rules</strong> can be used to modify the <strong>query</strong> before the records are returned.</p>
<p>Continuing with our example Business Rule, let&#39;s add a <strong>query</strong> to filter out all inactive records.</p>
<p>Take note on an Inactive Incident:</p>
<p><img src="https://community.servicenow.com/5d340d99db810cd44819fb243996197c.iix" /></p>
<p>Let&#39;s add some code to the script field in our sample <strong>Business Rule</strong>:</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {

	current.addQuery(&#39;active&#39;,true);
	gs.addInfoMessage(&#34;Before query: &#34; &#43; current.getEncodedQuery());

})(current, previous);</code></pre>
<h3>From a List</h3>
<p>Let&#39;s open our list of Incidents again. This time we will not use any <strong>filters</strong>.</p>
<p><img src="https://community.servicenow.com/b4f2c5d5db810cd44819fb2439961981.iix" /></p>
<p>An &#39;active&#61;true&#39; check has now been added to all Incident queries. This means I can no longer see inactive Incidents, no matter how hard I try.</p>
<p><img src="https://community.servicenow.com/af830159db810cd44819fb243996190e.iix" /></p>
<h3>From a Record</h3>
<p>Let&#39;s try to navigate to an inactive record INC0009004</p>
<p><img src="https://community.servicenow.com/d5a48dd9db810cd44819fb243996197f.iix" /></p>
<p>We can&#39;t! The record no longer exists.</p>
<p>Couldn&#39;t we have just done this with <strong>Access Control Lists</strong> <strong>(ACLs)</strong>?</p>
<p>After adding Active&#61;true to all row-level <strong>ACL&#39;s</strong></p>
<p><img src="https://community.servicenow.com/97f78595dbc10cd44819fb2439961953.iix" /></p>
<p>Let&#39;s see what it would have looked like:</p>
<h3>From a List</h3>
<p><img src="https://community.servicenow.com/af668ddddb810cd44819fb2439961935.iix" /></p>
<h3>From a Record</h3>
<p><img src="https://community.servicenow.com/3a170d91dbc10cd44819fb243996196b.iix" /></p>
<p>The form loads, but I can only see the tabs. I suspect there are some Task level <strong>ACL&#39;s </strong>that are still providing visibility to the record.</p>
<p>Similar to <strong>ACL&#39;s</strong>, <strong>Before Query</strong> rules can be used to enforce security without the user knowing how many records are hidden from them. That is their primary use.</p>
<p>Now that we understand what <strong>Before Query</strong> rules do, let&#39;s have a play around with the different options on the form. This is where it gets a little weird.</p>
<p>Below shows all the aspects of Business Rules we will go through in this blog, marked in red. This guide is categorized into by these aspects.</p>
<p><img src="https://community.servicenow.com/e6c28d521b4d0c94fff162c4bd4bcbea.iix" /></p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><strong><a name="when"></a></strong></p>
<h2>When</h2>
<p>So, what does the role of <strong>When</strong> play, if <strong>Query</strong> rules happen before <strong>after</strong>, <strong>before</strong> and <strong>display</strong> rules?</p>
<p><img src="https://community.servicenow.com/02fdb419db410cd44819fb24399619d8.iix" /></p>
<p>As you can see, they only ever run before a database <strong>update. </strong>If you change this value to <strong>after</strong> or <strong>async</strong>, your rule will not work as expected.</p>
<p>Interestingly, there are 1 <strong>async</strong> and 8 <strong>display Query</strong> <strong>rules</strong> OOTB!</p>
<p><img src="https://community.servicenow.com/2564cbb3db058090d58ea345ca961956.iix" /></p>
<p>Let&#39;s look at <strong>Display</strong> rule &#39;Warn date validation Issues&#39;</p>
<p><img src="https://community.servicenow.com/3f874fb3db098090d58ea345ca9619b9.iix" /></p>
<p>It appears to be doing date validation on the Beginning and End of a CI outage.</p>
<p>We can see this on the following Outage record:</p>
<p><img src="https://community.servicenow.com/f238c3bfdb098090d58ea345ca9619e6.iix" /></p>
<p>If I remove the &#39;Query&#39; checkbox, it appears to make absolutely no difference what-so-ever.</p>
<p>The message still shows!</p>
<p>Comment below if you know of a Use Case for a <strong>Query</strong> rule that is not When&#61;Before!</p>
<p><strong>TLDR: </strong>When using <strong>Business Rules</strong> exclusively for <strong>Queries</strong>, set <strong>When</strong> to <strong>Before</strong>.</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><a name="order"></a></p>
<h2>Order</h2>
<p>Let&#39;s modify our <strong>Business Rule</strong> to print out the current order. Something like this:</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {

	//current.addQuery(&#39;active&#39;,true);
	gs.addInfoMessage(&#34;100 Before query: &#34; &#43; current.getEncodedQuery());

})(current, previous);</code></pre>
<p>Let&#39;s create a copy of our existing <strong>Business Rule</strong> and change the order to 200. Change the Info Message to 200 as well and use our old friend &#39;Insert and Stay&#39; to make this quick.</p>
<p>After a quick test:</p>
<p><img src="https://community.servicenow.com/2a684d521b414c94fff162c4bd4bcb34.iix" /></p>
<p>It looks like the Order is respected.</p>
<p><strong>TLDR: </strong>Order works just as it does for any other type of <strong>Business Rule</strong>.</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><a name="filter_conditions"></a></p>
<h2>Filter Conditions</h2>
<p>You might think that because Filter Conditions are on the form, that they might have an effect on your <strong>Business Rule</strong>.</p>
<p>What if we only wanted the <strong>query</strong> to run for records that meet a particular condition?</p>
<p>We need to remind ourself that these rules are run in the context of a Glide Record <strong>Query</strong>, not a record like every other <strong>Business Rules</strong>. Does it even make sense for a <strong>Before Query</strong> rule to have conditions? Maybe it will add that to the <strong>query?</strong></p>
<p>But let&#39;s try it out!</p>
<p><img src="https://community.servicenow.com/52ea49561bc14c94fff162c4bd4bcbf0.iix" /></p>
<p>Returning to a List of Incidents...</p>
<h3>Adding filter conditions to a Query rule</h3>
<h4><strong>From a List</strong></h4>
<p><img src="https://community.servicenow.com/953b459a1bc14c94fff162c4bd4bcb27.iix" /></p>
<h4>From a Record</h4>
<p>And our 200 order <strong>Query</strong> is officially broken.</p>
<p>It is a common misconception that the filter condition we set will be added to the current <strong>query</strong>.</p>
<p><strong>Filter Conditions do not append to the current Query!</strong></p>
<p>Again, this is because the record in context is a GlideRecord object that has not been initialised or queried.</p>
<h4>In Code</h4>
<p>What is the value of Active at this time? Let&#39;s use XPlore to find out. </p>
<p>Running this code:</p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;incident&#39;);
gr.addActiveQuery();
gr.getValue(&#39;active&#39;);</code></pre>
<p><strong>Output</strong></p>
<pre class="language-markup"><code>null</code></pre>
<p>Our <strong>Business Rule</strong> is running on the condition that null&#61;&#61;true. No wonder it isn&#39;t working.</p>
<p><strong>TLDR: </strong>Don&#39;t use Filter conditions.</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><a name="roles"></a></p>
<h2>Roles</h2>
<p>Let&#39;s have a look at <strong>Roles</strong>. Surely this should work?</p>
<p>Add the role &#39;itil&#39; to our new rule with an order of 200.</p>
<p>Be sure to remove any previous Filter Conditions. And to save the record, of course!</p>
<p><img src="https://community.servicenow.com/5becc11e1b054c94fff162c4bd4bcba7.iix" /></p>
<p>After impersonating an itil user, I can confirm that it works as expected.</p>
<p><strong>TLDR: </strong>You can still use the &#39;Role conditions&#39; field as you would in any other <strong>Business Rule</strong>.</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><a name="actions"></a></p>
<h2>Actions</h2>
<p>Let&#39;s try adding some field values to the &#39;Set field values&#39; tab.</p>
<p><img src="https://community.servicenow.com/584f45d21bc54c94fff162c4bd4bcb25.iix" /></p>
<h3>Setting Field Values </h3>
<h4>From a List</h4>
<p><img src="https://community.servicenow.com/2a684d521b414c94fff162c4bd4bcb34.iix" /></p>
<p>By now you have probably worked out that setting field values doesn&#39;t make any sense, given the context we are in.</p>
<p>But what about from a record?</p>
<h4>From a Record</h4>
<p><img src="https://community.servicenow.com/c4ef815e1bc54c94fff162c4bd4bcb9d.iix" /></p>
<p>The value has not changed.</p>
<h4>In Code</h4>
<p>It would be like writing this in code and actually expecting it to change the value of impact</p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;incident&#39;);
gr.addQuery(&#39;impact&#39;,&#39;!&#61;&#39;,&#39;1&#39;); // To make sure we don&#39;t get any impact 1 tickets
gr.impact &#61; 1;
gr.query();
gr.next()
gr.getValue(&#39;impact&#39;);</code></pre>
<p><strong>Output</strong></p>
<pre class="language-markup"><code>2</code></pre>
<p>Do I really need to talk about Abort action or Set Message? I&#39;m only using addInfoMessage() for learning purposes here, I don&#39;t think it would have any practical use case.</p>
<p><strong>TLDR: </strong>Actions do nothing in <strong>Query</strong> rules.</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><a name="advanced"></a></p>
<h2><strong>Advanced</strong></h2>
<p>The Advanced tab is where we write our Script to manipulate the <strong>query</strong>.</p>
<p>Let&#39;s say that we are given the following requirements:</p>
<ul><li>Hide all inactive Incidents</li><li>UNLESS you are the &#39;Calle&#39;r or &#39;Assigned to&#39; user</li></ul>
<p><img src="https://community.servicenow.com/aa54c72a1b0d8c107a5933f2cd4bcbfa.iix" /></p>
<p>Take note of how many Inactive records there are. There were 29 Inactive Incidents in our system.</p>
<p>Let&#39;s start by building this as a list filter so we can copy the <strong>encoded query</strong>.</p>
<p>We are going to have to use a <strong>New Query</strong> Or for this. If you would like to know more about encoded queries, check out my blog <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;cfd850dbdbb36f00fece0b55ca9619f4" target="_blank" rel="noopener noreferrer nofollow">Decoding Encoded Queries</a>.</p>
<p><img src="https://community.servicenow.com/f2628faadb8d88d05129a851ca961904.iix" /></p>
<p>Take note of the number of matching records (56). We should see this number after we apply our <strong>Query</strong> rule.</p>
<p>By right-clicking on the breadcrumbs and selecting &#39;Copy query&#39; we are given the following <strong>encoded query</strong>:</p>
<pre class="language-markup"><code>active&#61;true^NQcaller_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe</code></pre>
<p>We can copy this <strong>query</strong> into our code like this</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {

	var encQry &#61; &#34;active&#61;true^NQcaller_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe&#34;;
    current.addEncodedQuery(encQry);
	gs.addInfoMessage(&#34;200 Before query: &#34; &#43; current.getEncodedQuery());

})(current, previous);</code></pre>
<p>Save your changes and test it out.</p>
<h3>Adding Queries</h3>
<h4>From a List</h4>
<p><img src="https://community.servicenow.com/1be40b221b4d8c107a5933f2cd4bcb47.iix" /></p>
<p>56 results. Perfect.</p>
<p>Let&#39;s not forgot though, <strong>Query</strong> rules are applied when just a single record is opened too.</p>
<p>Let&#39;s check out INC0009009.</p>
<h4>From a Record</h4>
<p><img src="https://community.servicenow.com/12350be21b4d8c107a5933f2cd4bcb26.iix" /></p>
<p>Wait...</p>
<p>What?</p>
<p>INC00090001!</p>
<p>Let&#39;s try INC0009005.</p>
<p><img src="https://community.servicenow.com/fb75cbaa1b4d8c107a5933f2cd4bcbce.iix" /></p>
<p>Now I am shown INC0009009!</p>
<p>Take a look at the <strong>query</strong> in full:</p>
<p>sys_id&#61;ed92e8d173d023002728660c4cf6a7bc^active&#61;true^<strong>NQ</strong>caller_idDYNAMICjavascript:gs.getUserID()^ORassigned_toDYNAMICjavascript:gs.getUserID()^EQ</p>
<p>Because we added a New <strong>Query</strong>, the active&#61;true has been added to the sys_id check, THEN the new <strong>Query</strong> begins.</p>
<p>If the record we are trying to get to is not active, we will instead get served something from the second part of the <strong>query</strong> - a record where I am the caller or Assigned to User.</p>
<p>If you are going to add a New <strong>Query</strong> to a <strong>Query</strong> Rule, you must be very cautious and test both for the individual records and lists.</p>
<p>We can get this to work as desired by changing our <strong>query</strong> as follows:</p>
<p><img src="https://community.servicenow.com/3bcf43ea1b85cc107a5933f2cd4bcbd2.iix" /></p>
<pre class="language-markup"><code>active&#61;true^ORcaller_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe</code></pre>
<p>Using this in our <strong>Query</strong> rule</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {

	var newQry &#61; &#34;^active&#61;true^ORcaller_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe^&#34;;
	current.addEncodedQuery(newQry);
	gs.addInfoMessage(&#34;200 Before query: &#34; &#43; current.getEncodedQuery());

})(current, previous);</code></pre>
<p>will now show the correct results when clicking through to individual records.</p>
<p><strong>TLDR:</strong> Beware of adding New Queries (^NQ) in <strong>Query</strong> Rules!</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><a name="getting_around_before_query"></a></p>
<h2>Getting Around Before Query</h2>
<p>Once you have set up your <strong>Before Query</strong>, is there ever a way to get around it?</p>
<p>Every time .query() is called <strong>Before Query</strong> rules jump into action. It will add it to whatever query you have.</p>
<h3>Global Scope</h3>
<p>It is possible to disable <strong>Business Rules</strong> with the following API:</p>
<pre class="language-javascript"><code>current.setWorkflow(true);</code></pre>
<p><a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;newyork&amp;id&#61;r_GlideRecord-setWorkFlow_Boolean" rel="nofollow">GlideRecord.setWorkflow()</a> | ServiceNow Legacy API New York</p>
<p>We also know that <strong>Query</strong> rules are a little different from the other <strong>Business Rules</strong>, so will it work for this Use Case?</p>
<p>OOTB, the User table has a <strong>Query Business Rule</strong> that hides all inactive user records, unless you have admin or <strong>itil_admin</strong> roles.</p>
<p>Let&#39;s impersonate an ITIL user and try the following ad-hoc code:</p>
<pre class="language-javascript"><code>function outputResults(gr) {
  var resultCount &#61; gr.getRowCount();
  var encodedQuery &#61; gr.getEncodedQuery();
  gs.log(&#39;qry: &#39; &#43; encodedQuery &#43; &#34; returns &#34; &#43; resultCount  &#43; &#34; records.&#34;);
}

var grUser &#61; new GlideRecord(&#39;sys_user&#39;);
grUser.query();
gs.log(&#34;Query rule takes affect:&#34;);
outputResults(grUser);
var grUser &#61; new GlideRecord(&#39;sys_user&#39;);
grUser.setWorkflow(false);
grUser.query();
gs.log(&#34;After setWorkflow(false):&#34;);
outputResults(grUser);

</code></pre>
<p>Output below:</p>
<pre class="language-markup"><code>Query rule takes affect:
qry: active&#61;true returns 688 records.
After setWorkflow(false)
qry: returns 689 records.</code></pre>
<p>You can see through the eyes of an admin that the results check out:</p>
<p><img src="https://community.servicenow.com/33f003fbdbcd4090d58ea345ca9619f0.iix" /></p>
<p>.setWorkflow(false) works to bypass <strong>Query Business Rules</strong>, just like all others.</p>
<h3>Application Scopes</h3>
<p>.setWorkflow(false) is not allowed in Scope.</p>
<p><img src="https://community.servicenow.com/2681c3fbdb018090d58ea345ca96191c.iix" /></p>
<p>As not to repeat myself, I have documented the workaround for bypassing <strong>Query Rules</strong> using REST in my other blog <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;72b0f06adb3d33801cd8a345ca96194d#b4query" rel="nofollow">Not Allowed In Scope: The Only Workaround Guide You Need</a></p>
<p><strong>TLDR: </strong>To bypass Query rules, use .setWorkflow(false) in <strong>Global</strong> or REST if you are in an <strong>Application Scope</strong>.</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
<p><a name="closing_notes"></a></p>
<h2>Closing Notes</h2>
<p><strong>Query</strong> rules are interesting creatures.</p>
<p>Below is a screenshot of the <strong>Query Business Rule</strong> form, with all the useless fields obfuscated:</p>
<p><img src="https://community.servicenow.com/33db8bb7db8d8090d58ea345ca96190d.iix" /></p>
<p><img src="https://community.servicenow.com/21bb4733db8d8090d58ea345ca9619bb.iix" /></p>
<p>When I started writing this blog, I felt that they didn&#39;t even belong under the category of <strong>Business Rules</strong>. After all, filter conditions and set values don&#39;t do anything and often break your rules completely. Order isn&#39;t really necessary as generally you only need one <strong>Query</strong> rule, however, I do think it is good practice to create one rule per role that you are applying the <strong>query</strong> to. They are very different from every other type of <strong>Business Rule</strong> and I thought they would have made more sense as being a special rule on the Table itself.</p>
<p>After exploring the many facets of <strong>Query</strong> Rules, it makes perfect sense for them to be <strong>Business Rules</strong>. I wasn&#39;t thinking about <strong>Query</strong> rules the wrong way - I was thinking about <strong>Business Rules</strong> the wrong way! They are not rules that are performed on a record, but rules applied to the GlideRecord object, which could be just one record - or a <strong>query</strong> of record(s). Then it starts to make more sense.</p>
<p>I&#39;ve never used <strong>Query</strong> rules for any other purposes than &#39;Security by Obscurity&#39; - hiding records from users, including the number of results users, do not have access to. </p>
<p>I feel it would just be easier if ServiceNow provided the option for <strong>ACL&#39;s</strong> to obscure the number of results the user can&#39;t see. As far as I can tell, that would eliminate the need for <strong>Query</strong> rules altogether.</p>
<p>Perhaps their days are numbered if my <a href="https://community.servicenow.com/community?id&#61;view_idea&amp;sysparm_idea_id&#61;8cdcc77fdbcd8090d58ea345ca9619dd&amp;sysparm_idea_table&#61;x_snc_com_ideation_idea&amp;sysparm_module_id&#61;enhancement_requests" target="_blank" rel="noopener noreferrer nofollow">Idea</a> to remove it gets approved for inclusion in a future release...</p>
<p><strong>TLDR: Query</strong> rules are uniquely different from <strong>Insert</strong>, <strong>Update</strong> &amp; <strong>Delete Business rules.</strong></p>
<p> </p>
<p>If you enjoyed this blog, please see <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;12d41149db7b67805129a851ca961966" target="_blank" rel="noopener noreferrer nofollow">here</a> for my full series of ServiceKnow-How blogs!</p>
<p><a href="#top" rel="nofollow">Go to top</a></p>
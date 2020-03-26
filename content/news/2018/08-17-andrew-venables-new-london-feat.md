---
title: "New London Feature for Store developers Extension Points"
date: 2018-08-16T14:21:04.000Z
authors: ["andrew.venables"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f68a4308db88ab40200f0b55ca96191a"
---
<p>In January i wrote about a <a href="community?id&#61;community_blog&amp;sys_id&#61;0d0d6aa5dbd0dbc01dcaf3231f9619a5" target="_blank" rel="nofollow">technique</a> that allows Store partners to ship protected script includes in their application whilst maintaining the ability for customers to customise and extend the functionality of the script. This technique was important because it allowed Store partners to lock down their script includes and protect their intellectual property but also leave a mechanism open for either the customer, the implementation team or the partner support team to implement changes to the behaviour of that script in a controlled way.</p>
<p>With the release of London we have a new feature called <a href="https://docs.servicenow.com/bundle/london-application-development/page/build/applications/concept/extension-points.html" target="_blank" rel="nofollow">Extension Points</a> which uses a similar technique and provides the same features and benefits as my previous technique but in a controlled way with even more flexibility.</p>
<p> </p>
<p>So what are extension points? Well extension points are specific call outs in your code that call out to other scripts allowing for a customisable sub-routine to be used anywhere in your code without the need to expose the rest of the code.</p>
<p>First lets take a look at a script that we want to make extensible, for this lets start with a simple script that will sort an array. As this script contains some of our highly valuable secrets we will mark this script include with a protection policy of <strong>Protected</strong> meaning a customer is unable to view or edit it.</p>
<p> </p>
<pre class="language-javascript"><code>var MyScript &#61; Class.create();
MyScript.prototype &#61; {
    
	initialize: function(data) {
		this.DATA &#61; data;
		// some super secret code goes here:
		var theMeaningOfLife &#61; 42;
	},
	
	process: function() {	
		gs.debug(&#39;before: &#39;&#43;JSON.stringify(this.DATA));			
		this.DATA.sort();
		gs.debug(&#39;after: &#39;&#43;JSON.stringify(this.DATA));
	},

	type: &#39;MyScript&#39;
};</code></pre>
<p> </p>
<p>If we run this as a background script, we get the following sorted array as output:</p>
<pre class="language-markup"><code>x_snc_ext_point (MyScript): before: [&#34;dog&#34;,&#34;cat&#34;,&#34;hamster&#34;,&#34;aardvark&#34;] 
x_snc_ext_point (MyScript): after: [&#34;aardvark&#34;,&#34;cat&#34;,&#34;dog&#34;,&#34;hamster&#34;] </code></pre>
<p> </p>
<p>But now lets assume we want to make the actual sort algorithm customisable by the customer. Since the whole script include is marked as protected it will not be editable by the customer in their instance once deployed via the Store. Even if we didn&#39;t protect the script include it wouldn&#39;t be a great idea for the customer to customise the script include directly since that would cause any future versions published by the vendor to be skipped.</p>
<p> </p>
<p>So now lets register a new Extension Point:</p>
<ol class="ol steps"><li class="li step stepexpand">In the Navigation filter, enter sys_extension_point.list. A list of extension points in the <strong>Extension Point</strong> [sys_extension points] table appears.</li><li class="li step stepexpand">Click <strong><span class="ph uicontrol">New</span></strong></li><li class="li step stepexpand"><span class="ph cmd">On the form, fill in the fields.</span></li><li><ol><li class="li step stepexpand"><span class="ph cmd">Name:  MySortAlgorithmExt</span></li><li class="li step stepexpand">Restrict to this scope: Unchecked (this allows the customer to create the extension points in other scopes)</li><li class="li step stepexpand">Example: 
<pre class="language-javascript"><code>var MySortAlgorithmExt &#61; Class.create();
MySortAlgorithmExt.prototype &#61; {

    initialize: function() {
    },

    process: function(/*array*/ data) {
	var sorted &#61; [];
        for (var i&#61;0; i&lt;data.length; i&#43;&#43;) {
	        // implement custom sort
	}
        return sorted;
    },

    type: &#39;MySortAlgorithmExt&#39;
};</code></pre>
</li><li class="li step stepexpand"><span class="ph cmd">Save the record.</span></li></ol>
</li></ol>
<p> </p>
<p>At this point we have registered an extension point in the instance, but we haven&#39;t actually created any extensions yet. So now we can setup our script to call out to the extension points if any have been created, for this we modify the script include we created earlier like so:</p>
<p> </p>
<pre class="language-javascript"><code>var MyScript &#61; Class.create();
MyScript.prototype &#61; {
    
	initialize: function(data) {
		this.DATA &#61; data;
		// some super secret code goes here:
		var theMeaningOfLife &#61; 42;
	},
	
	process: function() {	
		gs.debug(&#39;before: &#39;&#43;JSON.stringify(this.DATA));			
		var epArr &#61; new GlideScriptedExtensionPoint().getExtensions(&#39;MySortAlgorithmExt&#39;);
		if (epArr.length &gt; 0) {
			var ep &#61; epArr[0];
			this.DATA &#61; ep.process(this.DATA);
		} else {
			this.DATA.sort();
		}
		gs.debug(&#39;after: &#39;&#43;JSON.stringify(this.DATA));
	},

	type: &#39;MyScript&#39;
};</code></pre>
<p> </p>
<p>As you can see our process method will now check for the presence of an extension with our unique name and if so call it with the array to be sorted. Alternatively if there are no extensions yet then the original sort algorithm will be used. If we run the script again we get the same output since at this point there are no implementations of the extension point to be called. </p>
<p>Now if we create a new implementation of a registered extension point using the &#34;Create Implementation&#34; related link on the extension point form we get taken to a new Script Include with the unique name of the extension point, this is where the customer can implement the custom sort logic for example with a script such as the below:</p>
<p> </p>
<pre class="language-javascript"><code>var MySortAlgorithmExt &#61; Class.create();
MySortAlgorithmExt.prototype &#61; {
    initialize: function() {
    },

    process: function(/*array*/ data) {
	data.sort();
	data.reverse();
	return data;
    },

    type: &#39;MySortAlgorithmExt&#39;
};</code></pre>
<p> </p>
<p>If we re-run our background script we get the array sorted in reverse alphabetical order:</p>
<pre class="language-markup"><code>x_snc_ext_point (MyScript): before: [&#34;dog&#34;,&#34;cat&#34;,&#34;hamster&#34;,&#34;aardvark&#34;] 
x_snc_ext_point (MyScript): after: [&#34;hamster&#34;,&#34;dog&#34;,&#34;cat&#34;,&#34;aardvark&#34;] </code></pre>
<p> </p>
<p>Most importantly customers can customise the scripts without us giving away our secret sauce!</p>
<p> </p>
<p>Another notable feature is that the line:</p>
<pre class="language-javascript"><code>var epArr &#61; new GlideScriptedExtensionPoint().getExtensions(&#39;&lt;ext_name&gt;&#39;);</code></pre>
<p>actually returns an array of <span style="text-decoration: underline;">all</span> implemented extension points with the &lt;ext_name&gt;, meaning you can have more than one. This could be useful if you wanted to apply multiple scripts, all you need to do is swtich the if statement for a loop. The returned array will even be sorted by the &#34;Order&#34; field and will automatically filter our any inactive scripts!</p>
<p> </p>
<p>Happy scripting :)</p>
<p> </p>
---
title: "Suggestion Tool"
date: 2018-08-25T02:26:07.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ad3d367edb806f04feb1a851ca961953"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>The <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/field-administration/task/t_AddingASuggestionField.html" target="_blank" rel="noopener noreferrer nofollow">Suggestion Field Type</a> is a bit of a pain to work with on fields that are inherited, like &#34;Short description&#34; on the Task table.  And it&#39;s not even a true Field Type, more of an added feature of String fields.  The feature allows you to add pre-defined values by setting the &#34;Choice&#34; field to &#34;Suggestion&#34;:</p>
<p><img src="8d2af6badb406f04feb1a851ca961905.iix" /></p>
<p>This will add a lightbulb icon to the right of a field:<img src="4f1b76fedb406f04feb1a851ca961956.iix" />Clicking the icon will open a window with a list of pre-defined values to select from:</p>
<p><img src="2addb272dbc06f04feb1a851ca961927.iix" width="334" height="457" /> </p>
<p>You can also start typing in the field to get a list of values that match what you are typing:</p>
<p><img src="688eb636dbc06f04feb1a851ca96192d.iix" /></p>
<p>Overall, it&#39;s a nice feature, BUT, there are some issues with it:</p>
<ul><li>the icon appears even if there are no suggestions to select from for that table&#39;s inherited field</li><li>because of how it is configured, you cannot hide the icon on inherited fields you don&#39;t want it on (no Dictionary Override capability)</li></ul>
<p>I&#39;ve come up with a workaround that replaces the functionality, allowing you to use it on just the fields you want it on.  <strong>One caveat - the type-ahead feature is not supported</strong>.  But that may not be a big deal for most implementations.</p>
<p>First, we create a new UI Macro that does all the work:</p>
<p>Name: u_fpc_show_suggestions<br />XML:</p>
<pre class="language-markup"><code>&lt;?xml version&#61;&#34;1.0&#34; encoding&#61;&#34;utf-8&#34; ?&gt;
&lt;j:jelly trim&#61;&#34;false&#34; xmlns:j&#61;&#34;jelly:core&#34; xmlns:g&#61;&#34;glide&#34; xmlns:j2&#61;&#34;null&#34; xmlns:g2&#61;&#34;null&#34;&gt;
	&lt;g2:evaluate &gt;
		//var title &#61; gs.getMessage(&#34;u_fpc_show_suggestions_title&#34;);  //uncomment if you want a Message record to contain the icon&#39;s hint
		var title &#61; &#34;Show some suggested values&#34;;
		var table &#61; &#34;${ref}&#34;.split(&#34;.&#34;)[0];
		var element &#61; &#34;${ref}&#34;.split(&#34;.&#34;)[1];
		var choices &#61; 1;  // set to 0 if you want to check for options (not the most efficient)
	/*  remove matching block comments if you want to check for options (not the most efficient)
		//check the Choices table to see if there are any suggestions for this field
		var count &#61; new GlideAggregate(&#34;sys_choice&#34;);
		count.addAggregate(&#34;COUNT&#34;);
		count.addEncodedQuery(&#34;inactive&#61;false^name&#61;&#34; &#43; table &#43; &#34;^element&#61;&#34; &#43; element);
		count.query();
		if (count.next()) {
		   choices &#61; count.getAggregate(&#34;COUNT&#34;);
		}
	*/
		var style &#61; choices &#61;&#61; 0 ? &#34;display: none&#34; : &#34;display:&#34;;
	&lt;/g2:evaluate&gt;
		&lt;a id&#61;&#34;u_fpc_show_suggestions.${ref}&#34; name&#61;&#34;u_fpc_show_suggestions_${ref}&#34; data-type&#61;&#34;pick_list&#34; data-ref&#61;&#34;${ref}&#34; data-table&#61;&#34;$[table]&#34; data-element&#61;&#34;$[element]&#34; data-dependent&#61;&#34;null&#34; tabindex&#61;&#34;-1&#34; role&#61;&#34;button&#34; class&#61;&#34;btn btn-default btn-ref&#34; title&#61;&#34;$[title]&#34; style&#61;&#34;$[style]&#34;&gt;
                &lt;span class&#61;&#34;icon icon-lightbulb&#34; style&#61;&#34;;&#34;&gt;&lt;/span&gt;
	&lt;/a&gt;

&lt;/j:jelly&gt;</code></pre>
<p>You can add a Message record to contain the hint for the icon, but it&#39;s probably just easier to hard-code it right into the UI Macro (lines 4/5).  I like to use Message and System Property records instead of hard-coding things, but you should weigh the costs versus benefits before creating too many user-definable settings.  For instance, a Message record here would be perfect in a multilingual instance.</p>
<p>There is some commented out code that verifies if there are entries available or not.  If there are none, the icon is hidden.  This does not necessarily make sense in normal implementation as you wouldn&#39;t add the feature to a field unless you have some values setup in the Choice table.  But, there could be some scenarios where this make sense, so you set &#34;choices &#61; 0&#34; on line 8 and remove lines 9 and 18 to add the check.</p>
<p>To add the icon to a field, add the name of the UI Macro to the field&#39;s &#34;field_decoration&#34; <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/reference-pages/concept/c_DictionaryAttributes.html" target="_blank" rel="noopener noreferrer nofollow">dictionary attribute</a>.  For instance, to disable the OOB functionality on the Task&#39;s Short description field, set the Choice field to &#34;-- None --&#34;:</p>
<p><img src="133db823db80e344feb1a851ca96191e.iix" /></p>
<p>That will remove the icon from all Short description fields on tables extended from Task.  Then, create a Dictionary Override for the Incident table and override the attributes field:</p>
<p><img src="15cd30a3db80e344feb1a851ca9619cd.iix" /></p>
<p>The contents of the &#34;Attributes&#34; field will, of course, depend on your particular implementation, so it may vary from the above.  The important thing here is adding the &#34;field_decorations&#61;u_fpc_show_suggestions&#34; part.</p>
<p>This will then add the lightbulb icon beside the Short description field on the Incident table only.  To add it to others, just create new or modify existing Dictionary Override records and add the &#34;field_decorations&#61;u_fpc_show_suggestions&#34; attribute.</p>
<p>Now we have the Short description on Incident <strong>with</strong> the icon:</p>
<p><img src="5a9145ebdb80e344feb1a851ca9619dc.iix" /></p>
<p>...and Short description on Change Request <strong>without</strong> the icon:</p>
<p><img src="72a5c167dbc0e344feb1a851ca961967.iix" /></p>
<p>And the nice thing about this solution is there&#39;s no DOM manipulation involved to hide the icon on the fields that it should not appear with.</p>
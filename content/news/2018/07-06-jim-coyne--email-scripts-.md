---
title: "Email Scripts Related List"
date: 2018-07-06T04:40:48.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=be8c3d7adb4b5fc4a39a0b55ca9619f3"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>Here&#39;s a replacement for the &#34;Show Notification Scripts&#34; UI Action on the Notification form.  It&#39;s a Relationship record that allows you to add a Related List to the bottom of the Notification form to display the Email Scripts that are referenced from within the Notification:</p>
<p><img src="7b4771fadb0b5fc4a39a0b55ca9619f4.iix" /></p>
<p>To add it, create a new Relationship record (System Definitions \ Relationships) with the following details:</p>
<pre>Name: Email Scripts<br />Applies to table: Notification [sysevent_email_action]<br />Queries from table: Email Script [sys_script_email]<br />Query with:</pre>
<pre class="language-javascript"><code>(function refineQuery(current, parent) {
	var mailScript &#61; [];
	var names &#61; [];
	var query &#61; &#34;sys_id&#61;-1&#34;;  //default so no records are returned/shown

	//get the contents of the Message or Message HTML field
	var message &#61; &#34;&#34;;
	if (parent.sys_version &#61;&#61; 2) {
		message &#61; parent.getValue(&#34;message_html&#34;);
	} else {
		message &#61; parent.getValue(&#34;message&#34;);
	}

	//find any script names within the message
	var regex &#61; /\$\{mail_script:(.[^}]*)?\}/g;
	while ((mailScript &#61; regex.exec(message))) {
		names.push(mailScript[1]);
	}

	//create the query if any script names were found
	if (names.length &gt; 0){
		query &#61; &#34;nameIN&#34; &#43; names.join(&#34;,&#34;);
	}

	//get the list of scripts based on what was found in the message field
	current.addEncodedQuery(query);
})(current, parent);</code></pre>
<p>Once you create the record, add the <a href="https://docs.servicenow.com/bundle/kingston-platform-user-interface/page/use/using-forms/concept/c_RelatedLists.html" rel="nofollow">Related List</a> by right-clicking the form header and selecting &#34;Configure \ Related Lists&#34; menu item and move the &#34;Email Scripts&#34; item from the &#34;Available&#34; box over to the &#34;Selected&#34; box and click &#34;Save&#34;.  You will want to add it to both the Default and Advanced views.</p>
<p>If you want to remove the &#34;New&#34; button, right-click a list column header and select the &#34;Configure \ List Control&#34; menu item and check the &#34;Omit new button&#34; checkbox and then click the &#34;Update&#34; button.</p>
<p>The nice thing about this approach is you can see the Email Scripts being referenced in the Notification without being taken away to another window.</p>
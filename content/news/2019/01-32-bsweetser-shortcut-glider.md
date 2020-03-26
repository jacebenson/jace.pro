---
title: "Shortcut GlideRecord Queries with get"
date: 2019-01-31T21:48:09.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b23e65d6db5bab002e8c2183ca9619e0"
---
<p>We are experimenting with new training content delivery methods for the Developer Program. This tutorial blog post is one of those experiments. We are very interested in your feedback. Please let us know what you think about this format and the content in the comments below. In particular, we would like to know:</p>
<ul><li>Did you do the hands-on (or plan to do the hands-on) or just read through the content?</li><li>Do you prefer to access this type of learning content here on the Community or on the <a href="https://developer.servicenow.com/blog.do" target="_blank" rel="noopener noreferrer nofollow">Developer Blog</a>?</li><li>What topics would you like to see in the future?</li></ul>
<p>If you found this post helpful, please mark it <strong>Helpful</strong>. Your feedback helps us determine where to focus our efforts to provide you with valuable learning content.</p>
<h2 id="introduction">Introduction</h2>
<p>Sometimes you know exactly what you want. You do not have the server at a restaurant bring you every chicken item on the menu and then decide which to eat. You just select the dish you want. When you order directly, you use fewer resources.</p>
<p>Directly retrieve a specific record in a single line of code with the <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;london&amp;id&#61;r_ScopedGlideRecordGet_Object_Object" target="_blank" rel="noopener noreferrer nofollow">GlideRecord get() method</a>. A typical GlideRecord query to get the same record requires steps to:</p>
<ul><li>addQuery</li><li>query</li><li>next</li></ul>
<p>The topics in this post build on concepts in the <a href="https://developer.servicenow.com/app.do#!/training/article/app_store_learnv2_scripting_london_server_side_scripting/app_store_learnv2_scripting_london_gliderecord?v&#61;london" target="_blank" rel="noopener noreferrer nofollow">GlideRecord concepts</a> in the Server-side Scripting module.</p>
<p>In this post, you create Business Rules that use the get() method to get a record or to check for the existance of at least one matching record.</p>
<ul><li>Guided: Create a Business Rule to get the contact for printer-related incidents and write contact details to a comment.</li><li>Challenge: Create a Business Rule for a NeedIt record that gets contact information for patent questions.</li><li>Guided: Use get() to determine if a user is a caller on any other incident.</li></ul>
<blockquote>
<p><strong>NOTE</strong>: This exercise uses demo data that may vary in your instance.</p>
</blockquote>
<h2 id="create-a-business-rule-to-get-a-contact-for-printer-incidents">Create a Business Rule to Get a Contact for Printer Incidents</h2>
<p>The scenario: Your company leases printers, but is expected to support the printers. If needed, IT can contact the leasing company for additional support. The contact details should be written to Description field on an incident for the person assigned the incident to reference. The person who maintains the business relationship with the printer company is not a scripter and needs to be able to change the contact details outside of a script.</p>
<p>In this section, you create a printer contact User record. Then you create a Business Rule that checks for the word <em>printer </em>in the Short description for an Incident. If the word <em>printer</em> is found, the Business Rule gets the printer contact details to update the Description.</p>
<ol><li>Log in to your ServiceNow instance as a System Administrator.</li><li>Create a User record for the printer contact and copy the Sys ID.<br />
<ol><li>Use the Application Navigator to open <strong>User Administration &gt; Users</strong>.</li><li>Click the <strong>New</strong> button.</li><li>Configure the User record.<br />
<ol><li>User ID: <strong>printer.contact</strong></li><li>First name: <strong>Printer</strong></li><li>Last name: <strong>Contact</strong></li><li>Email: <strong>pc&#64;zeerocks.com</strong></li><li>Business phone: <strong>(212) 987-6789</strong></li></ol>
</li><li>Click the <strong>Additional actions</strong> (
<p><span class="image center"><img src="https://developer.servicenow.com/api/x_snc_devblog/v1/vfs/file?p&#61;/post/training-grget/servicenow_grget_additionalactions.png" alt="Additional actions button" /></span></p>
) button and select the <strong>Save</strong> menu item.</li><li>Click the <strong>Additional actions</strong> button and select the <strong>Copy sys_id</strong> menu item.</li><li>Paste the Sys ID some place easy to copy it from later.</li></ol>
</li><li>
<p>Create a Business Rule.</p>
<ol><li>Use the Application Navigator to open <strong>Incident &gt; Open</strong>.</li><li>Click any column header menu and select the <strong>Configure &gt; Business Rules</strong> menu item.</li><li>Click the <strong>New</strong> button.</li><li>Configure the Business Rule.<br />
<ol><li>Name: <strong>Add Printer Contact Comment</strong></li><li>Advanced: <strong>selected (checked)</strong></li></ol>
</li><li>Configure the When to run section.
<ol><li>When: <strong>before</strong></li><li>Insert: <strong>selected (checked)</strong></li><li>Filter conditions: <strong>[Short description] [contains] [printer]</strong></li></ol>
</li><li>
<p>Configure the Advanced section.</p>
<ol><li>
<p>Replace the contents of the Script field with this script.</p>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // Create a GlideRecord object  
        var grUser &#61; new GlideRecord(&#39;sys_user&#39;);

        // get printer contact User record  
        grUser.get(&#39;PASTE_USER_SYS_ID_HERE&#39;);

        // Create message to add to the description  
        var msg &#61; current.description &#43; &#34;\n\nThis incident includes &#39;printer&#39; in the Short description. If you need assistance from the leasing company, contact &#34; &#43; grUser.name &#43; &#34; by email at &#34; &#43; grUser.email &#43; &#34; or by phone at &#34; &#43; grUser.phone &#43; &#34;.&#34;;

        current.setValue(&#39;description&#39;,msg);

    })(current, previous);</code></pre>
<blockquote>
<p><strong>NOTE</strong>: The focus of this post is on how to use the get() method and you use a hard-coded Sys ID here. Hard-coding a Sys ID in a script is not recommended because hard-coded Sys IDs are difficult to manage. Instead, use Application Properties to identify specific records. To learn more about Application Properties, go through the <a href="https://developer.servicenow.com/app.do#!/training/article/app_store_learnv2_automatingapps_london_application_properties/app_store_learnv2_automatingapps_london_application_properties_objectives?v&#61;london" target="_blank" rel="noopener noreferrer nofollow">Application Properties training</a>.</p>
</blockquote>
</li><li>
<p>Replace the text <strong>PASTE_USER_SYS_ID_HERE</strong> with the Sys ID copied previously.</p>
</li></ol>
</li><li>
<p>Click the <strong>Submit</strong> button.</p>
</li></ol>
</li><li>
<p>Test the Business Rule.</p>
<ol><li>
<p>Create an Incident with <em>printer</em> in the Short description field.</p>
<ol><li>Use the Application Navigator to open <strong>Incident &gt; Create New</strong>.</li><li>Configure the incident.<br />
<ol><li>Caller: <strong>Adela Cervantsz</strong></li><li>Short description: <strong>The printer is not collating</strong></li><li>Description: <strong>Network printer is printing pages out of order.</strong></li></ol>
</li><li>Click the <strong>Additional actions</strong> button and select the <strong>Save</strong> menu item.</li><li>Review the Description. The Description should now contain the text “This incident includes ‘printer’ in the Short description. If you need assistance from the leasing company, contact Printer Contact by email at pc&#64;zeerocks.com or by phone at (212) 987-6789.”</li></ol>
<blockquote>
<p><strong>QUESTION</strong>: If you used a GlideRecord query instead of get, how would the Business Rule script differ? If you are not sure, scroll to the Answers section at the bottom of this page.</p>
</blockquote>
</li></ol>
</li></ol>
<h2 id="challenge-create-a-business-rule-to-get-patent-attorney-contact-details-for-needit-record">Challenge - Create a Business Rule to Get Patent Attorney Contact Details for NeedIt Record</h2>
<p>Create a Business Rule for the NeedIt application from the Developer Portal training that adds contact information for the company patent attorney to the Description if the <strong>Request type</strong> is Legal and the Short description contains the word <strong>patent</strong>. The Business Rule should not overwrite the existing Description.</p>
<p>Starting tips:</p>
<ul><li>Prepare the instance with the NeedIt application using the directions in <a href="https://developer.servicenow.com/app.do#!/training/article/app_store_learnv2_scripting_london_server_side_scripting/app_store_learnv2_scripting_london_exercise_prepare_instance_for_server_side_scripting?v&#61;london" target="_blank" rel="noopener noreferrer nofollow">Exercise: Prepare Instance for Server-side Scripting</a>.</li><li>Create a User record for the patent attorney.</li><li>Create the Business Rule for the NeedIt table.</li><li>Bonus: If you are familar with Application Properties and want a little more of a challenge, create an Application Property to identify the patent attorney and use the value of the Application Property in your script.</li></ul>
<p>If you need help with the script, see the <strong>Answers</strong> section at the bottom of this post for a sample script.</p>
<h2 id="create-a-business-rule-to-check-if-user-is-the-caller-on-any-other-incidents">Create a Business Rule to Check If User Is The Caller on Any Other Incidents</h2>
<p>The <a href="https://developer.servicenow.com/app.do#!/api_doc?v&#61;london&amp;id&#61;r_ScopedGlideRecordGet_Object_Object" target="_blank" rel="noopener noreferrer nofollow">GlideRecord get() method</a> accepts two parameters. The first is the field to search and the second is the search value. If only one parameter is passed, the get() method searches by Sys ID.</p>
<p>Even when you are not looking to get a specific value, the get() method can be used to check for the existence of a record that matches the search criteria. The get() method returns <strong>true</strong> if it finds a record matching the specified criteria and <strong>false</strong> if no records match.</p>
<p>In this section, you create a Business Rule that checks if the Caller on an incident has ever opened an incident and writes an info message based on the result.</p>
<ol><li>
<p>Create a Business Rule.</p>
<ol><li>Use the Application Navigator to open <strong>Incident &gt; Open</strong>.</li><li>Click any column header menu and select the <strong>Configure &gt; Business Rules</strong> menu item.</li><li>Click the <strong>New</strong> button.</li><li>Configure the Business Rule.<br />
<ol><li>Name: <strong>New Caller Message</strong></li><li>Advanced: <strong>selected (checked)</strong></li></ol>
</li><li>Configure the When to run section.
<ol><li>When: <strong>before</strong></li><li>Insert: <strong>selected (checked)</strong></li></ol>
</li><li>
<p>Configure the Advanced section.</p>
<ol><li>
<p>Replace the contents of the Script field with this script.</p>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // Create a GlideRecord object  
        var grUser &#61; new GlideRecord(&#39;incident&#39;);

        // get Caller User record  
        var oldCaller &#61; grUser.get(&#39;caller_id&#39;,current.caller_id);

        // Initialize msg
        var msg &#61; &#34;&#34;;

        // Create message to add to an info message  
        if (oldCaller){
            msg &#61; current.caller_id.name &#43; &#34; was the caller on at least one other incident.&#34;;
        } else {
            msg &#61; &#34;Incident &#34; &#43; current.number &#43; &#34; is &#34; &#43; current.caller_id.name &#43; &#34;&#39;s first incident. Make it a good experience!&#34;;
        } 

        gs.addInfoMessage(msg);

    })(current, previous);</code></pre>
</li><li>
<p>Review this script. How does it check if a user was the Caller on an incident before?</p>
</li></ol>
</li><li>
<p>Click the <strong>Submit</strong> button.</p>
</li></ol>
</li><li>
<p>Test the Business Rule.</p>
<ol><li>Identify a user who has not been a caller on any incidents.<br />
<ol><li>Use the Application Navigator to open <strong>Incident &gt; All</strong>.</li><li>Find incidents with <strong>Abraham Lincoln</strong> as the Caller.</li><li>Delete any incidents with Abraham Lincoln as the Caller.</li></ol>
</li><li>
<p>Create an Incident for a new Caller.</p>
<ol><li>Use the Application Navigator to open <strong>Incident &gt; Create New</strong>.</li><li>Configure the incident.<br />
<ol><li>Caller: <strong>Abraham Lincoln</strong> (Use a different name if Abraham Lincoln was the Caller on another incident)</li><li>Short description: <strong>Mobile phone service issues</strong></li></ol>
</li><li>Click the <strong>Submit</strong> button.</li><li>
<p>Review the info message.</p>
<p><span class="image center"><img src="https://developer.servicenow.com/api/x_snc_devblog/v1/vfs/file?p&#61;/post/training-grget/servicenow_grget_newcallerinfomessage.png" alt="An info message states Incident INC0010034 is Abraham Lincoln&#39;s first incident. Make it a good experience!" /></span></p>
</li></ol>
</li><li>
<p>Create and submit another incident for <strong>Abraham Lincoln</strong>. The info message should the Caller has other incidents.</p>
<p><span class="image center"><img src="https://developer.servicenow.com/api/x_snc_devblog/v1/vfs/file?p&#61;/post/training-grget/servicenow_grget_oldcallerinfomessage.png" alt="An info message states Abraham Lincoln was the caller on at least one other incident." /></span></p>
</li></ol>
</li></ol>
<h2 id="closing-thoughts">Closing Thoughts</h2>
<p>The GlideRecord get() method is a useful coding shortcut when you know exactly what record you want and can uniquely identify that record. get() is also useful for quick checks to see if any records match a single query parameter.</p>
<h2 id="answers">ANSWERS</h2>
<blockquote>
<p><strong>Question</strong>: If you used a GlideRecord query instead of get, how would the Business Rule script differ?</p>
<p><strong>Answer</strong>: The script would require more steps with query instead of a get:</p>
</blockquote>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // Create a GlideRecord object  
        var grUser &#61; new GlideRecord(&#39;sys_user&#39;);

        // Add query printer contact User record  
        grUser.addQuery(&#39;sys_id&#39;,&#39;PASTE_USER_SYS_ID_HERE&#39;);

        // You might limit to a single result, in case others are found
        grUser.setLimit(1);

        // Run query
        grUser.query();

        // Get the next record
        grUser.next();

        // Create message to post to a comment  
        var msg &#61; current.description &#43; &#34;\n\nThis incident includes &#39;printer&#39; in the Short description. If you need assistance from the leasing company, contact &#34; &#43; grUser.name &#43; &#34; by email at &#34; &#43; grUser.email &#43; &#34; or by phone at &#34; &#43; grUser.phone &#43; &#34;.&#34;;

        current.setValue(&#39;description&#39;,msg);

    })(current, previous);</code></pre>
<hr />
<blockquote>
<p><strong>Challenge</strong>: Here is an example script for a Business Rule that gets the patent attorney User record and adds information to the description. Replace <strong>PASTE_USER_SYS_ID_HERE</strong> with the Sys ID for your patent attorney record.</p>
</blockquote>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // Create a GlideRecord object  
        var grUser &#61; new GlideRecord(&#39;sys_user&#39;);

        // get printer contact User record  
        grUser.get(&#39;PASTE_USER_SYS_ID_HERE&#39;);

        // Create message to post to a comment  
        var msg &#61; current.description &#43; &#34;\n\nThis Legal NeedIt request includes &#39;patent&#39; in the Short description. If you need assistance from the patent attorny, contact &#34; &#43; grUser.name &#43; &#34; by email at &#34; &#43; grUser.email &#43; &#34; or by phone at &#34; &#43; grUser.phone &#43; &#34;.&#34;;

        current.setValue(&#39;description&#39;,msg);

    })(current, previous);</code></pre>
<blockquote>
<p>If you created an Application Property, your script would look similar to this:</p>
</blockquote>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // Create a GlideRecord object  
        var grUser &#61; new GlideRecord(&#39;sys_user&#39;);

        // get printer contact User record  
        var attorneyID &#61; gs.getProperty(&#39;x_58872_needit.patentAttorneyID&#39;); // Your property name may differ
        grUser.get(attorneyID);

        // Create message to post to a comment  
        var msg &#61; current.description &#43; &#34;\n\nThis Legal NeedIt request includes &#39;patent&#39; in the Short description. If you need assistance from the patent attorny, contact &#34; &#43; grUser.name &#43; &#34; by email at &#34; &#43; grUser.email &#43; &#34; or by phone at &#34; &#43; grUser.phone &#43; &#34;.&#34;;

        current.setValue(&#39;description&#39;,msg);

    })(current, previous);</code></pre>
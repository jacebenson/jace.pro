---
title: "Handson with GlideRecord query"
date: 2019-01-31T21:37:20.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=68cb219edb1bab002e8c2183ca961933"
---
<p>We are experimenting with new training content delivery methods for the Developer Program. This tutorial blog post is one of those experiments. We are very interested in your feedback. Please let us know what you think about this format and the content in the comments below. In particular, we would like to know:</p>
<ul><li>Did you do the hands-on (or plan to do the hands-on) or just read through the content?</li><li>Do you prefer to access this type of learning content here on the Community or on the <a href="https://developer.servicenow.com/blog.do" target="_blank" rel="noopener noreferrer nofollow">Developer Blog</a>?</li><li>What topics would you like to see in the future?</li></ul>
<p>If you found this post helpful, please mark it <strong>Helpful</strong>. Your feedback helps us determine where to focus our efforts to provide you with valuable learning content.</p>
<h2 id="introduction">Introduction</h2>
<p>Newer developers in the Developer Program have requested additional hands-on work with GlideRecord. While many of the training modules include examples with GlideRecord, this “bonus exercise” adds hands-on experience with GlideRecords in Business Rules. The topics in this post build on concepts in the <a href="https://developer.servicenow.com/app.do#!/training/article/app_store_learnv2_scripting_london_server_side_scripting/app_store_learnv2_scripting_london_gliderecord?v&#61;london" target="_blank" rel="noopener noreferrer nofollow">Server-side Scripting</a> module.</p>
<p>In this exercise, you create three Business Rules.</p>
<ul><li>Guided: Create a Business Rule for new Incidents to check for active Incidents from the same caller and post an information message with the caller’s active Incidents.</li><li>Guided: Create a Business Rule for Configuration Items (CIs) to check for active Tasks associated with the CI when the CI is decommissioned.</li><li>Challenge:
<ul><li>Option 1: Create a similar Business Rule for new NeedIt requests.</li><li>Option 2: Create a similar Business Rule for new Change Requests.</li></ul>
</li></ul>
<blockquote>
<p><strong>NOTE</strong>: This exercise uses demo data that may vary from your instance.</p>
</blockquote>
<h2 id="create-an-incident-business-rule">Create an Incident Business Rule</h2>
<ol><li>Log in to your ServiceNow instance as a System Administrator.</li><li>View Incidents where Rick Berzle is the Caller.<br />
<ol><li>Use the Application Navigator to open <strong>Incident &gt; Open</strong>.</li><li>Change Go to to <strong>Caller</strong> and set the search value to <strong>*Berzle</strong>. Make note of how many records have Rick Berzle as the Caller.</li></ol>
</li><li>
<p>Create a Business Rule.</p>
<ol><li>Right-click any column header and select the <strong>Configure &gt; Business Rules</strong> menu item.</li><li>Click the <strong>New</strong> button.</li><li>Configure the Business Rule.<br />
<ol><li>Name: <strong>List Open Incidents by Same Caller</strong></li><li>Advanced: <strong>selected (checked)</strong></li></ol>
</li><li>Configure the When to run section.
<ol><li>When: <strong>before</strong></li><li>Insert: <strong>selected (checked)</strong></li></ol>
</li><li>
<p>Configure the Advanced section.</p>
<ol><li>
<p>Replace the contents of the script field with this script. <strong>NOTE</strong>: this script contains some text you will update in the next step.</p>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // 1. Create an object to store rows from a table
        var grIncident &#61; new CLASS(&#39;incident&#39;);

        // 2. Build query
        grIncident.QUERY_CONDITION_METHOD(&#39;active&#39;,&#39;&#61;&#39;,true);
        grIncident.QUERY_CONDITION_METHOD(&#39;caller_id&#39;,&#39;&#61;&#39;,current.caller_id);

        // 3. Execute query 
        grIncident.RUN_QUERY_METHOD();

        // Initialize message to list Caller&#39;s active Incidents
        var msg &#61; &#34;Caller&#39;s other active incidents: &#34;;

        // 4. Process returned records
        while(grIncident.ITERATE_METHOD()){
            // add a new line to the message for each of the Caller&#39;s active Incidents
            msg &#61; msg &#43; grIncident.getValue(&#39;number&#39;) &#43; &#34;: &#34; &#43; grIncident.getValue(&#39;short_description&#39;) &#43; &#34; | &#34;;
        }

        gs.addInfoMessage(msg);

    })(current, previous);</code></pre>
</li><li>
<p>Update the script with the class and methods.</p>
<ol><li>Replace <strong>CLASS</strong> with the class of the object to create.</li><li>Replace <strong>QUERY_CONDITION_METHOD</strong> with the method to add a condition to the query.</li><li>Replace <strong>RUN_QUERY_METHOD</strong> with the method to run the query.</li><li>Replace <strong>ITERATE_METHOD</strong> with the method to iterate through the returned records.</li></ol>
<blockquote>
<p><strong>QUESTION</strong>: What parameter do you pass to the CLASS? What are the parameters passed to the QUERY_CONDITION_METHOD? If you are not sure, scroll to the Answers section at the bottom of this page.</p>
<p><strong>NOTE</strong>: If you need help with any of these, see the <strong>Create an Incident Business Rule</strong> section in the answers at the bottom of this post for the complete script.</p>
</blockquote>
</li></ol>
</li><li>
<p>Click the <strong>Submit</strong> button.</p>
</li></ol>
</li><li>
<p>Test the Business Rule.</p>
<ol><li>Create an Incident with Rick Berzle as the Caller.<br />
<ol><li>Use the Application Navigator to open <strong>Incident &gt; Create New</strong>.</li><li>Configure the Incident.<br />
<ol><li>Caller: <strong>Rick Berzle</strong></li><li>Short description: <strong>Received phishing email</strong></li></ol>
</li><li>Click the <strong>Submit</strong> button. An information message lists active Incidents with Rick Berzle as the Caller.</li></ol>
</li></ol>
</li></ol>
<p><span class="image center"><img src="https://developer.servicenow.com/api/x_snc_devblog/v1/vfs/file?p&#61;/post/training-grquery/servicenow_grq_inc_infomessage.png" alt="The Info Message lists one active Incident for Rick Berzle." /></span></p>
<h2 id="create-a-configuration-item-business-rule">Create a Configuration Item Business Rule</h2>
<p>When a Configuration Item (CI) is deactivated, you want to update all tasks associated with the deactivated CI that the CI has been deactivated. In this hands-on section, you create a Business Rule for the Configuration Item [cmdb_ci] table that finds all tasks associated with the CI and writes a Work note that the CI has been deactivated.</p>
<ol><li>
<p>Set up a Configuration Item with tasks to use for testing.</p>
<ol><li>Use the Application Navigator to open <strong>Incident &gt; Open</strong>.</li><li>
<p>Click the <strong>Personalize List</strong> icon.</p>
<p><span class="image center"><img src="https://developer.servicenow.com/api/x_snc_devblog/v1/vfs/file?p&#61;/post/training-grquery/ServiceNow_GRQ_PersonalizeListIcon.png" alt="Personalize List icon" /></span></p>
</li><li>
<p>Add the <strong>Configuration item</strong> column to the Selected list in the location of your choice.</p>
</li><li>
<p>Sort by Configuration Item so tasks with no Configuration Item are at the top of the list.</p>
</li><li>
<p>Open the first Incident with no Configuration item.</p>
</li><li>
<p>Set the Configuration item value to <strong>*JEMPLOYEE-IBM</strong>.</p>
</li><li>
<p>Click the <strong>Additional actions</strong> button and select the <strong>Create Favorite</strong> menu item to easily return to the Incident later.</p>
</li><li>
<p>Click the <strong>Additional actions</strong> button and select the <strong>Save</strong> menu item.</p>
</li></ol>
</li><li>
<p>Create a Business Rule for the Configuration Item table.</p>
<ol><li>Click the <strong>Preview this record</strong> button for the Configuration item.</li><li>Click the <strong>Open Record</strong> button in the preview.</li><li>Click the <strong>Additional actions</strong> button and select the <strong>Configure &gt; Business Rules</strong> menu item.</li><li>Click the <strong>New</strong> button.</li><li>Configure the Business Rule.<br />
<ol><li>Name: <strong>Update Tasks on CI Deactivation</strong></li><li>Table: <strong>Configuration Item [cmdb_ci]</strong></li><li>Advanced: <strong>selected (checked)</strong></li></ol>
</li><li>Configure the When to run section.
<ol><li>When: <strong>before</strong></li><li>Insert: <strong>selected (checked)</strong></li><li>Update: <strong>selected (checked)</strong></li><li>Filter Conditions: <strong>[Status] [Changes from] [Installed]</strong></li></ol>
</li><li>
<p>Configure the Advanced section.</p>
<ol><li>
<p>Replace the contents of the script field with this script. <strong>NOTE</strong>: this script contains some text you will update in the next step.</p>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // 1. Create an object to store rows from a table
        var grTask &#61; new GlideRecord(&#39;TABLE&#39;);

        // 2. Build query
        grTask.addQuery(&#39;active&#39;,&#39;&#61;&#39;,&#39;true&#39;);
        grTask.addQuery(&#39;COMPARISON_FIELD&#39;,&#39;&#61;&#39;,COMPARISON_VALUE);

        // 3. Execute query 
        grTask.query();

        // 4. Process returned records
        while(grTask.next()){
            // Write to Work notes that CI is not Installed  
            grTask.work_notes &#61; current.name &#43; &#34; is no longer active&#34;;
            grTask.update();
        }

    })(current, previous);</code></pre>
</li><li>
<p>Update the script with the object and methods.</p>
<ol><li>Replace <strong>TABLE</strong> with the table to query.</li><li>Replace <strong>COMPARISON_FIELD</strong> with the field on a task record for the Configuration item.</li><li>Replace <strong>COMPARISON_VALUE</strong> with the value from the CI record to match to the task.</li></ol>
<blockquote>
<p><strong>NOTE</strong>: If you need help with any of these, see the <strong>Create a CI Business Rule</strong> section in the answers at the bottom of this post for the complete script.</p>
</blockquote>
</li></ol>
</li><li>
<p>Click the <strong>Submit</strong> button.</p>
</li></ol>
</li><li>
<p>Test the Business Rule.</p>
<ol><li>Add the <strong>Status</strong> field to the Computer form.</li><li>Find and open the Computer named <strong>*JEMPLOYEE-IBM</strong>.</li><li>Set the Status for *JEMPLOYEE-IBM to <strong>Retired</strong>.</li><li>From the Favorites in the Application Navigator, select the Incident previously saved to the favorites.</li><li>Find the message <strong>*JEMPLOYEE-IBM is no longer active</strong> in the Activities.</li></ol>
</li></ol>
<p><span class="image center"><img src="https://developer.servicenow.com/api/x_snc_devblog/v1/vfs/file?p&#61;/post/training-grquery/servicenow_grq_work_note.png" alt="The no longer active message displayed in the Activities." /></span></p>
<h2 id="challenge-option-1-create-a-needit-business-rule">Challenge - OPTION 1 - Create a NeedIt Business Rule</h2>
<p>Create a Business Rule for the NeedIt application from the Developer Portal training that finds and lists open NeedIt requests for the user in the Requested for field. Display the list in an information message.</p>
<p>Starting tips:</p>
<ul><li>Prepare the instance with the NeedIt application using the directions in <a href="https://developer.servicenow.com/app.do#!/training/article/app_store_learnv2_scripting_london_server_side_scripting/app_store_learnv2_scripting_london_exercise_prepare_instance_for_server_side_scripting?v&#61;london" target="_blank" rel="noopener noreferrer nofollow">Exercise: Prepare Instance for Server-side Scripting</a>.</li><li>Create the Business Rule for the NeedIt table.</li><li>Use the <strong>Requested for</strong> field.</li></ul>
<p>If you need help, see the <strong>Create a NeedIt Business Rule</strong> section in the answers at the bottom of this post for a sample script.</p>
<h2 id="challenge-option-2-create-a-change-business-rule">Challenge - OPTION 2 - Create a Change Business Rule</h2>
<p>Create a Business Rule for Changes that find and lists other changes opened for the same Configuration Item. Display the list in an information message.</p>
<p>Starting tips:</p>
<ul><li>What is the name of the Change table?</li><li>What is the name of the Configuration Item field?</li></ul>
<p>If you need help, see the <strong>Create a Change Business Rule</strong> section in the answers at the bottom of this post for a sample script.</p>
<h2 id="answers">ANSWERS</h2>
<blockquote>
<p><strong>Create an Incident Business Rule</strong>: Replace the placeholders in the script with the correct object and methods.<br />Replace <strong>CLASS</strong> with <strong>GlideRecord</strong><br />Replace <strong>QUERY_CONDITION_METHOD</strong> with <strong>addQuery</strong><br />Replace <strong>RUN_QUERY_METHOD</strong> with <strong>query</strong><br />Replace <strong>ITERATE_METHOD</strong> with <strong>next</strong><br />If you are still stuck, review the components of a <a href="https://developer.servicenow.com/app.do#!/training/article/app_store_learnv2_scripting_london_server_side_scripting/app_store_learnv2_scripting_london_gliderecord?v&#61;london" target="_blank" rel="noopener noreferrer nofollow">GlideRecord query</a> in the Server-side scripting training module.</p>
<p>The resulting script:</p>
</blockquote>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // 1. Create an object to store rows from a table
        var grIncident &#61; new GlideRecord(&#39;incident&#39;);

        // 2. Build query
        grIncident.addQuery(&#39;active&#39;,&#39;&#61;&#39;,true);
        grIncident.addQuery(&#39;caller_id&#39;,&#39;&#61;&#39;,current.caller_id);

        // 3. Execute query 
        grIncident.query();

        // Initialize message to list Caller&#39;s active Incidents
        var msg &#61; &#34;Caller&#39;s other active incidents: &#34;;

        // 4. Process returned records
        while(grIncident.next()){
            // add a new line to the message for each of the Caller&#39;s active Incidents
            msg &#61; msg &#43; grIncident.getValue(&#39;number&#39;) &#43; &#34;: &#34; &#43; grIncident.getValue(&#39;short_description&#39;) &#43; &#34; | &#34;;
        }

        gs.addInfoMessage(msg);

    })(current, previous);</code></pre>
<hr />
<blockquote>
<p><strong>Question</strong>: What parameter do you pass to the CLASS? What are the parameters passed to the QUERY_CONDITION_METHOD?</p>
<p><strong>Answer</strong>: Pass the table on which to perform the query to the GlideRecord class. Pass the field name, operator, and value to the addQuery method.</p>
</blockquote>
<hr />
<blockquote>
<p><strong>Create a NeedIt Business Rule</strong>: Here is an example script for a Business Rule to get the list of other NeedIt requests for a user and write them to an information message.</p>
</blockquote>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // 1. Create an object to store rows from a table
        var grNeedIt &#61; new GlideRecord(&#39;x_58872_needit_needit&#39;);

        // 2. Build query
        grNeedIt.addQuery(&#39;active&#39;,&#39;&#61;&#39;,true);
        grNeedIt.addQuery(&#39;u_requested_for&#39;,&#39;&#61;&#39;,current.u_requested_for);

        // 3. Execute query  
        grNeedIt.query();

        // Initialize message to list NeedIt requests for user
        var msg &#61; &#34;Other NeedIt Requests for user: &#34;;

        // 4. Process returned records
        while(grNeedIt.next()){
            // add a new line to the message for each NeedIt for the user
            msg &#61; msg &#43; grNeedIt.getValue(&#39;number&#39;) &#43; &#34;: &#34; &#43; grNeedIt.getValue(&#39;short_description&#39;) &#43; &#34; | &#34;;
        }

        gs.addInfoMessage(msg);

    })(current, previous);</code></pre>
<hr />
<blockquote>
<p><strong>Create a Change Business Rule</strong>: Here is an example script for a Business Rule to get the list of other Changes for a Configuration Item and write them to an information message.</p>
</blockquote>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // 1. Create an object to store rows from a table
        var grChange &#61; new GlideRecord(&#39;change_request&#39;);

        // 2. Build query
        grChange.addQuery(&#39;active&#39;,&#39;&#61;&#39;,true);
        grChange.addQuery(&#39;cmdb_ci&#39;,&#39;&#61;&#39;,current.cmdb_ci);

        // 3. Execute query  
        grChange.query();

        // Initialize message to list Changes for the CI
        var msg &#61; &#34;Other Changes Requests for CI &#34; &#43; current.cmdb_ci.name &#43; &#34;: &#34;;

        // 4. Process returned records
        while(grChange.next()){
            // add a new line to the message for each Change for the CI
            msg &#61; msg &#43; grChange.getValue(&#39;number&#39;) &#43; &#34;: &#34; &#43; grChange.getValue(&#39;short_description&#39;) &#43; &#34; | &#34;;
        }

        gs.addInfoMessage(msg);

    })(current, previous);</code></pre>
<hr />
<blockquote>
<p><strong>Create a CI Business Rule</strong>: Replace the placeholders in the script with the correct table and query parameters.<br />Replace <strong>TABLE</strong> with <strong>task</strong><br />Replace <strong>COMPARISON_FIELD</strong> with <strong>cmdb_ci</strong> Replace <strong>COMPARISON_VALUE</strong> with <strong>current.sys_id</strong></p>
<p>The resulting script:</p>
</blockquote>
<pre class="language-javascript"><code>    (function executeRule(current, previous /*null when async*/) {

        // 1. Create an object to store rows from a table
        var grTask &#61; new GlideRecord(&#39;task&#39;);

        // 2. Build query
        grTask.addQuery(&#39;active&#39;,&#39;&#61;&#39;,&#39;true&#39;);
        grTask.addQuery(&#39;cmdb_ci&#39;,&#39;&#61;&#39;,current.sys_id);

        // 3. Execute query 
        grTask.query();

        // 4. Process returned records
        while(grTask.next()){
            // Write to Work notes that CI is not Installed  
            grTask.work_notes &#61; current.name &#43; &#34; is no longer active&#34;;
            grTask.update();
        }
    })(current, previous);</code></pre>
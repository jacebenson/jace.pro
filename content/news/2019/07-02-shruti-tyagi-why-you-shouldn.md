---
title: "Why you shouldnt exceed  characters on your UserIDs"
date: 2019-07-02T04:41:51.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5eb2c5871b5a7bc0ada243f6fe4bcbd5"
---
<p>User ID is a Unique identifier for the user&#39;s ServiceNow login user name. The maximum length of the User Id field in the User table is 40, which means the User Id in the User table can only have 40 or fewer characters.</p>
<p><img src="https://community.servicenow.com/d0148570db7e7b00d82ffb243996198e.iix" width="668" height="189" /></p>
<p>- If you will try to manually create a user with a User id longer than 40 chars, the system will not allow you to create it. </p>
<p>- If users are created from the integration and have User id longer than 40 chars. The user Id will be truncated to 40 characters.</p>
<p>You may have a requirement to allow User Id with more than 40 characters, due to the reasons like users imported from integration have User Id as Email or Domain. In this case, the system allows you to increase the length of the User Id to the large value.</p>
<p><br />But wait before updating the max length of the User Id field, here is something you should know.</p>
<p> </p>
<h2>What else is dependent on User Id Field?</h2>
<p>Created by and Updated by fields populate the User Id of the User. The maximum length of Created by and Updated by is also 40 characters. These are the Read-Only Out of Box fields that are created with every table.</p>
<p>If you increase the length of the User Id field, that will be incompatible with created by and updated by field.</p>
<h2>What are the issues users with longer User Id’s will see?</h2>
<p>If you have users with user id longer than 40 characters, the user id is created by and updated by field will be truncated to 40 chars and the user can see multiple issues, such as:</p>
<p style="padding-left: 30px;">• When users have a user_name longer than 40 characters they cannot download lists exported to Excel. When attempting to download, they are taken to a blank sys_attachment page.</p>
<p style="padding-left: 30px;">• Users are unable to attach attachments from the service portal or normal UI to any record. After attaching the file and upload No attachments are added and not shown on the form.</p>
<p style="padding-left: 30px;">• User will notice their name is truncated to 40 chars on activity stream for any record.</p>
<p style="padding-left: 30px;"> </p>
<h2>How can you identify if you have users that can have this issue?</h2>
<p>Here is the script admin can run from script background, to see the number of users impacted:</p>
<p> </p>
<pre class="language-markup"><code>(function() {
    var dict &#61; new GlideRecord(&#39;sys_dictionary&#39;);
    dict.addQuery(&#34;name&#34;, &#34;sys_user&#34;);
    dict.addQuery(&#34;element&#34;, &#34;user_name&#34;);
    dict.addQuery(&#34;max_length&#34;, &#34;&gt;&#34;, &#34;40&#34;);
    dict.query();
    while (dict.next()) {
        var usernamelen &#61; dict.max_length.getValue();
        gs.print(&#34;UserNameMaxLength : &#34; &#43; usernamelen);
        var noofusers &#61; 0;
        var countuser &#61; new GlideAggregate(&#34;sys_user&#34;);
        countuser.addActiveQuery();
        countuser.addAggregate(&#39;COUNT&#39;);
        countuser.query();
        if (countuser.next()) {
            noofusers &#61; countuser.getAggregate(&#39;COUNT&#39;);
            gs.print(&#34;TotalNumberOfUsers : &#34; &#43; noofusers);
        }

        var user &#61; new GlideRecord(&#39;sys_user&#39;);
        user.addActiveQuery();
        user.query();
        var count &#61; 0;
        while (user.next()) {

            var userId &#61; user.user_name.toString();
            userId &#61; userId.length;
            if (userId &gt; 40) {
                count&#43;&#43;;

            }
        }
        gs.print(&#34;UsersWithLongNames : &#34; &#43; count);
    }

})();</code></pre>
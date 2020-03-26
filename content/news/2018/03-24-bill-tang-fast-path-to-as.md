---
title: "Fast path to assist users with slow homepages"
date: 2018-03-23T12:50:25.000Z
authors: ["Bill Tang"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=87adba41db095b0447c8f3231f9619a8"
---
<p>As a ServiceNow Admin, it is always a challenge to manage homepages and complaints about them. The fact is, any user can put a few ridiculously slow reports and widgets on their homepage and start complaining. Our life will be much easier if we don&#39;t need to manage the users shooting in their foot with their homepages.</p>
<p> </p>
<p>Finding the users are easy, a quick filter in the Transaction log for &#34;/home.do&#34; transactions will list the user IDs in a matter of seconds. But before we can help, we need to know which homepage these users are using. This piece of work is labor intensive. Simply because the link from a User ID to their current homepage are not that straight forward, the pieces of information are stored in a few different tables, and they are not that well known or popular in the day-to-day operations.</p>
<p> </p>
<p>Connecting the dots manually is certainly doable, but it will take a lot of time for each user ID.</p>
<p>Consider the following manual steps:</p>
<p>Step 1: Find the User ID in the user transaction logs (syslog_transaction table)</p>
<p>Step 2: Find the Display name of that user (sys_user table)</p>
<p>Step 3: Find the sys_id of the current homepage of that user (sys_user_preference table)</p>
<p>Step 4: Find the actual homepage from home pages table (sys_portal_page table)</p>
<p> </p>
<p>As you can see we have a long way to go before starting the actual troubleshooting of homepages (<a href="community?id&#61;community_blog&amp;sys_id&#61;dd6dea29dbd0dbc01dcaf3231f96190c" target="_blank" rel="nofollow">well described here, good job Nisha!</a>).</p>
<p> </p>
<p>IS there an easy way to do this? Well, if not then we probably shouldn&#39;t be here and reading this blog.</p>
<p> </p>
<p>The solution is rather traditional, we can leverage an out-of-the-box feature &#34;<a href="https://docs.servicenow.com/bundle/jakarta-performance-analytics-and-reporting/page/use/reporting/concept/c_DatabaseViews.html" target="_blank" rel="nofollow">Database Views</a>&#34; to connect the dots for us. Savvy ServiceNow professionals can stop reading now and go developing your own database views.</p>
<p> </p>
<p>For those who are not too familiar with this concept. Here are the example steps:</p>
<p>1&gt; Create a database view with a good name, save it. In my case, I choose &#34;user_preference_homepage&#34; as shown below. Fig 1:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="e4ffea89dbc15b0447c8f3231f961958.iix" /></p>
<p>2&gt; When the database view is saved, you can start adding tables into the &#39;View tables&#39; list. You will only need 3 tables as shown in Fig 1. I&#39;ll explain why in a minute.</p>
<p>3&gt; For each table, specify the order, prefix and where clause as shown in Fig 1 and save them.</p>
<p>4&gt; Now you can use the &#39;Try it&#39; link to see what kind of data is available.</p>
<p>5&gt; In the list view, configure the visible columns as shown in Fig 2. We are only interested in a few columns. Fig 2:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="e31476c1db455b0447c8f3231f961982.iix" /></p>
<p>6&gt; Now you can click the sys_id column to directly access the homepage of that user. Fig 3:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="3b443a05db455b0447c8f3231f9619d9.iix" /></p>
<p>7&gt; If you haven&#39;t turn on the homepage debugger, now it is a good time. In the homepage definition form, use the &#34;View homepage&#34; link to view what&#39;s on this homepage. Fig 4:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="1b94fe45db455b0447c8f3231f9619ab.iix" /></p>
<p>8&gt; Now you can do a lot of things to make this page better. Again, you probably want to try a few things mentioned in Nisha&#39;s blog <a href="community?id&#61;community_blog&amp;sys_id&#61;dd6dea29dbd0dbc01dcaf3231f96190c" target="_blank" rel="nofollow">&#34;Improving the performance of your ServiceNow homepage&#34;</a></p>
<p> </p>
<p> </p>
<p>Now let&#39;s go back and ask: Why not link the transaction log table as well? The answer is: probably because the syslog_transaction table have table rotation configuration out-of-the-box. So there are more than just one table physically exist in the Database disk. I guess it was not supported by the &#39;Database view&#39; feature. Anyway, I haven&#39;t been able to get it working with syslog_transaction table. Please leave a comment if you do.</p>
<p> </p>
<p>As the admin, or admin team, scanning the syslog_transaction table is our daily job. If you get regular complaints from users about slow homepages. You should probably establish a routine check of super slow (20 seconds&#43;) homepage transactions, every day or every few days. If you see someone struggling with really bad homepage response time, you should reach out and help them proactively rather than waiting for the complaints.</p>
<p> </p>
<p>Hopefully, This article will help you get to the root cause of those slow homepages faster.</p>
<p> </p>
<p>Cheers and happy debugging!</p>
<p> </p>
<p>Bill Tang&#64;ServiceNow</p>
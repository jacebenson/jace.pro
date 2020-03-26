---
title: "How not to do ServiceNow  The oneliner of pure evil"
date: 2019-05-10T02:07:18.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a1132ff9db19bbc8d82ffb24399619ec"
---
<h1>The series</h1>
<p>Breaking ServiceNow can be incredibly easy. It happens to me on accident, on some occasions it reaches the level of absurdity, that i would classify myself as an expert (i know, i know, calling yourself an expert at something seems arrogant). So to share this absolutely useless expertise this series will focus on how not to do ServiceNow.</p>
<h1>The one-liner of pure evil</h1>
<p>And just to show you how easy it is, let&#39;s start this series off with just a single line of code. Just one. Just enough to completely destroy the performance of any instance.</p>
<pre class="language-javascript"><code>current.insert();</code></pre>
<p>Aaaaand we are done. Now don&#39;t be scared. A current.insert() won&#39;t break the instances performance on its own. That would be indeed too simple. But under the right circumstances, it does. Let&#39;s create those circumstances.</p>
<p>Go to the business rule table (sys_script) and create a new business rule as seen in the screenshot below (<em>NOTE: for the love of god do not, i repeat, DO NOT try this in any more than a personal developer instance. Don&#39;t try it on a dev-instance. You will impact the performance of the instance. And so far i did not find an easy way of stopping it. You have been warned.</em>):</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/fab527f5db99bbc8d82ffb24399619dc.iix" /></p>
<p>Then under the &#34;Advanced&#34; section just add the above mentioned one-liner. Click submit and watch the instances performance crumble.</p>
<h1>Why does this happen?</h1>
<p>Good question, glad you have asked. What happens is a special interaction of the &#34;async&#34; trigger and the current.insert();</p>
<p>It is important to understand when &#34;async&#34; is triggered. It is triggered, after the &#34;display&#34;,&#34;before&#34; and &#34;after&#34; has been run. This means, as soon as your business rule is inserted into the database, all &#34;ordinary&#34; business rules trigger. After those are finished, the system checks for &#34;async&#34; business rules. Since you have submitted/saved a business rule which is indeed running &#34;async&#34; it is taken into account and thus will be triggered. What follows now is a good to know interaction of the Glide Record function &#34;insert&#34;.</p>
<p>This function will always insert a GlideRecord object. It does not care if the record already exists or not. It will insert it. Since &#34;current&#34; is in fact a GlideRecord object, the current record is inserted. Therefore, a business rule on the &#34;sys_script&#34; table is created and will follow the same principle as the original one. One difference though: since there already is a business rule which does a current.insert() you are now left with twice as many business rules. This will cascade to infinity (aaaand beyooooond).</p>
<h1>The little brother of pure evil</h1>
<p>Now, i hear you arguing:</p>
<p>1) who is mad enough to create a business rule which triggers on business rules</p>
<p>2) who is mad enough to do a current.insert()</p>
<p>3) what use is this of?</p>
<p>Let me answer the first two questions. Although i may sound mad enough, i hope no one will ever do this (except for scientific reasons of course). In this case, of what use is this then (which leads to question 3). The purpose of this is to show you how incredibly easy it is to create looping business rules. Let me introduce you to the little brother of pure evil (which i actually encountered more than once):</p>
<pre class="language-javascript"><code>current.update();</code></pre>
<p>Simple, right? A business rule, that updates some property of the record. Now, again, on its own this is not harmful. But, what are the circumstances you encounter this? Lets exclude some possibilities:</p>
<p>1) &#34;before&#34; business rule: here no current.update() is needed, since all value changes are proposed BEFORE changing something in the database</p>
<p>2) a workflow activity: After a workflow activity (e.g. a &#34;execute script&#34; activity) has been executed, an update will be done to the record of the workflows context. This record is in fact the &#34;current&#34; record. (therefore, an explicit current.update() is not needed)</p>
<p>What does that leave us with: </p>
<p>1) &#34;display&#34; business rule</p>
<p>2) &#34;after&#34; business rule</p>
<p>3) &#34;async&#34; business rule</p>
<p>Now, i hope that everyone can agree, that a database interaction such as an update on &#34;displaying&#34; a record does not make any sense (except if you want to break your instance i guess, in which case i would salute to you). The other two options are risky:</p>
<p>Both these trigger points occur AFTER an update to the database has been made. A current.update() will trigger a new update to the database. In return this will trigger all business rules on its table again INCLUDING all &#34;after&#34; and &#34;async&#34; business rules. It is therefore very easy to create a loop. And loops are (as we now know from the current.inser()) pure evil.</p>
<p>And this is the reason why recommended coding practices will tell you to not use a current.update() in either workflows or business rules. Be aware that moving the current.update into a script include does not get rid of this problem.</p>
<h1>What to take away from this?</h1>
<p>1) Know about pure evil when it comes to performance (which is current.insert() in business rules and workflows)</p>
<p>2) Remember its little brother (current.update() in business rules and workflows)</p>
<p>3) if your goal is to get rid of your instances performance, use 1) and 2) as much as you can</p>
<p>4) repeat step 3)</p>
<p>5) ???</p>
<p>6) profit?!</p>
<p>7) remember: a .insert() will not check for an existing record</p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
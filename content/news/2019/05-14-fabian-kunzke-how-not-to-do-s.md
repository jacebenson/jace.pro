---
title: "How not to do ServiceNow  Maximum confusion"
date: 2019-05-13T11:02:39.000Z
authors: ["Fabian Kunzke"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e46a7c4fdb993f0c14d6fb243996199a"
---
<h1 class="ng-scope">The series</h1>
<p class="ng-scope">Breaking ServiceNow can be incredibly easy. It happens to me on accident, on some occasions it reaches the level of absurdity, that i would classify myself as an expert (i know, i know, calling yourself an expert at something seems arrogant). So to share this absolutely useless expertise this series will focus on how not to do ServiceNow.</p>
<h1 class="ng-scope">Maximum confusion</h1>
<p>So after breaking ServiceNow the last time around, let&#39;s focus on how we can break the user to our best capabilities. Users are kind of weird at times. They expect such things as &#34;ease of use&#34; and with that consistency and then they are annoyed, if a system cannot deliver on that promise. Which is great to understand, because that is exactly what we want to do in this chapter.</p>
<p>Now, since ServiceNow is a platform mainly focused around records and the visualisation of those, the user expects a consistency of exactly that: show me the records i am supposed to work with. It would be awful if the records at display would be random. Know what would be even worse than that? If the user would get to know about it. Imagine how pissed you would be if there clearly is a door in front of you, but upon opening it, there is nothing but a brick wall behind it.</p>
<p>As always: perform this at your own risk. If you want to maximise your risk, use a production instance of your choice (please use a personal developer instance. You can get those for free <a href="https://developer.servicenow.com/app.do#!/home" rel="nofollow">here</a>).</p>
<h1>Just another ACL</h1>
<p>So let&#39;s just close some doors randomly on the incident table. To archive this, add the following ACL:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/a6a21d87db9d7f0c14d6fb2439961968.iix" /></p>
<p>Scroll down a bit and leave the condition empty. Add the following script to it, which randomly sets the read access to false:</p>
<pre class="language-javascript"><code>answer &#61; getRandomAnswer();
function getRandomAnswer()
{
	var randomFloat &#61; Math.random();
	var limit &#61; 0.5;
	if(randomFloat &gt; limit)
		return true;
	
	return false;
}</code></pre>
<p>Please note: On the incident table other ACLs exist from the oob definition. Make sure to deactivate all other ACLs on the incident table with the name &#34;incident&#34; of the type &#34;read&#34; and with the &#34;read&#34; operation. Otherwise this may not work.</p>
<p>Now open the incident table. You may find some records (or you may not). But most importantly: you will see more than one page. If you scroll through these pages you may or may not get records shown. This should be about a 50/50 chance. So now that you are scrolling through this, note how you may encounter 20 records per page (depending on your list settings this can be more or less), or none at all. However, at the top right of the screen the total amount of records you should encounter is always static.</p>
<p>Now you may ask yourself, how this even works. I have to admit, this does not make a lot of sense as it is counterintuitive (how ironic). Let me explain how ACLs work and interact with the data:</p>
<h1>Why?</h1>
<p>As a list or record (or report) is opened, a query is sent to the server. This query is based on the filter you have set (e.g. only the active incidents). The server will then return all of the records found matching your query. Now, so far so good. In comes the ACL:</p>
<p>As you are displaying the data (e.g. in the list view) the ACL will check, if a user can access a certain interaction (in our case the read interaction) and will allow/disallow certain interactions. This is not done for the whole return, but only for the currently displayed data. This is why some pages from our example will contain data, and some won&#39;t. The ACL is run each time new data is displayed. And as we are going through the pages, this results in some pages with records, and some without.</p>
<p>The counter in the top right of each list will however always show the total returned records by the query. Simplified: this counter doesn&#39;t care about ACLs.</p>
<p>Now why is this infuriating for users:</p>
<p>1) Getting told &#34;hey something is here, but security prevents you&#34; is always a slap into the face when i expect something to see.</p>
<p>2) That counter tells me i SHOULD see some records. Where are they?</p>
<p>Now, i hear you shouting: but Fabian, who would randomly exclude some records via an ACL? And i will answer you: i hope no one (except for scientific research). But: as random (pun intended) as this may seem, it is something i have encountered numerous times, especially, because some oob functionalities actually do this. Let&#39;s suppose you have a globally distributed service desk and people from America are not allowed to see the incidents from their co-workers in Europe. Well, an ACL is the way to go. This though will result in just the same as a random ACL. Some records will be disallowed to be accessed AFTER they have been returned form the server, resulting in the infuriating counter and you-shall-not-pass info message.</p>
<h1>How can this be prevented? On query business rules.</h1>
<p>This infuriating behaviour can actually be prevented by utilising the knowledge about the execution timings of ACLs (getting a déjà-vu from the last blog). As ACLs restrict the access to records only after the results come back from the server, we know how to restrict the server result: with queries. Now, one immediate idea would be a set filter. And, although this may work, it is not an elegant way. Instead, use a business rule that executes before the query is sent to the database:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/3d7fd9c7db99bf0c14d6fb243996194b.iix" /></p>
<p>Let&#39;s stay with the example of restricting access to the agents location and add the following script:</p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/) {

	// get the users location
	var agent &#61; gs.getUser(); //-&gt; note that this returns a glide record reference allowing the dotwalk to the location in the next line of code
	var agentLocation &#61; agent.location;
	
        // extend any query to the server
	current.addQuery(&#39;caller_id.location&#39;, agentLocation);

})(current, previous);</code></pre>
<p>This business rule will trigger before any query is sent to the server. Therefore, all queries on the incident table will be extended with the restrictive query for the location.</p>
<p>This will result in similar interactions as with the ACL, but instead of allowing the user to see what he could potentially access and the prevent him from doing so, we instead restrict the results he is getting. Far less infuriating. Additionally we can also check for user roles, groups and other user based things (you could exclude all users with Fabian as their first name).</p>
<h1>Why should you care?</h1>
<p>A big part in acceptance of systems is the ease of use and with that the intuition of use. You may be fully aware of security preventing access to some tables. And with that you may be fully okay with it. But remember, you are setting up environments for co-workers of less technical expertise. Always ask yourself: Can your mum use it without asking anything? I have had numerous requests of why users cannot see certain things, how they could get those rights and why they are not allowed to see it, but their co-workers are. These business rules give you control over actually hiding records from view and they allow you to customize these messages.</p>
<p>Should you now go forth and exchange all ACLs for business rules? Absolutely not. As we know from the last blog, business rules can get very time consuming. Be aware of that. If you have a complex ruling on data above 100.000 records, you should consider not using a business rule. The good message is: such a business rule can always accommodate an ACL. You do not have to replace ACLs. Keep them as they are. But whenever a user is complaining about it, you now have the tools to make life a bit easier for him.</p>
<h1>How not to do these business rules?</h1>
<p>I will probably cover this in another blog, but i feel like this is important here:</p>
<p>DO NOT access tables within your business rule, that have on query business rules. This may also include dot-walks! Why? This may trigger those &#34;before-query&#34; business rules, thus increasing runtime. If set up correctly (or incorrectly for that matter) this can result in a ping-pong effect.</p>
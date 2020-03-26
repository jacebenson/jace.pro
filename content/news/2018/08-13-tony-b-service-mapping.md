---
title: "Service Mapping  Its a Collaboration"
date: 2018-08-12T07:02:41.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=82dfb8b2db731300e0e80b55ca9619fc"
---
<p>Last year I embarked on a customer Proof-of-Concept (PoC) involving mapping their Microsoft Exchange environment with Service Mapping.  With the scope defined, it was time to gather information needed to map the application.  Information like, how do users access the application, what are the technology layers, how is the application service distributed across networks, are firewalls involved, etc.  You know, <em>useful</em> information.  But the initial conversation went like this:</p>
<p>Me: &#34;Can you give me a list of the application components?&#34;</p>
<p>Customer: &#34;No.&#34;</p>
<p>Me: &#34;Please?&#34;</p>
<p>Customer: &#34;It&#39;s Exchange.&#34;</p>
<p>Me: &#34;Thanks. Any other applications?&#34;</p>
<p>Customer: &#34;Can&#39;t your tool find everything?&#34;</p>
<p>Me: &#34;I&#39;m asking the questions. Do you have an architecture diagram?&#34;</p>
<p>Customer: &#34;Yes.&#34;</p>
<p>Me: &#34;Awesome.  Can you give me a copy?&#34;</p>
<p>Customer: &#34;No.&#34;</p>
<p>Me: &#34;What about just a look?&#34;</p>
<p>Customer: &#34;No.&#34;</p>
<p>At this stage you might look at your cat and say &#34;Ellie, the world is a pathetic place&#34;.  This assumes you have a cat and it&#39;s called Ellie.</p>
<p>Let&#39;s run through the Service Mapping checklist:</p>
<ul><li>MID Server: Check!</li><li>Credentials: Check!</li><li>Do they work? Check!</li><li>Application service name: Check!</li><li>Entry point: Check!</li></ul>
<p>Time to whip it and whip it good.  Yes, I&#39;m <em>old</em> and millennials reading this can lookup <em>Devo</em> on Spotify.</p>
<p>To quote Aldous Huxley &#34;One can’t have something for nothing&#34; and Service Mapping did well to find two CIs with virtually no information, but not the 96 CIs the customer was expecting.  Service Mapping eventually found the other 94 CIs but not without <em>many</em> e-mail exchanges and webexes, phone calls and suckage of blood from stone.</p>
<p>Briefing the customer sponsor at the PoC closure meeting I likened the engagement to bringing a Formula 1 car to a race track I&#39;d never seen before, not being given a circuit map, not allowed to do a sighting lap and then asked to drive the fastest and most perfect lap.  The customer&#39;s response was &#34;Yes, that&#39;s <em>exactly</em> what we wanted!&#34; Hmmm... kinda suspected that.</p>
<p>That&#39;s when I dropped the c-bomb: &#34;Collaboration&#34;.  You expected a harsher word, right?  Shame on you! I pointed out that with a collaborative approach the outcome could have been achieved significantly faster and without the need to develop vampire tendencies (remember sucking blood from stone? No? Forget it).</p>
<p>While Service Mapping does an incredible job, it ain&#39;t magical (no unicorns or wizards) and it doesn&#39;t work by ESP (e.g. telepathy, mind reading, etc).  It requires good input and some steering and that takes a <em>collaborative</em> effort between the people mapping the service and the service owners.  Information needs to be captured and pieced together to <em>guide</em> the discovery of the application service components and uncover their relationships to produce an <em>accurate </em>and<em> complete </em>map.  Working together and using good input translates to a rapidly discovered service map - in most cases taking a few hours to produce.</p>
<p>The London release of Service Mapping incorporates some features that help with identifying service mapping candidates and improving the collaboration between the Service Mapping Administrator and the Service Owner. </p>
<p>Let&#39;s look at how Service Mapping can identify Application Service candidates.  Service Mapping can automatically create potential application services referred to as <em>candidates</em> by extracting entries directly from one or more load balancers.  The load balancer entries are converted into potential entry points.  Service Mapping can also identify potential entry points using discovered traffic-based connections.  The end result is a list of candidate Application Services for mapping. Telepaths and mind readers, your services are no longer required!</p>
<p><img style="max-width: 100%; max-height: 480px;" src="cce75d76dbf31300e0e80b55ca9619e1.iix" /></p>
<p>The Service Mapping Administrator can collaboratively work with the Service Owner to review the candidates and confirm which ones to use.  To learn more about this feature check out <a href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/service-mapping/task/map-business-services-in-bulk.html" rel="nofollow">Map multiple application services suggested by Service Mapping</a> in the London Product Documentation.</p>
<p>Now that the Service Mapping Administrator has Application Service candidates, they can be mapped but how do you know when the map is complete?  Service Mapping may run out of CIs to discover, or what if the CIs discovered aren&#39;t correct?  OK, bring <em>back</em> the telepaths - we need to read the Service Owner&#39;s minds...  or do we?</p>
<p>What if you could provide a simple way of allowing the Service Mapping Administrator and Service Owner to review and approve the application service maps?  I&#39;m glad I asked, because that&#39;s exactly what&#39;s been added to Service Mapping in the London release.  Service Mapping now includes a Review and Approval facility - let&#39;s take a quick look at how it&#39;s used. </p>
<p>The Service Mapping Administrator is responsible for mapping, fixing, and maintaining Application Services and begins by clicking on the Send for Review button to create a review task assigned to the Service Owner:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="9d0c117edbf31300e0e80b55ca9619ba.iix" /></p>
<p>The Service Mapping Administrator can include a message in the approval request:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="5e1c597edbf31300e0e80b55ca961995.iix" /></p>
<p>The Service Owner is notified they&#39;ve been assigned a task and can check the service map to ensure it has the correct CIs and relationships. If changes are needed the map can be rejected:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="58b225fadb371300e0e80b55ca961955.iix" /></p>
<p>The Service Mapping Administrator receives the rejection message (hey nothing personal, it&#39;s not like they&#39;re dating...):</p>
<p><img style="max-width: 100%; max-height: 480px;" src="a5f2e53edb371300e0e80b55ca9619e3.iix" /></p>
<p>The Service Mapping Administrator fixes the map and resends it for approval:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="ee536d3edb371300e0e80b55ca9619c8.iix" /></p>
<p>The Service Owner finally approves the map (and asks for the Service Mapping Administrator&#39;s phone number):</p>
<p><img style="max-width: 100%; max-height: 480px;" src="0ad4a9fedb371300e0e80b55ca961912.iix" /></p>
<p>A very neat collaboration capability and an example of ServiceNow making work, work better for people<sup>TM</sup>. OK... that was pretty <em>cringe-worthy</em>.</p>
<p>Anyhoo, to learn more check out <a href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/service-mapping/task/business-service-approval.html" rel="nofollow">Review and approval of application service maps</a> in the London Product Documentation.</p>
<p>And would these features have helped with the customer PoC?  Absolutely!  Notifications sent by the review and approval process would have <span style="text-decoration: line-through;">forced</span> <em>encouraged</em> the customer to collaborate, piecing together information faster with the added bonus of providing a history of how the service was ultimately mapped.</p>
<p> </p>
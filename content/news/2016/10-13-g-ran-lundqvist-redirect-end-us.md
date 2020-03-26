---
title: "Redirect end users to portal"
date: 2016-10-13T00:42:29.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=53bc6e25dbd0dbc01dcaf3231f9619b2"
---
<p>I ran into this issue by accident and after looking through the community I noticed that I ain&#39;t the only one looking for a good solution for this.</p>
<p> </p>
<p>The scenario is like this: We made a nice looking end user portal. Either in CMS or the new Service Portal. Now we have links point to the portal by using a suffix like &#34;/ess&#34; or &#34;/sp&#34; or what combination you can come up with. Might even have a special DNS-name like support.goranlundqvist.com pointing to goranprod.service-now.com/support.</p>
<p> </p>
<p>The problem occurs when we got curious user that gets creative and want to see where they come when they remove this suffix and just go to &#34;goranprod.service-now.com/&#34; and tada, they are get inside the UI that our technicians are using. And that is something we don&#39;t want to happen. I have found solutions like having a UI Script that checks if the user has roles and if not, it redirects, a ui macro pretty much doing the same, a specific homepage showing the users that they are in the wrong spot etc. But no one is happy with the workaround they made.</p>
<p> </p>
<p>We all know that ServiceNow got A LOT of system properties and what I think is really annoying is that even if you go through them all at sys_properties.list, you still haven&#39;t seem them all. Some of them ain&#39;t there OOB and you need to create them yourself to get the magic going.</p>
<p> </p>
<p>And I bet you start to see where I&#39;m going here.</p>
<p> </p>
<p>There is a property to handle this. To redirect users without any roles. But you need to create it yourself.</p>
<p> </p>
<p>So go into the table sys_properties. Press the&#34;new&#34; button and make the record that looks like this:</p>
<p> </p>
<p><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="932b6bf1dbd4dfc0b322f4621f96199a.iix" width="533" height="290" /></p>
<p> </p>
<p>So the name of the property is &#34;<strong>glide.entry.loggedin.page_ess</strong>&#34; and the value should be the suffix for your portal.</p>
<p> </p>
<p>So now if a user without role would go to goranprod.service-now.com it will get redirected automagically to &#34;goranprod.service-now.com/sp&#34;</p>
<p> </p>
<p>//Göran</p>
<p> </p>
<p> </p>
<p><img class="image-2 jive-image" style="width: 192px; height: 56.367px;" src="f3dcc10edb5c97041dcaf3231f961997.iix" alt="Symfoni Logo Color Box.jpg" width="192" height="56" /><img class="image-3 jive-image" style="width: auto; height: auto;" src="b2d924c6db909344e9737a9e0f9619ab.iix" alt="sn-community-mvp.png" /></p>
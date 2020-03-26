---
title: "Developer Toolbox Tool"
date: 2016-11-10T03:38:11.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f66d2e29dbd0dbc01dcaf3231f961966"
---
<p>Not really a tool in itself, but a collection of modules with links to some tables and pages within the platform.   Some are not used very often, but are useful nonetheless.   Most of them are for tables that do not have an existing module and I can never remember the table name, or keep misspelling it  </p>
<p> </p>
<p>I&#39;ve attached an XML export of my current Update Set.   It contains records for:</p>
<ul><li>the &#34;Developer Toolbox&#34; Application Menu, which is restricted to the &#34;admin&#34; role and normally is the first Application shown in the Navigator</li><li>the &#34;Developer Toolbox&#34; Menu Category which adds a red highlight to the Application menu (UI14 and below)</li><li>the &#34;glide.ui14.navigator.use_border_color&#34; System Property, set to &#34;true&#34;, which shows the red highlight on the Application Menu (see Fuji screenshot below)</li><li>an Image, &#34;u_CMDBHardwareHierarchy.gif&#34;, used to show a subset of the Hardware CMDB class hierarchy from the &#34;Hardware Hierarchy Map&#34; Module (I find it useful to show new clients how classes work)</li><li>numerous Modules (currently 46) with links to different tables and pages</li></ul>
<p> </p>
<p>The Modules are grouped into three different sections:</p>
<ul><li>Useful Links</li><li>Useful Pages</li><li>Verify Post-Clone Tasks</li></ul>
<p> </p>
<p>Screenshot from Geneva:</p>
<p><img class="image-2 jive-image" style="max-width: 1200px; max-height: 900px;" src="29a2410adb9013043eb27a9e0f96198a.iix" /></p>
<p> </p>
<p>Screenshot from Fuji:</p>
<p><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="ec23ed42db50d7049c9ffb651f961900.iix" /></p>
<p> </p>
<p> </p>
<p>Here&#39;s the CMDB hierarchy image:</p>
<p><img class="image-3 jive-image" style="width: 802px; height: 335.797px;" src="1a3f59cedb98d304b322f4621f96192e.iix" alt="u_CMDBHardwareHierarchy.gif" width="802" height="336" /></p>
<p> </p>
<p>It helps when explaining the class/subclass inheritance model to clients.</p>
<p> </p>
<p>I usually install the Update Set in every instance that I work in, hoping to add a little bit of productivity to my day.   The Post-Clone section is handy for verifying common things after you perform a clone.   I keep adding new modules as I come across new tables, pages or tasks that I need to perform.</p>
<p> </p>
<p>Please share any links you may have created in the past or might be inspired to add in the future.</p>
<p> </p>
<p><strong>August 17, 2017:</strong> Updated the attached XML file.</p>
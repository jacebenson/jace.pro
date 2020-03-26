---
title: "Adding a Visual Task Board to a Dashboard"
date: 2020-01-29T00:09:31.000Z
authors: ["Adam Stout"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5b1edeb6db2604545ed4a851ca961968"
---
<p>Dashboards are more than Reports and Performance Analytics widgets.  They are part of the Now Platform and all the functionality that brings.  One of my favorite features on the platform are <a href="https://www.servicenow.com/products/servicenow-platform/visual-task-boards.html" rel="nofollow">Visual Task Boards</a>. </p>
<p>If you are not familiar with VTBs as they are often called, here is a quick description: </p>
<p><em>A faster, easier way to work. Visual Task Boards turn any list into a Kanban‑like task board, offering an intuitive, graphical alternative for working with any ServiceNow application. The task board displays records as “cards” in a drag‑and‑drop interface, allowing you to rapidly change state or recategorize work. An activity stream embedded within the board shows all recent activity so you can see changes in real-time.</em> </p>
<p>VTBs help me quickly visualize and manage my day to day work.  The problem I had was that I found myself switching back between my VTB and my dashboard.  Thanks to the power of the Now Platform, I can add my VTB to my dashboard to seamlessly review reports and take action at the same time. </p>
<p>For those of you who are in my shoes of switching back and forth between Dashboards and VTBs, here is how you can add your VTB to your dashboard. </p>
<h2>How to Add a Visual Task Board to a Dashboard  </h2>
<h3>Prerequisites </h3>
<p>We need to create a content block, so we need <strong>content_admin</strong> to do so.  For this blog, we’ll assume you have a dashboard and VTB to add. </p>
<h3>Get the VTB URL </h3>
<p>To get started, we’ll need to navigate to the VTB.  Here is my VTB: </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/914c5e72dbe204545ed4a851ca96192d.iix" /></p>
<p>Once there, click on the I icon to open the info panel and copy the URL. </p>
<p> <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/3e6cdaf2dbe204545ed4a851ca961905.iix" /></p>
<h3>Create iFrame </h3>
<p>Now that we have the URL, we can create an iFrame to allow us to load it on a dashboard.  [This is the part that requires content_admin]. </p>
<p>Navigate to the iFrame module in Content Management. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9b8c5a76dbe204545ed4a851ca961977.iix" /> </p>
<p>Once there, click new and create an iFrame like this one: </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/169cd2b6dbe204545ed4a851ca9619dd.iix" /></p>
<p>Give it a name that you can easily pick when browsing for it.  We’ll hide the name on the dashboard, so verbose is ok.   </p>
<p>Set the sizing to “Expand to fit content” instead of the default fixed size. </p>
<p>Set the URL (removing the instance name and just using the value starting with “/$vtb.do”.  It should look something like this: </p>
<p>/$vtb.do?sysparm_board&#61;60c24a1ddb2ac010e67583243996193b </p>
<h3>Add the Content Block to Dashboard </h3>
<p>Now that we have the content block created navigate to your dashboard.  Create a tab for your VTB and click to add a new widget.  Browse the <strong>Content Blocks</strong><strong> </strong>and search for the name you gave your iFrame content block. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/fecc5e3adbe204545ed4a851ca9619a2.iix" /></p>
<p>Once added, resize to fill your tab.  Then click on the gear in the top right corner of the widget (which may be hidden) to edit the widget properties. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/66dcda7adbe204545ed4a851ca96195f.iix" /> </p>
<p>Hide the border and the title. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/6bec1ebadbe204545ed4a851ca961997.iix" /></p>
<h3>Enjoy your VTB on your Dashboard </h3>
<p>You’re done.  That is all it took. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/ee2d927edbe204545ed4a851ca9619d2.iix" /></p>
<h2>Conclusion </h2>
<p>In a few quick minutes, we added a seemingly unrelated page directly onto our dashboard to make work easier and faster.  The Now Platform is awesome.   </p>
<p>Don&#39;t be afraid to explore and push the limits.  Not everything may work on a dashboard (be sure to test your blocks and be aware of embedding objects several levels deep), but you might be surprised at what does.  What else do you need to see regularly?  A KB article?  A Service Catalog item?  What would make life better for my users? </p>
<p>If you are looking for other ideas on what to add, check out this blog on <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;29ec2e65dbd0dbc01dcaf3231f9619a4" rel="nofollow">Making Better Looking Dashboards</a>. </p>
<p>Post some comments here and let me know what you have added to your dashboard to work better for your users.</p>
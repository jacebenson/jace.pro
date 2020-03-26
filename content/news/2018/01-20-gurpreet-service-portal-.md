---
title: "Service Portal  Tabbed List Widget  Hi Portal  My Issues  Up to  tabs supported"
date: 2018-01-19T16:47:43.000Z
authors: ["Gurpreet"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3e0d2ea5dbd0dbc01dcaf3231f96190f"
---
<p>It&#39;s been asked multiple times and there is not an easy way to implement a tabbed list. We can find out smiler widget in HI Portal under My Issues link. If you are still looking for the solution then you are at right place.</p>
<p> </p>
<h1><strong>Steps to be followed<br /></strong></h1>
<p>1. create a new page</p>
<p>2. add the widget(<strong>List Tabbed</strong>) to the page using page designer (attached XML)</p>
<p>3. configure instance options for the widget</p>
<p> </p>
<h1><strong>Options</strong></h1>
<h3><strong>1. Tab Links:</strong></h3>
<h4>Tab 1 Link, Tab 2 Link, Tab 3 Link, Tab 4 Link, Tab 5 Link</h4>
<p>Each of the tab links defines from where/how the data to be picked in respective tabs.</p>
<p><strong>Mandatory parameters to be passed for each of tab links</strong></p>
<p><strong>I. table:</strong> Name of the table from which data to be picked.</p>
<p><strong>II. title:</strong> Label to display on tab</p>
<p> </p>
<h6><strong>Optional Parameters:</strong></h6>
<p><strong>III.</strong> Instance options supported by OOB <strong>list</strong> page (Widget: <strong>Data Table from URL Definition</strong>) could be passed as parameters to each of the Tab Links.</p>
<p>Supported parameters:       <strong>o, d, view, p, filter, enable_filter, show_new, show_keywords, show_breadcrumbs</strong></p>
<p><strong>IV. page (ticket/ sc_request/ form):</strong> Records from the tab will open in mentioned page.</p>
<p> </p>
<h3><strong>2. Link to this page: </strong></h3>
<p>if parameter page not passed in the link tab then the records will open in this page. if its blank too then links will open in &#39;form&#39; page.&#39;</p>
<p> </p>
<p><strong>Configuration for Incidents, Requests, Knowledge</strong></p>
<p> </p>
<p><strong>Tab 1 Link: </strong></p>
<p>?table&#61;incident&amp;title&#61;Incidents&amp;page&#61;ticket&amp;view&#61;sp&amp;filter&#61;caller_id&#61;javascript:gs.getUserID()^active&#61;true&amp;enable_filter&#61;true&amp;show_new&#61;true&amp;show_keywords&#61;true&amp;show_breadcrumbs&#61;true&amp;o&#61;number&amp;d&#61;desc&amp;p&#61;1</p>
<p> </p>
<p><strong>Tab 2 Link: </strong></p>
<p>?table&#61;sc_request&amp;title&#61;Requests&amp;page&#61;sc_request&amp;filter&#61;requested_for&#61;javascript:gs.getUserID()^active&#61;true&amp;show_keywords&#61;true</p>
<p> </p>
<p><strong>Tab 3 Link:     </strong></p>
<p>?table&#61;kb_knowledge&amp;title&#61;Articles&amp;page&#61;kb_article&amp;filter&#61;workflow_state&#61;published^active&#61;true&amp;show_keywords&#61;true</p>
<p> </p>
<p><img class="image-1 jive-image" style="height: 462px; width: 908.91px;" src="f782f882db1cdfc03eb27a9e0f96191b.iix" width="909" height="462" /></p>
<p> </p>
<p> </p>
<h1><strong>How it looks like</strong></h1>
<p><strong><img class="image-2 jive-image" style="width: 914px; height: 431.368px;" src="16d3d88edb141f048c8ef4621f9619a8.iix" width="915" height="432" /></strong></p>
<p> </p>
<p><strong>Edit [20/09/2018]</strong></p>
<p><strong>Known Issues:</strong></p>
<p><strong>1. Using same table in more than one tabs then filter is working in one tab and not working second tab</strong></p>
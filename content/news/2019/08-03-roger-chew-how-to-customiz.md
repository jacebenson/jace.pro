---
title: "How to customize fields displayed on the reference field pop up form using a syspopup view"
date: 2019-08-03T01:53:34.000Z
authors: ["Roger Chew"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f81f859d1b837b08ada243f6fe4bcb92"
---
<p>Have you ever wanted to customize the fields displayed to a user when clicking on a reference field icon (<img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/05b3b3421b03fb48ada243f6fe4bcb74.iix" />)? If so, then you can take advantage of the sys_popup form view feature.<br /><br /></p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/62484bb61b8f3700ada243f6fe4bcb26.iix" /></p>
<p> </p>
<h2>sys_popup behaviors</h2>
<p>The reference field popup form behaves differently depending on how you set up the sys_pop up form view.</p>
<table style="height: 70px; width: 740px;" border="1" cellspacing="1" cellpadding="3"><tbody><tr style="height: 21.875px;"><td style="width: 163.08px; height: 21.875px;">none (default)</td><td style="width: 568.92px; height: 21.875px;">By default, if a sys_popup view is not defined, the reference field popup form will display the default view of the table.</td></tr><tr style="height: 13px;"><td style="width: 163.08px; height: 13px;">sys_popup</td><td style="width: 568.92px; height: 13px;">
<p>If you have defined a sys_popup, the reference field popup form will display the fields configured in sys_popup.</p>
</td></tr><tr style="height: 19px;"><td style="width: 163.08px; height: 19px;">
<p>sys_popup,[view name]</p>
</td><td style="width: 568.92px; height: 19px;">
<p>If you have defined a sys_popup,[view name] and viewing a form view called [view name], the reference field popup form will display the fields configured in sys_popup,[view name] (e.g. sys_popup,ess).</p>
<p>If the sys_popup,[view name] does not exist and viewing a form view called [view name], then the default sys_popup view will be displayed. <br />(NOTE: This particular behavior broke in Madrid and is fixed in Madrid Patch 5 according to the <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0749057" target="_blank" rel="noopener noreferrer nofollow">known error article</a>.)</p>
</td></tr></tbody></table>
<p> </p>
<h2>Configure a sys_popup view</h2>
<p>To configure a reference field popup form for a table using the default sys_popup view, navigate to the below URL format, substituting the instance name and table name. Then configure the form to add or remove fields as appropriate.</p>
<pre class="language-markup"><code>&lt;your instance name&gt;.service-now.com/&lt;table name&gt;.do?sysparm_view&#61;sys_popup</code></pre>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/5098073a1b8f3700ada243f6fe4bcb96.iix" /></p>
<h2><br />Configure a sys_popup view for a specific form view</h2>
<p>To configure a reference field popup form for a table using a non-default sys_popup view, navigate to the below URL format, substituting the instance name, table name, and name of view. Then configure the form to add or remove fields as appropriate.</p>
<pre class="language-markup"><code>&lt;your instance name&gt;.service-now.com/&lt;table name&gt;.do?sysparm_view&#61;sys_popup,[view name]</code></pre>
<p> </p>
<p> <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/f8a8cf3a1b8f3700ada243f6fe4bcb5b.iix" /></p>
<h1>Additional Information</h1>
<p><a href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/field-administration/concept/c_ReferenceIcon.html#t_FieldsDisplayed" target="_blank" rel="noopener noreferrer nofollow">Configure the reference icon view of fields</a></p>
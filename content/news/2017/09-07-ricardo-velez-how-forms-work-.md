---
title: "How forms work  tips on identifying and fixing broken forms"
date: 2017-09-06T20:27:08.000Z
authors: ["Ricardo Velez"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=301eae2ddbd0dbc01dcaf3231f96199c"
---
<div class="margin">
<p class="title"><span class="title">How to identify and fix a broken form<span class="spanColor"> | Process Examination</span></span></p>
<br />
<table style="height: 98px; background-color: #f0eded; border: medium solid #000000;" width="200"><tbody><tr><td>
<p><span style="font-size: 12pt;"><strong> Contents</strong></span></p>
<p style="padding-left: 30px;">1. <a title="Identifying the issue" href="#Identifying the issue" rel="nofollow">Identifying the issue</a></p>
<p style="padding-left: 30px;">2. <a title="How Forms Work" href="#How Forms Work" rel="nofollow">How Forms Work</a></p>
<p style="padding-left: 30px;">3. <a title="How to Troubleshoot" href="#How to Troubleshoot" rel="nofollow">How to Troubleshoot</a></p>
</td></tr></tbody></table>
<p> </p>
<h1><a name="Identifying the issue"></a>How to identify if your form is broken</h1>
<hr style="border-top-width: 1px; border-top-style: solid; border-top-color: #cccccc;" />
<p>When configuring forms, occasionally all of the fields and form sections are missing</p>
<p style="text-align: center;"><img class="image-7 jive-image" style="width: 620px; height: 372px;" src="0159affddb509b048c8ef4621f961907.iix" alt="broken servicenow form.jpg" /></p>
<p>If this situation occurs, the form layout has a problem that needs to be addressed.</p>
<p style="text-align: left;"> </p>
<h2><a name="How Forms Work"></a>How ServiceNow Forms Work</h2>
<hr style="border-top-width: 1px; border-top-style: solid; border-top-color: #cccccc;" />
<p>A form consists of the collaboration of multiple tables:</p>
<ul><li>sys_ui_view — Holds the record for the View where the form lives</li><li>sys_ui_form — Holds the container for when a form has Multiple Form Sections</li><li>sys_ui_form_section — A container for the section and its elements</li><li>sys_ui_section — The form section as displayed on tabs in the form</li><li>sys_ui_element - Contains the relationship to the fields on the form</li></ul>
<p> </p>
<p>When you configure the form layout, all of these tables are updated in the backend to reflect the changes made. There are two different use cases for how forms are built. The following diagrams show how these tables work together.</p>
<h3>Building a Single Form Section</h3>
<p>For a form with a single form section, the relationship between the View and the Section is established directly without needing to reference the Form or Form Section records. The section itself is tied to multiple elements.</p>
<p><img class="image-2 jive-image" style="width: 620px; height: 246px; display: block; margin-left: auto; margin-right: auto;" src="a326dd42db1c97049c9ffb651f9619a7.iix" alt="Screen Shot 2017-08-30 at 9.44.10 AM.png" /></p>
<p> </p>
<p>The view, which in many cases is the base system Default view, will be tied directly to the Section. A section for this use case tends to not contain a Caption, and is not accompanied by any Tabs or additional division of sections below it.</p>
<p style="text-align: center;"><img class="image-8 jive-image" style="width: 620px; height: 207px;" src="caae4902db589f048c8ef4621f961931.iix" alt="single form section.jpg" /></p>
<p>Sections should not be confused with related lists, which tend to be below Related links on forms.) The single section tends to inherit the name of the table.</p>
<p> </p>
<h3>Creating Multiple Form Sections</h3>
<p>For a form with multiple form sections, two additional tables join the schema, sys_ui_form and sys_ui_form_section. The sys_ui_form record acts as an invisible container to all the form sections and their corresponding elements. The sys_ui_form_section sections are contained inside the Form record and act as containers for all the individual sections.</p>
<p> </p>
<p><img class="image-4 jive-image" style="width: 926px; height: 488.39px; display: block; margin-left: auto; margin-right: auto;" src="c9011082db9417041dcaf3231f96196b.iix" alt="Screen Shot 2017-08-30 at 9.45.33 AM.png" width="926" height="488" /></p>
<p style="text-align: center;"> </p>
<p>This schema enables you to easily modify your sections across the platform, without having to repeat the same steps on each individual view, of which there can be several, for which it would be tedious to repeat the modifications individually. It also provides a way to domain-separate the form sections if the instance is domain separated.</p>
<p> </p>
<p>Keep in mind that the Form and Form Sections are containers that are not explicitly visible on the form.</p>
<p> </p>
<p><img class="image-5 jive-image" style="width: 620px; height: 384px; display: block; margin-left: auto; margin-right: auto;" src="76ab0482db9c1304b322f4621f96198c.iix" alt="Screen Shot 2017-08-30 at 10.19.28 AM.png" /></p>
<p>Note that even though the Form Sections are highlighting the tabs, they are just representing a container of the section inside and are not the section itself.</p>
<p> </p>
<h1><a name="How to Troubleshoot"></a>How to Troubleshoot a Broken Form</h1>
<hr style="border-top-width: 1px; border-top-style: solid; border-top-color: #cccccc;" />
<p>To troubleshoot, identify which of the blocks depicted in the examples is missing, then replace it by bringing it in from another instance where the issue is not present.</p>
<h2>Troubleshooting a broken Single Form Section</h2>
<ol><li>
<p>Identify the view you are working on.</p>
</li><li>
<p>Navigate to <strong>System UI &gt; Views.</strong></p>
</li><li>
<p>Find and open the record for the view identified in step 1.</p>
</li><li>
<p>Go to the Sections tab in the related records and look for the affected section by searching for it using the table name.</p>
<p>If one is not found, then you need to address the issue. If you have another instance where the section exists, you can export the XML file for that one and import it in the affected environment. To ensure that you have the right form section, verify the sys_id by going to the form, bringing up your browser developer tools and, in the elements section, look for an element where the ID starts with section_tab. The sys_id for the corresponding section will follow the section_tab text, for example, <span style="font-family: courier new,courier;"> section_tab.bfb81dc9c0a8000900127627db594210</span>.</p>
<p>The following figure shows an example.</p>
<p style="text-align: center;"><img class="image-9 jive-image" style="width: 620px; height: 177px;" src="6d0a20cadb9857041dcaf3231f961956.iix" alt="troubleshoot broken form.jpg" /></p>
</li><li>
<p>Import the XML file from your other instance. If none exist, contact Customer Support for further troubleshooting.</p>
</li><li>
<p>Run cache.do in your instance to clear the instance cache and reflect the changes.</p>
</li></ol>
<p> </p>
<h2>Troubleshooting Multiple Form Sections</h2>
<ol><li>
<p>Identify the view you are working on.</p>
</li><li>
<p>Navigate to <strong>System UI &gt; Views.</strong></p>
</li><li>
<p>Find and open the record for the view identified in step 1.</p>
</li><li>
<p>Go to the Forms tab in the related records and look for the affected section by searching for it using the table name.</p>
<p>If one is not found, you need to address the issue. If you have another instance where the section exists, you can export the XML file for that one and import it in the affected environment.</p>
</li><li>
<p>If the form exists, open the record and review every related form section record to ensure it exists.</p>
<p>If one does not exist, import it from an instance where the issue is not present. Ensure that the sys_id&#39;s for the missing section match the instance where the issue is not present. Repeat this for any missing Form, Form Section, Section, or Element that you find is missing.</p>
</li><li>
<p>Run cache.do in your instance to clear the instance cache and reflect the changes.</p>
</li></ol>
<p> </p>
<h3>Video demo of how to fix multiple form sections</h3>
<p> </p>
<p><iframe src="https://www.youtube.com/embed/kigcEy36tK0" width="560" height="315"></iframe></p>
<p> </p>
<p>Once you are finished, your form layout should be back to normal and you should be able to configure it in the conventional ways.</p>
</div>
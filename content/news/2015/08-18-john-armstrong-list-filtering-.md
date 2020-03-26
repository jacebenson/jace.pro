---
title: "List Filtering in the Classic Mobile UI"
date: 2015-08-18T03:13:34.000Z
authors: ["John Armstrong"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5ebc2e25dbd0dbc01dcaf3231f96191d"
---
<p>Understanding how filtering works within the <a title="" href="/community?id&#61;community_blog&amp;sys_id&#61;0cecaa65dbd0dbc01dcaf3231f9619cd" rel="nofollow">Mobile user interface</a> is helpful as it will allow you to customize the available options for filtering, and ensure that users accessing your instance on the go can find the information they need quickly.   The mobile UI has a more streamlined subset of the filtering options, designed to be usable within the more<strong> limited hardware</strong> and <strong>screen space</strong> and of a mobile device.   As a result, there are some differences in the way filtering functions.</p>
<p> </p>
<p> </p>
<h2>Accessing the List Filter on a mobile device</h2>
<p>The desktop UI has a &#34;funnel&#34; icon above the list to see filter options.   In mobile, filtering is done by tapping the list&#39;s table name, which appears in blue in the upper left above the list.</p>
<p> </p>
<p>Here you&#39;ll see a list of available fields used for filtering (Not all fields will be visible, as they are in the Desktop UI, more on that below).   Clicking on any of these fields will then display a list of operators.   Tapping on an operator will display a list of appropriate options, or a text box for manual input.   There are some limitations and differences on the mobile version of the filter detailed below.</p>
<p><img class="image-0 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="12f17086db1097041dcaf3231f961980.iix" alt="Filter_Location.png" /></p>
<p> </p>
<p>You will notice that there is no <a title="ki.servicenow.com/index.php?title&#61;Using_Filters_and_Breadcrumbs#Using_OR_Conditions" href="http://wiki.servicenow.com/index.php?title&#61;Using_Filters_and_Breadcrumbs#Using_OR_Conditions" rel="nofollow">&#39;or&#39; condition</a> when trying to filter in the mobile interface. Mobile filtering is a little less comprehensive, so there&#39;s not a method to add &#39;or&#39; to your conditions yet.   To get around this, consider using the &#34;is one of&#34; operator to filter for multiple choices.</p>
<p> </p>
<p> </p>
<h2>Selecting multiple options on the same field</h2>
<p>For operators like &#34;is one of,&#34; a text box is displayed rather than a list of available items.   The text box can be used to enter multiple comma-separated items.   The example below shows the selection of two categories for the incident table.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><img class="image-1 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="b81fc0c6db105304b322f4621f96193c.iix" alt="Screen Shot 2015-08-13 at 10.07.33 AM.png" /></p>
<p><strong> </strong></p>
<h2>Where are the rest of the fields in filter options?</h2>
<p>The fields displayed in the mobile filter options are the same fields that appear on that table&#39;s list using the mobile view.   There are a few other fields shown in addition to these, for example Sys ID and Updated.</p>
<p> </p>
<p>For example, take the incident table.   In the desktop UI, open the incident list and select the mobile view.   Out of box, you&#39;ll see the Number, Category, Short Description, and Priority fields.</p>
<p><img class="jive-image image-2" style="height: 141.516129032258px; width: 535px; display: block; margin-left: auto; margin-right: auto;" src="03ece771dbd893049c9ffb651f961953.iix" alt="Screen Shot 2015-08-13 at 10.16.54 AM.png" width="535" height="142" /></p>
<p>These are the same fields we see as filter options in mobile view.   Configuring and <a title="ki.servicenow.com/index.php?title&#61;Configuring_Lists#Configuring_the_List_Layout" href="http://wiki.servicenow.com/index.php?title&#61;Configuring_Lists#Configuring_the_List_Layout" rel="nofollow">adding fields to this list</a> will also make them available as filter options in the Mobile UI.   The only exception here is dot-walked fields, which currently do not show in mobile filter options (this is being addressed in problem PRB613371).   Other than this exception, any fields added to this list will become available as filter options for your mobile lists.</p>
<p> </p>
<p> </p>
<p> </p>
<h2>Sorting is done using the field drop down</h2>
<p>Currently sorting is limited to the drop down located just above the search box.   The fields available in this box are also limited to the ones on the mobile list for that table, as discussed above, so adding fields to the table&#39;s mobile view list will also make them visible here.   Tapping the drop down text will also reverse the sort order.</p>
<p><img class="image-0 jive-image" style="max-width: 620px; height: auto; display: block; margin-left: auto; margin-right: auto;" src="c2ce85c6db14d304b322f4621f961945.iix" alt="Screen Shot 2015-08-17 at 1.26.51 PM.png" /></p>
<p> </p>
<p> </p>
<p><span style="font-size: 10pt; line-height: 1.5em;">There are a few known issues with filtering in the Mobile UI.   Remember, the mobile interface is <span style="font-size: 13.3333330154419px;">designed to be usable within the more</span><span style="font-size: 13.3333330154419px;"><strong> limited hardware</strong></span><span style="font-size: 13.3333330154419px;"> and </span><span style="font-size: 13.3333330154419px;"><strong>screen space</strong></span><span style="font-size: 13.3333330154419px;"> and of a mobile device. Not everything you can do on a desktop can be done from a mobile device. We have condensed the experience to make it easier to use from a go-anywhere perspective.</span></span></p>
<p> </p>
<ul><li>PRB634089:   New record from a filtered list will not populate the new record with pre-filled fields. (Under Investigation)</li><li>PRB613371:   Mobile UI Filter does not show dot-walked fields.   (Under Investigation)</li><li><a title="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0547176" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0547176" rel="nofollow">ServiceNow KB: Mobile UI showing the wrong list filter on the display for module (KB0547176)</a></li></ul>
<p> </p>
<p> </p>
<p>With the above information, you should have an understanding of filtering within the mobile UI, be able to customize the field availability on your mobile lists, and ensure that your users have the information they need available to them.</p>
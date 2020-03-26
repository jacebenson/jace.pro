---
title: "How to prevent performance issues related to exports and export limits"
date: 2018-03-27T02:58:31.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=8c9c19d2db41d7c42e247a9e0f96198e"
---
<h1>Excel Export Limits &amp; Properties</h1>
<h2 style="color: #646464; font-size: 18px;">How to Prevent Performance Issues</h2>
<p>There are two ways to export lists/reports to Excel in the platform:</p>
<ul><li>Scheduled Reports (which run via worker threads)</li><li>Export to Excel from a list (which run via user transactions)</li></ul>
<p>Due to the way the platform must load the data into memory while converting to .<span style="font-family: courier new,courier;">xls</span> and .<span style="font-family: courier new,courier;">xlsx</span> formats, there are memory constraints when exporting large reports to Excel. For this reason the platform restricts the number of rows/columns you can export which is controlled via system properties:</p>
<ul><li>Row Limits: <em><strong>glide.ui.export.limit, glide.xlsx.export.limit, glide.excel.export.limit</strong></em></li><li>Column Limits: <em><strong>glide.xlsx.max_cells, glide.excel.max_cells</strong></em></li></ul>
<p>Sometimes these properties must be changed to fit business needs so full reports can be exported, however, this makes the platform vulnerable to low memory conditions. This leads to users experiencing degraded performance on the affected node.</p>
<h4><span style="text-decoration: underline;">Export Properties: Default Values</span></h4>
<p><img src="0954156adb495fc42e247a9e0f9619b0.iix" width="571" height="196" /><img id="pasted_img_47731550477302904773c6304773a2c0" src="sys_attachment.do?sys_id&#61;4d89c897db43ee804837f3231f9619bc" alt="" width="543" height="190" /></p>
<p><em>Note: The <strong>glide.xlsx.export.limit</strong> and <strong>glide.xlsx.max_cells</strong> properties are available only beginning with the Helsinki release.</em></p>
<p>For additional information see the product documentation topic <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/exporting-data/concept/c_ExportLimits.html" rel="nofollow">Export limit properties</a>.</p>
<p> </p>
<h2 style="color: #646464; font-size: 18px;">Additional Information: Export Limit Properties</h2>
<p class="p1">The <em><strong>glide.ui.export.limit</strong></em> property is used only if the<em><strong> glide.excel.export.limit</strong></em> property is set to zero or less.   This is also applicable for all other <em><strong>glide.</strong></em>&lt;format&gt;<em><strong>.export.limit</strong></em>properties.  For these cases, the platform will use the <em><strong>glide.ui.export.limit</strong></em> value, which by default is set to 10,000.</p>
<p class="p1">Additionally, the legacy com.glide.processors.XMLProcessor.record_count property can also affect the export limits. </p>
<p class="p1"><span class="s1">If these properties have been changed, the following logic determines the limit that will be used:</span></p>
<ul><li class="p2">If <em><strong>glide.</strong></em>&lt;format&gt;<em><strong>.export.limit</strong></em> is greater than zero, use it.</li><li class="p1"><span class="s1">If <em><strong>com.glide.processors.XMLProcessor.record_count</strong></em> is greater than zero, use it.</span></li><li class="p1"><span class="s1">If both of these properties are less than zero, then use <em><strong>glide.ui.export.limit</strong></em>, which by default is set to 10,000.</span></li></ul>
<h2 style="color: #646464; font-size: 18px;"> </h2>
<h2 style="color: #646464; font-size: 18px;">How to Work Around an Excel Export Memory Issue</h2>
<ul><li>
<p>If on Helsinki or later releases, set all reports that are exporting to Excel to use the .<span style="font-family: courier new,courier;">xlsx</span> format instead of .<span style="font-family: courier new,courier;">xls</span>. Exporting to .<span style="font-family: courier new,courier;">xlsx</span> is more optimal in regards to memory consumption.</p>
<p><img id="pasted_img_0f036800f0e4c00f039a00f095000f06" src="sys_attachment.do?sys_id&#61;3ca765b6dbb2ae00852c7a9e0f961947" alt="" width="472" height="337" /><img src="bbd4556edb495fc42e247a9e0f96199e.iix" width="403" height="286" /></p>
<p>The <em><strong>glide.xlsx.export.limit</strong></em> property controls the export limit for exporting to &#34;Excel (.xlsx)&#34;. If you decide to take this approach, ensure that the <em><strong>glide.xlsx.export.limit</strong></em>value matches the <em><strong>glide.export.excel.limit</strong></em> value (assuming it&#39;s been changed from the default).</p>
<p><strong>Example:</strong> Say Report A is exporting 30,000 rows and <em><strong>glide.export.excel.limit</strong></em> is set to 50,000. If you change the report to export to &#34;Excel (.xlsx)&#34;, you need to set <em><strong>glide.xlsx.export.limit</strong></em> to 50,000. Otherwise, Report A will be truncated at the default limit of 10,000 rows.</p>
<p><strong>Note:</strong> .<span style="font-family: courier new,courier;">xlsx</span> and CSV are preferred over .<span style="font-family: courier new,courier;">xls</span> as a method of exporting.  Both file types can be opened in Excel, but .<span style="font-family: courier new,courier;">xlsx</span> consumes less memory during the export.</p>
</li><li>
<p>Stagger the run of the reports such that those exporting large numbers of records are not overlapping</p>
</li></ul>
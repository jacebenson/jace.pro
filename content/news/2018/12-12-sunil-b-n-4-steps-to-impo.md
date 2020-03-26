---
title: " Steps to Import Fiscal Periods using the Fiscal Calendar Plugin"
date: 2018-12-11T13:13:08.000Z
authors: ["Sunil B N"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=514f8931db9aa340107d5583ca961981"
---
<p><span style="font-family: verdana, geneva;"><a href="https://docs.servicenow.com/bundle/london-platform-administration/page/product/it-finance/concept/c_FiscalCalendar.html" target="_blank" rel="noopener noreferrer nofollow">Fiscal Calendar Plugin</a> (<em>com.snc.fiscal_calendar</em>) gives infrastructure to generate fiscal periods depending upon financial calendar type like Regular, 13 Period or 445.<br /></span></p>
<p style="text-align: center;"><span style="font-family: verdana, geneva;"><em><strong>Special Note: </strong>Fiscal periods are generated in User&#39;s logged in timezone. Ensure the timezone in your destination instance.</em></span></p>
<p><br /><span style="font-family: verdana, geneva;">Follow the steps below, if you want to generate fiscal periods in your <em>sandbox</em> instance and you would like to move them to destination instance.</span></p>
<p> </p>
<p><span style="font-family: verdana, geneva;"><strong><img style="max-width: 100%; max-height: 480px;" src="f94293a1dbeea3006c1c02d5ca9619a8.iix" /><br /></strong></span></p>
<p><span style="font-family: verdana, geneva;">Technical knowledge of ServiceNow Platform administration and <a href="https://docs.servicenow.com/bundle/london-it-business-management/page/product/project-portfolio-suite/concept/c_ProjectPortfolioSuite.html" target="_blank" rel="noopener noreferrer nofollow">Understanding of Project Portfolio management</a> OR <a href="https://docs.servicenow.com/bundle/london-it-business-management/page/product/it-finance/concept/c_ITFinance.html" target="_blank" rel="noopener noreferrer nofollow">Financial Management.</a></span></p>
<p> </p>
<h1><span style="font-family: verdana, geneva;">4 Steps to Import Fiscal Periods</span></h1>
<p><span style="font-family: verdana, geneva;"><strong>Step 1: Create New Update Set. </strong>Generate Fiscal Periods (Fiscal Periods &gt; Generate). And close the update set.</span></p>
<p><span style="font-family: verdana, geneva;"><strong>Step 2: Validate Fiscal periods in your <em>sandbox</em> instance.</strong> Navigate to Fiscal Periods list &gt; Click &#34;Validate Periods&#34; button. Make sure things are working fine here. If you are using modules like Financial Modeling (formerly known as Cost transparency), Financial Charging, Financial Planning, Cost plans in Project Portfolio Management you can test if things are working as expected. Date filter on platform list is working for fiscal specific filters like &#34;This Fiscal year&#34;, &#34;Last Quarter&#34;.</span><br /><br /><span style="font-family: verdana, geneva;"><strong>Step 3: Export</strong> all fiscal periods (through export XML). </span></p>
<p><span style="font-family: verdana, geneva;"><strong>Step 4:</strong> Apply update set created in Step 1 and import XML created in Step 3.</span></p>
<p><span style="font-family: verdana, geneva;"><strong>More Technical Information:</strong></span></p>
<table style="height: 194px;" width="774"><tbody><tr><td style="width: 767.153px; background-color: #cce6ff; border-color: #00004d; text-align: left; vertical-align: middle;">
<p><strong>Tables are associated with fiscal periods.</strong> Fiscal period(<em>fiscal_period</em>) record have references to Schedule(<em>cmn_schedule</em>). When we generate fiscal periods of certain years, it generates set of <em>cmn_schedule</em> records,<br />4 system properties and fiscal period records.<br /><br /><strong>What records are imported?</strong></p>
<ul><li><strong>fiscal_period</strong> - all records</li><li><strong>cmn_schedule</strong> - records associated (Starts with &#34;Fiscal&#34;) // these will be captured in update set also.</li><li><strong>sys_properties</strong> - 4 records as specified below:<br />
<pre class="language-javascript"><code>com.glide.fiscal_calendar.fiscal_year_start_day
com.glide.fiscal_calendar.fiscal_year_start_month
com.glide.fiscal_calendar.fiscal_unit
com.glide.fiscal_calendar.fiscal_calendar_type​</code></pre>
</li></ul>
</td></tr></tbody></table>
<p>Congratulations! You have successfully imported fiscal periods from one instance to an another.</p>
<p><span style="font-family: verdana, geneva;">Cheers,</span><br /><span style="font-family: verdana, geneva;">Sunil B N</span></p>
---
title: "Why validation errors occur on catalog variable DateTime formats"
date: 2017-08-22T03:51:54.000Z
authors: ["rohantyagi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=707c22e1dbd0dbc01dcaf3231f961999"
---
<p>If you are getting validation errors on the Service Catalog variables, specifically for the type &#34;date&#34; or &#34;date/time&#34; variables or your users are complaining about not being able to submit requests due to invalid text errors; then you are in the right place! If you are getting a &#34;The following fields contain invalid text: Enter Date&#34; message, I have some details for you.</p>
<p> </p>
<p style="text-align: center;"><em>NOTE: Post Helsinki, if upgrading to Istanbul and up, validation scripts are available and should resolve manual troubleshooting of validation errors on catalog date/time.</em></p>
<p> </p>
<p><img class="image-1 jive-image" style="height: 139px; width: 762.655px; display: block; margin-left: auto; margin-right: auto;" src="fedb3046db1c9304b322f4621f961948.iix" width="763" height="139" /></p>
<p> </p>
<p>This issue is more common in the instances which recently upgraded to Helsinki. We enforced validation scripts on Service Catalog variables starting in the Helsinki release. Before Helsinki, the validation worked only on form fields but not on catalog variables. No validation on variables caused its own data corruption issues and a lot of us had to either run data cleansing of some form or wasted time in going back and forth with the requester; thereby increasing the resolution/procurement times and negatively impacting the user experience. This tends to happen in global deployments.</p>
<p> </p>
<p>The &#34;date/date-time&#34; variable displays a date picker or calendar to enter date in the correct format; however, if the users wanted to add text or numbers instead, they could do that.</p>
<p><img class="image-2 jive-image" style="height: 310px; width: 308.013px; display: block; margin-left: auto; margin-right: auto;" src="547c9842dbdc17041dcaf3231f961966.iix" width="308" height="310" /></p>
<h1>Example of a user with a system date format error</h1>
<p>Once you upgrade to Helsinki, the date validation script compares the input date format with the date format setting in the user record.   For example, the user below is set as system date format and tries to enter the date as MM-DD-YYYY.</p>
<p><img class="image-3 jive-image" style="height: 275px; width: 757.359px; display: block; margin-left: auto; margin-right: auto;" src="639fb7fddb185fc068c1fb651f9619db.iix" width="757" height="275" /></p>
<p> </p>
<p>The default system date format is yyyy-mm-dd</p>
<p style="text-align: center;"><img class="image-15 jive-image" style="width: 620px; height: 402px;" src="3780a48edb10d704ed6af3231f9619f3.iix" alt="date time format.jpg" /></p>
<p> </p>
<p> </p>
<p>Now in a date variable, if he/she tries to enter the date in dd-mm-yyyy format, will get an error saying &#34;The following fields contain invalid text: Enter Date.&#34;</p>
<p style="text-align: center;"><img class="image-14 jive-image" style="width: 620px; height: 294px;" src="2558850edb50d304b322f4621f961972.iix" alt="fields contain invalid text- Enter Date1.jpg" /></p>
<p>Or if he/she tries to anything other than the date/time, will get an error:</p>
<p style="text-align: center;"><img class="image-13 jive-image" style="width: 620px; height: 322px;" src="ec19258adb505b04ed6af3231f9619ea.iix" alt="fields contain invalid text- Enter Date.jpg" /></p>
<p style="text-align: center;"> </p>
<p> </p>
<p>However, an empty date is still a valid entry unless you make the variable mandatory. So if you submit the order without anything in the date variable, it will get submitted and generate a RITM:</p>
<p><img class="image-7 jive-image" style="height: 342px; width: 679.804px; display: block; margin-left: auto; margin-right: auto;" src="78ad1946db98d304b322f4621f961944.iix" width="680" height="342" /></p>
<p> </p>
<p> </p>
<p>Now if you are unhappy with this or need to change something in how the validation works. Then all the validation scripts can be found under <strong>System Definition &gt; Validation Scripts</strong>.</p>
<p><img class="jive-image image-8" style="height: 409px; width: 698.567px; display: block; margin-left: auto; margin-right: auto;" src="be2b308adbdcdfc03eb27a9e0f961966.iix" width="698" height="409" /></p>
<p> </p>
<p>The specific, Date/Time validation function is here:</p>
<p style="text-align: center;"><img class="image-16 jive-image" style="width: 620px; height: 215px;" src="d300c0c2db58d3041dcaf3231f9619f9.iix" alt="date time validation.jpg" /></p>
<h2>Modifying the Date/Time validation function</h2>
<p>If you decide to make modifications to it, we recommend making a copy and make changes to it. You will need to also deactivate the original one. The default function first checks if there is a value in the variable or not. As I said before, we consider no value (!value) as a valid date:</p>
<p> </p>
<p><img class="jive-image image-10" style="max-width: 1200px; max-height: 900px; height: 117px; width: 821.053px;" src="452cd44adb185344e9737a9e0f961900.iix" width="820" height="116" /></p>
<p> </p>
<p>If there is a value in the date variable, it is compared with the user date time format defined in user record (g_user_date_time_format) using &#34;isDate&#34; method.</p>
<p> </p>
<p><img class="image-11 jive-image" style="max-width: 1200px; max-height: 900px; height: 52px; width: 878.873px;" src="e688b3f1db545704ed6af3231f9619d6.iix" width="879" height="51" /></p>
<p> </p>
<p>The same validation script applies to &#34;Date&#34; type variables as well.</p>
<p>In case you have created a custom validation script for &#34;Date&#34; type variable, then the &#34;Date/Time&#34; validation script will take precedence.</p>
<p style="text-align: center;"><img class="image-17 jive-image" style="width: 620px; height: 519px;" src="8787e5c2db505b04ed6af3231f9619d5.iix" alt="custom validation script.jpg" /></p>
<p> </p>
<p>Please feel free to modify the base system validation script to meet your needs, just remember to make a copy of it and then keep only the desired script active. You can also choose to deactivate the script completely if you do not want any validation be done. Likewise, you can review or modify other validation scripts for variables like Email, URL etc.</p>
<p> </p>
<p>If you make any change to the validation scripts here, they will affect both the catalog variables and the <span style="text-decoration: underline;"><span style="text-decoration-line: underline;">Form fields.</span></span></p>
<p> </p>
<p>In case you decide to either completely write a new client script or make customizations, I would suggest the best practice to use only <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/unsupported_client_scripts.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/unsupported_client_scripts.html" rel="nofollow">supported client script APIs</a> so that it also work on Service Portal.   You may also be interested in reviewing this Knowledge article that talks about a less common issue related <a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0598119" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0598119" rel="nofollow">to date/time variable</a> which was fixed in Helsinki Patch 6.</p>
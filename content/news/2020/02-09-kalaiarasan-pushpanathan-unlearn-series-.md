---
title: "Unlearn Series  Easy Schedule Jobs"
date: 2020-02-08T12:24:03.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1026ec16dbfe409cd58ea345ca961935"
---
<div>
<div><span style="font-size: 12pt; font-family: verdana, geneva;">ServiceNow platform is moving towards no-code or low-code direction but, there is still no out of the box way a system admin can schedule a job for processing some records without scripts. </span>
<div>
<div><span style="font-size: 12pt; font-family: verdana, geneva;">So I started working on a <a href="https://developer.servicenow.com/app.do#!/share/contents/4214057_easy_scheduled_job?t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">app</a> which aimed at bridging the gap and allow a system admin to copy, update or delete records, all by configuring options from UI.</span></div>
<div> </div>
<div><span style="font-size: 12pt; font-family: verdana, geneva;">While I was nearing the completion of the <a href="https://developer.servicenow.com/app.do#!/share/contents/4214057_easy_scheduled_job?t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">app</a>, I started having second thoughts if a app already existed, which could do what I was hoping for. Lo and behold, Chuck has already created &#34;scriptless scheduled job&#34; for this years ago and I just forgot about it completely. After some deliberation and getting peer reviews, I have decided to upload the app and share it with the world. There are implementation differences between both the apps and I feel both can co-exist and be adopted by people depending on their use case.</span></div>
<div> </div>
<div><strong><span style="font-size: 12pt; font-family: verdana, geneva;">So what does the app do? </span></strong><span style="font-size: 12pt; font-family: verdana, geneva;">The <a href="https://developer.servicenow.com/app.do#!/share/contents/4214057_easy_scheduled_job?t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">app</a> allows a system admin to create schedule jobs and configure them from UI. The jobs can be used to create copy of existing records, update or delete records as needed. There are also options that you can configure to cancel records workflow, enable or disable running business rules while the job runs, run the job in stealth mode, etc.</span></div>
<div> </div>
<div><span style="font-size: 12pt; font-family: verdana, geneva;">The updateset for the application can be found <a href="https://developer.servicenow.com/app.do#!/share/contents/4214057_easy_scheduled_job?t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">here</a> on Share site. Installing the updateset will create a new application along with modules for easy accessibility. </span></div>
<div> </div>
<div><span style="font-size: 12pt; font-family: verdana, geneva;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/635968d2db32809cd58ea345ca96198a.iix" /></span></div>
<div> </div>
<div>
<div>
<div><span style="font-size: 12pt; font-family: verdana, geneva;">Once you have installed the application, you can access this from the left navigation as &#39;Easy Scheduled Job&#39;. Use &#39;Create New&#39; menu to create new job and &#39;All Jobs&#39; to view all the jobs created. Use &#39;Logs&#39; menu to view logs related to this application. Guided tour is added instead of static documentation for the application.</span></div>
<div> </div>
</div>
</div>
</div>
</div>
</div>
<p class="ng-scope"><span style="font-size: 12pt; font-family: verdana, geneva;"><strong>Note: </strong>The application is built in Orlando. So you might see preview errors while installing this in a older release instance. Just accept all remote updates and commit the updateset.</span> <span style="font-size: 12pt; font-family: verdana, geneva;"><strong>As a Developer MVP and long time community member</strong>, I am hoping that this becomes a community driven share item and people enhance the application by adding newer actions to the app. Feel free to fork the project <a href="https://github.com/iamkalai/SNEasyScheduledJob" target="_blank" rel="noopener noreferrer nofollow">here</a> in case you are interested in enhancing the app.</span></p>
<p class="ng-scope"> </p>
<p class="ng-scope"><span style="font-size: 12pt; font-family: verdana, geneva;"><strong>For people still learning the platform</strong> - This demonstrates how powerful and easy it is to extend base features of the platform. If you are looking to sharpen your ServiceNow skills, the only way is to build and break stuff. If you go through the source code you will be able to learn,</span></p>
<ul class="ng-scope"><li><span style="font-size: 12pt; font-family: verdana, geneva;">Extending and creating table.</span></li><li><span style="font-size: 12pt; font-family: verdana, geneva;">Script include.</span></li><li><span style="font-size: 12pt; font-family: verdana, geneva;">Creating guided tour and more.</span></li></ul>
<p><span style="font-size: 12pt; font-family: verdana, geneva;"> </span></p>
<p class="ng-scope"><span style="font-size: 12pt; font-family: verdana, geneva;">Hope this helps someone!</span></p>
<p class="ng-scope"><span style="font-size: 12pt; font-family: verdana, geneva;"> </span></p>
<p class="ng-scope"><span style="font-size: 12pt; font-family: verdana, geneva;"><em>If you liked the content, please share, click helpful, bookmark or leave your valuable comments.</em></span></p>
---
title: "Unlearn Series  Reverting Workflow Version"
date: 2017-09-04T15:09:48.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fcaca225dbd0dbc01dcaf3231f961976"
---
<p><span style="font-size: 12pt; font-family: verdana, geneva;"><strong>Ever wanted to revert a workflow to a previous version?</strong></span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">ServiceNow is a highly flexible application, allowing you to build incremental versions of a workflow. But there are times when you want the facility to revert to a previous version of a workflow. There was a similar question sometime back (below) and I had suggested writing a simple script to do this.</span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"><a class="jive_macro jive_macro_message" title="Re: Can we revert workflow to a previous version?" href="/community?id&#61;community_question&amp;sys_id&#61;808d032ddb9cdbc01dcaf3231f961933" rel="nofollow">Re: Can we revert workflow to a previous version?</a> </span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">Writing a script is fine but I have seen that people have used this a few times and it would be good to have a solution on the platform instead of writing an ad-hoc script. </span><span style="font-family: verdana, geneva; font-size: 12pt;">Since there is no such support out of the box, I have created a simple solution that will provide you an option to revert to different versions of the same workflow.</span></p>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">You can find the <span style="font-family: verdana, geneva; font-size: 16px;">related</span> updateset <a title="ithub.com/iamkalai/PublishWorkflow" href="https://github.com/iamkalai/PublishWorkflow" rel="nofollow">here</a>.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: verdana, geneva;"><strong>Usage:</strong></span></p>
<p> </p>
<ul><li><span style="font-family: verdana, geneva; font-size: 12pt;">Installing the updateset </span><span style="font-family: verdana, geneva; font-size: 12pt;">will add a new UI action called &#39;Publish Workflow&#39; on workflow version table.</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">This UI action will be visible only if the current workflow has more than one version and if the current version is not the published workflow version.</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Open an existing workflow version entry (wf_workflow_version) that you want to revert and click the &#39;Publish Workflow&#39; button.</span></li></ul>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;">If you are a beginner on the platform, this solution will help you to learn the following.</span></p>
<p> </p>
<ul><li><span style="font-family: verdana, geneva; font-size: 12pt;">How to create a server side UI action</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Advanced UI action visibility control using scripts. This is also useful if you ever encounter issues due to the field size of condition field.</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Gliderecord&#39;s update and get methods.</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Glideaggregate and its usage.</span></li></ul>
<p> </p>
<p><span style="font-family: verdana, geneva; font-size: 12pt;"><strong>Edit:</strong> You do not need to use the utility. There is a easier out of the box way to do this. Thanks to <sn-mention class="sn-mention" table="live_profile" sysid="39909a2ddb581fc09c9ffb651f961900">&#64;Chris Sanford</sn-mention> for pointing this out.</span></p>
<p> </p>
<ol class="ng-scope"><li><span style="font-family: verdana, geneva; font-size: 12pt;">Go to the workflow record in the wf_workflow table</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Right click in the form header, go to &#39;Show File Properties&#39;</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Add the &#39;versions&#39; related list to the form if it&#39;s not already there</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Right click the version you want to revert to, click &#39;Revert to this Version&#39;</span></li><li><span style="font-family: verdana, geneva; font-size: 12pt;">Click &#39;Ok&#39; on the dialog, and the workflow is reverted</span></li></ol>
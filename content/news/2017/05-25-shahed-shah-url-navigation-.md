---
title: "URL Navigation Tips"
date: 2017-05-24T17:32:35.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=274ea6addbd0dbc01dcaf3231f96196c"
---
<p>This is to round up my URL-related blog series. If you haven&#39;t seen them the links are <a class="jive_macro jive_macro_blogpost" title="Getting your ServiceNow URLs right" href="/community?id=community_blog&sys_id=710daaa5dbd0dbc01dcaf3231f9619e8" rel="nofollow">Getting your ServiceNow URLs right</a> and <a class="jive_macro jive_macro_blogpost" title="What&#39;s in a name.do?" href="/community?id=community_blog&sys_id=9d1deea5dbd0dbc01dcaf3231f96193b" rel="nofollow">What&#39;s in a name.do?</a>. You would have already seen useful snippets in the Docs, like <a title="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/use/navigation/concept/c_NavigatingByURL.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/use/navigation/concept/c_NavigatingByURL.html" rel="nofollow">URL schema</a>, <a title="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/use/navigation/reference/r_NavigatingByURLExamples.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/use/navigation/reference/r_NavigatingByURLExamples.html" rel="nofollow">Examples of navigating by URL</a> and <a title="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/build/service-portal/concept/link-to-sp-content.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/build/service-portal/concept/link-to-sp-content.html" rel="nofollow">Navigate by page URL</a> (and more). I feel that once you get a good grasp of this, you will find useful tips and tricks to speed up your workflow. Case in point, while working in Customer Support, I try my best to be a URL ninja (don&#39;t know if I&#39;m there yet) because Instances can be translated into other languages or modules are renamed. Plus, there are gotchas in the platform that can cause updates, which we totally want to avoid. Oh yeah, they exist.</p>
<p> </p>
<h2>Inadvertent changes</h2>
<p>Let&#39;s start off with looking at inadvertent changes before I go ahead and give these other URL tricks. Now I say changes can inadvertently happen, precisely for that point where there&#39;s something within the platform, either by design or via a property which just plainly causes this to happen. Here&#39;s a quick list:</p>
<ul><li>Clicking on the Reference Icon will submit the record</li><li>Changing the Form View</li><li>When iterating through a list of records</li><li>Enter Submits user preference</li></ul>
<h3> </h3>
<h3>Clicking the reference icon</h3>
<p>The sin of sins. Populate a reference field like Assigned to and then click on the Reference Icon. What happens? The form is submitted and then you are navigated to the referenced record.</p>
<p><img class="image-1 jive-image" style="width: 480px; height: 48.7742px; display: block; margin-left: auto; margin-right: auto;" src="eda5f84edb9cd704ed6af3231f961964.iix" alt="Reference Icon.png" width="480" height="49" /></p>
<p>Complaints from this were non-stop. [Queue heavenly music] Now in Istanbul this behaviour was addressed! It&#39;s not exactly how some may have envisioned changing the behaviour, but now users are presented with an &#34;Are you sure?&#34; message</p>
<p><img class="image-2 jive-image" style="width: 403px; height: 196.95px; display: block; margin-left: auto; margin-right: auto;" src="7b64908edb905344e9737a9e0f9619ae.iix" alt="Save changes dialog.png" width="403" height="197" /></p>
<p style="text-align: center;"><span style="font-size: 10pt;">(Where have you been all my ServiceNow life?)</span></p>
<p> </p>
<p>While we applaud this progress, those using releases before Istanbul need to be careful. So, how do we &#34;workaround&#34; this? Many have come up with their own solutions/workarounds:</p>
<ul><li>Setting <strong>glide.ui.clickthrough.popup</strong> to true<br />This will present the referenced record in a popup but does not show any Related Lists</li><li>I have seen some used Client Script to hide the Reference Icon and created a UI Macro (used as field decoration) to open the record into a new tab</li></ul>
<p> </p>
<p>What I do is not really a workaround to implement, but I like to keep snippets of handy URL formats. In this case of opening a referenced record, I just like to keep in mind a format of: <span style="color: #3334ca;">/<em>table_name</em>.do?sysparm_query&#61;<em>displayfield</em>&#61;<em>displayvalue</em></span>. To demonstrate usage, let&#39;s say I&#39;m clicking on the Reference Icon for the Caller field. Knowing that the field references the sys_user table (you can easily check this by right-clicking on the field and selecting the Show option), I would translate the snippet to <span style="color: #3334ca;">/sys_user.do?sysparm_query&#61;name&#61;<em>displayvalue</em></span>.</p>
<p><strong>Kingston Update</strong></p>
<p>This one may have sneaked past you. Starting in Kingston the popup on hover has changed to a popup on click. Head on over to <a title="Kingston - Reference field icon" href="https://servicematters.servicenow.com/2018/03/07/emea-partnernow-summit-hackathon-2018/" target="_blank" rel="nofollow">Reference field icon</a> for more info.</p>
<p> </p>
<h3>Changing the Form View</h3>
<p>That&#39;s right, whenever you switch the view of the current form, a submit is taking place. The other side to changing the view is that a User Preference is created/updated and, whenever you navigate back to the form, the platform will display it based on that User Preference. OK, that last part is kinda accurate, as long as <strong>glide.ui.remember_view</strong> property is set to <strong>true</strong> (it is <strong>true</strong> by default).</p>
<p> </p>
<p>So, working around this is to not use that and stick with the <strong>sysparm_view</strong> URL parameter. When using UI16, the address bar of the browser is updated with an encoded URL to the record that you are looking at. You can look for or add this parameter and select the view you need.</p>
<p style="text-align: center;"><img class="image-3 jive-image" style="height: 34px; width: 780.741px; display: block; margin-left: auto; margin-right: auto;" src="3c84ffb9dbdc1fc068c1fb651f961962.iix" alt="backlink address.png" width="781" height="34" /><span style="font-size: 10pt;">(Yeah... I&#39;m not gonna go through all that)</span></p>
<p> </p>
<p>Like many of you, I use tabs extensively when working on, or troubleshooting, the platform. You can do this in many ways:</p>
<ul><li>Typing <strong><em>tablename</em>.LIST</strong> into the Application Navigator<br />LIST (in capitals) will open a list into a new tab/window.</li><li>While viewing a list within the frameset, hold down the <strong>âŒ˜</strong> key and clicking on the link (on a Mac) will open the record in a new tab. I use a Mac, but I&#39;m pretty sure there&#39;s something similar for Windows machines.</li><li>Open the Frame into a new tab<br />Firefox has this built in, where you click on an empty area of the page and select <strong>This Frame &gt; Open Frame in New Tab</strong>.<br /><img class="image-4 jive-image" style="width: 365px; height: 289.056px;" src="561bd58edbd813043eb27a9e0f96190b.iix" alt="Open in new tab.png" width="365" height="289" /><br />Google Chrome doesn&#39;t have this but you can add an extension such as <a title="https://chrome.google.com/webstore/detail/open-frame/kdhjgkkaacdhdioocfbpmhjidbinfajj" href="https://chrome.google.com/webstore/detail/open-frame/kdhjgkkaacdhdioocfbpmhjidbinfajj" rel="nofollow">Open Frame - Chrome Web Store</a></li></ul>
<p> </p>
<p>Once you have the form in a new tab, just go ahead and update or add the <strong>sysparm_view</strong> parameter with the name of the desired view. Leaving it empty (i.e. &amp;sysparm_view&#61;) will treat it as if you want to get the Default view. Setting it to <strong>&amp;sysparm_view&#61;ess</strong> will load up the form into the Self Service view if one exists for it. Have a look at the <strong>Views [sys_ui_view]</strong> table to get the list of View names (not labels) that you can use for a table you&#39;re working on.</p>
<p> </p>
<h3>Iterating through a list of records</h3>
<p>This is in reference to those up/down navigation icons on the top-right part of the form.</p>
<p><img class="image-5 jive-image" style="width: 159px; height: 64.5px; display: block; margin-left: auto; margin-right: auto;" src="50e13482dbd8dfc068c1fb651f9619b7.iix" alt="Up Down Btn.png" width="159" height="65" />Now, it&#39;s a conscious decision (I hope) made by the Developer(s)/Administrator(s) of your Instance to enable this behaviour, by setting the <strong>glide.ui.update_on_iterate</strong> property to <strong>true</strong>. Out-of-box the default value is <strong>false</strong>. Personally, I stay away from these and âŒ˜&#43;Click from a filtered list to open the records into a new tab.</p>
<p> </p>
<h3>Enter Submits user preference</h3>
<p>This is a weird one where the <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/form-administration/task/t_ChangeTheEnterSubmitsFormPref.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/form-administration/task/t_ChangeTheEnterSubmitsFormPref.html" rel="nofollow">enter_submits_form</a> is a system preference, where the record is submitted when you hit Enter on the keyboard.</p>
<p> </p>
<h2>URL tricks</h2>
<p>Now for the main bit, phew. From the previous section, you will observe that I&#39;m a proponent of tabs. Don&#39;t get me wrong, I&#39;m not obsessed with tabs. I still like control and not have too many tabs open at one time.</p>
<p> </p>
<p>As demonstrated earlier, getting those new tabs are pretty straightforward:</p>
<ul><li>âŒ˜&#43;Clicking from a list view will open a record into a new tab</li><li>typing tablename.LIST into the navigator opens a list into a new tab</li><li>typing tablename.FORM into the navigator opens an empty record into a new tab</li><li>typing tabename.CONFIG into the navigator opens up a new tab which is a combined view of Business Rules, Client Scripts, etc for that table</li></ul>
<p> </p>
<p>Then can manipulate the URL when a record is in a new tab to minimise on the issues I pointed out above. We have seen you can add/modify the <strong>sysparm_view</strong> parameter. Another key parameter is to use <strong>sysparm_filter_only</strong> when navigating to large tables and minimise on Performance issues. For example, I could navigate to <span style="color: #3334ca;">/sys_audit_list.do?sysparm_filter_only&#61;true</span> which would take me to a page for the list, without bringing back any record, giving me the opportunity to provide a precise query.</p>
<p>Please be aware that the <strong>sysparm_filter_only</strong> parameter does not work in List v3 . This is documented in <a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0620980" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0620980" rel="nofollow">KB0620980</a>.</p>
<p>You can see a theme developing here, right? The table name. It becomes a habit to remember as many table names as possible, rather than remembering a module and which application it sits in. The two driving factors for doing this are: instances can be translated so the module names can be different when impersonating a user; you want to get jazzy with the <strong>sysparm_view</strong>, <strong>sysparm_fiter_only</strong> or other parameters.</p>
<p> </p>
<h3>Large tables</h3>
<p>To get you started, let&#39;s look at some of the tables where there&#39;s a huge amount of records that navigating to them directly is not a good idea and would benefit from using the sysparm_filter_only parameter:</p>
<ul><li>Audit [sys_audit]</li><li>Logs [syslog]</li><li>Transaction Logs [syslog_transaction]</li><li>History Set [sys_history_set]</li><li>Events [sysevent]</li><li>ECC Queue [ecc_queue]</li><li>Emails [sys_email]</li><li>Customer Updates [sys_update_xml]</li><li>Upgrade History [sys_upgrade_history]</li></ul>
<p> </p>
<p>Visiting these tables are common for troubleshooting, so be sure to add these to whatever you use for storing snippets.</p>
<p> </p>
<h3>Common tables</h3>
<p>Hopefully, by now you have an idea of the various tables you tend to visit for any development work or troubleshooting. Let&#39;s have a look at some:</p>
<ul><li>Dictionary [sys_dictionary]</li><li>Business Rules [sys_script]</li><li>Script Includes [sys_script_include]</li><li>Client Scripts [sys_script_client]</li><li>UI Actions [sys_ui_action]</li><li>UI Policies [sys_ui_policy]</li><li>Scheduled Jobs [sys_trigger]</li><li>UI Scripts [sys_ui_script]</li><li>Plugin Activations [sys_plugins]</li></ul>
<p> </p>
<p>How many do you remember or recognise? Go ahead and look for the table names of UI Pages, UI Macros and Deleted Records in the Platform. There&#39;s plenty more to keep an eye for, but the list is just to get you started.</p>
<p> </p>
<h3>More shortcuts</h3>
<p>Let&#39;s bring this to an end and look at some other tricks and shortcuts to add to your arsenal of snippets</p>
<ul><li>Switching from UI16 to UI15 (?sysparm_userpref_use.concourse&#61;false)</li><li>XML Stats (xmlstats.do)<br /><em>Plenty of information regarding the Instance, DB and Nodes.</em></li><li>Scripts - Background (sys.scripts.do)<br /><em>Not to be confused with sys_script.do which is for Business Rules</em></li><li>Side Door (side_door.do)<em><br />If the Instance is configured to authenticate with SSO.<br />It would be a good idea to create a search engine or bookmark with keyword in your browser of choice to use this</em></li></ul>
<p> </p>
<p><em>---</em></p>
<p> </p>
<p>And that&#39;s it. I really hope you find these blog posts helpful with understanding and navigating around the ServiceNow platform.</p>
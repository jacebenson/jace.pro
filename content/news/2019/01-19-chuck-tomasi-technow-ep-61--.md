---
title: "TechNow Ep   Explore the Madrid Platform Features"
date: 2019-01-18T21:23:41.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e5fb2ac6db8baf409a64e15b8a961973"
---
<p><img class="community_image_fullscreen" style="float: left; margin-right: 8px;" src="https://community.servicenow.com/3e1d4b52dbdc3fc45129a851ca96192a.iix" width="143" height="111" />The focus of ServiceNow&#39;s Madrid release is delivering an intuitive and intelligent experience for everyday work. Users get a better experience with Mobile Studio and enhancements to Service Portal. Agents get a modern, intuitive experience with Agent Workspace. Developers and administrators improve their experience with enhancements made to Flow Designer, IntegrationHub, and REST APIs. Join Chuck Tomasi, Kreg Steppe, and Stacey Bailey as they take a look at each one of the platform changes in Madrid and show you why you&#39;ll be eager to upgrade.</p>
<p><strong>Quick tip: Name/Value Pair fields</strong></p>
<p><strong>Originally aired: February 26, 2019 8:00 AM PT</strong></p>
<center><iframe src="https://www.youtube.com/embed/CCZJVnT7zow" width="640" height="360"></iframe></center>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-family: inherit; font-style: inherit;"><strong>Featured Experts</strong></span></p>
<p style="font-family: arial, sans-serif; color: #666666;"><a style="font-family: arial, sans-serif; color: #3778c7;" href="community?id&#61;community_user_profile&amp;user&#61;884f86a5db181fc09c9ffb651f961953" rel="nofollow"> <span style="font-weight: inherit; font-family: inherit; font-style: inherit;"> <strong><img style="margin: 2px 8px 10px 15px; border: 0px none; font-weight: inherit; font-style: inherit; font-family: inherit;" src="7906854adb10d304b322f4621f96196e.iix" width="96" height="72" align="left" />Kreg Steppe</strong></span></a> <span style="color: #666666; font-family: arial, sans-serif;"> is a Training and Certification Program Manager within ServiceNow developing and supporting cloud training infrastructure. He specializes in developing integration solutions, automating repeatable processes and Cloud Management in ITOM. Kreg&#39;s prior experience includes operating his own ISP, developing web applications in PHP, network integration, managing network support, Application Development on cloud based networks, DNS and email server maintenance. He is a Linux enthusiast and enjoys Photography.</span></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" href="community?id&#61;community_user_profile&amp;user&#61;7ae05a61db981fc09c9ffb651f9619a2" rel="nofollow"><span style="font-weight: inherit; font-family: inherit; font-style: inherit;"><strong><img style="margin: 2px 8px 10px 15px; border: 0px none; font-weight: inherit; font-style: inherit; font-family: inherit;" src="076b55a7db8c2344fece0b55ca9619ec.iix" width="100" height="118" align="left" />Chuck Tomasi</strong></span></a> is a Sr. TPMM for ServiceNow. He is a computer science major with over 35 years of IT experience. As a former ServiceNow customer, Chuck won the first Innovation of the Year Award at Knowledge 10. Since joining ServiceNow in 2010 as a Technical Consultant, he has done many large scale ITSM implementations and custom applications, acted as an adjunct instructor for Education Services, created and lead the Technical Best Practices program, makes appearances on Live Coding Happy Hour, created dozens of fit for purpose custom applications, and co-hosts the ServiceNow series &#34;TechNow&#34;.</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-family: inherit; font-style: inherit;"><strong><img style="margin: 2px 8px 10px 15px; border: 0px none; font-weight: inherit; font-style: inherit; font-family: inherit;" src="e3e1fa72dbdf9740200f0b55ca961972.iix" width="96" height="122" align="left" />Stacey Bailey</strong></span> is a Training and Certification Program Manager for ServiceNow with over 20 years of IT experience in various roles. Since 2009 she has been working with the ServiceNow platform customer, partner, and employee. She has earned numerous awards in her career including: ITSM MVP 2017, InfoWorld Top 100 Award, DCI Portal Excellence Award, Financial Times Award for Excellence in E-Learning. Stacey proudly refers to herself a s a &#34;gadget girl&#34;. In her spare time she likes trying new gadgets, learning new forms of art, playing in the makerspace, collecting new / unique skills, listening to audio-books, trying new life experiences, and hosting parties to build communities.</p>
<p style="font-family: arial, sans-serif; color: #666666;">  </p>
<hr />
<p><a href="http://bit.ly/servicenow-technow" rel="nofollow"><button style="background-color: #4690f4; border: none; border-radius: 4px; color: white; padding: 10px 15px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;">LIST ALL EPISODES</button></a></p>
<p><br /> <strong>Questions and Answers</strong></p>
<div id="11a1f0b7dbbfa30069c5fd131d961900"> </div>
<p><strong>Any recommendation on how to retrofit all our existing workflows/scripts to take advantage of decision tables?</strong> -- Angela Emerson<br /> Decision tables are currently only available to Flow Designer flows. While there&#39;s no API available to them yet, I suspect we may have one in a future release to do what you want. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961903"> </div>
<p><strong>how we can convert complex workflow into flow Designer, we want to keep up the evolving tech but looks like we are struck here..what do you suggest..we should not develop very complex workflows?</strong> -- Prabhat Kumar<br /> My recommendation at this point is continue to maintain your old workflows you have built with the classic graphical workflow engine and build new content in Flow Designer. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961906"> </div>
<p><strong>When will Madrid be released for FredRAMP customers?</strong> -- Paul Porter<br /> It typically takes ~3 months after general availability to make new releases available to FedRAMP due to the authorization process required by the Government. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961909"> </div>
<p><strong>when you call a workflow from a flow, are the answers/outputs available in the flow? Can you pass additional information in a scratchpad or json object?</strong> -- John Dahl<br /> The FlowAPI allows you to pass inputs and outputs to your workflow. I will be experimenting with them shortly to have more hands-on experience to pass along. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d96191e"> </div>
<p><strong>any cahnges with subflows in ALert Management</strong> -- Louis Oliver<br /> I have not heard of any, but I don&#39;t follow the Alert Management application closely. Sounds like a good question to post on the community. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961921"> </div>
<p><strong>Are they email communications logged and attached to relevant tickets?</strong> -- Erin Davies<br /> Yes. Incoming and outgoing mail notifications are logged in the sys_email table and displayed in the activity history of the record they are associated with. The display of the messages can be configured per table. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961924"> </div>
<p><strong>I am sorry, I didn&#39;t catch the blacklist/whitelist. Was there mention of being able to identify whitelist domains instead of blacklisting only?</strong> -- Mike Morales<br /> You can identify domains as either whitelist or blacklisted. E.g. Only allow email from example.com, or don&#39;t allow email from spam.com. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961927"> </div>
<p><strong>The test data is gets wiped off after the test execution completes in London. Has that changed in Madrid?</strong> -- Chaitanya Chelamkuri<br /> I believe Madrid has the same test data cleanup functionality as London. When I need to see the record, I slip in a UI test step to open the record. -- Stacey Bailey<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d96192d"> </div>
<p><strong>how offton is the antivirus def updated?</strong> -- Howard Richter<br /> &gt;&gt;&gt;Checking with Notification team -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961930"> </div>
<p><strong>Apologies, when is Madrid GA?</strong> -- Caryn Ishida<br /> 2019-03-06 00:00:00 -- Stacey Bailey<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961933"> </div>
<p><strong>Does Automated Test Framework require a subscription/license?</strong> -- Gary Zelasko<br /> Automated Test Framework is part of the platform. It does not require an additional subscription. -- Stacey Bailey<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961936"> </div>
<p><strong>Currently you can&#39;t find GRC applications in the Plugins, and it&#39;s also not available in the store. Do you know the process for activating GRC within Madrid? (Trying to test for a client)</strong> -- Kevin Young<br /> Many of the suites and applications require support to activate them after you purchase them. Work with your account team on pricing and activation please. -- Chuck Tomasi<br /><br /></p>
<div id="11a1f0b7dbbfa30069c5fd131d961939"> </div>
<p><strong>Where can we find the single, large pdf of the Madrid documentation?</strong> -- Matt Brusco<br /> All documentation is not available as a single PDF. It would be too big to manage and you would be subject to obsolescence very quick as many of the hundreds of sub-pages are updated on a regular basis. However, you can the release notes by going to the Madrid badge on docs.servicenow.com and clicking release notes, then use the dotted menu on the right to create a PDF of all sub-pages there. -- Chuck Tomasi<br /><br /></p>
<div id="15a1b0b7dbbfa30069c5fd131d9619ff"> </div>
<p><strong>With the Allocation and Intake routing feature, is that able to be used by some groups but not all? How is that configured (e.g. by configuration item)</strong> -- kristy cole<br /> Advanced Work Assignment is very configurable. I recommend starting here for more information on getting started. https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/administer/advanced-work-assignment/task/implement-awa.html -- Chuck Tomasi<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d961902"> </div>
<p><strong>Does ServiceNow promote the Flow Designer, over the workflow as the long term? Need to know what those Flow Designer and Workflow are for which case.. Is it dump question (I am only 1 year old on SNOW world)..</strong> -- Munhwan Gim<br /> Graphical workflow is not going away, but it is also not receiving additional development. Recommendation is to maintain workflows that you&#39;ve built using the graphics workflow engine and if you need to build something new or have an opportunity to replace a legacy workflow, do it in Flow Designer. -- Chuck Tomasi<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d961908"> </div>
<p><strong>who is mobile studio available for?</strong> -- Charles White<br /> Developers and non-developers. Anyone who wants to quickly build a mobile experience for their application. -- Chuck Tomasi<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d96191d"> </div>
<p><strong>Code Snippet &amp; Payload Builder &amp; Attachment actions (finally) are awesome stuff! :-)</strong> -- Sagar Koti<br /> AGREED! -- Stacey Bailey<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d961920"> </div>
<p><strong>Do we have spoke for Solarwinds</strong> -- Niky Shirdhankar<br /> I haven&#39;t seen one yet for SolarWinds. As mentioned earlier, keep an eye on the store for new spokes to be released outside of the regular ServiceNow release cycle. -- Stacey Bailey<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d961926"> </div>
<p><strong>On ATF, is the work to help clean up notification that are created for a test case run?</strong> -- Michael Rakowski<br /> I&#39;m afraid I don&#39;t understand the question. Can you clarify in the comments below? -- Chuck Tomasi<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d961929"> </div>
<p><strong>Again is this new ATF only available to clients using scoped applications or clients using legacy non-scoped applications but upgraded to Madrid can also use?</strong> -- Narayana Pillai<br /> Given that the ATF test plans execute server-side query or mimic user interactions, I don&#39;t see any reason why upgraded clients using non-scoped applications would matter. It should work for both. -- Stacey Bailey<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d96192c"> </div>
<p><strong>Will the AV functionality scan password-protected files?</strong> -- Jamie Reed<br /> Likely not, but I will try to verify. -- Chuck Tomasi<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d96192f"> </div>
<p><strong>Will the AV Scan only work on newly updated files or all historical files during a migration?</strong> -- Wayne Light<br /> It does not scan the files that are already on your system until someone tries to download them. If found infected, it will be quarantined and the downloader will get a message that the file is unavailable. -- Chuck Tomasi<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d961932"> </div>
<p><strong>Is it about breaking only the existing data source and not essentially related to retrieving data</strong> -- Venkat Iyer<br /> I&#39;m afraid I don&#39;t understand the question. Can you clarify in the comments below? -- Chuck Tomasi<br /><br /></p>
<div id="15a1f0b7dbbfa30069c5fd131d961935"> </div>
<p><strong>ATF Question - Will we be able to call sn_hr_core_case_creation.do in ATF in Madrid? (INT4038420)</strong> -- Krista Williams<br /> Based on what I see in the incident you cited, this is not yet available in Madrid. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961901"> </div>
<p><strong>how much of this is exposed to subflows?</strong> -- Louis Oliver<br /> I&#39;m sorry, I don&#39;t understand your question. Can you clarify in the comments below? -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961904"> </div>
<p><strong>Is the flow designer available for existing users? Is there any separate subscription</strong> -- Venkat Iyer<br /> Flow Designer is available as a standard platform feature. There is no additional charge. However, integrations that use IntegrationHub (built on Flow Designer) incur additional charges. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961907"> </div>
<p><strong>Who is the intended &#39;users&#39; of FlowDesigner?</strong> -- Tony Collins<br /> Flow Designer is intended for use not just by Process Analysts to use user-friendly actions, but also for developers to actually develop user-friendly actions. It is incredibly powerful. -- Stacey Bailey<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d96190a"> </div>
<p><strong>Where can I find more info about ITSM PRO?</strong> -- Cathy Archambeault<br /> Talk to your account team. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d96191c"> </div>
<p><strong>Is the Spoke are coming with the ITSM license or it&#39;s a new subscription?</strong> -- Hugo Cyr<br /> Not sure which spoke you are referring to Hugo. Can you clarify in the comments below? -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d96191f"> </div>
<p><strong>can we send an attachment to downstream application using this action?</strong> -- Kirtiman Banerjee<br /> I&#39;d have to know a little bit more about your requirement to answer this. This sounds like a good question to ask in the community. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961922"> </div>
<p><strong>Email Client configuration - can this be configured by domain?</strong> -- Kyren cooper<br /> Not that I&#39;m aware at the moment. Customer support would have more information on that. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961925"> </div>
<p><strong>Where could we find the list of improvements related to notifications? Currently we are facing some issues with incorrect text wrapping after running update script.</strong> -- Julia Khromova<br /> You should be able to see a comprehensive list in Docs under Madrid Upgrade and Release Notes. -- Stacey Bailey<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961928"> </div>
<p><strong>Agreed. Would love a TechNow for ATF.</strong> -- Susan Williams<br /> We&#39;ll look in to making that happen. Thank you for the &#34;up vote&#34;. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d96192b"> </div>
<p><strong>Do all the KB Catalogs show in the default search or do users have to search in one catalog first?</strong> -- Blair Gentry<br /> If you are using multiple KBs or catalogs, you can decide which ones are part of the search, and they will all appear as results in a search. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d96192e"> </div>
<p><strong>can you turn off the Virus scan?</strong> -- Patricia Nichols<br /> Yes, there is a property to disable this. -- Stacey Bailey<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961931"> </div>
<p><strong>How does pagination work in this case?</strong> -- Venkat Iyer<br /> I&#39;m sorry, I don&#39;t understand your question. Can you clarify in the comments below? -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961934"> </div>
<p><strong>we can setValue in list collector field and what about UI policy--&gt; action on related list?</strong> -- Prabhat Kumar<br /> I&#39;m sorry, I don&#39;t understand your question. Can you clarify in the comments below? -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d961937"> </div>
<p><strong>Any changes to Widgets in service portal??</strong> -- Sriram Pappagudi Mani<br /> Not that I have heard, but you may find more information in the Madrid release notes on the docs site. -- Chuck Tomasi<br /><br /></p>
<div id="19a1f0b7dbbfa30069c5fd131d96193a"> </div>
<p><strong>Will we be able to upgrade to Madrid and keep our portal look the same for a while?</strong> -- Robert Meister<br /> Yes. The rebranding is only on the default portal for new (Out of the box) customers. If you have created your own portal or modified the baseline configuration, then this will not impact you. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961900"> </div>
<p><strong>Chuck - Will the Flow Designer replace Workflows at some point in the future, or will ServiceNow continue to support both Workflows and Flow Designer?</strong> -- Scott Fabel<br /> Flow Designer is the focus forward. Workflows, from my understanding will not be going away. -- Kreg Steppe<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961903"> </div>
<p><strong>What version is considered a legacy workflow</strong> -- James Higgins<br /> The legacy workflow is available in all releases dating back to 2008. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961906"> </div>
<p><strong>Just want to confirm, Flow Designer replaces legacy Workflows? Can Flow Designer be used for Catalog Items?</strong> -- Stephanie Taveras<br /> Yes Flow should be the focus going forward. Workflows are not going away, but focus is on Flows. Also...create a flow from a Catalog Item. http://bit.ly/2EgBdlg -- Kreg Steppe<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961909"> </div>
<p><strong>What is &#34;ITSM Pro&#34;? I have not heard of this before.</strong> -- Tyler Herman<br /> I don&#39;t have specific details other than it includes some of the machine learning capabilities to support Agent Intelligence. I recommend discussing details with your account team. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d96191e"> </div>
<p><strong>I remember seeing OKTA and JIRA spoke in the partner materials, would that be limited release?</strong> -- Karthik Narayanaswamy<br /> I don&#39;t have specific information on those yet. You may want to reach out to your account team. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961921"> </div>
<p><strong>Can you email from within the ticket context?</strong> -- Erin Davies<br /> Yes, there is an email client that you can enable for a table to show the email client icon and create a record based on the information within that record. I recommend starting here: https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/administer/notification/concept/c_EnableTheEmailClient.html -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961924"> </div>
<p><strong>Does ATF support portal test cases yet?</strong> -- Dunstan Christopher<br /> Yes. That was introduced in London (Q3 2018) -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961927"> </div>
<p><strong>Can I use flow designer to trigger an action for a service catalog item, which fills in my variables and submits?</strong> -- Daniel Clayton<br /> You can create records in any table with Flow Designer, much like workflow. I haven&#39;t tested variables specifically. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d96192a"> </div>
<p><strong>For MFA, can you specify groups of users that need MFA? For example, my admins might need it but regular users do not.</strong> -- Ed Davis<br /> Once enabled on the instance, each user has the ability to enable or disable it, much like Facebook, Google, etc. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d96192d"> </div>
<p><strong>The antivirus, is there a place to see what its checking for?</strong> -- Jace Benson<br /> You can start here: https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/security/concept/antivirus-protection.html please reach out ot customer support if you have additional questions. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961930"> </div>
<p><strong>Does Guided Tour Designer work better with Service Portal now (wouldn&#39;t move with pages as you scroll down)?</strong> -- Joe Miskey<br /> I don&#39;t have specific details on that. If you like, you can use a free personal developer instance (available at developer.servicenow.com) to test and post your findings in the comments below. -- Chuck Tomasi<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961933"> </div>
<p><strong>Plugin/app experience is just prefect! :-)</strong> -- Sagar Koti<br /> Agreed. It&#39;s a great enhancement. -- Stacey Bailey<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961936"> </div>
<p><strong>Will all questions, answered and unanswered be shared after the meeting?</strong> -- Jace Benson<br /> Yes, Jace. It will take a few days for us to answer all questions and post them. Look for it next week. -- Stacey Bailey<br /><br /></p>
<div id="1da1f0b7dbbfa30069c5fd131d961939"> </div>
<p><strong>I&#39;ve messed around with the Agent workspace, how can we add buttons/formatters to those forms?</strong> -- Jace Benson<br /> Hi Jace, The new framework around Agent Workspace does not support formatters (UI macros) written in Jelly, much like Service Portal does not. Take a look here for info on UI actions. https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/administer/workspace/task/configure-agent-workspace-ui-actions.html -- Chuck Tomasi<br /><br /></p>
<div id="41a170b7dbbfa30069c5fd131d9619ff"> </div>
<p><strong>1. No User Impact 2. New Feature will need to be enabled 3. New feature – user optional 4. New Feature – User impact</strong> -- Howard Richter<br /> Howard, I cannot guarantee that we&#39;ll follow this format when introducing each new feature. However, if there is any that is unclear, please ask a question mentioning the feature specifically. -- Stacey Bailey<br /><br /></p>
<div id="41a1b0b7dbbfa30069c5fd131d961902"> </div>
<p><strong>I was trying to use name value pairs for update set naming convention... however that is proving difficult, so far</strong> -- Marc Clasby<br /> Sorry to hear that. Perhaps you can let us know what you are trying to do in a community post on the subject and we can dig in deeper. -- Chuck Tomasi<br /><br /></p>
<div id="41a1b0b7dbbfa30069c5fd131d961905"> </div>
<p><strong>Will the Jeopardy game be made available via update set or shared with the community?</strong> -- Travers Mohrbacher<br /> We&#39;ll follow up with Chuck on that one. It IS pretty slick. We&#39;ll be debuting it at K19 on the developer stage. Be sure to stop by for a game. :-) -- Stacey Bailey<br /><br /></p>
<div id="41a1b0b7dbbfa30069c5fd131d9619e6"> </div>
<p><strong>does this require the new ios app</strong> -- Howard Richter<br /> Yes, you can find the &#39;ServiceNow Agent&#39; application in the app store now. :-) -- Stacey Bailey<br /><br /></p>
<div id="45a170b7dbbfa30069c5fd131d9619fe"> </div>
<p><strong>is it possible to have the new features by the following</strong> -- Howard Richter<br /> I&#39;m sorry. I don&#39;t understand your question. Perhaps you can clarify in the comments below? -- Stacey Bailey<br /><br /></p>
<div id="45a1b0b7dbbfa30069c5fd131d961901"> </div>
<p><strong>Hi, can you also create a session on JSON data source import?</strong> -- Venkat Iyer<br /> I will make a note of this -- Kreg Steppe<br /><br /></p>
<div id="45a1b0b7dbbfa30069c5fd131d961904"> </div>
<p><strong>is it officially launched? madrid</strong> -- Prabhat Kumar<br /> Not quite yet. Look for it in the next couple weeks. -- Kreg Steppe<br /><br /></p>
<div id="49a1b0b7dbbfa30069c5fd131d961900"> </div>
<p><strong>what kind of certification opportunities at knowledge?</strong> -- Albert Chan<br /> We will not be offering certification exams at Knowledge 2019. -- Stacey Bailey<br /><br /></p>
<div id="49a1b0b7dbbfa30069c5fd131d961903"> </div>
<p><strong>Is skipping versions an option? can we go from Kingston to Madrid?</strong> -- Blair Francis<br /> Yes, the upgrades are cumulative. Just do thorough testing as you upgrade. -- Stacey Bailey<br /><br /></p>
<div id="49a1b0b7dbbfa30069c5fd131d9619e7"> </div>
<p><strong>Mobile Studio: Does this mean you are building an app that runs outside of the ServiceNow Mobile application or for it to function within the SN Mobile App?</strong> -- Mike Morales<br /> The traditional Mobile interface is considered &#39;classic&#39;. With mobile studio, you&#39;re building functionality to be displayed through the native &#39;ServiceNow Agent&#39; application, available now in the App store. -- Stacey Bailey<br /><br /></p>
<div id="4da170b7dbbfa30069c5fd131d9619fc"> </div>
<p><strong>We cant hear audio, have you started?</strong> -- Brent Kreager<br /> Haven&#39;t started quite yet. -- Kreg Steppe<br /><br /></p>
<div id="4da1b0b7dbbfa30069c5fd131d961902"> </div>
<p><strong>How does reporting work for &#34;Name-Value pair fields&#34;?</strong> -- Ibukun Fasoranti<br /> I haven&#39;t had a chance to work with this much. Can you elaborate on your use case a bit in the comments? -- Chuck Tomasi<br /><br /></p>
<div id="4da1b0b7dbbfa30069c5fd131d961905"> </div>
<p><strong>will you be covering updates made to the on call application today?</strong> -- Jarod Young<br /> Not specifically on this webinar. There are SO many updates in Madrid. -- Stacey Bailey<br /><br /></p>
<div id="4da1b0b7dbbfa30069c5fd131d9619e6"> </div>
<p><strong>if you only have ITSM package do you get Mobile Studio?</strong> -- Charles White<br /> Yes, Mobile studio is part of the platform. -- Stacey Bailey<br /><br /></p>
<div id="51a1b0b7dbbfa30069c5fd131d9619e9"> </div>
<p><strong>Is HRSD folded into agent workspace? If not yet, any idea on timing?</strong> -- Amanda Hammond<br /> I don&#39;t believe it is in Madrid, but I have been told it&#39;s on the roadmap. Not sure on the timing. -- Stacey Bailey<br /><br /></p>
<div id="51a1b0b7dbbfa30069c5fd131d9619ec"> </div>
<p><strong>Is Agent Workspace an optional item that can be turned on or off? or is this the new view with the upgrade to Madrid?</strong> -- Ben Snyder<br /> The Agent Workspace is an optional interface. It will not REPLACE existing views and capabilities. -- Stacey Bailey<br /><br /></p>
<div id="51a1b0b7dbbfa30069c5fd131d9619ef"> </div>
<p><strong>Hello, when you say ITSM Pro for Agent Workspace, do you mean Customer Service Management or is this the standard ITSM package (Incident, Change, Problem, etc.)?</strong> -- Scott Jordheim<br /> This refers to ITSM. -- Stacey Bailey<br /><br /></p>
<div id="51a1b0b7dbbfa30069c5fd131d9619f2"> </div>
<p><strong>The Decision Table feature is being rolled out for Change Approvals.. will it eventually be rolled out for Request approvals as well?</strong> -- Brian Good<br /> It is not on the immediate roadmap, but something the product team is considering in the future. Please consider adding an enhancement request in HI. -- Stacey Bailey<br /><br /></p>
<div id="51a1f0b7dbbfa30069c5fd131d961918"> </div>
<p><strong>When Madrid is planned for FedRAMP?</strong> -- Tim Lor<br /> It typically takes ~3 months after general availability to make new releases available to FedRAMP due to the authorization process required by the Government. -- Chuck Tomasi<br /><br /></p>
<div id="51a1f0b7dbbfa30069c5fd131d96191b"> </div>
<p><strong>Thanks. The link says we have to have HI enable the Flow Designer plugin for us. Does that mean there is a subscription fee for it?</strong> -- Stephanie Taveras<br /> There is no additional subscription fee for Flow Designer. -- Stacey Bailey<br /><br /></p>
<div id="55a1b0b7dbbfa30069c5fd131d9619e8"> </div>
<p><strong>CAn Agent Workspace be re-branded?</strong> -- Elliot West<br /> I don&#39;t believe it can be re-branded at this time. -- Stacey Bailey<br /><br /></p>
<div id="55a1b0b7dbbfa30069c5fd131d9619eb"> </div>
<p><strong>Is Agent Workspace only available to clients who have already moved to scoped applications?</strong> -- Narayana Pillai<br /> Can you elaborate in comments? Agent workspace is available for ITSM and CSM in Madrid. -- Stacey Bailey<br /><br /></p>
<div id="55a1b0b7dbbfa30069c5fd131d9619ee"> </div>
<p><strong>Is search on Integers now possible in Madrid?</strong> -- Daniel Oderbolz<br /> Would you mind elaborating on your question in the comments? I&#39;m not sure I understand the use case. -- Stacey Bailey<br /><br /></p>
<div id="55a1b0b7dbbfa30069c5fd131d9619f1"> </div>
<p><strong>Planning upgrade from LP4 JF2 to Madrid. Are there any deprecated methods that we have to know ahead</strong> -- Usha Polavarapu<br /> Please review the release notes for each interim release for this information. Additionally, in the developer portal, in the API section, you should be able view methods per release. -- <br /><br /></p>
<div id="55a1f0b7dbbfa30069c5fd131d96191a"> </div>
<p><strong>AD / SCCM / Slack Spoke... are these included in the platform?</strong> -- Russ Diven<br /> These are included in IntegrationHub. -- Stacey Bailey<br /><br /></p>
<div id="59a1b0b7dbbfa30069c5fd131d9619ea"> </div>
<p><strong>Is Agent Workspace for use by Fulfillers as well? I.E. people that work Requests, Incidents, Problems</strong> -- Edward Gowens<br /> Yes, fulfillers are the primary targeted users for Agent Workspace. -- Stacey Bailey<br /><br /></p>
<div id="59a1b0b7dbbfa30069c5fd131d9619ed"> </div>
<p><strong>Does ServiceNow have any plans to look at or add more in depth native user experience metrics and dashboards? Things that are provided along side the survey module making implementing surveys and digesting the response data less daunting?</strong> -- Ryan Smith<br /> I&#39;d suggest submitting enhancement requests to let the product team know what you&#39;d like to see in future releases. -- Stacey Bailey<br /><br /></p>
<div id="59a1b0b7dbbfa30069c5fd131d9619f0"> </div>
<p><strong>Do you need to have agent schedules in ServiceNow for the auto assigning to work?</strong> -- Aisling Heaphy<br /> It doesn&#39;t appear to be a requirement, but I&#39;d suggest doing a bit of experimentation in a personal developer instance to validate that. -- Stacey Bailey<br /><br /></p>
<div id="59a1f0b7dbbfa30069c5fd131d961919"> </div>
<p><strong>Is there any script editor added for the power shell scripting in Madrid Update for service now...??</strong> -- Palvinder Singh<br /> Although you can write Powershell, there is no editor that will do syntax highlighting like we have for Javascript. -- Kreg Steppe<br /><br /></p>
<div id="5da1b0b7dbbfa30069c5fd131d9619e9"> </div>
<p><strong>When will agent workspace be available in HRSD?</strong> -- Robert Card<br /> This is on the roadmap for a future release. -- Chuck Tomasi<br /><br /></p>
<div id="5da1b0b7dbbfa30069c5fd131d9619ec"> </div>
<p><strong>It could have been better to have demos of things</strong> -- Rali Hakam<br /> Agreed, Rali, but we&#39;ve only got an hour, so we&#39;re trying to show the highlights. There will be more content with demos in future sessions and most of this is available for you to explore on personal developer instances today. -- Stacey Bailey<br /><br /></p>
<div id="5da1b0b7dbbfa30069c5fd131d9619ef"> </div>
<p><strong>Are the advanced work assignment queue an extra cost?</strong> -- Brandi Chandler<br /> No. Part of the platform, as far as I know. -- Stacey Bailey<br /><br /></p>
<div id="5da1f0b7dbbfa30069c5fd131d961918"> </div>
<p><strong>Is there a migration path from the the old mobile app to the native app?</strong> -- Christian Andersson<br /> Not that I am aware of. -- Stacey Bailey<br /><br /></p>
<div id="85e99878dbc0770069c5fd131d9619e5"> </div>
<p><strong>Will we have access to Madrid at Knowledge 19?</strong> -- null null<br /> Yes, that&#39;s the plan is to use it on all Knowledge labs and CreatorCon workshops. -- Chuck Tomasi<br /><br /></p>
<div id="8da170b7dbbfa30069c5fd131d9619fd"> </div>
<p><strong>What color bowtie is Chuck wearing today?</strong> -- Paul Porter<br /> Lavender? -- Kreg Steppe<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961901"> </div>
<p><strong>is flow designer been charged separately, if yes how it is charged</strong> -- Niky Shirdhankar<br /> Flow Designer is part of the ServiceNow Platform. There is no extra charge for that. IntegrationHub is an application that extends Flow Designer to add integration actions. There is a charge for IntegrationHub. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961904"> </div>
<p><strong>Can you call out checklists within Flow Designer?</strong> -- Magdie Rizk<br /> Not that I&#39;ve seen. If you have a use case for this, we&#39;d encourage you to submit an enhancement request. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d96190a"> </div>
<p><strong>are flow designers not as flexibile as workflow editor? can&#39;t do as much scripting in flow designer?</strong> -- Rita Audi<br /> Flow Designer is rapidly achieving feature parity with workflow editor. Flow Designer includes Action Designer where developers may use scripting and other steps to build very powerful actions. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d96191f"> </div>
<p><strong>Does Flow Designer work with CSM and its extended tables?</strong> -- Mike Visser<br /> Flow Designer should work with any tables in the ServiceNow database. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961922"> </div>
<p><strong>Use case for email group could be to monitor different inboxes used by different divisions for a central HR group.</strong> -- Howard Richter<br /> Very good use case. Thanks. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961925"> </div>
<p><strong>Is SN going to add test cases to test OOB basic functionality?</strong> -- Tracy Codell<br /> Yes, ATF Quick Start tests included in Madrid have been developed specifically for this purpose. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961928"> </div>
<p><strong>Can we have more selenium-like actions for the portal side...clicking on buttons, etc..to mimic actual user actions</strong> -- Sean Haines<br /> Do you mind clarifying your question in the comments below? -- Chuck Tomasi<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d96192b"> </div>
<p><strong>Wow I got an answer. Can you tell me the difference between ITSM and ITSM Pro?</strong> -- Cathy Archambeault<br /> ITSM includes all standard ITSM process plus the walk-up experience. ITSM Pro includes everything from ITSM Standard plus Performance Analytics, Continual Improvement Management, Agent Intelligence, and Virtual Agent. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d96192e"> </div>
<p><strong>Is Anti-Virus scanning available for FedRAMP instances?</strong> -- Steven Rodgers<br /> From what I have heard, Anti-virus for FedRAMP is targeted for New York. -- Stacey Bailey<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961931"> </div>
<p><strong>does the guided tour work on record producers?</strong> -- Claire Cenir<br /> You should be able to do this. -- Kreg Steppe<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961934"> </div>
<p><strong>Can you use concurrent imports option on integrations that system web services?</strong> -- Jason Shaylor<br /> Can you elaborate on your use case in the comments below? System web services, as I understand it, import one record per call. -- Chuck Tomasi<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d961937"> </div>
<p><strong>When Madrid is getting FedRamped</strong> -- Waleed Falak<br /> It typically takes ~3 months after general availability to make new releases available to FedRAMP due to the authorization process required by the Government. -- Chuck Tomasi<br /><br /></p>
<div id="91a1f0b7dbbfa30069c5fd131d96193a"> </div>
<p><strong>Can we get apps from the store in Madrid</strong> -- Bernadine Polo<br /> Yes you can -- Kreg Steppe<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961900"> </div>
<p><strong>Could you elaborate on the benefits/differences with running a flow as a user?</strong> -- Patrick Canary<br /> Running a flow as a user would validate that the user has the security rights to perform actions automated by the flow and would reflect that they were the ones to trigger updates to impacted records. This provides both a security validation and easy audit trail to follow. -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961906"> </div>
<p><strong>GA stands for Go Active?</strong> -- Denise Vasak<br /> GA stands for General Availability -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961909"> </div>
<p><strong>Is Madrid FEDRAMP-ready?</strong> -- Eric Dillon<br /> It typically takes ~3 months after general availability to make new releases available to FedRAMP due to the authorization process required by the Government. -- Chuck Tomasi<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d96191e"> </div>
<p><strong>Are we done with Scripting ?</strong> -- SEVI AGOSSOU<br /> :-) We are definitely moving towards low-code. However, there still is a lot of power in the platform to create custom actions, script includes, etc. -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961921"> </div>
<p><strong>Does this mean not all features will be available with the Madrid General Availability in March 2019?</strong> -- Ashwin Tadinada<br /> Most everything we cover in today&#39;s webinar will be part of Madrid General Availability. However, check Docs release notes for additional details and specifics. -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961924"> </div>
<p><strong>RE: the workflow vs flow designer, so workflow is going the way of execution plans. Supported but not updated/maintained.</strong> -- Jace Benson<br /> Yes, that seems to be the direction. -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961927"> </div>
<p><strong>how do you move a test from dev to prod</strong> -- Mathew Xagoraris<br /> ATF Tests may be moved from instance to instance using App Repos or Update Sets. -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d96192a"> </div>
<p><strong>Is there any way we can programatically retain the Test data?</strong> -- Chaitanya Chelamkuri<br /> One of the benefits of ATF is that it cleans up after itself. One trick I use to validate test data after a test is run is that I use one of the form steps to open a form and take a screenshot. There is an option on the Test Result records to retain those indefinitely. That does not include the data generated by the test, though. -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d96192d"> </div>
<p><strong>Will the antivirus check work with the new attachment field that was added in London?</strong> -- Susan Williams<br /> The attachment field writes to the sys_attachment table. Anti-virus will operate based on records in that table, so it doesn&#39;t matter how they get there. -- Chuck Tomasi<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961930"> </div>
<p><strong>Does the Attachment antivirus work with attachments that are encrypted via Edge encryption?</strong> -- James Higgins<br /> No. Edge encryption happens in the customer network before data is written to the database. Anti -- <br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961933"> </div>
<p><strong>Does madrid allow the installation of store apps yet? If no, when is this planned?</strong> -- Jace Benson<br /> Do you mind adding a bit more context for your question in the comments below? Store apps have been installable in instances for several releases. -- Stacey Bailey<br /><br /></p>
<div id="95a1f0b7dbbfa30069c5fd131d961939"> </div>
<p><strong>what about the Change REST APIs? I heard they are coming with Madrid:</strong> -- Nimer Kawwa<br /> Yes, you can explore the robust Change REST APIs in Madrid using your personal developer instance. You can also read more about the API by searching docs for &#39;Change Management API.&#39; -- Stacey Bailey<br /><br /></p>
<div id="99a1b0b7dbbfa30069c5fd131d9619ff"> </div>
<p><strong>With all the talk around Flow Designer is it ServiceNows intent to slowly get rid of Workflows?</strong> -- Russell Park<br /> We are working towards achieving functionality parity in Madrid. All new innovations and advancements will be made within Flow Designer, though workflow will still be maintained for the foreseeable future. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961902"> </div>
<p><strong>Question related to workflow, is flow designer going to eventually replace legacy workflow?</strong> -- Brian Ritchey<br /> Workflow will continue to be supported for the foreseeable future, but all new innovations and feature enhancements will be focused on Flow Designer. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961908"> </div>
<p><strong>has Madrid been FedRAMP approved? If not is there a time frame for when it will be?</strong> -- Ben Snyder<br /> It typically takes ~3 months after general availability to make new releases available to FedRAMP due to the authorization process required by the Government. -- Chuck Tomasi<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d96191b"> </div>
<p><strong>Is there an okta spoke?</strong> -- Curtis Leung<br /> Keep an eye out in the ServiceNow Store after Madrid comes out. Okta has already published several apps in the store. I would expect them to release a spoke sometime soon. -- Kreg Steppe<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961923"> </div>
<p><strong>Any plant to allow the &#34;Email&#34; variable type field to allow comma separated values on update?</strong> -- James Higgins<br /> I haven&#39;t heard of any changes in Madrid. If you think it&#39;s important, I&#39;d encourage you to open an enhancement request in HI. -- Chuck Tomasi<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961926"> </div>
<p><strong>Are there plans to add quick start tests for the HR module &amp; case management?</strong> -- Ala David<br /> Both HR and CSM have quick start tests in Madrid. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961929"> </div>
<p><strong>I missed the part where you said ATF Quick test is avaiable to which of the modules</strong> -- Louis Joseph<br /> You should be able to see the quick start tests available in Madrid from within a personal developer instance. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d96192c"> </div>
<p><strong>Antivirus protection is chargeable ?</strong> -- Prabhat Kumar<br /> I don&#39;t believe so. It&#39;s a platform feature. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d96192f"> </div>
<p><strong>How do I distinguish various new features if they are available to clients using non-scoped app or just to those using scoped apps.</strong> -- Narayana Pillai<br /> Use of scoped applications vs. non-scoped applications doesn&#39;t really come into play when determining if you can leverage new features. Can you explain a bit more? -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961932"> </div>
<p><strong>Is there a K19 session dedicated for Everything that is New/Improved in Madrid</strong> -- Isaac Torkelson<br /> There should be several on the agenda. Be sure to sign up quickly, since these tend to fill up very quickly. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961935"> </div>
<p><strong>if I am using ATF (Kingston) and copy example tests...will I get notified of updates to my tests when I upgrade to Madrid or is it beginning with Madrid this moving forward with example tests that were copied?</strong> -- Dave Matzinger<br /> The notifications are for copies of quick start sample tests. Since those are coming out in Madrid, it would start then and only work for copies of those tests. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d961938"> </div>
<p><strong>What about Enterprise DevOps? Wasn&#39;t that included in Madrid?</strong> -- Ed Davis<br /> If you are interested in Enterprise DevOps for the Madrid release, please talk to your account representative. Its release is controlled to allow ServiceNow to support early adopters. -- Stacey Bailey<br /><br /></p>
<div id="99a1f0b7dbbfa30069c5fd131d96193b"> </div>
<p><strong>Does Virtual Agent require an additional license</strong> -- Jana Brooke<br /> Yes. Please talk to your Account Representative for details. -- Stacey Bailey<br /><br /></p>
<div id="9da1b0b7dbbfa30069c5fd131d9619fe"> </div>
<p><strong>Just to clarify - Agent Workspace is included out of box, but the Agent Assist feature requires ITSM Pro. Is that correct?</strong> -- Stephanie Carter<br /> I believe so. Please talk to your Account Rep for confirmation. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d961901"> </div>
<p><strong>if my company is just about to implement workflows is it in our best interest to only use flow designer?</strong> -- Chad Gates<br /> Yes. If you are just starting out, it would be best to use flow designer. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d961904"> </div>
<p><strong>Kreg or Stacey - I teach the ServiceNow Fundamentals course for ServiceNow. I just received the updated course material for Madrid, and I noticed that Workflows have been all but removed. SLAs have also been removed from the course. Has this been reflected in the Certified System Administration exam?</strong> -- Scott Fabel<br /> The CSA Exam has been updated to align with the materials in the course. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d961907"> </div>
<p><strong>Does Mobile app support multiple languages?</strong> -- Christian Andersson<br /> I will look into this a bit more. However, I have seen that may of the fields with displayed values are translatable. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d96190a"> </div>
<p><strong>Can initial list of Virtual Agent topics be categorized ? Currently it just list all the topics , and if one has 100 scenarios, it would be cumbersome. Or can the Topics list be hidden ?</strong> -- Hari Dasari<br /> I don&#39;t believe topics may be categorized. However, they can be associated with roles so only topics relevant to an individual&#39;s roles are displayed. I believe the team is working on optimizing topic selection as part of the roadmap. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d96191c"> </div>
<p><strong>I was under the impression that FLOW was not &#34;replacing&#34; workflow but with no new development on workflow, it does seem to be the case. Can you confirm or deny this?</strong> -- Jace Benson<br /> I can confirm. Workflow will continue to be supported, but new innovations will be targeted to Flow Designer. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d96191f"> </div>
<p><strong>Thankyou, how is Integration hub charged, is it per transaction</strong> -- Niky Shirdhankar<br /> Yes, it is per transaction. Check with your account manager for details and specifics. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d961922"> </div>
<p><strong>Does Email Client now automatically add attachments from the source record?</strong> -- John Gubatayao<br /> We are not aware of any changes for the Email Client in Madrid. I&#39;m also not sure that you&#39;d want to attachments from the source record. Do you mind elaborating on your use case for this? -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d961925"> </div>
<p><strong>Are there any intention to make these tests &#34;Self contained&#34; so they dont require the demo data to exist?</strong> -- Jace Benson<br /> I certainly feel your pain, but don&#39;t think there is a plan to make the tests self-contained. After copying a quick start test, it does require effort to replace references to demo data with test accounts and other data that does exist in a customer instance. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d96192b"> </div>
<p><strong>Is the antivirus check enabled by default?</strong> -- Susan Williams<br /> Yes, though there are some limitations. It is not available yet for FedRAMP customers and, I would assume, it is not available for customers with on-premise implementations. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d96192e"> </div>
<p><strong>Is there an extra charge for anti-virus?</strong> -- Luis Cabrera<br /> No. It is part of the platform capabilities. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d961931"> </div>
<p><strong>Thanks for your presentation :) Do you have any slide and/or webinar regarding MSP? I&#39;ve hear this last weeks that a global review have been done in Madrid and we will want to start a new instance with MSP in few weeks</strong> -- Florian Delmas<br /> We will add this to the list of ideas for future episodes. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d961934"> </div>
<p><strong>are there a list of the UI enhancements for basic users or power users?</strong> -- Edward Gowens<br /> You may be able to find some of this in the release notes for Madrid. However, I have not seen them compiled in a single location. -- Stacey Bailey<br /><br /></p>
<div id="9da1f0b7dbbfa30069c5fd131d96193a"> </div>
<p><strong>Will deleted attachments continue to stay in the work notes of the record ?</strong> -- Rahul Satapathy<br /> Based on my testing, if you delete an attachment, you will no longer see it in the activity history. -- Stacey Bailey<br /><br /></p>
<div id="c1a1b0b7dbbfa30069c5fd131d961900"> </div>
<p><strong>can you please do a session like this on update sets</strong> -- Mathew Xagoraris<br /> Thanks for the suggestion, Mathew. I&#39;ve added it to our backlog of ideas. -- Stacey Bailey<br /><br /></p>
<div id="c1a1b0b7dbbfa30069c5fd131d961903"> </div>
<p><strong>Madrid is already available for everyone ? I didn&#39;t see it on HI portal ?</strong> -- Michaël Collignon<br /> Go live is in the next couple weeks. -- Kreg Steppe<br /><br /></p>
<div id="c1a1b0b7dbbfa30069c5fd131d9619e7"> </div>
<p><strong>is mobile studio/agent workspace enabled to be tested using Automated Test Framework?</strong> -- Dave Matzinger<br /> I will try to look into that in detail and answer next month. I am 99% sure the answer is not yet. -- Stacey Bailey<br /><br /></p>
<div id="c5a170b7dbbfa30069c5fd131d9619ff"> </div>
<p><strong>As you present, can you please be clear about what features are OOB and what features require an additional subscription cost?</strong> -- Christie Srenaski<br /> We absolutely will, Christie. If there is anything we miss, please let us know and we&#39;ll follow-up. -- Stacey Bailey<br /><br /></p>
<div id="c5a1b0b7dbbfa30069c5fd131d961905"> </div>
<p><strong>Will there be mobile specific training at K19??</strong> -- Steve Hill<br /> I do not know specifically, but I am sure there is. I seem to remember it last year. -- Kreg Steppe<br /><br /></p>
<div id="c5a1b0b7dbbfa30069c5fd131d9619e6"> </div>
<p><strong>How does mobile studio and the regular studio interact?</strong> -- Matt Brusco<br /> Mobile Studio exists within the regular Studio. -- Stacey Bailey<br /><br /></p>
<div id="c9a170b7dbbfa30069c5fd131d9619fe"> </div>
<p><strong>Hi, Need to know about &#34;Upgrade plans with quick start tests&#34; and how it helps as we upgrade to Madrid platformKirtiman</strong> -- Kirtiman Banerjee<br /> We will touch on Quick Start Tests around slide 48 today. -- Stacey Bailey<br /><br /></p>
<div id="c9a1b0b7dbbfa30069c5fd131d961901"> </div>
<p><strong>Is the JSON field type available on the service portal as a variable?</strong> -- Matt Brusco<br /> Do you mind elaborating on this use case in the comments? -- Chuck Tomasi<br /><br /></p>
<div id="cda1b0b7dbbfa30069c5fd131d961900"> </div>
<p><strong>When will Madrid be available as a personal developer instance?</strong> -- Rick Vail<br /> It&#39;s available now! You should see an option in the developer portal to either upgrade your existing PDI or create a new one on Madrid if you don&#39;t already have an active PDI. -- Stacey Bailey<br /><br /></p>
<div id="d1a1b0b7dbbfa30069c5fd131d9619ea"> </div>
<p><strong>is agent workspace new in Madrid or has it been around?</strong> -- Carly Grossman<br /> I was available in London. -- Kreg Steppe<br /><br /></p>
<div id="d1a1b0b7dbbfa30069c5fd131d9619f0"> </div>
<p><strong>Does advanced work assignment handle change request approvals?</strong> -- Bobbie Ferrari<br /> Approvals are sent to specific approvers rather than assigned based on work assignment rules. -- Stacey Bailey<br /><br /></p>
<div id="d1a1f0b7dbbfa30069c5fd131d961919"> </div>
<p><strong>Are the AD and AAD spokes at a cost for Flow Designer? Those used to be managed through integration hub which was at cost.</strong> -- Matt Payerle<br /> AD and AAD are still included as part of IntegrationHub. -- Stacey Bailey<br /><br /></p>
<div id="d5a1b0b7dbbfa30069c5fd131d9619e9"> </div>
<p><strong>Is Agent Workspace still only available for INC records...or was that the &#34;limited availability&#34; ?</strong> -- James Marshalsay<br /> Agent workspace is available for ITSM and CSM. We are working to make it more widely available in the platform in the future. -- <br /><br /></p>
<div id="d5a1b0b7dbbfa30069c5fd131d9619ec"> </div>
<p><strong>This is the first time I have seen the reference to ITSM PRO. What is that, we Gove and are still on Kingston but should move to London soon.</strong> -- Cathy Archambeault<br /> ITSM includes all standard ITSM process plus the walk-up experience. ITSM Pro includes everything from ITSM Standard plus Performance Analytics, Continual Improvement Management, Agent Intelligence, and Virtual Agent. -- <br /><br /></p>
<div id="d5a1b0b7dbbfa30069c5fd131d9619ef"> </div>
<p><strong>Is advanced work assignment an outgrowth or evolution of queue manager?</strong> -- Mike Shuda<br /> It is a new product. -- Chuck Tomasi<br /><br /></p>
<div id="d5a1f0b7dbbfa30069c5fd131d961918"> </div>
<p><strong>I noticed that there is an Anti-virus application in Madrid but it doesnt seem to be featured like these other apps. Is there a reason?</strong> -- Edward Rosario<br /> We will touch on that around slide 64. -- Stacey Bailey<br /><br /></p>
<div id="d9a1b0b7dbbfa30069c5fd131d9619e8"> </div>
<p><strong>will agent workspace be available for hr case work?</strong> -- David Belle<br /> It&#39;s on the roadmap for a future release. -- Stacey Bailey<br /><br /></p>
<div id="d9a1b0b7dbbfa30069c5fd131d9619eb"> </div>
<p><strong>Can we utilize the benefits of Agent Workspace (like tabs) without purchaseing Agent Assist?</strong> -- Patrick Canary<br /> Yes. Agent Assist requires Agent Workspace, but Agent Workspace does not require Agent Assist. -- Chuck Tomasi<br /><br /></p>
<div id="d9a1b0b7dbbfa30069c5fd131d9619ee"> </div>
<p><strong>When is Madrid GA version available to customers?</strong> -- Usha Polavarapu<br /> I believe March 6th. -- Kreg Steppe<br /><br /></p>
<div id="d9a1b0b7dbbfa30069c5fd131d9619f1"> </div>
<p><strong>Do you think SN admins should stop using workflow in favor of flow designer?</strong> -- Dustin Spain<br /> Workflow is not going away, Flow is the direction of the future. -- Kreg Steppe<br /><br /></p>
<div id="d9a1f0b7dbbfa30069c5fd131d961917"> </div>
<p><strong>Is there a single website where one can see all the options that are available with a module vs. requiring additional licensing?</strong> -- Jon Epstein<br /> If you search &#34;list of plugins&#34; in Docs, you&#39;ll see each available plugin as well as whether or not it is a paid plugin. Also, in the Subscription Management application, you can see a list of Subscription Applications associated with each of your organization&#39;s license. Fast forward to 14:49 in this ServiceNow Support YouTube video for more about that. https://www.youtube.com/watch?v&#61;OEy9SV-cLNY -- Stacey Bailey<br /><br /></p>
<div id="d9a1f0b7dbbfa30069c5fd131d96191a"> </div>
<p><strong>Does any of these spokes or the flow designer require orchestration?</strong> -- daniel Peel<br /> They require IntegrationHub. -- Stacey Bailey<br /><br /></p>
<div id="dda1b0b7dbbfa30069c5fd131d9619e7"> </div>
<p><strong>It would be helpful if it was disclosed what is included in ITSM vs ITSM Professional licensure</strong> -- Donald Small<br /> ITSM includes all standard ITSM process plus the walk-up experience. ITSM Pro includes everything from ITSM Standard plus Performance Analytics, Continual Improvement Management, Agent Intelligence, and Virtual Agent. -- <br /><br /></p>
<div id="dda1b0b7dbbfa30069c5fd131d9619ea"> </div>
<p><strong>Is there a place to get pictures of the agent workspace? The one being displayed is blurry</strong> -- Kevin Maslankowski<br /> Please check servicenow.com. I&#39;m sure there will be several popping up in the near future. -- Stacey Bailey<br /><br /></p>
<div id="dda1b0b7dbbfa30069c5fd131d9619ed"> </div>
<p><strong>Is Advanced work assignment part of Agent workspace?</strong> -- Fernando Gois<br /> It is a separate product. Not sure about the relationships between the two. -- Chuck Tomasi<br /><br /></p>
<div id="dda1b0b7dbbfa30069c5fd131d9619f0"> </div>
<p><strong>will advanced work assignment assigns ticket based on agent skillset?</strong> -- keerthiga kumar<br /> This is one of the considerations for advanced work assignment. -- Stacey Bailey<br /><br /></p>
<div id="dda1f0b7dbbfa30069c5fd131d961919"> </div>
<p><strong>Do we need special licence to use to ADSpoke ? like orchestration or other ? or ITSM is sufiscient ?</strong> -- Michaël Collignon<br /> Yes, you will need to have licensing for IntegrationHub to use the AD Spoke. -- Stacey Bailey<br /><br /></p>
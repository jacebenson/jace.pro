---
title: "Best practices for using the Flow Designer"
date: 2018-02-22T21:21:00.000Z
authors: ["Dawn Jurek"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=09becbf3db589b403882fb651f961986"
---
<p>At ServiceNow, we’re driving innovation by empowering you to automate your organization’s processes. With the Flow Designer, new in Kingston, even non-developers can easily build and test flows to automate approvals, tasks, notifications and record changes. In this installment of our <a href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series</a>, we cover some best practices to help you jumpstart your development in the Flow Designer. To learn more about getting started with creating your own flows and actions, first check out these videos from our <a href="https://www.youtube.com/user/servicenowdemo" rel="nofollow">NOWSupport YouTube channel</a>:</p>
<p style="text-align: center;" align="center"> </p>
<p style="text-align: center;" align="center"><iframe src="https://www.youtube.com/embed/2WZbCWPFlxk?rel&#61;0" width="640" height="360"></iframe></p>
<p> </p>
<p style="text-align: center;" align="center"><iframe src="https://www.youtube.com/embed/0Gzg-rYa8tc?rel&#61;0" width="640" height="360"></iframe></p>
<h4>And now for the best practices:</h4>
<h3>Leave base system actions and flows intact to get future updates</h3>
<p>One of the advantages to using the Flow Designer is that it provides a library of reusable actions and flows to leverage for your own development.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="23cfb46adbe0d3443882fb651f961913.iix" /></p>
<p>To use a base system action or flow, open it, click <strong>Copy</strong>, enter a new name, and customize the copy of the original. This way, you’ll receive the changes that ServiceNow publishes to the original flows and actions in the future.</p>
<p> </p>
<h3>Always build an action or flow within a scope – but not the Global scope</h3>
<p>Before you begin creating a flow, create a custom, or scoped, application for the content to reside in. You can do this in the Studio IDE by navigating to <strong>System Applications &gt; Studio</strong>…</p>
<p><img style="max-width: 100%; max-height: 480px;" src="12ff78aadbe0d3443882fb651f961989.iix" /></p>
<p>…or the <strong>Develop</strong> tab in the <strong>Applications</strong> page:</p>
<p><img style="max-width: 100%; max-height: 480px;" src="e81041eadbe0d3443882fb651f96194d.iix" /></p>
<p>Generally speaking, a scope is like a namespace for your application. Everything in your application falls under this namespace. It separates your classes, tables, and UI components from everyone else&#39;s; it gives you control over their names, how they can be accessed or extended by others, and keeps your code from accidentally polluting the global namespace. </p>
<p>Also, creating your Flow Designer content within a custom application allows you to <a href="https://docs.servicenow.com/bundle/kingston-application-development/page/build/applications/task/t_PublishAppsToTheAppRepository.html" rel="nofollow">publish it to the application repository</a>, making it available to all other instances in your organization, or you can <a href="https://docs.servicenow.com/bundle/kingston-application-development/page/build/applications/task/t_PublishAppsToTheServiceNowStore.html" rel="nofollow">publish it to the ServiceNow Store</a>, making it available to everyone.</p>
<p> </p>
<h3><strong>Create simple, small components with simple names</strong></h3>
<p>When developing components in the Flow Designer, think <em>simple</em>, <em>small</em>, and <em>reusable</em>. Why? It’s easier to troubleshoot issues when each component in a flow is small, and you can reuse these components in multiple flows. Here’s our component-specific tips:</p>
<h4><strong>Flows</strong></h4>
<ul><li>Break big flows into smaller reusable chunks using <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/flow-designer/concept/subflows.html" target="_blank" rel="nofollow">subflows</a>, which are a new feature of Flow Designer in the London release.</li></ul>
<h4><strong>Actions</strong></h4>
<ul><li>When developing actions, keep them simple (just a few steps). If your action is more than a few steps, consider creating a separate action for each logical piece.</li><li>Create reusable actions with simple, human readable names to hide the complexity of record lookups, record details (fields), the ServiceNow data model, and complex scripts.</li><li>When actions get complex, create subflows, which allow you to string together actions into more complex reusable processes.</li></ul>
<h4><strong>Script steps in actions</strong></h4>
<ul><li>When using script steps in actions, each function should be in its own step.</li><li>Script steps should be only 20 lines or less. If the script is larger, consider breaking in into multiple logical steps.</li></ul>
<p> </p>
<h3><strong>Use IntegrationHub to handle authentication</strong></h3>
<p>Rather than passing user names and passwords through flows and actions, leverage <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/integrationhub/concept/integrationhub.html" target="_blank" rel="nofollow">IntegrationHub</a> to handle <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/credentials/reference/r-credentials.html" target="_blank" rel="nofollow">credentials and authentication</a>. IntegrationHub enables execution of third-party APIs as a part of a flow when a specific event occurs. (Note that IntegrationHub requires a separate subscription.)</p>
<p> </p>
<h3>Understand the difference between the Run Trigger options </h3>
<p>When you’re building the trigger for a flow to run when a record is <strong>Updated</strong>, or <strong>Created or Updated</strong>, you need to select a <strong>Run Trigger</strong> option: <strong>Always</strong> or <strong>Once</strong>. By default, this value is set to <strong>Once</strong>.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="6b20012edbe0d3443882fb651f96192d.iix" /> </p>
<p>This may seem straightforward, but with the <strong>Created or Updated</strong> trigger this can get tricky depending on the conditions you set in the trigger. Keep in mind that when you’re testing the flow in the Flow Designer interface, the trigger is ignored, which leads to our next best practice:</p>
<h3>Understand how the Test button works in the Flow Designer interface</h3>
<p>You can test your flows directly in the Flow Designer, via the <strong>Test</strong> button. When you click it, the flow runs, no matter what, meaning that the trigger is ignored and the test begins executing the actions. So, if there’s an issue with the trigger, you won’t know until you’re testing it outside of the Flow Designer interface.</p>
<p>This leads into our next best practice for development in general:</p>
<p> </p>
<h3>Never develop or test on a production instance</h3>
<p>In a previous post, we discussed <a href="community?id&#61;community_blog&amp;sys_id&#61;c64e26addbd0dbc01dcaf3231f9619da" rel="nofollow"><span style="font-size: 10.5pt; font-family: &#39;Arial&#39;,sans-serif; color: #3778c7; background: white;">why you shouldn’t develop on your production instance</span></a>. The same is true for testing – the Test function in the Flow Designer provides a handy interface for troubleshooting, but you need to perform tests on a <strong>test</strong> instance, never on a production instance. Why? Actions that create something, such as a new record, will not roll back after a test run in the Flow Designer. The item will remain in the instance as an artifact of the test. Also, other record changes and integration calls performed in the Flow Designer are real. So, after troubleshooting your flows within the Flow Designer, promote them to a test instance for testing with viable data.</p>
<p> </p>
<p>If you haven’t already, take advantage of the <a href="https://docs.servicenow.com/bundle/jakarta-application-development/page/administer/auto-test-framework/concept/atf-overview.html" rel="nofollow">Automated Test Framework (ATF)</a> to automate your testing. To learn more, see our post <a href="community?id&#61;community_blog&amp;sys_id&#61;1a4e66addbd0dbc01dcaf3231f96192f" rel="nofollow">Best practices for using ATF</a>.</p>
<p> </p>
<h3>If you move actions around, double-check the data references</h3>
<p>Flow Designer allows you to move actions up and down within the flow, so that you don’t have to reconfigure an action if you realize it’s in the wrong place. But if you do this, verify that any data referenced in the step is still pointing to the correct source.</p>
<p> </p>
<p>Here’s an example from 03:30 – 04:25 in our <strong>Flow Designer | Editing and Testing an Existing Flow</strong> video:</p>
<p style="text-align: center;" align="center"><iframe src="https://www.youtube.com/embed/0Gzg-rYa8tc?rel&#61;0&amp;start&#61;210" width="640" height="360"></iframe></p>
<p> </p>
<p>And finally, our last tip comes straight from our product documentation:</p>
<p> </p>
<h3>Don’t create conflicting logic with business rules and workflows</h3>
<p>While learning Flow Designer, make sure that you understand how existing Now Platform automation processes such as business rules and workflows change records to avoid creating conflicting logic. See the <a title="Understand how Flow Designer works within the Now Platform to activate, trigger, and process flows and actions." href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/flow-designer/concept/flow-designer-arch-overview.html" rel="nofollow">Architecture Overview</a> to understand how Flow Designer works within the Now Platform. If you are replacing an existing automation process, you may need to deactivate it before replacing it with Flow Designer flows and actions.</p>
<p> </p>
<h4>For more information:</h4>
<p><a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/flow-designer/concept/flow-designer.html" rel="nofollow">Flow Designer</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-application-development/page/build/applications/concept/c_ApplicationScope.html" rel="nofollow">Application scope</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/kingston-application-development/page/build/applications/task/t_CreateACustomApplication.html" rel="nofollow">Create a custom application</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-application-development/page/administer/auto-test-framework/concept/atf-overview.html" rel="nofollow">Automated Test Framework</a> (product documentation)</p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;801e6e2ddbd0dbc01dcaf3231f9619d8&amp;view_source&#61;searchResult" rel="nofollow">Background and Philosophy of Scoped Applications</a></p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;e8bde6a9dbd0dbc01dcaf3231f961993&amp;view_source&#61;searchResult" rel="nofollow">Scoped Applications - Introduction</a></p>
<p><a href="community?id&#61;community_blog&amp;sys_id&#61;5a6c6ea1dbd0dbc01dcaf3231f961978&amp;view_source&#61;searchResult" rel="nofollow">Application Development - Best Practice #1 - Work in a scope</a></p>
<p><a href="https://www.youtube.com/watch?v&#61;gZWSBrt02z0" rel="nofollow">Exploring Flow Designer and IntegrationHub - Live Coding Happy Hour for 2017-11-17</a> (video on <a href="https://www.youtube.com/channel/UCdXorgCT87YlFRN9n8oJ7_A" rel="nofollow">ServiceNow Dev Program</a> YouTube channel)</p>
<p> </p>
<p>---</p>
<p> </p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We’ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you’d like us to cover in this series, please let us know in the comments below. To access all of the blog posts in this series, see our <a href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series list.</a></p>
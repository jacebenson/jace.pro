---
title: "Unlearn Series  User Access Tester"
date: 2019-12-05T18:36:13.000Z
authors: ["Kalaiarasan Pushpanathan"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5afbc319db21445014d6fb2439961924"
---
<p>ServiceNow is a highly customizable application with numerous user personas, roles and their specific accesses.</p>
<ul><li>Have you ever needed to find what level of access does a user have in ServiceNow? </li><li>Have you ever needed to find what all tables can be accessed with a given role?</li></ul>
<p>I was in need of something that can do this but wasn&#39;t able to find anything out of the box. So this meant, I had to build something which can provide me quick snapshot of different access that a user has, while still having the flexibility of expanding the capability if required in future. The setup of the application (&#39;<strong>Access Testing</strong>&#39;) is extremely simple and it<strong> </strong>uses <strong>ATF</strong> under the hood to determine the access.</p>
<p>The updateset for the application can be found <a href="https://developer.servicenow.com/app.do#!/share/contents/4214057_user_access_tester?t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">here</a> on Share site. Installing the updateset will create a new application along with modules for easy accessibility. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/3128cf15dbed045014d6fb24399619f3.iix" /></p>
<p>Follow the below steps after installing the updateset to complete the setup.</p>
<ul><li>Open the ATF test called &#39;<strong>Access Test</strong>&#39; which can be found under the new Application<strong> &#39;Access Testing&#39;.</strong> </li><li>Define the user you want to test the access for in &#39;Test Run Data Sets&#39; related list along with its persona.</li><li>Run the test. </li><li>After the test completes running (which is quick), the results of the test are documented in Access Test Results (u_access_test_results) table. The application can be found under the new application.</li></ul>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/58b8c7d5dbed045014d6fb2439961900.iix" /></p>
<ul><li>The application also creates a new property called <strong>access.test.parameters. </strong>The property uses JSON object and defines the filter that you want to use, to narrow down the tables in your instances that you want the access test to be run against. The property also contains a parameter called excluded_tables_prefix, which will allow you to exclude system tables from the user access testing.</li><li>You can extend the application and add as many user personas you want. Add the corresponding personas to the choice list of persona field on Access Test Results table and the choice list of Persona parameter in <strong>Access Test</strong> (ATF Test)<strong>.</strong></li></ul>
<p><strong>Note: </strong>The application is still in its infancy and might give false positives results like, if there are scripted ACLs which restricts read access based on who is the creator of record, the access test might ignore that and give false results.</p>
<p><strong>For people still learning the platform</strong> - This demonstrates how powerful and flexible the platform really is. If you are looking to sharpen your ServiceNow skills, the only way is to build and break stuff. If you go through the source code, you will be able to learn,</p>
<ul class="ng-scope"><li>Parameterized tests.</li><li>Custom step configuration creation.</li><li>Some best practices of ServiceNow scripting.</li><li>Using system properties as Json object.</li></ul>
<p>Hope this helps someone!</p>
<p> </p>
<p><em>If you liked the content, please share, like, bookmark or leave your valuable comments.</em></p>
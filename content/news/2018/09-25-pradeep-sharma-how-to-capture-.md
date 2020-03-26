---
title: "How to capture Demo Data in Scoped Application"
date: 2018-09-24T10:29:52.000Z
authors: ["Pradeep Sharma"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=08ab8f20db3c678054250b55ca961979"
---
<p>If you are building a scoped application for the store, you may want to include some demo data, or non-metadata application files to provide some demonstration of the functionality of the application. Records on regular metadata tables (tables that extend sys_metadata) will always be included in the application automatically, and you do not need to move them. In fact, you will not even have the option to do so because the Create Application File UI action is not available on metadata tables.</p>
<p>In this post, I will show you how to capture Demo Data and how customers can install an application along with Demo Data.</p>
<h2><strong>Application File Creation Options:</strong></h2>
<p>The Create Application File UI action provides three options:</p>
<ul><li>New Install and Upgrades</li><li>New Install</li><li>New Install with Demo Data</li></ul>
<h2><strong>Steps to Capture Demo Data:</strong></h2>
<p>Let&#39;s pretend we created a scoped application called &#34;Marketing Events&#34; and as part of my app functionality, I would like to create a record in OOTB location &#34;cmn_location&#34; Table. As we know that location table is not extended from &#34;sys_metadata&#34;, we will have to capture it as part of the demo data. </p>
<ol><li>On your instance navigate to <strong>User Administration &gt; Locations</strong></li><li>Create a new Location record </li><li>Now filter the records from the list view and select the option “Create Application File” from the List choice</li></ol>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="fc6d8a09db7caf84d58ea345ca961953.iix" /></p>
<p>      4. A pop-up screen will be shown with details like the number of records selected from the table in the application scope</p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="abae8601dbbcaf84d58ea345ca9619a1.iix" /></p>
<p>5. Select one of the options depending on the below description and save the record.</p>
<p> </p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="cddece01dbbcaf84d58ea345ca9619d6.iix" /></p>
<p>Once a non-metadata file has been moved into the application, it will appear on the Application Files related list on the sys_app record as a <strong>Metadata Snapshot</strong> class and will be published with your application. A record is also generated on the sys_metadata_link table, which is responsible for linking that record to the correct package folder.</p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="7aee4641dbbcaf84d58ea345ca9619a5.iix" /></p>
<h2><strong>Behavior of Application Installation with Demo Data:</strong></h2>
<p>A customer who installs the application will see the below option i.e Install or Install with Demo Data. This additional option i.e &#34;Install with Demo Data or Update with Demo Data&#34; is only visible when app author has captured the Demo Data as &#34;New Install with Demo Data&#34;. In other cases, the demo data records will be created as part of app installation.</p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="d3feca41dbbcaf84d58ea345ca9619be.iix" /></p>
<p> </p>
<p>We have successfully covered how to package Demo Data as part of Scoped Applications. As a best practice, please ensure to review application Files related to &#34;Metadata Snapshot&#34; class aka Demo Data records before you publish your Scoped Application.</p>
<p>For more information, see the <a href="https://docs.servicenow.com/bundle/kingston-application-development/page/build/applications/task/t_IncludeApplicationData.html" rel="nofollow">Create application files</a> to include sample data product documentation topic.</p>
<p> </p>
<p> </p>
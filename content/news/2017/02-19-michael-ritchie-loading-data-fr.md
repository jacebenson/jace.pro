---
title: "Loading data from an email attachment"
date: 2017-02-18T06:49:04.000Z
authors: ["Michael Ritchie"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=908c26e1dbd0dbc01dcaf3231f9619c4"
---
<p>ServiceNow offers a wide variety of API&#39;s to integrate with other systems: <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/integrate/web-services/reference/r_AvailableWebServices.html" rel="nofollow">Web Services </a>(<a href="https://docs.servicenow.com/bundle/newyork-application-development/page/integrate/inbound-soap/concept/c_SOAPWebService.html" rel="nofollow">SOAP </a>and <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/integrate/inbound-rest/concept/c_RESTAPI.html" rel="nofollow">REST</a>), <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/credentials/task/create-JDBC-connection.html" rel="nofollow">JDBC</a>, <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/integrate/ldap/concept/c_LDAPIntegration.html" rel="nofollow">LDAP</a>, <a href="https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/discovery/reference/r_PowerShellForDiscovery.html" rel="nofollow">PowerShell,</a> <a href="https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/discovery/task/t_UsingTheServiceNowShellScript.html" rel="nofollow">Shell Script</a>, scheduled file import, and bi-directional email. Unfortunately, not all systems and tools offer this same variety of choices and loading data via spreadsheet or files feels like the only choice. The files can certainly be imported manually through <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/import-sets/concept/c_ImportDataUsingImportSets.html" rel="nofollow">Import Sets</a> or through another solution I documented called <a title="" href="/community?id&#61;community_blog&amp;sys_id&#61;341eae2ddbd0dbc01dcaf3231f961994" rel="nofollow">&#34;Consumerize&#34; Data Imports to Non-ServiceNow Administrators</a>, but what if this could be automated.   ServiceNow can connect to FTP sites or pull files via MID server, but what if that still doesn&#39;t work for the system or vendor you are trying to integrate with? Then I would say the lowest common denominator for integration is <strong>email</strong>.</p>
<p> </p>
<p>We all know parsing email text can be very tricky and problematic at the same time; however, if you can get an email template set up it can be a useful integration method. The ability to process an inbound email and import data at the time is often overlooked. I often see and hear about spreadsheets being emailed around and then saved so the data can be imported, but again what if that could happen automatically?</p>
<p> </p>
<h1>Loading data from an email attachment</h1>
<p>There have been a few solutions for this documented over the years, including <a class="jive_macro jive_macro_blogpost" title="UPDATED - Use an email with an attachment to create a Data Source, Load Data, and Run Transform." href="/community?id&#61;community_blog&amp;sys_id&#61;0d3daae5dbd0dbc01dcaf3231f961902" rel="nofollow">UPDATED - Use an email with an attachment to create a Data Source, Load Data, and Run Transform.</a> These solutions were documented many years ago and are now obsolete. This requirement to load data from an email attachment came up the other day. I thought I would post a working solution for <strong>Geneva and beyond</strong> releases.</p>
<p> </p>
<h2>Set up prerequisites to load data from an email attachment</h2>
<ol><li><strong>You must establish an import file/template that will always be used. </strong>
<ul><li>The columns in the spreadsheet must remain the same since it will require changes in ServiceNow to add, change, or remove columns.</li></ul>
</li><li><strong>Your email needs to contain something unique to look for in order to know you want to process the email attachment.   </strong>
<ul><li>In other words you don&#39;t want to be trying to import every email attachment that is sent to your ServiceNow instances.   Options are keywords in the subject or body of the email or even emails from a specific email address.   Again you need something that will be unique about the emails for the inbound email action to look for.</li></ul>
</li><li><strong>You will need to set up the import set table and transform maps.   </strong>
<ul><li>This can be done by manually importing the template as an administrator.   Verify the import generated records in your target table and everything looks good.   This blog isn&#39;t going to cover those steps, but once you can manually import the file, then you can automate that process.
<ul><li>Visit the useful ServiceNow Documentation on <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/import-sets/reference/import-sets-landing-page.html" rel="nofollow">import sets</a>, <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/import-sets/concept/c_ImportSetsKeyConcepts.html" rel="nofollow">import sets key concepts</a>, <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/script/server-scripting/concept/c_CreatingNewTransformMaps.html" rel="nofollow">transform maps</a>, <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/import-sets/reference/r_FileTypeDataSource.html" rel="nofollow">file type data sources</a>, and <a href="https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/import-sets/concept/c_ImportDataUsingImportSets.html?title&#61;Importing_Data_Using_Import_Sets" rel="nofollow">importing data using import sets</a>.</li></ul>
</li><li>You will need to write down or copy/paste a few things once this is set up for use in a script provided in this post.
<ul><li>Name of your import set table - You can get this by refreshing your browser so the application navigator is updated
<ul><li>Navigate to <strong>System Import Sets &gt; Import Set Tables</strong> and there you should see a table that matches what you called your import when loading in the file</li><li>Click the module that matches your table name and when the list shows, click any of the 3-line icons beside the column headers, then Configure, and choose table.</li><li>When the table record shows up, copy down the name value or better yet you can copy the name value and paste it into a temporary text file.</li></ul>
</li><li>SysID of your transform map(s).   This is the transform map that processes data in your import set table and drops it into your target table.
<ul><li>Navigate to <strong>System Import Sets &gt; Administration &gt; Transform Maps</strong> and there you should see a record that matches what you typed in when manually importing your file.</li><li>Right-click on that row and choose <strong>Copy sys_id</strong></li><li>Depending on your browser it may just copy that value into memory and you will need to paste it into a text file to see the value.   Paste it into the temporary text file you used in the prior step.</li><li>If multiple transform maps need to be leveraged, repeat the steps above to capture the additional SysIDs of the transform maps.</li></ul>
</li></ul>
</li></ul>
</li></ol>
<p> </p>
<h2>Automate the processing of the inbound email with the attachment</h2>
<p>Now that you have your email requirements established and your file set up for import, we can now automate the processing of the inbound email with the attachment.   This will involve creating an inbound email action.   To better understand how this works, look over the documentation on <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/notification/concept/c_InboundEmailActions.html" rel="nofollow">inbound email actions</a>, <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/notification/reference/r_AccessingEmailObjsWithVars.html" rel="nofollow">inbound email action variables</a>, <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/notification/task/t_CreatingAnInboundEmailAction.html" rel="nofollow">creating inbound email actions</a>, <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/notification/reference/r_InboundEmailActionExamples.html" rel="nofollow">inbound email action examples</a>, and <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/notification/reference/r_OrderedEmailProcessingPlugin.html" rel="nofollow">inbound email action ordering</a>.</p>
<p> </p>
<h3>Set up your inbound email action</h3>
<ol><li>Navigate to <strong>System Policy &gt; Email &gt; Inbound Actions</strong></li><li>Click <strong>New</strong>.</li><li>Set the following values:
<ul><li>Name: Give it a name that makes sense to you.</li><li>Set the Target table to <strong>Data Source (sys_data_source)</strong>.   This is because we expect these emails to contain an Excel or CSV file and we need to generate a data source with that attachment that can then be imported.</li><li>Set Active to <strong>true</strong></li><li>Set Stop processing to <strong>true</strong> since we don&#39;t want any other inbound email actions to process this email or file.</li></ul>
</li><li>In the When to run section/tab:
<ul><li>You may consider changing the order to a very low or negative number so that other inbound actions don&#39;t process these emails.</li><li>If you are expecting these emails to come from a specific email, you can select the From user.</li><li>Set the condition based on Pre-req 2 above.   Examples are subject contains &#34;file import&#34; or something.   Again this needs to be something unique but something that will always appear in these inbound emails.</li></ul>
</li><li>In the Actions section/tab:
<ul><li>Paste in the following script.
<p>(function runAction(/*GlideRecord*/ current, /*GlideRecord*/ event, /*EmailWrapper*/ email, /*ScopedEmailLogger*/ logger, /*EmailClassifier*/ classifier) {</p>
<p>     </p>
<p>      var importSetTableName &#61; &#34;IMPORT SET TABLE NAME&#34;;</p>
<p>      var transformMapIDs &#61; &#34;SYS-ID(s) OF YOUR TRANSFORM MAP TO UTILIZE&#34;;   //Use a comma to specify multiple transform maps</p>
<p>      var applicatonScope &#61; &#34;Global&#34;;</p>
<p>     </p>
<p>      // Create the datasource record</p>
<p>      current.name &#61; &#34;File import from: &#34; &#43; email.from;   //Feel free to rename this as appropriate</p>
<p>      current.import_set_table_name &#61; importSetTableName;</p>
<p>      current.file_retrieval_method &#61; &#34;Attachment&#34;;</p>
<p>      current.type &#61; &#34;File&#34;;</p>
<p>      current.format &#61; &#34;Excel&#34;; // For Excel Files</p>
<p>      //current.format &#61; &#34;CSV&#34;; // For CSV Files</p>
<p>      current.header_row &#61; 1;</p>
<p>      current.sheet_number &#61; 1;</p>
<p>      current.sys_package.setDisplayValue(applicatonScope);</p>
<p>      current.sys_scope.setDisplayValue(applicatonScope);</p>
<p>      var dataSourceID &#61; current.insert();</p>
<p>     </p>
<p>      /*</p>
<p>        * Schedule Load of Attachment</p>
<p>        *</p>
<p>        * This inbound email action will generate an import data source, however the attachment isn&#39;t copied to the data source until</p>
<p>        * after the insert of the record.   Scheduling the import to happen 30 seconds later so that attachment has time to be copied.</p>
<p>        */</p>
<p>      new global.EmailFileImportUtils().scheduleImport(dataSourceID, transformMapIDs);</p>
<p>     </p>
<p>})(current, event, email, logger, classifier);</p>
</li><li>Set the values of the variables declared in lines 3 and 4 of the script to what you captured in pre-req 3 above.
<ul><li><strong>You can specify multiple Transform Maps by separating them by a comma with no spaces on line 4</strong>.</li></ul>
</li><li>If your file is in CSV format, comment line 12 and uncomment line 13.</li><li>If this inbound action is part of a scoped application or if you are loading data in a scoped application change the variable in line 5 to match the scoped application name.</li></ul>
</li><li>Click <strong>Submit</strong>.</li></ol>
<p> </p>
<h3>Set up your utility script include</h3>
<p>Now we need to create the utility script include that is called by the inbound email action.</p>
<ol><li>Navigate to <strong>System UI &gt; Script Includes</strong></li><li>Click <strong>New.</strong></li><li>Set the following values:
<ul><li>Name: <strong>EmailFileImportUtils</strong></li><li>Accessible from: <strong>All applications scopes</strong> - setting this to all scopes in case you want to use this for a scoped application</li><li>Script: paste in the following:</li><li>
<pre class="language-javascript"><code>var EmailFileImportUtils &#61; Class.create();
EmailFileImportUtils.prototype &#61; {
	initialize: function() {
	},
	
	scheduleImport: function(dataSourceID, transformMapIDs) {
		/*
 		* Create scheduled job to process import
 		*
 		* The inbound email action will generate an import data source, however the attachment isn&#39;t copied to the data source until
 		* after the insert of the record.   The code below will create a scheduled job to process the import 30 seconds later
 		* so that attachment has time to be copied to the data source from the email.
 		*/
		
		var schRec &#61; new GlideRecord(&#34;sys_trigger&#34;);
		schRec.name &#61; &#34;Load Data Source: &#34; &#43; dataSourceID;
		schRec.trigger_type &#61; 0;   // Run Once
		schRec.script &#61; &#34;new global.EmailFileImportUtils().loadImportSet(&#39;&#34; &#43; dataSourceID &#43; &#34;&#39;, &#39;&#34; &#43; transformMapIDs &#43; &#34;&#39;)&#34;;
		
		var nextAction &#61; new GlideDateTime();
		nextAction.addSeconds(30);   // 30 seconds should be enough time however this can be changed.
		schRec.next_action &#61; nextAction;
		schRec.insert();
	},
	
	loadImportSet: function(dataSourceID, transformMapIDs) {
		// Get Datasource Record
		var dataSource &#61; new GlideRecord(&#34;sys_data_source&#34;);
		dataSource.get(dataSourceID);
		
		// If CSV and header isn&#39;t on row 1, recreate attachment with empty rows removed
		if (dataSource.getValue(&#34;format&#34;) &#61;&#61; &#34;CSV&#34; &amp;&amp; dataSource.getValue(&#34;header_row&#34;) &gt; 1) {
			var attachmentRec &#61; new GlideRecord(&#34;sys_attachment&#34;);
			attachmentRec.addQuery(&#34;table_sys_id&#34;, dataSource.getValue(&#34;sys_id&#34;));
			attachmentRec.query();
			if (attachmentRec.next()) {
				var oldAttachmentID &#61; attachmentRec.getValue(&#34;sys_id&#34;);
				var inputStream &#61; new GlideSysAttachment().getContentStream(oldAttachmentID);
				var textReader &#61; new GlideTextReader(inputStream);
				var ln &#61; &#34; &#34;;
				var newLine &#61; &#34;&#34;;
				
				var lineCounter &#61; 0;
				var headerRow &#61; parseInt(dataSource.getValue(&#34;header_row&#34;));
				while((ln &#61; textReader.readLine()) !&#61; null) {
					lineCounter &#43;&#61; 1;
					if (lineCounter &lt; headerRow) {
						continue;
					}
					
					if (ln.length &gt; 1) {
						newLine &#43;&#61; ln &#43; &#34;\n&#34;;
					}
				}
				new GlideSysAttachment().write(dataSource, &#39;Changed &#39; &#43; attachmentRec.getValue(&#39;file_name&#39;), &#34;text/csv&#34;, newLine);
			}
		}		
		
		// Process data source file
		var loader &#61; new GlideImportSetLoader();
		var importSetRec &#61; loader.getImportSetGr(dataSource);
		var ranload &#61; loader.loadImportSetTable(importSetRec, dataSource);
		importSetRec.state &#61; &#34;loaded&#34;;
		importSetRec.update();
		
		// Transform import set
		var transformWorker &#61; new GlideImportSetTransformerWorker(importSetRec.sys_id, transformMapIDs);
		transformWorker.setBackground(true);
		transformWorker.start();
	},
	
	type: &#39;EmailFileImportUtils&#39;
	
};</code></pre>
</li><li>If this inbound action is part of a scoped application or if you are loading data in a scoped application change the variable in line 5 to match the scoped application name.</li></ul>
</li><li>Click <strong>Submit</strong>.</li></ol>
<p> </p>
<p>If data load is part of a scoped application or if you are loading data into a scoped table and changed line 5 in your inbound email action, then you will need to perform the following steps.   If not you can skip to the next step.</p>
<p> </p>
<p>By default the Data Sources table only allows records to be created by the Global scope and since your scoped application needs to create a data source via the inbound email action we need to change that.</p>
<ol><li>Navigate to <strong>System Import Sets &gt; Administration &gt; Data Sources</strong>.</li><li>Click the Additional Actions 3 lined icon beside Data Sources:
<p><img class="image-4 jive-image" style="width: 620px; height: 88px; display: block; margin-left: auto; margin-right: auto;" src="7e8b23f5db981fc03eb27a9e0f961943.iix" alt="data sources.jpg" /></p>
</li><li>Then choose <strong>Configure</strong> and select Table:
<p><img class="image-5 jive-image" style="width: 620px; height: 287px; display: block; margin-left: auto; margin-right: auto;" src="933dc1cadb54130468c1fb651f961901.iix" alt="configure data sources.jpg" /></p>
</li><li>Go to the Application Access Section or tab and check the <strong>Can Create</strong> checkbox.
<p>                      <img class="image-6 jive-image" style="width: 620px; height: 341px; display: block; margin-left: auto; margin-right: auto;" src="42058082db9c5704ed6af3231f961928.iix" alt="can create data source table.jpg" /></p>
</li><li>Click <strong>Update</strong>.</li></ol>
<p> </p>
<p>Now test by sending an email that meets the conditional criteria of your inbound email action with your file. Within a few minutes you should see data populated in your table.   Keep in mind that the out of the box scheduled job called <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/administer/reference-pages/reference/r_MailDiagnostics.html" rel="nofollow">Email Reader</a> runs every two minutes to check for new inbound emails.   This can be changed to run faster, but may cause system performance issues. Once your email is processed it will take another 30 seconds to process the attachment.</p>
<p> </p>
<p>If you would like to set up another inbound email action to process a different file, simply repeat steps 1-5 above.   The script include does not need to be recreated.</p>
<p> </p>
<table border="1"><tbody><tr><td>
<p>Troubleshooting your setup:</p>
<ul><li>All inbound emails are stored in the database and can be viewed by navigating to <strong>System Mailboxes &gt; Received</strong>. Here you can see a copy of the email and the Target field at the top should be a Data Source if things worked correctly.   At the bottom, see the Email Log list that shows which inbound email actions processed the email.</li><li>If the target of the received email is not a data source and your inbound email action is part of a scoped application, check to make sure you changed the Data Source table application access in step 9 above.</li><li>You can view the data source and spreadsheet sent via email by navigating to <strong>System Import Sets &gt; Administration &gt; Data Sources</strong>. You can add the Updated column to your list and sort in descending order to see the latest at the top.   All data sources created by the emails will be named &#34;File import from &#43; the from email address&#34; unless you changed line 8 of the inbound email action script.   Each of the data sources should have the attachment sent via email, if there isn&#39;t one then that is a problem and the cause of the failure.</li><li>You can view all data imported and status of the import by navigating to S<strong>ystem Import Sets &gt; Advanced &gt; Import Sets</strong>.   You can add the Updated column to your list and sort in descending order to see the latest at the top.   Each of the import sets should be in a state of Processed if they were successfully processed.</li><li>You can also view the system logs for any other errors by navigating to <strong>System Logs &gt; System Log &gt; All</strong>.   Make sure you sort the list by Created in descending order and look for any errors during the time of the inbound email processing.</li></ul>
</td></tr></tbody></table>
<p> </p>
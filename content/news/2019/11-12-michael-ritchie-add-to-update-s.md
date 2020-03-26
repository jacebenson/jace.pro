---
title: "Add to Update Set Utility Documentation and Custom Configurations"
date: 2019-11-11T22:37:24.000Z
authors: ["Michael Ritchie"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=dd0d9079db858098d58ea345ca961925"
---
<p><span class="ng-scope"><sn-mention class="sn-mention" table="live_profile" sysid="28ef4a61db581fc09c9ffb651f9619eb"><sn-mention class="sn-mention" table="live_profile" sysid="28ef4a61db581fc09c9ffb651f9619eb">&#64;ben.hollifield</sn-mention> </sn-mention></span><span class="ng-scope">, Co-Founder of Yansa Labs, has been maintaining the very popular <a href="https://developer.servicenow.com/app.do#!/share/contents/9824957_add_to_update_set_utility?t&#61;PRODUCT_DETAILS" rel="nofollow">Add to Update Set Utility</a> in ServiceNow Share. The Add to Update Set Utility is a set of scripts that methodically add related records to an update set &#34;automagically&#34;.  This Utility has been used for several years by 1000&#39;s of customers, partners, and employees.  Behind the scenes when you click the &#34;Add to Update Set&#34; Related Link on a record or List Drop-down Action, it checks a list of pre-defined tables and will not only add the record you are currently viewing, but add other important related records too automatically.  The full list of pre-defined tables can be found in the <a href="https://developer.servicenow.com/app.do#!/share/contents/9824957_add_to_update_set_utility?t&#61;PRODUCT_DETAILS" rel="nofollow">description on Share</a>.  </span><span class="ng-scope">Recently Version 5.0 was released and I wanted to provide additional documentation to various features introduced in this version and highlight a few that were introduced in recent versions. </span></p>
<p> </p>
<p><span style="text-decoration: underline;"><strong><span class="ng-scope">How to use the Add to Update Set Utility:</span></strong></span></p>
<p><span class="ng-scope">Once this utility is loaded into your instance, users with the <span style="text-decoration: underline;">admin role</span> will be able to selectively add records to update sets.  A global &#34;Add to Update Set&#34; UI Action is included with this solution.</span></p>
<ul><li><span class="ng-scope">Form Related Link: This will appear on any record that has &#34;Related Links&#34; towards the bottom of the form.</span></li><li><span class="ng-scope"><img src="https://community.servicenow.com/2aeaa4f1db85c098d58ea345ca9619b8.iix" /></span></li><li><span class="ng-scope">List Drop-down Action: Add to Update Set will also appear as a List Action in the drop down on every list allowing you to add multiple records to an update set as well.</span></li><li><span class="ng-scope"><img src="https://community.servicenow.com/cb3be0f9db85c098d58ea345ca96197d.iix" /></span></li><li>Via Script: in the event you have many records that need to be added to an update set where the List Action isn&#39;t convenient, a Fix or Background script can also be utilized.  Below is a simple example script that will add all active Users to an update set:</li></ul>
<pre class="language-javascript"><code>var user &#61; new GlideRecord(&#34;sys_user&#34;);
user.addQuery(&#34;active&#34;, true);
user.query();
while (user.next()) {
	new global.addToUpdateSetUtils().addToUpdateSet(user);
}</code></pre>
<p> </p>
<p><strong><span style="text-decoration: underline;"><span class="ng-scope">Multiple Application Scope Configurations:</span></span></strong></p>
<p><span class="ng-scope">For those of you familiar with &#34;forcing&#34; or &#34;adding&#34; items to an update set either with the Add to Update Utility or Force to Update and working with multiple Scopes, you know the importance of ensuring the Customer Updates (sys_udpate_xml) are in the right update set.  If not you won&#39;t be able to commit the update set in the target instance since a Preview Problem will appear complaining &#34;Cannot commit Update Set X because: Update scope id &#34;Y&#34; is different than update set scope id &#34;Z&#34;.  </span>I have been partnering with Ben to enhance this useful utility so it also works with multi-scoped applications such as Human Resources Service delivery and I posted a blog article in the HRSD community called <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;77518decdb8d4c586064eeb5ca961947" rel="nofollow">Migrating Configurations via Add to Update Set Utility</a> with more details.</p>
<p>The Add to Update Set Utility accommodates multiple application scopes and inserts records into an update set matching the record&#39;s scope.  As the utility is adding records to the update set, it checks the record&#39;s scope against the currently selected update set for a match.  If the record is in a different scope, the current Update Set record (sys_update_set) is cloned but the Application associated is set to match the record&#39;s scope.  Utilizing Update Set Batching, the update sets are &#34;batched&#34; together for an easier migration.  Please refer to the <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/build/system-update-sets/hier-update-sets/concept/us-hier-overview.html#us-hier-preview" rel="nofollow">Update Set Batching documentation</a> for more details on this feature that was introduced in the Jakarta release.</p>
<p>Note: All instances created since Jakarta have this plugin enabled by default but any instance prior may need to activate this plugin.</p>
<ul><li>If multiple update sets are leveraged by Add to Update set, the original set will be renamed with a &#34;Batch Child&#34; suffix to note that it is a child update set.</li><li>A parent update set will be created of the same name with a &#34;Batch Parent&#34; suffix.  No customer updates will be added to the Parent Update set, only the child update sets.</li><li>Any additional scoped update sets created will have the same name plus &#34;Batch Child&#34; and also linked as children to the &#34;Batch Parent&#34; update set.</li></ul>
<p>Let me provide an example.  Lets say you are working on ITSM enhancements and you have several catalog items that are in the Global application scope and a Virtual Agent Conversation that is in the ITSM Virtual Agent Conversations application scope.  You start by creating a new update set in the Global application scope, lets call it ITSM Release 11/2019.  Then you navigate to each of your catalog items and click the Add to Update Set Related Link to add them to your update set.  Next you navigate to your Virtual Agent conversation by entering sys_cb_topic.list and open the conversation you created and click the Add to Update Set Related Link.</p>
<p><img src="https://community.servicenow.com/e12b6a16db41841cd58ea345ca961991.iix" /></p>
<ul><li>All of the Global catalog item components will be added to the &#39;ITSM Release 11/2019&#39; update set.</li><li>When the Utility attempts to add the Virtual Agent conversation it will detect that record is in the ITSM Virtual Agent Conversations application scope.</li><li>The &#39;ITSM Release 11/2019&#39; update set will be renamed to &#39;ITSM Release 11/2019 Batch Child&#39;</li><li>A new update set will be created in the Global scope (same scope as your original update set) called &#39;ITSM Release 11/2019 Batch Parent&#39; and linked as the parent to the &#39;ITSM Release 11/2019 Batch Child&#39;</li><li>A new update set will be created in the ITSM Virtual Agent Conversations scope called &#39;ITSM Release 11/2019 Batch Child&#39; and also linked as a child to the &#39;ITSM Release 11/2019 Batch Parent&#39; update set.</li><li>Then once you are done adding configurations to your update set, navigate to the &#39;ITSM Release 11/2019 Batch Parent&#39;, mark it complete and then click the Export Update Set Batch to XML Related Link to export a single XML file to import into your target instance.</li><li>Then in your target instance i<span class="ng-scope">n order to <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/build/system-update-sets/hier-update-sets/concept/us-hier-overview.html#us-hier-preview" rel="nofollow">Preview a Batch of Update sets</a>, you must navigate into the &#34;batch base&#34; in order to Preview and Commit it.  Please look for or Add the &#34;Remote Batch Base&#34; column in your Retrieved Update Set list, find &#39;ITSM Release 11/2019 Batch Parent&#39;, and click into it.</span></li></ul>
<p> </p>
<p><strong><span style="text-decoration: underline;">Confirmation Messaging</span>:</strong></p>
<p>The confirmation message after adding a configuration item has been enhanced to provide more information.</p>
<p><img src="https://community.servicenow.com/f1cbe69edb41841cd58ea345ca9619d6.iix" /></p>
<ul><li>Update set(s) utilized - clickable links to all update sets utilized.  This is useful when multiple application scopes are detected while adding configurations to the update set.</li><li>Table list - list of tables from which configurations were pushed to the update set.  This is useful to confirm whether the Add to Update Set Utility includes functionality to include the related components for the configuration you added to an update set.  If a single record was added only one table will be shown.  Please post a comment here or in Share if related components are missing.</li><li>Warnings - the Add to Update Set Utility can really only go so far though certain situations are useful to be warned about:</li><li>
<ul><li>Custom Field Mappings in Catalog Items and HR PDF Templates:</li><li>
<ul><li>If custom &#34;u_&#34; fields are utilized in catalog item variables or HR PDF Templates a warning will appear letting you know.  The linked dictionary records will not be automatically added since these custom fields may already exist in the target instance.  If the custom field is new, you will also need to add that Dictionary (sys_dictionary) record to the update set.</li></ul>
</li><li>Flow being added to an update set on an instance prior to New York.  Prior to the NY release, Flow update sets were comprised of multiple records.  The NY release flattened this out and now a single Customer Update (sys_update_xml) record is created for all the Flow components.  The Add to Update Set Utility will only work for releases NY and greater and will warn you if you are attempting to add a Flow to an update set on an instance prior to NY.</li><li>NLU Model&#39;s Protection Policy is set.  When adding a Virtual Agent Conversation to an update set all the related components including the NLU model will be added.  If the NLU Model&#39;s protection policy is set this means it either came from a Plugin activation or from the ServiceNow Store.  As a result those NLU Models will not be added and you will be warned about that.</li></ul>
</li></ul>
<p> </p>
<p><span style="text-decoration: underline;"><strong>Scope Script Execution</strong></span>:</p>
<p>The Kingston release introduced Restricted Caller Access to scoped applications.  This is an additional security feature that allows administrators of a scoped application to control which applications can access data within that application.  At the Table (sys_db_object) level, you can specify what CRUD (create, read, update, and delete) access other application scopes have on that table.  The Human Resources Service Delivery application for example utilizes this feature to protect data within its application tables.  As a result of these security features, the Add to Update Set Utility was enhanced to execute scope scripts so that configuration from restricted tables can be included in an update set.  The Global scoped addToUpdateSetUtils Script Include will query for other addToUpdateSetUtils Script Includes in other application scopes and execute the checkTable function within those scripts.  This gets around the security since queries to the restricted tables are being executed within that same scope.</p>
<p>The Add to Update Set Utility on ServiceNow Share includes pre-built functionality for the Human Resources and Employee Service Center capabilities.  This is a separate update set called &#34;Add to Update Set HR v1.0.xml&#34; that you can find in the Related Files section in Share.</p>
<p>If you have a custom application that has similar application access restrictions, you can create your own addToUpdateSetUtils Script Includes in the proper scope and the Global addToUpdateSetUtils Script Include will leverage that script.  Please use the HR scripts as examples where you include a checkTable() function that will then call sub-functions based on table name.</p>
<p> </p>
<p><strong><span style="text-decoration: underline;">Custom Script Execution</span>:</strong></p>
<p>The ability to call custom scripts has included in the latest version.  This is useful for the following use cases and many more:</p>
<ul><li>You need to modify a value in a record prior to it being included in an update set.  Example: You create a knowledge or other record that has a reference to a User and you want to prevent an error in the target instance where that user may not exist in the target.  You can leverage custom script to intercept this and modify the record prior to inserting into the update set.</li><li>You have custom tables and relationships with out of the box tables and you also want to include those records in your update set.</li><li>You have custom configurations with dependencies that you wish to automate pushing into update sets.</li></ul>
<p>In the saveRecord() function of the Global addToUpdateSetUtils you will see code that will look for an execute Script Includes named addToUpdateSetUtilsCustom.  These are optional scripts you can create within your instance to add custom processing to the Add to Update Set Utility.  If you have application access restrictions setup you can create multiple addToUpdateSetUtilsCustom Script Includes in your various application scopes.  Below is a very simple example script that I utilize internally to set the user fields in a knowledge record to out of the box demo users.</p>
<pre class="language-javascript"><code>var addToUpdateSetUtilsCustom &#61; Class.create();
addToUpdateSetUtilsCustom.prototype &#61; {
	initialize: function() {
	},
	
	checkTable: function(tableRec) {
		/*
		 * If the table extends another table and you prefer to get all extensions, uncomment the default processParentTable &#61; true and the if
		 * statement below it and set the table and function.
		 */
		
		var continueProcessing &#61; true;
		var processParentTable &#61; false;
		
		var tableName &#61; tableRec.getTableName();
		switch (tableName) {
			case &#34;table_name&#34;:
				this._addCustomRecord(tableRec, tableName);
				continueProcessing &#61; false;
				break;
			default:
				processParentTable &#61; true;
				break;
		}
		
		if (processParentTable) {
			// Check for table needs at parent table level
			var tableBase &#61; new global.addToUpdateSetUtils()._getTableBase(tableName);
			switch (tableBase) {
				case &#34;kb_knowledge&#34;:
					this._cleanKBFields(tableRec, tableName);
					break;
			}
		}
		
		return continueProcessing;
	},
	
	//Sanitize KB fields
    _cleanKBFields: function(tableRec, tableName) {
        var adminSysID &#61; &#34;6816f79cc0a8016401c5a33be04be441&#34;; // User System Administrator&#39;s sys_id
		
		if (tableRec.isValidField(&#34;modified_by&#34;)) {
			tableRec.modified_by &#61; adminSysID;
		}
		
		if (tableRec.isValidField(&#34;author&#34;)) {
			tableRec.author &#61; adminSysID;
		}
    },
	
	_addCustomRecord: function(tableRec, tableName) {
		/* Add custom code here
		 * To add a record to the update set include the following:
		 * this._addToSet(tableRec);
		*/
	},
	
	_addToSet: function(tableRec) {
		//Must set the third parameter to false to prevent an infinite loop
		new global.addToUpdateSetUtils().saveRecord(tableRec, true, false);
	},
	
	type: &#39;addToUpdateSetUtilsCustom&#39;
};</code></pre>
<ul><li>Within the checkTable() function be sure to set the continueProcessing variable to false with each match so that the Global addToUpdateSetUtils will stop processing custom scripts if a match is found.</li><li>In the example above, you have the ability to look for table extensions and have a single function for the inherited tables.  This is useful for situations where you are adding records of extended tables.  You will see that processParentTable is set to true in the default portion of the switch statement if no other matches were found and it will check the table extensions for a match.</li><li>It is important to copy the _addToSet() function from this example.  As noted you must pass &#34;false&#34; as the last parameter of the API call back to the Global addToUpdateSetUtils otherwise you will encounter an infinite loop situation.  This parameter basically tells the addToUpdateSetUtils to not process custom scripts again. </li></ul>
<p> </p>
<p><span style="text-decoration: underline;"><strong>Executing a Script After Loading an Update Set</strong></span>:</p>
<p>After an update set is committed in a target instance, sometimes you may need to execute a script in that instance.  This is often done with <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/build/applications/concept/c_FixScripts.html" rel="nofollow">Fix Scripts</a> where the Fix Script is included in the update set and then someone manually executes that script after the update set is loaded.  An example on where this may be required is if you add a new required field to a form and you need to backfill all of the existing records with a value.</p>
<p>Included in the latest version is a stub function called addScheduledJob() that allows you to dynamically add a Scheduled Job (sys_trigger) record to the update set. This was added because NLU Models were included in the latest release.  When migrating NLU Models, even though the model may be published in the source instance, it is loaded in an unpublished state in the target instance.  This is because you must Train and then Publish the NLU Model in each instance.  Since those are API calls that you can execute via script, this process is automated by the Add to Update Set Utility.  The use of this function is leveraged in the _addNLUModel() function where a Scheduled Job is added dynamically to the update set to Publish the NLU Model.</p>
<ul><li>There is no way to control the order in which Customer Updates (sys_update_xml) records are loaded in the target instance.</li><li>To get around this a Scheduled Job is included which is set to execute immediately when it is committed in the target instance.  This Scheduled Job&#39;s purpose is to create another Scheduled Job that will then run 60 seconds later - something we can control.  Idea is the update set shouldn&#39;t take longer than 60 seconds to load and thus the NLU Model should be committed by the time the second Scheduled Job executes which will then Train and Publish the NLU Model.</li></ul>
<p>This same construct can certainly apply to other situations so I wanted to call out that this feature exists.  Feel free to look at the example code within the _addNLUModel() function and leverage it yourself in addToUpdateSetUtilsCustom Script Includes.  I will admit I struggled with the fact that a script is executing a script and all the quotation escaping situations so it could probably be refactored in a future release.  If you have any better ideas please post them in comments below.</p>
<p>Enjoy!</p>
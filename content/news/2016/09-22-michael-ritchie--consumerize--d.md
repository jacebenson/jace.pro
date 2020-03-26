---
title: "Consumerize Data Imports to NonServiceNow Administrators"
date: 2016-09-22T01:46:07.000Z
authors: ["Michael Ritchie"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=341eae2ddbd0dbc01dcaf3231f961994"
---
<p>During my tenure at ServiceNow, I have always stressed the importance of &#34;data-driven&#34; code.   What I mean is make workflows, business rules, etc dependent on tables and records in ServiceNow that can be maintained outside of your internal enhancement release process.   In other words, I shouldn&#39;t have to promote code to change something as simple as an approver in a workflow.   I find that ServiceNow Administrators are often bogged down maintaining data instead of enhancing the process to be more efficient and save time.   Examples:</p>
<ul><li>Use the task&#39;s configuration item whenever possible to store important process attributes for that particular item.   In a workflow &#34;dot-walk&#34; to the Task&#39;s CI for things like Approval Group, Support Group, Owned By, Location, etc and leverage those attributes instead of hard coding the values in a workflow or code.</li><li>Create your own custom tables to store data in support of your process.   Does the incident category really need to be a choice type field that only admin&#39;s can add choices?   No!   You can easily create a custom category table and change the category field to be a reference instead.   Then create ACL&#39;s to allow users to maintain this data for you.</li><li>Don&#39;t be afraid to add attributes to out of the box tables like locations and departments.   I have seen cases where locations have a specific support group for that campus, building, or floor.   Instead of creating code to determine the group based on the location in the task, simply add a Support Group attribute to the location record that can be maintained outside of code and use that in your workflows and code.</li></ul>
<p> </p>
<p>Coding in this way takes more time up front to do the right look-ups, but it will save you a ton of time in the long run and make your ServiceNow administrators happy.   Plus you will have the ability to &#34;delegate&#34; the maintenance of this data to people outside the ServiceNow Administration group if you so choose.   I cringe every time I hear of administrators being asked to manually make changes to data in ServiceNow &#34;just because&#34; they are the only users that have access to update that data.   Mistakes can and will happen!   So instead, modify the ACL&#39;s, create access, etc for the users that own that data to do it themselves.</p>
<p> </p>
<p><span style="text-decoration: underline; font-size: 12pt;"><strong>Easy Import</strong></span>:</p>
<p>I am sure this all sounds good, but I commonly get a follow up question... how can non-administrators maintain data in these custom tables, especially if there are a lot of rows to maintain?   The answer is usually to import a spreadsheet.   Unfortunately data imports in ServiceNow are an admin function and import sets can be very confusing to setup.   The Fuji release introduced &#34;Easy Import&#34; where it will automatically create an import and update template for you:</p>
<p><a title="http://wiki.servicenow.com/index.php?title&#61;Easy_Import#gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Easy_Import#gsc.tab&#61;0" rel="nofollow">http://wiki.servicenow.com/index.php?title&#61;Easy_Import#gsc.tab&#61;0</a></p>
<p> </p>
<p><img class="image-9 jive-image" style="max-width: 1200px; max-height: 900px;" src="18a0c5c6db9c9304b322f4621f961917.iix" alt="" /></p>
<p> </p>
<p>Unfortunately the Easy Import feature is only available to administrators out of the box, but this can be changed.   Navigate to System UI \ UI Context Menus and search for name &#61; Import and open the record.</p>
<p><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="cb492d82db98d7041dcaf3231f96192c.iix" alt="" /></p>
<p> </p>
<p>You will see this is a global action that available to anyone with the &#39;admin&#39; role (see the condition).   If you want to make this feature available on a specific table, you can easily clone this record and set it for a specific table and a specific role.   Simply change the table from Global to your specific table and then change the condition to something more appropriate:</p>
<p>Condition Example: gs.hasRole(&#39;YOUR-CUSTOM-ROLE&#39;) &amp;&amp; !ListProperties.isRelatedList() &amp;&amp; !ListProperties.isRefList()</p>
<p> </p>
<ul><li>gs.hasRole(&#39;YOUR-CUSTOM-ROLE&#39;) part of the condition checks the logged in user&#39;s roles to see if it matches the role between the quotes.</li><li>!ListProperties.isRelatedList() part of the condition prevents this action from showing on up related lists.</li><li>!ListProperties.isRefList() part of the condition prevents this action from showing up on reference list popups.</li></ul>
<p> </p>
<p>You may also want to change the name from Import to something else because the administrators will see duplicate actions when they are logged in and this way they know which one is which.   Then click Additional Actions &gt; Insert.   Once this is done non-administrators will now have access to Easy import for your specific table.</p>
<p> </p>
<p><span style="text-decoration: underline; font-size: 12pt;"><strong>Even Easier Import</strong></span>:</p>
<p>Now truth be told, while Easy Import is an awesome feature, it can still be somewhat confusing especially to non-technical people.   By default it also allows for inserting and updating of every field on the table.   What if you wanted to simply provide a locked down excel import template with a fixed list of columns and allow them to import data into ServiceNow?   Again out of the box importing spreadsheets is an admin function, but fortunately there is another way... Service Catalog Record Producers.   Record Producers are a very powerful platform feature that have many uses.   They are great because they are accessible from the Service Catalog that all users have access to, you can utilize User Criteria to restrict/enable access to them, put data into any table in ServiceNow, and they can call a script.</p>
<p> </p>
<p>In order to make this write up easier, I am choosing to walk you through importing data into an out of the box table.   But the concept of creating an import template that is loaded by a record producer can be applied to any table in ServiceNow as the process and code is very similar.   Lets first start with a use case to set the context of what I will be walking you through...</p>
<p> </p>
<p>During conversations about incident and change management, customers often ask &#34;how can I associate an incident or change to 100s to 1000s of CIs&#34;.   The Affected CI related list is the best out of the box solution allowing you to list all of those CI&#39;s.   The Geneva release introduced a <a title="ocs.servicenow.com/bundle/geneva-it-service-management/page/product/change_management/task/t_AssociateMultipleCIs.html" href="https://docs.servicenow.com/bundle/geneva-it-service-management/page/product/change_management/task/t_AssociateMultipleCIs.html" rel="nofollow">new UI to add affected CI&#39;s</a> to a change record and this can certainly be <a title="ocs.servicenow.com/bundle/geneva-it-service-management/page/product/change_management/task/t_ExtendMultipleCIAssociation.html" href="https://docs.servicenow.com/bundle/geneva-it-service-management/page/product/change_management/task/t_ExtendMultipleCIAssociation.html" rel="nofollow">extended to other tables</a> like incident and problem, but sometimes importing a spreadsheet of CI&#39;s can be easier especially if this is a change that you perform on a recurring basis.</p>
<p> </p>
<p>The steps below will walk you through the necessary pieces to make this work: Import Set table, transform map, and record producer.   Once complete, users will be able to access this feature from the service catalog to download the import template and be prompted for the task to associate the list of CI.   The final solution will look like this:</p>
<p><img class="image-27 jive-image" style="max-width: 1200px; max-height: 900px;" src="8d3ed1cedb5c1b04ed6af3231f961984.iix" alt="" /></p>
<p> </p>
<ul><li>First we need to create the import set staging table and transform map.   I won&#39;t be going into every detail about import sets since it is <a title="ocs.servicenow.com/bundle/helsinki-servicenow-platform/page/administer/import-sets/concept/c_ImportSets.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/administer/import-sets/concept/c_ImportSets.html" rel="nofollow">well documented.</a>
<ul><li>Create the import template that you would like your users to utilize.   Name your columns in words that the end users will understand.
<ul><li>In my example use case, I created an Excel spreadsheet with one column for the Configuration Item, though again you can add any number of columns to the spreadsheet.   Since I don&#39;t want the users to have to enter the change number 100s to 1000s of time on the spreadsheet, I will prompt for the Task in a record producer variable.
<ul><li><img class="image-2 jive-image" style="max-width: 1200px; max-height: 900px;" src="b4678d86db541b04ed6af3231f9619d1.iix" alt="" /></li></ul>
</li><li>Populate the spreadsheet with test data and save the spreadsheet somewhere on your computer.</li></ul>
</li><li>Navigate to System Import Sets \ Load Data.   Choose Create table, name your import set table and then choose your import template.
<ul><li><img class="image-3 jive-image" style="max-width: 1200px; max-height: 900px;" src="936f9ccedbd85304b322f4621f9619e7.iix" alt="" /></li></ul>
</li><li>Click <strong>Submit</strong>.   ServiceNow will automatically create an Import Set staging table for you and import the data from the spreadsheet.
<ul><li><img class="jive-image image-10" style="max-width: 1200px; max-height: 900px;" src="ac60608adbd85344e9737a9e0f9619d4.iix" alt="" /></li></ul>
</li><li>Once complete, click <strong>Loaded data</strong>.   Since we are prompting for the Task in the record producer, we need a place to store the task ID so we need to add a new field to the import set table.
<ul><li><img class="image-11 jive-image" style="max-width: 1200px; max-height: 900px;" src="9a6dbbb9db185704ed6af3231f961984.iix" alt="" /></li></ul>
</li><li>While viewing the import set table, Affected CI Imports in my use case, click on one of the &#34;hamburger&#34; icons beside one of the column headers, then Choose <strong>Configure</strong>, and finally <strong>Table</strong>.
<ul><li><strong><img class="image-26 jive-image" style="max-width: 1200px; max-height: 900px;" src="626db735dbd4d3041dcaf3231f9619f1.iix" alt="" /></strong></li></ul>
</li><li><strong>Write down</strong> the Name of your import set table since you will need it later in the setup.</li><li>Click <strong>New</strong> in the Columns section to create a new field.
<ul><li><img class="image-13 jive-image" style="max-width: 1200px; max-height: 900px;" src="e171290edb94d7041dcaf3231f96195e.iix" alt="" /></li></ul>
</li><li>Enter the following information:
<ul><li>Type: <strong>String</strong></li><li>Column label: <strong>Task ID</strong></li><li>Column name: <strong>u_task_id</strong>
<ul><li><strong><strong>Write down</strong> </strong>the name of your new column since you will need it later in the setup<strong>.</strong></li></ul>
</li><li>Max length: <strong>40</strong></li></ul>
</li><li>Click <strong>Submit</strong> to create the new field.</li><li>Click <strong>Update</strong> on the Affected CI Import table record so you are taken back to the Affected CI Imports list of imported records.
<ul><li><img class="image-16 jive-image" style="max-width: 1200px; max-height: 900px;" src="b84a740adb9cdfc068c1fb651f961924.iix" alt="" /></li></ul>
</li><li>Click <strong>Transform Maps</strong> under Related Links on the Affected CI Imports list so we can create a new transform map for this new table.</li><li>Since we don&#39;t have a transform map yet the list will be empty, but Click <strong>New</strong> to create a new Transform Map.</li><li>Name your Transform Map and set the Target Table.   In my example use case the target table is CIs Affected (task_ci).   All other fields can remain default.
<ul><li><img class="image-5 jive-image" style="max-width: 1200px; max-height: 900px;" src="7a0f3ff5db18d3041dcaf3231f96191f.iix" alt="" /></li></ul>
</li><li>Click <strong>Mapping Assist</strong> under Related Links.
<ul><li>If your spreadsheet column names match the field labels, you can click Auto Map Matching Fields instead which will automate the creation of field maps.</li><li>Don&#39;t click the submit button because that will require extra steps to further create the field maps.</li></ul>
</li><li>Map your source fields to the target table fields.   In my example use case there are two field maps: Configuration Item to Configuration Item and Task ID to Task.
<ul><li><img class="jive-image image-14" style="max-width: 1200px; max-height: 900px;" src="4b9f3735db985704ed6af3231f96196c.iix" alt="" /></li></ul>
</li><li>Click <strong>Save</strong>.</li><li>Since the Configuration Item field is a reference you can make further adjustments like setting whether to create a record in the reference table if the CI in the spreadsheet isn&#39;t found in the CMDB.   We don&#39;t want that to happen, so lets edit the field map.   More details can be found here: <a title="http://wiki.servicenow.com/index.php?title&#61;Creating_New_Transform_Maps#Creating_a_Field_Map" href="http://wiki.servicenow.com/index.php?title&#61;Creating_New_Transform_Maps#Creating_a_Field_Map" rel="nofollow">Creating New Transform Maps - ServiceNow Wiki</a>
<ul><li>In the Field Maps related list at the bottom, click &#34;u_configuration_item&#34; to edit this record.
<ul><li><img class="image-15 jive-image" style="max-width: 1200px; max-height: 900px;" src="d83e598adb5cd344e9737a9e0f961966.iix" alt="" /></li></ul>
</li><li>Set Choice Action to <strong>reject</strong> since in our example use case we don&#39;t want to process this CI in the event the CI entered in the spreadsheet is not valid.
<ul><li>In other use cases you may want to set it to Ignore if you have additional columns in your spreadsheet and you want to process the row but just ignore the invalid value in the one column.</li><li>Other cases you may want to create a record in the target table so you can choose create.</li><li>You may also find the Referenced value field name attribute useful. In my example use case I am expecting the CI&#39;s name to match a record in the CMDB but what if you prefer to enter the CI&#39;s serial number or asset tag instead.   You can enter the column name (database column name, not label name) in this field and it will perform a lookup against that field instead of the default name.</li><li><img class="jive-image image-8" style="max-width: 1200px; max-height: 900px;" src="b4a3a10adb1cd304b322f4621f96199f.iix" alt="" /></li></ul>
</li><li>Click Update.</li></ul>
</li><li>Click the &#34;hamburger&#34; <strong>Additional Actions</strong> button and choose Copy sys_id and <strong>paste this into a text file because we will need it later in the setup</strong>.</li><li>If multiple transform maps need to be leveraged, repeat the steps above to capture the additional sys_id&#39;s of the transform maps.</li><li>We are now done with the Import Set Components.</li></ul>
</li><li>Second we need to create a Service Catalog Record Producer for users to access from the catalog that will provide a link to download the import template as well as prompt for the task to link the list of CI&#39;s.   The approach will be that the record producer will create a Import Set Data Source record with the Excel Import file attached to it.   The record producer script will automatically execute the processing and transforming of the excel file.
<ul><li>Navigate to Service Catalog \ Catalog Definitions \ Record Producers and click <strong>New</strong>.
<ul><li><img class="image-17 jive-image" style="max-width: 1200px; max-height: 900px;" src="660c548adb9c17049c9ffb651f9619e9.iix" alt="" /></li></ul>
</li><li>Set the Name and Short description to something that will make sense to your users, in my example I am setting both to &#34;Affected CI Import&#34;.</li><li>Set the Table name to Data Source (sys_data_source).
<ul><li><img class="image-19 jive-image" src="ff4925cadb505b04ed6af3231f9619d9.iix" alt="" /></li></ul>
</li><li>For easy access and administration we will attach the import template directly to this record producer.   Either drag and drop your Excel import template into your browser or click the paperclip to browse for it.
<ul><li><img class="image-20 jive-image" style="max-width: 1200px; max-height: 900px;" src="9167cd4edb549f048c8ef4621f961989.iix" alt="" /></li></ul>
</li><li>Right-click on your attachment and choose Copy link address in Chrome or Copy link location in Firefox, etc.</li><li>Now that we have the URL for the import template, we can add a clickable link in the Description text.
<ul><li><img class="jive-image image-21" style="max-width: 1200px; max-height: 900px;" src="776f548edb9c9fc03eb27a9e0f9619cd.iix" alt="" /></li></ul>
</li><li>Set the Description to provide instructions for your users.   In my example description, step 1 includes a step to download the template by &#34;clicking here&#34;.   We can make the click here a clickable link.</li><li>After entering the description text, highlight the text you want to make the clickable link to download the template and then click the Insert/edit link button.
<ul><li><img class="image-22 jive-image" style="max-width: 1200px; max-height: 900px;" src="2b0fb37ddb585704ed6af3231f96195f.iix" alt="" /></li></ul>
</li><li>Paste in the URL into the URL field and then click <strong>OK</strong>.
<ul><li><img class="jive-image image-18" style="max-width: 1200px; max-height: 900px;" src="2e19f7b9db545704ed6af3231f961988.iix" alt="" /></li></ul>
</li><li>Click the Accessibility tab and choose the Catalog(s) that you want this Record Producer to be in along with the category within that catalog.
<ul><li><img class="image-23 jive-image" style="max-width: 1200px; max-height: 900px;" src="e1a32986db90df048c8ef4621f9619a4.iix" alt="" /></li></ul>
</li><li>Click the &#34;hamburger&#34; Additional Actions button and choose Save so we can add the Task reference variable.</li><li>Scroll to the bottom of the form to the Variables related list and click <strong>New</strong>.
<ul><li><img class="image-24 jive-image" style="max-width: 1200px; max-height: 900px;" src="38a0c54adb9097049c9ffb651f961926.iix" alt="" /></li><li><img class="jive-image image-25" style="max-width: 1200px; max-height: 900px;" src="5d60e04adb5057049c9ffb651f9619e8.iix" alt="" /></li></ul>
</li><li>Set the following fields:
<ul><li>Type (Top of form): <strong>Reference</strong></li><li>Mandatory (Top of form): <strong>true</strong></li><li>Question (Question Section): <strong>Task Number</strong></li><li>Name (Question Section): <strong>task_number</strong></li><li>Reference (Type Specifications Section): <strong>Task (task)</strong>
<ul><li>You could specify a specific type of task like change_request</li><li>You could also specify a Reference qualifier condition such as active is true</li></ul>
</li></ul>
</li><li>Click <strong>Submit</strong>.</li><li>Now we need to set the script to run when the record producer is submitted.   Go back to the What it will contain tab and scroll to the script and paste in the following script.   The script has embedded comments to explain what everything is doing.</li></ul>
</li></ul>
<pre class="language-javascript"><code>// Set the following variables with the name of your import set table and task id column
var importSetTableName &#61; &#34;u_affected_ci_&#34;;
var importSetTaskIDFieldName &#61; &#34;u_task_id&#34;;
var transformMapIDs &#61; &#34;SYS-ID(s) OF YOUR TRANSFORM MAP(s) TO UTILIZE&#34;;   //Use a comma to specify multiple transform maps

// Setup data source for attachment
current.name &#61; &#34;Affected CI Import for:   &#34; &#43; producer.task_number.getDisplayValue();
current.import_set_table_name &#61; importSetTableName;
current.file_retrieval_method &#61; &#34;Attachment&#34;;
current.type &#61; &#34;File&#34;;
current.format &#61; &#34;Excel&#34;;
current.header_row &#61; 1;
current.sheet_number &#61; 1;
current.insert();

// Process excel file
var loader &#61; new GlideImportSetLoader();
var importSetRec &#61; loader.getImportSetGr(current);
var ranload &#61; loader.loadImportSetTable(importSetRec, current);
importSetRec.state &#61; &#34;loaded&#34;;
importSetRec.update();

// Update processed rows with task sys_id
var importSetRow &#61; new GlideRecord(importSetTableName);
importSetRow.addQuery(&#34;sys_import_set&#34;, importSetRec.sys_id);
importSetRow.query();
while (importSetRow.next()) {
       importSetRow[importSetTaskIDFieldName] &#61; producer.task_number;
       importSetRow.update();
}

// Transform import set
var transformWorker &#61; new GlideImportSetTransformerWorker(importSetRec.sys_id, transformMapIDs);
transformWorker.setBackground(true);
transformWorker.start();

// Take user to task
gs.addErrorMessage(&#34;Data import may take time load, please reload record to see all the Affected CIs.&#34;);
var redirectURL &#61; &#34;task.do?sys_id&#61;&#34; &#43; producer.task_number;
producer.redirect &#61; redirectURL;

// Since we inserted data source already, abort additional insert by record producer
current.setAbortAction(true);</code></pre>
<p> </p>
<ul><li><ul><li><strong>Set lines 2-4 within the script</strong> using the information you copied down in the earlier steps.   If you were following along and naming everything exactly as I provide in these instructions the importSetTableName and importSetTaskIDFieldName variables should be similar, but you will need to paste in the SysID of the transform map you created.</li><li>Click <strong>Update</strong>.</li><li>Additional ideas for you is to create a Catalog Client Script that will ensure there is an attachment on the record producer before proceeding.   Check the community for solutions on how to do this.</li></ul>
</li><li>You have now completed creating the record producer.</li></ul>
<p> </p>
<p>Now its time to test!   Cross your fingers that you followed along closely and that this will work on the first try.</p>
<ul><li>Navigate to the Service Catalog and to the category you chose to add your record producer and click it.
<ul><li>Or feel free to open the record producer again and click Try it.</li></ul>
</li><li>Be sure to test that the template download link works.</li><li>Choose a task you want to test with, attach a completed import template with a list of Configuration Items</li><li>Click Submit.</li><li>It will take a few seconds to start the processing of the data load but the record producer script will take you to the task you chose so you can view the list of Affected CI&#39;s that were imported.   As noted in the message at the top of the screen, it may take several seconds to process the entire data load so reloading the record may be required to validate.</li></ul>
<p> </p>
<p>Hopefully you found this useful.   Again I chose to use an out of the box table as an example, but these steps can be applied to any table in ServiceNow.   The record producer script is generic enough to plugin in your own tables and additional steps.   Enjoy!</p>
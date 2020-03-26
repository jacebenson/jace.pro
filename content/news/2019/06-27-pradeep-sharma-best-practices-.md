---
title: "Best Practices for CMDB Data Integration"
date: 2019-06-27T03:16:29.000Z
authors: ["Pradeep Sharma"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=7e3fb6d5db5afb00fece0b55ca9619e3"
---
<p>If you are building a scoped application for the <a href="https://store.servicenow.com/sn_appstore_store.do" rel="nofollow">store</a> and have got the use case for CMDB Data integration, you should refer to this blog post. In this post, I will walk you through the best practice on how developers should think about ServiceNow data model, setting up transform maps, calling IRE as well as some scripting required before transform maps are executed. The best practice applies equally to customers doing a custom import of data into the CMDB.</p>
<p style="text-align: center;"><strong><em>Note:</em></strong> <em>In order to successfully pass the CMDB Scoped <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;259dea69dbd0dbc01dcaf3231f961969" rel="nofollow">App certification</a> process for NY and onwards for new Apps, it is highly advisable that new developers should follow the best practice outlined in this document and leverage IRE for inserts and updates. This document is subject to changes as we improve and add new features in the future.</em></p>
<h3 class="ng-scope"><strong>What&#39;s IRE?</strong></h3>
<p>The Identification and Reconciliation module provides a centralized framework for identifying and reconciling data from different data sources. It helps maintain the integrity of the CMDB when multiple data sources such as Event Management, Discovery, ImportSets, and manual entry are used to create and update CI records.</p>
<ul><li>It helps you prevent duplication of CI records, reconcile CI attributes, reclassify CIs, and allow only authoritative data sources to update the CMDB.</li><li>It ensures the best match/insert performance and results in the best data quality.</li></ul>
<h1><strong>3 Steps to CMDB Data Integration:</strong></h1>
<ol><li>Activate IRE Plugin</li><li>Identify the ServiceNow CMDB data model</li><li>Using Import Set w/ IRE OR Scripted IRE</li><li>
<ul><li>Import Set w/ IRE insert into a single table and not inserting relationships</li><li>Scripted IRE to insert more complex data set which may include relationships</li></ul>
</li></ol>
<h2 class="ng-scope">Activate IRE Plugin</h2>
<p>Install the plugin Configuration Management For Scoped Apps CMDB <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/task/activate-cmdb-scoped-apps.html" rel="nofollow">(com.snc.cmdb.scoped)</a> which enables scoped apps access to Identification Engine APIs. Please also make sure that this plugin is captured as a <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;f7dcaa65dbd0dbc01dcaf3231f96196b" rel="nofollow">dependency </a>in a scoped application.</p>
<h2 class="ng-scope">Identify the ServiceNow CMDB data model</h2>
<p>Understand the different types of entities that your application is collecting (Switches, Servers, Applications, Printer, IoT devices, etc.) and how that fits into the ServiceNow data model. This document <a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/configuration-management/concept/c_ConfigurationManagementDatabase.html" rel="nofollow">(link) </a>describes the ServiceNow CMDB data model, key identification requirement and overall guidelines.</p>
<p>Also please make sure to document the model mapping as part of design documentation (submitted when an app is submitted for app certification). </p>
<p style="text-align: center;">Note:<em> Do not create/extend new classes without first taking to ServiceNow. If we don’t find a fit in the existing class, we will either create a new OOB class or give you an exception in some instances</em></p>
<h2 class="ng-scope">Using the Import Set With IRE</h2>
<p>Import Set w/ IRE is intended for cases where users are comfortable using Import Set but do not need to insert relationships (please refer to ServiceNow CMDB data model doc to figure out which table to export to). Note: Madrid added support for IRE in Import Set and NY further enhanced with the ability to leverage IRE for heterogenous CMDB classes.</p>
<p>We will be using a simple example of a .xlsx file that contains both Windows and Linux to walk through the example of correctly using Import Set w/ IRE to accomplish this task. The below example depicts a simple situation where the original is in flat file format (csv in the case but the same principle applies for formats such as XML, JSON that will end up in the tabular form in SN temp table). The file contains a record per row with Serial, Name, and OS as the header.</p>
<p><strong>Create a .csv file with the Original Data mentioned below:</strong></p>
<table style="width: 150px; height: 150px;" cellspacing="2" cellpadding="2"><tbody><tr style="height: 40.9688px;"><td style="height: 40.9688px;">Serial</td><td style="height: 40.9688px;">Name</td><td style="height: 40.9688px;">   OS</td></tr><tr style="height: 40.9688px;"><td style="height: 40.9688px;">LS991B  </td><td style="height: 40.9688px;">ABC  </td><td style="height: 40.9688px;"> Windows</td></tr><tr style="height: 41px;"><td style="height: 41px;">EE884A</td><td style="height: 41px;">YYZ</td><td style="height: 41px;"> Linux</td></tr><tr style="height: 41px;"><td style="height: 41px;">LS991B</td><td style="height: 41px;">ABC</td><td style="height: 41px;"> Windows Server</td></tr></tbody></table>
<p> </p>
<p>1. The first step is to understand where the data is located and to upload the data through the Data Source mechanism. In this example, we had a .xlsx file but customers can also connect to 3rd party systems using JDBC, XML, JSON as well as HTTP, FTP endpoints.</p>
<p>2. Once we have selected by <a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/import-sets/task/t_CreateNewDataSource.html" rel="nofollow">data source,</a> local .xlsx file in this example, next we need to create a transform map to map the data in the staging table into CDMB data fields. After the initial data load piece, you will need to select Create transform map, you have options to look at the import sets, go through data or go through the log as well.</p>
<p>3. Once you get the transform map screen, you will need to select a Target Table – in this case since we have multiple classes in the data, we will select CMDB_CI. In cases, where you have a single class to map to, you can select the specific class.</p>
<p>4. Next, you will need to manually add “MySource” (MySource here refers to the ScopedApp name) choice list record or execute the script from System Definition -&gt; Scripts – Background in the global scope. </p>
<pre class="language-javascript"><code>var discoverySource &#61; &#39;MySource&#39;;//update this with the name of your Scoped App name.
    var gr &#61; new GlideRecord(&#39;sys_choice&#39;);
    gr.addQuery(&#39;element&#39;, &#39;discovery_source&#39;);
    gr.addQuery(&#39;name&#39;, &#39;cmdb_ci&#39;);
    gr.addQuery(&#39;value&#39;, discoverySource);
    gr.query();
    if (!gr.hasNext()) {
        var grNew &#61; new GlideRecord(&#39;sys_choice&#39;);
        grNew.initialize();
        grNew.setValue(&#39;element&#39;, &#39;discovery_source&#39;);
        grNew.setValue(&#39;name&#39;, &#39;cmdb_ci&#39;);
        grNew.setValue(&#39;value&#39;, discoverySource);
        grNew.setValue(&#39;label&#39;, discoverySource);
        if (!grNew.insert()) {
            gs.info(&#39;Adding discovery source failed for: &#39; &#43; discoverySource);
        }
    }
</code></pre>
<p>5. Next, you will need to select the Transform Script tab and add create one OnStart and OnBefore script as mentioned below</p>
<p>6. The code to add to OnStart is as follows: This code is to flag an error message if the plugin &#34;com.snc.cmdb.scoped&#34; is not activated.</p>
<pre class="language-javascript"><code>var pGr &#61; new GlideRecord(&#39;sys_plugins&#39;);
pGr.addQuery(&#39;source&#39;, &#39;com.snc.cmdb.scoped&#39;);
pGr.query();
if (!pGr.next()) {
error_message &#61; &#39;Configuration Management For Scoped Apps CMDB (com.snc.cmdb.scoped) plugin is not installed.&#39;;
error &#61; true;
}
</code></pre>
<p>7. The code to add to OnBefore is as follows. This script adds a new API to the code for your transform that automatically create IRE payload. Without this script, you will be unable to leverage IRE. This requires a simple copy and paste of script mentioned below and modify the “MySource” to match what you named your source in the previous step.</p>
<pre class="language-javascript"><code>// Call CMDB API to do Identification and Reconciliation of current row
var cmdbUtil &#61; new global.CMDBTransformUtil();
cmdbUtil.setDataSource(&#39;MySource&#39;); //This is the name you added in the step above. 
cmdbUtil.identifyAndReconcile(source, map, log);
ignore &#61; true;

if (cmdbUtil.hasError()) {
        var errorMessage &#61; cmdbUtil.getError();
        log.error(errorMessage);
} else {
        log.info(&#39;IE Output Payload: &#39; &#43; cmdbUtil.getOutputPayload());
        log.info(&#39;Imported CI: &#39; &#43; cmdbUtil.getOutputRecordSysId());
}
</code></pre>
<p> </p>
<p>8. Next, you will need to create field maps. There we will create 2 field maps which will map our “Name” field in our data source to “Name” field in CMDB_CI table and “Serial” field in our data source to “Serial_Number” field in CMDB_CI.</p>
<p>9. Next, since our data can contain more than 1 class, we need to add another script to do the proper mapping. Here we will create another field map, select “Class” in the Target field since we are trying to dynamically define the class to load that data to. But instead of doing a 1 to 1 mapping, we now select the “Use source script”. The script in this example selects the class to be used based on the “OS” field in the source data. We are picking “cmdb_ci_win_server” if the “OS” field is “Windows Server” or “cmdb_ci_linux_server” if the “OS” fields are “Linux”.</p>
<pre class="language-javascript"><code>answer &#61; (function transformEntry(source) {

		switch(String(source.u_os)) { 
		case &#39;Windows&#39;:
			return &#39;cmdb_ci_win_server&#39;;
		case &#39;Linux&#39;:
			return &#39;cmdb_ci_linux_server&#39;;
		default:
			return &#39;&#39;;
	}


})(source);</code></pre>
<p><strong>Result</strong>: That is it. You are done. You can now either schedule a run, run it once but in any case, the data will be correctly loaded to the correct CMDB CI table and the data goes through IRE to ensure proper identification and reconciliation. </p>
<p> </p>
<h2 class="ng-scope">Using the Scripted IRE</h2>
<p>Scripted IRE is intended for cases to insert more complex data set which may include relationships. I will walk you through an example below of a source that contains a Server but requires leveraging CI references as well as creating multiple classes and adding a relationship.</p>
<p><strong>Create a .csv file with the Original Data mentioned below:</strong></p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/ff79f335db123380fece0b55ca961939.iix" /></p>
<p>1. The initial step for Scripted IRE remains the same as before. A developer would need to leverage Import Set to ingest the data and land in the staging table. Next, in the transform step, the user would need to select scripted, instead of leveraging the transform map step</p>
<p>2. The code to add to OnStart remains the same as mentioned in the Import Set w/ IRE. </p>
<p>3. Create an OnBefore transform script as mentioned below. The script would read each of the different fields available in the 3rd party data source and generates IRE payload that would add the CIs (more than one class) as well as the reference and relationship between the CIs</p>
<pre class="language-javascript"><code>(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {

    // Add this code to the onBefore transform map script
    // Call CMDB API to do create or update CI of current row
    var serverClassName &#61; &#34;cmdb_ci_linux_server&#34;;
    if (source.u_os.getDisplayValue() &#61;&#61; &#34;Windows&#34;) {
        serverClassName &#61; &#34;cmdb_ci_win_server&#34;;
    }
    var computer_name &#61; source.u_computer_name.getDisplayValue();
    var running_process_key_parameters &#61; source.u_running_proc_key_parameters.getDisplayValue();
    var running_process_command &#61; source.u_running_process_command.getDisplayValue();
    var tomcatwar_install_directory &#61; source.u_install_directory.getDisplayValue();
    var tomcatwar_name &#61; source.u_tomcatwar_name.getDisplayValue();

    var payload &#61; {
        &#34;items&#34;: [{
            &#34;className&#34;: &#34;cmdb_ci_app_server_tomcat_war&#34;,
            &#34;lookup&#34;: [],
            &#34;values&#34;: {
                &#34;install_directory&#34;: tomcatwar_install_directory,
                &#34;name&#34;: tomcatwar_name,
                &#34;sys_class_name&#34;: &#34;cmdb_ci_app_server_tomcat_war&#34;
            }
        }, {
            &#34;className&#34;: &#34;cmdb_ci_app_server_tomcat&#34;,
            &#34;lookup&#34;: [],
            &#34;values&#34;: {
                &#34;running_process_command&#34;: running_process_command,
                &#34;running_process_key_parameters&#34;: running_process_key_parameters,
                &#34;sys_class_name&#34;: &#34;cmdb_ci_app_server_tomcat&#34;
            }
        }, {
            &#34;className&#34;: serverClassName,
            &#34;lookup&#34;: [],
            &#34;values&#34;: {
                &#34;name&#34;: computer_name
            }
        }],
        &#34;relations&#34;: [{
            &#34;type&#34;: &#34;Contains::Contained by&#34;,
            &#34;parent&#34;: 1,
            &#34;child&#34;: 0
        }, {
            &#34;type&#34;: &#34;Runs on::Runs&#34;,
            &#34;parent&#34;: 1,
            &#34;child&#34;: 2
        }]
    };

    var input &#61; new global.JSON().encode(payload);
    var output &#61; sn_cmdb.IdentificationEngine.createOrUpdateCI(&#39;MySource&#39;, input);
    log.info(output);

    ignore &#61; true;

})(source, map, log, target);</code></pre>
<p> </p>
<p><strong>Result</strong>: That is it. You are done. You can now either schedule a run, run it once but in any case, the data will be correctly loaded to the correct CMDB CI table along with relationship and the data goes through IRE to ensure proper identification and reconciliation. </p>
<p><strong>Guidance on Performance</strong>: To improve the performance, we recommend you to use Concurrent Import sets. More details <a href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/import-sets/concept/concurrent-imports.html" rel="nofollow">here</a>.</p>
<p><em><strong>NOTE:</strong> It is worth noting that ServiceNow can only certify application that follows the pull mechanism that we have covered above. However, we will not be able to certify the applications that use push mechanism from an external system i.e Leveraging <a href="https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/integrate/inbound-rest/concept/c_IdentifyReconcileAPI.html" rel="nofollow">IRE REST API</a> to push CMDB related data from an external system  </em></p>
<p><strong>Conclusion</strong>: We have successfully covered the best practice on how to leverage Import Set w/ IRE OR Scripted IRE.</p>
<p> </p>
<p>Additional Resource :</p>
<ul><li><a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html" rel="nofollow">CMDB Identification and Reconciliation</a></li><li><a href="https://docs.servicenow.com/bundle/geneva-it-service-management/page/product/configuration_management/reference/r_CMDBDataModel.html" rel="nofollow">CMDB data model</a></li><li><a href="https://developer.servicenow.com/app.do#!/trainlist/app_store_learnv2_buildmyfirstapp_madrid_build_my_first_application?v&#61;madrid" rel="nofollow">How to create a Scoped Application</a></li><li><a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/import-sets/task/t_CreateNewDataSource.html" rel="nofollow">Data Source</a></li></ul>
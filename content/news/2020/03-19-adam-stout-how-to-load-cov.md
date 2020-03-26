---
title: "How to Load COVID Infection Data In Your Instance"
date: 2020-03-18T22:10:02.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=dfff637edbebcc5414d6fb2439961968"
---
<p>There have been a lot of requests recently to view current COVID-19 infection information. To simplify my users’ experience, I was asked how we can display this on a dashboard along with other information that is key to managing the situation.</p>
<p>I’m glad I have the Now Platform and such a great team to work with. [Thanks for your help with this <sn-mention class="sn-mention" table="live_profile" sysid="9df0d2a1db981fc09c9ffb651f961973">&#64;Padmanabam Tirumala</sn-mention>.]</p>
<p>We have a few options to work with, so let’s review our options first before diving into each one of them.</p>
<ol><li><strong>IFrame on Dashboard</strong>: This is cutting corners as the look and feel will most likely not match, and we have no control over the contents. For quick results or keeping an eye on “outside” perspectives or reference, this works fine.</li><li><strong>Remote Table to Import on the Fly</strong>: use an external table as a source for our styled visuals. It will match the look and feel of the rest of our dashboard, but we are not importing the data, so Performance Analytics will not be able to create snapshots of the data for trending and advanced analysis purposes.</li><li><strong>Import the Data</strong>: we import the data and can then do whatever we need and want including trending and providing us with more advanced analysis and filtering options.</li></ol>
<h2>IFrame on Dashboard</h2>
<p>The fastest way to import the data is to not import it but instead embed an existing site as an iframe. To set this up, we need to add a new <a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/content-management/task/t_IFrame.html#t_IFrame" rel="nofollow">IFrame Content Block</a>.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/98e2ef3adbe7cc5414d6fb243996198c.iix" /></p>
<p>Once that is added, we need to configure the iframe. (this requires content_admin to manage Content Blocks). All we need to do is give it a name, enter the URL (<a href="https://ncov2019.live/data" rel="nofollow">https://ncov2019.live/data</a>), and set the height and width. IFrames with external content do not auto-resize, so you must pick something that will work for most of your users.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/e065ebb6db2bcc5414d6fb24399619ad.iix" /> </p>
<p>Now we have embedded a dashboard website with the information.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c075efb6db2bcc5414d6fb24399619d2.iix" /> </p>
<p><em>Note: If you are embedding content from some systems, the other system may block the content from showing up in frames. If you get a security area, you may need to investigate the security settings on the other system to white list your instance.</em></p>
<h2>Remote Table to Import on the Fly</h2>
<p><a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/remote-tables/concept/remote-tables.html" rel="nofollow">Remote Tables</a>, a feature introduced in New York, allows us to import data on the fly. The data is imported into a temporary table in memory. This table can be used as a standard table through most of the platform (including for reports and interactive filters) but is populated when you query it (there are some caching options if desired).</p>
<p><em>Note: Remote Tables leveraging external data requires an entitlement to <a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/integrationhub/concept/integrationhub.html" rel="nofollow">IntegrationHub</a>. Be sure to understand if you are entitled to use this technique. Check with your account executive if you have any questions.</em></p>
<p>For COVID-19 data, we can access publicly available information. Johns Hopkins University is posting data daily available at <a href="https://github.com/CSSEGISandData" rel="nofollow">https://github.com/CSSEGISandData</a>.</p>
<p>Here is an example of the data file we will work with:</p>
<pre>Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered,Latitude,Longitude <br />Hubei,China,2020-03-12T09:53:06,67781,3056,50318,30.9756,112.2707 <br />,Italy,2020-03-11T21:33:02,12462,827,1045,43.0000,12.0000 <br />,Iran,2020-03-12T11:13:27,10075,429,2959,32.0000,53.0000 <br />,&#34;Korea, South&#34;,2020-03-12T05:13:02,7869,66,333,36.0000,128.0000</pre>
<h3>Create Table</h3>
<p>To create a new Remote Table, we start with the Tables module (under Remote Table) in the System Definition application.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/fea767b2db6bcc5414d6fb24399619e1.iix" /> </p>
<p>Click New to create a new table. For this table, the only required field is “sys_id”, the other normal “sys” fields are not created by default and not needed. We are going to add a field (with the correct type) for each field in the data file.</p>
<p>We are also going to add a reference to Location [cmn_location] to enable some more robust reporting.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/46b7abb2db6bcc5414d6fb2439961922.iix" /></p>
<p><strong>Fields</strong></p>
<ul><li>Country - string</li><li>Province - string</li><li>Last Update – date/time</li><li>Confirmed - integer</li><li>Deaths - integer</li><li>Recovered - integer</li><li>Latitude - decimal</li><li>Longitude - decimal</li><li>Location – reference to cmn_location</li></ul>
<h3>Create Definition</h3>
<p>Now that we have the table, we need to populate it. To populate the Remote Table, we use a Remote Table Definition.</p>
<p>Click on the Definitions module under Remote Tables and put in a script to parse the data and create the rows. Checking Advanced enables us to set the caching settings, which isn’t essential here, but maybe useful for other use cases.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/23d7a7f2db6bcc5414d6fb2439961933.iix" /></p>
<p>Here is the script I used with some inline comments on what it is doing.</p>
<pre class="language-javascript"><code>(function executeQuery(v_table, v_query)
{
    var MAX_LOOK_BACK_DAYS &#61; 7; // how many day we will look back for data
    var REMOTE_DATA &#61; null;

    /**
     * Format the date string in the required format
     * &#64;param {GlideDateTime} theDate 
     * &#64;returns {string} formated date string
     */
    var getFileDate &#61; function (theDate)
    {
        return (&#34;00&#34; &#43; theDate.getMonthLocalTime()).substr(-2, 2) &#43; &#39;-&#39; &#43; (&#34;00&#34; &#43; theDate.getDayOfMonthLocalTime()).substr(-2, 2) &#43; &#39;-&#39; &#43; theDate.getYearLocalTime();
    };

    /**
     * Pull data from public site and populate the REMOTE_DATA variable
     * &#64;param {*} v_table 
     * &#64;param {*} v_query 
     * &#64;returns {void}
     */
    var getCovidDataFromGit &#61; function (v_table, v_query)
    {
		// Uses RestMessage and set the end point
		// Create a RestMessage first which calls an external REST service
		try {
            var fileFound &#61; false;
            var theDate &#61; new GlideDateTime();
            var loopCount &#61; 0;

            // the data is posted at a consistant time.  To handle that we look for today&#39;s file and if that is there, we look for yesteday and then the day before up to MAX_LOOK_BACK_DAYS
            while(!fileFound)
            {
                var url &#61; &#34;https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/&#34; &#43; getFileDate(theDate) &#43; &#34;.csv&#34;;
                var restMessage &#61; new sn_ws.RESTMessageV2();
                restMessage.setHttpMethod(&#34;get&#34;);
                restMessage.setEndpoint(url);
                var response &#61; restMessage.execute(); //Might throw exception if http connection timed out or some issue with sending request itself because of encryption/decryption of password.

                // if the file isn&#39;t found, look at the day before
                if (response.getStatusCode() &#61;&#61; &#34;404&#34;)
                {
                    theDate.addDaysLocalTime(-1); // look for data from yesterday
                } else {
                    gs.addInfoMessage(&#39;Data retrieved from: &#39; &#43; url); // add a message to the user that we pulled the data.  This is optional.
                    fileFound &#61; true; // we found the file so stop looking back in time.
                }

                // break if we have some problem;
                if(loopCount&#43;&#43; &gt; MAX_LOOK_BACK_DAYS)
                {
                    fileFound &#61; true;
                }
            }

            // if REST call ends up in an error, set the last error message which shows up
            // at the bottom of the list view
            if (response.haveError()) {
                v_query.setLastErrorMessage(response.getErrorMessage());
                // can use gs.error() or gs.addErrorMessage() while debugging
                // gs.debug() messages visible in session debugger
                // gs.debug(response.getErrorMessage());
                return;
            }
			
            REMOTE_DATA &#61; response.getBody();
            
		} catch (ex) {
			v_query.setLastErrorMessage(ex.message);
			// gs.debug(ex.message);
			return;
		}
    };
    
    /**
     * lookupLocation - Get teh sys_id for the location based on teh country and province
     * &#64;param {string} country 
     * &#64;param {string} province 
     * &#64;returns {sys_id} Location sys_id
     */
    var lookupLocation &#61; function (country, province)
    {
            var loc &#61; new GlideRecord(&#39;cmn_location&#39;);
            loc.setLimit(1);
            loc.addQuery(&#39;country&#39;, country);
            // this doesn&#39;t make a lot of sense, but matches my data
            if(province)
            {
                //loc.addQuery(&#39;state&#39;, province);
                loc.addQuery(&#39;city&#39;, province); // we have some odd data to handle
            } else {
                //loc.addNullQuery(&#39;state&#39;);
                loc.addQuery(&#39;city&#39;, country); // we have some odd data to handle
            }
            loc.addNullQuery(&#39;street&#39;);
            loc.query();
            if(loc.next())
            {
                return loc.getValue(&#39;sys_id&#39;);
            }
            return null;
    };

    /**
     * Fix the location by mapping the string we get to the string in cmn_location
     * &#64;param {string} loc
     * &#64;returns {string} Location name in cmn_location 
     */
    var fixLocation &#61; function (loc)
    {
        var locationMap &#61; {&#34;US&#34;: &#34;USA&#34;};
        if(locationMap &amp;&amp; locationMap.hasOwnProperty(loc))
        {
            loc &#61; locationMap[loc];
        }
        return loc;
    };

    /**
     * Generate a unique name for each row (standin for a sys_id)
     * &#64;param {string} latitude 
     * &#64;param {string} longitude 
     * &#64;returns {string} A unique name for the row
     */
    var uniqueName &#61; function (latitude, longitude)
    {
        return latitude &#43; &#39;_&#39; &#43; longitude;
    };

    /**
     * Process the data that was previously pulled into REMOTE_DATA
     * &#64;returns {void}
     */
    var processData &#61; function ()
    {
        // would like to use sn_tfrm.TransformerRuleList() but data is a CSV not JSON so we&#39;ll brute force it
        var rows &#61; REMOTE_DATA.split(&#34;\n&#34;);
        for(var r in rows)
        {
            var rowObj &#61; {};
            var row &#61; rows[r].split(/,(?&#61;(?:(?:[^&#34;]*&#34;){2})*[^&#34;]*$)/); // handle comma inside of double quotes
            rowObj.latitude &#61; row[6];
            rowObj.longitude &#61; row[7];
            rowObj.sys_id &#61; uniqueName(rowObj.latitude, rowObj.longitude);
            rowObj.province &#61; row[0];
            rowObj.country &#61; row[1];
            rowObj.last_update &#61; row[2]; // the data seems to change over time so we need to handle that
            rowObj.confirmed &#61; row[3];
            rowObj.deaths &#61; row[4];
            rowObj.recovered &#61; row[5];
            rowObj.location &#61; lookupLocation(fixLocation(row[1]), fixLocation(row[0]));
            //gs.addInfoMessage(JSON.stringify(rowObj));
            if(r &gt; 0)
            {
                // this is the most important line, where we actually add the row to the remote table
                v_table.addRow(rowObj);
            }
        }
    };
    // do the work
    getCovidDataFromGit(v_table, v_query);
    processData();
})(v_table, v_query);</code></pre>
<p> </p>
<h3>Use the Table</h3>
<p>Now that we have a table, we can build reports and interactive filters to display the data.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c5bbaff6dbabcc5414d6fb243996198b.iix" /> </p>
<p>Because we are using a Remote Table, there are some limitations to what we can do because the data is not materialized in the database. Specifically, we cannot apply Performance Analytics on this data or using it in Related List Conditions. However, the data is easy to load, very current, and accessible in most of the platform.</p>
<h2>Import Data</h2>
<p>The third option you have is to load this data is to use a standard <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/import-sets/concept/c_DataSources.html" rel="nofollow">Data Source</a>, <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/script/server-scripting/concept/c_CreatingNewTransformMaps.html" rel="nofollow">Transform Map</a>, and <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/import-sets/task/t_ScheduleADataImport.html" rel="nofollow">Scheduled Import</a> to load the data into an ordinary table.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/93eb2f3adbabcc5414d6fb243996193e.iix" /> </p>
<h3>Create a Data Source</h3>
<p>We need a standard data source that pulls the data from the same location we used in the Remote Table example.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/447c633edbabcc5414d6fb2439961910.iix" /></p>
<h3>Create a Transform Map</h3>
<p>For this data, we’ll use two transform maps. One will load the locations into cmn_location (this can be skipped if you already have them and just need to look them up), and the second (order does matter) to load the location data.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/89eca3bedbabcc5414d6fb24399619bb.iix" /> </p>
<p>Nothing special is required for the field mappings, but for this data, I coalesced on last updated, country, and region (being sure to allow blanks for these). I also used a script to look up the location from cmn_location.</p>
<h3>Schedule the Import</h3>
<p>We want this data every day, so we need to schedule the load. Since there is a new file each day, we need to handle that. I used a pre-import script to handle this by editing the file_path and connection_url on the data source to the next day every time I run it.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/21cf633edbebcc5414d6fb24399619f1.iix" /></p>
<p>Here is an example of what you pre-import script might look like:</p>
<pre class="language-javascript"><code>var importTable &#61; &#39;x_snc_covid_imp_covid_data&#39;;

var getDataSource &#61; function (sourceTable) {
    var ds &#61; new GlideRecord(&#39;sys_data_source&#39;);
    ds.addQuery(&#39;import_set_table_name&#39;, &#39;&#61;&#39;, sourceTable);
    ds.query();
    if (ds.next()) {
        return ds;
    }
    return null;
};

var replaceDateInString &#61; function (d, str) {
    return str.replace(/\d{2}\-\d{2}\-\d{4}/gi, d);
};

var ds &#61; getDataSource(importTable);
var theDate &#61; new GlideDateTime();
var dateString &#61; (&#34;00&#34; &#43; theDate.getMonthLocalTime()).substr(-2, 2) &#43; &#39;-&#39; &#43; (&#34;00&#34; &#43; theDate.getDayOfMonthLocalTime()).substr(-2, 2) &#43; &#39;-&#39; &#43; theDate.getYearLocalTime();

ds.setValue(&#39;connection_url&#39;, replaceDateInString(dateString, ds.connection_url.toString()));
ds.setValue(&#39;file_path&#39;, replaceDateInString(dateString, ds.file_path.toString()));
ds.update();</code></pre>
<p>I didn’t make this conditional, but it may make sense to run this job every hour and add a condition to check if there is a new file available or not.</p>
<h3>Use the Data</h3>
<p>When we do a physical import of the data, we have no restrictions on what to do with it. Performance Analytics and Related List Conditions work, so we have the full power of the platform at our fingertips.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/0fb56807db6f009414d6fb24399619af.iix" /></p>
<h2>Choose what makes sense</h2>
<p>You have many options to get the data exposed to your user. We can show it with an IFrame, leverage reports with a Remote Table, or unleash the power of the platform with a full import.</p>
<p>Where else can you use these techniques to make better user experiences and empower your users and supercharge your workflows?</p>
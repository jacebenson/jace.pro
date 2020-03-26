---
title: "Creating a report based on more than one Dataset multiple datasets"
date: 2018-12-13T06:15:07.000Z
authors: ["Eric Weischedel"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b1c20e1adb926380fb115583ca96195d"
---
<p>A question or request that Customer Support commonly receives from our users is whether there is a way to create a report that will <a href="http://bit.ly/KBReportMultipleDatasets" target="_blank" rel="noopener noreferrer nofollow">display data from two or more datasets</a>. The answer to this question, to the positive feedback from our users is a definite <strong>Yes</strong>.</p>
<p>In this blog post we will show how with a simple example which can, of course, be expended to much more complex and informative user generated reports. This example is designed for use with the newer Report Designer User Interface, but note that similar steps can be used and followed for usage with the original Report Builder User Interface. </p>
<p style="text-align: center;"><a href="https://docs.servicenow.com/bundle/london-performance-analytics-and-reporting/page/use/reporting/concept/differences-between-builder-and-designer.html#differences-between-builder-and-designer" target="_blank" rel="noopener noreferrer nofollow">Here&#39;s the difference between Report Designer and Report Builder.</a></p>
<h2>Step 1: Get started with a basic report</h2>
<p style="text-align: left;">Before starting any report, particularly a report that is intended to <a href="https://docs.servicenow.com/bundle/london-performance-analytics-and-reporting/page/use/reporting/concept/c_MultipleDataSets.html" target="_blank" rel="noopener noreferrer nofollow">use multiple datasets</a> is to take a few moments to plan the report, including the datasets to be used, the formatting and the type of report to be created.  Having this information in mind before beginning creation of a new report will help prevent having to backtrack and ensure the report contain information that will be useful to the consumers of that report.</p>
<p>For this example, let&#39;s create a basic report which will display the number of Incidents and Problems which are assigned to various assignment groups in our organization.  We will filter this report as per a specific date range and display the results as a bar chart, showing the total counts for both Incidents and Problems as assigned, all on the same chart.</p>
<center>
<p><img style="max-width: 100%; max-height: 480px;" src="3f0b189cdb6e67002737e15b8a9619f7.iix" /></p>
</center>
<p>We will filter this report as per a specific date range and display the results as a bar chart, showing the total counts for both Incidents and Problems as assigned, all on the same chart.</p>
<h2>Step 2: Creating a report based on Multiple Datasets</h2>
<p>To begin, ensure to be logged into the instance with an account having necessary to create reports as well as view the specific data for which you intend to report on.</p>
<p>1. From the Menu Navigator on the instance, browse to the location: <strong>Reports</strong> &gt; <strong>Create New</strong>. The new report form will appear.  </p>
<ul><li>Give the report a descriptive name and select a source type for the report.</li><li>For this example we will be querying the tables directly, so we have selected the option table, but Report Source could have been used just as easily. </li><li>If selecting the table as the source type, select one of the tables you intend to query and display data from (for our example we will start with Incident).</li></ul>
<center>
<p><img style="max-width: 100%; max-height: 480px;" src="17ea509cdb6e67002737e15b8a961985.iix" /></p>
</center>
<p>2. Once the necessary fields have been populated in the Data tab of the Report Designer Interface, click the<strong> Next</strong> button to advance to the next tab.</p>
<ul><li>On this tab (Type), select the appropriate report display type you intend to have both datasets in the report adhere to. </li><li>In this example we will select a Bar graph.</li></ul>
<center>
<p><img style="max-width: 100%; max-height: 480px;" src="89ca585cdb6e67002737e15b8a96193f.iix" /></p>
</center>
<p>3. After selecting the appropriate report type, click the <strong>Next</strong> button to advance to the Configure tab.  </p>
<ul><li>From this tab, the specifics of the data to be displayed are selected and modified.  </li><li>For our example, we will select to Group by the Assignment Group field, and we will choose to <strong>Aggregate</strong> the report on a <strong>Count</strong> of records.  </li><li>Clicking the Filter icon on the right pane will allow us to specify criteria to limit the data which will be included in this report (for this example we have specified to display tickets that are currently in an Active status).</li></ul>
<center>
<p><img style="max-width: 100%; max-height: 480px;" src="b55a58d8db6e67002737e15b8a961974.iix" /></p>
</center>
<p>4. Click the <strong>Next</strong> button to advance to the final tab in the report designer interface, titled Style.</p>
<ul><li>On this tab, various changes can be made to the report that modify the way it displays for the end users (this includes data labels, chart colors, etc). </li><li>Once satisfied with the display of the report, click the <strong>Save</strong> button to save this first portion of the report.</li></ul>
<h2>Step 3: Display data from different tables and data sources on the same graph </h2>
<p>At this point we currently have a complete (albeit rather simple) report that could be used, shared and published.  However, we can also associate the report to <a href="https://docs.servicenow.com/bundle/london-performance-analytics-and-reporting/page/use/reporting/task/t_AddAnAdditionalDataSet.html" target="_blank" rel="noopener noreferrer nofollow">additional data sets</a> to allow display of data from differing tables and data sources on the same graph display. Thus, to add an additional data set, we will continue with the following steps:</p>
<p>Re-open the report we have just created for editing.</p>
<p>1. Click the <strong>Show report structure</strong> icon in the upright right corner of the report record display.</p>
<center>
<p><img style="max-width: 100%; max-height: 480px;" src="a72a9898db6e67002737e15b8a96191a.iix" /></p>
</center>
<p>The report structure section of the report builder page will expand, showing the current structure of this report, including additional data-sets used as well as any drill-down reports which have been associated to this report.</p>
<center>
<p><img style="max-width: 100%; max-height: 480px;" src="49d9dc94db6e67002737e15b8a9619a4.iix" /></p>
</center>
<p>2. Click the <strong>Add dataset </strong>button.  A new, blank dataset record form will appear in a pop-up dialog window.</p>
<center>
<p> <img style="max-width: 100%; max-height: 480px;" src="4b29d0d0db6e67002737e15b8a9619cf.iix" /></p>
</center>
<p>3. Provide a name for new Dataset record in the <strong>Dataset name</strong> field.  Note that the name provided for this Dataset name field will also appear in the legend corresponding to this dataset in the final report. </p>
<p>4. Select the appropriate <strong>Source</strong> <strong>type</strong> and specific Report source or Table for which this subset of data will base it&#39;s information.  For this example, we will select Table as the Source Type and Problem as the Table to obtain the data from.</p>
<p>5. After filling in the appropriate data, click the <strong>Next</strong> button to advance to the Type tab of the Dataset record. </p>
<p>6. The Configure tab of the new Dataset record should appear.  Select the appropriate <a href="https://docs.servicenow.com/bundle/london-performance-analytics-and-reporting/page/use/reporting/task/add-additional-group-by-stack-by.html" target="_blank" rel="noopener noreferrer nofollow">Group by value for this report</a>. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="31094c58dba667002737e15b8a9619f7.iix" /></p>
<p>7. Click the <strong>Next</strong> button to advance to the Style tab, in which options can be configured regarding the color and data labels on this secondary data-set.  </p>
<p>8. Once satisfied with all the changes, click the <strong>Save</strong> dataset button.</p>
<p> </p>
<p>You have now created a multi-dataset report!  Additional datasets (up to a maximum of 5) can be added to this same report.</p>
<p> </p>
<p>--</p>
<p> </p>
<p style="text-align: center;"><strong>Bonus! For 5 more tips on creating reports from multiple datasets check out <a href="http://bit.ly/KBReportMultipleDatasets" target="_blank" rel="noopener noreferrer nofollow">Create Reports based on Multiple Datasets - Report Designer Interface.</a></strong></p>
<p> </p>
<p> </p>
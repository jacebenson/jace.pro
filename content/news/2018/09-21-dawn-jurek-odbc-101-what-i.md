---
title: "ODBC What is Open Database Connectivity and why do you need it"
date: 2018-09-20T19:16:50.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1ced1cafdb68e70467a72926ca96191c"
---
<p>As a ServiceNow customer, your data is stored and protected in our cloud database. Have you ever wanted read-only access to this data for analysis, or to build custom reports? You have it, and it&#39;s as simple as O-D-B-C.</p>
<p>In this installment of our <a title="NOWsupport best practices series" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWsupport best practices series</a>, we provide a brief history of database management prior to the advent of open database connectivity, and explain how you can use it to gain access to your data.</p>
<h3>A brief history of database management</h3>
<p>In the olden days of computing, companies each used a single database management system (DBMS). So communications between the front-end software used by employees and the back-end database was relatively simple. But as computing became cheaper and more widespread—and especially when personal computers and client-server technology came on the scene—companies began acquiring multiple DBMSs. These were often incompatible, stored on different servers, and accessed by clients with different tools. Database developers at the back end and independent software vendors at the front end spent a lot of time writing and maintaining data access routines to make their products compatible with those at the other end of the client-server relationship.</p>
<p>Both groups of developers needed a way to merge data from different DBMSs in a single application, and independent software vendors also needed a way to write a single application that was DBMS independent. The world of computing needed <em>open database connectivity</em>—an interoperable way to access data.</p>
<p>For more information, see <a title="Why Was ODBC Created?" href="https://docs.microsoft.com/en-us/sql/odbc/reference/why-was-odbc-created?view&#61;sql-server-2017" target="_blank" rel="nofollow">Why Was ODBC Created?</a></p>
<h3>What is ODBC?</h3>
<p>Open Database Connectivity (ODBC) is a specification for a database application programming interface (API). API is software that functions as an intermediary between two applications—such as a back-end database and front-end business application—allowing them to talk to each other. ODBC is a standard API for database access. It is independent of operating system, DBMS, and programming language.</p>
<p>ODBC achieves DBMS independence through an ODBC driver, which functions as a translation layer between the application and the DBMS. An ODBC-compliant application can access any DBMS for which a driver is installed. </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="59f08b77db2463048e7c2926ca96192b.iix" /> </p>
<p style="text-align: left;">ODBC allows you to query your ServiceNow database from any application that supports ODBC connectivity. For example, perhaps you want to bring data from your ServiceNow instance into Excel to integrate with data from other sources and generate reports.</p>
<h3>The ServiceNow ODBC Driver</h3>
<p>The ServiceNow ODBC driver provides read-only access to the database associated with your ServiceNow instance. It is compliant to version 3.52 of the Microsoft ODBC core API conformance and uses ServiceNow web services support for a query-only interface. The ODBC driver supports only select statements or read-only functions and does not modify your instance data. Also, it isn’t intended to copy large amounts of data at a time.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="8df5f167db20ab0467a72926ca961976.iix" /></p>
<p>Check the limitations of the ServiceNow ODBC driver in the <a title="ODBC driver" href="https://docs.servicenow.com/bundle/london-application-development/page/integrate/odbc-driver/concept/c_ODBCDriver.html" target="_blank" rel="nofollow">ODBC driver</a> product document.</p>
<h3>Why do you need ODBC?</h3>
<h4>Perform analysis and build custom reports</h4>
<p>You can export data from the cloud database into Excel spreadsheets or an SQL server database, allowing you to analyze the data or run custom reports.</p>
<h4>Simple setup</h4>
<p>ODBC is delivered as a windows installer, that&#39;s easy to install. Once you&#39;ve installed it, just enter the URL of your instance—no additional info is needed for the ODBC to point to your instance. ODBC renders data in accordance with ACLs already set up in ServiceNow. </p>
<h4>ODBC driver is free</h4>
<p>The ServiceNow ODBC driver is a free tool provided and supported by ServiceNow.</p>
<h3>Getting started with ODBC</h3>
<p>When you’re ready to install the ServiceNow ODBC driver, watch this video, which walks you through prerequisites, installation, configuration, and testing:</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/ajBFjHiJTyw"></iframe></p>
<h3>For more information</h3>
<p>To learn more about using ODBC to access your ServiceNow database, check out these resources:</p>
<ul><li><a title="ODBC driver" href="https://docs.servicenow.com/bundle/london-application-development/page/integrate/odbc-driver/concept/c_ODBCDriver.html" target="_blank" rel="nofollow">ODBC driver</a> (product documentation)</li><li><a title="ODBC and client applications" href="https://docs.servicenow.com/bundle/london-application-development/page/integrate/odbc-driver/reference/r_ODBCAndClientApplications.html" target="_blank" rel="nofollow">ODBC and client applications</a> (product documentation)</li><li><a title="What is ODBC?" href="https://docs.microsoft.com/en-us/sql/odbc/reference/what-is-odbc?view&#61;sql-server-2017" target="_blank" rel="nofollow">What is ODBC?</a> (Microsoft Docs)</li><li><a title="Open Database Connectivity" href="https://en.wikipedia.org/wiki/Open_Database_Connectivity" target="_blank" rel="nofollow">Open Database Connectivity</a> (Wikipedia article)</li></ul>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below. </p>
<p>To access all of the blog posts in this series, see our <a title="NOWSupport best practices series list" href="community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="nofollow">NOWSupport best practices series list</a>.</p>
<p> </p>
<p> </p>
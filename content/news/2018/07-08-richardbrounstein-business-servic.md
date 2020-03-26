---
title: "Business Service Mapping Application Components that do not have Entry Points"
date: 2018-07-07T22:46:32.000Z
authors: ["richardbrounstein"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=49ae725bdbcb93085ed4a851ca961999"
---
<p><strong>(note: this solution only works for ServiceNow Jakarta version or later)</strong></p>
<p><a href="https://www.servicenow.com/products/service-mapping.html" rel="nofollow">Mapping Business Applications</a> automatically is awesome.  With Service Mapping, we can populate the CMDB during the discovery process with servers, software applications and network devices with each one having a direct relationship to a business application. This is incredibly valuable when trying to determine the business application affected from an issue detected on running software or a hardware device.  Or being able to prevent an issue before you are about to make a change to some software or hardware by understanding its business impact.  It allows you to manage Business Application health and view all processes in ServiceNow in context to a business application (Incidents, changes, change requests, unplanned changes, alerts, outages, any custom processes, etc.)</p>
<p>The Service Mapping process finds the components of an application by starting from an entry point like a URL or a Host/Port combination.  The process identifies the running software application on the host and creates the configuration item in the CMDB with a relationship to the Business Service during the discovery process.  After it identifies the running application, it then looks for network dependencies or application references to other hosts from configuration files and starts the process again using that dependency as an entry point.</p>
<p><img src="a98a3e13dbcb93085ed4a851ca961943.iix" width="222" height="270" /></p>
<h6><strong>The Service Mapping Process</strong></h6>
<p>This process works well for most complex applications. But what if your application has components that don’t have an entry point?  Consider applications that have remote agents that are deployed on a server and perform some important function for a business application on a schedule rather than listening on a port and waiting for a request.  The agent might make an occasional call to another computer to perform a task or report results as part of its designed function but such communication might be impossible to detect if it is not communicating to an application process or if it is not using TCP/IP (like copying a file).  If the agent is not listening on a port or being referenced by another application component, then the traditional method of Service Mapping won’t work.  Yet, we still want to map these agent components as part of our business application. To do so, we need a different approach. We need to identify the components and then find a way to relate them to our Business Application.</p>
<p><img src="21eab653dbcb93085ed4a851ca96199f.iix" width="568" height="428" /></p>
<h6><strong>A Complex Application with Remote Agents that don’t listen on a port are impossible to map automatically with the current Service Mapping Process</strong></h6>
<p><strong>SUMMARY OF HOW TO MAP REMOTE AGENTS WITH NO ENTRY POINTS</strong></p>
<p>Here is a summary of an approach that will work to identify and map agent components that aren’t listening on a port or aren’t being referenced by another application component through configuration:</p>
<ol><li>Create a custom CI Class and discovery pattern and use horizontal discovery to inventory the Remote Agents so they are stored in the CMDB</li><li>Map the Business application components</li><li>Create a custom Discovery Pattern connection section that queries the CMDB for the agent applications and then use that information to connect to and map the Remote Agents.</li></ol>
<p><strong>Now, for the details:</strong></p>
<p><strong>STEP 1: Create a custom CI Type for the Remote Agent and a Custom Discovery Pattern for Horizontal Discovery</strong></p>
<p>We need to get the remote agents into the CMDB.  In order to do that, we need to use horizontal discovery and we need to identify the Agent with a custom discovery pattern.  This is functionality that has existed for a long time in ServiceNow.  I’m going to walk through doing this with a Remote Agent that runs on a machine and does not listen on any port.  First, we need a custom CI Type for the agent.  This is easily done in the CI Class Manager.  Go into <strong>Configuration -&gt; CI Class Manager</strong>and create a quick CI Type right under the “Application” class by selecting “Add Child Class”:</p>
<p><img src="e64b7293dbcb93085ed4a851ca9619a2.iix" width="157" height="119" /><img src="455b7293dbcb93085ed4a851ca9619cd.iix" width="426" height="161" /></p>
<p>Make note of the Table name (class name) created.  All the other information on the agent class can be kept as the default unless there are other reasons why you need to modify the identification section.  The table name created in my example is “u_cmdb_ci_remote_agent”.  All custom tables always start with a “u_” by the way.</p>
<p><strong>Build a Custom Identification Discovery Pattern</strong></p>
<p>We need to build a custom Discovery Pattern to create the CI for the remote agent.  Go to <strong>Pattern Designer -&gt; Discovery Patterns</strong>and create a new pattern for the agent:</p>
<p><img src="3e7bb693dbcb93085ed4a851ca9619d3.iix" width="621" height="115" /></p>
<p>Create an identification section to discover the agent.  Note that since the agent process is not listening on a port, the “Find Process Strategy” must be set to “None”.  The TCP Endpoint and/or HTTP(S) Endpoint are good choices as Entry Point Type since they are simple and generic.  Any dependency connection created only needs to specify the host name.<img src="e6abba93dbcb93085ed4a851ca9619e0.iix" width="586" height="282" /></p>
<p><img src="703c3a17dbcb93085ed4a851ca9619c2.iix" width="1086" height="102" /></p>
<p>When defining the steps to identify the Remote Agent, you will need to identify the running process. My example agent is the ServiceNow MID Server process named wrapper-windows-x86-64.exe.  The identification section looks for the process in the output of the “tasklist” command.  This is an important part of the Identification section to uniquely identify the agent process.  The next step will verify that the agent process is there:</p>
<p><img src="b1bb3e93dbcb93085ed4a851ca96190d.iix" width="468" height="242" /></p>
<p><img src="197cbe17dbcb93085ed4a851ca9619cc.iix" width="897" height="289" /></p>
<p>The Remaining steps of the pattern must set the required values for the configuration item in order to create the CI.  The attributes used to identify the CI type must be set. For an Application, it is $running_process_command and $running_process_key_parameters.</p>
<p><img src="765c3e17dbcb93085ed4a851ca9619eb.iix" width="446" height="291" /></p>
<p>After you save and publish this discovery pattern, you need to define the process classification so it can be detected during horizontal discovery.  Go to <strong>Discovery Definition -&gt; Processes </strong>and define a new Process Classification for the Remote Agent Process:</p>
<p><img src="8abdf2d7dbcb93085ed4a851ca961921.iix" /></p>
<p>And set the Agent Process to run the Remote Agent Discovery Pattern that you just created:</p>
<p><img src="a4cd7e97dbcb93085ed4a851ca9619c9.iix" /></p>
<p>Now, when running horizontal discovery on these machines, it will create instances of the Remote Agent in the CMDB running on the servers:</p>
<p><img src="bacdf6d7dbcb93085ed4a851ca9619e0.iix" width="521" height="105" /><img src="41ddbad7dbcb93085ed4a851ca961958.iix" width="210" height="52" /></p>
<p><strong>STEP 2: Map the Business Application Components</strong></p>
<p>This is the normal Service Mapping process. We now can put in an Entry Point and map the parts of the application that do have entry points…even if it is only a single node:</p>
<p><img src="47ed7ad7dbcb93085ed4a851ca961962.iix" width="134" height="177" /><img src="81fd7ad7dbcb93085ed4a851ca96195e.iix" width="245" height="168" /></p>
<p><strong>STEP 3: Create a custom Connection Section on an application component to connect to the Agent</strong></p>
<p>This is where we bring it all together.  We need to create a Custom Connectivity Section on one of the Application components that will connect to the Remote Agents that are now stored in the CMDB thanks to horizontal discovery.</p>
<p><img src="610ebed7dbcb93085ed4a851ca961945.iix" width="216" height="215" /><img src="4d1e321bdbcb93085ed4a851ca9619c3.iix" width="331" height="262" /></p>
<p>The connection section called “Connect to Remote Agents” only has 3 steps:</p>
<p><img src="543e761bdbcb93085ed4a851ca961909.iix" /></p>
<p><img src="d33efed7dbcb93085ed4a851ca9619f8.iix" /></p>
<p>Step 1  of the pattern section is called “Get Remote Agent Servers”. It is a “Set Parameter Value” operation that uses JavaScript to query the CMDB and gather the Remote Agent Host Names and put them into an array.</p>
<p> <img src="354e761bdbcb93085ed4a851ca9619a8.iix" /></p>
<p>To put custom code in the “Value” field, type “EVAL (“ and then the pencil will appear on the screen to edit the code in the expression editor:</p>
<p><img src="405eb61bdbcb93085ed4a851ca96198e.iix" /></p>
<p>Here is the code that you can copy and paste:</p>
<pre class="language-javascript"><code>var num_remote_agent_servers&#61;0;

var remote_agent_servers&#61;&#39;&#39;;

var remote_agent_ci &#61; new GlideRecord ( &#34;u_cmdb_ci_remote_agent&#34; );

remote_agent_ci.query();

while (remote_agent_ci.next())

  { /* Query all the remote agent software applications */

  var cmdb_rel &#61; new GlideRecord ( &#34;cmdb_rel_ci&#34;);

  cmdb_rel.addQuery ( &#39;parent&#39;, remote_agent_ci.sys_id );

  cmdb_rel.query();

  while (cmdb_rel.next())

    { /* query all the relationships for this remote agent software applications */

    var rel_type &#61; new GlideRecord ( &#34;cmdb_rel_type&#34;);

    rel_type.get ( cmdb_rel.type );

    if (rel_type.name &#61;&#61; &#34;Runs on::Runs&#34;)

      { /* now get the hosts on which the remote agent is running */

      var cmdb_cmp &#61; new GlideRecord ( &#34;cmdb_ci_computer&#34;);

      cmdb_cmp.get ( cmdb_rel.child );

      num_remote_agent_servers&#43;&#43;;

      if (num_remote_agent_servers &#61;&#61; 1)

                  remote_agent_servers &#61; cmdb_cmp.name;

      else

                  remote_agent_servers &#43;&#61; &#34;,&#34; &#43; cmdb_cmp.name;

      } /* now get the hosts on which the remote agent is running */

    } /* query all the relationships for this remote agent software applications */

  } /* Query all the remote agent software applications */

/* very important statement to return the list to the pattern */

rtrn &#61; remote_agent_servers;</code></pre>
<p> </p>
<p>When code runs in a discovery pattern, it runs on the MID Server.  As of the Jakarta version, it is possible to run code this way that accesses ServiceNow instance tables.  Pre-Jakarta, this would not work.</p>
<p>This code returns a comma-delimited list of servers that are running the custom agent u_cmdb_ci_remote_agent.  Then we can use a simple parsing strategy to put the host names into an array:</p>
<p><img src="db6efa1bdbcb93085ed4a851ca96190e.iix" width="714" height="370" /></p>
<p> </p>
<p>And then create the connection.  We only have host names and no ports but you must put a value in the port field or it won’t save the entry point.</p>
<p><img src="e98e3e1bdbcb93085ed4a851ca961926.iix" /></p>
<p>Success! Now, when we run the pattern, it will connect to the Remote agents…even though the remote agents are not listening on any port.</p>
<p><img src="c79efa1bdbcb93085ed4a851ca961999.iix" width="679" height="467" /></p>
<p> </p>
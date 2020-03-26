---
title: " Steps to Adding Custom AWS Metrics into Operational Intelligence"
date: 2018-02-14T01:53:20.000Z
authors: ["vNickNOW"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=adcc2265dbd0dbc01dcaf3231f961998"
---
<p>Starting in Kingston, the <a title="ocs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/concept/operational-metrics.html" href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/concept/operational-metrics.html" rel="nofollow">Operational Intelligence</a> module provides an out of the box connector for pulling Amazon Web Services (AWS) CloudWatch metrics.   While there are many benefits to operational intelligence, from capacity planning to proactive avoidance of outages, this article will not be an overview of what Operational Intelligence (OI) can do, but rather a specific methodology for extending default metrics sent from AWS to OI. The following articles can provide great overviews of what OI is capable of doing.</p>
<p> </p>
<p><a title="" href="/community?id=community_blog&sys_id=199daa69dbd0dbc01dcaf3231f9619d3" rel="nofollow">OI — ML Summary by Simon White</a></p>
<p><a title="" href="/community?id=community_blog&sys_id=52bdaaa9dbd0dbc01dcaf3231f9619cf" rel="nofollow">Operational Intelligence in world of ML &amp; AI by Puru Amradkar</a></p>
<p><a title="" href="/community?id=community_blog&sys_id=085ee6addbd0dbc01dcaf3231f961970" rel="nofollow">Outage Prevention with Operational Intelligence by Aleck Lin</a></p>
<p><a title="" href="/community?id=community_blog&sys_id=c98d2669dbd0dbc01dcaf3231f9619ac" rel="nofollow">Operational Intelligence Algorithms by Alexander Margarit</a></p>
<p><a title="" href="/community?id=community_article&sys_id=b06ceaa1dbd0dbc01dcaf3231f961923" rel="nofollow">Knowledge17 Session: Operational Intelligence — Event Management vNext</a></p>
<p> </p>
<p>Like most software, there is occasion where a customer may want to extend the functionality provided &#34;out of the box&#34;.   In the case of sending metric data to ServiceNow from AWS CloudWatch, adding metrics that are not provided by AWS in their standard collection process would be a typical example.   Two of these that I saw right away are memory utilization and disk space utilization. CPU utilization is provided, but these other two key metrics would be critical for any capacity management effort as well as resource monitoring requirement.   This blog aims to show you how you can add these metrics to the CloudWatch stream and then pull them into the Operational Intelligence module of ServiceNow.</p>
<p> </p>
<p>Another important topic to call out prior to getting into the details is that of 3<sup>rd</sup> party monitoring systems.   Most organizations already use a monitoring tool (or 10), and these tools (Nagios, SCOM, SolarWinds, Zabbix, PRTG, collectd, etc) have the ability to capture nearly any metric possible.   These are all great sources to also send into Operational Intelligence, but they require extending into the AWS environment and CloudWatch is already there running all the time, so for those not wanting to extend those tools into AWS, this article is for you (though AWS does let you install their agent in on-premises resources to and send data to CloudWatch too).</p>
<p> </p>
<h2>Step 1: AWS Setup</h2>
<p> </p>
<p>The great part about CloudWatch is that it&#39;s native to the AWS platform and so there is essentially no setup.   That said, if you leverage AMI&#39;s to deploy instances, the following steps may necessitate an update to those AMI&#39;s to have your custom metrics included in any new provisioning requests.   <a title="ocs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html" href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html" rel="nofollow">AWS provides the documentation for adding custom metrics</a>, but I&#39;ll break down the high-level steps here.</p>
<p> </p>
<p>You can find details for custom metrics for Linux <a title="ocs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html" rel="nofollow">here</a> (note they&#39;re just facilitating for memory and disk space), but these are the basic steps:</p>
<ul style="list-style-type: disc;"><li>Login to Linux instance</li><li>Install various perl packages (and others depending on O/S type)</li><li>Download and install the monitoring scripts (perl scripts as you can imagine) — thank you AWS for creating these!</li><li>Create a crontab entry to collect metrics at specific frequency (<span style="font-family: &#39;Courier&#39;,serif;">crontab —e</span>)
<ul style="list-style-type: circle;"><li>In my testing I used the following, which gets consolidated disk space utilization versus mount by mount and collects the stats every 5 minutes</li></ul>
</li></ul>
<p> </p>
<pre class="language-javascript"><code>*/5 * * * * ~/aws-scripts-mon/mon-put-instance-data.pl --mem-util --mem-used-incl-cache-buff --mem-used --mem-avail --disk-space-util --disk-space-used --disk-space-avail --disk-path&#61;/ --from-cron</code></pre>
<p style="text-align: center;"> <span style="font-size: 10pt;">Example crontab for Linux</span></p>
<p> </p>
<p>You can find details for customer metrics for Windows <a title="ocs.aws.amazon.com/AWSEC2/latest/WindowsGuide/send_logs_to_cwl.html" href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/send_logs_to_cwl.html" rel="nofollow">here</a>, but these are the basic steps:</p>
<ul style="list-style-type: disc;"><li>Of the 3 options AWS provides, I chose to use the <a title="ocs.aws.amazon.com/AWSEC2/latest/WindowsGuide/send_logs_to_cwl_instances.html#send_logs_cwl_configfile" href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/send_logs_to_cwl_instances.html#send_logs_cwl_configfile" rel="nofollow">Local Configuration File</a> option</li><li>Login to Windows instance</li><li>Ensure the latest version of the SSM Agent is installed on the Windows instance</li><li>Edit AWS.EC2.Windows.CloudWatch.json file
<ul style="list-style-type: circle;"><li>Change &#34;IsEnabled&#34; to &#34;true&#34;</li><li>Add custom metrics just prior to section contain Access Key (and yes, the secret key is in this file too, clear text).</li><li>Restart the SSM Agent service</li></ul>
</li></ul>
<p> </p>
<p align="center"><img class="jive-image image-8" style="max-width: 1200px; max-height: 900px;" src="16993f71db14d3041dcaf3231f96191b.iix" width="573" height="288" /></p>
<p align="center">JSON File to Modify</p>
<p align="center"> </p>
<pre class="language-markup"><code>{
              &#34;FullName&#34;: &#34;AWS.EC2.Windows.CloudWatch.PerformanceCounterComponent.PerformanceCounterInputComponent,AWS.EC2.Windows.CloudWatch&#34;,
              &#34;Id&#34;: &#34;PerformanceCounterMemory01&#34;,
              &#34;Parameters&#34;: {
                  &#34;CategoryName&#34;: &#34;Memory&#34;,
                  &#34;CounterName&#34;: &#34;% Committed Bytes In Use&#34;,
                  &#34;DimensionName&#34;: &#34;InstanceId&#34;,
                  &#34;DimensionValue&#34;: &#34;{instance_id}&#34;,
                  &#34;InstanceName&#34;: &#34;&#34;,
                  &#34;MetricName&#34;: &#34;MemoryUtilization&#34;,
                  &#34;Unit&#34;: &#34;Percent&#34;
              }
          },
          {
              &#34;FullName&#34;: &#34;AWS.EC2.Windows.CloudWatch.PerformanceCounterComponent.PerformanceCounterInputComponent,AWS.EC2.Windows.CloudWatch&#34;,
              &#34;Id&#34;: &#34;PerformanceCounterDisk01&#34;,
              &#34;Parameters&#34;: {
                  &#34;CategoryName&#34;: &#34;LogicalDisk&#34;,
                  &#34;CounterName&#34;: &#34;% Free Space&#34;,
                  &#34;DimensionName&#34;: &#34;InstanceId&#34;,
                  &#34;DimensionValue&#34;: &#34;{instance_id}&#34;,
                  &#34;InstanceName&#34;: &#34;_Total&#34;,
                  &#34;MetricName&#34;: &#34;DiskSpaceUtilization&#34;,
                  &#34;Unit&#34;: &#34;Percent&#34;
           }
},
</code></pre>
<p> </p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;">Custom Metric section of AWS.EC2.Windows.CloudWatch.json file</span></p>
<p> </p>
<p>An important consideration to keep in mind is common naming of metrics across both Linux and Windows. If you want to report these metrics in a common roll-up fashion, be sure to give them the same name so that the CI in ServiceNow that represents the instance has a common metric regardless of O/S type.</p>
<p> </p>
<h2>Step 2: ServiceNow MID Server and Connector Setup</h2>
<p> </p>
<p>While all the detailed instructions for setting up the MID server with requisite extensions and connector instances can all be found in the <a title="ocs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/get-started-metrics.html" href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/get-started-metrics.html" rel="nofollow">OI Getting Started docs</a>, there are a couple of items worth mentioning outside of that documentation.</p>
<p> </p>
<p>First, the MID Server cluster used for OI is of the new type &#34;Distributed&#34;, but that does not mean that the MID Servers in the cluster can only be used for OI.   In fact, the docs say to use the same MID Server for regular events as for metric collection if you&#39;re using the default SCOM connector. Consider the added load on the MID server(s) for processing these extra metrics when determining whether or not to create new MIDs.</p>
<p> </p>
<p>Second, when <a title="ocs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/create-aws-metric-connector.html" href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/create-aws-metric-connector.html" rel="nofollow">defining the AWS connector instances</a>, be sure to explicitly define all the parameters noted in the docs, even when they note an &#34;Optional value&#34; which does not mean a default value.   And finally, when defining the connector instance, be sure to choose one of the MID servers you have in the distributed cluster and not the cluster itself.   As of this writing, the cluster could not be specified (but this will likely change in the future).</p>
<p> </p>
<h2>Step 3: ServiceNow Event Rules Setup</h2>
<p> </p>
<p>Operational intelligence delivers 2 baseline event rules for handling AWS CloudWatch Metrics (as of Kingston).   Depending on how many custom metrics and the namespace they end up in, you will need to create your own event rules because the baseline rules filter on the namespace value, and your custom metrics likely will not show up in this namespace.</p>
<p> </p>
<p style="text-align: center;"><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="7d39f3b9db9cdf04e9737a9e0f9619f8.iix" /></p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;">Baseline AWS VM Event Rule</span></p>
<p> </p>
<p>In my case, I had to create 2 new rules.   One rule for Linux and the other for Windows.   I started on the &#34;AWS Metrics Virtual Machine&#34; rule in the screenshot above and just did an &#34;Insert and Stay&#34;, then changed the name to insert &#34;linux&#34; and &#34;windows&#34; into the name value of the rule.   I then changed the namespace value to what is reflected in the AWS Console when browsing CloudWatch metrics.   These namespace values are controllable within the Linux perl scripts deployed or the JSON config file on the Windows instances.</p>
<p> </p>
<p style="text-align: center;"><img class="image-2 jive-image" style="max-width: 1200px; max-height: 900px;" src="94f0e106db50df048c8ef4621f961999.iix" /></p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;">Custom Linux Event Rule</span></p>
<p> </p>
<p><img class="image-3 jive-image" style="width: auto; height: auto; display: block; margin-left: auto; margin-right: auto;" src="88683c86dbd89344e9737a9e0f96198e.iix" /></p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;">Custom Windows Event Rule</span></p>
<p> </p>
<h2>Step 4: (if necessary) ServiceNow MetricBase Database</h2>
<p> </p>
<p>If you have Operational Intelligence licensed and requested the plug-in to be activated per the getting started steps, then you likely have all you need to get going.   However, something that may not be known is that Operational Intelligence eventually stores all this metric data in the platforms <a title="ocs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/metricbase/concept/metricbase.html" href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/metricbase/concept/metricbase.html" rel="nofollow">MetricBase application / database</a>.   The nice thing about Operational Intelligence is that it alleviates you needing to know much about the MetricBase application because it handles all the setup around metric registration, retention policies, storing the metric data, viewing the metric data, etc.</p>
<p> </p>
<p>So why do I mention it? Viewing the MetricBase status is not in the OI module, so it&#39;s good to know that it has its own module for debugging and seeing status.   If you requested the OI plugin to be activated, believe you have metrics coming into the instance correctly, but are not able to visualize them via something like Metric Explorer, then you may want to have support validate that the snc.com.clotho plugin is also activated as this represents the MetricBase application required for OI.</p>
<p> </p>
<h2>Step 5: Monitoring Registered Metrics</h2>
<p> </p>
<p>When you first connect AWS CloudWatch Metrics to your ServiceNow instance, a nice feature is that all the metrics will self-register within Operational Intelligence.   This also results in a bit of an administrative task because you likely do not want all those metrics causing noise within your navigating the Anomaly map or Metric explorer.   In my simple testing where I added a minimal number of custom metrics previously described, there were 140 metrics self-registered in my instance.   You can see a list of <a title="ocs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html" href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html" rel="nofollow">AWS Metrics</a> to get a better idea of what they deliver by default into CloudWatch.</p>
<p> </p>
<p>It&#39;s easy enough to just go into the &#34;Metric Types&#34; list in OI and deactivate metrics you don&#39;t want in the instance.   This also helps with processing time because the AWS connector is a pull connector and so we can cease with pulling and processing those metrics.   Some important information on scaling with regards to how many metrics we can process can found in the docs <a title="ocs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/configure-metric-monitors.html" href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/configure-metric-monitors.html" rel="nofollow">here</a>.</p>
<p> </p>
<h2>Step 6: Using the Data</h2>
<p> </p>
<p>At this point we should have our metrics flowing in and you can verify by looking at the same Events table that standard event management uses (em_event).</p>
<p> </p>
<p><span style="font-size: 10.0pt;"><img class="jive-image image-4" style="width: 620px; height: 143px; display: block; margin-left: auto; margin-right: auto;" src="b4c8d846db989fc068c1fb651f961974.iix" /></span></p>
<p style="text-align: center;"><span style="font-size: 10.0pt;">Raw Metric Events</span></p>
<p> </p>
<p>Metric events do not, by default, become regular IT alerts as happens in standard event management. Instead, the OI application exposes &#34;Anomaly Alerts&#34; based on the learned boundaries calculated for each CI / Metric Type (e.g. instance-abc CPU utilization threshold range is calculated between 20-45% so create anomaly alerts when it falls outside that range).</p>
<p> </p>
<p style="text-align: center;"><img class="image-5 jive-image" style="max-width: 1200px; max-height: 900px;" src="b126fff5dbd05704ed6af3231f961920.iix" width="602" height="182" /></p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;">Alert Anomalies</span></p>
<p> </p>
<p>These alert anomalies are likely to open and close repeatedly (re-opening the same one) if metrics continually fall outside the calculated range.   You can override the calculated ranges with Metric Classes, so alert anomalies are only created when the metric falls above or below your manually defined bounds.   You can have these alert anomalies create actual IT alerts if you find them to be identifying issues you want actioned.   This is done by going into the alert anomaly record and scrolling all the way to the bottom where you will see a &#34;Promote anomaly alert&#34; button to start the process.</p>
<p> </p>
<p>In terms of other useful visualizations of the data, the <a title="ocs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/view-metrics-explorer.html" href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/view-metrics-explorer.html" rel="nofollow">Metric Explorer</a> lets you quickly drag and drop one or more metrics onto a canvas that can instantly graph the metric(s) over a certain time period.   Two of the metrics you can see below are our custom metrics of &#34;MemoryUtilization&#34; and &#34;DiskSpaceUtilization&#34;.</p>
<p> </p>
<p style="text-align: center;"><span style="font-size: 10.0pt;"><img src="sys_attachment.do?sys_id&#61;465d485ddb7413004fc2f4621f9619f8" /></span></p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;">Metric Explorer</span></p>
<p> </p>
<p>The <a title="ocs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/view-anomaly-map.html" href="https://docs.servicenow.com/bundle/kingston-it-operations-management/page/product/event-management/task/view-anomaly-map.html" rel="nofollow">Anomaly Map</a> provides a visualization that defaults to showing the &#34;hottest&#34; configuration items in terms of anomaly score and anomaly alert severity.   However, you can create a CMDB group, pinned CI&#39;s, or even business services as the focus of the map.   You can see our custom metrics of &#34;MemoryUtilization&#34; and &#34;DiskSpaceUtilization&#34; are being reflected.</p>
<p> </p>
<p style="text-align: center;"><span style="font-size: 10.0pt;"><img src="sys_attachment.do?sys_id&#61;065d485ddb7413004fc2f4621f9619f9" /></span></p>
<p style="text-align: center;" align="center"><span style="font-size: 10.0pt;">Anomaly Map</span></p>
<p> </p>
<h2>Conclusions</h2>
<p> </p>
<p><span style="font-size: 12.0pt; font-family: &#39;Calibri&#39;,sans-serif;">There are numerous options for getting metrics into the Operational Intelligence application. In this post we were aiming to expose how to extend what AWS CloudWatch will send ServiceNow so that more comprehensive outage prevention can be obtained without 3<sup>rd</sup>-party tools. The collection of these metrics not only provides valuable anomaly detection capabilities based on powerful machine learning, but also lay the foundation for other capabilities when combined with other aspects of the ServiceNow platform.   Imagine using <a title="ocs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/reference/r_PALandingPage.html" href="https://docs.servicenow.com/bundle/kingston-performance-analytics-and-reporting/page/use/performance-analytics/reference/r_PALandingPage.html" rel="nofollow">Performance Analytics (PA)</a> to score and store the daily average of important metrics that relate to capacity management.   You could then set thresholds and apply forecasting models native to the PA application in order to obtain a proactive procurement cycle of critical infrastructure that may take weeks to deliver instead of being reactive and experiencing extended ou</span></p>
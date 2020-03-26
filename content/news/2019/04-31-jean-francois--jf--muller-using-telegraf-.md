---
title: "Using Telegraf OpenSource Agent for Collecting and Reporting Metrics  Data to ServiceNow Operational Intelligence"
date: 2019-04-30T18:09:24.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=056f93f2dbcdf344fff8a345ca961965"
---
<h2 class="ng-scope">The what and why…</h2>
<p class="ng-scope">In order to eliminate service outages, we must be able to predict potential anomaly before it turns into an actual outage. Proactively analyse your IT infrastructure performance to spot service degradation is the goal. Machine learning intelligence analyses operational metrics about IT infrastructure that might cause service outages, both on premises and in multi cloud environments. As an add on application to Event Management, Operational Intelligence is a key preventive ingredient to help eliminate service outages.</p>
<p class="ng-scope">This module has the ability to integrate with any metric source, and a metric can be a measurable unit of just about anything. This module’s capability is to ingest metrics and by applying machine learning, automatically determines what a normal range would be for the specific metric by establishing the upper and lower bound.</p>
<p class="ng-scope">However, it relies on a 3rd party to collects metric data from the source environment regularly.<br />ServiceNow Event Management and Operational Intelligence user interfaces are designed to handle a significant volume of events and metrics, which make them excellent candidates to complement a robust agent framework.</p>
<p class="ng-scope">For this exercise, I have decided to use <a href="https://docs.influxdata.com/telegraf" rel="nofollow">Telegraf</a>, since it’s a modern opensource extensible agent framework (The first version of Telegraf was released in 2015) that has already a large community but no official integration with ServiceNow (so far).</p>
<p class="ng-scope"><a href="https://docs.influxdata.com/telegraf" rel="nofollow">Telegraf</a> is an agent written in Go for collecting, processing, aggregating, and writing metrics. <br />The design goals of this his agent are to have a minimal memory footprint with a plugin system so that developers in the community can easily add support for collecting metrics <br />As of the writing of this blog entry, over 160 plugins developed by the community are available. <br />There are four types of plugins:</p>
<ul class="ng-scope"><li>Inputs: self-explanatory gather the Data</li><li>Outputs: those are responsible for sending the data to your destination</li><li>Aggregators: can perform things like means, media historically gram etc.</li><li>Processors: do anything form adding tags to renaming fields.</li></ul>
<p class="ng-scope">Telegraf can grab metrics from host systems (CPU, I/O, Network etc) and also from 3rd party software like <a href="https://github.com/influxdata/telegraf/blob/release-1.8/plugins/inputs/vsphere/README.md" rel="nofollow">VMWare</a>, <a href="https://github.com/influxdata/telegraf/tree/release-1.8/plugins/inputs/postgresql" rel="nofollow">Postgres</a>, <a href="https://github.com/influxdata/telegraf/tree/release-1.8/plugins/inputs/redis" rel="nofollow">Redis</a> and well as Cloudwatch.</p>
<p class="ng-scope">Output plugins are able to send metrics to a variety of other datastores but was not so far able to send these metrics to ServiceNow.</p>
<p class="ng-scope">The purpose of this blog is to illustrate how a modern open source monitoring agent can be used to complement ServiceNow and also contribute to the Telegraf community by providing a way to steam metrics to the ServiceNow Operational Intelligence module.<br />Therefore, alongside of this blog post, I have developed an interface that basically enable Telegraf agent to stream metrics to Operational Intelligence with a minimal configuration and I have submitted this development to the Telegraf community. This contribution has been accepted by the Telegraf community and included in their core code in Telegraf release 1.10. <br />This integration drafts a possible End-to-End Monitoring solution using a modern open source agent as collection layer and Service IT Operations Management suite for Intelligence and User Interface.</p>
<h2 class="ng-scope">How?</h2>
<p class="ng-scope">The below research results and developments are based on ServiceNow London release although Kingston release does offer the same capabilities and of course this works with Madrid release as well.<br /><br />My initial approach was to consider writing a specific output plugin, but after having researched the existing plugins I figured out that the HTTP output plugin does offer almost all what is needed.<br />It features the support of basic authentication credentials in HTTP post request which is a requirement from the MID Web Server Metric API. <br />It even features a JSON output format but unfortunately this format doesn’t match with the format expected by the MID server for Operational Intelligence metrics.</p>
<p class="ng-scope">So, to make the metrics streaming possible, the only thing that was needed is an output format that complies with the ServiceNow OI specification.</p>
<p class="ng-scope">Request payload specification example:</p>
<pre class="ng-scope  language-markup"><code>[{
    &#34;metric_type&#34;: &#34;Disk C: % Free Space&#34;,
    &#34;resource&#34;: &#34;C:\\&#34;,
    &#34;node&#34;: &#34;lnux100&#34;,
    &#34;value&#34;: 50,
    &#34;timestamp&#34;: 1473183012000,
    &#34;ci2metric_id&#34;: {
        &#34;node&#34;: &#34;lnux100&#34;
    },
    &#34;source&#34;: “Telegraf”
}]
</code></pre>
<p class="ng-scope">Telegraf offer the ability to customize the output formats via configuration, therefore the development of a custom serializer plugin that ensure to format the metric stream like expected by the MID metric API was required.<br />As already mentioned, this contribution has been integrated in the Telegraf core. (See v1.10 [2019-03-05] <a href="https://github.com/influxdata/telegraf/blob/master/CHANGELOG.md" rel="nofollow">release note</a>)</p>
<p class="ng-scope">If you are looking to compile this extension with your own telegraf project, have a look for the files marked with “<a href="https://github.com/JefMuller/telegraf/commits?author&#61;JefMuller" rel="nofollow">Add ServiceNow Metrics serializer</a>” tags and import them in your repository: (This is not needed if you <a href="https://portal.influxdata.com/downloads/" rel="nofollow">download</a> the current release of Telegraf)</p>
<ul class="ng-scope"><li><a href="https://github.com/JefMuller/telegraf/blob/master/plugins/serializers/nowmetric/nowmetric.go" rel="nofollow">plugins/serializers/nowmetric/nowmetric.go</a></li><li><a href="https://github.com/JefMuller/telegraf/blob/master/plugins/serializers/nowmetric/nowmetric_test.go" rel="nofollow">plugins/serializers/nowmetric/nowmetric_test.go</a></li><li><a href="https://github.com/JefMuller/telegraf/blob/master/plugins/serializers/nowmetric/README.md" rel="nofollow">plugins/serializers/nowmetric/README.md</a></li><li><a href="https://github.com/JefMuller/telegraf/blob/master/plugins/serializers/registry.go" rel="nofollow">plugins/serializers/registry.go</a></li></ul>
<p class="ng-scope">From the ServiceNow side, you need to configure an Operational Intelligence MID Server. This <a href="https://docs.servicenow.com/bundle/london-it-operations-management/page/product/event-management/task/get-started-metrics.html" rel="nofollow">link</a> describe all steps needed to achieve this setup.</p>
<p class="ng-scope">Please ensure to record the port number on which the MID API is going to listen to incoming requests/metrics. (MID Web Server Context form, HTTP/HTTPS Port)<br />Also ensure to use Basic Authentication Type when configuring MID Web Server extension and to store user name and the password so you can reuse them in the he agent configuration.</p>
<p class="ng-scope">Once you have, an Operational Intelligence MID Server up &amp; running, you can deploy and configure the Telegraf agent.</p>
<p class="ng-scope">In my case, I have simply created a C:\Telegraf directory in which I have dowloaded the <a href="https://portal.influxdata.com/downloads/" rel="nofollow">Telegraf binary</a> and telegraf.conf configuration file (Attached to this blog post). This configuration file is designed for Windows.</p>
<p class="ng-scope">To execute the agent with the above configuration, simply execute the following command:</p>
<pre class="ng-scope  language-javascript"><code>&gt; telegraf.exe –config telegraf.conf</code></pre>
<p class="ng-scope">If you use Telegraf on another operating system, you will have to decide what you want to monitor. Running the following command will generate a sample config file listing many inputs and outputs. You can view the resulting telegraf.conf file if you wish.</p>
<pre class="ng-scope  language-javascript"><code>&gt; telegraf -sample-config -input-filter cpu:mem:swap -output-filter http &gt; telegraf.conf</code></pre>
<p class="ng-scope"> </p>
<p class="ng-scope">HTTP Output plugin has to be used and combination with the new serializer as describe in the configuration below.</p>
<p class="ng-scope"><img src="https://community.servicenow.com/55b886afdb09b78413b5fb243996194a.iix" /></p>
<p class="ng-scope">The URL setting has to be setup to match your environment:</p>
<pre class="ng-scope  language-markup"><code>http://&lt;MID SERVER IP OR FQDN&gt;:&lt;MID Web Server Extension Port&gt;/api/mid/sa/metrics</code></pre>
<p class="ng-scope">username and password should match your MID Web Server Extension configuration.<br />The data_format parameter has to be set to “nowmetric&#34; to ensure the new serializer is used.</p>
<p class="ng-scope">Firewall setting should allow the communication between the host running the Telegraf agent and the MID Web Server extension and port.</p>
<p class="ng-scope"><img src="https://community.servicenow.com/a4e88a23db49b78413b5fb24399619b2.iix" /></p>
<p class="ng-scope">Telegraf agent can be setup to send metrics locally or remotely to the mid server web server extension.</p>
<p class="ng-scope">Operational Intelligence Metric Explorer can be used to visualize the metric collected:</p>
<p class="ng-scope"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/2d090ea3db49b78413b5fb243996190b.iix" /></p>
<p class="ng-scope">The metric threshold does take a little while (at least a few hours) to generate because it requires time (a couple of hours at least). Once the threshold is generated, you should start seeing anomaly scores in the Anomaly map.</p>
<p class="ng-scope"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/b7094ae3db49b78413b5fb24399619af.iix" /></p>
<p class="ng-scope">Hope you enjoyed the exercise. Feel free to provide us feedback. We might eventually develop this further if there is an interest from the community.</p>
<p class="ng-scope">I&#39;d like to thanks <a href="https://github.com/DanielNelson" rel="nofollow">Daniel Nelson</a> (Telegraf Community Manager) for his advice and code review.</p>
<p class="ng-scope"> </p>
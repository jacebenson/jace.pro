---
title: "How Are other ServiceNow Customers Deploying MID Servers"
date: 2019-02-18T01:02:22.000Z
authors: ["Ryan Lee"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=adbd3577dbaf6300e0e80b55ca961915"
---
<div>I’ve recently had several customers approach me as they continue to expand their ServiceNow footprint across Discovery, Service Mapping and Event Management.   </div>
<div> </div>
<div>The question I hear most is:  “How do other customers size their MID Servers?”</div>
<div> </div>
<div>Several of my peers have written some really good community posts citing the formulas they&#39;ve used during deployments over the years.   </div>
<ul><li>
<div>Robert Geen’s <a href="community?id&#61;community_question&amp;sys_id&#61;750f0fa1dbdcdbc01dcaf3231f961995" rel="nofollow">Best practice for MID Server Sizing</a></div>
</li><li>
<div>Doug Schulze’s <a href="community?id&#61;community_question&amp;sys_id&#61;d345c3addbd8dbc01dcaf3231f961912" rel="nofollow">Discovery Spiking CPU Usage...</a></div>
</li></ul>
<div>After referring folks to the posts above, I polled about a dozen customers get an idea of how they are deploying MID Servers.     </div>
<div> </div>
<div><strong>Industries Polled:</strong></div>
<div>
<ul><li>Retail</li><li>Manufacturing</li><li>Waste Management</li><li>Finance</li><li>Energy</li></ul>
<p><strong>Environment size:</strong></p>
<ul><li>Small as 2k servers</li><li>Large as 50k&#43; servers</li></ul>
<p><strong>ServiceNow ITOM Solutions:</strong></p>
<ul><li>Discovery</li><li>Service Mapping</li><li>Event Management</li><li>Orchestration</li></ul>
<div><strong>MID Server sizing:</strong></div>
<div> </div>
<div>As a PC gamer, I know the minimum hardware specs for Assassin’s Creed Odyssey isn’t going to give me 60 fps at 4k.    I need the latest graphics card, an overclocked CPU, and at least 16GB of RAM.     </div>
<div> </div>
<div>The same applies for your MID Server.     Of course, you don’t care about frame rates or hi-def but you do care about how long it takes to run a Discovery job and the throughput of events into Event Management.   </div>
<div> </div>
<div>Here&#39;s a fairly typical set of VM specs I found across several customers:</div>
<div>
<ul><li>4 CPUs &#64; 2GHz or higher</li><li>32 GB Memory</li><li>80-100 GB Disk</li></ul>
<p>MID Server configuration settings were was really broad.   You&#39;ll have a lot of wiggle room to adjust with a beefier server though.   </p>
<ul><li>25-100 Threads</li><li>1/2 GB Memory/Thread</li></ul>
<p>Be sure to watch the <strong>MID Server &gt; Dashboard</strong> to see how your performance fares over time.    </p>
<p><img style="max-width: 100%; max-height: 480px;" src="4243ca7fdbaf6300e0e80b55ca96199d.iix" /></p>
<p> </p>
<p><strong>What else are customers doing to get the most out of their MID Servers?</strong></p>
<ol><li>Deploying <a href="https://docs.servicenow.com/bundle/madrid-servicenow-platform/page/product/mid-server/reference/r-MIDServer.html" rel="nofollow">MID Servers</a> in Clusters.   Some of the larger customers deployed MID Server clusters in groups of 4.     Most of them have been able to discover ~5k servers in less than 2 hours.   </li><li>Avoid scheduling concurrent Discovery jobs against the same MID Server or Cluster.</li><li>Dedicate MID Servers to specific Applications.   Within each MID Server you’ll see an Application tab.    Be sure to separate Discovery from Event Management if nothing else.      You’d be fine having your MID Server supporting Service Mapping and Discovery so long as you the schedules were running concurrently.</li></ol>
<div><img src="49e7c2f7dbef6300e0e80b55ca96196c.iix" /></div>
<div>
<div><strong>Coolest Customer Story</strong></div>
<div>So what was the coolest thing I heard from one of our customers when asking about the MID Server sizing, configuration, and best practices they follow?   </div>
<div> </div>
<div>Auto-Scaling.   That’s right, they deploy their MID Servers into an auto-scaling VM or Cluster and let it consume as much resources as needed.   This seemed like such an obvious answer but most of the ServiceNow team’s I’ve spoken to don’t see this an option from their Server team.    </div>
<div> </div>
<div>This customer in particular is incredibly mature and has a massive datacenter footprint.    50k&#43; servers.    Their Server team supports a large OpenStack environment so it was a forgone fact that this is how they’d deploy their MID Servers VMs.     </div>
<div> </div>
<div>I know everyone doesn’t have a massive datacenter footprint and an OpenStack environment, but there are a few options available:</div>
<div>
<ul><li>
<div><a href="https://blogs.vmware.com/vcloud/2018/08/autoscaling-with-vcloud-director-9-x.html" rel="nofollow">VMware</a> Autoscaling.    For customers who’ve bought vCloud Director they have this option readily available.    </div>
</li><li>
<div><a href="https://azure.microsoft.com/en-us/features/autoscale/" rel="nofollow">Azure</a> and <a href="https://aws.amazon.com/autoscaling/" rel="nofollow">AWS</a> both have Autoscaling features enabled.</div>
</li><li>
<div><a href="https://turbonomic.com/" rel="nofollow">Turbonomic</a>.   I recently participated in an Event Management POV where the customer wanted us to integrate with Turbonomic.   Instead of Turbonomic autoscaling VMs, which it does by default, we wanted it to send an event into ServiceNow so we could create a Normal Change before sending a response back to resize the VM.     Definitely a nice way to track change in a world where we need to respond to the dynamic needs of our applications. </div>
</li></ul>
<p>Now go get those MID Servers running with 60 fps at 4k!</p>
<p>--Ryan</p>
</div>
</div>
</div>
</div>
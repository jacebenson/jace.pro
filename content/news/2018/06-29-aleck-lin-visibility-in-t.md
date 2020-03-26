---
title: "Visibility In the CloudFirst World"
date: 2018-06-28T11:21:23.000Z
authors: ["aleck.lin"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b08b0ed0dbc3d704feb1a851ca961939"
---
<div>It’s no surprise that many enterprises have been adopting the public cloud in some shape or form for the last several years; and the pace has only continued to increase. As a result, the urgency to have some type of cloud strategy has become increasingly palpable. </div>
<div> </div>
<div>So… where does ServiceNow fit into all this?</div>
<div> </div>
<div>First of all, let’s talk about the challenges. <strong>Visibility</strong> into an enterprise’s environment has always been tough, but it is a necessary step in order to achieve various business outcomes. Simply put, visibility is an important means to provide solutions around cost management, security operations, asset management, compliance, root cause analysis, change planning etc. With the increased adoption of the cloud technology and the DevOps methodology, the difficulty in gaining complete visibility is further exacerbated. </div>
<div> </div>
<div>In the world of ServiceNow, visibility is provided by the CMDB - Configuration Management Database. It is the single system of record that enables many solutions that ServiceNow offers. From an IT Operations Management point-of-view, the CMDB is populated by solutions such as Discovery and Service Mapping, which provide the overall visibility of the environment and create service-aware CMDB in order to achieve the business outcomes previously mentioned. </div>
<div> </div>
<div>In my recent customer interactions, perhaps the most common question I get is around how ServiceNow can provide visibility into the cloud world, especially when it comes to ephemeral or platform-as-a-service resources; and most important of all, how is ServiceNow going to keep up with the ever-changing technologies in the cloud?</div>
<div> </div>
<div>Well, I’m happy to say that while we can’t solve everything under the sun, we do, or al least starting to, offer solutions to these increasingly common questions! Let me outline a few questions and answers below and hopefully a couple of them, if not all, will hit home for you.</div>
<div> </div>
<div><strong><u>How to keep a near-real time CMDB?</u></strong></div>
<div>While Discovery and Service Mapping solutions can and should be used for populating the CMDB, did you know that you could also leverage event-driven updates from cloud providers to understand what has changed to the resources in your cloud environment? Here are some examples that you could look at the CMDB to find the answers... Is my VM still running? Has a new VM been spun up? Has a PaaS resource like ELB or RDS been created? Are my tags up-to-date against my resources? </div>
<div> </div>
<div>All of this could be accomplished through what we call Alert Configuration by leveraging event-driven updates from cloud providers such as AWS, Azure, and VMware. It does take a little time (a couple of minutes) for the updates to come through based on how quickly the provider can notify ServiceNow, but it is much faster than waiting for a scheduled Discovery to kick off in order to keep the CMDB up-to-date. Additionally, using the event-driven method, when dealing with ephemeral resources, the CMDB will have a record of what transpired! </div>
<div> </div>
<div><strong><u>Do you provide the end-to-end visibility from application to server to cloud components?</u></strong></div>
<div>Yes! Here’s an example of a dependency map for a 3-tier application service. You can trace the following dependencies...</div>
<ul><li>
<div>The software component to the operating system it runs on.</div>
</li><li>
<div>The particular virtual image that provided the basis for the operating system.</div>
</li><li>
<div>The hardware type of the VM that was spun up.</div>
</li><li>
<div>The datacenter that the application service runs within.</div>
</li></ul>
<div> </div>
<div><img src="f709c218db83d704feb1a851ca9619fe.iix" width="685" name="en-media:image/png:63deab69b2195db2cd56b7225ab1d85a:none:none" /></div>
<div>As you can see from the map, tracking down the application stack end-to-end will provide valuable insights. This is extremely important because when it comes down to root cause analysis or change planning, information is the key to make good decisions! </div>
<div> </div>
<div><span style="text-decoration: underline;"><strong>How and what can you report against cloud resources? </strong></span></div>
<div>As part of the cloud Discovery, ServiceNow can discover resource tags along the way. This allows you to run reports against resources based on these tag attributes so that you can get answers to questions like the following...</div>
<ul><li>
<div>Who or which group is consuming what resources?</div>
</li><li>
<div>Who is the biggest consumer of certain resources? </div>
</li><li>
<div>Any VM image that isn’t officially blessed? If so, who should you talk to? </div>
</li></ul>
<div> </div>
<div>Additionally, if you own the solution for downloading billing information, the previous questions can be looked at from the lens of dollar amounts. For example, you can ask questions like</div>
<ul><li>
<div>Where are my cost centers and what’s the breakdown? </div>
</li><li>
<div>Who or which group is costing the most per month? </div>
</li></ul>
<div> </div>
<div>Also, keep in mind that ServiceNow is cloud-agnostic, so if you are a hybrid-cloud organization, we can normalize the information and provide the answers to the above questions holistically!</div>
<div> </div>
<div><strong><u>How do you keep up with the latest and greatest newfangled thing?</u></strong> </div>
<div>It is not uncommon for cloud providers to constantly release new services; while ServiceNow is a platform that can accommodate changes through customizations, customers typically want updates that are officially released and supported by ServiceNow. By leveraging the scoped app mechanism, I’m proud to say that we have officially kicked off the ability to release out-of-band content through the ServiceNow Store. This is absolutely a huge step forward in making sure that ServiceNow can continue to innovate and keep up with the customer demands while minimizing any service disruption. For the latest content on PaaS and container Discovery, see <a href="community?id&#61;community_user_profile&amp;user&#61;bf2f8665db181fc09c9ffb651f96190c" rel="nofollow">Sree</a>’s post on <a href="community?id&#61;community_blog&amp;sys_id&#61;1b80b148db3a1380e0e80b55ca96197d" rel="nofollow">Content shipping of discovery patterns via ServiceNow store</a>!</div>
<div> </div>
<div>I will wrap up my post here and hopefully this has served to elucidate how ServiceNow ITOM can be a part of your cloud strategy from a visibility point of view. Please feel free to post comments and questions for further discussions! </div>
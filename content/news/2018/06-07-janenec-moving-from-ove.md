---
title: "Moving from Overwhelmed to Empowered"
date: 2018-06-07T02:42:21.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=495b886ddbe213808e7c2926ca9619fe"
---
<p>The Gartner Security &amp; Risk Management Summit is on in National Harbor, MD this week. Monday&#39;s keynote opened with how organizations can go from being overwhelmed (by a lack of staff, too much security noise, too many projects, and new regulations) to being empowered (to take action, adapt, and scale).</p>
<p>This process starts with determining the heart of the issue by looking at three things:</p>
<ul><li>What&#39;s important?</li><li>What&#39;s dangerous?</li><li>What&#39;s real?</li></ul>
<center><img src="274b086ddbe213808e7c2926ca9619fa.iix" height="400px" /></center>
<p>My recreation of Gartner&#39;s diagram. See that purple bit in the middle? That&#39;s what we want to get to.</p>
<p>So how to we get to that intersection of these three circles? Let&#39;s start by breaking down each one.</p>
<p> </p>
<h4>Important</h4>
<p>This seems simple enough, but what&#39;s important to me might not be important to you, and so on. This is especially true when you have people from different teams with different goals. In security, your goal might be keeping the organization as secure as possible, but to IT, that might mean keeping services available no matter what. This can cause friction when security thinks the best course of action is to take a system offline, as this goes against IT&#39;s goal. So how do we reach a compromise? In this case, visibility  can help both sides better understand what they&#39;re up against. What service does an asset support? What will happen if we take it offline? What changes are currently pending? What other problems might that asset have? And resiliency is key to keeping services running even when something needs to be fixed.</p>
<p> </p>
<h4>Dangerous</h4>
<p>You likely have dozens of security tools designed to tell you exactly what&#39;s dangerous, but just like with importance, your definition or your ranking may not be the same as someone else&#39;s. Vulnerabilities definitely have the potential to be dangerous, but there are so many that you have to prioritize them somehow. The CVSS score is one way to do it, but that alone isn&#39;t what makes it really dangerous--it&#39;s what&#39;s at stake if the vulnerability is exploited. The particular asset affected by the vulnerability, its content, and the risk to the business if it were to go down are what can make something incredibly dangerous. Ideally you want to have a good understanding of your assets and their importance before something happens to help you prioritize vulnerabilities.</p>
<h4> </h4>
<h4>Real</h4>
<p>This is where we start getting closer to the overall answer. Continuing with the vulnerability example, we&#39;ve determined why they have the potential to be dangerous if they&#39;re exploited, but the number that are actually exploited is fairly low overall, according to research presented by Gartner. Now, I&#39;d never say don&#39;t patch because your odds of exploit are low. I learned to calculate risk as the product of probability x impact, and even if the probability of an exploit is low, if the impact as covered in &#34;Dangerous&#34; above is high, you&#39;re looking at a real risk that should be mitigated. But it&#39;s also important not to rush and potentially cause other problems. Spectre and Meltdown were used as an example where some organizations reacted too quickly and ended up introducing other vulnerabilities or performance issues.</p>
<p> </p>
<h4>What&#39;s in the middle?</h4>
<p>Here&#39;s where we can take the learnings from each of the three circles and come together. In this vulnerability management example, it seems we need good visibility into assets--to understand what they support and how they impact the business as well as the sensitivity of any data. With great visibility, we can quickly determine what&#39;s important and potentially dangerous. Visibility will also assist with creating recovery and continuity plans for a more resilient enterprise.</p>
<p>Next we want to prioritize risks for mitigation. Now that we have visibility into which assets are most important, we can combine that with vulnerability scan data to see what needs to be addressed first by calculating the risk of both the individual vulnerability and the affected asset. With a prioritized list, teams can start working on the most important issues first. Automation is also a valuable tool to help understaffed teams tackle that prioritized list.</p>
<p>I found this an interesting way to break down a problem into more basic components. You might find it useful next time you&#39;re dealing with an issue where stakeholders have conflicting goals or views on the topic. </p>
<p>The Gartner Security &amp; Risk Management Summit is nearly over now (and it&#39;s been busy!), but you can next catch us at Black Hat August 8-9 at the Mandalay Bay Convention Center in Las Vegas.</p>
<p> </p>
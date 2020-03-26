---
title: "What Customers can Expect from a Penetration Test"
date: 2018-04-17T16:08:49.000Z
authors: ["sofiane.talmat@servicenow"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=59da58dddba193c04e1df4621f96197b"
---
<p>If there is anything I have learned as a security consultant, it is that what we sell to our customers is the Report. Instead of speaking about what a penetration test report should contain, I&#39;ll show you what you can expect to get from a <a href="community?id&#61;community_blog&amp;sys_id&#61;f1fd262ddbd0dbc01dcaf3231f961926&amp;view_source&#61;searchResult" target="_blank" rel="nofollow">penetration test</a>.</p>
<ul><li><span style="font-size: 11px;">Clear and Concise results</span></li><li><span style="font-size: 11px;">A Project Timeline</span></li><li><span style="font-size: 11px;">Penetration tester skill set</span></li><li><span style="font-size: 11px;">Vulnerabilities</span></li><li><span style="font-size: 11px;">Remediations and Recommendations</span></li></ul>
<p>Let’s take a look the other way around and see what a customer is expecting.</p>
<h1>What Customers can Expect from a Penetration Test</h1>
<h2><strong>Clear and Concise Results </strong></h2>
<p>In most cases, as a reviewer, you may not be as technical as the penetration tester. What you need is to have a clear and straight forward idea of what the security “status” is for your product. This is what most penetration testers include as the executive summary. It should be concise, containing key project and security indicators such as:</p>
<ol><li>What kind of test was performed</li><li>What part of the product was covered</li><li>What was not covered</li><li>What was the overall security evaluation of the tested product</li></ol>
<p> </p>
<h2><strong>A Project Timeline</strong></h2>
<p>As a penetration test project initiator and product owner, you will want to know how much time was actually spent on testing the project. This should cover the scope and more detail on how much time was spent on each part of the project. Mapping this information to your product knowledge, you ascertain the level of effort that was provided in each testing area. Ideally, this will let you understand the project coverage and allow correlation to what was previously reported by the penetration testers. With such comprehensive information, you will know what to focus on for the next round.</p>
<p> </p>
<h2><strong>Penetration Tester Skill Set</strong></h2>
<p>It is good to have a consolidated report with detail on the consultant’s level of knowledge and key focus areas. By mapping the consultant knowledge levels, project coverage, and time distribution on tasks you will have an idea about the level of effort/time/knowledge an attacker will need to break down your security mechanisms. This will let you estimate what security measures you have to implement and what/where the budget should be spent. I always consider that it is important for the vendor to inform the customer about the extra hours spent on the project even if they are not billed. The reason is that  spending 20 extra hours on a 40 hour project without informing the customer will falsify the metrics and may provide incorrect data on the actual security exposure of the product.</p>
<p> </p>
<h2><strong>Vulnerabilities</strong></h2>
<p>A standard is to map a risk impact/probability classification of all vulnerabilities and a  prioritization. A CVSS (Common Vulnerability Scoring System) calculation is very important especially on metrics that are generally neglected by penetration testers such as the Temporal and Environmental ones. Temporal metrics are very important to define a proper remediation priority depending on the exploit and the existence of a workaround or a remediation. The Environmental metrics are used to customize the vulnerability scoring depending on the affected asset for better accuracy. For example, an XSS (Cross Site Scripting) vulnerability in a banking system should not be scored at the same level as an XSS within a blog post. The more accurate the scoring is, the more beneficial the report is.</p>
<p> </p>
<h2>Remediation and Recommendations</h2>
<p>Each finding should be backed up with appropriate recommendation for fix. Recommendations for remediation should be as detailed and clear as possible and based on industry best practices.</p>
<p>Additionally, the penetration tester will provide an estimate for the “ease to fix” for each finding based on his own skill and experience. This will help in prioritizing the remediation process with a focus on High risk findings with low effort to fix vulnerabilities.</p>
<p>---</p>
<p> </p>
<p>ServiceNow maintains an active customer penetration testing program. The objective is to allow the customers assessment capability by performing penetration testing on one of their non-production instances with ServiceNow team assistance.  </p>
<p> </p>
<p>To produce the most accurate results and to minimize false positive findings, the instance should be properly hardened and on the latest patched version of a supported release with the High Security Plugin (HSP) enabled. Then schedule a penetration test through HI “Schedule a Penetration Test” menu item. The Application Security team will review the request, prepare the instance, and agree on a penetration test start date.</p>
<p> </p>
<p>At the end of the Penetration Test, any security findings are reported to the customer with sufficient details, proof of concepts, and steps to reproduce for each finding. As a final note, it is recommended to review in details ServiceNow Customer Penetration Test Policy (<a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0538598" rel="nofollow">KB0538598</a>) and ensure to comply to the policy during the penetration test activity.</p>
<p> </p>
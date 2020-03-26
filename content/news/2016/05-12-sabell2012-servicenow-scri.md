---
title: "ServiceNow Scripting  Calling a SubWorkflow Part II"
date: 2016-05-12T04:17:52.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=11ecea65dbd0dbc01dcaf3231f9619f4"
---
<p><span style="font-style: inherit; font-family: inherit;"><strong>NOTE</strong></span>: ON APRIL 1, 2016 ACCENTURE COMPLETED THE ACQUISITION PROCESS OF CLOUDSHERPAS.   AT THAT TIME THE CLOUDSHERPAS BLOG SITES WERE DOWNED FOREVER.</p>
<p> </p>
<p>THIS IS THE RE-PUBLICATION OF MY ARTICLE FROM <span style="font-style: inherit; font-family: inherit;"><strong>September 22, 2015</strong></span> ON THE CLOUDSHERPAS SERVICENOW SCRIPTING 101 BLOG.</p>
<p>____________________________________________________________________________</p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Calling sub-workflows can help build upon existing functionality and reduce workflow complexity, making it a best practice if you&#39;re using ServiceNow Orchestration. But how do you do this?</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">In <a href="community?id&#61;community_blog&amp;sys_id&#61;fdbd6aa9dbd0dbc01dcaf3231f9619ed" rel="nofollow">the first half of this post</a>, </span><span style="font-family: Arial; color: #000000;">I shared what you need to get started, including how to set up your own local MID server and create the sub-workflow. Today, I&#39;ll pick up where that post left off, describing how to create a framework workflow to call the sub-workflow, how to pass information to the sub-workflow and how to retrieve and work with the results.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">Before we get into how to do all of this, I want to remind you about the Scripting 101 post on <a href="community?id&#61;community_blog&amp;sys_id&#61;861d22e5dbd0dbc01dcaf3231f961973" rel="nofollow">Orchestration Best Practices</a></span><span style="font-family: Arial; color: #000000;"> I wrote with <a class="jive_macro jive_macro_user" title="mamann" href="community?id&#61;community_user_profile&amp;user&#61;14625269dbd81fc09c9ffb651f9619eb" rel="nofollow">mamann</a></span><span style="font-family: Arial; color: #000000;">. In that post, we describe the concept of a framework for calling sub-workflows in order to best organize a large workflow into manageable, and hopefully, reusable components. With that in mind, the model for a framework I present here is extensible and demonstrates this concept.</span></span></p>
<p> </p>
<p> </p>
<h3 style="margin-top: 8pt;"><span style="color: #3d3d3d; font-size: 14pt; font-family: &#39;Trebuchet MS&#39;;"><strong>Prerequisites</strong></span></h3>
<p> </p>
<p><span style="font-size: 12pt;">Conduct labs 1.1 and 1.2 of the previous article: <span style="color: #3d3d3d; font-weight: normal; font-size: 14px; font-family: arial, helvetica, sans-serif; font-style: inherit;"><strong><a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #266fc8;" href="community?id&#61;community_blog&amp;sys_id&#61;fdbd6aa9dbd0dbc01dcaf3231f9619ed" rel="nofollow">ServiceNow Scripting 101: Calling a Sub-Workflow, Part I</a></strong></span></span></p>
<p> </p>
<h3 style="margin-top: 8pt;"> </h3>
<h3 style="margin-top: 8pt;"><span style="color: #3d3d3d; font-size: 14pt; font-family: &#39;Trebuchet MS&#39;;"><strong>Lab 1.3 — The Framework</strong></span></h3>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">1. Create a new Workflow</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; line-height: 1.5;">a. Navigate to Orchestration &gt; Workflow Editor</span></p>
<p><span style="font-size: 12pt;"><span style="margin-left: 36pt; color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/-ybql8WNeI17UO5U7lNLvh6S-wliHFtRSkB0PQaSyjtcDP0umi-IYJNq8Wl45V4ymBA4NHIW8llSK1SBt4kTeWJz3HqpUpQWtEwxmryXIJxWtDfnWcMBlRMVC4xKaHEyUN8GDEU" width="218" height="247" /></span><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. A new tab on your browser should open to the Workflow Welcome page</span></p>
<p><span style="font-size: 12pt;"><br /><span style="margin-left: 36pt; color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/XSb-aP12h6NFvoa_k2zH2L6ccO1eeZG1KTewlErGitJRCXzBfSmc47QAW1PXhhreQ18rpN7Zs0J5i1IpqKkDkrM39pZ95dCQHY8hE38cbazmYb8Qj1ZYEdZ2wYZZqmPs-MA9JRM" width="558" height="427" /></span><br /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. To the far right, click on the Workflows tab, then click the plus button. This will display the New Workflows form.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="margin-left: 36pt; color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/8hKj33vAvfTG9gYGnobZWV7MeROwcvf0SYdTerPuUl6cR3b1TC5U1QINhoHEF132DL50DG1ZWvI-pLnmZmdrETWqnPbt8g05_SXllHkIZarDqm-biT58OQbh74GbqZtERqP-8TE" width="354" height="78" /></span><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; line-height: 1.5;">d. Fill in the form with the following:</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">i.     Name</span>: Framework</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">ii.   Table</span>: Global</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">iii.   If condition matches</span>: -- None —</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt; line-height: 1.5;">iv.     Click the Submit button to create the new workflow</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/7hr_X4lYRzrzsUD7tpl_N8AU6U_U3SAfnqbVhzKsJraQVuaVEFiXmddnIMVg7BxWlKQV24XtyvHBH-cgJeEcu_kFlVwCjm0q09SemEskdeEiTOkJIelVi91_ijhJ3fMXULE5-0g" width="624" height="292" /></span><br /></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">e. Your workflow desktop should look like this:</span></p>
<p><br /><span style="color: #000000; font-size: 14.6667px; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/RzZizKz6wUf5ZMFVjntAwjHrg06TjsnyDAEyDzB-ll-ADLUWKYXMsjq5jhTlGac-wOEwWtjiXv6OG2F9vMaOH7xJaVukB8n09TesZfICwx4UzJBBIDx0X5Uy4Nvl-E_eNaAv49Y" width="624" height="560" /></span></p>
<p><span style="font-size: 12pt;">2. Click on the triple bar in the upper left of the desktop, then click on Edit Inputs. We will use this to define two test input variables for our workflow.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="text-align: center;"> <span style="font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/sqkmPfA8T2Hl2b9fGJCSuovyHTStQ5qy_HiVl1ApM50ZjJmOmicRIEPYn9db9jJ2PpcW9O-h8VnkSSGX7pyRBZAtmlIXQFjHIsoac7_VZqj3Vaj-iYqihKok-u-Kx365enby3zM" width="307" height="512" /></span></span> </span></p>
<p><span style="font-size: 12pt; line-height: 1.5;">3. Add two new input variables:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">a. Name</span>: Host IP</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">i.     Column Name</span>: u_host_ip</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">ii.   Type</span>: String</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">iii. Order</span>: 100</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">iv.   Length</span>: 100</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">v.     Default Value</span>: localhost</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">b. Name</span>: Powershell Command</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">i.     Column Name</span>: u_powershell_command</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">ii.   Type</span>: String</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">iii. Order</span>: 200</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">iv.   Length</span>: 100</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">v.     Default Value</span>: ls</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; line-height: 1.5;">c. Close the Workflow Inputs form</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;">We will use these values to test our framework and sub-workflows.</span></span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="font-size: 12pt;"><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/Kqy3seevaAU2q0ASMH17oHOPmY3Q1MyjSsgnFsaiWU54PK20CPbUdsBEl3k-ezP4IQmS6xn6eebvDquMkBczGQNpf9nCjB7Cb19g3PjTPiQn7rXvTQh218rxfR-7ZNjMDzlTRC8" width="624" height="171" /></span><br /></span></p>
<p> </p>
<p><span style="font-size: 12pt;">4. On the far right, click on the Core tab to view the available Activities</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/o2ZQtnYShDgKUeJpKgfICgkODry2VolsUvHXvq5vpJ_byBIRJTJ8Mq7wuKyoV0gsZyjRz3ZQsk8rQo66pADgFTIbAAusHqsJRMUxGQulk8ebphhUMXXg8rV3QIoqX_d3z2uKNJQ" width="257" height="94" /></span><br /></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt;">5. At the bottom of the Core Activities list, expand the Utilities section</span></p>
<p> </p>
<p><span style="font-size: 12pt;">6. Left click and drag a Run Script activity out onto the desktop</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/M1Wxw5SZOAN5Hx6PWfJxt51b4KU7KVvqi9XfApMmpPx7sTINL_frgghODiGDkukE5IdhX6Btj2A9tXRFte5jBGdNAjUY1gltRFQPhjm2zp274iy4I35ZSDrmMC-OFzkpKmkP7QA" width="166" height="281" /></span><br /></span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">7. Fill in the form as follows:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">a. Name</span>: Initialize</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">b. Script</span>:</span></p>
<p> </p>
<p> </p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">workflow.scratchpad.hostname &#61; workflow.inputs.u_host_ip;</span></p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">workflow.scratchpad.command &#61; workflow.inputs.u_powershell_command;</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">gs.info(&#39;---&gt; WF:PowerShell Sub-Workflow.initialize:\nFQDN: {0}, PS Command: {1}&#39;,</span><span style="margin-left: 72pt;"><span style="font-family: &#39;Courier New&#39;; color: #000000;">         </span><span style="font-family: &#39;Courier New&#39;; color: #000000;">   </span></span></span></p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">workflow.scratchpad.hostname,</span></p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">workflow.scratchpad.command);</span></p>
<p> </p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. Click the update button to save.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">This will initialize our scratchpad variables that we will use throughout the lifetime of the workflow.</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/xBRm3BVRqgdQyv_a29c0H6vzOqRoKSBOD_l4RY_acsC-b9tZZWmuJjhOfdxdLt_qPuvDYR_dpSe5r1s2Q-eA-Ccuiqj5PFzft4zn45Ur5cNy8bDzUR1J-AUD0vzlP8ByK8TqAxk" width="624" height="217" /></span> </span></p>
<p><span style="font-size: 12pt;">8. Wire up your workflow to look like the following diagram:</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="text-align: center;"> <span style="font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/8bpT8-swsUGHgWBKPWltbaShMIPzbQQ6FioHu8U_DTNOKBq-_dbrIGeFP9q76gnIs1PKmiVWPCr3fyW5THBID3y7p3poJxieyNBr6IFQ-gFRGHsHeSrrQJHAndbrYqzxABRl4Qk" width="576" height="399" /></span></span><br /><br /></span></p>
<p><span style="font-size: 12pt;">9. Attach the sub-workflow that you built in the previous lab from the first half of this post.   From the list of workflows, drag out the Powershell Sub-Workflow onto the workflow desktop.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/7EFnzgo5UV5yjXi1iRw54ChEoEeBOCbauBabW6y5LeAWejJweBYPEJlvBmj6-51WWOpoa30YG0RnQ3rsByQTJS9TRAfyDfUG43wX0qFE3J6SAZ3V-r2pWPwfWdoEe3zE&#61;s1600" width="343" height="234" /></span><br /></span></p>
<p><span style="font-size: 12pt; line-height: 1.5;">10. The Activity Properties: Workflow form will be displayed.</span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">11. Fill in the form with the following:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">a. Workflow</span>:   Powershell Sub-Workflow</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">b. Map return value to</span>:   ${workflow.scratchpad.message}</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">c. Host FQDN</span>:   ${workflow.scratchpad.hostname}</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">d. PS Command</span>:   ${workflow.scratchpad.fqdn}</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; line-height: 1.5;">e. Click the Submit button to save your work.</span></p>
<p><span style="font-size: 12pt;"><br /><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/g6uk3yUVDiu5ES3HT1iWlkssWoYzfDMzv3ZNME5oIzgiwk9IDnEL61JNmaIbPWdHkPPOdFx2W1YwHjEfSXwCPKRW_RMYAkIx2WzmpbDeQ8ureNkUQh7_KobQlhPp_-g_fNfpQgI" width="495" height="267" /></span><br /><br /></span></p>
<p><span style="font-size: 12pt;">12. Wire up your workflow to look like the following:</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial; text-align: center;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/zoa-VPrjxGWZKrmHeQE_bkcKiV9KiTuBZdMikZrE_5C_t9xpDKqGJi0rEviE514yGsNVFiRL6ra44AiHog4eBJQNOCBC04-rHcQbIH23hcnMYvhA-yqseZI1MRoYsHQfPQ&#61;s1600" width="624" height="307" /></span><br /></span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">13. From the Core Activities tab, drag out a Condition -&gt; If Activity onto the desktop.</span></p>
<p><br /><span style="font-size: 12pt; line-height: 1.5;">14. Fill in the If Activity form with the following:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">a. Name</span>: Check for Error</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">b. Advanced</span>: Checked</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">c. Script</span>:</span></p>
<p> </p>
<p> </p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">answer &#61; ifScript();</span></p>
<p><span style="font-size: 12pt;"><br /><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">function ifScript() {</span><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">   </span></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">if (JSUtil.nil(workflow.scratchpad.message.error)) {</span><span style="margin-left: 72pt;"><span style="font-family: &#39;Courier New&#39;; color: #000000;">   </span><span style="font-family: &#39;Courier New&#39;; color: #000000;">   </span></span></span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">return &#39;yes&#39;;</span><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">   </span></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">}</span><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">   </span></span></p>
<p style="padding-left: 30px;"><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">return &#39;no&#39;;</span></p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">}</span></p>
<p> </p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">d. Click the Submit button to save your work.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">This will be used to determine if any errors were encountered in the sub-workflow. If there were any errors, we will need to handle them.</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/zJ8WXnGHiftr0wplW4joJ2K1fv5KwL7oQQQtSHWDgDaz0NgwimaXiDJ91HJZdOmv8Dz3QAHbs1l8PM4fn2mBjOajDWztQJRPtaRipMCuEk-I9GBBXdJDU071bI79tAjsgIBaap0" width="624" height="401" /></span><br /></span></p>
<p><span style="font-size: 12pt;">15. Wire up your workflow to look like the following:</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/-pO1S7M_fEt9zJiCDfTuk846U6jVlkTeSu3HQT_OpQx-tVjJLPCZtbLQ1eAEJs_lSXuBm4MYijbhVoCicoLg08zFPWBAE12-Mykj4sE4JfT2RPAruSY1C2rzhH6Rapqi&#61;s1600" width="624" height="365" /></span><br /></span></p>
<p><span style="font-size: 12pt; line-height: 1.5;">16. From the Core Activities tab, drag a Utility -&gt; Run Script Activity onto the desktop.</span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">17. Fill in the Run Script activity form with the following:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">a. Name</span>: Error Handler</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-weight: bold;">b. Script</span>:</span></p>
<p style="padding-left: 30px;"> </p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">var results &#61; workflow.scratchpad.message;</span><br /><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">for (var i&#61;0; i &lt; results.error.length; i&#43;&#43;) {</span><span style="margin-left: 72pt; color: #000000; font-family: &#39;Courier New&#39;;">   </span></span></p>
<p style="padding-left: 30px;"><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">gs.log(&#39;---&gt; &#39; &#43; i &#43; &#39; - ERROR: &#39; &#43; results.error[i], &#39;WF: Framework.Error Handler&#39;);</span></p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: &#39;Courier New&#39;;">}</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. Click the Submit button to save your work.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><br />This will be used to handle any errors that came from the sub-workflow.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/ekP4oYH2tJD3ITqV_utiZS9QIm7-VwcDRqgmRzs_dvdx5EUmMXTGINz1m40wpXv_IM5ww_tPBIAffVoU22qwkWqXnozjGX77977NvdGM_uCcwabcXwutaY9Lzn3tgx8oBbMvdTc" width="624" height="311" /></span><br /></span></p>
<p><span style="font-size: 12pt;">18. Wire up your workflow to look like the following:</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/tXyzyCrPhWy5spw34XLTrfIKpeFZ0nmP3igpFtcCmmNONxaljqa-PiSsTKDgPqvTC6g9yISaPZIlWzoR6Vh0Ka8o1VBgke6jJWzxS5upyvjRzzmX_uN-sbtubLpoBBad1w&#61;s1600" width="624" height="364" /></span><br /></span></p>
<p> </p>
<p><span style="color: #000000; font-family: Arial; font-size: 12pt;">That&#39;s it: You have now completed construction of the framework workflow to call your sub-workflow!   Now to test everything...</span><br /><br /></p>
<p> </p>
<p><span style="color: #000000; font-family: Arial; font-size: 18.6667px; font-weight: bold;">Testing for an Error</span></p>
<p> </p>
<p><span style="color: #000000; font-size: 12pt; font-family: Arial;">It is a best practice to exercise all of your code. This goes for workflows as well!</span></p>
<p> </p>
<p><span style="font-size: 12pt;">First, let&#39;s test a normal condition. Click on the Run Workflow button in the upper right corner of the desktop to display the Start Workflow form.</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/0J5vxTmfAkHtMIWvQNOTnlUOJaErPzd-c3r6ks5KdzfA74NYw4GY1gPxd9I8JuoAkoZB9869-4fHC2Pehc5WBFQJJ8qUUfbUf9VlUrySPrQsFmJniggcOjmSDS_fHRfPvA&#61;s1600" width="164" height="63" /></span></p>
<p><span style="font-size: 12pt;">2. Accept the defaults and click the start button.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">3. The workflow will begin executing. The context form will display and you will be able to watch the workflow progress by clicking on the refresh command in the upper right corner of the form. If your setup is correct, you should see a successful path.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">4. Upon completion, close the context window.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">5. From the ServiceNow browser tab, navigate to Orchestration &gt; Definition &gt; ECC Queue. Once the ECC Queue list view appears, sort by Created in descending order. You should see the same entries that were displayed in the sub-workflow testing we did in the last post.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">6. Now, let&#39;s test the error handling. Click on the Run Workflow button, and this time enter &#34;xyz&#34; in the PowerShell Command field.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">7. Click the start button.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">8. Keep clicking on the refresh command to see the path.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">9. You will notice that on the context form, the path is now diverted into our Error Handler Run Script Activity.</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><img class="jive-image" style="color: #000000; font-family: Arial; font-size: 14.6667px; line-height: 1.5; border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/1dycPYZo2UAoPdyZ3G4bbBLdx-anckbPU911NsAV8CyBw1Z0Mzu__BrvicYVSNbjt686m_XbiGNtR0kkvFRHXJMBRwX9c7Qha08-KrMhdiGgiC7ErZwrB3ZyuGU-jlwLaKs&#61;s1600" width="388" height="283" /></span></p>
<p><span style="font-size: 12pt;">10. When the workflow has finished executing, navigate to Orchestration &gt; Definition &gt; ECC Queue from the ServiceNow browser tab. Once the ECC Queue list view appears, sort by Created in descending order. </span></p>
<p> </p>
<p><span style="font-size: 12pt;">11. Click on the entry &#34;Windows — Powershell (nodes — 3)&#34; with the Queue name of &#34;input.&#34; The Queue — Powershell form will display. Click on the XML button and your error should look like this:</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><img class="jive-image" style="color: #000000; font-family: Arial; font-size: 14.6667px; line-height: 1.5; border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/QF-iPoJo_NCQ00c8tCpV8dlJZKvE-gzx9iYqLoMh4MPGar-CfgFXw-hQm5qv_VhcebjM2aPl52JPVroXx0WyNjBN6El8YTUst6pobC6Qty72BJHs304PFzN1bZXqdX9eI5o&#61;s1600" width="624" height="275" /></span></p>
<p> </p>
<p><span style="font-size: 12pt;">12. Close the form.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">13. Navigate to System Log &gt; System Log &gt; All to display a list view of all log records for today and sort by Created in descending order.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">14. Search the Message Field for: ---&gt;</span></p>
<p> </p>
<p><span style="font-size: 12pt;">15. You should see something similar to the list view below:</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/QdPv9GzGrOmXtOBKgwca6_O3REmiY5-ImawHtV_5Mv1PM7bhjzJy_k8mjN_S4xBD5rvJDfWpZMKlr4QClWTXzVe77z-teetQ65ZFAIrPVqoqcYmZVuHOMs9k5yjEs7TJ&#61;s1600" width="624" height="185" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><strong>NOTE</strong>: We looped through all of the returned errors (even though the first one came back blank).</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">That&#39;s all there is to it... Congratulations you have written your first Framework to Orchestration Sub-Workflow project!</span></p>
<h3 style="margin-top: 8pt;"> </h3>
<p> </p>
<h3 style="margin-top: 8pt;"><span style="color: #3d3d3d; font-size: 14pt; font-family: &#39;Trebuchet MS&#39;;"><strong>Learn More</strong></span></h3>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">You can review the code for this lab on ServiceNow Share </span><a href="https://share.servicenow.com/app.do#/detailV2/ea2852e055d246007c3953512138ef2f/overview" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">here</span></a><span style="font-family: Arial; color: #000000;">. Plus, if you&#39;re interested in learning more ServiceNow Orchestration best practices, I recommend reading <a title="rviceNow Scripting 101 Orchestration Best Practices/" href="http://ServiceNow Scripting 101 Orchestration Best Practices/" rel="nofollow">Orchestration Best Practices</a></span><span style="font-family: Arial; color: #000000;">.</span></span></p>
<p> </p>
<p> </p>
<p><span style="color: #666666; font-family: arial, helvetica, sans-serif; font-size: 12pt;">Steven Bell</span></p>
<p> </p>
<p><span style="color: purple; font-weight: inherit; font-size: 12pt; font-family: arial, helvetica, sans-serif; font-style: inherit;"><strong>If you find this article helps you, don&#39;t forget to log in and &#34;like&#34; it!</strong></span></p>
<p> </p>
<p><span style="color: purple; font-weight: inherit; font-size: 12pt; font-family: arial, helvetica, sans-serif; font-style: inherit;"><strong>Also, if you are not already, I would like to encourage you to become a member of our blog!</strong></span></p>
<p> </p>
<p><span style="color: purple; font-weight: inherit; font-size: 12pt; font-family: arial, helvetica, sans-serif; font-style: inherit;"><strong><img class="image-1 jive-image" style="width: auto; height: auto;" src="a26bb73ddb54d3049c9ffb651f9619eb.iix" alt="accenture technology logo.png" /><img class="image-2 jive-image" style="width: auto; height: auto;" src="9b55ed86db1053043eb27a9e0f96198a.iix" alt="sn-community-mvp.png" /></strong></span></p>
<p> </p>
<p style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #666666;"><strong>For a list of all of my articles:   <a style="font-size: 15px; font-family: arial, sans-serif; color: #266fc8; background-color: #f8fbfe;" title="" href="groups/servicenow-user-group-us-tx-north-texas/blog/2015/10/23/community-code-snippets-articles-list-to-date" rel="nofollow">Community Code Snippets: Articles List to Date</a></strong></p>
---
title: "Seeking Approval  Part  Task vs nonTask approvals and the Approval  Group Activity"
date: 2015-02-12T21:07:12.000Z
authors: ["russ.sarbora"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0bcda2e9dbd0dbc01dcaf3231f96198d"
---
<p>In <a title="basic approvals" href="community?id&#61;community_blog&amp;sys_id&#61;2f1da2e5dbd0dbc01dcaf3231f961966" target="_blank" rel="nofollow">Part 1 of this series</a>, I covered the basics of how workflow approval activities work. This time, I&#39;m going to peel back the covers a bit more, and look at the difference between approvals for records from task-derived tables vs non-task-derived tables. Then we&#39;ll take a look at the Approval - Group activity, which only works with task-derived records.</p>
<p> </p>
<h3>Task Approvals</h3>
<p>Back in the olden days before there was Workflow in ServiceNow, there were tasks and approvals. tasks needed to be approved, and it probably seemed that everything that needed approving was a task. And from this simple, pure view of the world, it was decided that Approvals should have a reference to the Task table. Thus it was made so, and it was good. Any record on a table that extended Task could have many approvals, approvals were related to exactly one Task, forms and related lists rejoiced, a simple Approval Engine managed the whole process, and all was well in the ITIL ivory tower.   You can kind of think of it like this:</p>
<p><img class="image-0 jive-image" style="width: 393px; height: 127.824px;" src="611b63b5db5893049c9ffb651f961982.iix" alt="approval_task.png" width="393" height="128" /></p>
<p>With this design, Approvals could only connect to Tasks.</p>
<p> </p>
<p>Then customers got hold of our platform. And they invented amazing new uses for it. We introduced the Workflow engine and Orchestration plugin. More customers invented even more new stuff. And soon the &#34;everything that needs to be approved is a task&#34; view of the world seemed pretty short-sighted. So it was decided to use Workflow to enable approvals on non-task records.</p>
<p> </p>
<h3>Non-Task Approvals</h3>
<p><img class="image-1 jive-image" style="height: 201.135px; width: 183px; float: right;" src="55ed4d8edb54130468c1fb651f9619b9.iix" alt="approval_any.png" width="183" height="201" />The fundamental issue facing the intrepid developer who undertook this feature enhancement, was that Approvals were linked directly to their Task via a reference field. That reference was pretty much what made the whole thing work, and reference fields by definition point to a specific table ( in this case Task). Since the goal was to enable Approvals for any record in the system, using that reference field was pretty much out of the question.</p>
<p> </p>
<p> </p>
<p>At this point, you are probably saying to yourself, &#34;I really don&#39;t care about this&#34;, but stick with me a little longer, we&#39;re almost to the payoff. The solution to the problem was to add a new Document ID field to the Approval table, and make the Approval - User activity in workflow understand how to use that field instead of the task reference. The old connection to Task was left in place, so that no existing functionality would break, but a new, generic, connection was added. Kind of like this diagram to the right:</p>
<p> </p>
<p>Finally, we get to the two reasons you will care about this:</p>
<ol><li>only Workflow, and specifically, only the Approval - User activity can manage approvals on non-Task records. The Approval Engine does not run on non-Task tables.</li><li>Approvals store their link to the record they are approving in one field (&#34;Approval for&#34;) if that record is a Task, and another field (&#34;Approving&#34;)* if its not. If you are customizing or creating functionality related to the approval process, you need to use the correct field.</li></ol>
<p><span style="font-size: 8pt;">* Technically, a Document ID is stored in 2 fields, in this case &#34;Approving&#34; and &#34;Source table&#34;. However, you usually don&#39;t have to care about the &#34;Source table&#34; field unless you&#39;re writing script. </span></p>
<p> </p>
<p>While its not an ideal solution, it did let us accomplish the goal of extending approvals to non-task items, without breaking existing functionality.   And almost all the time, these details are transparent to you. For example, if you&#39;re editing a workflow that is based on a non-Task table, the palette will only show you activities that work with non-task tables have activities available. Similarly, the system automatically uses the correct field whenever an Approval record is displayed or processed. You&#39;ve probably been using ServiceNow for a while now without even realizing this difference exists. Its really only if you are customizing or creating new functionality that you need to understand it.</p>
<p> </p>
<p>That&#39;s probably enough of a peek behind the curtain for today. Now let&#39;s have a look at the Approval - Group activity. You can build this example as we go, or apply the attached Update Set which should have everything you need. If you&#39;re going to build your own, you should probably read the Workflow Setup Note in the <a title="" href="community/operations-management/orchestration/blog/2015/02/04/seeking-approval--how-and-when-to-use-the-workflow-approval-activities" rel="nofollow">first part of the article</a>, it talks about the environment we&#39;ll be using.</p>
<p> </p>
<h3>Approval - Group : One for All and All for One</h3>
<p>In the previous article, I explained that the basic job of an Approval activity is to:</p>
<p>1. create approval records</p>
<p>2. aggregate the outcome of those approvals into a final Approved/Rejected decision</p>
<p> </p>
<p>That&#39;s still true of the Approval - Group activity, but it works on the group level. A Group Approval record will be generated for each unique group specified in the configuration of the activity. Just like with Approval - User, the activity gives you several ways to do that, including script. There are also configuration options for what logic will be used to make the final Approved/Rejected decision. You just have to remember that these apply to each group.</p>
<p> </p>
<p>The wrinkle here is that a group is approving something. What does that mean? Well, in ServiceNow it means this...for every Group Approval, all members of the specified group will get an individual Approval. This lets the users in the group vote on the Group Approval.   The &#34;Wait For&#34; option on the Approval - Group activity gives different options for how the individual Approval &#34;votes&#34; will be counted towards the Group Approval. It also lets you determine how those Group Approvals aggregate into the final decision.</p>
<p> </p>
<p>Hopefully an example will make all this clearer. Let&#39;s say we need a process to approve a change to a system. I&#39;m going to use my WFApprovals Test table to represent the change, and say that for this type of change, we need sign-off from the Hardware, Network, and Database groups because they are ones who will be performing the change. I know that&#39;s a simple scenario, and I will make the same offer I did in the previous article. Send me your complicated, messy, headache-inducing approval use cases. At the end of this series, I want to do a post with our recommended ways to solve tough, real-world approval problems.</p>
<p> </p>
<p>From the Workflow Editor, open the Seeking Approval - 2 workflow (or create a new one if you&#39;re building your own).</p>
<p>It should look something like this:</p>
<p><img class="image-0 jive-image" style="height: 333px; width: 620px;" src="3c549106db18130468c1fb651f96191b.iix" alt="wf_2.png" /></p>
<p> </p>
<p>Next, double-click the Approval - Group activity to open the Activity config form. It should look like this:</p>
<p><img class="image-1 jive-image" style="height: 450px; width: 620px;" src="afc3b402db9cd704ed6af3231f9619f3.iix" alt="activity_2.png" /></p>
<p>I&#39;ve given it a name and added the three groups that need give their approval to the Groups field. Other than that, I accepted the default values.</p>
<p> </p>
<h3>In Action</h3>
<p>Create a new WFApprovals Test record. You don&#39;t need to complete any of the fields, but just for fun give it a short description like &#34;Potentially catastrophic change to our most critical production system&#34;. When you click the Submit button the record insert will start our workflow. <span style="font-size: 10pt; line-height: 1.5em;">(Note: if you completed the Part 1 article and haven&#39;t removed that workflow, it will start as well. You can either ignore it or delete that old workflow.) One final caveat, I used out-of-the-box groups for this example and I&#39;m expecting them to have their original out-of-the-box users in them. If you&#39;ve changed that setup, you will see different results.</span></p>
<p> </p>
<p>Just like in my last post, if you look at the workflow context diagram for our flow, it will be waiting on the Approval activity. The activity has created its Approvals, and its now waiting for them to be resolved. Once they reached a state where the activity can make a final decision, the workflow will take the appropriate transition and move to the next activity. The same events and business rules spiels that I went through in the last article applies, and that&#39;s all I&#39;m going to say about that. Instead, let&#39;s look at what&#39;s different here.</p>
<p> </p>
<p>Open the WFApprovals Test record you just created. You should have two related lists on it, &#34;Approvers&#34; and &#34;Group approvals&#34;. Look at the &#34;Group approvals&#34; list first. There should an entry for each group specified in our activity configuration, and all entries will be in Approval state &#61; Requested. So far, so good.</p>
<p><img class="jive-image image-2" style="height: 433px; width: 620px;" src="bbbe08cadb9c1344e9737a9e0f9619c3.iix" alt="record_1.png" /></p>
<p> </p>
<p>Now, look at the Approvers list. You&#39;ll have an Approval for every member in the three groups.</p>
<p><img class="jive-image image-3" style="height: 412px; width: 620px;" src="c514f7fddbdc93041dcaf3231f9619b9.iix" alt="record_2.png" /></p>
<p>On my instance, that means 15 Approvals. Take a look at the first entries in the list above. Both of them are for Bow Ruggeri. Why the duplicates? They actually aren&#39;t duplicates, Bow happens to be a member of the Network and Hardware groups, and he gets an approval for each group. This is different from Approver-User. No matter how many times a user is specified in the Approver - User activity, only one Approval will be generated for them. That same consolidation logic does apply to Approval - Group, just at the group level. No matter how times you specify a group, only one Group Approval will be generated for it. But a user will get an Approval for every group they belong to, so that they can participate in that group&#39;s Approval process.</p>
<p> </p>
<p>Wearing his Network hat, Bow reviews this change and decides its OK by him. Click on one of Bow&#39;s Approver entries and approve it.   By doing that, Bow has just approved this change for his entire group. You can verify that going back to the Group Approvals tab. The entry for Network will now be state&#61;Approved.</p>
<p><img class="jive-image image-4" style="height: 143px; width: 620px;" src="6500954edb589f048c8ef4621f9619dc.iix" alt="rec_3.png" /></p>
<p> </p>
<p> </p>
<p>Now go back to the Approvers tab and notice the State column on those. The Network group approval has already been resolved, so the approvals for the other members of the group are now in state &#34;No Longer Required&#34;.   The approvals for members of the other groups are still in Requested state.</p>
<p><img class="jive-image image-5" style="height: 407px; width: 620px;" src="e31f2ccedb98d704ed6af3231f9619c8.iix" alt="rec_4.png" /></p>
<p>Next, Bow puts on his Hardware hat, and decides this change is crazy and there&#39;s no way he can approve it. Click on his other Approver entry and Reject it. This rejects the Hardware group approval. Based on the way we configured the Approval - Group activity in our workflow (okay, based on the way we accepted the default configuration), any rejection is enough to Reject the whole activity, so the workflow will take the Rejected transition and complete.</p>
<p> </p>
<p><img class="jive-image image-6" style="height: auto;" src="6ca01002db149fc03eb27a9e0f9619f0.iix" alt="context_2.png" /></p>
<h3>Auto-Approving</h3>
<p>Remember from my previous article how Approval - User auto-approves if no active users are identified for the activity to create approvals for? Approval - Group behaves similarly. If either:</p>
<p>1. no active users are found in the specified groups</p>
<p>OR</p>
<p>2. no groups are specified</p>
<p>the Approval - Group activity will auto-approve. <span style="font-size: 10pt; line-height: 1.5em;">Notice that I didn&#39;t say &#34;no </span><span style="font-size: 10pt; line-height: 1.5em;"><em>active</em></span><span style="font-size: 10pt; line-height: 1.5em;"> groups&#34; in #2. We made a change in Eureka so that only active <em>users</em> would get approvals. I just discovered that fix did not get applied to the group approval logic. So whether a group is active or not makes no difference from an approval standpoint. Maybe that&#39;s correct behavior, or maybe we should fix it, I don&#39;t know. How often does a group get marked inactive anyway?</span></p>
<p> </p>
<h3>The End - For Now...Again</h3>
<p>I&#39;m going to stop here for now. In Part 3, I&#39;ll cover the Manual Approvals and Approval Coordinator activities. And in case you missed my offer in the text above, here it is again. At the end of this series I would like to wrap up with some best-practice patterns for handling difficult real-world approval scenarios. So if you have a specific use case you&#39;re struggling with, send it to me.</p>
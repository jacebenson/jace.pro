---
title: "Employee Scoring"
date: 2019-08-15T20:33:37.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fc828b19db1f37001cd8a345ca9619bc"
---
<p>We were asked by management for a way to grade or rank employees by their work. After brainstorming a bit, we developed a formula of sorts. I talked to a few of you at the K19 event and thought I’d share what we developed for calculating the scores on a monthly base. I welcome feedback from others doing something similar for comparison. From the initial results we could see who’s working hard and who’s hardly working. We ran the results for a few months without telling anyone and then we announced the scoring model. At that point we built Performance Analytics (PA) indicators so employees could track their own monthly scores compared to overall scores. The number of questions we received around the scores; why my number was this, how do I get it better, meant employees were tracking their work. We felt if employees can visually see and understand their ‘numbers’, they will work to make it better. For those that don’t care or try to improve, well you can probably guess the end results.</p>
<p>The goal of all of this is to drive consistent delivery behaviors while ensuring process and policies are followed. Doing so should result in better service to the customer with higher delivery levels. To date it’s working as we hoped. </p>
<p><strong>Target Score &#61; 1.0</strong></p>
<p>Kickers &amp; Penalties for ticket volumes or ticket audit errors can move your score &#43;/- 0.1.</p>
<p>The pie chart below shows the calculation breakdown:</p>
<p><img src="https://community.servicenow.com/d8028f11db1f37001cd8a345ca9619cd.iix" /></p>
<p><strong>SLA/SLO Adherence:</strong> you must meet the SLA’s we have agreed to deliver to our customers. The goal is 95%, so you can have some breaches depending on ticket volume without missing the goal.</p>
<p>Calculation &#61; (% of Incidents &amp; Request tickets that met SLA/.95)*100</p>
<p>Values – Actual value as determined by calculation.</p>
<p> </p>
<p><strong>SLA/SLO Efficiency:</strong> The measurement of speed to resolution. Let’s say you have a ticket and I have a ticket. You close your ticket in 30 mins and I close mine in 2 hrs. We can say that you are more efficient at delivering service than me. Therefore, we can conclude that your efficiency value will be higher than mine.</p>
<p>Calculation &#61; Avg of Business Elapsed % of all Incident and Request tickets</p>
<p>Values:<br />1.05: &lt;&#61; 80%<br />1.00: &gt;  80% to 120%<br />0.95: &gt; 120% to 150%<br />0.75: &gt; 150% to 250%<br />0.00: &gt; 250% </p>
<p><strong>Customer Survey:</strong> The measurement of one question from our survey.</p>
<p>Calculation &#61; Avg of survey question “How would you rate the technician who took your call? (1 &#61; not helpful to 5 – Extremely helpful)</p>
<p>Values:<br />1.05: &gt;&#61; 4.75<br />1.00: 4 to &lt; 4.75<br />0.95: 3 to &lt; 4<br />0.75: 2 to &lt; 3<br />0.00: &lt; 2</p>
<p><strong>Utilization:</strong> the goal is to have 85% of your time spent on Task work. Every task form has the time worked field capturing time entered. 85% allows time for meetings etc.</p>
<p>Calculation &#61; ((Time worked/(Ideal time – approved PTO))/.85)*100 (where Ideal time &#61; 160)</p>
<p>Values: Actual value as determined by calculation with:<br />Minimum value &#61; 0.75<br />Maximum value &#61; 1.05</p>
<p><strong>Bonus:</strong> Ticket Volume<br />If you handle the most tickets for your group(s), you get &#43; 0.1.</p>
<p><strong>Penalty:</strong> Ticket Audit Errors<br />We do random ticket inspections to verify the process was followed according to our guidelines. Penalty is -0.1.</p>
<p>After you compile all this data, the results can be broken down into the following scoring categories:</p>
<p>1 or &gt; 1 &#61; these are your employees that are doing a great job for you. They are following your process, putting tickets on-hold to pause the SLA when needed, communicating with your customers and delivering quality service. We award our top 3 scores with internal monies so they can purchase things from our internal store.</p>
<p>0.90 – 0.99 &#61; another good group of employees but maybe they breached more SLAs that allowed, or forgot to put the ticket on-hold, maybe forgot to log the correct time, or got 1 bad survey. You can look at their data, figure out where they went wrong and guide them to get to the target score.</p>
<p>0.75 – 0.89 &#61; this is the group to focus on. With your help, you should see their numbers climb but if they drop, let’s face it, you probably don’t want them talking to your customers. </p>
<p>&lt; 0.75 &#61; This is your decision group. Initially we didn’t have any users right at the break point of 0.75. We had employees in the 0.50s, and lower. First figure out what they are doing incorrectly, then give them guidance, and advise them on your policy for handling tickets. If their score doesn’t move in the right direction, the decision is to continue helping them or quite possible this position isn’t right for them and replace them with people who really want to work.</p>
<p>If you don’t have PA, get it, but if you can’t you can do all the calculations in excel and get the same results. After building the PA indicators we compared to excel for quality check and the numbers aligned.</p>
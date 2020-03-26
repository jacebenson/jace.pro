---
title: "DIY NPS KPI Part "
date: 2019-03-11T23:47:33.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=cb4d07badb40bb401cd8a345ca9619ec"
---
<p><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;d7b90775db9ebf80a39a0b55ca9619d5" rel="nofollow">* Part 2 is up - you can find it here</a></p>
<p> </p>
<p>Introduced in a 2003 article in the Harvard Business Review, NPS or Net Promoter Score has quickly become the gold standard for organizations to evaluate the loyalty of their clients. (Fun fact – the Harvard Business Review article was written by Fred Reichheld in collaboration with Bain and &amp; Company, and at the time ServiceNow’s current President &amp; CEO John Donahoe was the President &amp; CEO of Bain &amp; Company.) Due to in large part to its simplicity and focus on the customer, the use of NPS expanded and today it is used to evaluate everything from the loyalty of customers, to internal Business Services and even for employee loyalty.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/71f9c3f6dbcc7b401cd8a345ca9619f4.iix" /></p>
<p> </p>
<p>The beauty of NPS is in its simplicity – instead of asking dozens of questions with multiple score scales, it only asks 2. The main question is typically some version of “How likely is it that you would recommend this company/good/service to a friend or colleague?”. That single questions is usually followed by a “Why?” in order to promote the ability to close the loop and facilitate actionable improvements. It is scored on a 0-10 scale and the answers are divided up into 3 categories:</p>
<p>Detractors          0-6</p>
<p>Passive               7-8</p>
<p>Promoters          9-10</p>
<p>The NPS score is then determined by subtracting the percentage of responders that are Detractors from the percentage of responders that are Promoters, which results in a range of -100 (all detractors) to 100 (all promoters). Typically any value over 50 is considered excellent, and anything over 70 is World Class. Because it is constructed in a standard way, and a single universal question is always asked, comparison of NPS scores is possible across multiple platforms, industries, services and organizations.</p>
<p>Maybe you have dozens of surveys with dozens of questions, or maybe only angry people respond to your surveys, or perhaps you use Customer Satisfaction at your metric because you have always used Customer Satisfaction. NPS has became the industry standard for many reasons, and there is an extensive body of work on the pros and cons and why it is now considered the best approach. I’m not going to get in to all the reasons in this post but if you are curious, I encourage you to Google it and dive in. The rest of this post is dedicated to the people who are already thinking, “Wow, that sounds really valuable, we should do that.”</p>
<p>First off, go to <a href="https://developer.servicenow.com" rel="nofollow">https://developer.servicenow.com</a> and create an account if you do not already have one. Do you have a Community accounts? Your Community accounts will give you full access to the Developers site. Next, use the “Manage” option in the menu to request a London or Madrid Developer instance.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/c41a4ff6dbcc7b401cd8a345ca96190f.iix" /></p>
<p>You could build this out on a sub-prod instances but your own Developer instances will enable you to quickly and easily follow these instructions without worrying about impacting any of the current development in your instance. Other advantages of starting on a Developer instance is that its free, it will be easy for you to recreate the objects once you have done it once, and you can use the Developer instance like a Sandbox without fear of breaking anything.</p>
<p> </p>
<p>Next activate the Performance Analytics Premium Plugin has been properly activated for this step. If you haven’t already done so activate it via the Developer portal, and while you are at it activate all the Content Packs.</p>
<p> <img src="https://community.servicenow.com/242a037adbcc7b401cd8a345ca96194a.iix" /></p>
<p>Before we dive in, let’s take a step back and think about what we need at a high level. Creating a single survey or PA indicator is straightforward, but we want to create an entire framework for your organization to not only capture NPS, but also to manage, monitor and support future improvement efforts. In order to do that we’ll need the following components:</p>
<ul><li>A survey definition</li><li>Survey trigger</li><li>Performance Analytics content</li><li>A Dashboard</li></ul>
<p style="text-align: left;"><strong>Creating and Scheduling your NPS Survey</strong></p>
<p>When we think of “Surveys”, they are actually a series of different records in tables and typically include:</p>
<ul><li>A Survey Definition (asmt_metric_type)</li><li>A Survey Category (asmt_metric_category)</li><li>One or more questions (asmt_metric)</li></ul>
<p>For NPS we can also take advantage of the Survey Templates feature. These templates have pre-canned responses aligned to certain values, streamlining the process of capturing things like Quality, Size and even Smiley Faces. A template for NPS was introduced in 2015 and we’ll use that to set up our Survey.</p>
<p>1.  Navigate to “Survey Designer”</p>
<p>2. Enter a Name for your Survey (e.g. NPS Survey)</p>
<p style="text-align: center;">  <img src="https://community.servicenow.com/4e5a8b3edbcc7b401cd8a345ca9619bc.iix" /></p>
<p>3. Find “Template” under Controls, and drag it to the “Drag content, drop it here” section</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/ed6a477edbcc7b401cd8a345ca9619a3.iix" /></p>
<p>4. Now press the “gear” next to “Template” to edit your question</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/33ba0f32db00bb401cd8a345ca961900.iix" /></p>
<p>5. A new window will pop up. Enter “NPS” as the Template, and then click “Question 1” and type in “How likely are you to recommend this service to a colleague?”</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/fddac772db00bb401cd8a345ca961998.iix" /></p>
<p>6. Press the right arrow to open the detailed view</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/3ceac7b2db00bb401cd8a345ca961959.iix" /></p>
<p>7. A new window will pop up. In the Name field enter “NPS” and press X to close the window.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/18fa0bb2db00bb401cd8a345ca961929.iix" /></p>
<p> Note: You can ignore the “Positive indicator” field since our Template uses text values (Dectrator, Passive, Promoter) instead of numeric values.</p>
<p>8. You will be returned to the Survey Designer screen. Next, find and drag the “String” Controls and drop it beneath your NPS question.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/190b83f2db00bb401cd8a345ca961944.iix" /></p>
<p>9. Press the gear next to New String</p>
<p style="text-align: center;"><img src="https://community.servicenow.com/601b8736db00bb401cd8a345ca961927.iix" /></p>
<p>10. The Properties window will appear. In the Name field enter “NPS Comments”, in the Question field enter “Why?” and use the dropdown list for the String option to select “Multiline”. Once the values are updated press the X to return to the Survey Designer.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/e82b4b36db00bb401cd8a345ca9619d0.iix" /></p>
<p style="text-align: left;">11. Click on Save at the top right of the Survey Designer </p>
<p style="text-align: center;"><img src="https://community.servicenow.com/e03bcf36db00bb401cd8a345ca9619d1.iix" /></p>
<p>12. Now lets add some descriptive details. Left-click on the Configuration section at the top of the screen to view additional details about your survey.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/114b0376db00bb401cd8a345ca961903.iix" /></p>
<p>13. Enter a Description, Introduction and End note. The Introduction and End note will be seen by Survey respondees, so make it friendly but keep it brief. A good practice is to include a contact email address if someone has additional questions or comments.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/475b0f76db00bb401cd8a345ca961960.iix" /></p>
<p style="text-align: left;">14. That&#39;s it, we should now be good to go. Let’s try it out. When you mouse over “Save” you will see other options appear. Press “Preview” to try out your new survey. </p>
<p style="text-align: center;"><img src="https://community.servicenow.com/3a8bc7f6db00bb401cd8a345ca961963.iix" /></p>
<p>15. If your survey doesn’t appear as expected or you get strange results, redo the previous steps or post your questions as comments to this blog post.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/b6ab0b7adb00bb401cd8a345ca96198f.iix" /></p>
<p style="text-align: left;">16. When you are satisfied with the results, mouse over Save, but this time press “Save and Publish”</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/1ccbc3badb00bb401cd8a345ca961989.iix" /></p>
<p>17. So we have our survey, but it won’t be sent out to anyone until we set up a Trigger Condition. To do this, select “Trigger Conditions” from the Navigator and press “New”</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/1ddb8fbadb00bb401cd8a345ca9619dd.iix" /></p>
<p>18. You may now configure various fields to determine when and how often the Survey will be triggered. In the below example, the survey is being triggered when the State &#61; Closed, it is being sent to the Caller, it is configured to generate a survey for every Incident, however it is also configured to send out a survey to an individual no more than once every 5 days (Repeat Interval). My observation has been that when the Repeat Interval is not used, some users are overwhelmed with surveys and as a result respond less. Once you have updated the fields, Press Submit. Note that you don’t need to enter Related Fields and we will use dot walking to get that information using Performance Analytics. ** Note when you activate this in your Dev, Test and Production instances, don’t forget to make inactive existing Satisfaction Surveys you may be using so as not to overload people with too many surveys.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/4feb033edb00bb401cd8a345ca96192e.iix" /></p>
<p> 19. Feel free to test your survey by Resolving and Closing any Incident. Once you do that, a new record should appear in the Survey Instance table. If it does not check</p>
<ul><li>Is your Survey “published”? Check in the Survey Designer. If you update a Survey it immediately becomes unpublished until you again press the Save and Publish, or Publish option.</li><li>Did you uncheck “Trigger randomly” on the Trigger Condition?</li><li>Did you not only Resolve, but also Close the Incident using the “Close Incident” button visible at the top of Resolved Incidents?</li></ul>
<p> 20. <strong>Extra Credit:</strong> Expired surveys are canceled by a System Scheduler &gt;&gt; Scheduled Job called “Cancel Expired Assessments” which runs every 30 days. Adjust this to weekly or daily to get more accurate and up to date information.</p>
<p style="text-align: left;">Congratulations on making it through all these steps! If you have any questions or comments, or ran into any trouble, please respond to this blog for assistance.</p>
<p style="text-align: center;"> <img src="https://community.servicenow.com/d32c07fedb00bb401cd8a345ca96192c.iix" /></p>
<p>But what about Performance Analytics you might be wondering? Part 2 of this blog post will be posted in about 2 weeks containing detailed step by step instructions on how to create indicators, breakdowns, dashboards and other PA content related to this NPS Survey.</p>
<p> </p>
<p> </p>
<p> </p>
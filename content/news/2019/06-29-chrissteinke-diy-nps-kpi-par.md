---
title: "DIY NPS KPI Part   PA Content Build Out"
date: 2019-06-28T17:19:21.000Z
authors: ["ChrisSteinke"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d7b90775db9ebf80a39a0b55ca9619d5"
---
<p><strong>DIY NPS KPI’s Part 2 -</strong></p>
<p><strong>Performance Analytics Build Out</strong></p>
<p> </p>
<p>Welcome back!</p>
<p style="padding-left: 150px;"><img src="https://community.servicenow.com/04f9cfb9db9ebf80a39a0b55ca961972.iix" width="280" height="368" /></p>
<p> </p>
<p>In part one we walked through the steps to configure your system to send out a new survey enabling you to track NPS score. If you haven’t yet configured the new survey I recommend you jump back to that post and start there:</p>
<p> </p>
<p><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;cb4d07badb40bb401cd8a345ca9619ec" rel="nofollow">DIY NPS KPI Part 1</a></p>
<p> </p>
<p>Once that is done, we get to the fun stuff!</p>
<p> </p>
<p>Performance Analytics is uniquely suited to track and monitor the trends of your NPS score. Being in-platform, it makes it much more straightforward to analyze the data and also create connections between the survey results and supporting data, such as Assignment Groups or Business Services. Achieving success with Performance Analytics is just like success in other applications, meaning you need to start with a cohesive plan and design rather than just start building things. Performance Analytics content are assembled like building blocks, so it is critical to map out the components and how they will fit together. Let’s walk through that process by starting at the end, with a list of the KPIs/Indicators we wish to see.</p>
<p> </p>
<p>The first and most important is NPS Score, which is the % of Detractors minus the % of Promoters. Performance Analytics can create averages/percentages in 2 ways, either creating an average of a value included on records, or by using a formula indicator to create a calculation. For these % we will be using formula indicators with calculations. Here are the indicators necessary to get the info we desire:</p>
<p> </p>
<p><u>Automated Indicators:</u></p>
<p>Total number of NPS Responses</p>
<p>Number of Promoters</p>
<p>Number of Detractors</p>
<p> </p>
<p><u>Formula Indicator:</u></p>
<p>% Promoters (Number of Promoters / Total number of NPS Responses)</p>
<p>% Detractors (Number of Detractors / Total number of NPS Responses)</p>
<p>NPS Score (% Promoters - % Detractors)</p>
<p> </p>
<p>Those are the bare bones KPIs, but thinking holistically, what else can we do to help make the management of the process more efficient and successful? Here are some additional KPIs / Indicators that should also be added:</p>
<p> </p>
<p><u>Additional Automated Indicators:</u></p>
<p>Number of NPS Surveys not taken</p>
<p>“Why?” NPS Comment Word Cloud</p>
<p>Number of Passives</p>
<p> </p>
<p><u>Additional Formula Indicators:</u></p>
<p>Response % for NPS surveys</p>
<p>% Passives (Number of Passives / Total number of NPS Responses)</p>
<p> </p>
<p><u>Indicator Sources:</u></p>
<p>Now that we know the Indicators we want, we should plan out the Indicator Sources. The Indicator Sources are records which are re-used by Indicators, and reference a specific table and filter to begin to segment the data. In our above examples we need information from Metric Results (the actual scores), but also Assessment Instances (to determine response rates). For both, we only will want record where the Assessment Instance is either Closed or Canceled.</p>
<p> </p>
<p><u>Breakdowns:</u></p>
<p>Breakdowns are a key feature in Performance Analytics, which allow you to slice and dice the data in order to perform more detailed analysis. Typically Breakdowns are created based on Reference fields or Choice lists on the Indicator Source table. In addition, it is possible to dot walk to related tables and also script Breakdowns to handle complex cases. When thinking about ways to analyze NPS, consider how you already slice and dice data within Incident Management. Here are some proposed Breakdowns:</p>
<ul><li>By Incident Category</li><li>By Contact type</li><li>By Caller Department</li><li>By Caller Manager</li><li>By Assignment Group</li><li>By Assignee</li><li>By Priority</li></ul>
<p> </p>
<p>Fortunately most of these already exist as part of the Incident Management Performance Analytics Content Pack, so it will be a snap to utilize them for the NPS Survey. However there is an important issue that surfaces when we analyze our Breakdowns. The question you need to ask yourself is “Do I have access to the Breakdown fields from my Indicator Source tables?”</p>
<p> </p>
<p>At first blush, of course you do, Metric Results reference the Assessment Instances, and Assessment Instances reference the Tasks for which they are generated. However certain fields, such as the Category, don’t exist on the Task table at all but are instead part of the Incident table. To Breakdown on these fields we’ll need to get a little creative.</p>
<p> </p>
<p><u>Widgets:</u></p>
<p>These are the actual visualizations that you see on screen when you look at a Dashboard. Any Indicator and Breakdown combination can be used to make dozens of different visualization types. The most common used are Scores, Time Series and Breakdown Widgets. Once you have the other objects created, determining the visualization is more a matter of style and preference, so play with these until you get a view that you think provides the most value.</p>
<p> </p>
<p><u>Jobs:</u></p>
<p>In order to collect Scores, Indicators must be associated with a Job. Jobs are run on a scheduled basis, typically once a day during non-work hours. Instead of adding our Indicators to an existing job, it will make support and debugging easier if we create a job just for our NPS scores. Generally, I tend to create new jobs from groups of created Indicators, rather than continuing to add to the existing out of the box (ootb) jobs.</p>
<p> </p>
<p><u>Dashboard:</u></p>
<p>To bring it all together, we will need a dashboard visualizing the information. In order to organize data, each Dashboard may also have mutliple tabs. To make dashboards as efficient as possible and reduce loads times, try to limit each dashboard tab to around 6 widgets. For this example I will create 2 dashboard tabs. Tab 1 will be NPS Results and Tab 2 will be Survey response frequency.</p>
<p> </p>
<p>Now that we have a rough idea of all the different components to be created, we can get started. The order I like to use when building PA objects is:</p>
<ul><li>Indicator Source</li><li>Indicator</li><li>Breakdown Source</li><li>Breakdown</li><li>Job</li><li>Dashboard</li><li>Widgets</li></ul>
<p> </p>
<p>If you have more detailed questions about the order of assembling the buliding blocks, I recommend you check out this fantastic, detailed post on the Community from Dale Lin:</p>
<p> </p>
<p><a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;180d0769db9cdbc01dcaf3231f9619b9&amp;view_source&#61;searchResult" rel="nofollow">https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;180d0769db9cdbc01dcaf3231f9619b9&amp;view_source&#61;searchResult</a></p>
<p> </p>
<p><u>Save yourself time:</u></p>
<p>The ServiceNow Share site has loads of great, free apps for you to try out and use. One I always recommend is “<a href="https://developer.servicenow.com/app.do#!/share/contents/8488640_pa_ui_actions?v&#61;2.0&amp;t&#61;PRODUCT_DETAILS" rel="nofollow">PA UI Actions</a>”. If you are building PA content, this will save you hours of clicking back and forth between different records. Just one example – generating sample scores directly from an Indicator – has personally saved me many hours over the course of the last few years! Download this Share app, put it on your Developer instance, test it out, and if you have no issues, I recommend you add it to Production.</p>
<p> </p>
<p><strong>Indicator Sources:</strong></p>
<p>There are two important things to consider when creating Indicator Sources: you want to segment the data, and “dates not states”. The first part is apparent if you look at the out of the box Indicator Sources. For example, you can see that instead of just one for Incidents, it is divided up into Incidents.New, Incidents.Open, Incidents.Resolved and Incidents.Closed. This ensures maximum efficiency of jobs and processing. You want the Indicator Sources to be general enough to be re-usable but at the same time focused on a key data segment. “Dates not States” refers to how the filter criteria are created. Your first thought might be that Incidents.Resolved should filter on State&#61;Resolved but that is incorrect. By using a date/time field (Resolved) where possible instead of a State field, the Indicator Source is able to accurately collect historical collection.</p>
<p> </p>
<p>Also note that the out of the box conditions often use “on Today” rather than something like “Resolved is not empty”. Scheduled jobs collected each day, so you don’t need to filter to find all records, just the ones that were processed through Resolved on that specific day. If you want to create an Indicator showing “Resolved in the last 30 days” you wouldn’t need to create anything. You could just use the existing “Number of resolved incidents” Indicator and apply the “30d running SUM” time series.</p>
<p> </p>
<p>Lastly I almost always recommend using “Daily” as the Valid for frequency. Using Time Series on Widgets, you can make a Daily Indicator show by week, month or quarter, however you cannot make a weekly or monthly indicator show daily. The exception is when you want to show year to year, or any yearly Time Series (e.g. year to date), in which case Weekly or Monthly frequency Indicators must be used.</p>
<p> </p>
<p>Here are the Indicator Sources:</p>
<p>Name: NPS.Survey.Result</p>
<p>Valid for frequency: Daily</p>
<p>Facts table: Metric Result [asmt_metric_result]</p>
<p>Conditions: (will need to dot walk to Instance where referenced)</p>
<p>              Instance . State               is                         Complete</p>
<p>              Metric                              starts with              NPS</p>
<p>              Instance . Taken on        is                         Today</p>
<p>             </p>
<p>Name: NPS.Survey.Instances</p>
<p>Valid for frequency: Daily</p>
<p>Facts table:  Assessment Instance [asmt_assessment_instance]</p>
<p>              State                                is one of              Complete, Canceled</p>
<p>              Updated                           is                         Today</p>
<p>              Metric type                     is                         NPS Survey</p>
<p> </p>
<p>*  note any field value not specified should be left as default / not changed</p>
<p> </p>
<p>** note the “Cancel Expired Assessments” Scheduled Job does not enter in the “Taken on” date on the Metric Result record, so in the filter above Updated is used. Assessments are locked to editing after being taken or canceled so the Updated field will work for our purposes. The only exception to that would be if your system has been customized to allow updates to Assessments after they have been completed.        </p>
<p> </p>
<p><strong>Automated Indicators:</strong></p>
<p>Automated Indicators are the foundation of Performance Analytics. They are what creates the values on the Widgets you see on Dashboards, and are combined in calculations to create Formula Indicators. With Automated Indicators you can create record counts, sum up values in records, average fields, or create scripts to gather information.</p>
<p> </p>
<p><strong>Name:                                           Total number of Completed NPS Responses</strong></p>
<p>Indicator Group:                           NPS</p>
<p>Direction:                                      Maximize</p>
<p>Unit:                                               #</p>
<p>Indicator Source:                          NPS.Survey.Instance</p>
<p>Aggregate:                                    Count</p>
<p>Value when nil:                             0</p>
<p>Filter:</p>
<p>State                   is           Complete</p>
<p>Collect records:                            true</p>
<p>Collect breakdown matrix:          true</p>
<p>Publish on Scorecards:                 true</p>
<p> </p>
<p><strong>Name:                                           Total number of Cancelled NPS Responses</strong></p>
<p>Indicator Group:                           NPS</p>
<p>Direction:                                      Minimize</p>
<p>Unit:                                               #</p>
<p>Indicator Source:                          NPS.Survey.Instance</p>
<p>Aggregate:                                    Count</p>
<p>Value when nil:                             0</p>
<p>Filter:</p>
<p>State                   is           Cancelled</p>
<p>Collect records:                            true</p>
<p>Collect breakdown matrix:          true</p>
<p>Publish on Scorecards:                 true</p>
<p> </p>
<p><strong>Name:                                           Number of Promoters</strong></p>
<p>Indicator Group:                           NPS</p>
<p>Direction:                                      Maximize</p>
<p>Unit:                                               #</p>
<p>Indicator Source:                          NPS.Survey.Result</p>
<p>Aggregate:                                    Count</p>
<p>Value when nil:                             0</p>
<p>Filter:</p>
<p>Metric                is           NPS</p>
<p>NPS value           is           Promoter</p>
<p>Collect records:                            true</p>
<p>Collect breakdown matrix:          true</p>
<p>Publish on Scorecards:                 true</p>
<p> </p>
<p><strong>Name:                                           Number of Detractors</strong></p>
<p>Indicator Group:                           NPS</p>
<p>Direction:                                      Minimize</p>
<p>Unit:                                               #</p>
<p>Indicator Source:                          NPS.Survey.Result</p>
<p>Aggregate:                                    Count</p>
<p>Value when nil:                             0</p>
<p>Collect records:                            true</p>
<p>Collect breakdown matrix:          true</p>
<p>Filter:</p>
<p>                            Metric                is           NPS</p>
<p>                            NPS value           is           Detractor</p>
<p>Publish on Scorecards:                 true</p>
<p> </p>
<p><strong>Name:                                           Number of Passives</strong></p>
<p>Indicator Group:                           NPS</p>
<p>Direction: M                                  Minimize</p>
<p>Unit:                                               #</p>
<p>Indicator Source:                          NPS.Survey.Result</p>
<p>Aggregate:                                    Count</p>
<p>Value when nil:                             0</p>
<p>Collect records:                            true</p>
<p>Collect breakdown matrix:          true</p>
<p>Filter:</p>
<p>                            Metric                is           NPS</p>
<p>                            NPS value           is           Passive</p>
<p>Publish on Scorecards:                 true</p>
<p> </p>
<p><strong>Formula Indicators:</strong></p>
<p>While Automated Indicators typically count or sum value in records, Formula Indicators add, substract, multiply or divide other indicators. In fact, the Formula box in the Indicators is actually a javascript box, and from a certain perspective you can do almost anything you want with them. For advanced users, check out this Community post by Adam Stout:</p>
<p> </p>
<p><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;1f0d2ea5dbd0dbc01dcaf3231f961947" rel="nofollow">https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;1f0d2ea5dbd0dbc01dcaf3231f961947</a></p>
<p> </p>
<p>For NPS we will be creating some simple formula Indicators, using the Automated Indicators created in the previous step.</p>
<p> </p>
<p>Name: % Promoters</p>
<p>Indicator Group: NPS</p>
<p>Direction: Maximize</p>
<p>Unit: %</p>
<p>Precision: 2</p>
<p>Formula: ([[Number of Promoters]]/[[Total number of Completed NPS Responses]])*100</p>
<p>Publish on Scorecards: true</p>
<p>Apply time series to result: false</p>
<p> </p>
<p>Name: % Detractors</p>
<p>Indicator Group: NPS</p>
<p>Direction: Minimize</p>
<p>Unit: %</p>
<p>Precision: 2</p>
<p>Formula: ([[Number of Detractors]]/[[Total number of Completed NPS Responses]])*100</p>
<p>Publish on Scorecards: true</p>
<p>Apply time series to result: false</p>
<p> </p>
<p>Name: % Passives</p>
<p>Indicator Group: NPS</p>
<p>Direction: Maximize</p>
<p>Unit: %</p>
<p>Precision: 2</p>
<p>Formula: ([[Number of Passives]]/[[Total number of Completed NPS Responses]])*100</p>
<p>Publish on Scorecards: true</p>
<p>Apply time series to result: false</p>
<p> </p>
<p>Name: NPS Score</p>
<p>Indicator Group: NPS</p>
<p>Direction: Maximize</p>
<p>Unit: #</p>
<p>Precision: 0</p>
<p>Key: true</p>
<p>Formula: [[% Promoters]]-[[% Detractors]]</p>
<p>Publish on Scorecards: true</p>
<p>Apply time series to result: false</p>
<p> </p>
<p>Name: Response % for NPS surveys</p>
<p>Indicator Group: NPS</p>
<p>Direction: Maximize</p>
<p>Unit: %</p>
<p>Precision: 0</p>
<p>Formula: ([[Total number of Completed NPS Responses]]/([[Total number of Completed NPS Responses]]&#43;[[Total number of Cancelled NPS Responses]]))*100</p>
<p>Publish on Scorecards: true</p>
<p>Apply time series to result: false</p>
<p> </p>
<p><strong>Breakdowns:</strong></p>
<p>If you are familiar with Groupings in Reports, Breakdowns act in a similar way. Other BI tools might call them ‘Dimensions’. The big difference for PA is that Breakdowns are constructed ahead of time and added to Indicators so they can be processed when collection jobs are run. Breakdowns are usually added on Choice Lists or Reference fields and for NPS we’ll use common Breakdowns associated with the underlying Incident records. This will allow someone analyzing NPS values to slice and dice the data to generate insights related to Detractors and Promoters. Once we’ve added the Breakdowns, we’ll apply them to all our Indicators, then create and run a Job so we can see results. Each Breakdown needs a Breakdown Source and Breakdown Mapping, and each element is defined below. Note if you have activated the ITSM Content Packs, then Priority, Category, Assignment Group, Assigned to and Contact type already exist, saving us loads of time.</p>
<p> </p>
<p>For the Caller Department we will use the ootb Breakdown source, so we only need to create the Breakdown.</p>
<p> </p>
<p><strong>Caller Department</strong></p>
<p><strong>              Breakdown (Automated):</strong></p>
<p>                           Name:                              Caller Department</p>
<p>                           Breakdown source:              Departments</p>
<p> </p>
<p>              Breakdown Mapping:</p>
<p>                           Facts table:                      Metric Result [asmt_metric_result]</p>
<p>                           Field:                                Instance .. Assigned to .. Department</p>
<p>                                                                     (* note that the .. denotes a dot walk)</p>
<p> </p>
<p>                           Facts table:                      Assessment Instance [asmt_assessment_instance]</p>
<p>                           Field:                                Assigned to .. Department                                                                   </p>
<p> </p>
<p>              Indicators:                                     % Detractors</p>
<p>                                                                     % Passives</p>
<p>                                                                     % Promoters</p>
<p>                                                                     NPS Score</p>
<p>                                                                     Number of Detractors</p>
<p>                                                                     Number of Passives</p>
<p>                                                                     Number of Promoters</p>
<p>                                                                     Response % for NPS Surveys</p>
<p>                                                                     Total number of Cancelled NPS Responses</p>
<p>                                                                     Total number of Completed NPS Responses</p>
<p> </p>
<p>For Caller Manager, we could use the Users.Active Breakdown Source, but that would not be efficient. It is far better to create a new Breakdown Source that will allow us to zero in on Managers only, which is easily accomplished using Related List conditions.</p>
<p> </p>
<p><strong>Caller Manager</strong></p>
<p><strong>              Breakdown Source:</strong></p>
<p><strong>                           </strong>Name:                              Users.Active.Manager</p>
<p>                           Facts table:                      User [sys_user]</p>
<p>                           Field:                                Sys ID</p>
<p>                           ** I know it seems like sometimes it should not be Sys ID,</p>
<p>                                but the answer is always Sys ID.</p>
<p> </p>
<p style="padding-left: 90px;"><img src="https://community.servicenow.com/006a07fddb9ebf80a39a0b55ca9619e1.iix" /></p>
<p>                           Condition:</p>
<p>                                         Active                 is              true</p>
<p>                           RELATED LIST CONDITIONS</p>
<p>                                         Great than or Equal to 1</p>
<p>                                                       User -&gt; Manager</p>
<p>                          </p>
<p><strong>Breakdown (Automated):</strong></p>
<p>                           Name:                              Caller Manager</p>
<p>                           Breakdown source:              Users.Active.Manager</p>
<p> </p>
<p>              Breakdown Mapping:</p>
<p>                           Facts table:                      Metric Result [asmt_metric_result]</p>
<p>                           Field:                                Instance .. Assigned to .. Manager</p>
<p>                                                                    </p>
<p>                           Facts table:                      Assessment Instance [asmt_assessment_instance]</p>
<p>                           Field:                                Assigned to .. Manager</p>
<p> </p>
<p>              Indicators:                                     % Detractors</p>
<p>                                                                     % Passives</p>
<p>                                                                     % Promoters</p>
<p>                                                                     NPS Score</p>
<p>                                                                     Number of Detractors</p>
<p>                                                                     Number of Passives</p>
<p>                                                                     Number of Promoters</p>
<p>                                                                     Response % for NPS Surveys</p>
<p>                                                                     Total number of Cancelled NPS Responses</p>
<p>                                                                     Total number of Completed NPS Responses</p>
<p> </p>
<p>The following Breakdowns exist out of the box and the fields we need exist on the Task table, so no assembly required! The the only thing necessary to use an out of the box Breakdown is to connect them to a table using a Breakdown Mapping, and then add them to the Indicators. Just to reiterate, in this step you are not creating new Breakdown Sources or Breakdowns, instead you will need to access the existing Automated Breakdowns (which exist because you’ve activated the ootb Content Packs, right?), then add Mapping records and Indicators to the Related Lists at the bottom of the records.</p>
<p> </p>
<p style="padding-left: 60px;"> <strong> <img src="https://community.servicenow.com/b28a0f31dbdebf80a39a0b55ca961911.iix" /></strong></p>
<p><strong>Breakdown: Priority</strong> (access the one with Breakdown Source &#61; Incident.Priority)</p>
<p>              Breakdown Mapping (need to add 2)</p>
<p>                           Facts table:                      Metric Result [asmt_metric_result]</p>
<p>                           Field:                                Instance .. Task .. Priority</p>
<p> </p>
<p>                           Facts table:                      Assessment Instance [asmt_assessment_instance]</p>
<p>                           Field:                                Task .. Priority</p>
<p> </p>
<p>              Indicators:                                     % Detractors</p>
<p>                                                                     % Passives</p>
<p>                                                                     % Promoters</p>
<p>                                                                     NPS Score</p>
<p>                                                                     Number of Detractors</p>
<p>                                                                     Number of Passives</p>
<p>                                                                     Number of Promoters</p>
<p>                                                                     Response % for NPS Surveys</p>
<p>                                                                     Total number of Cancelled NPS Responses</p>
<p>                                                                     Total number of Completed NPS Responses</p>
<p><strong> </strong></p>
<p><strong>Breakdown: Assignment Group </strong>(access the one with Breakdown Source &#61; Groups)</p>
<p>              Breakdown Mapping (need to add 2)</p>
<p>                           Facts table:                      Metric Result [asmt_metric_result]</p>
<p>                           Field:                                Instance .. Task .. Assignment Group</p>
<p> </p>
<p>                           Facts table:                      Assessment Instance [asmt_assessment_instance]</p>
<p>                           Field:                                Task .. Assignment Group</p>
<p> </p>
<p>              Indicators:                                     % Detractors</p>
<p>                                                                     % Passives</p>
<p>                                                                     % Promoters</p>
<p>                                                                     NPS Score</p>
<p>                                                                     Number of Detractors</p>
<p>                                                                     Number of Passives</p>
<p>                                                                     Number of Promoters</p>
<p>                                                                     Response % for NPS Surveys</p>
<p>                                                                     Total number of Cancelled NPS Responses</p>
<p>                                                                     Total number of Completed NPS Responses</p>
<p> </p>
<p> </p>
<p><strong>Breakdown: Assigned To </strong></p>
<p><em>*This should exist already out of the box, you just need to add a mapping</em></p>
<p>              Breakdown Mapping (need to add 2)</p>
<p>                           Facts table:                      Metric Result [asmt_metric_result]</p>
<p>                           Field:                                Instance .. Task .. Assigned to</p>
<p> </p>
<p>                           Facts table:                      Assessment Instance [asmt_assessment_instance]</p>
<p>                           Field:                                Task .. Assigned to</p>
<p> </p>
<p>              Indicators:                                     % Detractors</p>
<p>                                                                     % Passives</p>
<p>                                                                     % Promoters</p>
<p>                                                                     NPS Score</p>
<p>                                                                     Number of Detractors</p>
<p>                                                                     Number of Passives</p>
<p>                                                                     Number of Promoters</p>
<p>                                                                     Response % for NPS Surveys</p>
<p>                                                                     Total number of Cancelled NPS Responses</p>
<p>                                                                     Total number of Completed NPS Responses</p>
<p> </p>
<p>                          </p>
<p><strong>Breakdown: Contact type</strong></p>
<p><strong>              </strong>Breakdown Mapping (need to add 2)</p>
<p>                           Facts table:                      Metric Result [asmt_metric_result]</p>
<p>                           Field:                                Instance .. Task .. Contact type</p>
<p>             </p>
<p>                           Facts table:                      Assessment Instance [asmt_assessment_instance]</p>
<p>                           Field:                                Task .. Contact type</p>
<p> </p>
<p>              Indicators:                                     % Detractors</p>
<p>                                                                     % Passives</p>
<p>                                                                     % Promoters</p>
<p>                                                                     NPS Score</p>
<p>                                                                     Number of Detractors</p>
<p>                                                                     Number of Passives</p>
<p>                                                                     Number of Promoters</p>
<p>                                                                     Response % for NPS Surveys</p>
<p>                                                                     Total number of Cancelled NPS Responses</p>
<p>                                                                     Total number of Completed NPS Responses</p>
<p> </p>
<p style="padding-left: 90px;"><strong> <img src="https://community.servicenow.com/f9aa4b71dbdebf80a39a0b55ca96196b.iix" /></strong></p>
<p>I’m going to be vulnerable here, and admit that I am not good at scripting. If I have been able to achieve anything with scripting it is only because I have stood upon the shoulders of giants, AKA patient colleagues who help and support me. Another technique I have used successfully for many years is finding something already in the system similar to what I need, then copying it and making a few minor edits. Most Performance Analytics work does not require scripting however there are some exceptions including hierachical Breakdowns (e.g. with Parent \ Child type records), time duration calculations, and occasionally Breakdown Mappings.</p>
<p>Why do we need to use scripting? In the last step we demonstrated we can dot walk to the Task record, but it is not possible to them dot walk from the Task to the Incident. Although we have Incident number (trigger_id) the manual field selection in the Breakdown Mapping only lets us choose Task fields. That is great for Assignment Group and Priority, which exist on all records at the Task level, but we need to script to pull in Breakdown data for fields that only exist on the Incident record itself like Category. But have no fear, it’s a relatively easy script to create.</p>
<p>First we’ll need to create the scripts. Under the Performance Analytics menu, there is a specific option for ‘Scripts’. First we’ll create a new one to help us get the Category from the Task record. When you ‘script a breakdown’ you basically want the script to return a value that matches your Breakdown Source.</p>
<p> </p>
<p>Script Name:     get.incident.category.from.task</p>
<p>Facts table:        Metric Result [asmt_metric_result]</p>
<p>Fields:                 Instance .. Trigger ID</p>
<p>Script: (you can literally cut/paste the below section into the script record)</p>
<p>//this defines the function</p>
<p>function incidentCategory(incident_id){</p>
<p>    var gr &#61; new GlideRecord(&#34;incident&#34;);</p>
<p>    </p>
<p>    if (gr.get(incident_id))</p>
<p>        return gr.getValue(&#34;category&#34;);</p>
<p>    </p>
<p>    return &#39;&#39;;</p>
<p>}</p>
<p>incidentCategory(current.instance.trigger_id);</p>
<p> </p>
<p>Basically this searches the incident table using the ‘incident_id’ from the Task, and then returns the ‘category’. Easy peasy!</p>
<p> </p>
<p>Next we need to create a second script, so that the same Breakdown may be applied to Assessment Instance based Indicators.</p>
<p> </p>
<p>Script Name:              get.incident.category.from.task.assessment</p>
<p>Facts table:        Assessment Instance [asmt_assessment_instance]</p>
<p>Fields:                 Trigger ID</p>
<p>Script:</p>
<p>//this defines the function</p>
<p>function incidentCategory(incident_id){</p>
<p>    var gr &#61; new GlideRecord(&#34;incident&#34;);</p>
<p>    </p>
<p>    if (gr.get(incident_id))</p>
<p>        return gr.getValue(&#34;category&#34;);</p>
<p>    </p>
<p>    return &#39;&#39;;</p>
<p>}</p>
<p>incidentCategory(current.trigger_id);</p>
<p> </p>
<p>Now we just need to use our script to create a Breakdown Mapping. Access the Breakdown as in the last step, add the scripted Breakdown Mapping</p>
<p><strong> </strong></p>
<p><strong>Breakdown: Incident Category</strong></p>
<p><strong>              </strong>Breakdown Mapping</p>
<p>                           Facts table:                      Metric Result [asmt_metric_result]</p>
<p>                           Scripted:                          true</p>
<p>                           Script:                               get.incident.category.from.task</p>
<p> </p>
<p>                           Facts table:                      Assessment Instance [asmt_assessment_instance]</p>
<p>                           Scripted:                          true</p>
<p>                           Script:                               get.incident.category.from.task.assessment</p>
<p> </p>
<p>              Indicators:                                     % Detractors</p>
<p>                                                                     % Passives</p>
<p>                                                                     % Promoters</p>
<p>                                                                     NPS Score</p>
<p>                                                                     Number of Detractors</p>
<p>                                                                     Number of Passives</p>
<p>                                                                     Number of Promoters</p>
<p>                                                                     Response % for NPS Surveys</p>
<p>                                                                     Total number of Cancelled NPS Responses</p>
<p>                                                                     Total number of Completed NPS Responses</p>
<p><strong>              </strong></p>
<p><strong> </strong></p>
<p><strong>Word Cloud – Text Analytics</strong></p>
<p>In the London version, ServiceNow released a new visualization called a ‘Word Cloud’. This is a great way to represent text from fields such as Short Description or Survey Comments. In this section we’ll walk through setting up a Word Cloud for our NPS Surveys. If you are on a version prior to London, skip these steps.</p>
<p> </p>
<p>Text Analytics are configured using already existing Indicators Sources. In order to create a Word Cloud for only NPS Comments and ensure maximum effiency of collection, we’ll configure a new Indicator Source that pulls only NPS Comments.</p>
<p> </p>
<p><strong>Indicator Source</strong></p>
<p>Name: NPS.Survey.Result.Wordcloud</p>
<p>Valid for frequency: Daily</p>
<p>Facts table: Metric Result [asmt_metric_result]</p>
<p>Conditions:</p>
<p>              Instance .. State              is           Complete</p>
<p>              Metric                             is           NPS Comment</p>
<p>              Instance .. Taken on        on          Today</p>
<p> </p>
<p>In your Navigator type in ‘text a’ and it will filter to the proper menu options. Then click on ‘Setup’ and then ‘New’ to create a new Text Analytic.</p>
<p> </p>
<p>Indicator source:             NPS.Survey.Result.Wordcloud</p>
<p>Fields to analyze:            String value</p>
<p>Use system stop words:  True (checked)</p>
<p> </p>
<p>Next we need to create a simple Indicator that points to our new Indicator Source:</p>
<p> </p>
<p><strong>Automated Indicator</strong></p>
<p>Name:                            NPS Wordcloud</p>
<p>Indicator Group:             NPS</p>
<p>Direction:                       None</p>
<p>Indicator Source:            NPS.Survey.Result.Wordcloud</p>
<p>Aggregate:                     Count</p>
<p>Value when nil:               0</p>
<p>Collect records:               true</p>
<p>Filter:</p>
<p>                                     None</p>
<p>Publish on Scorecards:    true</p>
<p> </p>
<p>Then add Breakdowns to the Indicator:</p>
<p>              Assigned To</p>
<p>              Category</p>
<p>              Priority</p>
<p>              NPS Value</p>
<p>              Assignment Group</p>
<p>              Caller Department</p>
<p>              Caller Manager</p>
<p>              Contact type</p>
<p> </p>
<p>Now go back to Text Analytics &gt; Setup and open the NPS Wordcloud setup record we added previously. At the bottom of the screen, access the Indicator tab and add your NPS Wordcloud Indicator.</p>
<p> </p>
<p>And that’s it! We’ll come back to this Indicator and get to see it in action once we create the Dashboard.</p>
<p> </p>
<p><strong>Collection Jobs</strong></p>
<p>If you jumped ahead and did a collection just to see what happens, don’t worry, I won’t judge! For everyone else following along, the next step is to create the Jobs and associate them with our Automated Indicators. Formula Indicators are created by Automated Indicators, so you don’t need to add Formula Indicators to Jobs.</p>
<p> </p>
<p>Job:                                [PA NPS] Daily Collection Job</p>
<p>Operator:                        Relative</p>
<p>Relative start:                  1</p>
<p>Relative start interval:    days ago</p>
<p>Relative end                    1</p>
<p>Relative end internal:     days ago</p>
<p>Run as:                          System Administrator *</p>
<p>(* Always use an admin, or service account with admin to run jobs. The selected user must have access to the underlying data tables or the job won’t collect any scores)</p>
<p>Active:                              true (checked)</p>
<p>Run:                                  Daily</p>
<p>Collect:                             Both scores and text index</p>
<p>Time:                                Hours 00            02              00</p>
<p>Indicators:                        NPS Wordcloud</p>
<p>                                                       Number of Detractors</p>
<p>                                                       Number of Passives</p>
<p>                                                       Number of Promoters</p>
<p>                                                       Total number of Cancelled NPS Responses</p>
<p>                                                       Total number of Completed NPS Responses</p>
<p> </p>
<p>Job:                                [PA NPS] Historical Collection Job</p>
<p>Operator:                         Relative</p>
<p>Relative start:                 5</p>
<p>Relative start interval:    days ago</p>
<p>Relative end                    1</p>
<p>Relative end internal:     days ago</p>
<p>Run as:                          System Administrator *</p>
<p>(* Always use an admin, or service account with admin to run jobs. The selected user must have access to the underlying data tables or the job won’t collect any scores)</p>
<p>Active:                              false</p>
<p>Run:                                 On Demand</p>
<p>Collect:                            Both scores and text index</p>
<p>Indicators:                       NPS Wordcloud</p>
<p>                                                       Number of Detractors</p>
<p>                                                       Number of Passives</p>
<p>                                                       Number of Promoters</p>
<p>                                                       Total number of Cancelled NPS Responses</p>
<p>                                                       Total number of Completed NPS Responses</p>
<p> </p>
<p> </p>
<p>You might be thinking at this point “A 5 day historical collections seems pretty useless, I want 6 months of data!” My recommendation is always to collect only a few days initially, then verify the results before you do a full historical collection. If you only configured the NPS survey from Step 1 recently, you won’t have much data regardless. Go ahead, run a quick collection, then look at each Indicator to ensure you have data prior to running a longer collection. If your Indicators or Breakdowns are missing data, recheck the previous steps to ensure nothing was missed. If you are still having an issue please post it as a comment to this post and I’ll do my best to help.</p>
<p>If you like this content and would like to see more, please mark this is Helpful or Comment.</p>
<p>Thanks,</p>
<p>Chris Steinke</p>
<p>p.s. Part 3 is going to be the Dashboard build out! Stay tuned!</p>
<p> </p>
<p> </p>
<p> </p>
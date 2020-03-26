---
title: "Leverage natural language understanding in Virtual Agent to handle more requests automatically"
date: 2019-08-30T02:44:42.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5dbdd0c6db2bfb04feb1a851ca961911"
---
<p>Customer support, human resources, and other service providers get a lot of simple service requests through phone, chat and other channels. Those requests can take up a lot of their agents’ time. The ServiceNow Virtual Agent with new natural language understanding (NLU) capability available in the New York release can help lift that burden by handling those simple requests automatically.</p>
<p>In this installment of our <a title="NOWSupport best practices series" href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="noopener noreferrer nofollow">NOWSupport best practices series</a>, we’ll take a look at Virtual Agent and NLU, and show you where you can learn more about it.</p>
<h3>Front end – the Virtual Agent workbot</h3>
<p>The Virtual Agent front end is a workbot – designed to get work done. Once you train Virtual Agent on the input it’s likely to see, NLU helps extract the user’s intent and important information from a broad variety of input. For example, if the user says any of these things…</p>
<p style="padding-left: 30px;">“Update my email marissa&#64;sampleco.com”</p>
<p style="padding-left: 30px;">“Change my email address to marissa&#64;sampleco.com”</p>
<p style="padding-left: 30px;">“My new email is marissa&#64;sampleco.com”</p>
<p>…NLU extracts the important information without asking any more questions…</p>
<p style="padding-left: 30px;">#Intent: <strong>update_profile</strong></p>
<p style="padding-left: 30px;">&#64;item&#61;<strong>email</strong></p>
<p style="padding-left: 30px;">&#64;value&#61;<strong>marissa&#64;sampleco.com</strong></p>
<p>…and Virtual Agent updates the user’s profile.</p>
<p> </p>
<p>If the user switches topics in the middle of a conversation, Virtual Agent won’t miss a beat. With NLU, Virtual Agent follows the change in topic whether the user returns to the original topic or not.</p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/5b2ed08adb2bfb04feb1a851ca961916.iix" /></p>
<p style="text-align: center;"> </p>
<p style="text-align: left;">You can integrate Virtual Agent with third-party chat clients like MS Teams, Facebook Messenger, Slack, iPhone and Android. With the phone’s text-to-speech, Virtual Agent works with voice input as well as text. You can also integrate with IBM Watson to quickly extend Virtual Agent to different languages through Watson’s translator.</p>
<h3>Back end – building conversations</h3>
<p>The back end makes it easy to add Virtual Agent to your apps. Virtual Agent comes with about 30 conversations for common tasks like email setup, password reset, surveys, and printer issues, plus features like greetings, closings, and route to live agent. You’ll tailor these conversations to suit your company, and you can create your own. In many companies, process owners create or modify individual conversations to suit their processes using the easy drag-and-drop Designer – no coding! Meanwhile the Virtual Agent admin keeps watch over the entire conversation inventory. That way, each conversation is tailored to its task within the company, and the entire inventory has a consistent voice.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/855e900edb2bfb04feb1a851ca96199f.iix" /></p>
<p>Virtual Agent in the New York release comes with about 30 conversations.</p>
<p> </p>
<p>The Virtual Agent Designer makes it easy to create flows – just drag and drop.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/831f5002db6bfb04feb1a851ca96192a.iix" /></p>
<p> </p>
<h3>Getting started with Virtual Agent</h3>
<p>It’s easy to get started using Virtual Agent. First, use analytics to find out your most common requests, and choose the ones that’ll be easiest to automate. Then find the patterns in the interactions between service agents and customers. Finally, modify the supplied conversations or create new ones to match those patterns. Along the way, you’ll train the NLU feature to handle the variety of user input.</p>
<p>And if you’re upgrading to the New York release, you won’t have to redo any of your Virtual Agent features. Just expand to use new features like intent and entity extraction and NLU. You may want to recast some of your conversations to take advantage of new segments in New York, like greetings, good-bye, and try again.</p>
<h3>For more information</h3>
<p>To learn more about Virtual Agent and NLU, check out these resources:</p>
<p><iframe src="https://omny.fm/shows/servicenow-techbytes/episode-52-virtual-agent-and-nlu/embed?style&#61;cover" width="100%" height="180"></iframe></p>
<p><a title="Virtual Agent Overview" href="https://www.youtube.com/watch?v&#61;7mWKogxX1u0" target="_blank" rel="noopener noreferrer nofollow">Virtual Agent Overview</a> - Demo video on the <a title="ServiceNow Support YouTube channel" href="https://www.youtube.com/channel/UCQjE37R-Y4DTq7kUWPO83Wg" target="_blank" rel="noopener noreferrer nofollow">ServiceNow Support YouTube channel</a></p>
<p><a title="Natural Language Understanding in Virtual Agent" href="https://docs.servicenow.com/bundle/newyork-performance-analytics-and-reporting/page/administer/virtual-agent/concept/va-NLU.html" target="_blank" rel="noopener noreferrer nofollow">Natural Language Understanding in Virtual Agent</a> - product documentation</p>
<p><a title="What&#39;s new in New York for Virtual Agent" href="https://community.servicenow.com/community?id&#61;community_article&amp;sys_id&#61;958b23a6dbfeff006064eeb5ca9619dd" target="_blank" rel="noopener noreferrer nofollow">What&#39;s new in New York for Virtual Agent</a> - Community article</p>
<p><a title="Virtual Agent release notes" href="https://docs.servicenow.com/bundle/newyork-release-notes/page/release-notes/performance-analytics-reporting/virtual-agent-rn.html" target="_blank" rel="noopener noreferrer nofollow">Virtual Agent release notes</a> (New York) - product documentation</p>
<p><a title="Primer on natural language understanding" href="https://community.servicenow.com/community?id&#61;community_article&amp;sys_id&#61;72462b5cdb9d3b0422e0fb243996190c" target="_blank" rel="noopener noreferrer nofollow">Primer on natural language understanding</a> - Community article</p>
<p><a title="An AI Glossary for Business Leaders" href="https://workflow.servicenow.com/learn/ai-automation-glossary/" target="_blank" rel="noopener noreferrer nofollow">An AI Glossary for Business Leaders</a> - ServiceNow Workflow article</p>
<p><a title="Chatbots get chatty" href="https://workflow.servicenow.com/customer-experience/ai-nlp-chatbots-human-touch/" target="_blank" rel="noopener noreferrer nofollow">Chatbots get chatty</a> - ServiceNow Workflow article</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We’ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all the blog posts in this series, see our <a title="NOWSupport best practices series list." href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="noopener noreferrer nofollow">NOWSupport best practices series list</a>.</p>
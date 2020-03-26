---
title: "How to do Sentiment Analysis on ServiceNow Survey Result"
date: 2018-11-17T03:44:40.000Z
authors: ["Manjeet Singh"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=54076775db7da700afc902d5ca96196c"
---
<p class="p1">Survey Questions that let respondents reply with a comment provide valuable information. But how do you quickly analyze user&#39;s opinion when you are getting hundreds of Surveys results every week with lots of feedback comment in a text form?</p>
<p class="p1" style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="a301f771dbb1e700afc902d5ca961950.iix" width="483" height="259" /></p>
<p class="p1"> </p>
<p class="p1">The good news is that we have built a new module called <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/survey-administration/concept/sentiment-analysis.html" rel="nofollow">Sentiment Analysis</a> in London release. This module will allow ServiceNow customers to apply sentiment analysis on text-based survey responses using 3rd party sentiment analysis providers like IBM Watson, Google Cloud and MS Azure. This feature requires customers to have their own license to sentiment analysis providers and let them configure the vendor APIs with Survey Application easily. </p>
<h3 class="p1">Setup Sentiment Analysis for Surveys:</h3>
<ol class="ol1"><li class="li1">Activate the Sentiment Analysis (com.snc.sentiment_analysis) plugin (note- this plugin is available starting from London release)</li><li class="li1">Configure a sentiment connector by following these steps:</li><li>
<ul class="ul1"><li>
<ul class="ul1"><li class="li1">As System Admin, Navigate to Sentiment Analysis &gt; Sentiment Connector Configurations.</li><li class="li1">Add or edit out of the box connector configuration to your choice of ML services that you are using such as Google, IBM Watson and Microsoft Azure.</li></ul>
</li></ul>
</li><li>Opt-in Surveys for Sentiment Analysis- Go to Survey App &gt; View Survey, select questions that should be used for analysis. The survey responses of these questions are sent to the configured platforms for analysis through the specified connector configurations. Note: You can only use string type questions for sentiment analysis.</li></ol>
<p style="padding-left: 30px;">As Survey Admin you can opt-in or opt-out for sentiment analysis at individual survey question level. This gives you full granular control on which Survey you want to participate in for the analysis. </p>
<h3>See Survey Sentiment Analysis results</h3>
<p style="padding-left: 30px;">The sentiment analysis results are displayed under Survey &gt; Question Sentiment Results. The sentiment label is based on the normalized score. </p>
<p style="padding-left: 30px;">The sentiment analysis results view contains a bar chart that displays the percentage of positive, negative, and neutral results, along with the instance count for each category. Now, you quickly quantify and transform text responses into an insightful user/employee sentiment report and setup followup workflow actions.</p>
<p class="p1"> </p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="81996775dbbda700afc902d5ca9619ce.iix" width="517" height="264" /> </p>
<h3 class="p1">Frequently Asked Questions:</h3>
<h4 class="p1">1. <strong>How to add a new sentiment analysis provider?</strong></h4>
<p class="p1">ServiceNow customers are allowed to add a new 3rd party sentiment analysis provider (other than out-of-box-provided IBM Watson NLU and Google NL) by creating the required Connections &amp; Credentials and defining configuration profile in Sentiment Analysis configuration table.</p>
<p class="p1">ServiceNow customers own the entire responsibility of managing the license of any 3rd party sentiment analysis providers used for Survey Sentiment Analysis.</p>
<h4>2. Can I use sentiment analysis for other Apps?</h4>
<p class="p1">Yes. Sentiment Analysis is a platform separate module and its API can be used across any apps on ServiceNow platforms.</p>
<ul><li>SentimentAnalyser API performs sentiment analysis on a string value. To use this class in a scoped application, use the sn_nlp_sentiment namespace identifier. The Sentiment Analysis plugin ( com.snc.sentiment_analysis) must be enabled to access the SentimentAnalyser API.</li><li>&#39;sn_nlp_sentiment.SentimentAnalyser&#39; is the API/script include which accepts input text, connector(optional), and language(optional) as input and returns a JSON with actual score, normalized score, and error messages if any.</li><li>We have provided OOB implementation (Script Includes) for Google, Watson, and MS Azure. All these Scripts Includes extend &#39;sn_nlp_sentiment.NLPSentimentAnalysisHelper’.</li></ul>
<p class="p1"><strong>Read more here:</strong></p>
<p class="p1"><a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/survey-administration/task/configure-sentiment-connector.html" rel="nofollow">Configure a sentiment connector</a></p>
<p class="p1"><a href="https://docs.servicenow.com/bundle/london-application-development/page/app-store/dev_portal/API_reference/SentimentAnalyserScoped/concept/SentimentAnalyserScoped.html" rel="nofollow">Use Sentiment Analysis Service</a></p>
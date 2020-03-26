---
title: "How to measure the accuracy of your sentiment analysis results"
date: 2019-03-25T17:38:48.000Z
authors: ["Manjeet Singh"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=bd2fb15fdb1cbf085ed4a851ca96193f"
---
<p class="p1" style="text-align: center;"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/009ff117db5cbf085ed4a851ca961958.iix" /></span></p>
<p class="p1"> </p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">Sentiment analysis capabilities would seem to have come a long way in last two years – but is still far from perfect. No matter what sentiment API providers (IBM, Google, Azure) do you use, it’s important to understand how you can approach the performance and accuracy measurement. </span></p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">Since we launched <a href="https://docs.servicenow.com/bundle/london-servicenow-platform/page/administer/survey-administration/concept/sentiment-analysis.html" rel="nofollow">Survey Sentiment Analysis</a> support in London release, I am seeing this question getting asked quite often, &#34;how to measure the accuracy of sentiments results?&#34;.</span></p>
<p class="p1"> </p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">As you may know, most Sentiment Analysis algorithms would categorize the data into Positive / Neutral / Negative. So, the rule of thumb is to measure performance is whether the system categorized the data in accordance with the intuition of the user. This a very abstract as well as subjective problem, whose accuracy cannot be measured by plain mathematics.</span></p>
<h2 class="p2">Training and Testing data</h2>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">You need testing data that has been verified by the human. There are plenty of sentiment analysis training data sets available for free. Training means that each chunk of text has been pre-categorized and verified by a human. For example, you can use a popular <a href="https://github.com/rmaestre/Sentiwordnet-BC/blob/master/test/testdata.manual.2009.06.14.csv" rel="nofollow"><span class="s1">Twitter comment data set</span></a> consisting of 498 tweets categorized by topic and sentiment as: Negative: 177, Neutral: 139, Positive: 182</span></p>
<h2 class="p2">Measuring the performance</h2>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">There are three very important numbers that go into determining how well a sentiment analysis system works.</span></p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;"><strong>1. Accuracy: </strong></span><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">A measure of how often a sentiment rating is correct. [Num. of Correct Queries / Total Num. of Queries] - You would use this to check the overall accuracy of the system.</span></p>
<p class="p1"> </p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;"><strong>2. Recall: </strong></span><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">A measure of how many words with sentiment were rated as sentimental. This could be seen as how accurately the system determines neutrality.</span></p>
<p class="p1"> </p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;"><strong>3. F1 Score:</strong></span></p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">F-Score is a combination of precision and recall. This one of the most important measures and will tell you how your system is performing</span></p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">The formula for calculating F1 Score is:</span></p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">F1 &#61; [ 2 * (Precision * Recall) / (Precision &#43; Recall) ]<strong> </strong></span></p>
<p class="p1"> </p>
<p class="p1"><span style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;">The score is in a range of 0.0 - 1.0, where 1.0 would be perfect. The <a href="https://en.wikipedia.org/wiki/F1_score" rel="nofollow">F1 Score</a> is very helpful, as it gives us a single metric that rates a system by both <a href="https://en.wikipedia.org/wiki/Precision_and_recall" rel="nofollow">precision and recall</a>.  </span></p>
<p class="p1"> </p>
<p class="p1"><strong><span class="s2" style="font-family: &#39;times new roman&#39;, times; font-size: 14pt;"><span class="s3">Additional reading:</span></span></strong></p>
<h3 class="cm-content-title m-t"><span style="font-size: 14pt; font-family: &#39;times new roman&#39;, times;"><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;54076775db7da700afc902d5ca96196c" rel="nofollow">How to do Sentiment Analysis on ServiceNow Survey Result?</a></span></h3>
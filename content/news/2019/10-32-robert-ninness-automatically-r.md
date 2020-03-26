---
title: "Automatically recalculate slow formula scores to speed up widget load times"
date: 2019-10-31T11:20:34.000Z
authors: ["Robert Ninness"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=225669ca1bf808d0d01143f6fe4bcbf7"
---
<p>Formula Indicator scores are lazily calculated. After data collection, part of the formula may have a new value. Rather than re-calculating by cascade (determining which formulas need to be re-calculated based on formula components) formulas are re-calculated on demand. While there are a number of benefits to this approach, it can lead to poor user experience for the unlucky user requiring new scores from such a formula. If the formula requires some time to compute, either at the end of a long chain of &#34;formula of formulas&#34; or it uses Glide API scripting, the wait time can be quite jarring, especially if it means a widget takes a minute or so to load.</p>
<p>A simple way to get around this issue is to pre-calculate the formula as soon as data collection has completed. When a data collection job has finished successfully, it fires off an event: pa.job.dc.ended.ok. Using a Script Action, a script can be triggered to immediately re-calculate the scores of a formula. Here is an example script:</p>
<p> </p>
<pre class="language-markup"><code>var scorecard &#61; new SNC.PAScorecard();
scorecard.addParam(&#39;uuid&#39;, &#39;802f57150f300010ad8350feb6767e51&#39;);
scorecard.addParam(&#39;include_scores&#39;, true);
scorecard.addParam(&#39;limit&#39;, -1);
scorecard.query();</code></pre>
<p> </p>
<p>This script uses the Scorecard API to retrieve all scores from the given formula (uuid). If new scores were collected for any of the indicators used in the given formula, the formula scores will be re-calculated and cached. The next user request for scores will use the cache and will not have to wait for the formula scores to be re-calculated. </p>
<p>If you have multiple data collection jobs, ensure you add conditional execution to your Script Action so that the script is only run when required. The &#39;current&#39; and &#39;event&#39; variables can be used to create your condition.</p>
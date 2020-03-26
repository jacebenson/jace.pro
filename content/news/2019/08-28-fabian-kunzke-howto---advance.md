---
title: "HowTo  advanced Ajax Calls A custom chart framework"
date: 2019-08-27T16:56:08.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=08d34055dbafffc013b5fb24399619a5"
---
<p>This blog will extend the pevious blog about simple AjaxCalls by introducing a more complex usecase: custom reports.</p>
<p>First, let&#39;s start with the attachments:<br />You will find two updateset within this blog. One contains a very light application - a very simple chart framework -, the other one contains a demo report to utilize this framework. After both is installed, you can open and view the report by using the following url:</p>
<p>your_instance.service-now.com/x_145100_charts_Chart%20Render.do?sysparm_names&#61;Incident</p>
<h4>What ist this application for?</h4>
<p>Have you ever tried to use reports for your service portal? Tried to tie in a report into a form? Did you ever need a dashboard for reports? This is what this framework is for. It allows you to open a ui page with an added url parameter selecting a custom report you defined within your instance. Don&#39;t worry if that sounds a bit too complicated, it&#39;s not. I will explain this in more detail in a second. First, let&#39;s answer one important question: Why can&#39;t i just use the oob reports? And the answer is: you can. But, i have run into limits with them. Here are just some of them:</p>
<p>- Layering multiple different reports can be tough if they don&#39;t share the same table (e.g. a report which compares the open incidents over time with the open changes and problems over time)<br />- oob reports have limited interactions and animations<br />- some reports cannot be visualized well (e.g. the worldmap reports are kind of disapointing)<br />- running reports on huge amount of data just takes ages (30s &#43;)</p>
<p>Now the last reason is the one i had to create this framework. It is (at the moment) restricted to displaying line charts (honestly because i was too lazy to extend it, but that would not be an issue), but it is not restricted as to where those lines come from. Want a line chart displaying a report over 2 million incidents? No problem. Want to also display your 1 million changes in the same report? Feel free to do so. Want to display this within 3-5 seconds? No worries.<br />Now this sounds like something straight out of the future, but it has a simple reason as to why this works so much faster than oob reports: GlideAggregate. The important piece of information is: the oob reporting actually loads all records within a report. If you have a line chart with all incidents over those last 2 years, all those incidents are retrieved from the server. This way, if you click on the report, a list of those reports can be shown. From my experience though: this is very rarely needed. And thus, a lightweight report which just counts records instead of loading all of them (essentially a GlideAggregate) is just so much more efficient.</p>
<p>Now Fabian, hear me out. I have come here to learn something about GlideAjax, not this reporting stuff. Why should i care? Well, simply put: Know when to use oob parts. If you can use an oob report, do so. Compared to <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;2ecdab3bdbd3ff405ed4a851ca9619c5" target="_blank" rel="noopener noreferrer nofollow">the last (and very entry level) blog </a>this more advanced blog must also provide you with the reason of doing this. Otherwise, why would you use any scripting at all? But, i understand your point. Let&#39;s get going as to how this all works. Installed the update sets on your personal developer instance? Sweet. Let&#39;s dive into it!</p>
<h4>Charts</h4>
<p>First things first: this uses <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer nofollow">chart.js</a>. This is a javascript bib which allows you to display charts from (imo) a very clean javascript based object. Nice.</p>
<p>How does this whole thing work?</p>
<p>Mainly, you got one ui page which will display the chart object and you have one script include which will build said object. And guess what: there is some GlideAjax in between. First, lets check our ui pages client script:</p>
<pre class="language-javascript"><code>function getChartData()
{
	var ajaxCall &#61; new GlideAjax(&#39;x_145100_charts.Chart_Generator&#39;);
	ajaxCall.addParam(&#39;sysparm_name&#39;, &#39;getChartData&#39;);
	var chartDataNames &#61; getParameterValue(&#39;sysparm_names&#39;);
	ajaxCall.addParam(&#39;sysparm_data_name&#39;, chartDataNames);
	ajaxCall.getXMLAnswer(returnChartData);
}

function returnChartData(answer)
{
	// get data array from the response
	var chartJSON &#61; answer;
	var chart &#61; JSON.parse(chartJSON);
	drawChart(chart);
}

function drawChart(chart)
{
	var canvas &#61; document.getElementById(&#34;myChart&#34;).getContext(&#39;2d&#39;);
	var myChart &#61; new Chart(canvas, chart);
}

function getParameterValue(name) {
	
	var url &#61; document.URL.parseQuery();
	if (url[name])
		return decodeURI(url[name]);
	
	return;
}</code></pre>
<p>Doesn&#39;t look too weird, does it. Now what happens here becomes more obvious as we take a look at the html &#34;code&#34;:</p>
<pre class="language-markup"><code>&lt;?xml version&#61;&#34;1.0&#34; encoding&#61;&#34;utf-8&#34; ?&gt;
&lt;j:jelly trim&#61;&#34;false&#34; xmlns:j&#61;&#34;jelly:core&#34; xmlns:g&#61;&#34;glide&#34; xmlns:j2&#61;&#34;null&#34; xmlns:g2&#61;&#34;null&#34;&gt;
	&lt;script&gt;&lt;/script&gt;
	&lt;body onload&#61;&#34;getChartData()&#34;&gt;
		&lt;canvas id&#61;&#34;myChart&#34; width&#61;&#34;400&#34; height&#61;&#34;400&#34;&gt;&lt;/canvas&gt;
	&lt;/body&gt;
&lt;/j:jelly&gt;</code></pre>
<p>Ok, i am not joking, this is it. This is the ui page which will display any chart we throw at it (well, at least any chart which is in the chart.js format (hint: <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer nofollow">get familiar with it</a>)). Within our xml we defined a blank canvas (this is esentially our html tag on which we will draw stuff on). Within our client script a function is defined which does an ajax call (wuhuuuuu) grabbing a chart object from the backend. And then all we do is add this chart to the canvas (this is the &#34;drawChart&#34; function). And thats it. Note: the &#34;getParameterValue&#34; function retrieves the name of the chart we are looking for from the URL. Now how does the Ajax call work? Let&#39;s take a closer look:</p>
<h4>The ajax call</h4>
<p>An ajax call generally follows 2 steps: First, define what you want to call and call it, second, do something with the response. Nothing else here:</p>
<pre class="language-javascript"><code>function getChartData()
{
	var ajaxCall &#61; new GlideAjax(&#39;x_145100_charts.Chart_Generator&#39;);
	ajaxCall.addParam(&#39;sysparm_name&#39;, &#39;getChartData&#39;);
	var chartDataNames &#61; getParameterValue(&#39;sysparm_names&#39;);
	ajaxCall.addParam(&#39;sysparm_data_name&#39;, chartDataNames);
	ajaxCall.getXMLAnswer(returnChartData);
}

function returnChartData(answer)
{
	// get data array from the response
	var chartJSON &#61; answer;
	var chart &#61; JSON.parse(chartJSON);
	drawChart(chart);
}</code></pre>
<p>We call our script include (the server side piece of code). In this case it is the Chart_Generator. As you can see this script include is within an application (x_145100_charts) scope. This is super helpful to keep your code architecture tidy and thus making maintaining code a lot easier. We essentially say: &#34;This piece of code is for this use only. Don&#39;t use it anywhere else, because we can only guarantee, that it works here!&#34;. Next, we define the function we want to call (here its &#34;getChartData&#34; which, as you may guess, gets the data for a chart). Lastly, we define what exactly we are looking for by handing over additional parameters (in this case the chart data names). Note: You can also hand over objects here, just make sure to use a JSON.stringify() first!).</p>
<p>Then we wait (.getXMLAnswer).</p>
<p>Done waiting? Great, we got a response from the server. In this case it&#39;s the answer with a JSON string. Now why do we need a JSON string here? The communication between client and server is restricted to string based objects. In our case we are communicating a chart object (remember: this is the stuff we will draw within our canvas). This object is more than just a string. Therefore, we need to convert it to a string and then parse it back to a javascript object. Remember: Always use JSON based string-encoding when using GlideAjax for objects that are not strings.</p>
<p>All thats left to do now is hand this chart object over to the drawChart() function and we are done. Awesome. Now, let&#39;s look at the server side stuff:</p>
<pre class="language-javascript"><code>getChartData: function()
	{
		var dataName &#61; this.getParameter(&#39;sysparm_data_name&#39;);
		var chartRawData &#61; calculateChartData(dataName);
		var singleDataset &#61; {
			label: chartRawData.name,
			data: chartRawData.points
		};
		
		var datasets &#61; [singleDataset];
		var labels &#61; chartRawData.steps;
		var chart &#61; createChartObject(&#39;line&#39;, datasets, labels);
		return JSON.stringify(chart);
	},</code></pre>
<p>This is where we recieve the ajax call. First of all we take the information of the specified report name. Small note: If we would have a JSON encoded object as a parameter, we would use .parse() to get the javascript object (If you want to take a deeper look into parsing strategies with JSON look no further: <a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;aedbb9e8dbafbb805ed4a851ca9619ba" target="_blank" rel="noopener noreferrer nofollow">boom</a>). Next step is some coding magic. Actually it&#39;s just calling this function here:</p>
<pre class="language-javascript"><code>function calculateChartData(dataName)
{
	var evaluator &#61; new GlideScopedEvaluator();
	var dataScript &#61; new GlideRecord(&#39;x_145100_charts_chart_data&#39;);
	dataScript.addQuery(&#39;name&#39;, &#39;IN&#39;, dataName);
	dataScript.query();
	if(dataScript.next())
		{
			var data &#61; evaluator.evaluateScript(dataScript, &#39;script&#39;, null);
			var points &#61; data.points;
			var steps &#61; data.steps;
			var name &#61; dataScript.getValue(&#39;name&#39;);
			
			return {points: points,
					steps: steps,
					name: name};
		}	
}

function createChartObject(chartType, datasets, labels)
{
	var data &#61; {
		labels: labels,
		datasets: datasets
	};
	var scales &#61; {
		yAxes: [{
			ticks: {beginAtZero: true}
		}]
	};
	var options &#61; {
		scales: scales
	};
	var chart &#61;
		{
			type: chartType,
			data: data,
			options: options
		};
	
	return chart;
}</code></pre>
<p>This function checks a table (the chart data table) for our specified chart. Note: Within that table any script which returns a data object can be used. Within the demo data update set you will find a chart as an example.<br />Then, based on the specified chart data, this function builds a standard chart.js object (if you are using another chart library, adjust the code accordingly). Then, all we do is return the full chart object to the &#34;getChartData&#34; function. There it is then stringified into a JSON string and send back to our ui page which in return displays the chart within the canvas. And we are done (almost).</p>
<p>Let&#39;s take a short look at the example chart record:</p>
<pre class="language-javascript"><code>(function toExecute() {
	var points &#61; [];
	var steps &#61; [];
	
	var incidentCount &#61; new GlideAggregate(&#39;incident&#39;);
	incidentCount.addQuery(&#39;active&#39;, false);
	incidentCount.addAggregate(&#39;COUNT&#39;);
	incidentCount.addTrend(&#39;closed_at&#39;,&#39;Week&#39;);
	incidentCount.setGroup(false);
	incidentCount.query();
	
	while(incidentCount.next())
		{
			var countPerWeek &#61; incidentCount.getAggregate(&#39;COUNT&#39;);
			var week &#61; incidentCount.getValue(&#39;timeref&#39;);
			points.push(countPerWeek);
			steps.push(week);
		}
	
	var data &#61; {points: points, steps: steps};
	return data;
})();</code></pre>
<p>This is the script to generate the &#34;data&#34; for our chart. All it is is a simple GlideAggregate counting all inactive incidents  closed per week. Thats it. We then return this as steps (these are the markers for the week) and the value for each week (aka. the points). Aaaaand now we are done.</p>
<h4>The takeaway</h4>
<p>Why is GlideAjax so useful here? With the use of GlideAjax, we are able to create a simple framework which can be administered and maintained within the backend. Need a new custom report? Just add another record and your good to go. Esentially we can take all the responibility for logic and data gathering away from the client into the realm under our control: The backend. Here we can use stuff that is not even possible on the client side, like GlideAggregates and GlideEvaluators (this lets us execute javascript code from a script field). Not only does this allow us to have HUGE reusability, but we no longer depend on the client. We now have complete freedom over accessability, scripting and object access as we are on the server side. And if weneed more information from the client side, we can just hand that over via the GlideAjax parameters.</p>
<p>But let&#39;s be real: This is not used, is it? It is! I did build another UI Page which just contains a few iFrames. What do those iFrames do? They load the ui page with the report. All i have to do is extend the url of those iframes with the report i want to load. Want to know something awesome? I can load more than one report within one iframe by just comma seperating them. And here is the best part of it: Want to build a UI Page that hands over a query? No worries, add an ajax parameter. Want to load more complex charts such as a <a href="https://www.highcharts.com/maps/demo" target="_blank" rel="noopener noreferrer nofollow">highcharts</a> worldmap? No worries, just another library to add and then another chart record. Want to embed this into a form? No worries, just add a formatter to load this ui page and you are done (i actually encountered a usecase where i had to load vendor performance reports on the vendor form).</p>
<p>In short: Want to get away from coding ui pages for each and every single requirement that you have and start building reusable frameworks? Get started with GlideAjax!</p>
<p> </p>
<p>As a last note: Use the application at your own risk. I have tested it on a Madrid instance and it works fine and i am using this for some of our costumers (with some additions), but still i cannot guarantee it will work for your usecase. So please, try it out on your personal developer instance first.</p>
<p>Other than that, i am more than exited about some feedback. Also, feel free to share any other points/usecases you want to get some insights on when it comes to GlideAjax and the use of &#34;frameworks&#34; and i will see what i can do.</p>
<p>Regards</p>
<p>Fabian</p>
<p>ps.: This may not work for internet explorer due to the chart.js utility.</p>
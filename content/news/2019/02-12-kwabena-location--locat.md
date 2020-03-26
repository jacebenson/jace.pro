---
title: "Location Location Location and  Development Instances"
date: 2019-02-12T03:14:11.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0652633ddb2b27001089e15b8a9619c5"
---
<p>Salutations,</p>
<p>While experimenting with the Google Maps application on my free development instance I recently discovered that there were some shortcomings in the features available the dev instances provisioned by ServiceNow when compared with the paid for full-fat versions of ServiceNow. I raised a query about this on the community to get a better understanding of what is, and what is not possible to test and develop on a free development instance of ServiceNow. I called, and this great community answered <a href="community?id&#61;community_question&amp;sys_id&#61;6e1107f5dbe3e3001089e15b8a9619c3" rel="nofollow">here</a></p>
<p>However, if you happen to be developing a location-based application on a free development instance, in the video presentation below I have shared the techniques I used to get around the PRB1308602 &amp; PRB1235648 which restrict the use of the Google Maps application.</p>
<p>Happy coding<strong> &#x1f642;</strong> </p>
<p> </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/WST5LBbAI28"></iframe></p>
<p> </p>
<p><a href="https://developers.google.com/maps/documentation/javascript/get-api-key" rel="nofollow">Google Maps API Key</a></p>
<p><a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0714778" rel="nofollow">Knowledgebase Article KB0714778</a></p>
<p><a href="https://docs.servicenow.com/csh?topicname&#61;set-up-google-maps-api.htmll&amp;version&#61;london" rel="nofollow">ServiceNow Google Maps Properties</a></p>
<p> </p>
<pre>Code:<br /><strong>var gMap &#61; new GlideRecord(&#34;sys_properties&#34;);</strong><br /><strong>gMap.get(&#34;8cf4180d1b67300079a61682bf0713d8&#34;);</strong><br /><strong>gMap.value &#61;&#34;gme-servicenow&#34;;</strong><br /><strong>gMap.update();</strong><br /><strong><br /></strong></pre>
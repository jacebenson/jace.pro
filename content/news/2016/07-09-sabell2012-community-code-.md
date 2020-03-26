---
title: "Community Code Snippets  Logging Some Notes on Business Rules"
date: 2016-07-08T17:25:59.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c05ee6addbd0dbc01dcaf3231f96196a"
---
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-weight: bold;">NOTE</span><span style="font-family: Arial; color: #666666;">: </span><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">MY POSTINGS REFLECT MY OWN VIEWS AND DO NOT NECESSARILY REPRESENT THE VIEWS OF MY EMPLOYER, ACCENTURE. </span></p>
<p> </p>
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">DIFFICULTY LEVEL:   </span><span style="font-family: &#39;Times New Roman&#39;; color: #bf9000; font-weight: bold;">INTERMEDIATE</span></p>
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">Assumes a rudimentary knowledge and/or familiarity of scripting in ServiceNow.</span></p>
<p><span style="font-family: Arial; color: #666666;">____________________________________________________________________________</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">Continuing from my last </span><a href="community?id&#61;community_blog&amp;sys_id&#61;ba8de669dbd0dbc01dcaf3231f96195b" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">article</span></a><span style="font-family: Arial; color: #000000;">, on various Server-Side logging tips, we will look at a couple of little-used (for debugging) GlideSystem functions:   addInfoMessage, and addErrorMessage.   Did you know that you can use variable substitution with these as well?</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">I created a simple Business Rule with the following:</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Name</span><span style="font-family: Arial; color: #000000;">: Logging Test</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Table</span><span style="font-family: Arial; color: #000000;">: Incident [incident]</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Active</span><span style="font-family: Arial; color: #000000;">: Checked</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Advanced</span><span style="font-family: Arial; color: #000000;">: Checked</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">When</span><span style="font-family: Arial; color: #000000;">: before</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Order</span><span style="font-family: Arial; color: #000000;">: 100</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Inserted</span><span style="font-family: Arial; color: #000000;">: Checked</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Updated</span><span style="font-family: Arial; color: #000000;">: Checked</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000; font-weight: bold;">Script</span><span style="font-family: Arial; color: #000000;">:</span></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">(function executeRule(current, previous /*null when async*/) {</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var location &#61; &#39;BR:Logging Test&#39;;</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var number &#61; current.number;</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var caller &#61; current.caller_id.getDisplayValue();</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var category &#61; current.category.getDisplayValue();</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var impact &#61; current.getValue(&#39;impact&#39;);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var priority &#61; current.getValue(&#39;priority&#39;);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var urgency &#61; current.getValue(&#39;urgency&#39;);</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var message &#61; gs.getMessage(&#39;---&gt;[{6}] \n\tNumber:\t\t{0} \n\tCaller:\t\t{1} \n\tCategory:\t{2} \n\tImpact:\t\t{3}\n\tPriority:\t{4}\n\tUrgency:\t{5}\n&#39;, </span></p>
<p><span style="font-size: 12pt;"><span style="font-family: &#39;Courier New&#39;; color: #0000ff;">   </span><span style="font-family: &#39;Courier New&#39;; color: #0000ff;">   </span><span style="font-family: &#39;Courier New&#39;; color: #0000ff;">[number, caller, category, impact, priority, urgency, location]);</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">gs.log(message); // this works fine as does gs.info</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">gs.addInfoMessage(message);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">gs.addErrorMessage(message);</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">})(current, previous);</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Now navigate to Incidents -&gt; Open and open your favorite incident.   Make a change, save, and the code produces on the client-side:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/1dRiQbrfdzWoVZxsM2c5Pen3NgjUmFwrA2ARV8Q1oZ29M2C0srJnXdXkY5j0H1P_CuNFFcsQCXgkfJmcVh_G8pkZBj0QChPnZ6Fjkxui2D8pWpLgKGGRlzuBJuYfQy8MJs5i-Q7u" width="624" height="148" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">And in the System Log:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/umKbqkAv9QNSiZe-JOBSTH08dpb5jZgx_oEie5dxj-lGftKXsBPkdpPkCxDQ4RvwQ1FEAq2qMsXWaz3dSXkVGuM6YbNr2lRbWnk1tjPiAwD-6WTZRBHeoo9X7uyTCpxst8sPnCHn" width="624" height="95" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><strong>Note</strong>:   The \t&#39;s (tabs) get stripped out for some reason, but the \n&#39;s (newlines) seem to work fine.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">So, now for a little-known technique which I like even better:</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">gs.include(&#34;FormInfoHeader&#34;);   // normally this goes at the top of the code</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">var formInfo &#61; new FormInfoHeader();</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">message &#61; &#39;&lt;b&gt;&lt;p style&#61;&#34;color:red;background-color:yellow;&#34;&gt;&#39; &#43; message &#43; &#39;&lt;/p&gt; (gs.addMessage)&lt;/b&gt;&#39;;</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">formInfo.addMessage(message);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">gs.getMessage(message);</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Which shows the following in the Incident form:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/LwiuQtPndN3dwEBIb7BPc1vONlnmUGFpS1KC7Z2qChF80Xgc9yXKdDHZufqXaZvQEaOhr8fOiCcXWJd15AF0xC_hKEv2EcHqdeObJ6415fuSnnEYciFXP_NQfuopu7s5dpISnPVe" width="624" height="57" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">So here we can put in html tags and mess with what actually is displayed!   For debugging this is great!   I can flag errors with real colors!   So what is happening here?   FormInfoHeader is a Script Include library that represents the Form&#39;s Info Header object.   With the Form Info Header method &#34;addMessage&#34; we are able to store any simple string, or any HTML formatted strings into the form for immediate or future use.   Then using gs.getMessage we can actually display this at will.   NICE FEATURE!   These only last for the session, but sure can be handy when debugging.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Now that we know that any HTML tags will work we can really go-to-town!   Try this:</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">message &#61; &#39;&lt;b&gt;&lt;p style&#61;&#34;color:black;background-color:orange;&#34;&gt;&#39;;</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">message &#43;&#61; gs.getMessage(&#39;---&gt;[{6}] &lt;br/&gt;Number: {0} &lt;br/&gt;Caller: {1} &lt;br/&gt;Category: {2} &lt;br/&gt;Impact: {3} &lt;br/&gt;Priority: {4} &lt;br/&gt;Urgency: {5} &lt;br/&gt;&#39;, </span></p>
<p><span style="font-size: 12pt;"><span style="font-family: &#39;Courier New&#39;; color: #0000ff;">   </span><span style="font-family: &#39;Courier New&#39;; color: #0000ff;">   </span><span style="font-family: &#39;Courier New&#39;; color: #0000ff;">[number, caller, category, impact, priority, urgency, location]);</span></span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">message &#43;&#61; &#39;&lt;/p&gt; (gs.addMessage)&lt;/b&gt;&#39;;</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">   </span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">formInfo.addMessage(message);</span></p>
<p><span style="font-size: 12pt; font-family: &#39;Courier New&#39;; color: #0000ff;">gs.getMessage(message);</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Which produces in the Incident form:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/dT8XE1V9BDKOXKTsy8yJlVelO3XPCfxK2wvK9G70IuegAPNA1DrBkvTP6vglzZIPbwebDUmbjHEfwPvCZppQvTLxafmhoKeTQI7cCnAw7m2p0HucmQzvjc_wMMtEEVxNFaVqqG6G" width="624" height="117" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">So here we can combine our previous variable substitution with our new addMessage to produce nicely formatted and easily readable results.   Cool, huh?!   :-)</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">These techniques are really useful when debugging business rules.   I actually prefer them to gs.info or gs.log.   However, you have to </span><span style="font-family: Arial; color: #000000; font-weight: bold; text-decoration: underline;">remember</span><span style="font-family: Arial; color: #000000;"> to remove them from your code </span><span style="font-family: Arial; color: #000000; font-weight: bold; font-style: italic; text-decoration: underline;">before</span><span style="font-family: Arial; color: #000000;"> it goes to production!</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">I went ahead and attached the XML to upload for the Business Rule that I had created.   To import this file see the following </span><a href="http://wiki.servicenow.com/index.php?title&#61;Exporting_and_Importing_XML_Files#gsc.tab&#61;0" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">wiki</span></a><span style="font-family: Arial; color: #000000;">.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">For more information on GlideSystem see the </span><a href="http://wiki.servicenow.com/index.php?title&#61;GlideSystem" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">wiki</span></a><span style="font-family: Arial; color: #000000;">.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">I want to highly recommend taking the </span><a href="http://www.servicenow.com/services/training-and-certification/scripting-in-servicenow-training.html" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">ServiceNow Scripting</span></a><span style="font-family: Arial; color: #000000;"> training class should you get the opportunity.   The class has an entire module covering Workflow Scripting.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">In my next article I will talk about a couple of logging tricks with Workflows.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #000000;">Steven Bell</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/eItWkEi3sdJOPF_zPYj7g0U574Ca7B6SlZO8LgigLKeEyS40fH_cnvW5AIVdu0lYdDeNwTFlG6ksSS52NK5w5nZWAj2izHMG93f1Wz1pR0ec0BSTEo2QIK-s8n8S7RdRRlHtBUuu" alt="accenture logo small.jpg" width="243" height="65" /></span><span style="font-size: 16px; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/zvPtHVZ6bouD-Fw1tU6_pxiPX2MxS7ll7AFD_iIwEtJdUCcH5550NCqf5sN5dIXpY7cQAAy9Nlfp-JtLra_O-FmuDs-0YdnBsN7vL4D0jkqptHoAh9hLJugh70uYQ2lrPknq-yIg" width="135" height="48" /></span><span style="font-size: 16px; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/A8AHd8DA4dpgOFFvCNCcHtu7Q1I6oz9mqIYPtcEyM2PuvG3OaRkLTxxyFGSxMExleX7jQ9rVPpfuCclyhlrba5w2O3S9JytYFO2brU2vjE1inaunDW87hUoZ_yUl42H0dXKThwWv" width="135" height="48" /></span></p>
<p> </p>
<p><span style="font-family: Arial; font-weight: bold;">For a list of all of my articles:   </span><a href="community?id&#61;community_blog&amp;sys_id&#61;289d6a69dbd0dbc01dcaf3231f9619f0" rel="nofollow"><span style="font-family: Arial; color: #266fc8; font-weight: bold;">Community Code Snippets: Articles List to Date</span></a></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #eb7a3d;">Please Share, Like, Bookmark, Mark Helpful, or Comment this blog if you&#39;ve found it helpful or insightful.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #eb7a3d;">Also, if you are not already, I would like to encourage you to become a member of our blog!</span></p>
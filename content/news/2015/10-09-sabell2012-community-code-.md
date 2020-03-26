---
title: "Community Code Snippets  Advanced Object Filter Example"
date: 2015-10-08T21:33:31.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=50bde6a9dbd0dbc01dcaf3231f96193d"
---
<p><span style="font-size: 12pt;">So, building off my last lab article where we extended the <a title="" _jive_internal="true" href="/groups/servicenow-user-group-us-tx-north-texas/blog/2015/10/06/mini-lab-extending-the-gliderecord-object">GlideRecord object</a> I thought I would take the opportunity to demonstrate a slick method for searching an object array for a specific value.</span></p><p></p><p><span style="font-size: 12pt;">ServiceNow uses the JavaScript standard JavaScript 1.5 - ECMAScript 3.1.5 (or some of it).   I have found elements of <a title="w.ecma-international.org/ecma-262/5.1/" href="http://www.ecma-international.org/ecma-262/5.1/">ECMAScript 5</a> available as well.   </span></p><p><span style="font-size: 12pt;"><br/></span></p><p><span style="font-size: 12pt;">One of these is the Array.<a title="eveloper.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" style="font-size: 16px;">filter</a> method.   This is a <a title="n.wikipedia.org/wiki/Anonymous_function#C.23" href="https://en.wikipedia.org/wiki/Anonymous_function#C.23">Lambda </a>like function that allows a developer to create a search function, pass that and a value to match against.   filter will then utilize the passed search function to find the value in the given array of objects, and return all of the objects that were located.   This is then passed back as an array of objects; a sub-set of the original.</span></p><p><span style="font-size: 12pt;"><br/></span></p><p><span style="font-size: 12pt;">The following code represents a way of using the Array.<a title="eveloper.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" style="font-size: 16px;">filter</a> method (I also thew-in the use of my GlideRecord extension .<a title="" _jive_internal="true" href="/groups/servicenow-user-group-us-tx-north-texas/blog/2015/10/06/mini-lab-extending-the-gliderecord-object">toObjectList</a> to help facilitate converting the Incident recordset into an object array):<br/></span></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14443167813877517" jivemacro_uid="_14443167813877517">
<p>// bring in our GlideRecord extension functions</p>
<p>gs.include('GlideRecordExtensions');</p>
<p></p>
<p>// get all of the active incident records</p>
<p>var incidents = new GlideRecord('incident');</p>
<p>incidents.addActiveQuery();</p>
<p>incidents.query();</p>
<p></p>
<p>gs.print(incidents.getRowCount());</p>
<p></p>
<p>// this will be the value that we will search for</p>
<p>var match = 'INC0000017';</p>
<p>var incidentList = incidents.toObjectList(); // convert to object array</p>
<p>var filteredList = incidentList.filter(findIt, match); // now find it!</p>
<p></p>
<p>// print off the number of everything we found (we should only have one match)</p>
<p>for (var i = 0; i &lt; filteredList.length; i++) {</p>
<p>             gs.print(filteredList[i].number);</p>
<p>}</p>
<p></p>
<p>// this particular function looks at the incident.number field</p>
<p>// the "this" variable is our "match" parameter</p>
<p>function findIt(value) {</p>
<p>           if (value.number == this) {</p>
<p>                       return value;</p>
<p>           }</p>
<p>}</p>



</pre><p><span style="font-size: 12pt;"><br/></span></p><p><span style="font-size: 12pt;">NOTE: This example can be run in either Fix Script or Scripts - Background, and requires the installation of the Gliderecord <a title="" _jive_internal="true" href="/groups/servicenow-user-group-us-tx-north-texas/blog/2015/10/06/mini-lab-extending-the-gliderecord-object">extension</a> file on your instance.</span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;"><br/></span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;">NOTE: To pass in more than one parameter for the search you create an object and pass that in.   The object would contain multiple properties that would represent other match criteria.</span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;"><br/></span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt; line-height: 1.5em;">If you are interested; the next version of this you can find it here </span><a title="6-features.org/#ArrayElementFinding" href="http://es6-features.org/#ArrayElementFinding" style="font-size: 12pt; line-height: 1.5em;">ECMAScript 6</a><span style="font-size: 12pt; line-height: 1.5em;">; where we will actually see a Lambda function!   It makes this process even better by refining how the function is passed.   </span></p><p></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;">You can find out more about what the "filter" method provides here:</span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;"><br/></span></p><p style="font-size: 13.3333px; padding-left: 30px;"><span style="font-size: 12pt;"><a title="eveloper.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Mozilla</a></span></p><p style="font-size: 13.3333px; padding-left: 30px;"><span style="font-size: 12pt;"><a title="sdn.microsoft.com/en-us/library/ff679973(v=vs.94).aspx" href="https://msdn.microsoft.com/en-us/library/ff679973(v=vs.94).aspx">Microsoft</a></span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;"><br/></span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;">If you want to know more about the JavaScript language versions see: </span><a title="n.wikipedia.org/wiki/JavaScript" href="https://en.wikipedia.org/wiki/JavaScript" style="font-size: 12pt; line-height: 1.5em;">Wikipedia</a></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt;"><br/></span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt; line-height: 1.5em;">Steven Bell</span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt; line-height: 1.5em;"><br/></span></p><p style="font-size: 13.3333px;"><span style="font-size: 12pt; line-height: 1.5em;">P.S. Yes, yes, <a title="Mark Amann (Cloud Sherpas)" __default_attr="2845" __jive_macro_name="user" class="jive_macro_user jive_macro" data-objecttype="3" data-orig-content="Mark Amann (Cloud Sherpas)" href="/community?id=community_user_profile&user=14625269dbd81fc09c9ffb651f9619eb">Mark Amann (Cloud Sherpas)</a> I probably should have put this example into an anonymous function.   :-p<br/></span></p><p></p><p></p><p><span style="color: #800080; font-size: 16px; font-family: arial, sans-serif;"><strong>If you find this article helps you, don't forget to log in and "like" it! </strong></span></p>
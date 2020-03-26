---
title: "JSON Parsing"
date: 2019-08-25T17:45:09.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=aedbb9e8dbafbb805ed4a851ca9619ba"
---
<p style="text-align: center;"><span style="text-decoration: underline; font-size: 14pt;"><strong>JSON PARSING: USE CASE AND SOLUTIONS</strong></span></p>
<p>Everyday we are doing some development where we have a need to built JSON data and then parse it. I have put few methods with example were we can parse JSON easily, in this example we are focusing only on parsing data and not building it. I saw many post where people struggle to parse JSON and thought of putting everything together. This can be a useful article for people who are trying to develop scripting skills in ServiceNow.</p>
<p><br /> Below are few basic and useful use case’s:</p>
<ul><li>Single Object in JSON.</li><li>Nested Objects in one JSON Object.</li><li>Single array from JSON object.</li><li>Nested Array in JSON.</li><li>How for loop can be used to parse through array.</li></ul>
<p> </p>
<p>Before we go to example, let’s try to understand difference between <strong>JSON.Stringify</strong> and <strong>JSON.Parse</strong>.</p>
<p>JSON.stringify will take JavaScript object and convert it into JSON string meaning it will serialize the data. so that JSON.Parse can accept it as an input.</p>
<p>JSON.Parse reads JSON.String and transform it into java-script object so that we can iterate through it and extract values from it.</p>
<p> </p>
<p><span style="text-decoration: underline;"><span style="color: #ff0000; text-decoration: underline;"><strong>1) Simple JSON Parsing:</strong></span></span></p>
<p>Let’s try with basic and simple example first and then we will go deeper and try out some complex example.</p>
<p><strong>Sample JSON:</strong></p>
<p>{&#34;firstName&#34;:&#34;Ashutosh&#34;, &#34;lastName&#34;:&#34;Munot&#34;}</p>
<p><strong>Code:</strong></p>
<p>var obj &#61; {&#34;firstName&#34;:&#34;Ashutosh&#34;, &#34;lastName&#34;:&#34;Munot&#34;};</p>
<p>var str &#61; JSON.stringify(obj);</p>
<p>var parser &#61; new JSONParser();</p>
<p>var result &#61; parser.parse(str);</p>
<p>gs.print(‘First Name Attribute : ’&#43;result.firstName);</p>
<p> </p>
<p><strong>Result:</strong></p>
<p>***Script: First Name Attribute : Ashutosh<br /> <strong>[0:00:00.003] Total Time</strong></p>
<p> </p>
<p><span style="text-decoration: underline;"><span style="color: #ff0000; text-decoration: underline;"><strong>2) Parse Values from Nested objects in Single JSON:</strong></span></span></p>
<p>Let’s increase complexity and use this case where we get data in multiple object and we need to parse and loop through it. Most of the Server in real time returns nested objects.</p>
<p><strong>Sample JSON:</strong></p>
<p>               {</p>
<p>               &#34;id&#34;: &#34;0001&#34;,</p>
<p>               &#34;type&#34;: &#34;donut&#34;,</p>
<p>               &#34;name&#34;: &#34;Cake&#34;,</p>
<p>               &#34;image&#34;:</p>
<p>                              {</p>
<p>                                             &#34;url&#34;: &#34;images/0001.jpg&#34;,</p>
<p>                                             &#34;width&#34;: 200,</p>
<p>                                             &#34;height&#34;: 200</p>
<p>                              },</p>
<p>               &#34;thumbnail&#34;:</p>
<p>                              {</p>
<p>                                             &#34;url&#34;: &#34;images/thumbnails/0001.jpg&#34;,</p>
<p>                                             &#34;width&#34;: 32,</p>
<p>                                             &#34;height&#34;: 32</p>
<p>                              }</p>
<p>}</p>
<p><strong>Code:</strong></p>
<p>var obj &#61; {&#34;id&#34;:&#34;0001&#34;,&#34;type&#34;:&#34;donut&#34;,&#34;name&#34;:&#34;Cake&#34;,&#34;image&#34;:{&#34;url&#34;:&#34;images/0001.jpg&#34;,&#34;width&#34;:200,&#34;height&#34;:200},&#34;thumbnail&#34;:{&#34;url&#34;:&#34;images/thumbnails/0001.jpg&#34;,&#34;width&#34;:32,&#34;height&#34;:32}};</p>
<p>var a &#61; JSON.stringify(obj);</p>
<p>var parser &#61; new JSONParser();</p>
<p>var parsed &#61; parser.parse(a);</p>
<p>var img &#61; parsed.image.width;</p>
<p>var thumb &#61; parsed.thumbnail.width;</p>
<p>gs.log(&#39;Images Object attribute Width : &#39;&#43;img);</p>
<p>gs.log(&#39;Thumbnail Object attribute Width : &#39;&#43;thumb);</p>
<p> </p>
<p><strong>Result:</strong></p>
<p>*** Script: Images Object attribute Width : 200<br /> *** Script: Thumbnail Object attribute Width : 32<br /> <strong>[0:00:00.004] Total Time</strong></p>
<p> </p>
<p><strong> </strong></p>
<p><span style="text-decoration: underline; color: #ff0000;"><strong>3) Parse Values from Single Array in JSON Object :</strong></span></p>
<p>Lets increase the complexity and now we will try to parse Value from single array embedded into an JSON object. Taking below sample example where we will try to parse number key from object.</p>
<p><strong>Sample JSON:</strong></p>
<p>{<br /> &#34;arr&#34;: [<br /> {<br /> &#34;parent&#34;: &#34;&#34;,<br /> &#34;made_sla&#34;: &#34;true&#34;,<br /> &#34;watch_list&#34;: &#34;&#34;,<br /> &#34;u_when_needed&#34;: &#34;2017-05-18 21:52:02&#34;,<br /> &#34;upon_reject&#34;: &#34;cancel&#34;,<br /> &#34;sys_updated_on&#34;: &#34;2017-01-30 22:51:35&#34;,<br /> &#34;u_what_needed&#34;: &#34;legal1&#34;,<br /> &#34;approval_history&#34;: &#34;&#34;,<br /> &#34;number&#34;: &#34;NI002004&#34;,<br /> &#34;sys_updated_by&#34;: &#34;admin&#34;,<br /> &#34;user_input&#34;: &#34;&#34;,<br /> &#34;sys_created_on&#34;: &#34;2017-01-30 22:51:35&#34;,<br /> &#34;state&#34;: &#34;3&#34;<br /> }<br /> ]<br />}</p>
<p><strong>Code:</strong></p>
<p>Var obj&#61;{&#34;arr&#34;:[{&#34;parent&#34;:&#34;&#34;,&#34;made_sla&#34;:&#34;true&#34;,&#34;watch_list&#34;:&#34;&#34;,&#34;u_when_needed&#34;:&#34;2017-05-18 21:52:02&#34;,&#34;upon_reject&#34;:&#34;cancel&#34;,&#34;sys_updated_on&#34;:&#34;2017-01-30 22:51:35&#34;,&#34;u_what_needed&#34;:&#34;legal1&#34;,&#34;approval_history&#34;:&#34;&#34;,&#34;number&#34;:&#34;NI002004&#34;,&#34;sys_updated_by&#34;:&#34;admin&#34;,&#34;user_input&#34;:&#34;&#34;,&#34;sys_created_on&#34;:&#34;2017-01-30 22:51:35&#34;,&#34;state&#34;:&#34;3&#34;}]};</p>
<p>var str &#61; JSON.stringify(obj);</p>
<p>var parser &#61; new JSONParser();</p>
<p>var parsed &#61; parser.parse(str);</p>
<p>var result &#61; parsed.arr[0].number;</p>
<p>gs.print(‘Number : ’&#43;result);</p>
<p> </p>
<p><strong>Result:</strong></p>
<p>*** Script:Number :NI002004<br /> <strong>[0:00:00.001] Total Time</strong></p>
<p> </p>
<p><span style="text-decoration: underline; color: #ff0000;"><strong>4) Parse Value from Nested array in JSON Object:</strong></span></p>
<p>Taking reference of the above example now we will see how to parse attribute from nested array embedded in JSON Object.</p>
<p><strong>Sample JSON:</strong></p>
<p>{</p>
<p>            &#34;name&#34;: &#34;Peter parker&#34;,</p>
<p>            &#34;heroName&#34;: &#34;Spiderman&#34;,</p>
<p>            &#34;friends&#34;: [{</p>
<p>                &#34;heroName&#34;: &#34;Deadpool&#34;,</p>
<p>                &#34;skills&#34;: [&#34;Martial artist&#34;, &#34;Assassin&#34;]</p>
<p>            }, {</p>
<p>                &#34;heroName&#34;: &#34;Hulk&#34;,</p>
<p>                &#34;skills&#34;: [&#34;Superhuman Speed&#34;, &#34;Superhuman Strength&#34;]</p>
<p>            }, {</p>
<p>                &#34;heroName&#34;: &#34;Wolverine&#34;,</p>
<p>                &#34;skills&#34;: [&#34;Retractable bone claws&#34;, &#34;Superhuman senses&#34;]</p>
<p>            }]</p>
<p>        }</p>
<p><strong>Code:</strong></p>
<p>Var abc &#61; {&#34;name&#34;:&#34;Peter parker&#34;,&#34;heroName&#34;:&#34;Spiderman&#34;,&#34;friends&#34;:[{&#34;heroName&#34;:&#34;Deadpool&#34;,&#34;skills&#34;:[&#34;Martial artist&#34;,&#34;Assassin&#34;]},{&#34;heroName&#34;:&#34;Hulk&#34;,&#34;skills&#34;:[&#34;Superhuman Speed&#34;,&#34;Superhuman Strength&#34;]},{&#34;heroName&#34;:&#34;Wolverine&#34;,&#34;skills&#34;:[&#34;Retractable bone claws&#34;,&#34;Superhuman senses&#34;]}]};</p>
<p>var a &#61; JSON.stringify(abc);</p>
<p>var parser &#61; new JSONParser();</p>
<p>var parsed &#61; parser.parse(a);</p>
<p>gs.print(‘Length of friends array : ’&#43;parsed.friends.length); //This will give you length of friends array which is nested array.</p>
<p>gs.print(‘Friends Object : ’&#43;parsed.friends[0]);//This will give you [Object object] for 0 index on friends array</p>
<p>gs.print(‘Skills Object from Friends of [0] index : ’&#43;parsed.friends[0].skills);//This will give you values in skills array of 0 Index friends array. note skills is another array</p>
<p>gs.print(‘Skills value of index [0] : ’&#43;parsed.friends[0].skills[0]);//This will give Martial artist from index 0 skills array from friends 0 index array.</p>
<p> </p>
<p><strong>Result:</strong></p>
<p>*** Script: Length of friends array :3<br /> *** Script: Friends Object : [object Object]<br /> *** Script: Skills Object from Friends of [0] index : Martial artist,Assassin<br /> *** Script: ‘Skills value of index [0] : ’Martial artist<br /> <strong>[0:00:00.004] Total Time</strong></p>
<p> </p>
<p><span style="text-decoration: underline; color: #ff0000;"><strong>5) How For loop can be used to parse through array:</strong></span></p>
<p>In this example we will see how can we use for loop to parse through values in JSON and array.</p>
<p><strong>Sample JSON:</strong></p>
<p>Same JSON from above example</p>
<p><strong>Code:</strong></p>
<p>var abc &#61; {&#34;name&#34;:&#34;Peter parker&#34;,&#34;heroName&#34;:&#34;Spiderman&#34;,&#34;friends&#34;:[{&#34;heroName&#34;:&#34;Deadpool&#34;,&#34;skills&#34;:[&#34;Martial artist&#34;,&#34;Assassin&#34;]},{&#34;heroName&#34;:&#34;Hulk&#34;,&#34;skills&#34;:[&#34;Superhuman Speed&#34;,&#34;Superhuman Strength&#34;]},{&#34;heroName&#34;:&#34;Wolverine&#34;,&#34;skills&#34;:[&#34;Retractable bone claws&#34;,&#34;Superhuman senses&#34;]}]};</p>
<p>               gs.print(abc);</p>
<p>               var a &#61; JSON.stringify(abc);</p>
<p>               var parser &#61; new JSONParser();</p>
<p>               var parsed &#61; parser.parse(a);</p>
<p>               var str &#61; &#39;&#39;;</p>
<p>               var str1 &#61; &#39;&#39;;</p>
<p>               for (var i in abc.friends) {</p>
<p>                              str &#43;&#61; abc.friends[i].heroName &#43; &#34;&lt;br/&gt;&#34;;</p>
<p>                              for (var j in abc.friends[i].skills) {</p>
<p>                                             str1 &#43;&#61; abc.friends[i].skills[j] &#43; &#34;&lt;br/&gt;&#34;;</p>
<p>                              }</p>
<p>               }</p>
<p>              </p>
<p>               gs.print(str);</p>
<p>               gs.print(str1);</p>
<p> </p>
<p><strong>Result:</strong></p>
<table width="868"><tbody><tr><td>
<p>2019-08-25T11:56:29.163Z: [object Object]</p>
</td></tr><tr><td>
<p>2019-08-25T11:56:29.163Z: Deadpool<br /> Hulk<br /> Wolverine</p>
</td></tr><tr><td>
<p>2019-08-25T11:56:29.163Z: Martial artist<br /> Assassin<br /> Superhuman Speed<br /> Superhuman Strength<br /> Retractable bone claws<br /> Superhuman senses</p>
</td></tr></tbody></table>
<p><strong> </strong></p>
<p>Friends, this is very generic blog and will be useful in day to day coding for a learner or intermediate developer. Trying to help with this and will come up with new case&#39;s as i encountered them in practical implementation.</p>
<p>If you guys have any comments/ suggestions please leave it here and i will work on that. Bookmark this if you find it helpful.</p>
<p> </p>
<p><strong>Thanks,<br />Ashutosh Munot</strong></p>
<p><strong>MVP 2019</strong></p>
---
title: "Show Contents of gscratchpad Tool"
date: 2017-08-01T21:26:34.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=090d6aa5dbd0dbc01dcaf3231f9619a3"
---
<h5>Included in the <a href="community?id&#61;community_blog&amp;sys_id&#61;b3c843aadb892b40fece0b55ca961906" rel="nofollow">Developer Toolbox</a> Update Set available on Share (link in the &#34;Developer Toolbox&#34; post).</h5>
<p> </p>
<p>We are adding quite a bit of information to the <a title="ki.servicenow.com/index.php?title&#61;Client_Script_Best_Practices#Minimize_Server_Lookups" href="http://wiki.servicenow.com/index.php?title&#61;Client_Script_Best_Practices#Minimize_Server_Lookups" rel="nofollow">g_scratchpad object</a> on a project I&#39;m involved with at the moment so I decided to create a quick tool to help us see what all ends up there.   It&#39;s a simple client-side Related Link UI Action that pops up a window with the current contents:</p>
<p><img class="image-2 jive-image" style="max-width: 1200px; max-height: 900px;" src="491d894edb5c97041dcaf3231f9619a5.iix" /></p>
<p> </p>
<p><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="3cb82375dbd41fc068c1fb651f9619db.iix" /></p>
<p> </p>
<p>1. Here&#39;s the configuration for the UI Action:</p>
<p style="font-family: arial, sans-serif; color: #666666;">Name: Show Contents of g_scratchpad</p>
<p style="font-family: arial, sans-serif; color: #666666;">Table: Global</p>
<p style="font-family: arial, sans-serif; color: #666666;">Order: 100,000</p>
<p style="font-family: arial, sans-serif; color: #666666;">Action name: u_show_g_scratchpad</p>
<p style="font-family: arial, sans-serif; color: #666666;">Active: checked</p>
<p style="font-family: arial, sans-serif; color: #666666;">Show insert: checked</p>
<p>Show update: checked</p>
<p>Client: checked</p>
<p>Form link: checked</p>
<p>Hint: Displays the contents of the g_scratchpad object in a popup window</p>
<p>Onclick: u_showGScratchpad()</p>
<p>Condition: gs.hasRole(&#34;admin&#34;)</p>
<p>Script:</p>
<p>function u_showGScratchpad(){</p>
<p>      var newLine &#61; &#34;~~~newline~~~&#34;;   //will be replaced with line breaks in the UI Page</p>
<p>      var scratchPad &#61; &#34;&#34;;</p>
<p>      var items &#61; Object.keys(g_scratchpad);</p>
<p>      items.sort();   //sort the item names alphabetically in case they are not already</p>
<p> </p>
<p>      var numberOfItems &#61; items.length;</p>
<p>      for (var i &#61; 0; i &lt; numberOfItems; i&#43;&#43;) {</p>
<p>              scratchPad &#43;&#61; items[i] &#43; &#34; &#61; &#34; &#43; JSON.stringify(g_scratchpad[items[i]]) &#43; newLine;</p>
<p>      }</p>
<p> </p>
<p>      //encode the string so it can be passed to the UI Page properly and then decoded there</p>
<p>      scratchPad &#61; encodeURIComponent(scratchPad);</p>
<p> </p>
<p>      //open the dialog window</p>
<p>      var gdw &#61; new GlideDialogWindow(&#34;u_simple_copy_paste&#34;);</p>
<p>      gdw.setTitle(&#34;Contents of g_scratchpad&#34;);</p>
<p>      gdw.setSize(650, 500);</p>
<p>      gdw.setPreference(&#34;sysparm_text&#34;, scratchPad);</p>
<p>      gdw.render();</p>
<p>}</p>
<p> </p>
<p> </p>
<p>2. The pop-up UI Page:</p>
<p>Name: u_simple_copy_paste</p>
<p>Category: General</p>
<p>HTML:</p>
<p>&lt;textarea id&#61;&#34;u_text_area&#34; style&#61;&#34;width: auto; height: auto;&#34; rows&#61;&#39;15&#39; cols&#61;&#39;100&#39; title&#61;&#34;Text you can copy and paste&#34;&gt;</p>
<p>&lt;/textarea&gt;</p>
<p>&lt;div align&#61;&#34;right&#34;&gt;</p>
<p>&lt;button class&#61;&#34;btn btn-default&#34; id&#61;&#34;cancel_button&#34; onclick&#61;&#34;(window.GlideDialogWindow || window.GlideModalForm).prototype.locate(this).destroy(); return false&#34; style&#61;&#34;min-width: 5em;&#34; title&#61;&#34;&#34; type&#61;&#34;button&#34;&gt;Close&lt;/button&gt;</p>
<p>&lt;/div&gt;</p>
<p> </p>
<p>Client script:</p>
<p>try {  </p>
<p>  var search &#61; &#34;~~~newline~~~&#34;;   //text we want to replace  </p>
<p>  var replace &#61; &#34;\n&#34;;   //the text we want to use  </p>
<p>  var textArea &#61; gel(&#34;u_text_area&#34;);  </p>
<p>  //set the text string into the text area control, first decoding it and replacing the search string with the replacement string to insert proper line breaks  </p>
<p>  textArea.innerHTML &#61; (decodeURIComponent(&#34;${sysparm_text}&#34;)).replace(new RegExp(search, &#39;g&#39;), replace);  </p>
<p>  //auto-select the entire text  </p>
<p>  textArea.select();  </p>
<p>} catch(err) {}</p>
<p> </p>
<p>The UI Page is the same one used by <a class="jive_macro_thread jive_macro" title="" href="community?id&#61;community_question&amp;sys_id&#61;07b18f69db98dbc01dcaf3231f9619c6" rel="nofollow">&#34;Preview GlideRecord Script&#34; Tool</a>   and <a class="jive_macro jive_macro_message" title="" href="community?id&#61;community_question&amp;sys_id&#61;60fc4369db9cdbc01dcaf3231f961947" rel="nofollow">&#34;Grab Grouped Information&#34; Tool</a>.   This one is slightly updated - I&#39;ve added a &#34;Close&#34; button to the form.   You can use the existing UI Page as is if you are using either of the other two tools, or update the HTML field with the code above to add the button.</p>
<p> </p>
<p>I&#39;ve attached the XML files for both the UI Action and the UI Page if you want to just import them into your instance.</p>
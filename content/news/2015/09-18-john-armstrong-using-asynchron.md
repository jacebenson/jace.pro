---
title: "Using Asynchronous Calls in the Classic Mobile UI"
date: 2015-09-18T02:30:05.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e9dda6e9dbd0dbc01dcaf3231f961983"
---
<p>One of the important differences to note about scripting in the Mobile UI is that synchronous <a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting#Do_Not_Make_Synchronous_JavaScript_Calls" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting#Do_Not_Make_Synchronous_JavaScript_Calls" rel="nofollow">javascript</a> or <a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting#Do_Not_Make_Synchronous_GlideRecord_Calls" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting#Do_Not_Make_Synchronous_GlideRecord_Calls" rel="nofollow">glideRecord </a>calls are not allowed.   In practice, it&#39;s pretty easy to script around, and the product documentation provides examples why this is done, and how it works.</p>
<p> </p>
<p>All Javascript run on a browser shares a single thread, meaning everything that executes has to wait in line.   If something in a script takes a second or two to complete, your browser needs to wait.   If this goes on long enough, it may seem like your browser is hung.</p>
<p> </p>
<p>The way to get around this is to make an <strong>Asynchronous </strong>call.   This allows us to move requests we&#39;ve made to another thread.   Your browser has a pool of threads it uses specifically for asynchronous calls like this.   Meanwhile, your browser can move on to it&#39;s next task.   When the request is finished, a callback function is triggered to handle the results of the request.   Here&#39;s an example of the mobile platform not allowing synchronous JavaScript calls. The <a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting#Do_Not_Make_Synchronous_JavaScript_Calls&amp;gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting#Do_Not_Make_Synchronous_JavaScript_Calls&amp;gsc.tab&#61;0" rel="nofollow">g_form.getReference() method must now have the callback parameter defined</a>.</p>
<p> </p>
<p> </p>
<div style="font-family: monospace; color: #000000; background: none #f9f9f9;"><span style="color: #003366; font-weight: bold;">var</span> userName <span style="color: #339933;">&#61;</span> g_form.<span style="color: #660066;">getReference</span><span style="color: #009900;">(</span><span style="color: #3366cc;">&#39;assigned_to&#39;</span><span style="color: #009900;">)</span>.<span style="color: #660066;">user_name</span><span style="color: #339933;">;</span>
<div>g_form.<span style="color: #660066;">setValue</span><span style="color: #009900;">(</span><span style="color: #3366cc;">&#39;u_assigned_user_name&#39;</span><span style="color: #339933;">,</span> userName<span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<p> </p>
</div>
</div>
<p> </p>
<p>Above, we&#39;re making a g_form.getReference   call to get the a user name based on the contents of the assigned_to field.   Once that&#39;s done, we&#39;re setting the u_assigned_user_name field to that value.   The problem with this is that we&#39;re waiting for that getReference call to process.   This might only be a fraction of a second, but it might go a bit longer. But, you might have more that one of these in your script, and several scripts that execute on your form.     This can add up!</p>
<p> </p>
<p>Here&#39;s the asynchronous version:</p>
<p> </p>
<p> </p>
<div style="font-family: monospace; color: #000000; background: none #f9f9f9;">g_form.<span style="color: #660066;">getReference</span><span style="color: #009900;">(</span><span style="color: #3366cc;">&#39;assigned_to&#39;</span><span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span>gr<span style="color: #009900;">)</span> <span style="color: #009900;">{</span><br />         g_form.<span style="color: #660066;">setValue</span><span style="color: #009900;">(</span><span style="color: #3366cc;">&#39;u_assigned_user_name&#39;</span><span style="color: #339933;">,</span> gr.<span style="color: #660066;">user_name</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span><br /> <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span><br />
<p> </p>
</div>
<p> </p>
<p>Here, we&#39;ve added a second argument to getReference.   This second argument is an <a title="lephant.com/2008/08/23/javascript-anonymous-functions/" href="http://helephant.com/2008/08/23/javascript-anonymous-functions/" rel="nofollow">anonymous function</a>, and has an argument called gr, which stores the results of our getReference call.   Within that function, a setValue call assigns a value to u_assigned_user_name, just like the second line of our first example.   This function will execute whenever the getReference call finishes.   Since this is now in another thread, the browser can move on to other things.</p>
<p> </p>
<p> </p>
<p><strong>Further Reading</strong></p>
<p><a title="ki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_(g_form)_Scripting" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_Client_GlideForm_%28g_form%29_Scripting" rel="nofollow">Mobile Client GlideForm (g_form) Scripting</a></p>
<p><a title="ki.servicenow.com/index.php?title&#61;Client_Script_Best_Practices" href="http://wiki.servicenow.com/index.php?title&#61;Client_Script_Best_Practices" rel="nofollow">Client Script Best Practices</a></p>
<p><a title="ki.servicenow.com/index.php?title&#61;Mobile_GlideForm_(g_form)_API_Reference" href="http://wiki.servicenow.com/index.php?title&#61;Mobile_GlideForm_%28g_form%29_API_Reference" rel="nofollow">Mobile GlideForm (g_form) API Reference</a></p>
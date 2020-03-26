---
title: "MiniLab  Events Passing Objects"
date: 2015-09-10T18:33:48.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2d6dea29dbd0dbc01dcaf3231f961956"
---
<p>Normally you cannot pass complex objects in the parameters of gs.eventQueue.   It simply won't reconstitute them on the Script Action side.   For example, let's create a simple Script Action.</p><p></p><p><span style="font-size: 12pt;"><strong>Lab 1.1 - Events: Passing Object Problem</strong></span></p><p></p><p>1. Navigate to System Policy -&gt; Events -&gt; Registry.   The Registry list view will appear.</p><p></p><p>2. Click the New button.   A blank Event Registration form will appear.   Fill in the form with the following:</p><p><span style="line-height: 1.5em;">       a. <strong>Name</strong>: object.passing</span></p><p><span style="line-height: 1.5em;">       b. <strong>Table</strong>: ObjectPassing</span></p><p><span style="line-height: 1.5em;">       c. <strong>Fired by</strong>: Scripts background or fix script</span></p><p><span style="line-height: 1.5em;">       d. <strong>Description</strong>: Test of object passing</span></p><p><span style="line-height: 1.5em;">       e. Click the Submit button to save.</span></p><p></p><p><img   alt="1.mini-lab - events-passing objects.JPG" class="image-0 jive-image" src="23feb006db909f048c8ef4621f96198e.iix" style="height: 121px; width: 620px;"/></p><p></p><p>3. Navigate to System Policy -&gt; Events -&gt; Script Actions.   The Script Actions list view will appear.</p><p></p><p>4. Click the New button.   A blank Script Action form will appear.   Fill in the form with the following:</p><p>       a. <strong>Name</strong>: ObjectPassing</p><p>       b. <strong>Event Name</strong>: object.passing</p><p>       c. <strong>Order</strong>: 100</p><p>       d. <strong>Active</strong>: checked</p><p>       e. <strong>Script</strong>:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14418920295099717" jivemacro_uid="_14418920295099717">
<p>   var myObject = event.parm1;</p>
<p></p>
<p>   var message = '---&gt; \n';</p>
<p>   message += 'Name: ' + myObject.name;</p>
<p>   message += '\nNumber: ' + myObject.number;</p>
<p></p>
<p>   gs.log(message, 'SA: ObjectPassing');</p>



</pre><p></p><p>       f. Click the Submit button to save.</p><p></p><p>5. Click the lock button next to your name in the upper left of the ServiceNow screen.   Elevate your privileges to Security Admin.</p><p></p><p>6. Navigate to System Definition -&gt; Scripts - Background.   The Run script screen will appear.   Type in the following script:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14418920295066038" jivemacro_uid="_14418920295066038">
<p>var myObject = {name:'test', number:'1234abc'};</p>
<p></p>
<p>gs.eventQueue('object.passing', null, myObject, '');</p>



</pre><p></p><p><span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span></span><strong>NOTE</strong>: If you are not passing a GlideRecord then the second parameter may be set to null.   Normally this is where current would be placed.</p><p></p><p><span style="font-size: 13.3333px;">   <span style="font-size: 13.3333px;">   </span></span><strong>NOTE</strong>: I suggest copying this script to notepad as we will be using it later.</p><p></p><p>7. Click the Run script button at the bottom of the form.   A blank results screen will be displayed with the number seconds it took to execute the script.</p><p></p><p>8. Navigate to System Logs -&gt; System Log -&gt; All.   A list view of all log records for today will appear.</p><p><span style="font-size: 13.3333px;">   </span>   a. Sort by Created descending.</p><p>   <span style="font-size: 13.3333px;">   </span>b. Search for Message begins with ---&gt;</p><p>   <span style="font-size: 13.3333px;">   </span>c. It may take a few seconds for the log entry to appear.   When it does the Message field should look something like this:</p><p></p><p style="padding-left: 30px;"><span style="color: #ff0000;">   ---&gt; </span></p><p style="padding-left: 30px;"><span style="color: #ff0000;">   Name: undefined</span></p><p style="padding-left: 30px;"><span style="color: #ff0000;">   Number: undefined</span></p><p></p><p>As you can see our simple object was not passed correctly!</p><p></p><p>Now, to correct this we will need to use JSON.</p><p></p><p></p><p><span style="font-size: 14pt;"><strong>Lab 1.2 - Events: Using JSON With an Event</strong></span></p><p></p><p>1. Navigate to System Policy -&gt; Events -&gt; Script Actions.</p><p>2. Edit our ObjectPassing Script Action.</p><p><span style="font-size: 13.3333px;">   </span>   a. Change line 1 of the script to add the JSON decode:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14418920295016657" jivemacro_uid="_14418920295016657">
<p>   var myObject = new global.JSON().decode(event.parm1);</p>
<p></p>
<p>   var message = '---&gt; \n';</p>
<p>   message += 'Name: ' + myObject.name;</p>
<p>   message += '\nNumber: ' + myObject.number;</p>
<p></p>
<p>   gs.log(message, 'SA: ObjectPassing');</p>



</pre><p></p><p><span style="font-size: 13.3333px;">   </span>   b. Click the Update button to save.</p><p></p><p>   <span style="font-size: 13.3333px;">   </span><strong>NOTE</strong>: The decode method will be used to reconstitute our object from binary to the original format that was passed.</p><p></p><p><img   alt="2.mini-lab - events-passing objects.JPG" class="jive-image image-5" src="c519d0cedb181f048c8ef4621f9619fb.iix" style="height: 333px; width: 620px;"/></p><p></p><p>3. Navigate to System Definition -&gt; Scripts - Background. Enter in the following script; which now contains our JSON encode.   Note the addition of a JSON encode.   This changes the object into a simple variable (binary) that can now be passed.</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="_jivemacro_uid_14418920294934343 jive_text_macro jive_macro_code" jivemacro_uid="_14418920294934343">
<p>var myObject = {name:'test',number:'1234abc'};</p>
<p></p>
<p>gs.eventQueue('object.passing', null, new global.JSON().encode(myObject), '');</p>



</pre><p></p><p>4. Click the Run script button at the bottom of the form.   A blank results screen will be displayed with the number seconds it took to execute the script.</p><p></p><p>5. Navigate to System Logs -&gt; System Log -&gt; All.</p><p><span style="font-size: 13.3333px;">   </span>   a. Sort by Created descending.</p><p>   <span style="font-size: 13.3333px;">   </span>b. Search for Message begins with ---&gt;</p><p>   <span style="font-size: 13.3333px;">   </span>c. It may take a few seconds for the log entry to appear.   When it does the Message field should look something like this:</p><p></p><p style="padding-left: 30px;"><span style="color: #0000ff;">   ---&gt; </span></p><p style="padding-left: 30px;"><span style="color: #0000ff;">   Name: test</span></p><p style="padding-left: 30px;"><span style="color: #0000ff;">   Number: 1234abc</span></p><p style="padding-left: 30px;"></p><p>Now our object is being passed correctly!</p><p></p><p>This can be done with any complex object you want to pass to the event call (GlideRecord objects in addition to or other than current, object arrays, etc.).   Interestingly you don't have to JSON arrays as they are passed as comma-delimited strings.   However, my recommendation is to JSON them as well just to be safe.</p><p></p><p><strong>Steven Bell.</strong></p><p></p><p><span style="color: #800080; font-family: arial, sans-serif; font-size: 16px;">If you find this article helps you, don't forget to "like" it!</span></p>
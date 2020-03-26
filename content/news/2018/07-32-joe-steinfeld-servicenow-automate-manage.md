---
title: "Automate Management Console Launch in Context based on Event Payload Data"
date: 2018-07-31T08:35:47.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=b4122f3adb27df842be0a851ca96190b"
---
<p>Ran into a situation recently with a customer where their monitoring solutions sent Launch in Context URL to the management console in the event payload and while they would see this data in the ServiceNow Alerts the links only showed up as text and not active hyperlinks.</p>
<p>Below is how we pulled the URL out of the event payload and made it actionable in the Alert.</p>
<p> </p>
<h3>Step 1: Parse URL link out of middle of Event Description field</h3>
<p style="padding-left: 30px;"> <img style="max-width: 100%; max-height: 480px;" src="7c1c7bcedb0b6700107d5583ca961980.iix" /></p>
<p style="padding-left: 30px;">To do this, we edited the appropriate Event Rule and in the &#34;<em><strong>Transform and Compose Alert Output</strong></em>&#34; section we clicked on the &#34;Description&#34; field that brings up &#34;<em><strong>Edit Regex Expressions</strong></em>&#34; dialog.  This dialog allows us to setup regular expressions to parse data out of fields and assign them to existing or temporary fields either by highlighting a section for easy parsing or putting in a regex expression for more complex parsing. Since the URL string from this data source could be anywhere in the Description field we needed to define our own Regular Expression and put this in the &#34;<em><strong>Write RegEx</strong></em>&#34; field. Next in the &#34;<em><strong>Expressions&#34; </strong></em>field we typed in the temporary variable (&#34;toolurl&#34;) that we wanted to assign the URL string to. Once done, we saved our updated Event Rule.</p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="30ecf3c2db4b6700107d5583ca9619b2.iix" /></p>
<p style="padding-left: 60px;">A little explanation for those not familiar with RegEx:</p>
<p style="padding-left: 60px;"><strong>.*</strong>  - Matches 0 or more characters, which would match on everything in the Description field up to http section</p>
<p style="padding-left: 60px;"><strong>(https:\/\/\S&#43;)</strong> -  Everything between () will be what we want to capture and assign to our &#34;toolurl&#34; temporary variable.</p>
<p style="padding-left: 180px;">This would be a string that starts with &#34;<strong>https://&#34; </strong>(NOTE: &#34;/&#34; are special characters and need to be</p>
<p style="padding-left: 180px;">escaped with a &#34;\&#34;. Lastly, the &#34;<strong>\S&#43;&#34; </strong>will also include one or more Non-White space characters, which will</p>
<p style="padding-left: 180px;">give us our entire URL string from the Description field, but stop capturing once we hit a white space in</p>
<p style="padding-left: 180px;">the description field.</p>
<p style="padding-left: 60px;"><strong>.* - </strong>Will match 0 or more characters after our URL string.</p>
<p style="padding-left: 60px;">For more details on RegEx and to play around with parsing I recommend using <a href="https://regex101.com/" rel="nofollow">RegEx 101</a>.</p>
<h3> </h3>
<h3>Step 2: Create an Alert Action Rule to make URL Link Actionable</h3>
<p> Now to make the URL in our &#34;toolurl&#34; variable actionable we created an &#34;<em><strong>Alert Action Rule</strong></em>&#34; to filter on only alerts where the Alert&#39;s &#34;Additional Information&#34; field contains our temporary variable &#34;toolurl&#34;. In the &#34;Launcher&#34; tab we want to do the following: </p>
<ul><li><strong>Enabled</strong>:  Checked</li><li><strong>Display Name</strong>:  Put in a readable name you want the URL to show as.</li><li><strong>URL</strong>: ${toolurl}  - This is reference to our temporary variable we defined in the Event Rule. (NOTE: This field and assigned value will show up in the &#34;Additional Info&#34; field of the Alert.)</li></ul>
<p> </p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="a95df746db4b6700107d5583ca9619c2.iix" /></p>
<p> </p>
<h3><strong>Step 3: Test Setup</strong></h3>
<p> </p>
<p>We now only needed to test our setup either by waiting for an event to come in from our event source or by manually putting an event on the event queue. Once we got the event and associated Alert we could then go to the Alert and then click on &#34;<em><strong>Quick Response&#34; </strong></em>and see our Launcher link that will launch in context back to the event in our Management Console.</p>
<p> </p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="927dff86db4b6700107d5583ca961998.iix" /></p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
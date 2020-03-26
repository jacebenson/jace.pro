---
title: "How to hideshow an UI action on field changes"
date: 2016-04-19T14:07:46.000Z
authors: ["Göran Lundqvist"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=127d6269dbd0dbc01dcaf3231f961973"
---
<p><strong>EDIT: (14/03 -19) I wouldn&#39;t recommend using this. I have sadly not a better solution but as stated below, doing DOM Manipulation will most likely end up in problem with upgrades etc. and the comments in this post works as a good example for this. I&#39;m keeping this post since it might not be any other way, but it would really really try to avoid this approach unless it&#39;s for a critical requirement.</strong></p>
<p> </p>
<p><strong>EDIT: has been updated(27/7 -17) to work in newer releases. Been tested in Jakarta with (Chrome v59 &amp; FireFox v54). This is a good example of the bad part of doing DOM manipulation and the effort it might take to have it working. A big problem here as well is that ServiceNow has multiple html elements with the same id(which should be unique).</strong></p>
<p> </p>
<p>On a UI action you can set a condition to decide when the it show be visible or not. This works in most of the cases, but there is one minor set back and that is that the conditions on the UI action is evaluated when the form loads and won&#39;t react if the condition is meet by changing a field. Perhaps you instead want a button to show when a field changes and should be visible for the user without them needed to save first.</p>
<p> </p>
<p>For this example. Lets say you want a button to be visible if the priority is 1 on an incident. If you only would use an UI Action you would probably do something like this:</p>
<p> </p>
<p><img class="image-1 jive-image" style="width: 620px; height: 283px;" src="4d9e6b3ddbd893041dcaf3231f9619a8.iix" alt="ui action hideshow 1.PNG" /></p>
<p> </p>
<p>Now if an incident is priority 1 when it&#39;s loaded then button will show and everything is fine. But if someone has a priority 3 than they want to change to priority 1 and hit the button, they need to first change to priority 1 and save before that button will appear.</p>
<p> </p>
<p>Now, this can of course be done without saving &#61;)</p>
<p> </p>
<p>Make the same UI Action, but you can remove the condition, it&#39;s not needed.</p>
<p> </p>
<p>Now, instead go and create an UI Policy and change to the advanced view.</p>
<p> </p>
<p>Set the conditions that you normally would have on the UI Action. Make sure the &#34;On load&#34; &amp; &#34;Reverse if false&#34; is checked like this:</p>
<p> </p>
<p><img class="image-2 jive-image" style="width: 620px; height: 387px;" src="27319106db94d344e9737a9e0f96191e.iix" alt="ui action hideshow 2.PNG" /></p>
<p> </p>
<p>And now for the magic to happen. Go into the Script section and check the Run scripts.</p>
<p>Put in the following code and as you can see we are using the action name as an identifier to find the UI Action and then simply using show() &amp; hide() to make the button visible or not depending if the condition is true or not.</p>
<p> </p>
<p><strong>EDIT: This picture has been updated:</strong></p>
<p><img class="image-3 jive-image" style="width: 585px; height: 300.048px;" src="7d635c02db189704ed6af3231f9619c5.iix" width="585" height="300" /></p>
<p> </p>
<p> </p>
<p> </p>
<p>If you have been doing this in your dev you will now see that your button will hide and show depending if you change the priority to 1 or not.</p>
<p> </p>
<p>Code has been made so it hides/shows all the buttons, both on the top and at the bottom.</p>
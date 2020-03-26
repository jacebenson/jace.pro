---
title: "Requested Item Variables in Activity Formatter"
date: 2020-03-21T10:17:23.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d1a9a0b3db6388d413b5fb24399619bd"
---
<p><span style="font-size: 10pt;">ServiceNow allows fulfillers to update RITMs including the variable editor. This helps fulfillers to correct the submitted requests instead of asking requester to raise request again.</span></p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>What options we have now?</strong></span></p>
<p><span style="font-size: 10pt;">To see the changes made by the fulfillers on the variables after request was raised one can check in <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/security/reference/r_HistoryCalendar.html" rel="nofollow">History Calender</a> and <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/security/reference/r_HistoryList.html" rel="nofollow">History List</a> (OOTB only available for admin).</span></p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>What we are looking for?</strong></span></p>
<p><span style="font-size: 10pt;">How convenient it would be if the changes made variables are displayed on the form itself like changes made to fields? That would be great isn’t it.</span></p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Why is it required?</strong></span></p>
<p><span style="font-size: 10pt;">Before we start with the technical part I would like to list few posts asking this. I recently came across a question on ServiceNow community checking if its possible (unfortunately I am not able to find that anymore). Here are few other questions asked but I didn’t find any concrete solution on any of them.</span></p>
<ul><li><span style="font-size: 10pt;"><a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;1701ed1adb86e740f0612183ca9619dc" rel="nofollow">https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;1701ed1adb86e740f0612183ca9619dc</a></span></li><li><span style="font-size: 10pt;"><a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;e99aec5ddb455b44fc5b7a9e0f96192a" rel="nofollow">https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;e99aec5ddb455b44fc5b7a9e0f96192a</a></span></li><li><span style="font-size: 10pt;"><a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;66cfcf65dbdcdbc01dcaf3231f961933" rel="nofollow">https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;66cfcf65dbdcdbc01dcaf3231f961933</a></span></li><li><span style="font-size: 10pt;"><a href="https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;997a47e9db5cdbc01dcaf3231f96195c" rel="nofollow">https://community.servicenow.com/community?id&#61;community_question&amp;sys_id&#61;997a47e9db5cdbc01dcaf3231f96195c</a></span></li></ul>
<p><span style="font-size: 10pt;"> </span></p>
<p><span style="font-size: 14pt;"><strong>Technical Solutions</strong></span></p>
<p><span style="font-size: 10pt;">Now it’s time to get dirty and see how we can achieve this.</span></p>
<p><span style="font-size: 10pt;">To track the changes made to variable editor we can use current.variables.changes() and then current.variables.<em>variable_name</em>.changes(); like we use on fields. It makes more sense to only add the variables modified with current and previous values to activity formatter like fields are when.</span></p>
<p><span style="font-size: 10pt;">If you are not aware already then Journal fields could support HTML if HTML value is wrapped in <em>[code] </em>tag<em>.</em> This informs the system that the Journal field value should be treated and rendered as HTML.<br /></span><span style="font-size: 10pt;">For more information checkout block <em><a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;4d9ceae1dbd0dbc01dcaf3231f9619e1" rel="nofollow">Formatting within Journal fields using HTML &amp; [code]</a></em> by <sn-mention class="sn-mention" table="live_profile" sysid="98505629db581fc09c9ffb651f961934">&#64;dylan.lindgren</sn-mention>  </span></p>
<p><span style="font-size: 10pt;"> </span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><strong>Option 1</strong></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Simplest option would be to track the changes made to variables and add those to work_notes (which OOTB is not used on RITM).</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">We need a system property to enable/disable the tracking of requested item variables in activity formatter, and a before query business rule to generate and add work_notes from the modified variable labels and their values.</span></p>
<p><span style="font-size: 10pt;"><strong> </strong></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>System Property<br /> </strong><em>Name</em>: glide.sc.audit_log.variables</span><br /><span style="font-size: 10pt;"><em> Description</em>: Audit changes to service catalog variables in Requested Item activity formatter.</span><br /><span style="font-size: 10pt;"><em> Type</em>: true|false</span><br /><span style="font-size: 10pt;"><em> Value</em>: true</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/50da2c37db6388d413b5fb2439961927.iix" /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Once created add it Service Catalog category (with order 850) so that its available on Service Catalog Properties.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/de2be477db6388d413b5fb24399619a0.iix" /></span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>Business rule<br /></strong></span><span style="font-size: 10pt;"><em>Name</em>: Add variable changes to Activity Trail</span><br /><span style="font-size: 10pt;"><em> Table</em>: Requested Item [sc_req_item]</span><br /><span style="font-size: 10pt;"><em> When</em>: before</span><br /><span style="font-size: 10pt;"><em> Insert</em>: True</span><br /><span style="font-size: 10pt;"><em> Update</em>: True</span><br /><span style="font-size: 10pt;"><em> Condition</em>: gs.getProperty(&#34;glide.sc.audit.variables.form&#34;, &#34;false&#34;) &amp;&amp; (current.operation() &#61;&#61; &#34;insert&#34; || current.variables.changes())</span><br /><span style="font-size: 10pt;"><em> Script</em>:<br /></span></p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/ ) {

    var isInsert &#61; current.operation() &#61;&#61; &#34;insert&#34;;
    var htmlString &#61; [];

    // Loop through all the variables to check the modifications
    for (var i in current.variables) {

        // Check if the current variable is modified
        if ((isInsert &amp;&amp; !current.variables[i].nil()) || current.variables[i].changes()) {
            var variableChange &#61; current.variables[i].getLabel() &#43; &#34;&amp;emsp;&amp;emsp;&#34;;

            if (current.variables[i].nil()) {
                variableChange &#43;&#61; &#34;[Empty]&#34;;
            } else {
                variableChange &#43;&#61; current.variables[i].getDisplayValue();
            }

            if (!isInsert &amp;&amp; !previous.variables[i].nil()) {
                variableChange &#43;&#61; &#34;&amp;ensp;&lt;em&gt;was&lt;/em&gt;&amp;ensp;&#34; &#43; previous.variables[i].getDisplayValue();
            }
            htmlString.push(variableChange);
        }
    }

    if (htmlString.length &gt; 0)
        current.work_notes &#61; &#34;[code]&#34; &#43; htmlString.join(&#34;&lt;br /&gt;&#34;) &#43; &#34;[/code]&#34;;

})(current, previous);</code></pre>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"> </span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Almost there. We only have to make sure that the Work notes field is tracked under activity formatter.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/ff2e28fbdb6388d413b5fb2439961953.iix" /></span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>Result:</strong></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Once done here is how we will see variables values on creation as well as on modifications.</span><br /><span style="font-size: 10pt;">When new request is raised all the non-empty variable values are captured on the ticket.<br /><img src="https://community.servicenow.com/e0ace83bdb6388d413b5fb24399619c6.iix" /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">When the variables are modified by the fulfillers then modified variables with their current and previous values are captured.<br /><img src="https://community.servicenow.com/0b8c2c3bdb6388d413b5fb24399619df.iix" /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"> </span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>Issue(s)</strong>:</span></p>
<ul style="padding-left: 30px;"><li><span style="font-size: 10pt;">In case you are using work_notes on RITM table then you might have an issues (not exactly an issue if you concatenate but isn’t clean) as fulfillers could update the variables as well as add work_notes in a single update.</span></li><li><span style="font-size: 10pt;">The formatting is not exactly as OOTB but it’s close to it and sufficient to understand.</span></li></ul>
<p><span style="font-size: 10pt;"> </span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><span style="font-size: 12pt;"><strong>Option 2 </strong></span><em>(recommended)</em></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">This option is similar to option 1 but more cleaner. We will have a property, a new Journal Input field, a business rule and three ACLs.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"> </span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">First of all we will create a new field of Journal Input type so we can keep the Activity Formatter more clean when it comes to variable modifications.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Create a field with name <strong><em>Variable changes [u_variable_changes]</em></strong> on sc_req_item. <em>Please keep the label and name exactly as specified.<br /><img src="https://community.servicenow.com/585dac7bdb6388d413b5fb243996190e.iix" /><br /></em></span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">We will use the same property as option 1.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>System Property<br /> </strong><em>Name</em>: glide.sc.audit_log.variables</span><br /><span style="font-size: 10pt;"><em> Description</em>: Audit changes to service catalog variables in Requested Item activity formatter.</span><br /><span style="font-size: 10pt;"><em> Type</em>: true|false</span><br /><span style="font-size: 10pt;"><em> Value</em>: true</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/40faac37db6388d413b5fb2439961908.iix" /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Once created add it Service Catalog category (with order 850) so that its available on Service Catalog Properties.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/af1be477db6388d413b5fb2439961953.iix" /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Almost same business rule but instead of work_notes fields we will add formatted text to u_variable_changes which we just now created.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>Business rule<br /></strong></span><span style="font-size: 10pt;"><em>Name</em>: Add variable changes to Activity Trail</span><br /><span style="font-size: 10pt;"><em> Table</em>: Requested Item [sc_req_item]</span><br /><span style="font-size: 10pt;"><em> When</em>: before</span><br /><span style="font-size: 10pt;"><em> Insert</em>: True</span><br /><span style="font-size: 10pt;"><em> Update</em>: True</span><br /><span style="font-size: 10pt;"><em> Condition</em>: gs.getProperty(&#34;glide.sc.audit.variables.form&#34;, &#34;false&#34;) &amp;&amp; (current.operation() &#61;&#61; &#34;insert&#34; || current.variables.changes())</span><br /><span style="font-size: 10pt;"><em> Script</em>:<br /></span></p>
<pre class="language-javascript"><code>(function executeRule(current, previous /*null when async*/ ) {

    var isInsert &#61; current.operation() &#61;&#61; &#34;insert&#34;;
    var htmlString &#61; [];

    // Loop through all the variables to check the modifications
    for (var i in current.variables) {

        // Check if the current variable is modified
        if ((isInsert &amp;&amp; !current.variables[i].nil()) || current.variables[i].changes()) {
            var variableChange &#61; current.variables[i].getLabel() &#43; &#34;&amp;emsp;&amp;emsp;&#34;;

            if (current.variables[i].nil()) {
                variableChange &#43;&#61; &#34;[Empty]&#34;;
            } else {
                variableChange &#43;&#61; current.variables[i].getDisplayValue();
            }

            if (!isInsert &amp;&amp; !previous.variables[i].nil()) {
                variableChange &#43;&#61; &#34;&amp;ensp;&lt;em&gt;was&lt;/em&gt;&amp;ensp;&#34; &#43; previous.variables[i].getDisplayValue();
            }
            htmlString.push(variableChange);
        }
    }

    if (htmlString.length &gt; 0)
        current.u_variable_changes &#61; &#34;[code]&#34; &#43; htmlString.join(&#34;&lt;br /&gt;&#34;) &#43; &#34;[/code]&#34;;

})(current, previous);</code></pre>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"> </span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">We don’t want anybody to use this new field anywhere like list view, form and templates. To ensure this we need to add an ACLs as shown in screenshots.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/958ba0b7db6388d413b5fb2439961936.iix" /><br /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/1dab24b7db6388d413b5fb2439961943.iix" /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/65db24b7db6388d413b5fb2439961921.iix" /> </span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Phew! We are almost to the end of this configuration. We have to make sure that the Variable changes field is tracked under activity formatter.<br /><img src="https://community.servicenow.com/fb1e28fbdb6388d413b5fb2439961908.iix" /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Click <em>Configure available fields</em> and add Variable changes field &gt; click Save.<br /><img src="https://community.servicenow.com/fe8de4bbdb6388d413b5fb24399619bd.iix" /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"> </span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>Result:</strong></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">Once done here is how we will see variables values on creation as well as on modifications.</span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">When new request is raised all the non-empty variable values are captured on the ticket. So in below image you can see that field modifications are captured as Field change and variable modifications as Variable changes.<br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><img src="https://community.servicenow.com/9afca47bdb6388d413b5fb24399619c3.iix" /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;">When the variables are modified by the fulfillers then modified variables with their current and previous values are captured.<br /><img src="https://community.servicenow.com/66cc247bdb6388d413b5fb24399619e0.iix" /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"> </span></p>
<p style="padding-left: 30px;"><span style="font-size: 10pt;"><strong>Issue(s)</strong>:</span></p>
<ul style="padding-left: 30px;"><li><span style="font-size: 10pt;">The formatting is not exactly as OOTB but it’s close to it and sufficient to understand.</span></li></ul>
<p><span style="font-size: 10pt;"> </span></p>
<p><span style="font-size: 14pt;"><strong>Future enhancement(s)</strong></span></p>
<p><span style="font-size: 10pt;">I will keep trying to make it give the same formatting as that OOTB for Field changes. Any help with this will be highly appreciated!</span></p>
<p> </p>
<p><span style="font-size: 10pt;"><strong>Note</strong>: Multi-row variable sets are not yet supported.</span></p>
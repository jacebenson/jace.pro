---
title: "Approval Due Dates and Reminder Notification Emails"
date: 2018-03-08T23:19:38.000Z
authors: ["alan.lowrance"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5b107b14dbfcd74c4816f3231f961973"
---
<p>Join me in this thought exercise of your day-to-day use of ServiceNow and seeing something that is manual or causing headaches and crafting a solution to fix it!</p>
<p>Noticing a Problem:</p>
<p>Whenever we create an approval and change the state to “Requested”, it sends an approval email to the approver and uses mail actions to allow them to click Approve or Reject and reply to the email with a comment.  However, we didn’t have any SLA or reminder for them if they ignored that email so at first we created a “Resend Approval Request” UI Action that just triggered an event which sent another email notification like before.  Once we had that in place, we still were relying on the technician of the ticket to go in and click that button every day or two, so we needed a way to automate it.</p>
<p>Discover a Plan:</p>
<p>First thing I do with any record is check what fields are available but hidden.  To do this you can check the Dictionary or just right-click at the top of a record and Show XML.  I did this with sysapproval_approver and noticed there is a Due Date field, perfect!  So I thought if we can stamp some amount of time in the future into that field (even if it’s still hidden on the form), then have a scheduled job run every 45-90 minutes during business hours and check for all approvals that are still in a “Requested” state and are past the due date.  Any that are found overdue can just fire the event I had already created before and it would resend the email.  Finally just need to push the Due Date back now that it had been fired to prevent it from re-firing every hour.</p>
<p>So what’s all needed? The <strong>event</strong>, a <strong>notification</strong> triggered by that event, a <strong>business rule</strong> to stamp the original due date whenever state become Requested, and a <strong>scheduled job</strong> that finds overdue Requested approval and fires the event and pushes back the Due Date some amount of time.</p>
<p>Make the Magic Happen:</p>
<p>Events are stored under System Policy&gt;Events&gt;Registry or the <em>sysevent_register</em> table.  We already had one for resending approvals notifications at this point in time, but you’ll need one if you don’t already have one to use.  The event registry is quite simple, much like the Dictionary is for field names, so all you need is to name it something like “approval.resend” and make sure it exists on the Table <em>sysapproval_approver.</em></p>
<p>For the notification, you can copy the one you already use for the initial approval request, but need to change “Send when” to “Event is Fired” and choose your new event name above.  Also might put Condition of State is Requested just as another layer of defense to not fire it if the state isn’t Requested.</p>
<p>The business rule that will stamp the initial due_date when you first change an approval State to Requested in our case will use a piece of code that has been invaluable to us: hoursFromNow() which is part of an old global Business Rule called “Future Date Globals” that daveknight gave to me but you could incorporate into a Script Include.  Here is the global (both Global table and application) business rule but today this would be created in a couple Script Includes instead.</p>
<pre class="language-javascript"><code>function hoursFromNow (durationHRS, scheduleID, exactly) {
	// If exactly is true, return the Date/Time that is durationHRS &#39;Business&#39; hours from now, given the scheduleID
	// If exaclty is false, return the Date/Time that is at least durationHRS of &#39;Calendar&#39; hours from now, with return 
	// being the earliest date/time during &#39;Business&#39; hours of scheduleID.
	// Return Date/Time will be in local timezone.
	//
	// Example usage for dictionary default:
	// javascript:hoursFromNow(4,&#39;090eecae0a0a0b260077e1dfa71da828&#39;, true); 
	
	return hoursFromHere (gs.nowNoTZ(), durationHRS, scheduleID, exactly);  // All must be GMT
}

function hoursFromHere (startDateSTR, durationHRS, scheduleID, exactly) {
    // startDateSTR must be GMT format to use with schedule!
	// However, return Date/Time will be in local timezone.
	
	// If exactly is true, durationHRS &#39;Business&#39; hours from startDateSTR, given the scheduleID
	// If exaclty is false, At least durationHRS of &#39;Calendar&#39; hours from startDateSTR, with return 
	// being earliest date/time during &#39;Business&#39; hours of scheduleID.
	
	// Example usage for dictionary default (the 8 to 5 except weekends and holidays calender)
	// javascript:hoursFromHere(gs.nowNoTZ(),4,&#39;090eecae0a0a0b260077e1dfa71da828&#39;, true);
    
	var startDateGDT &#61; new GlideDateTime(startDateSTR); 
    var durationMS &#61; durationHRS * 3600000;
    var endDateGDT &#61; GlideDateTime();
    var schedule &#61; new GlideSchedule(scheduleID);
    
    if (exactly &#61;&#61; undefined || exactly) {
        // Go find an end date/time which gives us the exact number of business duration hours
        // given the schedule
        
        if (schedule) {
            var durationGD &#61; new GlideDuration(durationMS);
            endDateGDT &#61; schedule.add(startDateGDT, durationGD); 
        }
		else {
            var startDateMS &#61; startDateGDT.getNumericValue();
            endDateGDT.setNumericValue(startDateMS &#43; durationMS);
        }
    }
    else {
        // This is not an exact business time request.  It is a minimum amount of calendar time request.
        // Go find the earliest end date/time, that is during business hours, and gives us at least the required number of
        // duration hours.
        
        // Assume first we don&#39;t run into non-business hours
        var startDateMS &#61; startDateGDT.getNumericValue();
        endDateGDT.setNumericValue(startDateMS &#43; durationMS);
        
        // Now check to see if we did.
        var timeTillNextBusinessWindowMS &#61; schedule.whenNext(endDateGDT);
        if (timeTillNextBusinessWindowMS &gt; 0) {
            endDateGDT.setNumericValue(startDateMS &#43; durationMS &#43; timeTillNextBusinessWindowMS);
        }
    }
    return endDateGDT.getDisplayValue();  // Return in system timezone
}</code></pre>
<p>Now for the sysapproval_approver business rule to stamp the due date.  On &#34;Before&#34; both inserts and updates when the State changes to Requested you want it to set the Due Date to some number of hours in the future, and in our case we want to give Change Requests slightly more time than other approvals:</p>
<pre class="language-javascript"><code>function onBefore(current, previous) {
	if (current.sysapproval.sys_class_name &#61;&#61; &#39;change_request&#39; &amp;&amp; current.sysapproval.type !&#61; &#39;Emergency&#39;)
		current.due_date &#61; hoursFromNow(12,&#39;090eecae0a0a0b260077e1dfa71da828&#39;, true);
	else
		current.due_date &#61; hoursFromNow(4,&#39;090eecae0a0a0b260077e1dfa71da828&#39;, true);
}</code></pre>
<p>Finally, we just need a scheduled job that runs every hour or so to find past due Requested approvals, fire the event, and push the due date back out along our working schedule using the same hoursFromNow() function:</p>
<pre class="language-javascript"><code>var overdueapprovals &#61; new GlideRecord(&#39;sysapproval_approver&#39;);
overdueapprovals.addQuery(&#39;state&#39;,&#39;requested&#39;);
overdueapprovals.addQuery(&#39;due_date&#39;,&#39;&lt;&#61;&#39;,gs.nowNoTZ()).addOrCondition(&#39;due_date&#39;,&#39;&#39;);
overdueapprovals.query();
while (overdueapprovals.next()){
	gs.eventQueue(&#39;approval.resend&#39;,overdueapprovals,overdueapprovals.approver,overdueapprovals.approver.user_name); //just in case your notification needs to use these parameters for something
	if (overdueapprovals.sysapproval.sys_class_name &#61;&#61; &#39;change_request&#39;)
		overdueapprovals.due_date &#61; hoursFromNow(18,&#39;090eecae0a0a0b260077e1dfa71da828&#39;, true);
	else
		overdueapprovals.due_date &#61; hoursFromNow(9,&#39;090eecae0a0a0b260077e1dfa71da828&#39;, true);
	overdueapprovals.update();
}</code></pre>
<p>If you want, you can have the scheduled job only run during weekdays by putting this as the condition:</p>
<p>answer &#61; (new GlideDateTime(gs.nowNoTZ()).getDayOfWeekLocalTime() &lt; 6);</p>
<p>And that&#39;s it!</p>
<p>Let me know if you have any questions or suggestions on improvements and I hope it helps you in your environment... or at least helps you feel more comfortable in being curious about messing around with how ServiceNow works and tailoring it to fit your company!</p>
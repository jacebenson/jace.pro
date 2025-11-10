---
title: Calculating Business Durations
description: "Calculating Business Durations\r\n\r\nFirst, why is this a thing? Well companies like to list things in \"business days\" sometimes. I'm not sure why, but that's t..."
date: '2021-04-20'
tags:
  - servicenow
redirectFrom:
  - /calculating-business-durations/
  - /p/2021-04-19-calculating-business-durations/
---

# Calculating Business Durations

First, why is this a thing? Well companies like to list things in "business days" sometimes. I'm not sure why, but that's the origin.

Sure, so now that we know why, how does this work in ServiceNow?

To do that you're going to have to dig in to some code.

As of today, ServiceNow still uses [gs.dateDiff](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideSystemAPI#r_GS-dateDiff_S_S_B) and [gs.calDateDiff](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideSystemAPI#r_GS-calDateDiff_S_S_B) to calculate duration and business duration. See Business rule `mark_resolved` and `mark_closed` on Incident. Below I've pasted the business rule for `mark_closed`.

```javascript
//mark_closed business rule
setClosureFields();

function setClosureFields() {
	// incident_state is Closed so
	// 1. mark the task as inactive
	// 2. set the closed by to current user if not supplied
	// 3. set the closed time to now if not supplied
	current.active = false;
	if (current.closed_by.nil())
		current.closed_by = gs.getUserID();
	if (current.closed_at.nil())
		current.closed_at = gs.nowDateTime();
	
	// Update the fields that indicate the time/duration of the incident
    // from open to close.
	// Keep track of duration as a glide_duration value (dd hh:mm:ss)
    // and as a pure number of seconds.
	// Both calendar time and business time are maintained.
	
	var dataChange = (current.opened_at.changes() 
    || (current.closed_at.changes() 
    && !current.isValidField("resolved_at")));
	var opened = current.opened_at.getDisplayValue();
	var closed = current.closed_at.getDisplayValue();
	
	if (dataChange || current.business_duration.nil())
		current.business_duration = gs.calDateDiff(opened, closed, false);
	
	if (dataChange || current.business_stc.nil())
		current.business_stc = gs.calDateDiff(opened, closed, true);
	
	if (dataChange || current.calendar_duration.nil())
		current.calendar_duration = gs.dateDiff(opened, closed, false);
	
	if (dataChange || current.calendar_stc.nil())
		current.calendar_stc = gs.dateDiff(opened, closed, true);
}
```

You can see it's using those old methods.

## gs.dateDiff

[gs.dateDiff](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideSystemAPI#r_GS-dateDiff_S_S_B) takes two string of time in the user's format and returns the duration between them in a ddd hh:mm:ss format. ServiceNow docs do also say;

> If you are working with GlideDateTime objects use the GlideDateTime subtract() method instead of dateDiff().

I'm not sure if gs.dateDiff is available to scopes but I would not bet on it. This is an instance of "Do what I say, and not what I do." from ServiceNow.

## gs.calDateDiff

[gs.calDateDiff](https://developer.servicenow.com/dev.do#!/reference/api/quebec/server_legacy/c_GlideSystemAPI#r_GS-calDateDiff_S_S_B) takes two string of time in the user's format and returns the duration between them in a ddd hh:mm:ss format against the "default" schedule. I can hear you now, "Jace, what is the default schedule?" It's not defined to me. I know it uses the 8-5 weekdays schedule (on cmn_schedule) but there are lot of [default schedules](https://docs.servicenow.com/bundle/quebec-platform-administration/page/administer/time/reference/r_DefaultSchedules.html). ServiceNow docs do also say;

> Calendars are now legacy. If Schedules are being used, see the topic Calculate Duration Given a Schedule.

I looked for this "Topic" but there isn't a page for this. I did find a section on [Usefil scheduling scripts](https://docs.servicenow.com/bundle/quebec-application-development/page/script/useful-scripts/concept/c_UsefulSchedulingScripts.html) that matches. Let's look here.

> Type: Before update/insert business rule\
> Table: Incident\
> Description: A Business Duration calculates the Open to Close duration on an incident based on the particular Creating and using schedules. If there is no schedule specified, the script will use the first schedule returned by the query.\
> Script example:\
> The example below sets the resolved duration when the incident state moves to resolved.
>
> ```javascript
> /*Modified to make more readable*/
> var opened_at = current.opened_at;
> var updated_on = current.sys_updated_on;
> var schedule_sys_id = '08fcd0830a0a0b2600079f56b1adb9ae';
> if(current.incident_state==6){
>  var dur = calcDurationSchedule(opened_at, updated_on);
>  current.u_resolved_duration= dur;
>
>  function calcDurationSchedule(start, end){ 
>  // Get the user   
>  var usr =new GlideRecord('sys_user');
>  usr.get(gs.getUserID());
>  // Create schedule - pass in the sys_id of your standard work 
>  // day schedule and >pass in the users timezone
>  var sched =new GlideSchedule(schedule_sys_id,usr.time_zone);
>  // Get duration based on schedule/timezone 
>  return(sched.duration(start.getGlideObject(), end.getGlideObject()));
> }
> ```

This again seems like a case where it's "Do as I say and not as I do."

## TL;DR

ServiceNow uses old functions to calculate these bits.

Business Duration seems to use a "default" calendar of 8-5 Weekdays. An example duration might be;\
Opened at: Feb 5th (Fri) at 7am\
Closed at: Feb 8th (Mon) at 2pm\
Duration calculated ...\
Feb 5th: 9 hours\
Feb 6th: 0 hours\
Feb 7th: 0 hours\
Feb 8th: 6 hours\
Total Business Duration: 15 hours.

Duration is the difference in time without a calendar considered. An example duration might be;

Opened at: Feb 5th (Fri) at 7am\
Closed at: Feb 8th (Mon) at 2pm\
Total Hours: 79 hours. (ServiceNow displays these in days, so 3 days 7 hours)
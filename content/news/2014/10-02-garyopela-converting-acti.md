---
title: "Converting Active Directory lastlogontimestamp To ServiceNow format"
date: 2014-10-02T00:28:52.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=6c9ceae1dbd0dbc01dcaf3231f961931"
---
<p>So, recently I wrote an integration to pull in all of our computer information from LDAP to pull into Service-Now to create an all-data comparison report. The report allows us to pull up a quick health report of all of our computers. This pulls in Last Login from SCCM (Configuration Manager), Last Login from AD, and will soon pull in Last Anti-Virus Scan data.</p><p></p><p>It provides a report, and will show green/yellow/red for the background of the cells for each of the three metrics gathered based on how long it has been since a computer has reported to each of the three systems. We can see from this that if only one of the sources is shown as red, then we need to dispatch a technician. If they are all three red, then it is likely that that machine has been removed from the network. </p><p></p><p>In the future, we will add in automated IMAC and Incident generation based on the data in the report.</p><p></p><p>So, now that the background of the report has been mentioned, I ran into one slight issue. The lastlogontimestamp in AD is a very odd format. It is measured in Epoch seconds, but not since 1970 like most systems. For some reason, Microsoft decided to begin their epoch at the year 1601 or so, so the existing date conversions that are out there for UNIX Epoch time won't work. After much internet research, I came up with the following in my transform map:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14121915833948056" jivemacro_uid="_14121915833948056">
<p>var dat = LDAPtimeToDate(source.u_lastlogontimestamp);</p>
<p>answer = getDate(dat);</p>
<p></p>
<p>function getDate(date1){</p>
<p> return(date1.getFullYear() + "-" + (date1.getMonth()+1) + "-" + date1.getDate());</p>
<p>}</p>
<p></p>
<p>function LDAPtimeToDate(LDAPstring)</p>
<p>{</p>
<p>               var iYearsFrom1601to1970 = 1970 - 1601;</p>
<p>               var iDaysFrom1601to1970 = iYearsFrom1601to1970 * 365;</p>
<p></p>
<p>               iDaysFrom1601to1970 += parseInt(iYearsFrom1601to1970 / 4); // leap years</p>
<p>               iDaysFrom1601to1970 -= 3; // not sure exactly why this is 3</p>
<p></p>
<p>               var iSecondsFrom1601to1970 = iDaysFrom1601to1970 * 24 * 60 * 60;</p>
<p></p>
<p>               var iTotalSecondsSince1601 = parseInt(LDAPstring/ 10000000);</p>
<p></p>
<p>               var iTotalSecondsSince1970 = iTotalSecondsSince1601 - iSecondsFrom1601to1970;</p>
<p>               var oFinishedDate = new Date(iTotalSecondsSince1970 * 1000);</p>
<p>               return oFinishedDate;</p>
<p>}</p>
</pre><p>So what we do, is you feed the lastlogintimestamp from AD to the LDAPtimeToDate function, then run that through the getDate function, and voila! It is returned into a useable format for Service-Now.</p><p></p><p>I want to be clear that I didn't come up with this code on my own, I googled and found it. I just wanted to post the final product here for you guys, so maybe I can save you all some time too. I did have to tweak it some to get it to fit properly in here, but the general gist of it was created by many other people.</p>
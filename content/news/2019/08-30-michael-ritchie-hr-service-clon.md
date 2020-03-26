---
title: "HR Service CloneCopy Feature"
date: 2019-08-30T01:03:13.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ae76008edb6fbf4413b5fb243996194a"
---
<p>Throughout the ServiceNow platform you will find Copy and Clone buttons to copy various types of records.  For example in the Service Catalog while viewing/editing a Record Producer there is a Copy button that copies the record producer, variables, UI Policies, Client Scripts, etc.  Unfortunately the capability of copying a HR Service doesn&#39;t exist out of the box until now.</p>
<p><img src="https://community.servicenow.com/66754882db6fbf4413b5fb2439961970.iix" /></p>
<p> </p>
<p>A solution has been uploaded into ServiceNow Share that and allows you to copy an HR Service including the following linked configurations:</p>
<ol><li>HR Service Configuration</li><li>HR Template</li><li>Checklists associated to the HR Service Configuration and HR Templates</li><li>Record Producer</li></ol>
<p>This solution does not however copy the Lifecycle Event Type or Activity sets that may be linked as the fulfillment type of the HR Service.  This was purposely excluded because the <a href="https://docs.servicenow.com/bundle/newyork-hr-service-delivery/page/product/human-resources/task/clone-lifecycle-event.html" target="_blank" rel="noopener noreferrer nofollow">NY release includes a Clone option for copying Lifecycle Events</a>.</p>
<p>To download this feature, please visit ServiceNow Share and download the <a href="https://developer.servicenow.com/app.do#!/share/contents/8781058_hr_service_copy?t&#61;PRODUCT_DETAILS" target="_blank" rel="noopener noreferrer nofollow">HR Service Copy update set</a> and apply it to your instance.</p>
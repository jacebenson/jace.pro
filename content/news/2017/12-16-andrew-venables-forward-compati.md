---
title: "Forward Compatibility Considerations for Technology Partners"
date: 2017-12-15T21:06:08.000Z
authors: ["andrew.venables"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=22cda2e9dbd0dbc01dcaf3231f96190a"
---
<div class="">
<p><span style="font-size: 11.0pt; color: black;">With the Jakarta release, ServiceNow has seen a fundamental change in the underlining storage of the CMDB with the introduction of a new Table Extension Model called Table Per Partition. You can find more information about what this means for Technology Partners </span><a href="community?id&#61;community_blog&amp;sys_id&#61;64bc6a25dbd0dbc01dcaf3231f961916" rel="nofollow"><span style="font-size: 11.0pt;">here</span></a><span style="font-size: 11.0pt; color: black;">.</span></p>
<p> </p>
<p><span style="font-size: 11.0pt; color: black;">This change marks a fundamental principal in ServiceNow that Technology Partners need to be aware of: ServiceNow does not ensure backwards compatibility, only forward compatibility.</span></p>
<p> </p>
<p><span style="font-size: 11.0pt; color: black;">This leads to the advice that Technology Partners should develop on the earliest version of the platform they intend to support. If you want to have your application certified and available to instances on Istanbul, Jakarta and Kingston then you should develop your application on an Istanbul instance. </span></p>
<p>  <img class="image-1 jive-image" style="width: 620px; height: 89px;" src="b094984adb5817049c9ffb651f9619b1.iix" alt="Screen Shot 2017-12-15 at 15.02.24.png" /></p>
<p><span style="font-size: 11.0pt; color: black;">This is because ServiceNow&#39;s developers and engineers will develop and test on the principle that applications built on earlier versions should work on future versions. If something within the platform changes in future versions, then the upgrade process will have been tested to ensure existing applications continue to function.</span></p>
<p> </p>
<p><span style="font-size: 11.0pt; color: black;">But ServiceNow does not test or expect applications developed on later releases to be deployed on earlier versions, so if you want to support Istanbul do not develop on Jakarta since there maybe aspects of your application that will not work and are incompatible with earlier releases. The above mentioned CMDB changes in Jakarta are a perfect example of this, since the newer version of the application will have additional Dictionary entries that are invalid and unsupported in earlier versions.</span></p>
<p> </p>
<p> </p>
</div>
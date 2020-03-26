---
title: "Accessing Your Developer Tools in the Classic Mobile and Tablet UI"
date: 2015-09-18T04:27:53.000Z
authors: ["John Armstrong"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c0edaae9dbd0dbc01dcaf3231f96199f"
---
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Sometimes your Client Scripts, UI Policies, and other client side scripting doesn&#39;t work as expected.   This can be especially frustrating when you don&#39;t have access to debugging tools like your browser&#39;s developer console, which allows you to see any errors being thrown and what&#39;s triggering them.   Fortunately there are a number of ways to see what&#39;s going on under the hood in the mobile UI.   Listed below are a few ways to see what&#39;s happening in your scripts.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong> </strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-size: 18px;"><strong>Accessing the Mobile and Tablet UI from a Desktop Browser</strong></span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Most of the time, an issue occurring on your mobile UI will be reproducible by using the Mobile UI on your desktop browser.   Using the mobile UI on a desktop browser will allow you to find any potential issues you may encounter within the mobile UI.   This is also useful as it allows troubleshooting on a full sized monitor and keyboard, as well as eliminating the need for a physical mobile device when testing.   This is also the simplest way to see any client side errors being generated while using the mobile UI.   Since we&#39;re on a desktop browser, you have access to the developer console and tools that are available in all major browsers.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">The mobile and tablet UI can be accessed by using the following URLs:</p>
<ul><li>Mobile UI:   <a title="" href="/" target="_blank" rel="noopener noreferrer nofollow">https://</a>&lt;instance_name&gt;.service-now.com/$m.do</li><li>Tablet UI:   <a title="" href="/" target="_blank" rel="noopener noreferrer nofollow">https://</a>&lt;instance_name&gt;.service-now.com/$tablet.do</li></ul>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">At some point, you&#39;re going to want your desktop UI back.   The following link will get you back from either mobile or tablet.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="line-height: 1.5em;">Desktop UI:   <a title="" href="/" target="_blank" rel="noopener noreferrer nofollow">https://</a>&lt;instance_name&gt;.service-now.com?sysparm_device&#61;doctype </span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">While the look and feel won&#39;t be exactly the same, you will be able to interact with the instance in the same way you would on a mobile device.   Right-clicking can be used to simulate a &#34;tap and hold&#34; action.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<table border="1"><tbody><tr><td>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>A Note on Impersonation</strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Impersonation options are only visible in the desktop UI.   This does not mean that will not be able to impersonate, you&#39;ll just need to do so before switching to an alternate UI.   Impersonate as normal, then browse to one of the above links.   Alternately, you can impersonate on a physical mobile device by first using the desktop link, impersonating, and then using one of the mobile links to get back.   While doing this does allow you to see the desktop UI on a mobile device, it&#39;s not recommended that you do so for anything other than impersonation.   The full desktop UI is not designed to run on the more limited mobile hardware, and is not supported.</p>
</td></tr></tbody></table>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<h2 style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-size: 18px;">The Developer Console</span></h2>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Now that you&#39;re in your UI of choice, you can use the developer console to check for any client side errors you may be getting.   You may already be familiar with your browser&#39;s dev console, but if not, here&#39;s how to find it on our supported browsers.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>Chrome</strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">PC:   Click â‰£ â†’ More Tools â†’ Developer tools, or press Control &#43; Shift &#43; I</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Mac:   Click â‰£ â†’ More Tools â†’ Developer tools, or press Option &#43; âŒ˜ &#43; J</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>Firefox</strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">PC and Mac:   Click â‰£ â†’ Developer â†’ Browser Console</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong> </strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>Internet Explorer</strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Press the F12 key or Click &#34;F12 Developer Tools&#34; under the Tools menu</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>Opera</strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">From the menu, open Tools â†’ Advanced â†’ Developer tools</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<h2 style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-size: 18px;">Mobile Device Emulation</span></h2>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">If you&#39;d prefer a closer match for the appearance of a mobile device for testing.   There are a couple of options that can be used to more closely emulate a mobile device.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<div><strong>Chrome (Mac and PC)</strong>
<p> </p>
<p>Chrome has mobile device emulation built into it&#39;s developer tools.   This   This can be accessed using the following steps:</p>
<p>1. Access the developer tools:</p>
<p>        In Windows: Control &#43; Shift &#43; I</p>
<p>        In Mac: Press option &#43; âŒ˜</p>
<p>2. Press escape, then select the &#34;Emulation&#34; tab.</p>
</div>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">3. Here there are a number of options, but the &#34;Model&#34; selector will allow you to quickly emulate a number of devices.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>XCode (Mac Users)</strong></p>
<div>XCode is an IDE suite for OSX and iOS that includes an<a title="tps//developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator.html" href="http://https//developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator.html" rel="nofollow"> iOS simulator.</a> Due to an issue with the way XCode handles it&#39;s user string, this option may not work on Eureka Instances, but will perform as expected in Fuji, as well as instances still using the legacy mobile UI.</div>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><span style="font-size: 18px;"><strong>Debugging a Physical Mobile Device with a Desktop Computer.</strong></span></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">It&#39;s rare, but you at some point encounter an issue that is only reproducible on a physical mobile device.   Fortunately, iPad, iPhone, and Android mobile devices can be connected to a desktop via a USB cable, using the desktop browser&#39;s console tools to troubleshoot issues.</p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<div><strong>iOS</strong>
<p>iOS devices can be connected to a PC/Laptop and debugged with the Safari browser.   Unfortunately   was introduced in Safari 6, after Apple stopped updating Safari on Windows.   So, you&#39;ll need a mac using OSX 10.7.4 or later to do this.</p>
<ol><li>Connect your iPhone / iPad to your computer using a USB cable.</li><li>Open Safari on your Mac</li><li>Browse to Safari â†’ Preferences</li><li>Click on the Advanced tab</li><li>Check the checkbox next to &#34;Show Develop menu in menu bar&#34;</li><li>On your iPhone, open your browser and log onto your instance.</li><li>On your Mac, Click on Develop â†’ iPhone â†’ &lt;site name&gt;</li></ol>
<p>This will open the <a title="eveloper.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html" href="https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html" rel="nofollow">Web Inspector</a>, while will allow you to inspect elements of the page, as well as view console logs.</p>
</div>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong> </strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"><strong>Android</strong></p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Android devices can also be connected to PC/Laptop via USB and <a title="eveloper.chrome.com/devtools/docs/remote-debugging" href="https://developer.chrome.com/devtools/docs/remote-debugging" rel="nofollow">debugged using the Chrome desktop browser</a>.  </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;"> </p>
<p style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">The above information should help identify mobile problems you encounter. <span style="font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">Finding where specifically an issue is occurring </span>will help speed the process troubleshooting any client side issues you run into while developing your mobile and tablet UI.</p>
---
title: "Debugging the Classic Mobile UI from your Desktop"
date: 2015-08-20T21:53:29.000Z
authors: ["John Armstrong"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=4e0deaa5dbd0dbc01dcaf3231f961914"
---
<p>Being able to debug your scripts on the desktop can save a lot of time. Troubleshooting the mobile user interface on a desktop gives you access to your desktop&#39;s full sized keyboard and monitor, and browser&#39;s developer tools. Using your desktop to debug your mobile interface issues makes troubleshooting easier in situations where a physical mobile device is not available to you. I will show you how to access the <a title="ki.servicenow.com/index.php?title&#61;Smartphone_Interface#Supported_Devices_and_Browsers&amp;gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Smartphone_Interface#Supported_Devices_and_Browsers&amp;gsc.tab&#61;0" rel="nofollow">supported Mobile and Tablet </a>user interface on a desktop browser, as well as some information on tools that can be used to help with the troubleshooting process.</p>
<p> </p>
<p> </p>
<h1>Using the Mobile UI on a Desktop Browser</h1>
<p style="text-align: left;">Both the Mobile and Tablet UI can be accessed on any supported desktop browser. Going through the steps on a desktop will give you all of the functionalities of the desktop but on the limited interface of the device. Sounds like a strange approach? Not quite. Using your company&#39;s mobile interface on a desktop can help find any holes in functionality or troubleshoot issues that arise.</p>
<p><img class="image-1 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="2db02dc6dbd8d304b322f4621f961953.iix" alt="Mobile&#43;on&#43;Desktop.jpg" /></p>
<p style="text-align: center;">      Above:   The ServiceNow Mobile UI within a Chrome desktop browser</p>
<p> </p>
<p> </p>
<p>You can access the mobile device interface by using these URLs, just add your instance name where indicated:</p>
<ul><li>If you want the smartphone mobile UI add /$m.do to the end of your instance name: <span style="line-height: 1.5em; font-size: 14px; font-family: &#39;andale mono&#39;, times;"><a title="" href="/" target="_blank" rel="noopener noreferrer nofollow">https://</a></span><span style="font-family: &#39;andale mono&#39;, times; font-size: 14px; line-height: 1.5em;">&lt;instance_name&gt;.service-now.com/$m.do</span></li><li><span style="line-height: 1.5em; font-family: &#39;Helvetica Neue&#39;; font-size: 14px;">If you want the tablet interface, you add $tablet.do to the end: </span><span style="line-height: 1.5em; font-size: 14px; font-family: &#39;andale mono&#39;, times;"><a title="" href="/" target="_blank" rel="noopener noreferrer nofollow">https://</a></span><span style="font-family: &#39;andale mono&#39;, times; font-size: 14px; line-height: 1.5em;">&lt;instance_name&gt;.service-now.com/$tablet.do</span></li></ul>
<p> </p>
<p>Once you&#39;re in either of these alternate UIs, you can get back to the desktop UI by using the sysparm_device&#61;doctype, like this:</p>
<p><a title="" href="/" target="_blank" rel="noopener noreferrer nofollow">https://</a>&lt;instance_name&gt;.service-now.com?sysparm_device&#61;doctype</p>
<p> </p>
<p>While the look and feel won&#39;t be exactly the same, you will be able to interact with the instance in the same way you would on a mobile device.   <strong>Right-clicking can be used to simulate a &#39;tap and hold&#39; action.</strong></p>
<p> </p>
<p> </p>
<h2>Mobile Device Emulation</h2>
<p>There are a couple of options that can be used to more closely model a smartphone or tablet&#39;s appearance and behavior. This can be important when you want an accurate representation of how something will look on a mobile device.   These options allow you to do things like set the display to a phone&#39;s native resolution, or to jump between landscape and portrait format without manually resizing you browser window.   Chrome and Xcode provide developer tools for Macs and PCs to emulate different devices. Using these options provides a more accurate representation of how your changes will appear on your device of choice.</p>
<p> </p>
<p><img class="image-0 jive-image" style="height: auto; display: block; margin-left: auto; margin-right: auto;" src="1bce01cadb1897049c9ffb651f9619de.iix" alt="debugging mobile.jpg" /></p>
<p style="text-align: center;">Above:   The XCode iOS Simulator</p>
<p> </p>
<p> </p>
<p><strong>Chrome (Mac and PC)</strong></p>
<p>Chrome has mobile device emulation built into its developer tools. This can be accessed using the following steps:</p>
<ol><li>Access the developer tools:
<ol><li>In Windows: Control &#43; Shift &#43; I</li><li>In Mac: Press option &#43; âŒ˜ &#43; J</li></ol>
</li><li>Press escape, then select the &#34;Emulation&#34; tab.</li><li>Here there are a number of options, but the &#39;Model&#39; selector will allow you to quickly emulate a number of devices.</li></ol>
<p><img class="image-2 jive-image" style="height: 325px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="93b0544edb505304b322f4621f961924.iix" alt="Chrome Mobile Emulator.png" /></p>
<p style="text-align: center;">Above:   The Chrome Developer Tools window, with the Emulation tab shown</p>
<p style="text-align: center;"> </p>
<p> </p>
<p><strong>XCode (Mac Users)</strong></p>
<p>XCode is an IDE suite for OSX and iOS that includes an iOS simulator. XCode can be used to simulate a variety of iPhone and iPad devices.   Due to an issue with the way XCode handles its user string, this option may not work on Eureka Instances, but will perform as expected in Fuji, as well as instances still using the legacy mobile UI. Details on the use of this tool can be found on <a style="line-height: 1.5em;" title="eveloper.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator.html" href="https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator.html" rel="nofollow">Apple&#39;s developer site.</a></p>
<p> </p>
<p> </p>
<h1>Debugging a Physical Mobile Device with a Desktop Computer (Mac Only).</h1>
<p>In some rare cases, you&#39;ll run into an issue that isn&#39;t reproducible on the desktop browser, but does occur on your phone or tablet.   In these cases, iOS devices can be connected to a PC/Laptop and debugged with the Safari browser&#39;s Web Inspector.   Unfortunately   was introduced in Safari 6, after Apple stopped updating Safari on Windows.   So, you&#39;ll need a mac using OSX 10.7.4 or later to do this.</p>
<p> </p>
<ol><li>Connect your iPhone / iPad to your computer using a USB cable.</li><li>Open Safari on your Mac</li><li>Browse to Safari â†’ Preferences</li><li>Click on the Advanced tab</li><li>Check the checkbox next to &#34;Show Develop menu in menu bar&#34;</li><li>On your iPhone, open your browser and log onto your instance.</li><li>On your Mac, Click on Develop â†’ iPhone â†’ &lt;site name&gt;</li></ol>
<p> </p>
<p>This will open the Web Inspector, while will allow you to inspect elements of the page, as well as view console logs.</p>
<p><img class="image-3 jive-image" style="height: 306px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="ecfc6f75db9893041dcaf3231f9619db.iix" alt="Safari Develop Tools.png" /></p>
<p style="text-align: center;">Above:   The Safari Develop Menu.   With the connected iPhone highlighted</p>
<p> </p>
<p>In the image above, you can see the connected iPhone listed in the Develop Menu.   Note that just above it is the iOS Simulator mentioned earlier.   If you&#39;re using the Simulator, you can also use Safari&#39;s developer tools to debug the iOS simulator using the same steps.</p>
<p> </p>
<p><img class="image-2 jive-image" style="height: 349px; width: 620px; display: block; margin-left: auto; margin-right: auto;" src="08a9700adbd89304b322f4621f9619ee.iix" alt="debugging on mobile.jpg" /></p>
<p style="text-align: center;">  Above:   The iOS Simulator alongside the Safari Web Inspector</p>
<p> </p>
<p>More information see <a title="eveloper.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html" href="https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html" rel="nofollow">Web Inspector.</a></p>
<p> </p>
<p>The above information should allow you to access the Mobile and Tablet UI on your desktop, giving you the ability to test and debug on your instance.   This should speed up your development process and make it much easier to identify and correct client side issues that come up during the creation of new content for mobile.</p>
<p> </p>
<h1> </h1>
<h1>Related Articles</h1>
<p> </p>
<p><a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0549598" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0549598" rel="nofollow">KB0549598:   Known Error:   console.log statements can cause errors in Internet Explorer 9 if the browser console is not open.</a></p>
<p><a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0546854" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0546854" rel="nofollow">KB0546854:   Info on troubleshooting UI Policies.   Examples include the use of the developer console to find an error.</a></p>
<p><a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0547069" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0547069" rel="nofollow">KB0547069:   Determining if there are client script errors on your instance.</a></p>
<p><a title="i.service-now.com/kb_view.do?sysparm_article&#61;KB0550574" href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0550574" rel="nofollow">KB0550574:   Troubleshooting form issues</a></p>
<p><a title="http://wiki.servicenow.com/index.php?title&#61;Using_the_Smartphone_Interface#Working_with_the_Smartphone_Interface" href="http://wiki.servicenow.com/index.php?title&#61;Using_the_Smartphone_Interface#Working_with_the_Smartphone_Interface" rel="nofollow">Using the Smartphone Interface - ServiceNow Wiki</a></p>
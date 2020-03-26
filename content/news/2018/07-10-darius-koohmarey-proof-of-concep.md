---
title: "Proof of Concept The Augmented Reality Assistant ARA for ServiceNow"
date: 2018-07-10T03:23:44.000Z
authors: ["darius.koohmarey"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=4541dec0dbd39b002be0a851ca96195a"
---
<p class="p1">In this blog, I’m excited to share some insights and proof of concepts around a technology that’s been making waves in the consumer space: Augmented Reality. In this blog covering a POC I&#39;ve named the Augmented Reality Assistant (ARA) for ServiceNow ITSM, I’ll cover:</p>
<p class="p1" style="padding-left: 30px;"><a href="#section1" rel="nofollow">I. Overview of the Technology</a></p>
<p class="p1" style="padding-left: 30px;"><a href="#section2" rel="nofollow">II. Technology Providers</a></p>
<p class="p1" style="padding-left: 30px;"><a href="#section3" rel="nofollow">III. Proof of Concepts</a></p>
<p class="p1" style="padding-left: 30px;"><a href="#section4" rel="nofollow">IV. Other AR Use Cases</a></p>
<p class="p1" style="padding-left: 30px;"><a href="#section5" rel="nofollow">V. Questions to Answer</a></p>
<p class="p1">If you would like to see this technology formally implemented or productized, your feedback to the questions at the end of the blog is greatly appreciated. Whether you comment that you see value or that all you see is an overhyped technology not yet mature enough for the enterprise, your feedback is appreciated. Many thanks! Darius, ITSM Product Management.</p>
<p class="p1" style="padding-left: 30px;"> </p>
<h2 class="p1" style="padding-left: 30px;"><strong><a name="section1"></a> I. Augmented Reality Overview</strong></h2>
<p class="p1">Merriam-Webster refers to Augmented Reality as “an enhanced version of reality created by the use of technology to overlay digital information on an image of something being viewed through a device”.</p>
<p class="p1">Augmented reality technology will be pivotal to reducing the friction between people, process, and technology. If we think about the commonly used hardware devices and interfaces in use today, from mobile devices to keyboards, monitors, and mouse’s, they are merely interfaces from which we provide inputs to software to complete an action or lookup information.</p>
<p class="p1">So why not optimize on this process by removing the need to use your hands to interface with the hardware entirely, while providing contextual information without needing to manually do lengthy searches? Visually overlaid augmented reality provides this seamless solution.</p>
<p class="p2"><img src="72705e40dbd39b002be0a851ca961989.iix" width="391" height="321" /></p>
<p class="p1">Augmented reality is an example of a technology that has already made waves on the consumer side of the world with the now infamous Niantic&#39;s ‘Pokemon GO’ game. If history is any teacher, it’s only a matter of time until we see similar experiences being adopted within the enterprise. In doing so, we will improve the fulfiller &amp; manager experiences to more efficiently complete work and make business decisions. If you look for it, you will see that there are already successful implementations of the technology in a business setting, especially around providing contextual knowledge to technicians.</p>
<p class="p1" style="padding-left: 30px;"> </p>
<h2 class="p1" style="padding-left: 30px;"><strong><a name="section2"></a>II. Augmented Reality Technology Providers</strong></h2>
<p class="p1">The rising interest and demand for the technology can be seen through the investments made by consumer centric organizations into developing augmented reality, notably:</p>
<p class="p3"><span class="s2"><a href="https://developers.facebook.com/products/camera-effects/ar-studio/" rel="nofollow">Facebook with their AR Studio, focused around a novel consumer experience for increased user engagement</a></span><span class="s3">.</span></p>
<p class="p3"><span class="s2"><a href="https://developer.apple.com/arkit/" rel="nofollow">Apple has a ARKit which can be accessed on the newer iPhones and leveraged by app developers.</a></span></p>
<p class="p3"><span class="s2"><a href="https://get.google.com/tango/" rel="nofollow">Google’s Tango, while currently only for specific devices, is available to app developers.</a></span></p>
<p class="p2">In addition to the large corporate players looking to leave their mark on this space, smaller open source projects are also readily available. These include, but are not limited to:</p>
<p class="p1"><strong>Proprietary:</strong></p>
<p class="p1">•Layar SDK [iOS and Android]</p>
<p class="p1">•Catchoom CraftAR AR SDK [iOS and Android]</p>
<p class="p1">•Vuforia Augmented Reality SDK</p>
<p class="p1">•Wikitude SDK –first AR SDK providing JavaScript API to work with augmented reality experiences</p>
<p class="p1"><strong>Open Source:</strong></p>
<p class="p1">•Arma – OpenCV-based</p>
<p class="p1">•ARToolKit – C-library</p>
<p class="p1">•Augment – Tablets &amp; smartphones</p>
<p class="p1">•JavaCV –Java/Android interface</p>
<p class="p1">•DroidAR – Android AR framework</p>
<p class="p1">Beyond the software, we must also consider the hardware required for the current augmented reality implementations. There are quite a few major vendors already working on the wearable versions of the technology, most notably including Microsoft’s Hololense, the Google Glass Enterprise Edition, and the more than billion dollar funded Magic Leap. Many smaller vendors like iGlass AR, Vuzix Blade AR, and others have already developed consumer/business grade models. Future advances and research (e.g. <a href="https://www.neuralink.com/" rel="nofollow">neuralink</a>) are promising more efficient and less bulky hardware integrated directly into our bodies.</p>
<p class="p1" style="padding-left: 30px;"> </p>
<h2 class="p1" style="padding-left: 30px;"><strong><a name="section3"></a>III. Augmented Reality ITSM Proof of Concepts</strong></h2>
<p class="p1">In our augmented reality proof of concepts, we decided to use readily available hardware, using both Google Glass &amp; Microsoft HoloLens to mock-up a few use cases. Examples and descriptions of the exact use cases built per device can be found below:</p>
<h3 class="p1"><strong>Google Glass: </strong></h3>
<p class="p1">The Google Glass proved lightweight and easy to use, however the small screen size and limited interactions meant it could only handle basic use cases that had linear process flows without significant information. In this case, we used the Explorer edition as it was readily available. The app is written using Java / Android SDK.</p>
<p class="p4"> <img src="39a66e48dbdb9b002be0a851ca961936.iix" width="392" height="490" /> </p>
<p class="p1"><strong>Maintenance List</strong>: Provides an easily accessible list of field service maintenance requests and their associated maintenance tasks. Technicians can then easily progress the state of these tasks and leave work notes on the go. A similar concept can also be applied to change requests and their child change tasks. In the demo below, a tech drills into a carpet cleaning request, and completes the task to rent or call a carpet cleaner after leaving work notes indicating the job was done.</p>
<p class="p2"> </p>
<p class="p1"><img src="0f7b4b9cdb9f53402be0a851ca961993.iix" /></p>
<p class="p2"> </p>
<p class="p1">As we can see, the lifecycle of the task, including the added work notes, are tracked in the history.</p>
<p class="p2"> <img src="d7e62e88dbdb9b002be0a851ca961936.iix" width="1117" height="615" /></p>
<p class="p2"> </p>
<p class="p1"><strong>Incident Creation</strong>: Technicians can quickly create an incident using a picture taken using the google glass, and have the ability to use voice to set short description quickly. This helps reduce intake processing and quickly provides an incident with rich information. In the demo, a tech takes a picture of the device having the issue, and narrates the short description to trigger incident creation.</p>
<p class="p2"> </p>
<p class="p1"><img src="b8ef721cdb5b53402be0a851ca9619e5.iix" /></p>
<p class="p2"> </p>
<p class="p1">As observed in the screenshot below, the created incident contains the identified caller, short description, and attached image.</p>
<p class="p2"> <img src="f1172ac8dbdb9b002be0a851ca9619ac.iix" width="1010" height="724" /></p>
<p class="p2"> </p>
<p class="p1"><strong>Barcode Scan</strong>: The Barcode scan allows a tech to quickly scan an asset barcode to gain device information and to create an incident, if necessary. Here, a QRcode is scanned to retrieve asset details. The tech then has the ability to quickly jump into a create incident flow.</p>
<p class="p1"><img src="56cf3ed8db5b53402be0a851ca961952.iix" /> </p>
<p class="p1">In the screenshot below, it can be observed that the affected CI is automatically set on the created incident.</p>
<p class="p2"> <img src="9aa50bd0db1f53402be0a851ca9619ee.iix" width="865" height="600" /></p>
<p class="p2"> </p>
<h3 class="p1"><strong>Microsoft HoloLens: </strong></h3>
<p class="p1">The Microsoft HoloLens allowed for a much large field of view compared to the google glass. In addition, it offers the ability to interact with objects in space with gestures in air. This meant use cases that required more interaction and display real-estate were best tested on this device. We used the developer edition in our testing, and the app created is done in C# / Unity.</p>
<p class="p4"><img src="83b72ad0dbdf13402be0a851ca961940.iix" /> </p>
<p class="p2"> </p>
<p class="p1"><strong>QR Code Lookup</strong>: Scanning a QR code quickly pulls up relevant information, such as configuration item information. This allows techs working with end user devices to quickly gain context around a device by simply pulling it’s barcode/QR code into the field of view. The scanning automatically reads the barcode and identifies the relevant form of information.</p>
<p class="p2"><img src="164adb14db5793402be0a851ca961992.iix" /> </p>
<p class="p1"><strong>Escalation via Skype Call</strong>: An integrated skype call allows a technician to seamlessly escalate to a higher tier technician via live audio and video to be sent into and out of the device. This means the higher-level technician can see the issues directly from the perspective of the tech, and the tech can see information and hear insights sent by the higher-level technician. In the demo, a tech triggers an escalation, and narrates the name of the tech to escalate to, which triggers a skype call to the user.</p>
<p class="p2"> <img src="b412d718db9393402be0a851ca9619c4.iix" /></p>
<p class="p1"><strong>Knowledge Search</strong>: Since the HoloLens also offers voice based commands via Cortana, a voice based knowledge search can be enhanced by image search. The larger screen size relative to the Google Glass means that onscreen knowledge content can be displayed in its entirety, while also allowing users to navigate search results more easily. In the demo, a tech selects a troubleshooting KB article from a returned list, which opens the article in a new window.</p>
<p class="p2"><img src="570fb6d4db5b53402be0a851ca961965.iix" /> </p>
<p class="p2" style="padding-left: 30px;"> </p>
<h2 class="p2" style="padding-left: 30px;"><strong><a name="section4"></a>IV. Other ITSM Use Cases we’ve identified for wearable augmented reality:</strong></h2>
<p class="p1"><strong>Caller Identification</strong>: Utilizes facial recognition of an employee and identifies their currently opened incidents and requests. Useful in a walk-up setting.</p>
<p class="p1"><strong>Assisted Fulfillment for technicians</strong>: where the wearable scans an asset tag and lets the technician create an incident, create a change, or consume the asset for a given user. Selections can be done visually in space or through voice commands.</p>
<p class="p1"><strong>Integrated Knowledge Search:</strong> Computer Vision can identify an object and bring up relevant knowledge base articles. Alternatively, a technician can use voice to search a knowledge base. Knowledge Article information is presented overlaid for contextual insights, while allowing the technician to retain full mobility of both hands. AR enabled KB articles can actually provide overlaid visualizations, as opposed to traditional plain text.</p>
<p class="p1"><strong>Integrated ITSM Information</strong>: Provides any outstanding Change Request and Problem information for a given visually identified asset (either through scanned barcode or visual recognition on the asset class), to aide in RCA, prevent unplanned outages against CI’s and quickly link workaround information from a Problem.</p>
<p class="p1"><strong>Business Service Map Data Visualization</strong>: Visualize and traverse a business service map using gestures and voice commands to easily drill into dependencies, identify changes, problems, and outages overlaid on the nodes visually.</p>
<p class="p1"><strong>Report Visualization</strong>: Place reports anywhere in space, such as on the walls of an office, and quickly drill into data.</p>
<p class="p1"> </p>
<h2 class="p2" style="padding-left: 30px;"><strong> <a name="section5"></a>V. Now that you’re thinking about augmented reality use cases for ITSM:</strong></h2>
<ol class="ol1"><li class="li1">Has your organization explored the use of Augmented Reality in your business?</li><li class="li1">Would your organization be interested in piloting augmented reality?</li><li class="li1">Do you have a use case you believe Augmented Reality would help make more efficient or solve? It can be new or an existing use case mentioned above.</li></ol>
<p class="p1">Let me know in the comments below!</p>
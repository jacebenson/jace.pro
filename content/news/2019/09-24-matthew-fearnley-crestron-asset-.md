---
title: "Crestron Asset Classes for  ServiceNow"
date: 2019-09-23T16:32:54.000Z
authors: ["Matthew Fearnley"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0b6187b91b400494fff162c4bd4bcbc6"
---

<h1 class="reader-article-header__title t-40 t-black t-normal pv4">Crestron and ServiceNow: Asset Classes</h1>

<div class="reader-author-info__container-wrapper"> </div>
<div id="ember59" class="ember-view"> </div>
<div id="ember61" class="ember-view">
<div class="reader-article-content">
<h2>How to build a CMDB of Crestron Assets by Asset Class</h2>
<p><a href="https://www.crestron.com/" target="_blank" rel="noopener noreferrer nofollow">Crestron</a> systems and products control everything from your basic conference room to some of the most intricate public presentation spaces in corporate America. Crestron systems can be broken down into four parts.</p>
<h2><strong><u>The Crestron Interface</u></strong></h2>
<p>The most commonly visible Crestron Product is the Crestron Interface. Many people have used a Crestron interface and weren&#39;t even aware of it. Crestron interfaces can be broken down into two types either a <em>touch panel </em>or a <em>touch screen.</em></p>
<h3><strong>Touch Panel</strong>: Touch panels contain physical buttons</h3>
<div class="slate-resizable-image-embed slate-image-embed__resize-left"><img src="https://media.licdn.com/dms/image/C4E12AQEMXKk8-JzI5Q/article-inline_image-shrink_1000_1488/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;gxBvNCuKqCmMVtQi2wqhQXnDeUqqZm4c3ZfnwRjywAc" alt="Physical buttons are what define and differentiate button panels from touch panels." /></div>
<p><a href="https://www.crestron.com/en-US/Products/Control-Surfaces/Keypads/Presentation-Controllers/MP-B20-B-T" target="_blank" rel="noopener noreferrer nofollow">Crestron MP-820</a></p>
<p><strong>Touch Screen: </strong>Touch screens contain an interactive touch surface</p>
<div class="slate-resizable-image-embed slate-image-embed__resize-left"><img src="https://media.licdn.com/dms/image/C4E12AQE3soDoDUfw9g/article-inline_image-shrink_1000_1488/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;BD4DFHDfkQa7DaRyTpVE_gxTS480X98dInRqXDVZg6I" alt="ServiceNow and Crestron Touch Screens" /></div>
<p><a href="https://www.crestron.com/en-US/Products/Control-Surfaces/Touch-Screens/Large-Touch-Screens/TSW-1060-NC-B-S" target="_blank" rel="noopener noreferrer nofollow">Crestron TSW-1060-NC-B-S</a></p>
<p><span style="font-size: 14pt;"><strong>What does a Crestron Interface do?</strong></span></p>
<p>Simply put, The Crestron Interface allows the user to activate and control Crestron systems. The interface allows the user to choose the signal input (laptop, videoconferencing, in room computer) and send it to the appropriate output (monitor, projector). The interface also controls the on/off/standby status for the system as whole as well as the individual components.</p>
<h2><strong><u>The Crestron Processor</u></strong></h2>
<p>The most powerful of the Crestron components is the Crestron Processor. While Crestron has a family of products that integrate a number of signals and building tasks, we are focused on the audio video and control functions of audio and video equipment.</p>
<p>Crestron Processors engage interactivity between different types of signals.</p>
<p><strong>Control Signal Processing</strong>: I/O, infrared TC/PIP, RS-232</p>
<div class="slate-resizable-image-embed slate-image-embed__resize-full-width"><img src="https://media.licdn.com/dms/image/C4D12AQGHrHx7nazUTA/article-inline_image-shrink_400_744/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;a4NMxmIxUjw9hQA_YPqyX2w3dHo_Mmd32Z2FhMAaWjo" alt="No alt text provided for this image" /></div>
<p><strong>Video Signal Processing: </strong>1024x786, 1920x1080, Video from videoconferencing, 4K, Video from web conferencing, cable television</p>
<div class="slate-resizable-image-embed slate-image-embed__resize-full-width"><img src="https://media.licdn.com/dms/image/C4D12AQFeuNPZzSa_Gw/article-inline_image-shrink_1500_2232/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;dpSG1k_F6gHwwnbke_rrge816qKWUGJJcXQg262sYec" alt="No alt text provided for this image" /></div>
<p><strong>Audio Signal Processing:</strong> VoIP, Audioconferencing, Audio from videoconferencing, computer audio, POTS</p>
<div class="slate-resizable-image-embed slate-image-embed__resize-full-width"><img src="https://media.licdn.com/dms/image/C4D12AQE58LfesLjnFQ/article-inline_image-shrink_1500_2232/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;kD-l-bFcNMi0u5fhGuG9YeFZaBSQnSC1r_AgtZJQdsY" alt="No alt text provided for this image" /></div>
<h3>What does a Crestron Processor do?</h3>
<p>The Crestron Processor equalizes and balances various signals so that they work together. In room systems can have different processors for different types of signals or a larger processor that handles multiage signal classes.</p>
<h2>The Crestron Switcher</h2>
<p>The Crestron Switcher basically assigns each signal (input) which outputs(devices) it can be displayed on.</p>
<div class="slate-resizable-image-embed slate-image-embed__resize-full-width"><img src="https://media.licdn.com/dms/image/C4E12AQEZGAjbOFrjOg/article-inline_image-shrink_1000_1488/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;qaldJx2A0T4JiN5msQxZEmx--VGD7lwLHBcHel5Lri8" alt="No alt text provided for this image" /></div>
<h3><strong>What does the Crestron Switcher do? </strong></h3>
<p>The Crestron Switcher takes a signal signal and assigns it an output. It takes output devices and assigns a signal to go to it. Switcher capacity can be defined by _x_ connotation as 8x8 or &#34;8by8&#34; definition which means a capacity of 8 inputs with 8 outputs. The switcher will determine which signal (content) displays on which output device. Whether it be a single signal display device such as a projector or a monitor or a multiple signal display device such as a video wall.</p>
<h2>Crestron In Line Devices</h2>
<div class="slate-resizable-image-embed slate-image-embed__resize-left"><img src="https://media.licdn.com/dms/image/C4E12AQHRdQHIQo7hVA/article-inline_image-shrink_1000_1488/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;R_7JyUfwQtkIzZ_8eiasKFSV0dkH5X0RzmD5ZzqxkS8" alt="Crestron Trnsmitter" /></div>
<p>Crestron has a variety of smaller components that each have a specific purpose such as boosting a signal or converting on signal to another for a specific purpose. Some environments require CMDB tracking of all these components. Larger AV ecosystems would benefit from tracking these devices to guard against a product run failure. If a single component were to fail in unison then a complete system wide swap out of the componet could be executed by asset tracking in ServiceNo</p>
<div class="slate-resizable-image-embed slate-image-embed__resize-left"><img src="https://media.licdn.com/dms/image/C4E12AQHK7j8Y5RYcBQ/article-inline_image-shrink_400_744/0?e&#61;1574899200&amp;v&#61;beta&amp;t&#61;VMb1qEWWMWEtsIAu1Wl39wBTMEJRjxoN0YdL9Thy_bs" alt="Crestron Amplifier" /></div>
<p>Collectively I like to group these in a seperate asset class for two reasons. First they are outside of the end user&#39;s sight so they have a lower failure rate due to the lack of physical touch. Secondly the in line devices also are more unlikely to be attached to service desk ticket as most tickets are generated from the user interface side of an AV system. Service desk tickets would be attached to an inline device typically after an in-depth assessment by either an AV Vendor or your in house AV service staff.</p>
<h3><strong>Crestron Asset Classes:</strong> Interface, Processor, Mixer, Switcher, In Line</h3>
<p>I hope this helps ServiceNow Developers and Platform Architects with an introductory understanding of AV systems. Please add your name in the comments if you are interested in joining or following a ServiceNow AV Group for Developers and Architects.</p>
</div>
</div>
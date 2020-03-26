---
title: "How to build an AV CMDB"
date: 2018-08-21T21:23:49.000Z
authors: ["Matthew Fearnley"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=144bde35db4427c09d612926ca96193e"
---
<p>     Since you are here you have given some thought to building a CMDB for your AV assets. There are several approaches you can take, or you can build a hybrid approach, it depends on what weight you give which approach. If you take the approach that AV is the entry point for Iot (Internet of Things) then a technical approach works. If the churn of AV leaves you in a budgetary quandary then a cost approach might be the right approach. If operational stability is the main course then a volatility approach may be the best approach.</p>
<p><strong>Technical Approach: </strong>This allows an enterprise to track each incident to an individual component level. The data will include many assets that may never fail, but if there is an industry failure ( <em>a bad run</em>, in manufacturing parlance) you&#39;ll be covered. This will assure that any networked asset, no mater how small is in the CMDB. It is my opinion that eventually the AV function of the enterprise will eventually be responsible for the maintenance and support of IoT devices. Since AV has boots on the ground, then everything from humidity sensors to lighting sensors will migrate under one umbrella.</p>
<p>                                                <img style="max-width: 100%; max-height: 480px;" src="7d041afddb8027c09d612926ca9619c8.iix" /></p>
<p>Since AV still has a number of dummy devices, that being a device that has no function other than to distribute and display content, one may ask why put these in your CMDB. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="2ef25ab5db8027c09d612926ca961986.iix" /> These devices will eventually become networked or eliminated by cloud devices, so if you are looking for funding for your your next generation of AV you can use your CMDB to target retire certain components. While this approach seems labor intensive there is a way to work with your vendors to pre-sort bulk data do make for easy bulk upload, we&#39;ll address that later.</p>
<p><strong>Cost Approach: </strong>If your AV replacement cycle is stable and you just need to upgrade certain components then a cost approach will keep the upgrade cycle in Service Now. From a component level the bulk of the component cost can be traced to three types of assets</p>
<p><img style="max-width: 100%; max-height: 480px;" src="ccd1ae71db0827c09d612926ca9619e5.iix" /></p>
<p>One of the challenges of AV is lifecycle management, both technical lifecycle and physical lifecycle management. Since each component has its own lifecycle it is often required to swap out a component before an upgrade to the whole space. By using the CMDB one can forecast whether or not a next generation asset will work within the existing system. Specifics such as inputs/outputs, brightness and throw distance can be negotiated pre-install....making your life that much easier. Whole system upgrades require a bid process from scratch so individual components are not that important. The ability of handing off an equipment list to a corresponding bid can prove useful. As projectors in many environments are assigned a life of 5-7 years many last longer. So if you outlast your depreciation schedule good for you....but still have the budget set aside. For sound processors that integration variables may come from the card slot availability and type, again the CMDB will give you the reference you need. It helps if you attach a picture or a link to the schematics to provide a quick reference as to whether or not a sound card or DSP replacement is the way to proceed.</p>
<p><strong>Volatility/Stability Approach: </strong>In all fairness AV if installed correctly is pretty stable considering the complexity of some systems. Less complex systems are more stable by their very nature. More complex systems can be stabilized by using the CMDB to track software, firmware, licenses and code. </p>
<p><img style="max-width: 100%; max-height: 480px;" src="df68a6b9dbc827c09d612926ca9619fc.iix" /></p>
<p>Polycom for example requires a multi year agreement for certification, if allowed to lapse preceding uncovered years must be paid for in order to receive service... a re-certification fee may also be required. Now, not all users keep this current, but using the CMDB to track this will allow you to notify users that there is an identifiable risk profile. It is a difficult discussion when your big VC is held hostage for $4500 that your client wasn&#39;t aware of. This tracking can go a long way in assuring system stability. Stability focused service also assures that when issues do happen there isn&#39;t the knee jerk reaction to blame it on code. There has been industry talk of the 600mz band going away...are any of your wireless mics in this range? Tracking wireless mics prevent adjacent rooms with mics from &#34;stepping on each other&#34;.</p>
<p><strong>So how do we magically get this into Service Now?</strong></p>
<p>Here&#39;s a simple approach:</p>
<p><strong>Physical Location:</strong> Campus&gt;Building&gt;Room&gt;Install date</p>
<p><strong>Room Type:</strong> Classroom&gt;Lab&gt;Conference Room&gt;Event Space&gt;Public Space (use for Digital Signage) </p>
<p><em>This allows you to filter by Room Type</em></p>
<p><strong>Asset Class/</strong>Asset Type<strong>: </strong></p>
<p><strong>Display:</strong> Projectors, Flat Panel Monitors, Screens, Video Walls, Install date</p>
<p><strong>Control:</strong> Touch panels, Signal Processors, Control Signal Extenders, Control Signal Converters, (Crestron), Install date</p>
<p><strong>Audio:</strong> Digital Sound Processors (DSPs), Amplifiers, Speakers, Microphones, Install date</p>
<p><strong>Video:</strong> Non-Video Conference Cameras, VCRs, DVD Players, Video Converters, Video Servers, Install date</p>
<p><strong>Video Conferencing</strong>: Codecs, VC Cameras, VC Servers, Software, License Keys, Install date</p>
<p> </p>
<p><strong>Manufacturer:</strong> Use the name on the unit even if it is manufactured under another name, &#34;Panasonic&#34; is &#34;Panasonic&#34; even if it is manufactured by Matsushita</p>
<p><strong>Model Number: </strong>Use model number most noticeable on unit</p>
<p><strong>Serial Number: </strong>Really only necessary if SN is needed to call into service or asset is switched out and has a cost ceiling</p>
<p><strong>Warranty:</strong> differentiate between workmanship warranty on the room (usually a year) and warranty on an asset (if 1 year&#43;)</p>
<p>This will help you build filters to find End of Life (EOL) and End of Service (EOS) assets</p>
<p>Hope this helps! I&#39;d like to see what you folks experience and I encourage additions and feedback.</p>
<p>Add MAC and IP when and where applicable...</p>
<p> </p>
<p>Remember AV works....until it doesn&#39;t!</p>
<p>Handy Inventory sheet attached.</p>
<p>MF</p>
---
title: "How to Capture Traffic on an Emulated Android Device Using Burp Suite with Genymotion"
date: 2018-12-22T03:43:19.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a15673c1db2ea780107d5583ca961905"
---
<p> </p>
<p>Getting PortSwigger’s Burp Suite (<a href="https://portswigger.net/burp/" rel="nofollow">https://portswigger.net/burp/</a>) to work with Genymotion (<a href="https://www.genymotion.com/" rel="nofollow">https://www.genymotion.com/</a>) isn’t straight forward so I&#39;ve decided to share this knowledge so that others can avoid common pitfalls. </p>
<p>Genymotion is a powerful Android Emulator using Oracle&#39;s VirtualBox (https://www.virtualbox.org/) to emulate devicesIt is faster than Android&#39;s emulator, which comes standard with Android Studio. Burp Suite facilitates testing Web application security. We will use the proxy feature of Burp Suite to capture web traffic from the Android browser.</p>
<p>Step 1: Build a new Android Virtual Machine</p>
<p>To ensure that we can proxy this traffic, let&#39;s create an Android Virtual Machine using Marshmallow (Android 6.0). Android Nougat and later do not allow end-users to install trusted CA Certificates. In this step, we will choose to emulate the Google Nexus 6P. Give the device a name and let’s move on to setting up networking.</p>
<p> <img src="5fd37b49dbeaa780107d5583ca961923.iix" /></p>
<p>Step 2: Find the IP address of Your Android Virtual Machine</p>
<p>This step is essential to route proxy traffic on Genymotion through this IP.</p>
<p>2a. Shell into the Android VM. Then use the ifconfigcommand to find the correct IP address.</p>
<p><img src="9df33389dbeaa780107d5583ca961930.iix" /></p>
<p>In this case the IP address is on interface eth0 192.168.56.101and the router IP address is 192.168.56.1. </p>
<p>2b. Ping 192.168.56.1to ensure it is reachable.</p>
<p><img src="a604f389dbeaa780107d5583ca9619f7.iix" /></p>
<p>We have verified that we can reach the router.</p>
<p>2c. Note the router IP address for later use for proxy traffic.</p>
<p>Step 3: Set up Burp to proxy traffic</p>
<p>3a. Open Burp Proxy</p>
<p>3b. Start a Temporary Project &gt; Use Burp Defaults &gt; Start Burp</p>
<p>3c. Navigate to the ProxyTab and Click Options</p>
<p>3d. Under Proxy Listenersselect the Binding Tab.</p>
<p>3e. Set the port to bind to an unused port (such as 9999). </p>
<p>3f. Set Burp to Listen on a specific address. (Use the router’s IP address from the previous step: 192.168.56.1).</p>
<p><img src="b234bb89dbeaa780107d5583ca9619a5.iix" /></p>
<p>Step 4: Set up Proxy Traffic on Genymotion</p>
<p>4a. On your Genymotion Android VM device, Navigate to Settings &gt; Wifi and ensure that your VM is connected to Wi-Fi and can receive internet traffic.</p>
<p>4b. Navigate to your SSID and Long press on it. In this case the SSID is “WiredSSID”.</p>
<p><img src="215433c9dbeaa780107d5583ca9619dc.iix" /></p>
<p>4c. The options “Modify Network” and “Forget Network” will pop up on screen. Select “Modify Network”.</p>
<p><img src="226433c9dbeaa780107d5583ca9619ec.iix" /></p>
<p>4d. Select the “Advanced” options choice and the proxy configuration menu will appear.</p>
<p><img src="848477c9dbeaa780107d5583ca9619b8.iix" /></p>
<p>4e. Under “Proxy”Select Manual and Configure the HTTP proxy.</p>
<p>In our case the Proxy hostname is the IP address of our router, 192.168.56.1 and our Proxy port number is 9999.</p>
<p> </p>
<p>This matches the settings in Burp</p>
<p>.<img src="b994734ddbeaa780107d5583ca9619c1.iix" /></p>
<p><img src="b9b4374ddbeaa780107d5583ca96190b.iix" /></p>
<p>Now we are ready to start proxying traffic using Burp! Open the Android Browser and browse to <a href="http://example.com/" rel="nofollow">http://example.com</a>.</p>
<p>We are able to see traffic pass through Burp.</p>
<p><img src="92d47b4ddbeaa780107d5583ca96198b.iix" /></p>
<p>Step 5: Install Burp CA Certificate on the Android VM</p>
<p>We are not quite finished.</p>
<p>We still need to configure the Android VM to proxy TLS/SSL Encrypted traffic.  To do this we must install Burp’s CA Certificate.</p>
<p> 5a. In Burp Navigate to: “Proxy &gt; Options &gt; Import/Export CA Certificate&gt; Export &gt; Certificate in DER format&gt;Next” and save the certificate.</p>
<p><img src="4605f38ddbeaa780107d5583ca9619fb.iix" /></p>
<p>5b. We must install this certificate on the Android VM. In a terminal, navigate to the directory where certificate is saved and push it to the device’s sdcard using adb. Rename the extension of the Burp CA certificate to .cer so that the complete filename is “burp.cer”.</p>
<p><img src="9d253b8ddbeaa780107d5583ca961939.iix" /></p>
<p>5c. In the Android VM, we now navigate to “Settings&gt; Security &gt; Credential storage &gt; Install from SD card”</p>
<p><img src="b3353f8ddbeaa780107d5583ca9619e5.iix" /></p>
<p>5d. In the Internal Storage menu, select the Burp CA certificate. In this example, it is called “burp.cer”.</p>
<p><img src="fe5573cddbeaa780107d5583ca9619df.iix" /></p>
<p>5e After selecting it the option to name it will be presented. Give the certificate a name and under “Credential use” select “Wi-Fi”. The certificate should now be installed, and the ability to proxy TLS/SSL traffic using Burp should also be available. To test this out, open up the browser on the Android VM and browse to a website that uses TLS.  In this example, we will browse to: <a href="https://paypal.com/" rel="nofollow">https://paypal.com</a>.</p>
<p><img src="8c85f7cddbeaa780107d5583ca9619e5.iix" /></p>
<p>Burp proxy will be tunneling this traffic through the proxy and all requests and responses will be seen in the tool.</p>
<p> <img src="7895fbcddbeaa780107d5583ca9619b7.iix" /></p>
<p>Congratulations, after reading this blog post you should now be able to capture Android web traffic with Burp Suite using Genymotion as an Android VM. This tutorial can also be applied to Android applications that make use of WebViews.</p>
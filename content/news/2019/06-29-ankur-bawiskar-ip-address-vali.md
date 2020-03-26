---
title: "IP Address Validation Client Side"
date: 2019-06-28T21:53:07.000Z
authors: ["Ankur Bawiskar"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9968c0cadbd6ff402be0a851ca961904"
---
<p>Many a times you would require validation for IP Address if there is a field on the form.</p>
<ul><li>A valid IPv4 address should be in the form of xxx.xxx.xxx.xxx, where xxx is a number from 0-255.</li><li>Class A IP addresses are networks belonging from 1.0.0.0 to 127.0.0.0. Class B is networks 128.0.0.0 through 191.255.0.0. Class C is 192.0.0.0 through 223.255.255.0</li><li>IP Address 0.0.0.0 is <em>valid</em> since it contains four octets, each within the range 0 through 255 inclusive. However, it&#39;s not <em>usable</em> as a real IP address.</li><li>Valid IP Address always are in between the extreme values, &#34;0.0.0.0&#34; and &#34;255.255.255.255&#34; excluding these extreme values.</li></ul>
<p>For example below are few valid IPv4 Addresses:</p>
<p>10.10.10.10</p>
<p>192.168.1.1</p>
<p>Invalid IPv4 Addresses:</p>
<p>192.168.1.256</p>
<p>255.245.276.243</p>
<p>There exists already a field type IP Address; you can try using that.</p>
<p>Here is the onChange Script on the field:</p>
<pre class="language-markup"><code>function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue &#61;&#61;&#61; &#39;&#39;) {
		return;
	}
	
	var val &#61; validateIP(newValue);
	
	if(val &#61;&#61; &#39;reserved&#39;){
		alert(&#39;This is a reserved IP address so cannot be used&#39;);
		g_form.clearValue(&#39;fieldName&#39;);
	}
	else if(!val){
		alert(&#39;Please enter valid IP Address&#39;);
		g_form.clearValue(&#39;fieldName&#39;);
	}
	
}
function validateIP(ip) {
	alert(&#39;inside function&#39;);
	
	if(ip &#61;&#61; &#39;0.0.0.0&#39; || ip &#61;&#61; &#39;255.255.255.255&#39;)
		return &#39;reserved&#39;;
	
	//Check Format
	var ip &#61; ip.split(&#34;.&#34;);
	
	if (ip.length !&#61; 4) {
		return false;
	}
	
	//Check Numbers
	for (var c &#61; 0; c &lt; 4; c&#43;&#43;) {
		//Perform Test
		if ( ip[c] &lt;&#61; -1 || ip[c] &gt; 255 ||
			isNaN(parseFloat(ip[c])) ||
		!isFinite(ip[c])  ||
		ip[c].indexOf(&#34; &#34;) !&#61;&#61; -1 ) {
			
			return false;
		}
	}
	return true;
}</code></pre>
<p class="ng-scope">Kindly do not forget to like or bookmark this post if it helps you.</p>
<p class="ng-scope">Kindly input your suggestions if any once you use this.</p>
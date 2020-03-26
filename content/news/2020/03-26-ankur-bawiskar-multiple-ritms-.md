---
title: "Multiple RITMs in same Request Using CartAPI"
date: 2020-03-25T13:29:27.000Z
authors: ["Ankur Bawiskar"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3dfb35c5dbfb04945129a851ca961942"
---
<p>Many a times you would require script to create multiple RITMs for same Catalog Item under single Request.</p>
<p>Below script would help you create the same; I have created a catalog item with 5 variables. Using the below script it would create 2 RITMs as the json contains 2 objects &amp; both the RITMs will have same request:</p>
<p>Scenario: You are receiving a json data from some external integration &amp; want to create RITMs to be placed under a single REQ so that they can be tracked.</p>
<p>Sample JSON:</p>
<pre class="language-markup"><code>[
  {
    &#34;requested_for&#34;: &#34;Abel Tuter&#34;,
    &#34;requested_by&#34;: &#34;Sam Jone&#34;,
    &#34;model&#34;: &#34;Hyundai&#34;,
    &#34;quantity&#34;: 1,
    &#34;device_model_name&#34;: &#34;Car-Petrol&#34;
  },
  {
    &#34;requested_for&#34;: &#34;Fred Luddy&#34;,
    &#34;requested_by&#34;: &#34;Amy Jone&#34;,
    &#34;model&#34;: &#34;Honda&#34;,
    &#34;quantity&#34;: 1,
    &#34;device_model_name&#34;: &#34;Car-Diesel&#34;
  }
]</code></pre>
<p> Catalog Item:</p>
<p><img src="https://community.servicenow.com/73bd6785db3f84945129a851ca961952.iix" /></p>
<p> </p>
<p>Script Below:</p>
<pre class="language-markup"><code>var catalogItem &#61; &#39;b70c34e807334c10540bf2508c1ed073&#39;; // catalog item sys_id

var jsonArray &#61; [{&#34;requested_for&#34;:&#34;Abel Tuter&#34;,&#34;requested_by&#34;:&#34;Sam Jone&#34;,&#34;model&#34;:&#34;Hyundai&#34;,&#34;quantity&#34;:1,&#34;device_model_name&#34;:&#34;Car-Petrol&#34;},{&#34;requested_for&#34;:&#34;Fred Luddy&#34;,&#34;requested_by&#34;:&#34;Amy Jone&#34;,&#34;model&#34;:&#34;Honda&#34;,&#34;quantity&#34;:1,&#34;device_model_name&#34;:&#34;Car-Diesel&#34;}];

var cartId &#61; GlideGuid.generate(null);
var cart &#61; new Cart(cartId);

for(var i&#61;0;i&lt;jsonArray.length;i&#43;&#43;){

var jsonObj &#61; jsonArray[i];
var parser &#61; JSON.parse(JSON.stringify(jsonObj));

var item &#61; cart.addItem(catalogItem,1);
cart.setVariable(item, &#39;requested_for&#39;, parser.requested_for);
cart.setVariable(item,&#39;requested_by&#39;,parser.requested_by);
cart.setVariable(item,&#39;model&#39;, parser.model);
cart.setVariable(item,&#39;quantity&#39;, parser.quantity);
cart.setVariable(item,&#39;device_model_name&#39;, parser.device_model_name);

}

var rc &#61; cart.placeOrder();
gs.info(&#39;Request Number is: &#39; &#43; rc.number);</code></pre>
<p>Output: 2 RITMs for same Request REQ0010217</p>
<p><img src="https://community.servicenow.com/dc2eef09db3f84945129a851ca9619f5.iix" /></p>
<p>1st RITM:</p>
<p><img src="https://community.servicenow.com/2f5e6f49db3f84945129a851ca9619ce.iix" /></p>
<p>2nd RITM:</p>
<p><img src="https://community.servicenow.com/177ee389db3f84945129a851ca961995.iix" /></p>
<p class="ng-scope"><strong>Note: Currently this script would work only in global scope.</strong></p>
<p class="ng-scope"><strong>Thanks for reading the blog and do provide your inputs/suggestions if any.</strong></p>
<p class="ng-scope"><strong>Hope you find this article helpful. Don’t forget to Mark it Helpful, Bookmark.<br />Thanks,<br />Ankur Bawiskar</strong></p>
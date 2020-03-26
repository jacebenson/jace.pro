---
title: "TechNow Ep   Mail Headers"
date: 2014-02-14T00:15:20.000Z
authors: ["TechNow"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d17dee29dbd0dbc01dcaf3231f961929"
---
<p>Make your administrative tasks easier and quicker! Chuck and Andrew share a solution to reduce maintenance for one of the most common notification requirements - standardized outbound headers and/or footers. Sure, copy/paste works well to make them all the same the first time, but maintenance can be time consuming. Join us and start to become a Jedi of managing data instead of going back to dev to make changes.</p>
<p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p>
<center><iframe src="https://www.youtube.com/embed/7Tn49ceWMNU" width="640" height="360"></iframe></center>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-weight: inherit; font-family: inherit; font-style: inherit;"><strong>Featured Experts</strong></span></p>
<p style="font-family: arial, sans-serif; color: #666666;"><a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" href="community?id&#61;community_user_profile&amp;user&#61;7ae05a61db981fc09c9ffb651f9619a2" rel="nofollow"><span style="font-weight: inherit; font-family: inherit; font-style: inherit;"><strong><img class="image-1 jive-image" style="margin: 2px 8px 10px 15px; border: 0px none; font-weight: inherit; font-style: inherit; font-family: inherit;" src="bf1e65cedb9cd304b322f4621f9619b2.iix" width="100" height="75" align="left" />Chuck Tomasi</strong></span></a> is a Platform Architect for ServiceNow. He is a computer science major with over 30 years of IT experience. As a former ServiceNow customer, Chuck won the first Innovation of the Year Award at Knowledge 10. Since joining ServiceNow in 2010 as a Technical Consultant, he has done many large scale ITSM implementations and custom applications, acted as an adjunct instructor for Education Services, created and lead the Technical Best Practices program, and co-hosts the ServiceNow series &#34;TechNow&#34;.</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p><a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #3778c7;" href="community?id&#61;community_user_profile&amp;user&#61;19439229db1c1fc09c9ffb651f9619e8" rel="nofollow"><span style="font-weight: inherit; font-family: inherit; font-style: inherit;"><strong><img class="image-1 jive-image" style="margin: 2px 8px 10px 15px; border: 0px none; font-weight: inherit; font-style: inherit; font-family: inherit;" src="a068d04edb545344e9737a9e0f96199e.iix" width="100" height="75" align="left" />Andrew Kincaid</strong></span></a> is a Sr. Software Engineer for ServiceNow. His extensive platform knowledge extends back to 2009 as a customer, Technical Consultant, and Developer.</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<hr />
<p><a href="http://bit.ly/servicenow-technow" rel="nofollow"><button style="background-color: #4690f4; border: none; border-radius: 4px; color: white; padding: 10px 15px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;">LIST ALL EPISODES</button></a></p>
<hr />
<p>Here is the script include from the video:</p>
<p>Name: <strong>AcmeMailScriptUtil</strong></p>
<p>Active: <strong>true</strong></p>
<p>Description: <strong>A collection of mail script utilities</strong></p>
<p>Script:</p>
<pre class="language-javascript"><code>var AcmeMailScriptUtil &#61; Class.create();
AcmeMailScriptUtil.prototype &#61; {
  initialize: function() {
    this.headerTable &#61; &#39;u_mail_header&#39;;
  },

  /*
   * getHTML - retrieve the specified header/footer record
   *
   * &#64;param name - name of the record to retrieve
   * &#64;return - string to insert in the notification
   *
   */
   getHTML : function(name) {

     var blk &#61; new GlideRecord(this.headerTable);

     blk.addQuery(&#39;u_active&#39;, true);
     blk.addQuery(&#39;u_name&#39;, name);
     blk.query();
       if (blk.next())
         return blk.getValue(&#39;u_html&#39;);
     
     return &#39;&#39;;
   
   },

   type: &#39;AcmeMailScriptUtil&#39;

}   </code></pre>
<div style="display: none;"> </div>
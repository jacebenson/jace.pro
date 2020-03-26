---
title: "How To Async GlideAjax in an onSubmit script"
date: 2019-05-12T06:59:59.000Z
authors: ["Jon Barnes"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=dc49feeadbdd7f0c54250b55ca96191d"
---
<p>As you probably already know, the only way to use GlideAjax in an onSubmit client script is to use getXMLWait and make a synchronous call to the server.</p>
<p>As you may also know, getXMLWait is flat-out not supported in Service Portal.</p>
<p>And so we have a problem. Many of us have use cases for checking something on the server when the user submits a form (or catalog request). But the above mutually exclusive facts have made it very difficult to create onSubmit scripts that do this and work for both native UI and Service Portal.</p>
<p>I am going to show you a fairly simple method for accomplishing this in a single script that works on both native and SP.</p>
<p>The idea is to hold a property in a persistent object on the client side that tells our submit script if the GlideAjax function has completed and is successful. So here is a simple script that you can use to accomplish this using GlideAjax and g_scratchpad:</p>
<pre class="language-javascript"><code>function onSubmit() {
  if (g_scratchpad._ajaxChecked) {
    // We have run our Ajax Checks, so we can continue on
    // and let our form submission continue
    return true;
  }
  // use this line below if you want to store the specific action name
  g_scratchpad._action &#61; g_form.getActionName();
  g_scratchpad._ajaxChecked &#61; false;
  var ga &#61; new GlideAjax(&#39;MyAjaxScriptInclude&#39;);
  ga.addParam(&#39;sysparm_name&#39;, &#39;myAjaxFunction&#39;);
  ga.getXMLAnswer(function(answer) {
    // I made this a simple check of a true/false result
    // but you can change this to check whatever suits your business case
    // and base it on what gets returned from your script include
    if (answer &#61;&#61; &#34;false&#34;) {
      // we didn&#39;t pass our checks, so alert the user and quit
      alert(&#34;didn&#39;t work&#34;);
      return;
    }
    // it worked! now we can resubmit the form with the 
    // property in place to allow us to continue
    // so once we resubmit, it will re-run this function but will return true
    // at line 5 of this script
    g_scratchpad._ajaxChecked &#61; true;
    if (typeof g_form.orderNow !&#61; &#39;undefined&#39;) {
      // this is a catalog item
      g_form.orderNow();
    } else {
      // this will resubmit the form using the saved 
      // ui action that was originally clicked
      g_form.submit(g_scratchpad._action);
    }
  });
  // always return false if we get to this point
  return false;
}</code></pre>
<p>Let me know if any questions!</p>
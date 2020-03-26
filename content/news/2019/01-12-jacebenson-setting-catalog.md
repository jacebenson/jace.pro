---
title: "Setting catalog variables from the URL in Service Portal"
date: 2019-01-12T03:30:49.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5fdc3377db72e304107d5583ca96198c"
---
<p>This is a repost from my blog(<a href="https://blog.jacebenson.com/post/2018-07-15-sp-set-variables-via-url/" rel="nofollow">https://blog.jacebenson.com/post/2018-07-15-sp-set-variables-via-url/</a>).</p>
<p>The other day, <a href="community?id&#61;community_question&amp;sys_id&#61;d1de646cdbc7d74423f4a345ca961916" rel="nofollow">a post was made, asking how to do this</a> and I had to answer. I knew you could read the URL via $window but that isn’t available in client scripts. So how can this be done?</p>
<p>I came up with the following solution.</p>
<p>Create a Variable type of macro, with a widget that has the following client script;</p>
<pre class="language-javascript"><code>function($scope, $window) {
  // This is the controller, we&#39;ve included
  // $scope in the function above because
  // it&#39;s easy to work with
  var c &#61; this;
  // We are going to simplify accessing 
  // g_form within the client script by
  // setting it as a variable named g_form
  var g_form &#61; $scope.page.g_form;
  //We are going to simplify accessing
  // g_form within the HTML by setting
  // it as a $scope attribute
  $scope.g_form &#61; $scope.page.g_form;
  // from here you can just iterate over
  // the url params;
  var params &#61; $window.location.href.split(&#39;?&#39;)[1];
  console.log(params);
  var paramsToString &#61; params.toString();
  var paramsArr &#61; paramsToString.split(&#39;&amp;&#39;);
  paramsArr.map(function(keyValue){
    var key &#61; keyValue.split(&#39;&#61;&#39;)[0];
    var value &#61; keyValue.split(key &#43; &#39;&#61;&#39;).join(&#39;&#39;);
    value &#61; decodeURIComponent(value);
    try {
      var message &#61; &#39;Setting &#39; &#43; key &#43; &#39; to &#39;;
      message &#43;&#61; value &#43; &#39; from url parameter.&#39;;
      console.log(message);
      $scope.g_form.setValue(key,value);
    } catch (error) {
      console.log(&#39;Error setting field&#39;, error);
    }
  });
}</code></pre>
<p>This will try to set all the attributes on the form so in the following url;</p>
<pre class="language-markup"><code>https://dev32369.service-now.com/sp?id&#61;sc_cat_item&amp;sys_id&#61;b480811a0f021300fc69cdbce1050ece&amp;description&#61;test</code></pre>
<p><img src="90acb7f3db72e304107d5583ca9619b2.iix" /></p>
<p>If you found this helpful, please press the &#34;Helpful&#34; link below and/or comment.</p>
<p> </p>
<p>P.S.</p>
<p>Laurent Chicoine pointed out another way to do this for an individual variable at a time instead of all of them by setting the default value, you can see his comment in the comments and mark his helpful if you find this shortened version helpful.</p>
<p>If you set the default value of the variable in question to this, then you can default it differently based on weather or not &#96;$sp&#96; exists.</p>
<pre class="language-javascript"><code>javascript: (function(){
  try{
    // Service Portal
    // if $sp exists do this
    return $sp.getParameter(&#39;var_short_description&#39;) || &#39;&#39;;
  } catch(e){
    // UI16
    // if $sp causes an error cause its not defined do this
    return RP.getParameterValue(&#39;var_short_description&#39;);
  }
})()</code></pre>
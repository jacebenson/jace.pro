---
aliases:
- '/contact/'
date: '2018-08-16 22:05:54 +0000'
layout: page
title: Contact me
url: '/contact/'
---
<!--
<form class="form-horizontal" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
-->
<form class="form-horizontal" name="contact" method="POST" action="https://ea7sbyfo74.execute-api.us-east-1.amazonaws.com/dev/" >

  <input type="hidden" name="_to" value="27b1ee301d101ae72dfa12">
<fieldset>
<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="email">Email</label>  
  <div class="col-md-4">
  <input id="email" name="email" type="text" placeholder="someone@example.com" class="form-control input-md" required="">
    
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="message">Message</label>
  <div class="col-md-4">                     
    <textarea class="form-control" id="message" name="message"></textarea>
  </div>
</div>
<!-- -->
<input type="text" name="_honeypot" value="" style="display:none">
<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="submit"></label>
  <div class="col-md-4">
  <input type="submit" value="send" class="btn btn-primary" />
  </div>
</div>

</fieldset>
</form>
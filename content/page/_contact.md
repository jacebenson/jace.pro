---
aliases:
- '/contact/'
date: '2018-08-16 22:05:54 +0000'
layout: page
title: Contact me
url: '/contact/'
---
<form class="form-horizontal" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">

<fieldset>

<!-- Form Name -->
<legend>Contact me</legend>

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

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label" for="submit"></label>
  <div class="col-md-4">
    <button type="submit" id="submit" name="submit" class="btn btn-primary">Submit</button>
  </div>
</div>
  <div data-netlify-recaptcha="true"></div>

</fieldset>
</form>
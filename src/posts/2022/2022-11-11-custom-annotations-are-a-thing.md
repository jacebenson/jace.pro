---
title: Form annotations let you add html to workspaces and other UIs
description: "A\uFEFF long time ago Casey on Slack said you can make custom annotations.  I was looking at them and wonder WHY would I ever use them.  I know now when and why I..."
date: '2022-11-12'
tags:
  - ui-actions
  - notifications
  - html
  - tutorial
  - security
redirectFrom:
  - /custom-annotations-are-a-thing/
  - /p/2022-11-11-custom-annotations-are-a-thing/
---

A﻿ long time ago Casey on Slack said you can make custom annotations.  I was looking at them and wonder WHY would I ever use them.  I know now when and why I might use this.  

Have you ever been asked to add a link on a form to some other site or maybe some helpful text for a field but you needed better control.  This lets you take control of the page without UI Macros and Formatters!

This works on UI16/Next Experiences

![](/assets/images/annotation-ui16-next.png)

This works on workspaces

![](/assets/images/annotation-workspace.png)

I﻿ wanted my annotation to look nice so I figured out how to make this look nice.  So Here's my steps.  

F﻿irst you need to create a custom annotation to let you're annotations look good.  Otherwise they get styled in a wide way that just looks bad to me.

I﻿ tried to set the style to simplify the HTML but nothing seemed to work and I left that empty.

N﻿ext you just add the annotation to your form.  You need to use Form Layout, not Form Design and this is because you cannot access the HTML value for the annotation from Form Design.

T﻿hen just paste this in your html and put your code starting at the `<a>` tag below.

```
<label dir="ltr"
  class=" col-xs-12 col-md-3 col-lg-4 control-label">
</label>
<div class="col-xs-10 col-sm-9 col-md-6 col-lg-5 form-field input_controls">
  <div class="fieldmsg-container" aria-live="polite">
    <div class="fieldmsg notification notification-info">
      <a href="https://jace.pro">Jace's link</a>
      🙌
    </div>
  </div>
</div>
```

P﻿S. You can add onclick attributes and access g_form directly.  So you could do some targeted setting of fields or special buttons for consistency without taking the space of UI Actions.

P﻿PS. You can also wrap your put ${current.getValue('caller_id')} as well and that works on UI16/Next See Chuck Tomasi talks about it on [Youtube](https://youtu.be/Jzpv9IdI8aY?t=2784)
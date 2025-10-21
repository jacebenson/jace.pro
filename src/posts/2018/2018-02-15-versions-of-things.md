---
title: ' Versions of libraries'
description: "Sometimes you just want to know the versions of software you're using.\r\n\r\nxml\r\n<j:jelly trim=\"true\" xmlns:j=\"jelly:core\" xmlns:g=\"glide\" xmlns:g2=\"null\" xmln..."
date: '2018-02-16'
tags:
  - servicenow
  - service-portal
  - javascript
  - angular
  - css
  - html
  - xml
redirectFrom:
  - /versions-of-things/
---

Sometimes you just want to know the versions of software you're using.

```xml
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">
    <g:inline template="ng_head_inline_script.xml" />
    <g:requires name="scripts/angular_includes_1.4.js" includes="true" />
    <g:requires name="styles/css_includes_doctype.css" includes="true" />
    <g:requires name="scripts/lib/jquery_includes.js" />
    <g:requires name="styles/heisenberg/heisenberg_all.css" includes="true" />
    <g:requires name="scripts/heisenberg/heisenberg_all.js" />
    <g:evaluate>
        var midVersion = gs.getProperty('mid.version').split('-')[0].toLowerCase();
        var ecma3Versions = [
          'geneva',
          'fuji',
          'eureka',
          'dublin',
          'calgary',
          'berlin'
        ];
        var ecma3 = (function (){
          for(var version in ecma3Versions){
            if(midVersion == version){
              return true;
            }
          }
          return false;
        })();

        //var currentContext = Context.getCurrentContext(),
        //var rhinoVersion = currentContext.getImplementationVersion();
        if(ecma3){
          rhinoVersion = "Unknown ECMA3 ES3";//https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Download_Rhino
        } else {
          rhinoVersion = "1.7 R5 ECMA5 ES5";
        }
    </g:evaluate>
    <script>
        jQuery( document ).ready(function() {
        if (typeof jQuery != 'undefined') {
            jQuery("#jQueryVersion").text(jQuery.fn.jquery);
            if (typeof angular != 'undefined') {
                jQuery('#angularVersion').text(angular.version.full);
            }
        }
        });

    </script>

    <div class="container">
    <div class="row">
        <div class="col-md-6">Instance Version:</div>
        <div id="rhinoVersion" class="col-md-6">${midVersion}</div>
    </div>
    <div class="row">
        <div class="col-md-6">Rhino version:</div>
        <div id="rhinoVersion" class="col-md-6">${rhinoVersion}</div>
    </div>
    <div class="row">
        <div class="col-md-6">jQuery version:</div>
        <div id="jQueryVersion" class="col-md-6">...</div>
    </div>
    <div class="row">
        <div class="col-md-6">Angular version:</div>
        <div id="angularVersion" class="col-md-6"></div>
    </div>
    <div class="row">
        <div class="col-md-6">Bootstrap version:</div>
        <div id="bootstrapversion" class="col-md-6"><a href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/build/service-portal/concept/portal-css.html">3.3.6</a></div>
    </div>
    </div>


</j:jelly>
```
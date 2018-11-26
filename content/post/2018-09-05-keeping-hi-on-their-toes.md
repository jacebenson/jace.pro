---
title: Keeping HI on their toes
author: jace
layout: post
date: 2018-09-05 12:52:16 -0500
category: []
tags: []
aliases: []

---
So more often now then before I have to open HI tickets and I just loathe how they've restricted the views and fields and the sorting.

So I wrote a userscript (useable with plugins like tampermonkey) to give me a consistent list of things not updated in the time I want, or updated by someone other than me.

<!--more-->

![](/uploads/2018-09-05-keeping-hi-on-their-toes.png)

Here's the [script](https://openuserjs.org/scripts/jacebenson/Get_HI_Updated_by_not_me/source).

```js
// ==UserScript==
// @name         Get HI Updated by not me
// @namespace    https://hi.service-now.com/
// @version      0.2
// @description  Servicenow - Show incidents updated by not you as messages
// @author       You
// @match        https://hi.service-now.com/*
// @grant        none
// @license      MIT
// @updateURL https://openuserjs.org/meta/jacebenson/Get_HI_Updated_by_not_me.meta.js
// @copyright 2018, jacebenson (https://openuserjs.org/users/jacebenson)
// ==/UserScript==

/* global jQuery, g_ck*/
jQuery(document).ready(function(){

    var updatePollTimeinMS = 1000*60*.5;//
    var keepPolling = true; // polls every so many seconds
    var showAsMessage = false; // shows a message on main form
    var showAsMenu = true; // shows on left with tooltips
    jQuery('.contactLink').prop('id','userscript-tickets');
    jQuery('.contactLink').addClass('list-group');
    jQuery('.contactLink').prop('style','line-height:13px');
    window.askForUpdate=function(sysid){
        var requestBody = JSON.stringify({
            comments: "Any update on this?"
        });
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", '/api/now/table/task/' + sysid);
        xhr.setRequestHeader("X-UserToken", g_ck);
        xhr.setRequestHeader("accept", "application/json");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
            }
        });
        xhr.send(requestBody);
    }
    function checkUnread() {
        var data = null;
        var daysAgo = 4;
        var query = '';
        query+= 'sys_updated_byNOT%20LIKEjavascript:gs.getUser().getEmail().split("@")[1]^';
        query+= 'active=true^NQ';
        query+= 'sys_updated_onRELATIVELE@dayofweek@ago@' + daysAgo + '^';
        query+= 'active=true';
        query+= '&sysparm_fields=number,short_description,sys_id,sys_class_name,sys_updated_by,sys_updated_on';
        var xhr = new XMLHttpRequest();
        xhr.open("GET", '/api/now/table/task?sysparm_query=' + query);
        xhr.setRequestHeader("X-UserToken", g_ck);
        xhr.setRequestHeader("accept", "application/json");
        xhr.setRequestHeader("content-type", "application/json");
        jQuery('.contactLink').prop('id','userscript-tickets');
        jQuery('.contactLink').addClass('list-group');
        jQuery('.contactLink').prop('style','line-height:13px');
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                jQuery("#uiNotificationContainer").empty();
                //console.log(this.responseText);
                var obj = JSON.parse(this.responseText);
                var notifications = obj.result.length;
                var html = '';
                var menuHtml = '';
                obj.result.map(function(record){
                    var link = 'https://hi.service-now.com/hisp?id=form&table=' +record.sys_class_name+ '&sys_id=' + record.sys_id;
                    var linkOther = 'https://hi.service-now.com/' +record.sys_class_name+ '.do?sys_id=' + record.sys_id;

                    menuHtml += '<div class="list-group-item list-group-item-action list-group-item-warning">\n';
                    menuHtml += '  <div class="row">\n';
                    menuHtml += '    <a class="" href="' + link + '">' + record.number + '</a>\n';
                    menuHtml += '    <a class="" href="' + linkOther + '">(other)</a>\n';
                    menuHtml += '    <a onclick="askForUpdate(\''+record.sys_id+'\')" href="#">Ask</a>';
                    menuHtml += '  </div>\n';
                    menuHtml += '  <div class="row">\n';
                    menuHtml += '    <span class="">' + record.sys_updated_by.substring(0,5) + ' updated on ';
                    menuHtml += '    ' + record.sys_updated_on.toString().split(' ')[0] + '</span>\n';
                    menuHtml += '  </div>\n';
                    menuHtml += '  <div class="row">\n';
                    menuHtml += '    <span class="">' + record.short_description.substring(0,34) + '...</span>';
                    menuHtml += '  </div>\n';
                    menuHtml += '</div>';

                    /*
                    menuHtml += '<div id="user-script-'+record.number+'" style="height:15px;">';
                    menuHtml += '  <a class="whiteText" href="' + link + '" data-toggle="tooltip" title="'+record.short_description+'">' + record.number + '</a>';
                    menuHtml += '  <a class="whiteText" href="' + linkOther + '">(other)</a>';
                    menuHtml += '  <a onclick="askForUpdate(\''+record.sys_id+'\')" href="#">Ask</a>';
                    menuHtml += record.sys_updated_by;
                    menuHtml += '</div>';
                    */
                    html += '<div id="user-script-'+record.number+'" class="alert alert-success">';
                    html += '  <a href="' + link + '">' + record.number + ' ' + record.short_description + '</a>';
                    html += '  <a href="' + linkOther + '">(other)</a>';
                    html += '  <button class="btn btn-link fa fa-close dismiss-notifications" onClick="';
                    html += 'jQuery(\'#user-script-' + record.number +'\').remove()';
                    html += '" role="button"></button>';
                    html += '</div>';
                });
                if(showAsMessage){
                    jQuery('#uiNotificationContainer').html(html);
                }
                if(showAsMenu){
                    jQuery('#userscript-tickets').html(menuHtml);
                }
                document.title = "(" + notifications + ") Updates";
            }
        });
        xhr.send(null);}

    var originalTitle = document.title;
    setTimeout(checkUnread, 10000);
    if(keepPolling){
    setInterval(checkUnread, updatePollTimeinMS);
    }

});
```

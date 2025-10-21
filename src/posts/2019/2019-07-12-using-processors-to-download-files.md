---
title: Using Processors to download files
description: >-
  I was talking to Nthumma about a problem. It was the need for a custom XML
  file for each incident. I knew of a way to do this, but it's old. Enter
  Processors...
date: '2019-07-12'
tags:
  - servicenow
  - gliderecord
  - ui-actions
  - javascript
  - html
  - xml
  - tutorial
  - troubleshooting
  - integration
redirectFrom:
  - /using-processors-to-download-files/
---

<!--StartFragment-->

I was talking to Nthumma about a problem. It was the need for a custom XML file for each incident. I knew of a way to do this, but it's **old**. Enter Processors.

If you ever have a need to make something auto-download, that would seem pretty difficult as you need to set headers as mentioned [here on StackOverlow](https://stackoverflow.com/questions/386845/http-headers-for-file-downloads#386904).

With processors this is a non-issue. Here's how to do it.

<!--EndFragment-->

<!--StartFragment-->

```javascript
// Processor code
(function process(g_request, g_response, g_processor) {
    try{
    var filter = g_request.getParameter("filterQuery");
    var fileName = filter + '.xml';
    var contentType = 'xml/plain';
    var fileContent = '';
    var incident = new GlideRecord('incident');
    incident.addEncodedQuery(filter);
    incident.query();
    fileContent+='<root>';
    while(incident.next()) {
        //generate XML format
        fileContent+='<record>';
        fileContent+='<message-type>'+ incident.getValue('short_description')+'</message-type>';
        fileContent+='</record>';
    }
    fileContent+='</root>';
    if(contentType == 'xml/plain'){
        fileContent = new XMLDocument(fileContent);
    }
    g_response.addHeader('Content-Disposition', 'attachment;filename=' + fileName);
    g_processor.writeOutput(contentType,fileContent);
    } catch(error){
        g_processor.writeOutput('text/html',error);
    }
})(g_request, g_response, g_processor);
```

<!--EndFragment-->

<!--StartFragment-->

## UI Action

<!--EndFragment-->

<!--StartFragment-->

```javascript
// Client side ui action
downloadXML();
function downloadXML() {
    var sysparm_query = g_list.getQuery({orderby: true, fixed: true});
    var url = '/customprocessor.do?filterQuery='+sysparm_query;
    window.open(url, "_blank");
}
```

<!--EndFragment-->

<!--StartFragment-->

Thanks Nthumma for the idea to make this post and the code above.

Further Reading;

* <http://www.john-james-andersen.com/blog/service-now/create-your-own-rest-based-servicenow-web-service.html>
* <https://www.servicenowguru.com/scripting/download-attachments-zip-file/>



<!--EndFragment-->
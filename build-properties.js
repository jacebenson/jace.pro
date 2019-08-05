require('dotenv').config()
var http = require('https');
var fs = require('fs');
var options = {
  "method": "GET",
  "hostname": process.env.INSTANCE,
  "port": null,
  "path": "/api/now/table/sys_properties?sysparm_fields=sys_name%2Cvalue%2Cdescription",
  "headers": {
    "authorization": "Basic " + Buffer.from(process.env.INSTANCEUSERNAME + ":" + process.env.INSTANCEPASSWORD).toString("base64")
  }
};
var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    //console.log(body.toString());
    var responseObj = JSON.parse(body.toString());
    //console.log(responseObj);
    responseObj.result.forEach(function(property, index){
      console.log(property);
      if(property.sys_name){
        property.sys_name = property.sys_name.replace(/\//gm,'');
      }
      if(property.description){
        property.description = property.description.replace( /\n+/gm, ' ');// Replace new lines with spaces
        property.description = property.description.replace( /\"/gm, '\'');// Replace " wit '
        // property.description = property.description.replace(/<\/?[^>]+(>|$)/g, "");//Remove HTML Tags
        property.description = property.description.replace(/\\/g, "\\\\");// Replace \ with \\
        //property.description = property.description.replace( /[\s\s]+/gm, ' ');
      } else {
        property.description = "";
      }
      if(property.value){
      } else {
        property.value = "";
      }
      var content = `---
layout: page
title: ${property.sys_name}
description: "${property.description}"
---
${property.value}`

// look for file
      fs.writeFile("./content/properties/" + property.sys_name + ".md", content, function(error){
        if(error){
          return console.log(error);
        }
      });
    })
  });
});

req.end();
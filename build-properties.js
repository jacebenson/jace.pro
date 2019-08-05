require('dotenv').config()
var http = require('https');
var fs = require('fs');
var options = {
  "method": "GET",
  "hostname": process.env.INSTANCE,
  "port": null,
  "path": "/api/now/table/sys_properties?sysparm_fields=sys_name%2Cvalue%2Cdescription^ORDERBYsys_name",
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
    var dateToStart = new Date();
    responseObj.result.forEach(function(property, index){
      date = new Date(dateToStart.getDate() + index);
      date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +date.getDate();
      console.log(property.sys_name);
      console.log(property.value);
      console.log(property.description);
      if(property.sys_name){
        property.sys_name = property.sys_name.replace(/\//gm,'');
      }
      if(property.description){
        property.description = property.description.replace( /[\:\n]+/gm, ' ');
        //property.description = property.description.replace( /[\s\s]+/gm, ' ');
      } else {
        property.description = "";
      }
      if(property.value){
        if(property.sys_name.indexOf('regex')>=0){
          property.body = property.value.toString();
          property.value = "See page";
        }
        property.value = property.value.replace( /[\"]+/gm, '\\"');
      } else {
        property.value = "";
      }
      var content = `---
weight: ${index}
layout: page
title: ${property.sys_name}
description: "${property.description}"
value: "${property.value}"
---`
if(property.body){
  content += '\n' + property.body;
}
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
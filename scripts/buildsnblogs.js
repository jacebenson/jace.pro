//https://community.servicenow.com/api/sn_communities/v1/community/contents?last=80&stFrom=60&before=2020-03-22T01:40:59.443Z&forum=a6299a2ddbd897c068c1fb651f961926&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined

// make a rest call here....
// parse the xml
// build the 
var http = require('http');

http.get({
    hostname: 'localhost',
    port: 80,
    path: '/',
    agent: false  // Create a new agent just for this one request
  }, (res) => {
    // Do stuff with response
  });
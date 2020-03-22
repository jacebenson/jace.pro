var http = require("https");
var fs = require("fs");
var outputArr = [];
//https://community.servicenow.com/
//api/sn_communities/v1/community/contents?
//
var getNowBlogs = function(urlParams, callback){
    if(!urlParams){
        urlParams = {
            last: 20,
            stFrom:0
        }
    }
    var options = {
        method: "GET",
        hostname: "community.servicenow.com",
        //path: "/api/sn_communities/v1/community/contents?last=80&stFrom=60&before=&forum=a6299a2ddbd897c068c1fb651f961926&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined",
        path: "/api/sn_communities/v1/community/contents?last="+urlParams.last+"&stFrom="+urlParams.stFrom+"&before="+new Date().toISOString()+"&forum=a6299a2ddbd897c068c1fb651f961926&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Host": "community.servicenow.com",
            //"Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive",
            "cache-control": "no-cache",
            "content-type": 'application/json; charset=utf-8'
        }
    };
    //var recurseHttpRequest = function();
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            //console.log(body.toString());
            var responseObj = JSON.parse(body);
            console.log(JSON.stringify(responseObj.result, '', ' '));
            console.log('all feeds loaded, writing to feeds.json');
            // loop over the contens and distill it to;
            // author
            // link
            // date nnnTdddZ format
            // 
            
            responseObj.result.contents.forEach(function(post){
                var dateObj = new Date(post.published_date);
                outputArr.push ({
                    date: dateObj.toISOString(),
                    site: "ServiceNow Community Blogs",
                    category: "Blog",
                    title: post.title,
                    author: post.userAvatarObject.name,
                    link: "https://community.servicenow.com" + post.url
                });
            });
            if(responseObj.hasMoreRecords){
                getNowBlogs({
                    last:parseInt(responseObj.nextRecord,10) + 20,
                    stFrom:parseInt(responseObj.nextRecord,10)
                },null);
            }
            callback();
        });
    });
    req.end(); 
}
getNowBlogs(null,function(){
    fs.readFile('./data/snblogs.json', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
        var tempData = JSON.parse(data);
        var newArr = tempData.concat(outputArr);
        var uniqueArray = newArr.filter(function(item, pos) {
            return newArr.indexOf(item) == pos;
        })
        fs.writeFileSync('./data/snblogs.json', JSON.stringify(uniqueArray, '', ' '));
      });
});

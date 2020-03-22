var http = require("https");
var fs = require("fs");
var outputArr = [];
//https://community.servicenow.com/
//api/sn_communities/v1/community/contents?
//
var getNowBlogs = function(start, callback){
    if(!start){
        start = 0;
    }
    console.log('getting blogs starting at ', start)
    var end = parseInt(start,10) + 100;
    var options = {
        method: "GET",
        hostname: "community.servicenow.com",
        //path: "/api/sn_communities/v1/community/contents?last=80&stFrom=60&before=&forum=a6299a2ddbd897c068c1fb651f961926&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined",
        path: "/api/sn_communities/v1/community/contents?last="+end+"&stFrom="+start+"&before="+new Date().toISOString()+"&forum=a6299a2ddbd897c068c1fb651f961926&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined",
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
            
            responseObj.result.contents.forEach(function(post){
                var dateObj = new Date(post.published_date);
                outputArr.push ({
                    date: dateObj.toISOString(),
                    site: "ServiceNow Blogs",
                    category: "Blog",
                    title: post.title,
                    author: post.userAvatarObject.name,
                    link: "https://community.servicenow.com/community?id=community_blog&sys_id=" + post.sys_id
                });
            });
            console.log('responseObj.hasMoreRecords',responseObj.result.hasMoreRecords, responseObj.result.contents[0].published_date, responseObj.result.contents[0].title);
            if(responseObj.result.hasMoreRecords){
                getNowBlogs(parseInt(responseObj.result.nextRecord,10),function(){
                    console.log('outputArr.length',outputArr.length)
                });
            } else {
                callback();
                //function(){
                    fs.readFile('./data/feeds.json', (err, data) => {
                        if (err) {
                            throw err;
                        }
                        console.log(data);
                        var tempData = JSON.parse(data);
                        var newArr = tempData.concat(outputArr);
                        var uniqueArray = newArr.filter(function(item, pos) {
                            return newArr.indexOf(item) == pos;
                        })
                        fs.writeFileSync('./data/feeds.json', JSON.stringify(uniqueArray, '', ' '));
                      });
                //}
            }
        });
    });
    req.end(); 
}
getNowBlogs(null,null);

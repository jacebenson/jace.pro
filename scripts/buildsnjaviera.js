var http = require("https");
var fs = require("fs");
var outputArr = [];
// get count to start...
var getNowBlogs = function(start, callback){
    if(!start){
        start = 0;
    }
    var end = parseInt(start,10) + 1000;
    var options = {
        method: "GET",
        hostname: "community.servicenow.com",
        path: "/api/sn_communities/v1/community/contents?last="+end+"&stFrom="+start+"&before="+new Date().toISOString()+"&forum=&type=5eaa334a5f10030069c587dc3f73130b&user=5c101a25db581fc09c9ffb651f961978&state=all&filters=undefined",
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
            
            console.log((start,'/',responseObj.result.nextRecord), 'ServiceNow Community')
            responseObj.result.contents.forEach(function(post){
                var dateObj = new Date(post.published_date);
                outputArr.push ({
                    date: dateObj.toISOString(),
                    site: "ServiceNow Blogs",
                    category: "Blog",
                    title: post.title,
                    author: post.userAvatarObject.name,
                    link: "https://community.servicenow.com/community?id=community_article&sys_id=" + post.sys_id
                });
            });
            
            if(responseObj.result.hasMoreRecords){
                getNowBlogs(parseInt(responseObj.result.nextRecord,10),function(){
                    console.log('outputArr.length',outputArr.length)
                });
            } else {
                    fs.readFile('./data/feeds.json', (err, data) => {
                        if (err) {
                            throw err;
                        }
                        //console.log(data);
                        var tempData = JSON.parse(data);
                        var newArr = tempData.concat(outputArr);
                        var uniqueArray = newArr.filter(function(item, pos) {
                            return newArr.indexOf(item) == pos;
                        })
                        fs.writeFileSync('./data/feeds.json', JSON.stringify(uniqueArray, '', ' '));
                      });
            }
        });
    });
    req.end(); 
}
getNowBlogs(null,null);

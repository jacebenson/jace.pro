var http = require("https");
var fs = require("fs");
var outputArr = [];
// get count to start...
var getNowQuestions = function(start, callback){
    console.log('starting');
    if(!start){
        start = 0;
    }
    var end = parseInt(start,10) + 100;
    var options = {
        method: "GET",
        hostname: "community.servicenow.com",
        //path: "/api/sn_communities/v1/community/contents?last=80&stFrom=60&before=&forum=a6299a2ddbd897c068c1fb651f961926&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined",
        // https://community.servicenow.com/api/sn_communities/v1/community/contents?all=true&type=cc3fcaa0dbd26600b1f6f78eaf96192e&forum=a6299a2ddbd897c068c1fb651f961926&last=10000
        path: "/api/sn_communities/v1/community/contents?last="+end+"&stFrom="+start+"&before="+new Date().toISOString()+"&type=5a2fcaa0dbd26600b1f6f78eaf9619a8&sort=publish&filters=undefined",
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
            console.log(body.toString());
            var responseObj = JSON.parse(body);
            
            console.log((start,'/',responseObj.result.nextRecord), 'ServiceNow Community')
            responseObj.result.contents.forEach(function(post){
                
                outputArr.push ({
                    created: new Date(post.published_date).toISOString(),
                    updated: new Date(post.updated_date).toISOString(),
                    category: "Question",
                    title: post.title,
                    author: post.userAvatarObject.name,
                    link: "https://community.servicenow.com/community?id=community_question&sys_id=" + post.sys_id,
                    replies: post.number_of_replies,
                    forum: post.forum.name
                });
            });
            var nextNumber = parseInt(responseObj.result.nextRecord,10);
            if(nextNumber<200){
            //if(responseObj.result.hasMoreRecords || parseInt(responseObj.result.nextRecord,10)>=100){
                getNowQuestions(parseInt(responseObj.result.nextRecord,10),function(){
                    console.log('outputArr.length',outputArr.length)
                });
            } else {
                callback();
                //function(){
                    fs.writeFile('./data/questions.json', '[]', (err) => {
                        if(err){throw err;}

                    fs.readFile('./data/questions.json', (err, data) => {
                        if (err) {
                            throw err;
                        }
                        //console.log(data);
                        var tempData = JSON.parse(data);
                        var newArr = tempData.concat(outputArr);
                        var uniqueArray = newArr.filter(function(item, pos) {
                            return newArr.indexOf(item) == pos;
                        })
                        uniqueArray.sort(function(a,b){
                            return parseInt(b.replies,10) - parseInt(a.replies,10);
                        });
                        fs.writeFileSync('./data/questions.json', JSON.stringify(uniqueArray, '', ' '));
                    });
                });
                      

                //}
            }
        });
    });
    req.end(); 
}
getNowQuestions(null,null);

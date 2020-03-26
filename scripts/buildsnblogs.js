var http = require("https");
var fs = require("fs");
var fse = require("fs-extra");
//var TurndownService = require('turndown');
//var turndownService = new TurndownService()
var outputArr = [];
// get count to start...
var getNowBlogs = function (start, callback) {
    if (!start) {
        start = 0;
    }
    var end = parseInt(start, 10) + 1000;
    var options = {
        method: "GET",
        hostname: "community.servicenow.com",
        //path: "/api/sn_communities/v1/community/contents?last=80&stFrom=60&before=&forum=a6299a2ddbd897c068c1fb651f961926&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined",
        // https://community.servicenow.com/api/sn_communities/v1/community/contents?all=true&type=cc3fcaa0dbd26600b1f6f78eaf96192e&forum=a6299a2ddbd897c068c1fb651f961926&last=10000
        path: "/api/sn_communities/v1/community/contents?last=" + end + "&stFrom=" + start + "&before=" + new Date().toISOString() + "&type=cc3fcaa0dbd26600b1f6f78eaf96192e&sort=publish&filters=undefined",
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
            try{
            var body = Buffer.concat(chunks);
            //console.log(body.toString());
            var responseObj = JSON.parse(body);
            console.log((start, '/', responseObj.result.nextRecord), 'ServiceNow Community');
            responseObj.result.contents.forEach(function (post) {
                var postOptions = JSON.stringify(options);
                postOptions = JSON.parse(postOptions);
                postOptions.path = "/api/sn_communities/v1/community/contents/" + post.sys_id + "?content_type=cc3fcaa0dbd26600b1f6f78eaf96192e";

                //console.log(post);

                var postReq = http.request(postOptions, function (postRes) {
                    var postChunks = [];
                    postRes.on("data", function (postChunk) {
                        postChunks.push(postChunk)
                    })
                    postRes.on("end", function () {

                            var postBody = Buffer.concat(postChunks);
                            var postResponseObj = JSON.parse(postBody);
                            postResponseObj = postResponseObj.result.data[0]
                            //console.log(JSON.stringify(postResponseObj, '', ' '));
                            //lets make a file;
                            //create tiem
                            //title
                            //author
                            //body
                            //console.log(postResponseObj.title);
                            var pubDate = new Date(postResponseObj.published_date);
                            var yearPath = './content/news/' + pubDate.getFullYear() + '/';
                            var author = postResponseObj.userAvatarObject.name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
                            var month = (function () {
                                var returnMonth = '';
                                var monthVal = pubDate.getMonth() + 1;
                                if (monthVal.toString().length === 2) {
                                    returnMonth = monthVal.toString();
                                } else {
                                    returnMonth = '0' + monthVal.toString();
                                }
                                return returnMonth;
                            })()
                            var date = (function () {
                                var returnDate = '';
                                var dateVal = pubDate.getDate() + 1;
                                if (dateVal.toString().length === 2) {
                                    returnDate = dateVal.toString();
                                } else {
                                    returnDate = '0' + dateVal.toString();
                                }
                                return returnDate;
                            })()

                            var title = post.title.substring(0, 15);
                            title = title.toLowerCase();
                            title = title.replace(/[^a-zA-Z0-9]/g, "-");
                            var filepath = yearPath;
                            filepath += month + '-' + date + '-';
                            filepath += author + '-';
                            filepath += title;
                            filepath += '.md';
                           // try {
                            var postDescription = '---\n';
                            postDescription += 'title: "' + post.title.replace(/[^a-zA-Z\s]/g, '') + '"\n';
                            postDescription += 'date: ' + pubDate.toISOString() + '\n'
                            postDescription += 'authors: ["'+postResponseObj.userAvatarObject.name+'"]\n'; 
                            postDescription += 'link: "' + 'https://community.servicenow.com/community?id=community_blog&sys_id=' + post.sys_id + '"\n';
                            postDescription += '---\n';
                            //postDescription += turndownService.turndown(postResponseObj.description);
                            var newImageUrl = `https://community.servicenow.com$1`;
                            var rewrittenDescription = postResponseObj.description.replace(/(\/[a-z0-9]{32}.iix)/gm, newImageUrl)
                            postDescription += rewrittenDescription
                            // look for directory
                            if(fs.existsSync(yearPath + '_index.md')===false){
                                fse.outputFile(yearPath + '_index.md','---\ntitle: "year"\n---', (err)=>{
                                    if (err) {
                                        throw err;
                                    }
                                })
                            }
                            fse.outputFile(filepath, postDescription, (err) => {
                                if (err) {
                                    throw err;
                                }
                                //console.log(data);
                                //fs.writeFileSync(filepath, JSON.stringify(uniqueArray, '', ' '));
                            });
                        
                    });
                });
                postReq.end();
                var dateObj = new Date(post.published_date);
                outputArr.push({
                    date: dateObj.toISOString(),
                    site: "ServiceNow Blogs",
                    category: "Blog",
                    title: post.title,
                    author: post.userAvatarObject.name,
                    link: "https://community.servicenow.com/community?id=community_blog&sys_id=" + post.sys_id
                });
            });

            if (responseObj.result.hasMoreRecords) {
                getNowBlogs(parseInt(responseObj.result.nextRecord, 10), function () {
                    console.log('outputArr.length', outputArr.length)
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
                    var uniqueArray = newArr.filter(function (item, pos) {
                        return newArr.indexOf(item) == pos;
                    })
                    fs.writeFileSync('./data/feeds.json', JSON.stringify(uniqueArray, '', ' '));
                });
                //}
            }
            }catch(e){
                console.log('catch error', e);
            }
        });
    });
    req.end();
}
getNowBlogs(null, null);

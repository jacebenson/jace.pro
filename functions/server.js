'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const feeds = require('../feeds');

const router = express.Router();
router.get('/', (req, res) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.path);
    console.log(JSON.stringify(req.query));
    var startDate = new Date();
    startDate.setDate(startDate.getDate()-30);
    if(req.query.start){
        console.log('start defined');
        startDate = new Date(req.query.start);
    }
    var endDate = new Date(startDate.toISOString());
    endDate.setDate(startDate.getDate()+30);
    if(req.query.end){
        console.log('end defined');
        endDate = new Date(req.query.end);
    }

    //feeds.length=10;

    console.log('startDate', startDate);
    console.log('endDate', endDate)
    var filteredFeeds = feeds.filter(function (feed) {
        var feedDate = new Date(feed.date);
        var feedDateBeforeEnd = feedDate<=endDate;
        var feedDateAfterStart = feedDate>=startDate;
        //console.log('feed', feed.site, feed.title.substring(0,10), 'feedDate', feedDate, 'afterStart', feedDateAfterStart, 'beforeEnd', feedDateBeforeEnd);
        if (feedDateBeforeEnd && feedDateAfterStart) {
            return true;
        } else {
            return false;
        }
    });
    filteredFeeds.sort(function(a,b){
        var adate = new Date(a.date);
        var bdate = new Date(b.date);
        return bdate - adate;
      })
    var obj = {
        test: "val",
        //feeds: feeds,
        filteredFeeds: filteredFeeds
    }
    res.write(JSON.stringify(obj));
    res.end();
});
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
//app.use('/', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
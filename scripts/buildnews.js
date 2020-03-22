let Parser = require('rss-parser');
let parser = new Parser();
const fs = require('fs');


let feeds = [
    { "title": "An Errant Programmer", "type": "Blog", "url": "http://anerrantprogrammer.com/?feed=rss2" },
    { "title": "An Errant Programmer", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UC2ey_HG743-CrxOTPU_ft7g" },
    { "title": "Andrew Albury-Dor", "type": "Blog", "url": "https://andrew.alburydor.com/posts/index.xml"},
    { "title": "Andrew Albury-Dor", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCH1byb2cbzlFrYndyKic_Lg" },
    { "title": "Ben Hollifield", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCpXBKCVchJqXo08OyD0i2eQ" },
    { "title": "ServiceNow Elite", "type": "Blog", "url": "http://www.servicenowelite.com/blog?format=rss" },
    { "title": "CloudMinus89", "type": "Blog", "url": "http://www.cloudminus89.com/feeds/posts/default?alt=rss" },
    { "title": "Code Creative", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCmwKZdMYyUD4AWnAIrx5JVw" },
    { "title": "Code Creative", "type": "Blog", "url": "https://codecreative.io/index.xml" },
    { "title": "Shiva Thomas", "type": "Blog", "url": "https://servicenow.implementation.blog/feed/" },
    { "title": "Goran Lundqvist", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCUJK90r6dnu-YXHyDOVIRww" },
    { "title": "John James Andersen", "type": "Blog", "url": "http://john-james-andersen.com/feed" },
    { "title": "Mark Scott", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCysyuAe0q31GOOedkJja67Q" },
    { "title": "Mav", "type": "Blog", "url": "https://mavembry.info/index.xml" },
    { "title": "Robert, The Duke, Fedoruk", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCfhKNeCYiaJQaaKuACKt0Sg" },
    { "title": "CJ & The Duke", "type": "Podcast", "url": "https://feeds.transistor.fm/cj-the-duke" },
    { "title": "Jace Benson", "type": "Blog", "url": "https://jace.pro/index.xml" },
    { "title": "ServiceNow Dev Program", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCdXorgCT87YlFRN9n8oJ7_A" },
    { "title": "ServiceNow Developer Blog", "type": "Blog", "url": "https://developer.servicenow.com/blog.do?p=/index.xml" },
    { "title": "ServiceNow Gems", "type": "Blog", "url": "http://servicenowgems.com/feed" },
    { "title": "ServiceNow Community", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCCBQU8mlFrElxQNR2mo-gLg" },
    { "title": "ServiceNow Support", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCQjE37R-Y4DTq7kUWPO83Wg" },
    { "title": "ServiceNow Vimeo", "type": "Vimeo", "url": "https://vimeo.com/servicenow/videos/rss" },
    { "title": "Fruition Partners Vimeo", "type": "Vimeo", "url": "https://vimeo.com/user4353238/videos/rss" },
    { "title": "ServiceNow TechBytes Podcast", "type": "Podcast", "url": "https://omny.fm/shows/servicenow-techbytes/playlists/podcast.rss" },
    { "title": "ServiceNow Community Podcasts", "type": "Podcast", "url": "https://omny.fm/shows/servicenow-cloudcast/playlists/servicenow-podcasts.rss" },
    { "title": "ServiceNow Think", "type": "Blog", "url": "https://servicenowthink.wordpress.com/feed" },
    { "title": "Acorio - Candid Podcast", "type": "Podcast", "url": "https://feeds.buzzsprout.com/457558.rss" },
    { "title": "Finite Partners", "type": "Blog", "url": "https://finite-partners.com/feed" },
    { "title": "Sumo IT", "type": "Blog", "url": "https://hiresumo.com/home?format=rss" },
    { "title": "SNGuru", "type": "Blog", "url": "https://www.servicenowguru.com/feed/" },
    //{ "title": "Linium Blog", "type": "Blog", "url": "https://www.linium.com/blog/rss.xml" },
    //{ "title": "Plat4mation Blog", "type": "Blog", "url": "https://www.plat4mation.com/feed/" },
    { "title": "Covestic", "type": "Blog", "url": "https://www.covestic.com/feed/" },
    { "title": "Ahead LLC", "type": "Blog", "url": "https://www.thinkahead.com/feed" },
    { "title": "Aeritae Blog", "type": "Blog", "url": "https://aeritae.com/blog/feed" },
    { "title": "ServicePortal.io", "type": "Blog", "url": "https://serviceportal.io/feed" },
    { "title": "GlideFast", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCZNM56LyLhmba73FtDsyaAw"},
    { "title": "ServiceStart Podcast", "type": "Podcast", "url": "https://anchor.fm/s/a71217c/podcast/rss" },
    { "title": "Workflow", "type": "Newsletter", "url": "https://workflow.servicenow.com/feed/" },
    { "title": "SNProtips", "type": "Blog", "url": "https://snprotips.com/?format=rss" },
    { "title": "SNC-Blog", "type": "Blog", "url": "http://www.snc-blog.com/feed" },
    { "title": "SNDevelopment", "type": "Blog", "url": "https://sncdevelopment.com/feed" },
    { "title": "WomenNow", "type": "Blog", "url": "https://womennow.dev/?feed=rss2" },
    { "title": "Pathway", "type": "Blog", "url": "https://pathwayscg.com/feed/" },
    { "title": "Man Myth and Legend", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCT3ONLZwnTIfmVqRiDsRMVA" },
    { "title": "PhilGoesDeep", "type": "YouTube", "url": "https://www.youtube.com/feeds/videos.xml?channel_id=UCCTmjY6H5roYkGQmwAQAcgQ"}
    //{ "title": "Reddit", "type": "Questions", "url": "http://reddit.com/r/servicenow/.rss" },
    //{ "title": "StackOverflow", "type": "Questions", "url": "https://stackoverflow.com/feeds/tag?tagnames=servicenow&amp;sort=newest" },
];

(async () => {
    var outputObj = {
        feeds: [],
        news: []
    };
    var promises = [];
    feeds.forEach(function (rssFeed) {
        //let promise = await parser.parseURL('https://www.reddit.com/.rss');
        var promise = parser.parseURL(rssFeed.url, (error, feed) => {
            outputObj.feeds.push(rssFeed.title);
            console.log(outputObj.feeds.length, '/', feeds.length, rssFeed.title);
            //console.log(feed.items.length>0);
                feed.items.forEach(function(item) {
                    outputObj.news.push({
                        date: item.isoDate,
                        site: rssFeed.title,
                        category: rssFeed.type,
                        title: item.title,
                        link: item.link,
                        author: ""//item.author || item.creator || ""
                    });
                    //console.log(item);
                    //console.log(item.title + ':' + item.link);
                    // modify title to filename
                    // prepend domain to filename
                    //var filename = title.replace//all the non-a-z0 w/_
                    //console.log(JSON.stringify(item,'',' '));
                });
            
            if (outputObj.feeds.length === feeds.length) {
                console.log('all feeds loaded, writing to feeds.json', outputObj.news.length);
                fs.exists('./data/feeds.json', function(exists) {
                    if(exists) {//overwrite
                        console.log('updating feeds.json')
                        fs.writeFileSync('./data/feeds.json', JSON.stringify(outputObj.news, '', ' '));
                    } else {//create
                        console.log('creating feeds.json')
                        fs.writeFileSync('./data/feeds.json', JSON.stringify(outputObj.news, '', ' '));
                    }
                  });
                
            }
        });
        promises.push(promise);
    });



})();

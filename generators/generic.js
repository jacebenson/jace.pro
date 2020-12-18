require('dotenv').config()
const fs = require('fs')
const path = require('path')
const https = require('https')
const sharp = require('sharp')
let log = (message)=>{
  console.log(message);
}
let error = (errMessage)=>{
  console.error(errMessage);
}
let eleventySite = require("../.eleventy.js")()
let args = process.argv;
let doesFolderExist = (folderName, callback) => {
  fs.access(folderName, (error) => {
    if (error) {
      log("Directory Does not exist, creating")
      callback(folderName)
    } else {
      error("Directory exists, exiting")
    }
  })
}
let createFolder = (folderName, callback) => {
  //make folder lowercast and replace specials with -
  fs.mkdir(folderName, function (err) {
    if (err) {
      error(err)
    } else {
      log(folderName, " successfully created.")
      //pull image from pixabay
      callback()
    }
  })
}
let createIndex = (folderName) => {
  let filePath = path.join(folderName, 'index.md')
  /*if(arguments[1]){
    log('arguments[1]', arguments[1])
    log('....');
  }*/
  let content = `---
title: "${args[3]}"
subtitle: "A subtitle about ${args[3]}"
summary: "Summary of ${args[3]}"
date: ${new Date().toISOString()}
---

# ${args[3]}

`
  fs.writeFile(filePath, content, function (err) {
    if (err) throw err;
    log('Saved!');
  });
}
let createIndexWithorWithoutImage = (folderName,callback) => {
  //load env variables...
  //if PIXABAYUESER && PIXABAYPASS
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet']
  let things = [
    'animal',
    'building',
    'car',
    'computer',
    'phone',
    'paper'
  ]
  var randomThing = things[Math.floor(Math.random() * things.length)];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (process.env.PIXABAYKEY) {
    let endPointPath = `/api/?key=${process.env.PIXABAYKEY}&q=${randomThing}+${randomColor}&image_type=photo&pretty=true`
    let options = {
      hostname: 'pixabay.com',
      port: 443,
      path: endPointPath,
      method: 'GET'
    }
    log('trying to get stuff from... pixabay', options)
    var image
    var req = https.request(options, (res) => {
      //log(`STATUS: ${res.statusCode}`);
      //log(`HEADERS: ${JSON.stringify(res.headers)}`);
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        //log(`BODY: ${chunk}`);
        data += chunk
      });
      res.on('end', () => {
        log('No more data in response.');
        data = JSON.parse(data)
        //log(randomColor, randomThing, data.hits.length, data.hits[0])
        //we got a god result, and there is a result.
        let randomImage = data.hits[Math.floor(Math.random() * data.hits.length)];
        downloadImage(folderName, randomImage.largeImageURL, ()=>{
        
        let imagePath = path.join(folderName, 'featured.' + randomImage.largeImageURL.split('.')[randomImage.largeImageURL.split('.').length-1])
        let imageWebpPath = path.join(folderName, 'featured.webp')
        let imageWebpPathThumb = path.join(folderName, 'featured-thumbnail.webp')
        log('done w/downloadimage', imagePath)
        sharp(imagePath)
          .toFile(imageWebpPath, (err, info) => {log(info)})
          .resize(150)
          .toFile(imageWebpPathThumb, (err, info) => {log(info)})
        })
        createIndex(folderName, randomImage)
      });
    });
    
    req.on('error', (e) => {
      error(`problem with request: ${e.message}`);
    });
    
    req.end();
  } else {
    error("Pixabay auth details not set in .env, skipping")
    createIndex(folderName)
  }
}
let downloadImage = (folder, uri, callback) => {
  let url = new URL(uri);
  let options = {
    hostname: url.host,
    port: 443,
    path: url.pathname,
    method: 'GET'
  }
  log('trying to download file', options)
  var image
  var req = https.request(options, (res) => {
    //log(`STATUS: ${res.statusCode}`);
    //log(`HEADERS: ${JSON.stringify(res.headers)}`);
    let image = '';
    
    res.setEncoding('binary');
    res.on('data', (chunk) => {
      //log(`BODY: ${chunk}`);
      image += chunk
    });
    res.on('end', () => {
      log('No more data in response.');
      let imagePath = path.join(folder, 'featured.' + uri.split('.')[uri.split('.').length-1])
      fs.writeFile(imagePath, image, 'binary', function(err) {
        log('yay', imagePath, uri);
        callback()
      })
    });
  });
  
  req.on('error', (e) => {
    error(`problem with request: ${e.message}`);
  });
  
  req.end();
}









if (args[2] && args[3]) {
  let newFolderName = (() => {
    let today = new Date().toISOString().split('T')[0];
    return [today, args[3]].join('-');
  })().replace(/[^a-zA-Z0-9]/g,'-').toLowerCase();
  let folder = path.join(eleventySite.dir.input, args[2], newFolderName);
  error('folder', folder);
  //does directory already exist?
  //doesFolderExist(folder, () => {
  createFolder(folder, () => {
    createIndexWithorWithoutImage(folder, ()=>{
      log("DONE createIndexWithorWithoutImage!")
    });
  })
  //})
  /*
    
  */
} else {
  log("MISSING collection and file name")
}
/*
let filenames = fs.readdirSync(post);

log("\nFilenames in directory:");
filenames.forEach((file) => {
    log("File:", file);
}); */
/*
const content = 'Some content!'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})*/
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import https from 'https'
import {buildImages} from './buildImages.js'
dotenv.config()

let log = (message)=>{
  console.log(message);
}
let error = (errMessage)=>{
  console.error(errMessage);
}
let args = process.argv;
export let queryImage = (folderName, imageQuery, callback) => {
  //load env variables...
  //if PIXABAYUESER && PIXABAYPASS
  if (process.env.PIXABAYKEY) {
    let escapedImageQuery = encodeURIComponent(imageQuery)
    let endPointPath = `/api/?key=${process.env.PIXABAYKEY}&q=${escapedImageQuery}&image_type=photo&pretty=true`
    let options = {
      hostname: 'pixabay.com',
      port: 443,
      path: endPointPath,
      method: 'GET'
    }
    var req = https.request(options, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        data += chunk
      });
      res.on('end', () => {
        data = JSON.parse(data)
        let randomImage = data.hits[Math.floor(Math.random() * data.hits.length)];
        try{
          downloadImage(folderName, randomImage.largeImageURL, ()=>{
            let fileExt = randomImage.largeImageURL.split('.')[randomImage.largeImageURL.split('.').length-1]
            let imagePath = path.join(folderName, 'featured.' + fileExt)
            buildImages(imagePath);
        })
        } catch(error) {
          /** If downloadImage fails....
           * * Find a image based on a simple query of color + object
          */
         let color = (()=>{
           let colors = ['red','orange','yellow','green','blue','indigo','violet']
           return colors[Math.floor(Math.random() * colors.length)]
         })()
         let object = (()=>{
           let objects = ['building','computer','phone','office','pencil','pen','car','truck','sponge','paper','rug','house','soap']
           return objects[Math.floor(Math.random() * objects.length)]
         })()
         console.log(`No images found with ${imageQuery} trying now with "${color} ${object}"`)
         queryImage(folderName, `${color} ${object}`)
        }
      });
    });
    
    req.on('error', (e) => {
      error(`problem with request: ${e.message}`);
    });
    
    req.end();
  } else {
    error("Pixabay auth details not set in .env, skipping")
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
  //log('trying to download file', options)
  var req = https.request(options, (res) => {
    let image = '';
    res.setEncoding('binary');
    res.on('data', (chunk) => {
      image += chunk
    });
    res.on('end', () => {
      let imagePath = path.join(folder, 'featured.' + uri.split('.')[uri.split('.').length-1])
      fs.writeFile(imagePath, image, 'binary', function(err) {
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
    console.log('Runing downloadImages with', args[2], args[3])
    queryImage(args[2], args[3], ()=>{
      log("DONE generate images!")
    });
} else {
  log("MISSING collection and file name")
}
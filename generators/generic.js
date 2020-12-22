import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import https from 'https'
import {queryImage} from './downloadImage.js'
dotenv.config();

let log = (message)=>{
  console.log(message);
}
let error = (errMessage)=>{
  console.error(errMessage);
}
let args = process.argv;

let createFolder = (folderName, callback) => {
  if (!fs.existsSync(folderName)) {
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
} else {
    callback()
}
  
}
let createIndex = (folderName) => {
  let filePath = path.join(folderName, 'index.md')
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
  });
}

if (args[2] && args[3]) {
  let newFolderName = (() => {
    let today = new Date().toISOString().split('T')[0];
    return [today, args[3]].join('-');
  })().replace(/[^a-zA-Z0-9]/g,'-').toLowerCase();
  let folder = path.join('./src', args[2], newFolderName);
  createFolder(folder, () => {
    createIndex(folder)
    queryImage(folder, args[3])
  })
} else {
  log("MISSING collection and file name")
}
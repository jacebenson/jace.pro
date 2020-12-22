import path from 'path'
import sharp from 'sharp'


let log = (message)=>{
  //console.log(message)
}
let error = (errMessage)=>{
  console.error(errMessage)
}
export let buildImages = (givenFile, callback) => {
  let FileCount = 0;
  let imagePath = path.join(givenFile)//first argument is file to convert
  let postDir = path.dirname(givenFile)
  let originalImage = path.join(postDir, 'original.webp')
  let sizes = [
    100, 200, 320, 360, 640, 720, 960, 1280
  ]
  sharp(imagePath)
  .toFile(originalImage, (err, info) => {
    //log(info)
  });//save original
  sizes.forEach((size)=>{
    log(`converting to ${size} now`)
    var sizedImage = path.join(postDir, 'featured-' + size + '.webp')
    sharp(imagePath)
    .resize(size)
    .toFile(sizedImage, (err, info) => {
      //log(info)
    });//save resized
    log(`converted to ${size} done`)
    FileCount++;
  })
  //console.log(`Created/Updated ${FileCount} files in ${postDir}`)
  callback;
} 

let args = process.argv
if (args[2]){
  log(`about to run buildImages from ${args[2]}`)
  buildImages(args[2], () => {
    log(`DONE generate images from ${args[2]}!`)
  });
} else {
  error("No file was given.  Expected `yarn buildImages ./src/post/2020-02-02/featured.jpg`")
}

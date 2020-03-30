const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('./data/feeds.json', './public/feeds.json', (err) => {
  if (err) throw err;
  console.log('feeds.json was copied to /public/feeds.json');
});
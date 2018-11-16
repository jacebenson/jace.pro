var fs = require('fs');
var path = require('path');
var output = [
  'pandoc -o _book.epub \\\n',
  '--toc \\\n',
  '--toc-depth=3 \\\n',
  '--epub-cover-image=adi-goldstein-257316-unsplash.jpg \\\n',
  'title.md \\\n'
];
var pathsForImages = ['.', '.'];
var blogFolders = './blog';
fs.readdir(blogFolders, function (err, folders) {
  if (err) {
    console.error('Could not list directory', err);
  }
  folders.forEach(function (folder, index) {
    var folderPath = path.join(blogFolders, folder);
    fs.stat(folderPath, function (error, stat) {
      if (error) {
        console.error('Stat error', error);
      }
      if (stat.isDirectory()) {
        if (folderPath.indexOf('non-servicenow') === -1) {
          // console.log('adding ' + folderPath);
          output.push(folderPath + '/index.md \\\n');
          pathsForImages.push(folderPath);
        }
      }
      // console.log(index + ' / ' + folders.length);
      if (index === (folders.length - 1)) {
        pathsForImages = pathsForImages.join(':');
        pathsForImages = pathsForImages.replace(/\\/gm, '/');
        output = output.join(' ');
        output += ' --resource-path=' + pathsForImages;
        output = output.replace(/\sblog\\/gm, 'blog/');
        output = output.replace(/\s\n\s\\/gm, '\n');
        console.log(output);
      }
    });
  });
});

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all markdown files in posts directory
const markdownFiles = glob.sync('src/posts/**/*.md');

console.log(`Found ${markdownFiles.length} markdown files to process`);

let totalReplacements = 0;

markdownFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace various old image path formats with the standard /assets/images/
    let updatedContent = content
      // Replace /static/img/ with /assets/images/
      .replace(/!\[([^\]]*)\]\(\/static\/img\/([^)]+)\)/g, '![$1](/assets/images/$2)')
      // Replace /src/assets/images/ with /assets/images/
      .replace(/!\[([^\]]*)\]\(\/src\/assets\/images\/([^)]+)\)/g, '![$1](/assets/images/$2)')
      // Replace src/assets/images/ with /assets/images/
      .replace(/!\[([^\]]*)\]\(src\/assets\/images\/([^)]+)\)/g, '![$1](/assets/images/$2)')
      // Replace ./assets/images/ with /assets/images/
      .replace(/!\[([^\]]*)\]\(\.\/assets\/images\/([^)]+)\)/g, '![$1](/assets/images/$2)');
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✅ Updated: ${filePath}`);
      totalReplacements++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Completed! Updated ${totalReplacements} files with corrected image paths.`);
console.log('All images now use the /assets/images/ format.');
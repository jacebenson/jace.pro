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
    
    // Replace various external image URLs with comments
    let updatedContent = content
      // Replace jace.pro external image URLs with comments
      .replace(/!\[([^\]]*)\]\(https:\/\/jace\.pro\/[^)]+\)/g, '<!-- External image no longer available: $& -->')
      // Also handle any other potential external URLs that might cause issues
      .replace(/!\[([^\]]*)\]\(https?:\/\/[^)\s]+\.(?:png|jpg|jpeg|gif|svg|webp)[^)]*\)/g, (match) => {
        // Keep YouTube thumbnails and other commonly used external images
        if (match.includes('ytimg.com') || match.includes('slack-edge.com')) {
          return match;
        }
        return `<!-- External image: ${match} -->`;
      });
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✅ Updated: ${filePath}`);
      totalReplacements++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Completed! Updated ${totalReplacements} files by commenting out external image URLs.`);
console.log('All problematic external images have been commented out.');
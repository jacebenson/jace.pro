const fs = require('fs');
const path = require('path');

// Function to update permalinks in a markdown file
function updatePermalink(filePath) {
  try {
    // Read file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the basename of the file (without extension)
    const basename = path.basename(filePath, '.md');
    
    // Create new permalink
    // Format will be /filename/ or if it starts with a date /post/filename/
    let newPermalink;
    if (/^\d{4}-\d{2}-\d{2}-/.test(basename)) {
      // If filename starts with date pattern (YYYY-MM-DD-), use /post/filename/ format
      newPermalink = `/post/${basename}/`;
    } else {
      // Otherwise just use /filename/ format
      newPermalink = `/${basename}/`;
    }
    
    // Check if the content has frontmatter
    if (!content.startsWith('---')) {
      console.log(`⚠️ Skipping ${filePath} - No front matter found`);
      return;
    }
    
    // Find the front matter section
    const frontMatterEndIndex = content.indexOf('---', 3);
    if (frontMatterEndIndex === -1) {
      console.log(`⚠️ Skipping ${filePath} - Invalid front matter`);
      return;
    }
    
    const frontMatter = content.substring(0, frontMatterEndIndex);
    
    // Check if permalink is already in the front matter
    const permalinkRegex = /permalink:\s*([^\n]+)/i;
    const permalinkMatch = frontMatter.match(permalinkRegex);
    
    let updatedContent;
    if (permalinkMatch) {
      // Replace existing permalink
      const currentPermalink = permalinkMatch[1].trim();
      console.log(`📝 Updating ${filePath} - Changing permalink from ${currentPermalink} to ${newPermalink}`);
      updatedContent = content.replace(
        new RegExp(`permalink:\\s*${currentPermalink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'),
        `permalink: ${newPermalink}`
      );
    } else {
      // Add permalink after title (or at the end of front matter if title not found)
      const titleRegex = /title:\s*([^\n]+)/i;
      const titleMatch = frontMatter.match(titleRegex);
      
      if (titleMatch) {
        // Add permalink after title
        const titleLine = titleMatch[0];
        console.log(`📝 Adding permalink ${newPermalink} after title in ${filePath}`);
        updatedContent = content.replace(
          titleLine,
          `${titleLine}\npermalink: ${newPermalink}`
        );
      } else {
        // Add permalink before end of front matter
        console.log(`📝 Adding permalink ${newPermalink} to end of front matter in ${filePath}`);
        updatedContent = content.replace(
          '---\n',
          `---\npermalink: ${newPermalink}\n`
        );
      }
    }
    
    // Write updated content back to file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ Updated ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all markdown files in a directory
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively search subdirectories
      findMarkdownFiles(filePath, fileList);
    } else if (path.extname(file).toLowerCase() === '.md') {
      // Add markdown files to the list
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main function
function main(testMode = true) {
  const rootDir = path.resolve(__dirname, 'src', 'post');
  console.log(`🔍 Searching for markdown files in ${rootDir}`);
  
  try {
    // Find all markdown files
    const markdownFiles = findMarkdownFiles(rootDir);
    console.log(`📄 Found ${markdownFiles.length} markdown files`);
    
    // In test mode, only process a small number of files
    const filesToProcess = testMode ? markdownFiles.slice(0, 5) : markdownFiles;
    
    if (testMode) {
      console.log('🧪 Running in TEST MODE - Only processing 5 files');
    }
    
    // Process files
    let updatedCount = 0;
    filesToProcess.forEach(filePath => {
      if (updatePermalink(filePath)) {
        updatedCount++;
      }
    });
    
    console.log(`\n📊 Summary:`);
    console.log(`✅ Updated ${updatedCount} files out of ${filesToProcess.length} processed`);
    
    if (testMode) {
      console.log('🧪 This was a test run. To update all files, run with testMode=false');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Default to test mode - set to false to update all files
const testMode = process.argv[2] === 'full' ? false : true;
main(testMode);
const fs = require('fs');
const path = require('path');

/**
 * Recursively find all .md files in a directory
 * @param {string} dir - Directory to search
 * @param {string[]} fileList - Array to store found files
 * @returns {string[]} Array of .md file paths
 */
function findMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            // Recursively search subdirectories
            findMarkdownFiles(filePath, fileList);
        } else if (path.extname(file) === '.md') {
            fileList.push(filePath);
        }
    });
    
    return fileList;
}

/**
 * Rename a file by adding 'old.' prefix to the filename
 * @param {string} filePath - Full path to the file
 */
function renameFile(filePath) {
    const dir = path.dirname(filePath);
    const filename = path.basename(filePath);
    const newFilename = `old.${filename}`;
    const newFilePath = path.join(dir, newFilename);
    
    try {
        fs.renameSync(filePath, newFilePath);
        console.log(`✓ Renamed: ${filename} → ${newFilename}`);
    } catch (error) {
        console.error(`✗ Error renaming ${filename}:`, error.message);
    }
}

/**
 * Main function to rename all .md files in the posts directory
 */
function renameAllMarkdownFiles() {
    const postsDir = path.join(__dirname, 'src', 'posts');
    
    // Check if posts directory exists
    if (!fs.existsSync(postsDir)) {
        console.error(`Posts directory not found: ${postsDir}`);
        return;
    }
    
    console.log(`Searching for .md files in: ${postsDir}`);
    
    // Find all .md files
    const markdownFiles = findMarkdownFiles(postsDir);
    
    if (markdownFiles.length === 0) {
        console.log('No .md files found in the posts directory.');
        return;
    }
    
    console.log(`Found ${markdownFiles.length} .md files to rename:`);
    
    // Display files that will be renamed
    markdownFiles.forEach(filePath => {
        const filename = path.basename(filePath);
        const relativePath = path.relative(postsDir, filePath);
        console.log(`  - ${relativePath}`);
    });
    
    console.log('\nRenaming files...\n');
    
    // Rename each file
    markdownFiles.forEach(renameFile);
    
    console.log(`\nCompleted! Renamed ${markdownFiles.length} files.`);
}

// Run the script
if (require.main === module) {
    renameAllMarkdownFiles();
}

module.exports = { findMarkdownFiles, renameFile, renameAllMarkdownFiles };
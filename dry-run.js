import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
 * Show what the rename operation would do (dry run)
 */
function dryRun() {
    const postsDir = path.join(__dirname, 'src', 'posts');
    
    // Check if posts directory exists
    if (!fs.existsSync(postsDir)) {
        console.error(`Posts directory not found: ${postsDir}`);
        return;
    }
    
    console.log(`🔍 DRY RUN - Searching for .md files in: ${postsDir}`);
    
    // Find all .md files
    const markdownFiles = findMarkdownFiles(postsDir);
    
    if (markdownFiles.length === 0) {
        console.log('No .md files found in the posts directory.');
        return;
    }
    
    console.log(`\n📋 Found ${markdownFiles.length} .md files that would be renamed:\n`);
    
    // Display what would happen to each file
    markdownFiles.forEach(filePath => {
        const dir = path.dirname(filePath);
        const filename = path.basename(filePath);
        const newFilename = `old.${filename}`;
        const relativePath = path.relative(postsDir, filePath);
        const relativeDir = path.dirname(relativePath);
        const newRelativePath = path.join(relativeDir, newFilename);
        
        console.log(`  ${relativePath} → ${newRelativePath}`);
    });
    
    console.log(`\n💡 To actually rename these files, run: node rename-posts.js`);
}

// Run the dry run
dryRun();
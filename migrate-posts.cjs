const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Function to extract frontmatter from a markdown file
function extractFrontmatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Handle both Unix (\n) and Windows (\r\n) line endings
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    
    if (!fmMatch) {
        console.warn(`No frontmatter found in ${filePath}`);
        return null;
    }
    
    try {
        const frontmatter = yaml.load(fmMatch[1]);
        return {
            frontmatter,
            content: content.substring(fmMatch[0].length).trim()
        };
    } catch (error) {
        console.error(`Error parsing frontmatter in ${filePath}:`, error.message);
        console.log(`Raw frontmatter: ${fmMatch[1].substring(0, 200)}...`);
        return null;
    }
}

// Function to create slug from permalink or title
function createSlug(frontmatter) {
    let slug = '';
    
    if (frontmatter.permalink && typeof frontmatter.permalink === 'string' && frontmatter.permalink.trim()) {
        // Remove leading/trailing slashes and use as slug
        slug = frontmatter.permalink.replace(/^\/+|\/+$/g, '');
    } else if (frontmatter.title) {
        // Convert title to slug format - handle both string and array cases
        slug = Array.isArray(frontmatter.title) ? frontmatter.title.join(' ') : frontmatter.title;
    } else {
        return null;
    }
    
    // Clean up slug to be filesystem-friendly
    return slug
        .toLowerCase()
        .replace(/[^a-z0-9\s-_.]/g, '') // Remove special characters except spaces, hyphens, underscores, dots
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .replace(/-+/g, '-')            // Replace multiple consecutive hyphens with single
        .replace(/^-+|-+$/g, '');       // Remove leading/trailing hyphens
}

// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return null;
    }
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return {
        year: year.toString(),
        dateString: `${year}-${month}-${day}`
    };
}

// Main migration function
function migratePost(sourceFile, dryRun = true) {
    console.log(`\nProcessing: ${sourceFile}`);
    
    const parsed = extractFrontmatter(sourceFile);
    if (!parsed) {
        console.log(`❌ Skipping ${sourceFile} - could not parse frontmatter`);
        return false;
    }
    
    const { frontmatter, content } = parsed;
    
    // Extract date
    if (!frontmatter.date) {
        console.log(`❌ Skipping ${sourceFile} - no date in frontmatter`);
        return false;
    }
    
    const dateInfo = formatDate(frontmatter.date);
    if (!dateInfo) {
        console.log(`❌ Skipping ${sourceFile} - invalid date format: ${frontmatter.date}`);
        return false;
    }
    
    // Create slug
    const slug = createSlug(frontmatter);
    if (!slug) {
        console.log(`❌ Skipping ${sourceFile} - could not create slug from title/permalink`);
        return false;
    }
    
    // Create target file path
    const targetDir = path.join('src', 'posts', dateInfo.year);
    const targetFileName = `${dateInfo.dateString}-${slug}.md`;
    const targetPath = path.join(targetDir, targetFileName);
    
    console.log(`📅 Date: ${frontmatter.date} -> ${dateInfo.dateString}`);
    console.log(`🏷️  Slug: ${slug}`);
    console.log(`📁 Target: ${targetPath}`);
    
    // Check if target already exists
    if (fs.existsSync(targetPath)) {
        console.log(`⚠️  Target already exists: ${targetPath}`);
        return false;
    }
    
    if (dryRun) {
        console.log(`🔍 DRY RUN - would create: ${targetPath}`);
        return true;
    }
    
    // Create target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        console.log(`📁 Created directory: ${targetDir}`);
    }
    
    // Write the file
    const newContent = `---\n${yaml.dump(frontmatter).trim()}\n---\n\n${content}`;
    fs.writeFileSync(targetPath, newContent, 'utf8');
    console.log(`✅ Migrated to: ${targetPath}`);
    
    return true;
}

// Function to find all markdown files in tmp/post
function findAllMarkdownFiles() {
    const tmpPostDir = path.join('tmp', 'post');
    const files = [];
    
    function scanDirectory(dir) {
        const entries = fs.readdirSync(dir);
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                scanDirectory(fullPath);
            } else if (entry.endsWith('.md')) {
                files.push(fullPath);
            }
        }
    }
    
    if (fs.existsSync(tmpPostDir)) {
        scanDirectory(tmpPostDir);
    }
    
    return files;
}

// Main execution
function main() {
    const args = process.argv.slice(2);
    const dryRun = !args.includes('--execute');
    
    console.log(`🚀 Starting post migration ${dryRun ? '(DRY RUN)' : '(EXECUTING)'}`);
    console.log('=====================================');
    
    const markdownFiles = findAllMarkdownFiles();
    console.log(`📊 Found ${markdownFiles.length} markdown files to process`);
    
    let successCount = 0;
    let skipCount = 0;
    
    for (const file of markdownFiles) {
        const success = migratePost(file, dryRun);
        if (success) {
            successCount++;
        } else {
            skipCount++;
        }
    }
    
    console.log('\n=====================================');
    console.log(`📊 Migration Summary:`);
    console.log(`   ✅ Processed: ${successCount}`);
    console.log(`   ⏭️  Skipped: ${skipCount}`);
    console.log(`   📁 Total: ${markdownFiles.length}`);
    
    if (dryRun) {
        console.log('\n🔍 This was a DRY RUN. To execute the migration, run:');
        console.log('   node migrate-posts.js --execute');
    }
}

// Run the script
main();
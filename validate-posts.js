#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';
import glob from 'fast-glob';

/**
 * Slugify function to match Eleventy's default slugify behavior
 * Based on the slugify filter in the project
 */
function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Generate permalink for a post based on the title
 * Matches the permalink pattern in posts.json: "/blog/{{ title | slugify }}/index.html"
 */
function generatePermalink(title) {
  return `/blog/${slugify(title)}/index.html`;
}

/**
 * Validate individual post
 */
function validatePost(filePath) {
  const errors = [];
  const warnings = [];
  let frontmatter = null;
  let title = '';
  let permalink = '';

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has frontmatter
    if (!fileContent.startsWith('---')) {
      errors.push('Missing YAML frontmatter (should start with ---)');
      return { errors, warnings, title, permalink, filePath };
    }

    // Parse frontmatter
    try {
      const parsed = matter(fileContent);
      frontmatter = parsed.data;
    } catch (yamlError) {
      errors.push(`YAML syntax error: ${yamlError.message}`);
      return { errors, warnings, title, permalink, filePath };
    }

    // Required fields validation
    const requiredFields = ['title', 'description', 'date', 'tags'];
    
    requiredFields.forEach(field => {
      if (!frontmatter[field]) {
        errors.push(`Missing required field: ${field}`);
      } else if (typeof frontmatter[field] === 'string' && frontmatter[field].trim() === '') {
        errors.push(`Empty required field: ${field}`);
      }
    });

    // Title validation
    if (frontmatter.title) {
      title = frontmatter.title;
      permalink = generatePermalink(title);
      
      if (title.length > 200) {
        warnings.push('Title is very long (>200 characters)');
      }
    }

    // Description validation  
    if (frontmatter.description) {
      if (frontmatter.description.length < 10) {
        warnings.push('Description is very short (<10 characters)');
      }
      if (frontmatter.description.length > 500) {
        warnings.push('Description is very long (>500 characters)');
      }
    }

    // Date validation
    if (frontmatter.date) {
      const date = new Date(frontmatter.date);
      if (isNaN(date.getTime())) {
        errors.push('Invalid date format');
      } else {
        const now = new Date();
        if (date > now && !frontmatter.draft) {
          warnings.push('Post date is in the future but not marked as draft');
        }
      }
    }

    // Tags validation
    if (frontmatter.tags) {
      if (!Array.isArray(frontmatter.tags)) {
        errors.push('Tags must be an array');
      } else {
        if (frontmatter.tags.length === 0) {
          warnings.push('No tags specified');
        }
        
        // Check for invalid tag values
        frontmatter.tags.forEach((tag, index) => {
          if (typeof tag !== 'string' || tag.trim() === '') {
            errors.push(`Invalid tag at index ${index}: tags must be non-empty strings`);
          }
        });
        
        // Check for duplicate tags
        const uniqueTags = [...new Set(frontmatter.tags)];
        if (uniqueTags.length !== frontmatter.tags.length) {
          warnings.push('Duplicate tags found');
        }
      }
    }

    // Optional fields validation
    if (frontmatter.image && typeof frontmatter.image !== 'string') {
      errors.push('Image field must be a string');
    }

    if (frontmatter.draft && typeof frontmatter.draft !== 'boolean') {
      errors.push('Draft field must be a boolean');
    }

    if (frontmatter.redirectFrom) {
      if (!Array.isArray(frontmatter.redirectFrom)) {
        errors.push('redirectFrom must be an array');
      } else {
        frontmatter.redirectFrom.forEach((redirect, index) => {
          if (typeof redirect !== 'string' || redirect.trim() === '') {
            errors.push(`Invalid redirect at index ${index}: must be non-empty string`);
          }
        });
      }
    }

    // Check for unknown fields that might be typos
    const knownFields = ['title', 'description', 'date', 'tags', 'image', 'draft', 'redirectFrom', 'alt', 'credit'];
    Object.keys(frontmatter).forEach(field => {
      if (!knownFields.includes(field)) {
        warnings.push(`Unknown field: ${field} (possible typo?)`);
      }
    });

  } catch (error) {
    errors.push(`Failed to read file: ${error.message}`);
  }

  return { errors, warnings, title, permalink, filePath };
}

/**
 * Find duplicate values in an array of objects
 */
function findDuplicates(items, keyFn, labelFn) {
  const seen = new Map();
  const duplicates = [];

  items.forEach(item => {
    const key = keyFn(item);
    if (key && key.trim() !== '') {
      if (seen.has(key)) {
        // Add both the original and current item to duplicates
        const original = seen.get(key);
        if (!duplicates.some(d => d.items.includes(original))) {
          duplicates.push({
            value: key,
            label: labelFn(key),
            items: [original, item]
          });
        } else {
          // Find existing duplicate group and add current item
          const existing = duplicates.find(d => d.value === key);
          if (existing && !existing.items.includes(item)) {
            existing.items.push(item);
          }
        }
      } else {
        seen.set(key, item);
      }
    }
  });

  return duplicates;
}

/**
 * Main validation function
 */
async function validatePosts() {
  console.log('🔍 Validating blog posts...\n');

  // Find all post files
  const postFiles = await glob(['src/posts/**/*.md'], {
    ignore: ['src/posts/drafts/**/*.md'], // Skip drafts in main validation
    absolute: true
  });

  const draftFiles = await glob(['src/posts/drafts/**/*.md'], {
    absolute: true
  });

  if (postFiles.length === 0) {
    console.log('❌ No post files found!');
    process.exit(1);
  }

  console.log(`📝 Found ${postFiles.length} published posts and ${draftFiles.length} draft posts`);

  // Validate all posts
  const allResults = [];
  const publishedResults = [];
  const draftResults = [];

  // Validate published posts
  postFiles.forEach(filePath => {
    const result = validatePost(filePath);
    result.isDraft = false;
    publishedResults.push(result);
    allResults.push(result);
  });

  // Validate draft posts
  draftFiles.forEach(filePath => {
    const result = validatePost(filePath);
    result.isDraft = true;
    draftResults.push(result);
    allResults.push(result);
  });

  // Check for duplicates
  const duplicateTitles = findDuplicates(
    allResults.filter(r => r.title),
    r => r.title.toLowerCase().trim(),
    title => `Title: "${title}"`
  );

  const duplicatePermalinks = findDuplicates(
    allResults.filter(r => r.permalink),
    r => r.permalink,
    permalink => `URL: ${permalink}`
  );

  // Report results
  let hasErrors = false;
  let hasWarnings = false;

  // Individual post validation results
  allResults.forEach(result => {
    const postType = result.isDraft ? '📝 DRAFT' : '📄';
    const relativePath = path.relative(process.cwd(), result.filePath);
    
    if (result.errors.length > 0) {
      hasErrors = true;
      console.log(`\n❌ ${postType} ${relativePath}`);
      result.errors.forEach(error => {
        console.log(`   🚨 ${error}`);
      });
    }

    if (result.warnings.length > 0) {
      hasWarnings = true;
      if (result.errors.length === 0) {
        console.log(`\n⚠️  ${postType} ${relativePath}`);
      }
      result.warnings.forEach(warning => {
        console.log(`   ⚠️  ${warning}`);
      });
    }
  });

  // Duplicate checks
  if (duplicateTitles.length > 0) {
    hasErrors = true;
    console.log('\n❌ DUPLICATE TITLES FOUND:');
    duplicateTitles.forEach(dup => {
      console.log(`\n   ${dup.label}`);
      dup.items.forEach(item => {
        const relativePath = path.relative(process.cwd(), item.filePath);
        const postType = item.isDraft ? '📝' : '📄';
        console.log(`   ${postType} ${relativePath}`);
      });
    });
  }

  if (duplicatePermalinks.length > 0) {
    hasErrors = true;
    console.log('\n❌ DUPLICATE URLs FOUND:');
    duplicatePermalinks.forEach(dup => {
      console.log(`\n   ${dup.label}`);
      dup.items.forEach(item => {
        const relativePath = path.relative(process.cwd(), item.filePath);
        const postType = item.isDraft ? '📝' : '📄';
        console.log(`   ${postType} ${relativePath}`);
      });
    });
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  const errorsCount = allResults.reduce((count, r) => count + r.errors.length, 0) + duplicateTitles.length + duplicatePermalinks.length;
  const warningsCount = allResults.reduce((count, r) => count + r.warnings.length, 0);

  if (hasErrors) {
    console.log(`❌ Validation failed with ${errorsCount} error(s) and ${warningsCount} warning(s)`);
    console.log('\nPlease fix the errors above before building.');
    process.exit(1);
  } else if (hasWarnings) {
    console.log(`⚠️  Validation passed with ${warningsCount} warning(s)`);
    console.log('\nConsider reviewing the warnings above.');
  } else {
    console.log('✅ All posts are valid!');
  }

  console.log(`\n📊 Summary: ${publishedResults.length} published posts, ${draftResults.length} drafts`);
}

// Run validation
validatePosts().catch(error => {
  console.error('💥 Validation failed:', error);
  process.exit(1);
});
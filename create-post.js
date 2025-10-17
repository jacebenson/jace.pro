const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Format date as YYYY-MM-DD
function formatDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

// Format current datetime in the format Eleventy expects
function formatDateTime() {
  return new Date().toISOString();
}

// Convert title to slug
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

// Ask questions to create the post
function askQuestions() {
  rl.question('Enter post title: ', (title) => {
    rl.question('Enter short description (optional): ', (description) => {
      const slug = titleToSlug(title);
      const date = formatDate();
      const dateTime = formatDateTime();
      
      createPost(title, description, slug, dateTime);
      rl.close();
    });
  });
}

// Create the markdown file with frontmatter
function createPost(title, description, slug, dateTime) {
  const filePath = path.join(__dirname, 'src', 'post', `${slug}.md`);
  const content = `---
title: "${title}"
permalink: /${slug}/
date: ${dateTime}
description: "${description}"
author: "Jace Benson"
image: /static/img/default-post-image.jpg
draft: false
tags:
  - blog
---

Write your post content here...
`;

  fs.writeFileSync(filePath, content);
  console.log(`✅ Created new post: ${filePath}`);
}

// Start the script
askQuestions();
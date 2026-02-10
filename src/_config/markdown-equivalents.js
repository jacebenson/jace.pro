/**
 * 11ty plugin to generate markdown equivalents for blog posts
 * This creates .md versions of blog posts for AI/LLM crawlers
 */

import fs from 'fs/promises';
import path from 'path';

export function markdownEquivalentsPlugin(eleventyConfig) {
  // Generate markdown files after build is complete (when templateContent is available)
  eleventyConfig.on('eleventy.after', async ({ dir, results }) => {
    const distDir = dir.output;
    
    // Filter to only blog posts
    const blogPosts = results.filter(item => 
      item.url && 
      item.url.includes('/blog/') &&
      item.content
    );
    
    if (blogPosts.length === 0) {
      console.log('[Markdown Equivalents] No blog posts found to generate.');
      return;
    }
    
    console.log(`[Markdown Equivalents] Generating ${blogPosts.length} markdown files...`);
    
    for (const post of blogPosts) {
      const markdownContent = generateMarkdownContent(post);
      // Convert /blog/my-post/ to /blog/my-post.md
      const markdownUrl = post.url.replace(/\/$/, '.md');
      const markdownPath = path.join(distDir, markdownUrl);
      
      // Ensure directory exists
      const dirPath = path.dirname(markdownPath);
      await fs.mkdir(dirPath, { recursive: true });
      
      // Write markdown file
      await fs.writeFile(markdownPath, markdownContent, 'utf8');
    }
    
    console.log(`[Markdown Equivalents] Complete! Generated ${blogPosts.length} files.`);
  });
}

/**
 * Generate clean markdown content from post data
 */
function generateMarkdownContent(post) {
  const { url, content, inputPath } = post;
  
  // Extract frontmatter info from inputPath if possible
  const slug = url.split('/').filter(Boolean).pop() || 'untitled';
  
  // Clean up content for markdown
  let cleanContent = content
    // Remove HTML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove script tags
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    // Remove style tags
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    // Remove nav, header, footer
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    // Convert headers
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n\n')
    // Convert paragraphs
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
    // Convert formatting
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
    // Convert code blocks
    .replace(/<pre[^>]*><code[^>]*class="[^"]*language-(\w+)[^"]*"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```$1\n$2\n```\n\n')
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n\n')
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '```\n$1\n```\n\n')
    // Convert lists
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
    .replace(/<ul[^>]*>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    // Convert links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    // Convert images
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)')
    .replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, '![$1]($2)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)')
    // Convert breaks
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<hr\s*\/?>/gi, '\n---\n')
    // Remove picture/source elements but keep img
    .replace(/<picture[^>]*>([\s\S]*?)<\/picture>/gi, (match, inner) => {
      const imgMatch = inner.match(/<img[^>]*src="([^"]*)"[^>]*>/i);
      return imgMatch ? `![](${imgMatch[1]})` : '';
    })
    // Remove remaining HTML tags
    .replace(/<[^>]*>/g, '')
    // Decode common HTML entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    // Clean up whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const header = `---
original_url: "https://jace.pro${url}"
format: markdown
ai_optimized: true
---

`;

  const footer = `

---

*This content is from Jace Benson's ServiceNow and tech blog at jace.pro*
*Original post: https://jace.pro${url}*
`;

  return header + cleanContent + footer;
}

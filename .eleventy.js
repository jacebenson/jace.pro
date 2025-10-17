const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginResoc = require("@resoc/eleventy-plugin-social-image");
const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const {
  fortawesomeBrandsShortcode,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Allow missing file extensions for permalinks
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });
  
  eleventyConfig.addShortcode('fortawesomeBrand', fortawesomeBrandsShortcode);
  eleventyConfig.addPlugin(pluginResoc, {
    // The directory of the Resoc templates
    templatesDir: 'resoc-templates',

    // The path when social images will be served, eg. /social-images/homepage.jpg
    openGraphBasePath: '/social-images',

    // A file which maps pages to templates and parameters
    slugToImageDataMappingFile: 'resoc-image-data.json',

    // Ask the plugin to configure netlify.toml accordingly
    patchNetlifyToml: true
  });
  eleventyConfig.addPlugin(pluginRss);
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);
  
  // Custom Markdown configuration with Mermaid support and anchor links
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang && lang === 'mermaid') {
        return `<pre class="mermaid">${str}</pre>`;
      }
      // For all other languages, use the default highlighter
      return '';
    }
  }).use(markdownItAnchor, {
    permalink: false, // Don't add permalink symbols
    slugify: (s) => s.toLowerCase().replace(/[^\w]+/g, '-'), // Custom slugify function to match your existing IDs
    level: [1, 2, 3, 4, 5, 6], // Which headings to add anchors to
  });
  
  // Use custom markdown library
  eleventyConfig.setLibrary("md", markdownLibrary);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });
  // short date (ddd mm-dd)
  eleventyConfig.addFilter("plannerDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "ccc dd"
    );
  });
  eleventyConfig.addFilter("RFC822Date", (dateObj) => {
    /*
    < !--: lastBuildDate must be an RFC - 822 date - time: 2024 - 12 - 19T19: 32: 39Z-- >
    < !--a RFC - 822 date is: Sun, 19 Dec 2024 19: 32: 39 GMT-- >
      Wed, 05 Mar 2025
      */
    let returnDate = false
    returnDate = DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "EEE, dd LLL yyyy HH:mm:ss ZZZZ"
    );
    // if returndate is invalid return todays date in RFC822 format
    if (returnDate === "Invalid DateTime") {
      returnDate = DateTime.now().toFormat("EEE, dd LLL yyyy HH:mm:ss ZZZZ");
    }
    return returnDate;
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./src/admin/netlify-cms.js": "./admin/netlify-cms.js",
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css": "./static/css/prism-tomorrow.css",
    "./src/scribe.sh": "./scribe.sh",
    "./src/scribe.xml": "./scribe.xml",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy Font Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/fonts");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  
  // Add specific watch targets for better hot reloading
  eleventyConfig.setWatchThrottleWaitTime(100); // Default is 300ms
  
  // Configure watch targets specifically to detect new markdown posts
  eleventyConfig.addWatchTarget("./src/post/");
  eleventyConfig.addWatchTarget("./src/blog/");
  
  // Explicitly define the post collection for better file watching
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/post/*.md");
  });
  
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    // Improve watch mode with better file detection
    watchOptions: {
      usePolling: true,
      alwaysStat: true,
      awaitWriteFinish: {
        stabilityThreshold: 50,
        pollInterval: 100
      }
    }
  };
};

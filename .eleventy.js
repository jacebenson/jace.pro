const markdownIt = require("markdown-it");
const markdownItTocAndAnchor = require("markdown-it-toc-and-anchor").default; // the .default is essential: https://github.com/medfreeman/markdown-it-toc-and-anchor#readme

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");
const { minify } = require("terser");
module.exports = function (eleventyConfig) {
    try {
        eleventyConfig.addWatchTarget("./src/sass/");
        eleventyConfig.addPlugin(pluginRss);
        eleventyConfig.addPassthroughCopy("assets");
        eleventyConfig.addPassthroughCopy("./src/**/*.jpg");
        eleventyConfig.addPassthroughCopy("./src/**/*.png");
        eleventyConfig.addPassthroughCopy("./src/**/*.gif");
        eleventyConfig.addPassthroughCopy("./src/**/*.webp");
        eleventyConfig.addPassthroughCopy("./src/**/*.mp4");
        eleventyConfig.addPassthroughCopy("./src/**/*.pdf");
        eleventyConfig.addPassthroughCopy("./src/**/*.mmd");
        eleventyConfig.addPassthroughCopy("./src/**/*.xml");
        eleventyConfig.addPassthroughCopy("./src/**/*.xslx");
        eleventyConfig.addPassthroughCopy("./src/stories/**/bookend.json");

        // add support for syntax highlighting
        eleventyConfig.addPlugin(syntaxHighlight);

        eleventyConfig.addFilter("cssmin", function (code) {
            return new CleanCSS({}).minify(code).styles;
        });

        eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
            code,
            callback
        ) {
            try {
                const minified = await minify(code);
                callback(null, minified.code);
            } catch (err) {
                console.error("Terser error: ", err);
                // Fail gracefully.
                callback(null, code);
            }
        });

        eleventyConfig.addPairedShortcode('details', function (content, title) {
            let detailstag = 'details';
            let summarystyle = arguments['2'];
            let attributes = arguments['3'];
            if (attributes) {
                detailstag += ' ' + attributes;
            }
            return `<${detailstag}><summary style="${summarystyle}"><span>${title}</span></summary>${content}</details>`;
        });

        eleventyConfig.addFilter("formatDate", function(value) { 
            var d = new Date(value).toLocaleString("en-CA");
            d = d.replace(',','');
            d = d.replace(/\./g,'');
            return d;
        });
        let markdownLibrary = markdownIt({ // add IDs to headings with links inside. Perfect!
            html: true,
            breaks: true,
            linkify: true
          }).use(markdownItTocAndAnchor, {
            tocClassName: null,
            tocFirstLevel: 2,
            anchorClassName: null,
            wrapHeadingTextInAnchor: true    
          });
          eleventyConfig.setLibrary("md", markdownLibrary);
    } catch (e) {
        //console.log('ERROR', e);
    }
    return {
        addPassthroughCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["njk", "md"],
        dir: {
            input: "./src", // html and layouts for project
            output: "./_site",
            include: "./includes",
            data: "./_data",
        }
    }
}
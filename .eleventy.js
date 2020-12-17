const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");
const { minify } = require("terser");
module.exports = function (eleventyConfig) {
    try {
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
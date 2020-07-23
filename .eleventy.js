const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function (eleventyConfig) {
    //eleventyConfig.addPlugin(syntaxHighlightPlugin);
    eleventyConfig.addPlugin(pluginRss);  
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("./src/**/*.png");
    eleventyConfig.addPassthroughCopy("./src/**/*.gif");
    eleventyConfig.addPassthroughCopy("./src/**/*.mp4");
    eleventyConfig.addPassthroughCopy("./src/**/*.pdf");
    eleventyConfig.addPassthroughCopy("./src/**/*.mmd");
    eleventyConfig.addPassthroughCopy("./src/**/*.xml");
    eleventyConfig.addPassthroughCopy("./src/**/*.xslx");

   
    eleventyConfig.addFilter("dateToYear", function (date) {
        return moment(date).format("YYYY");
    });

    // add support for syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    return {
        addPassthroughCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["njk", "md"],
        dir: {
            input: "src", // html and layouts for project
            output: "_site",
            include: "includes"
        }
    }
}
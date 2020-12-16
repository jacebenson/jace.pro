const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function (eleventyConfig) {
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

    eleventyConfig.addPairedShortcode('details', function (content, title) {
      let detailstag = 'details';
      let summarystyle = arguments['2'];
      let attributes = arguments['3'];
      if(attributes){
         detailstag += ' ' + attributes;
      }
      return `<${detailstag}><summary style="${summarystyle}"><span>${title}</span></summary>${content}</details>`;
   });

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
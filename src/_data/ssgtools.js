
module.exports = {
    tools: [
        "Hugo",
        "Gatsby",
        "Jekyll",
        "Hexo",
        "11ty"
    ],
    features: {
        "Language": [{
            tool: "Hugo",
            answer: "Go",
            detail: "It’s written in Go (aka Golang)",
            source: "https://gohugo.io/documentation/"
        }, {
            vendor: "Gatsby",
            answer: "JavaScript (React-based)",
            detail: "GatsbyJS is a static site generator that leverages React.",
            source: "https://blog.logrocket.com/is-gatsby-really-that-great-e7b19c4c1c05/#1621"
        }, {
            vendor: "Jekyll",
            answer: "Ruby",
            detail: "Written in Ruby by Tom Preston-Werner, GitHub's co-founder, it is distributed under the open source MIT license.",
            source: "https://en.wikipedia.org/wiki/Jekyll_%28software%29"
        }, {
            vendor: "Hexo",
            answer: "JavaScript",
            detail: "Hexo requires Node.js 10.13 or newer.",
            source: "https://hexo.io/docs/#Install-Node-js"
        }, {
            vendor: "11ty",
            answer: "JavaScript",
            detail: "Eleventy v0.12.1 requires Node 10 or newer.",
            source: "https://www.11ty.dev/"
        }],
        "License": [{
            tool: "Hugo",
            answer: "Apache-2.0",
            detail: "Hugo v0.15 and later are released under the Apache 2.0 license. Earlier versions of Hugo were released under the Simple Public License.",
            source: "https://gohugo.io/about/license/"
        }, {
            vendor: "Gatsby",
            answer: "MIT",
            detail: "",
            source: "https://github.com/gatsbyjs/gatsby/blob/master/LICENSE"
        }, {
            vendor: "Jekyll",
            answer: "MIT",
            detail: "",
            source: "https://github.com/jekyll/jekyll/blob/master/LICENSE"
        }, {
            vendor: "Hexo",
            answer: "MIT",
            detail: "",
            source: "https://github.com/hexojs/hexo/blob/master/LICENSE"
        }, {
            vendor: "11ty",
            answer: "MIT",
            detail: "",
            source: "https://github.com/11ty/eleventy/blob/master/LICENSE"
        }],
        "Templating": [{
            tool: "Hugo",
            answer: "Go",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "JSX, and MDX",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "Liquid",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "Swig\nEJS\nHaml\nJade\nPug",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "HTML\nMarkdown\nJS\nNunjucks\nLiquid\nHandlebars\nMustashe\nEJS\nHAML\nPug",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "HTML":[{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Markdown":[{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "✅Yes",
            detail: "Yes, Gatsby uses MDX to render JSX in markdown files",
            source: "https://www.gatsbyjs.com/docs/glossary/mdx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Javascript":[{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Nunjucks": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Liquid": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "✅Yes",
            detail: "Yes, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Handlebars": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Mustashe": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "EJS": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "✅Yes",
            detail: "Yes, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with EJS.",
            source: "https://www.11ty.dev/docs/languages/ejs/"
        }],
        "HAML": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Pug": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "✅Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Go": [{
            tool: "Hugo",
            answer: "✅Yes",
            detail: "Yes, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "❌No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "❌No",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "❌No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "❌No",
            detail: "No, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Swig": [{
            tool: "Hugo",
            answer: "❌No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "Yes",
            detail: "Yes, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Jade": [{
            tool: "Hugo",
            answer: "No",
            detail: "No, Hugo uses Go's html/template and text/template libraries as the basis for the templating.",
            source: "https://gohugo.io/templates/introduction/"
        }, {
            vendor: "Gatsby",
            answer: "No",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            vendor: "Jekyll",
            answer: "Yes",
            detail: "Yes, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            vendor: "Hexo",
            answer: "No",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            vendor: "11ty",
            answer: "Yes",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
    }
};

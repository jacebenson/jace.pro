
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
            tool: "Gatsby",
            answer: "JavaScript (React-based)",
            detail: "GatsbyJS is a static site generator that leverages React.",
            source: "https://blog.logrocket.com/is-gatsby-really-that-great-e7b19c4c1c05/#1621"
        }, {
            tool: "Jekyll",
            answer: "Ruby",
            detail: "Written in Ruby by Tom Preston-Werner, GitHub's co-founder, it is distributed under the open source MIT license.",
            source: "https://en.wikipedia.org/wiki/Jekyll_%28software%29"
        }, {
            tool: "Hexo",
            answer: "JavaScript",
            detail: "Hexo requires Node.js 10.13 or newer.",
            source: "https://hexo.io/docs/#Install-Node-js"
        }, {
            tool: "11ty",
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
            tool: "Gatsby",
            answer: "MIT",
            detail: "",
            source: "https://github.com/gatsbyjs/gatsby/blob/master/LICENSE"
        }, {
            tool: "Jekyll",
            answer: "MIT",
            detail: "",
            source: "https://github.com/jekyll/jekyll/blob/master/LICENSE"
        }, {
            tool: "Hexo",
            answer: "MIT",
            detail: "",
            source: "https://github.com/hexojs/hexo/blob/master/LICENSE"
        }, {
            tool: "11ty",
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
            tool: "Gatsby",
            answer: "JSX\nMDX",
            detail: "No, Gatsby uses JSX to build components and components to build templates.",
            source: "https://www.gatsbyjs.com/docs/glossary/jsx/"
        }, {
            tool: "Jekyll",
            answer: "Liquid",
            detail: "No, Jekyll only uses Liquid templates",
            source: "https://jekyllrb.com/docs/liquid/"
        }, {
            tool: "Hexo",
            answer: "Swig\nEJS\nHaml\nJade\nPug",
            detail: "No, but this is pulled out of the main repo so someday it could be added, it just isn't yet.  Today Hexo uses Swig (default), and has access to EJS, Haml, Jade, Pug",
            source: "https://hexo.io/docs/themes#layout"
        }, {
            tool: "11ty",
            answer: "HTML\nMarkdown\nJS\nNunjucks\nLiquid\nHandlebars\nMustashe\nEJS\nHAML\nPug",
            detail: "Yes, Eleventy works with multiple template languages.",
            source: "https://www.11ty.dev/docs/"
        }],
        "Starters": [{
            tool: "Hugo",
            answer: "350+",
            detail: "Hugo's official list of starters.",
            source: "https://themes.gohugo.io/"
        }, {
            tool: "Gatsby",
            answer: "490+",
            detail: "Gatsby's official list of starters.",
            source: "https://www.gatsbyjs.com/starters/?"
        }, {
            tool: "Jekyll",
            answer: "1000+",
            detail: "Jekyll has many places where themes/starters are stored. Here's Github's.",
            source: "https://https://github.com/topics/jekyll-theme"
        }, {
            tool: "Hexo",
            answer: "330+",
            detail: "Hexo has over 300 themes.",
            source: "https://hexo.io/themes/"
        }, {
            tool: "11ty",
            answer: "90",
            detail: "11ty has a small number of starters.",
            source: "https://www.11ty.dev/docs/starter/"
        }]
    }
};

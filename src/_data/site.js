let now = new Date();
module.exports = 
{
    menu: [
        {
            link: "https://news.jace.pro",
            text: "News"
        },
        {
            link: "/resources",
            text: "Resources",
        },
        {
            link: "/stories",
            text: "Stories",
        },
    ],
    twitter: "jacebenson",//twitter handle
    github: "https://github.com/jacebenson",
    linkedin: "https://linkedin.com/in/jacebenson",
    baseURL: "https://jace.pro",
    title: "jace.pro",
    
    patreon: {
        footerMessage: "Become a Patron and you'll get access to my posts in progress, polls, thoughts and other things I want to share.  A monthly happy hour with me and access to my PDI.",
        link: "https://www.patreon.com/bePatron?u=23597006",
        text: "Become a Patron!",
        active: true
    },
    description: "Jace's Blog",
    subtitle: "I am writing about my experiences as a ServiceNow Developer.",

    author: "Jace Benson",//used all over
    email: "jace.benson@gmail.com",//used specificly for rss feed
    utterancesRepo: "jacebenson/jace.pro",//used for comments//if commented, doesnt load
    lastBuildDate: now.toLocaleString('en-CA',{hour12:false}).replace(',',''),
    lastBuildYear: now.getFullYear(),
    environment: process.env.ELEVENTY_DEV
}
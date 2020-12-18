let now = new Date();
module.exports = 
{
    twitter: "jacebenson",//twitter handle
    github: "https://github.com/jacebenson",
    linkedin: "https://linkedin.com/in/jacebenson",
    baseURL: "https://jace.pro",
    title: "jace.pro",
    
    patreon: "https://www.patreon.com/bePatron?u=23597006",//if uncommented adds a link to header and footer
    description: "Jace's Blog",
    subtitle: "I am writing about my experiences as a ServiceNow Developer.",
    author: {
        "name": "Jace Benson", //used for structured data and footer
        "firstName": "Jace", //used for structured data
        "lastName": "Benson" //used for structured data
    },
    email: "jace.benson@gmail.com",//used specificly for rss feed
    utterancesRepo: "jacebenson/jace.pro",//used for comments//if commented, doesnt load
    lastBuildDate: now.toLocaleString('en-CA',{hour12:false}).replace(',',''),
    lastBuildYear: now.getFullYear(),
    environment: process.env.ELEVENTY_DEV
}
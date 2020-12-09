module.exports = 
{
    twitter: "https://twitter.com/jacebenson",
    github: "https://github.com/jacebenson",
    linkedin: "https://linkedin.com/in/jacebenson",
    baseURL: "https://jace.pro",
    title: "jace.pro",
    
    patreon: "https://www.patreon.com/bePatron?u=23597006",//if uncommented adds a link to header and footer
    subtitle: "I am writing about my experiences as a ServiceNow Developer.",
    author: "Jace Benson",//used all over
    email: "jace.benson@gmail.com",//used specificly for rss feed
    utterancesRepo: "jacebenson/jace.pro",//used for comments//if commented, doesnt load
    lastBuildDate: (()=>{
        var now = new Date();
        return now.toISOString().split('T')[0]
    })(),
    lastBuildYear: (()=>{
        var now = new Date();
        return now.getFullYear();
    })(),
       
}
export default {
    overview: "I work on web technogies every day with ambition to learn more about what makes the web work. I love working on new things to me often, lately that's Ruby and Javascript.",
    location: "Robbinsdale, MN",
    socials: {
        //twitter: "https://twitter.com/jacebenson",
        linkedin: "https://linkedin.com/in/jacebenson",
        nowcommunity: "https://community.servicenow.com/community?id=community_user_profile&user=d6625a69dbd81fc09c9ffb651f9619fc",
        github: "https://github.com/jacebenson",
        email: "jace@benson.run",
        website: "https://jace.pro"
    },
    experience: [
        {
            company: "Lumen Technologies",
            title: "ServiceNow Architect",
            location: "Minneapolis, MN",
            duration: "2025 - Present",
            duties: [
                "Built proof-of-concept for Field Service Management and Case Service Management for multiple products",
                "Assisted with setting up AI Search",
                "Built custom interface to track required data for Field Technicians"
            ]
        },
        /*
        {
            company: "AI in a Box (product)",
            title: "Founder",
            location: "Robbinsdale, MN",
            duration: "2024 - Present",
            summary: "",
            duties: [
                "Created a self-hosted AI using Ollama(LLM), Langchain, and Chroma(vectorDB)",
                "Created a way to distribute the installable Docker Compose install",
                "Created a way to update the AI with new data",
                "Created a globally scoped app in ServiceNow to allow for streaming data from the LLM",
            ]
        },
        {
            company: "SidekickSammy (product)",
            title: "Co-Founder",
            location: "Robbinsdale, MN",
            duration: "2023 - Present",
            summary: "",
            duties: [
                "Created Chatbot for Websites",
                "Using a hosted vectorDB(fixie) and built a way to manage agents for customers",
                "Added a hubspot integration to allow chat to occur on hubspots platform",
                "Created a crawler to pull the pages, convert the text to markdown, and add it to the vectorDB",
            ]
        },
        {
            company: "ScribeMonster (product)",
            title: "Creator",
            location: "Robbinsdale, MN",
            duration: "2021 - 2024",
            summary: "",
            duties: [
                "Created a few-shot for every record script type in ServiceNow",
                "Loaded those into my RedwoodJS server to be used by the Chrome Extension",
                "Created a Chrome Extension using Vite to complete the few-shot with appropriate scripts",
            ]

        },
        */
        {
            company: "Delta Air Lines",
            title: "Senior ServiceNow Developer",
            location: "Minneapolis, MN",
            duration: "2022 - 2024",
            summary: "",
            duties: [
                "Ensure ServiceNow is current with releases as they come out",
                "Learn about new features that pertain to our environment",
                "Mentored and learned from coworkers as they learn more ServiceNow",
                "Designed stories in parts so they can be worked on by multiple people",
                "Worked on stories to completion",
                "Ensured SOX compliance and developer standards are met by Code Review",
                "Reduced Code Review time by creating Instnace Scan rules",
                "Became familiar with the HRSD Product",
                "Updated HRSD Portal Ticket to include correct data, was missing before",
                "Created and updated Catalog Items",
                "Troubleshot complex scoped database view access control issues",
                "Removed need for Incident Tasks",
                "Desigend and implemnted new email notifications for consitency",
                "Implemented AI Search",
                "Led the upgrade to Vancouver",
                "Created custom dialog for Problem to update related incidents",
                "Secured instance by working through Healthscan findings",
                "Modified LDAP imports to include new data",

            ]

        },
        {
            company: "AgilitiHealth",
            title: "ServiceNow Developer",
            location: "Minneapolis, MN",
            duration: "2022 - 2022",
            summary: "",
            duties: [
                "Created simple interface for entering historical activites",
                "Evaluated XType for CICD purposes",
                "Peer reviewed, validated, and contributed to the team by working on stories using AGILE",
                "Created a custom dialog to enter complex usage data for devices"
            ]
        },
        /*
        {
            company: "news.jace.pro (product)",
            title: "Creator",
            location: "Robbinsdale, MN",
            duration: "2019 - Present",
            summary: "",
            duties: [
                "Created a news aggregator for ServiceNow",
                "Added a way to upvote articles",
                "Added controls to deactivate articles",
                "Added a way to add new-non RSS feeds",
                "Handles checking 200+ feeds in under 5 minutes",
                "Breaks down the articles by author and source",
                "Added some utilies like presenting the ServiceNow Apps with data present on the forms",
                "Added an abstraction to pull all partners from the ServiceNow Partner Portal",
                "Added custom K23, and K24 pages to help teams coordinate their sessions at Knowledge Conference",
            ]


        },
        */
        {
            company: "FICO",
            title: "ServiceNow Developer",
            location: "Roseville, MN",
            duration: "2016 - 2022",
            summary: "",
            duties: [
                "Ensure ServiceNow is current with releases as they come out",
                "Solve incidents as they come in for ServiceNow",
                "Point, accept, build, and release code in 2 week sprints",
                "Learn about new features that pertain to our environment",
                "Reduced the time to fulfill a Certificate with Private Key from days to minutes by adding automation to generate them",
                "Reduced the time to request hundreds of Server Decoms by allowing Operations to paste a list of Servers in a custom field and having the system create the appropriate requests",
                "Converted CMS to Service Portal",
                "Improved accessibility to our customer portal by enabling, and configuring translations for catalog items, custom widgets, and kb articles",
                "Enabled the Telephony group to keep their Mobile Request form up to date per locations and networks",
                "Added visibility to server specific configurations not available to discovery with Server Ops to gather server specific details using a <a href='https://jace.pro/post/2019-11-13-custom-probe-sensor/'>factor commands</a>",
                "Configured and managed <a href='https://fivetran.com/'>FiveTran</a> and <a href='https://snowflake.com'>Snowflake's</a> connections to ServiceNow giving other teams access to ServiceNows data in a form that can be reported on with a universal data lake",
                "Mentored colleague who got access on how our team works with them to get their code changes in dev to production",
                "Went through the process of \"harding\"  our instance via the <a href='https://docs.servicenow.com/bundle/rome-platform-administration/page/administer/security/concept/instance-security-center.html'>Instance Security Center</a>",
                "Built automated Rolling Refreshes of our workstations based on their assets contracts end dates",
                "Added visibility into data integrity issues by pulling data from <a href='https://www.jamf.com/'>JAMF</a> (mac app versions), <a href='https://www.code42.com/'>Code42</a> (automated backup status), and <a hre='https://docs.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune'>Intune</a> Compliance",
                "Pulled in critical event data from <a href='https://www.thousandeyes.com/'>Thousand Eyes</a> for visibility of issues as they happened",
                "Led the charge for ATF at FICO",
                "Added visibility to Networking devices from <a href='https://www.solarwinds.com/'>Solarwinds</a> via a restful integration",
                "Automated access to <a href='https://www.atlassian.com/software/fisheye/features'>Jira's Fisheye</a> product from a Service catalog form",
                "Added visibility to installed software for <a href='https://www.kennasecurity.com/'>Kenna</a> and <a href='https://www.qualys.com/'>Qualys</a> for security",
                "Automated access requests for <a href='https://www.theforeman.org/'>Foreman</a> with REST",
            ]
        },
        {
            company: "Expedia",
            title: "Senior Engineer II",
            location: "Bellevue, WA",
            duration: "2014 - 2016",
            summary: "",
            duties: [
                "Played a key role in helping to define, document, and improve existing and new ServiceNow development processes with a goal of increasing quality while making the team more efficient",
                "Determined projects scope, functional requirements and a strategy that meets our customer's needs while satisfying scalability, reliability, performance, and resource constraints",
                "Provided extensive troubleshooting and technical expertise in identifying issues that impact service delivery",
                "Assisted in creating many integrations with many other teams using REST, SOAP, and custom processors in ServiceNow",
                "Was a major technical contributor to the re-launch of the Service Catalog",
                "Added integration to Puppet and SCCM to make our CMDB represent what Discovery couldn't get to",
                "Measured ServiceNow's performance after two unscheduled outages",
                "Created past metrics where possible to allow better insights into previous trends",
                "Implemented a Aggregate API which allowed other teams to get more data with less calls (before the official Aggregate API was released)"
            ]
        },
        {
            company: "Fruition Partners",
            title: "Senior Integration Consultant",
            location: "Minneapolis, MN",
            duration: "2011 - 2014",
            summary: "",
            duties: [
                "Developed integrations between the ServiceNow and various supporting software solutions. Participated in presales scoping meetings to properly scope the estimated level of effort for client's integrations",
                "Designed and develop integrations to meet the requirements of the client and ensure that the goals, objectives, and quality of project deliverables are met",
                "Accountable to the quality delivery of all assigned integration engagements",
                "Participated in presales scoping meetings to help the sales team properly scope the estimated level of effort for a potential client's integration",
                "Worked with clients to understand and meet their data conversion needs",
                "Was the onsite and primary integrations specialist for creating a fully automated end-to-end internal cloud offering leveraging the customers CHEF implentation, ServiceNow's Service Portfolio, and CMDB",
                "Worked to move some integrations from a previous solution to APIGEE as a middle technology with ServiceNow on the other side",
                "Provided guidance on technical matters to both the client and internal resources alike, created a collaborative environment that maintained scope and met all the objectives set by the statements of work",
                "Worked with project sponsors and system administrators to customize ServiceNow to work for their organizations",
                "Researched, diagnosed, documented and resolved technical issues",
                "Enhanced incident, request, change, and survey management",
                "Implemented service portfolio management",
                "Imported knowledge from RightAnswers into ServiceNow",
                "Assisted with Orchestration configuration",
                "Created SOAP integration to oracle database to provision access",
                "Created a tool to import thousands of Microsoft documents with images intact in the knowledge application",
                "Managed Mediawiki installation",
                "Earned ITIL v3 Foundations and ServcieNow Administration certifications"
            ],
            //class: "no-print"
        },
    ],
    projects: [

        {
            title: "AI in a Box",
            link: "https://getaiinabox.com",
            role: "Creator",
            duration: "2024 - Present",
            summary: "An alternative AI for ServiceNow.",
        },
        {
            title: "ScribeMonster",
            link: "https://github.com/jacebenson/scribe.monster",
            role: "Creator",
            duration: "2021 - 2024",
            summary: "A ServiceNow Chrome Extension and Server to help writing code, documentation and other AI tasks",
        },
        {
            title: "SNDocs",
            link: "https://sndocs.jace.pro",
            role: "Creator",
            duration: "2017 - Present",
            summary: "An unofficial ServiceNow version tracker",
            class: "no-print"
        },
        {
            title: "ServiceNow presonal docs",
            link: "https://sn.jace.pro",
            role: "Creator",
            duration: "2017 - Present",
            summary: "Started as a place to track the undocumented things.  Changed to hold any technical docs I find useful",
            class: "no-print"
        },
        {
            title: "News Jace Pro",
            link: "https://news.jace.pro",
            role: "Creator",
            duration: "2019 - Present",
            summary: "A ServiceNow News Aggregator",
            class: "print-only"
        },
        {
            title: "NowComponents",
            link: "https://nowcomponents.github.io",
            role: "Maintainer",
            duration: "2020 - 2020",
            summary: "Hacktoberfest 2020 Project to learn ServiceNow Now Components on Seismic",
            class: "no-print"
        },
        {
            title: "Blog",
            link: "https://jace.pro",
            role: "Creator",
            duration: "2015 - Present",
            summary: "A blog where I post anything I find helpful regarding ServiceNow and JamStack",
            class: "print-only"
        },
        {
            title: "nullEDGE conference",
            link: "https://thenulledge.com",
            role: "Co-Creator",
            duration: "2025 - Present",
            summary: "The conference I wished existed for ServiceNow, now a reality",
            class: "no-print"
        }
        /*
        {
            title: "Treetop",
            link: "https://treetop.jace.pro",
            role: "Creator",
            duration: "2019 - 2019",
            summary: "A wooden computer case for a raspberry pi."
        },*/
        /*{
            title: "Jace-ty",
            link: "https://jace-ty.netlify.app",
            role: "Creator",
            duration: "2020 - Present",
            summary: "A 11ty starter I maintain that is used on jace.pro",
            class: "no-print"
        },*/
        /*
        {
            title: "Cajunbot",
            link: "https://github.com/jacebenson/cajunbot",
            role: "Creator",
            duration: "2018 - Present",
            summary: "A Discord bot I run on some servers"
        },
        {
            title: "Joke Site",
            link: "https://joke.jace.pro",
            role: "Creator",
            duration: "2016 - Present",
            summary: "A simple Joke site"
        }*/

    ],
    skills: [
        { title: "Languages", summary: "HTML, CSS, SCSS, JavaScript, TypeScript, XML, Jelly, PHP, and SQL" },
        { title: "Libraries", summary: "jQuery, Angular, Prototype, Node.js, React, RedwoodJS, and 11ty" },
        { title: "Platforms", summary: "ServiceNow, Mediawiki, Node-red, Docker, and Wordpress" },
        { title: "Web Services", summary: "REST, SOAP, and GraphQL" }
    ],
    awards: [
        {
            title: "2020 ServiceNow Developer MVP", link: "https://developer.servicenow.com/blog.do?p=/post/all-stars/", organization: "ServiceNow", duration: "2020", class: "no-print"
        },
        {
            title: "2020 ServiceNow Community MVP", link: "https://www.servicenow.com/community/top-contributor-blog/congratulations-2020-now-community-mvp-awardees/ba-p/2288069", organization: "ServiceNow", duration: "2020", class: "no-print"
        },
        {
            title: "2021 ServiceNow Developer MVP", link: "https://developer.servicenow.com/blog.do?p=/post/2021-developer-mvp-announcement/", organization: "ServiceNow", duration: "2021", class: "no-print"
        },
        {
            title: "2021 ServiceNow Community MVP", link: "https://www.servicenow.com/community/top-contributor-blog/congratulations-2021-now-community-mvp-awardees/ba-p/2288544", organization: "ServiceNow", duration: "2021", class: "no-print"
        },
        {
            title: "2022 ServiceNow Developer MVP", link: "https://developer.servicenow.com/blog.do?p=/post/2022-mvp-announcement/", organization: "ServiceNow", duration: "2022", class: "no-print"
        },
        {
            title: "2022 ServiceNow Community MVP", link: "https://www.servicenow.com/community/in-other-news/announcing-our-2022-mvp-and-rising-stars/ba-p/2270403", organization: "ServiceNow", duration: "2022", class: "no-print"
        },
        {
            title: "ServiceNow Community and Developer MVP", organization: "ServiceNow", duration: "2020, 2021, 2022", class: "print-only"
        }

    ],
    associations: [
        { title: "ServiceNow Minneapolis Meetup", link: "https://www.meetup.com/Minneapolis-ServiceNow-Developer-Meetup/", organization: "ServiceNow", role: "Organizer", duration: "2016 - Present" }
    ]
};
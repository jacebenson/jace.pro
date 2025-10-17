let events = [];
let eventsToAdd = [
    { date: "2022-06-07", time: "afternoon", title: "See How Qualys is Revolutionizing Cybersecurity Risk Management - Event by Qualys", link: "https://www.linkedin.com/events/6935322286824591360/"},
    { date: "2022-06-07", time: "day", title: "Live on ServiceNow Webinar: Get started using Virtual Agent for IT Services Management and MSFT Teams", link: "#" },
    { date: "2022-06-07", time: "day", title: "Webinar: Automate your cyber security with ServiceNow - Event by Devoteam N Platform", link: "https://www.linkedin.com/events/6928292422019858432/" },
    { date: "2022-06-08", time: "day", title: "Improving your Upgrades with Store Apps", link: "https://community.servicenow.com/community?id=community_event&sys_id=54970eccdb7e0950e2adc223059619e5" },
    { date: "2022-06-08", time: "day", title: "Now with Troy", link: "#"},
    { date: "2022-06-09", time: "day", title: "Atlanta, GA SNUG", link: "https://community.servicenow.com/community?id=community_event&sys_id=e9b2f8dddb638dd0be625ac2ca9619c2" },
    { date: "2022-06-09", time: "day", title: "Flow Designer Migration Use Cases", link: "https://community.servicenow.com/community?id=community_event&sys_id=ae659b73db264150ae8125091396194f" },
    { date: "2022-06-09", time: "day", title: "San Antonio, TX SNUG", link: "https://community.servicenow.com/community?id=community_event&sys_id=d69e2a501b9f0510acdc54e56b4bcba2" },
    { date: "2022-07-06", time: "evening", title: "WORKSHOP and Q&A - ServiceNow Employee Centre – Enabling informed, engaged & productive employees by sysintegra", link: "https://www.linkedin.com/events/6902943697877524480/" },
    { date: "2022-06-10", time: "evening", title: "PhxDev on Commenting Code", link: "https://www.youtube.com/c/PhxDev" },
    { date: "2022-06-14", time: "day", title: "Best Practices on Performance Analytics", link: "https://info.servicenow.com/LiveOnServiceNow-ITSM"},
    { date: "2022-06-14", time: "day", title: "How New Plymouth District Council maximized its business outcomes by PEX Network", link: "https://www.linkedin.com/events/6930169612055547904/"},
    { date: "2022-06-15", time: "day", title: "Now with Troy", link: "#" },
    { date: "2022-06-15", time: "day", title: "ServiceNow Roadmap Strategy Panel - Event by VividCharts", link: "https://www.linkedin.com/video/event/urn:li:ugcPost:6937818151225110528/" },
    { date: "2022-06-15", time: "day", title: "Amsterdam Meetup", link: "https://www.meetup.com/Amsterdam-ServiceNow-Developer-Meetup/events/285745791/" },
    { date: "2022-06-15", time: "day", title: "Phoenix Meetup", link: "https://www.meetup.com/Phoenix-ServiceNow-Developer-Meetup/events/285697919/" },
    { date: "2022-06-15", time: "evening", title: "Build Wordle on ServiceNow PHX Dev Meetup", link: "https://www.meetup.com/Phoenix-ServiceNow-Developer-Meetup/events/285697919/" },
    { date: "2022-06-15", time: "evening", title: "Webinar: Enhance the Customer Experience with ServiceNow - Event by The Cloud People Global", link: "https://www.linkedin.com/events/6934754877269020672/" },
    { date: "2022-06-17", time: "evening", title: "PhxDev Surprise!", link: "https://www.youtube.com/c/PhxDev" },
    { date: "2022-06-18", time: "day", title: "Pune Meetup", link: "https://www.meetup.com/pune-servicenow-developer-meetup/events/286240598/" },
    { date: "2022-06-18", time: "afternoon", title: "Maik Skoddow & Navjot Walia speak at Kolkata(virtual) Developer Meetup", link: "https://www.meetup.com/kolkata-servicenow-developer-meetup/events/285911111/?_xtd=gqFyqTMxOTM1ODE4MKFwo2FwaQ&from=ref"},
    { date: "2022-06-24", time: "day", title: "Isaan Shoor is trying something new at the Melbourne Meetup", link: "https://meetu.ps/e/KYPjJ/GmJ9G/i" },
    { date: "2022-06-24", time: "evening", title: "PhxDev on Exiting Development!", link: "https://www.youtube.com/c/PhxDev" },
    { date: "2022-06-29", time: "day", title: "How to manage your relationships in ServiceNow for FREE - Event by ins-pi GmbH", link: "https://www.linkedin.com/events/6937354744487157760/?midToken=AQHjkidsH7UwUA&midSig=1dWcS0Hts1Kqg1" },
    { date: "2022-07-01", time: "evening", title: "PhxDev Q+A", link: "https://www.youtube.com/c/PhxDev" },
    { date: "2022-08-18", time: "day", title: "SNUG Live @ Toronto", link: "https://info.servicenow.com/TorontoSNUG-ONCA-18AUG22.html" }
]
eventsToAdd.forEach(event => {

    // we're in CST so we need to add 5 hours to get to UTC
    let date = new Date(event.date + "T00:00:00");
    date.setHours(date.getHours() + 5);

    let time = event.time;
    let title = event.title;
    // check if date is in events array
    let dateIndex = events.findIndex(e => e.date.toDateString() === date.toDateString());
    if (dateIndex === -1) {
        // if not, add it
        events.push({
            date: date,
            [time]: [title]
        });
    } else {
        // if it is, check if there's alread a "time".
        if (events[dateIndex][time]) {
            // if there is, add a comma and the title
            events[dateIndex][time].push(title);
        } else {
            // if there isn't, just add the title
            events[dateIndex][time] = [title];
        }
        //    events[dateIndex][time] += `\n${title}`;
    }
}
);

// we need to sort the dates so they're in order
events.sort((a, b) => {
    return a.date - b.date;
}
);

module.exports = { events: events, eventsToAdd: eventsToAdd };
---
title: "Learning GraphQL"
subtitle: "My notes from the EDX course"
summary: ""
date: 2020-11-28T22:00:00-05:00
tags: "draft"
---

I was trying to learn GraphQL for a few reasons, and since we all need to learn it eventually to do Now Component work, I thought I'd share how I'm learning.

I started looking at Things that teach Prisma + GraphQL but, the resources I found seem to keep them seperate (lucky for you). Prisma is a ORM and isn't related to ServiceNow. On [https://graphql.org/learn/](https://graphql.org/learn/) they link to [How To GraphQL](https://www.howtographql.com) write they have partnered with [edx](https://www.edx.org/course/exploring-graphql-a-query-language-for-apis).

I've looked at howtographql.com before but I need to understand quieries and mutations better and their documentation didn't get into those weeds.

howtograpql seems to be the more, um, brief resouce of the two.

howtographql says its will take 42 minutes for the basics, then has 6 more advanced optional chapters.
edx says it takes 1-2 hours per week (7 weeks total). First week is GraphQL Basics, so 60-120 minutes.

Maybe i need more hand holding but I'm opting for Edx. The chapter names are the same.

<details>
  <summary><span><h2>Chapter 0: Welcome!</h2></span></summary>

#### Prerequisites

- Chapter 1 (nothing listed)
- Chapter 2-6, need to be familiar with
  - Web Clients
  - Web Servers
  - Web Development concepts such as;
    - Caching
    - HTTP Requests
    - Build time

#### Getting Help

[Discussion Forums](https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS141x+3T2019/discussion/forum/). They recomend doing a search before you post to see if that has been addressed.

#### Prisma, Novvum and Hasura

[Prisma](https://www.prisma.io/) creates tools and that replaces traditional ORMs. Prisma enriches the GraphQL ecosystem and community by creating high-quality tools and software.

[Novvum](https://novvum.io/) is a versatile full-stack agency specializing in GraphQL, React and Node. Novvum partners with companies to create meaningful products from start to finish.

[Hasura](https://hasura.io/) is an open source engine that connects to your databases & microservices and auto-generates a production-ready GraphQL backend. Hasura gives you realtime GraphQL APIs that are high-performance, scalable, extensible & secure (with authorization baked in).

#### Meet your Instructors

- Allison Colyer @ Novvum
- Rohit Ravikoti @ Novvum

</details>
<details>
  <summary><span><h2>Chapter 1: GraphQL Fundamentals</summary>
  <details>
  <summary><span><h3>Introduction to GraphQL<h3></span></summary>
  
  #### Goals
  By the end of this Section, we should be able to;
  - Define what GraphQL is
  - Explain advantages of GraphQL over REST API are
  - Present the history of GraphQL

#### Notes

- GraphQL is a New API Standard as an alternative to REST
- GraphQL enables declarative data fetching
- GraphQL server exposes a single endoing that response to queiries
- GraphQL was made to allow clients to specifically get the data needed for low-data/poor connection areas
- GraphQL shouldn't need modifications when changing the client/frontend, thus making development faster
- GraphQL is not only for React Developers.
- GraphQL has been in use by Facebook from 2012
- Netlix open-sourced their implementation called Falcor.

#### Resources

- Examine the [36 most important GraphQL concepts](https://36-concepts-graphql.netlify.com/)
- [React.js Conf 2015 - Data fetching for React applications at Facebook](https://www.youtube.com/watch?v=9sc8Pyc51uU)
</details>

  <details>
    <summary><span><h3>Comparison of GraphQL and REST</h3></span></summary>
  
  #### Goals
  By the end of this Section, we should be able to;
  - Compare examples of REST queries versus GraphQL queries
  - Explain how GraphQL solves the over-fetching and under-fetching problmes of REST APIs
  - Discuss why GraphQL allows frontend and backend teams to work independently

#### Notes

- REST has some great ideas such as
  - Stateless servers
  - Structured access to resouces
- REST is a strict specification, but was wildy interpreted meaning nothing is standard.
- GraphQL was made to cope with the need for more flexibility and efficiency in client-server communication
- No more over and under fetching
  - Overfetching: downloading unnecessary data
  - Underfetching: An endpoint doesnt retrun enough of the right information
- Schema serves as a contract between client and server

#### Resources

- [Lessons from 4 years of GraphQL](https://www.graphql.com/articles/4-years-of-graphql-lee-byron)

  </details>

  <details>
    <summary><span><h2>Graph</h2></span></summary>

  </details>

</details>
<details>
  <summary><span><h2>Chapter 2: Clients</h2></span></summary>

</details>  
<details>
  <summary><span><h2>Chapter 3: Server</h2></span></summary>

</details>  
<details>
  <summary><span><h2>Chapter 4: More GraphQL Concepts</h2></span></summary>
</details>  
<details>
  <summary><span><h2>Chapter 5: Tooling & Ecosystem</h2></span></summary>
</details>  
<details>
  <summary><span><h2>Chapter 6: Security</h2></span></summary>
</details>  
<details>
  <summary><span><h2>Chapter 7: Common Questions</h2></span></summary>
</details>

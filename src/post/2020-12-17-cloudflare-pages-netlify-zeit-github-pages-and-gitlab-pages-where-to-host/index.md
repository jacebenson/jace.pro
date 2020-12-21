---
title: "CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host for free?"
subtitle: "CloudFlare Pages vs Netlify vs Zeit vs Github Pages vs Gitlab Pages"
summary: "I was looking at CloudFlare Pages and thought I want to see all the
  Places with JAMStack hosting compared with all the features."
date: 2020-12-17T21:27:27.004Z
tags: "post"
---
<a name="top"></a>
# CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host?

Let me know in the comments or via a [GitHub issue](https://github.com/jacebenson/jace.pro/issues/new) if I'm missing something or got something wrong.

| ⬇ Feature / Host ➡ | [GitHub Pages][GH-Free]    | [GitLab Pages][GL]    | [Netlify][NE]            | [Vercel][VE-1]         | [CloudFlare][CF-1]  |
| ------------------- | -------------------------- | --------------------- | ------------------------ | ---------------------- | ------------------- |
| Price               | $0 if Public [⁽¹⁾]         | Free[⁽²³⁾]            | Free[⁽⁴⁴⁾]               | Free[⁽⁶⁶⁾]             | Free[⁽⁸⁸⁾]          |
| **Build**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Build Limits        | 10 / hour[⁽²⁾]             | None[⁽²⁴⁾]            | 3 / minute[⁽⁴⁵⁾]         | 32 / hour[⁽⁶⁷⁾]        | 500 / month[⁽⁸⁹⁾]   |
| Build Time to Error | NA[⁽³⁾]                    | 3 Hours[⁽²⁵⁾]         | 15 minutes[⁽⁴⁶⁾]         | 30 Minutes[⁽⁶⁸⁾]       | Unlisted[⁽⁹⁰⁾]      |
| Build Time/Month    | NA[⁽⁴⁾]                    | 400 minutes[⁽²⁶⁾]     | 300 minutes[⁽⁴⁷⁾]        | 100 Hours[⁽⁶⁹⁾]        | Unlisted[⁽⁹¹⁾]      |
| Concurrent Builds   | NA[⁽⁵⁾]                    | Yes[⁽²⁷⁾]             | One[⁽⁴⁸⁾]                | One[⁽⁷⁰⁾]              | One[⁽⁹²⁾]           |
| Deploy Limits       | NA[⁽⁶⁾]                    | No[⁽²⁸⁾]              | NA[⁽⁴⁹⁾]                 | 100 / day[⁽⁷¹⁾]        | None Listed[⁽⁹³⁾]   |
| Deploy Previews     | No[⁽⁷⁾]                    | No[⁽²⁸ᵃ⁾]             | Yes[⁽⁵⁰⁾]                | Yes[⁽⁷²⁾]              | Yes[⁽⁹⁴⁾]           |
| **Serverless**      | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Serverless Functions| No[⁽⁸⁾]                    | No[⁽²⁹⁾]              | Yes[⁽⁵¹⁾]                | Yes[⁽⁷³⁾]              | Yes[⁽⁹⁵⁾]           |
| Invocations/Mo      | NA[⁽⁹⁾]                    | NA[⁽³⁰⁾]              | 125k/per site[⁽⁵²⁾]      | 100GB-hours[⁽⁷⁴⁾]      | [⁽⁹⁶⁾]              |
| Duration Allowed    | NA[⁽¹⁰⁾]                   | NA[⁽³¹⁾]              | 10 seconds[⁽⁵³⁾]         | 10 seconds[⁽⁷⁵⁾]       | [⁽⁹⁷⁾]              |
| **Domain**          | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| DNS Management      | No[⁽¹¹⁾]                   | No[⁽³²⁾]              | Yes[⁽⁵⁴⁾]                | Yes[⁽⁷⁶⁾]              | Yes[⁽⁹⁸⁾]           |
| HTTPS available     | Yes[⁽¹¹⁾]                  | Yes[⁽³³⁾]             | Yes[⁽⁵⁵⁾]                | Yes[⁽⁷⁷⁾]              | Yes[⁽⁹⁹⁾]           |
| Bandwidth           | 100 GB / month[⁽¹³⁾]       | No Limit[⁽³⁴⁾]        | 100 GB / month[⁽⁵⁶⁾]     | 100 GB / month[⁽⁷⁸⁾]   | No Limit[⁽¹⁰⁰⁾]     |
| **Site**            | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Site Limit          | 1 GB[⁽¹⁴⁾]                 | 10 GB[⁽³⁵⁾]           | 100 GB[⁽⁵⁷⁾]             | 10K Files[⁽⁷⁹⁾]        | 20K Files[⁽¹⁰¹⁾]    |
| Default URL         | github.io[⁽¹⁵⁾]            | gitlab.io[⁽³⁶⁾]       | netlify.app[⁽⁵⁸⁾]        | vercel.app[⁽⁸⁰⁾]       | pages.dev[⁽¹⁰²⁾]    |
| **Teams**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| # of Team Members   | Unlimited[⁽¹⁶⁾]            | Unlimited[⁽³⁷⁾]       | One[⁽⁵⁹⁾]                | One[⁽⁸¹⁾]              | Unlimited[⁽¹⁰³⁾]    |
| SSO Available       | Yes[⁽¹⁷⁾]                  | Yes[⁽³⁸⁾]             | Yes[⁽⁶⁰⁾]                | Not for free[⁽⁸²⁾]     | Unlisted[⁽¹⁰⁴⁾]     |
| **Users**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| # of Users          | Yes[⁽¹⁸⁾]                  | Yes[⁽³⁹⁾]             | 1000/site/month[⁽⁶¹⁾]    | No[⁽⁸³⁾]               | No[⁽¹⁰⁵⁾]           |
| SSO Available       | Yes[⁽¹⁹⁾]                  | Yes[⁽⁴⁰⁾]             | Not for free[⁽⁶²⁾]       | NA[⁽⁸⁴⁾]               | NA[⁽¹⁰⁶⁾]           |
| **Forms**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Submissions/Mo      | NA[⁽²⁰⁾]                   | NA[⁽⁴¹⁾]              | 100[⁽⁶³⁾]                | NA[⁽⁸⁵⁾]               | Yes & No[⁽¹⁰⁷⁾]     |
| **Analytics**       | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Pageviews/month     | No[⁽²¹⁾]                   | Not Yet[⁽⁴²⁾]         | No[⁽⁶⁴⁾]                 | Unclear[⁽⁸⁶⁾]          | Yes[⁽¹⁰⁸⁾]          |
| **Split Testing**   | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| A / B Testing       | No[⁽²²⁾]                   | No[⁽⁴³⁾]              | Yes[⁽⁶⁵⁾]                | No[⁽⁸⁷⁾]               | No[⁽¹⁰⁹⁾]           |

| References|                                                                                                                                                                     |   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |---|
|           | **GitHub**                                                                                                                                         <a name="1"></a> |[Top]|
| [⁽¹⁾]     | GitHub public repos are "Free" and have access to GitHub Pages.  Private repos don't have this feature unless paid.                                <a name="2"></a> |[Top]|
| [⁽²⁾]     | [GitHub Pages sites have a soft limit of 10 builds per hour.][GH-Usage-Limits]                                                                     <a name="3"></a> |[Top]|
| [⁽³⁾]     | I couldn't find a quantity of builds can happen at once on GitHub pages.                                                                           <a name="4"></a> |[Top]|
| [⁽⁴⁾]     | I couldn't find any build minutes for pages. GitHub Actions, needed for Serverless, has a limit of 2000 a month                                    <a name="5"></a> |[Top]|
| [⁽⁵⁾]     | I couldn't find a quantity of builds can happen at once on GitHub pages.                                                                           <a name="6"></a> |[Top]|
| [⁽⁶⁾]     | I couldn't find any deploy limits for GitHub Pages.                                                                                                <a name="7"></a> |[Top]|
| [⁽⁷⁾]     | GitHub does not have Deploy Previews per-se but there's GitHub Actions that might do this.                                                         <a name="8"></a> |[Top]|
| [⁽⁸⁾]     | There's no native serverless function on GitHub, you can [make an action][GH-Action-to-function] to make a function on AWS.                        <a name="9"></a> |[Top]|
| [⁽⁹⁾]     | Not Applicable                                                                                                                                    <a name="10"></a> |[Top]|
| [⁽¹⁰⁾]    | Not Applicable                                                                                                                                    <a name="11"></a> |[Top]|
| [⁽¹¹⁾]    | You can [create a CNAME][GH-Apexdomains] file for the DNS, but no way to dicate other [subdomains][GH-Subdomains] from the Repo.                  <a name="12"></a> |[Top]|
| [⁽¹²⁾]    | [GitHub serves their sites over HTTPS][GH-HTTPS], if you use your own domain, you need a certificate.                                             <a name="13"></a> |[Top]|
| [⁽¹³⁾]    | [GitHub Pages sites have a soft bandwidth limit of 100GB per month.][GH-Usage-Limits]                                                             <a name="14"></a> |[Top]|
| [⁽¹⁴⁾]    | [Published GitHub Pages sites may be no larger than 1 GB.][GH-Usage-Limits]                                                                       <a name="15"></a> |[Top]|
| [⁽¹⁵⁾]    | [You can host your site on GitHub's github.io domain or your own custom domain.][GH-DefaultDomain]                                                <a name="16"></a> |[Top]|
| [⁽¹⁶⁾]    | [How long will GitHub Free allow unlimited collaborators?  Forever! This change is permanent.][GH-Team]                                           <a name="17"></a> |[Top]|
| [⁽¹⁷⁾]    | [If you're using GitHub as a organization, you can set up SAML single sign-on.][GH-SAMLSSO]                                                       <a name="18"></a> |[Top]|
| [⁽¹⁸⁾]    | You can point users to use [GitHub's OAuth Service][GH-OAuth].  I'm not sure how that would work, but it's an option.                             <a name="19"></a> |[Top]|
| [⁽¹⁹⁾]    | Users of GitHub can have SSO set up if they're part of an organization that sets that up.                                                         <a name="20"></a> |[Top]|
| [⁽²⁰⁾]    | GitHub provides no "Forms" but you can leverage Issues for that.                                                                                  <a name="21"></a> |[Top]|
| [⁽²¹⁾]    | GitHub provides you no analytics on your websites page views.                                                                                     <a name="22"></a> |[Top]|
| [⁽²²⁾]    | GitHub provides no A/B Testing I'm aware of.                                                                                                                        |[Top]|
|           | **GitLab**                                                                                                                                        <a name="23"></a> |[Top]|
| [⁽²³⁾]    | GitLab repos are Free.                                                                                                                            <a name="24"></a> |[Top]|
| [⁽²⁴⁾]    | GitLab limits builds and other CI/CD to Pipeline Minutes.  [400 Minutes are free][GL-Build-Minutes].  No Build Limit beyond that.                 <a name="25"></a> |[Top]|
| [⁽²⁵⁾]    | Jobs handled by the shared runners on GitLab.com, [time out after 3 hours][GL-Build-Time-Out], regardless of the timeout configured in a project. <a name="26"></a> |[Top]|
| [⁽²⁶⁾]    | [400 Minutes are free][GL-Build-Minutes]                                                                                                          <a name="27"></a> |[Top]|
| [⁽²⁷⁾]    | [For each runner a concurrent job can execute.][GL-PipeLines]                                                                                     <a name="28"></a> |[Top]|
| [⁽²⁸⁾]    | I couldn't find any deploy limits for GitLab Pages.                                                                                              <a name="28a"></a> |[Top]|
| [⁽²⁸ᵃ⁾]   | I couldn't find anything about deploys on pull requests.                                                                                          <a name="29"></a> |[Top]|
| [⁽²⁸⁾]    | I couldn't find any deploy limits for GitLab Pages.                                                                                               <a name="29"></a> |[Top]|
| [⁽²⁹⁾]    | You can have a [runner build a AWS Lambda function][GL-AWS-Lambda].                                                                               <a name="30"></a> |[Top]|
| [⁽³⁰⁾]    | Not Applicable.                                                                                                                                   <a name="31"></a> |[Top]|
| [⁽³¹⁾]    | Not Applicable.                                                                                                                                   <a name="32"></a> |[Top]|
| [⁽³²⁾]    | GitLab doesn't manage your domains.  You [configure TXT Records to verify the domain.][GL-VerifyDomain]                                           <a name="33"></a> |[Top]|
| [⁽³³⁾]    | GitLab has a [integration with Let's Encrypt][GL-LetsEncrypt] to automatically do this.                                                           <a name="34"></a> |[Top]|    
| [⁽³⁴⁾]    | [GitLab doesn't set a max bandwidth for pages.][GL-ForumAnswers]                                                                                  <a name="35"></a> |[Top]|    
| [⁽³⁵⁾]    | The only limitations are < [10GB repository size][GL-ForumAnswers] and available pipeline minutes.                                                <a name="36"></a> |[Top]|    
| [⁽³⁶⁾]    | [gitlab.io][GL-GettingStarted] is the domain they share.                                                                                          <a name="37"></a> |[Top]|    
| [⁽³⁷⁾]    | Unlimited as it says on their [pricing page][GL-Pricing].                                                                                         <a name="38"></a> |[Top]|    
| [⁽³⁸⁾]    | Looks like there's integrations with [Okta][GL-SSO], so I assume you can do this with other SAML providers.                                       <a name="39"></a> |[Top]|    
| [⁽³⁹⁾]    | Like GitHub, GitLab offers itself as a [OAuth2 provider][GL-OAuth].                                                                               <a name="40"></a> |[Top]|    
| [⁽⁴⁰⁾]    | Again, like GitHub, GitLab offers [SAML SSO for GitLab.com groups][GL-SAML].                                                                      <a name="41"></a> |[Top]|    
| [⁽⁴¹⁾]    | GitLab provides no "Forms" but you can leverage Issues for that.                                                                                  <a name="42"></a> |[Top]|    
| [⁽⁴²⁾]    | Today GitLab does not provide any analytics, but being open source, there's an [issue for Server-side analtyics][GL-PagesAnalytics].              <a name="43"></a> |[Top]|    
| [⁽⁴³⁾]    | I found some issues that are a year to four years old.  Looks like this isn't available.                                                                            |[Top]|    
|           | **Netlify**                                                                                                                                       <a name="44"></a> |[Top]|
| [⁽⁴⁴⁾]    | Free as in [Free][NE-Features].                                                                                                                   <a name="45"></a> |[Top]|    
| [⁽⁴⁵⁾]    | Found on the [TOS page][NE-TOS].                                                                                                                  <a name="46"></a> |[Top]|    
| [⁽⁴⁶⁾]    | ["You should count on your builds having only 15 minutes to complete their build command"][NE-BuildTimeToError]                                   <a name="47"></a> |[Top]|    
| [⁽⁴⁷⁾]    | [300 minutes /month(then $7 per 500)][NE-Features]                                                                                                <a name="48"></a> |[Top]|    
| [⁽⁴⁸⁾]    | [One Concurrent build.][NE-Features]                                                                                                              <a name="49"></a> |[Top]|    
| [⁽⁴⁹⁾]    | There is no limit listed but you will be limited by your build minutes.                                                                           <a name="50"></a> |[Top]|    
| [⁽⁵⁰⁾]    | [Deploy a live shareable preview of your production URL or any individual branch that is not your production branch.][NE-Features]                <a name="51"></a> |[Top]|    
| [⁽⁵¹⁾]    | [These are great but keep in mind they are isolated from eachother, meaning you can't share a common file among them.][NE-Features]               <a name="52"></a> |[Top]|    
| [⁽⁵²⁾]    | [125k per site /month($25+ when exceeded)][NE-Features]                                                                                           <a name="53"></a> |[Top]|    
| [⁽⁵³⁾]    | [10 second execution limit for synchronous serverless functions][NE-Deployment-Options]                                                           <a name="54"></a> |[Top]|
| [⁽⁵⁴⁾]    | [Netlify offers the option to handle DNS management for you. ][NE-DNS]                                                                            <a name="55"></a> |[Top]|    
| [⁽⁵⁵⁾]    | [Netlify offers free HTTPS on all sites, including automatic certificate creation and renewal.][NE-HTTPS]                                         <a name="56"></a> |[Top]|    
| [⁽⁵⁶⁾]    | [Network Bandwidth: 100GB/month — Soft][NE-TOS]                                                                                                   <a name="57"></a> |[Top]|
| [⁽⁵⁷⁾]    | [Storage: 100GB / Soft][NE-TOS]                                                                                                                   <a name="58"></a> |[Top]|
| [⁽⁵⁸⁾]    | By default any site Netlify is accessible viat it's [Netlify subdomain][NE-CustomDomains] `[name-of-your-site]`.netlify.app                       <a name="59"></a> |[Top]|
| [⁽⁵⁹⁾]    | For free you get... [one team member][NE-Features] so for free... No team.                                                                        <a name="60"></a> |[Top]|
| [⁽⁶⁰⁾]    | Team Owners can allow team members to log in to Netlify through their company's [SAML signle sign on][NE-SAMLSSO].                                <a name="61"></a> |[Top]|
| [⁽⁶¹⁾]    | Here's the link to the [Netlify Identity details][NE-Identity].                                                                                   <a name="62"></a> |[Top]|
| [⁽⁶²⁾]    | Here [SAML-SSO lists][NE-Identity] as ❌ for free, and ✔ for Level 2.                                                                            <a name="63"></a> |[Top]|
| [⁽⁶³⁾]    | [100 submissions a month, and up to 10MB of uploads a month.][NE-Forms]                                                                           <a name="64"></a> |[Top]|
| [⁽⁶⁴⁾]    | [Analytics are available for $9 a month per site.][NE-Analytics]                                                                                  <a name="65"></a> |[Top]|
| [⁽⁶⁵⁾]    | [Netlify Split Testing lets your divide your traffic to your site between different deploys.][NE-Split-Testing]                                   <a name="66"></a> |[Top]|
|           | **Vercel**                                                                                                                                        <a name="67"></a> |[Top]|
| [⁽⁶⁶⁾]    | [This has a free option][VE-Pricing]                                                                                                                                |[Top]|
| [⁽⁶⁷⁾]    | [You are able to build 32 Deployments every 3600 seconds (1 hour).][VE-Builds-Per-Hour]                                                           <a name="68"></a> |[Top]|
| [⁽⁶⁸⁾]    | [A build can last for 30 minutes. If the build exceeds this time, the deployment will error.][VE-Max-Build-Duration]                              <a name="69"></a> |[Top]|
| [⁽⁶⁹⁾]    | On the [Fair Use Policy Page][VE-Fair-Use], it reads, Up to 100 Hrs.                                                                              <a name="70"></a> |[Top]|
| [⁽⁷⁰⁾]    | [Hobby is allotted One (1) build concurrently][VE-Concurrent-Builds].                                                                             <a name="71"></a> |[Top]|
| [⁽⁷¹⁾]    | [100 / day][VE-11]                                                                                                                                <a name="72"></a> |[Top]|
| [⁽⁷²⁾]    | They have this... in their main page, I couldn't find it in their docs.                                                                           <a name="73"></a> |[Top]|
| [⁽⁷³⁾]    | Vercel has [Serverless Functions][VE-Serverless]. Not sure who hosts them but they have differnt [limits][VE-Serverless-Limits]                   <a name="74"></a> |[Top]|
| [⁽⁷⁴⁾]    | Vercel's Serverless functions usage is measured not in requests but in GB hours. I found this on the [Fair Use Page][VE-Fair-Use].                <a name="75"></a> |[Top]|
| [⁽⁷⁵⁾]    | On the [limits page][VE-Serverless-Timeout], they state it's 10 seconds.                                                                          <a name="76"></a> |[Top]|
| [⁽⁷⁶⁾]    | Vercel allows you to manage DNS Records on their site at noted on ["How can I manage my Vercel DNS records"][VE-DNS]                              <a name="77"></a> |[Top]|
| [⁽⁷⁷⁾]    | [Vercel automatically adds SSL from Let's Encrypt.][VE-SSL]                                                                                       <a name="78"></a> |[Top]|
| [⁽⁷⁸⁾]    | [Vercel limits bandwidgth to 100GB][VE-Fair-Use]                                                                                                  <a name="79"></a> |[Top]|
| [⁽⁷⁹⁾]    | [Vercel has a limit on files quantity, it's 10k][VE-Limits-Files]                                                                                 <a name="80"></a> |[Top]|
| [⁽⁸⁰⁾]    | [Vercel defaults to `.vercel.app`][VE-Domains]                                                                                                    <a name="81"></a> |[Top]|
| [⁽⁸¹⁾]    | [For free Vercel doesn't give you access to Teams][VE-Limits] (<kbd>CTRL</kbd>+<kbd>f</kbd> teams )                                               <a name="82"></a> |[Top]|
| [⁽⁸²⁾]    | [Vercel has this, but its only for "teams"][VE-Teams-SSO]                                                                                         <a name="83"></a> |[Top]|
| [⁽⁸³⁾]    | [Vercel lists solutions for Identity, but tehy don't have one with their offereings](https://vercel.com/docs/solutions/authentication)            <a name="84"></a> |[Top]|
| [⁽⁸⁴⁾]    | Not Applicable                                                                                                                                    <a name="85"></a> |[Top]|
| [⁽⁸⁵⁾]    | They dont have this in their offerings.  You can build something to do this, but its all you.                                                     <a name="86"></a> |[Top]|
| [⁽⁸⁶⁾]    | [Vercel offers Analtyics.][VE-Analytics]  It can run on any host but they are [limited to 1 day][VE-Analytics-Limits] for free.                   <a name="87"></a> |[Top]|
| [⁽⁸⁷⁾]    | I didn't see anyhting along these lines when looking                                                                                                                |[Top]|
|           | **Cloudflare**                                                                                                                                    <a name="89"></a> |[Top]|
| [⁽⁸⁸⁾]    | [Freeeee!][CF-Plans]                                                                                                                              <a name="89"></a> |[Top]|
| [⁽⁸⁹⁾]    | 500 / Month on the [limits][CF-Build-Limit] page.                                                                                                 <a name="90"></a> |[Top]|
| [⁽⁹⁰⁾]    | I cant find anything build details except ["Build commands and directories"][CF-Build-Config] and [Build settings][CF-Build-Settings]             <a name="91"></a> |[Top]|
| [⁽⁹¹⁾]    | I cant find anything build details except ["Build commands and directories"][CF-Build-Config] and [Build settings][CF-Build-Settings]             <a name="92"></a> |[Top]|
| [⁽⁹²⁾]    | On the [Plans][CF-Plans] page it says, "1 build at a time"                                                                                        <a name="93"></a> |[Top]|
| [⁽⁹³⁾]    | I coudn't find any "Deploy limits" but this is probably controlled via the builds. I asked on [twitter][CF-Deploy-Build-Limit-Q]                  <a name="94"></a> |[Top]|
| [⁽⁹⁴⁾]    | On the [pages site][CF-Pages] it shows "Preview early, preview often" and "Preview control" showing builds on commit, and control to who sees it. <a name="95"></a> |[Top]|
| [⁽⁹⁵⁾]    | Cloudflare has [workers][CF-Workers] to do serverless stuff.  This is a feature they've offered for years now.                                    <a name="96"></a> |[Top]|
| [⁽⁹⁶⁾]    | [100,000 / day, 1000 / minute.][CF-Workers-Limits]                                                                                                <a name="97"></a> |[Top]|
| [⁽⁹⁷⁾]    | [10ms][CF-Workers-Limits].  Wait what?  How can anything happen in 10ms?  I guess they are fast, always on, and has storage.                      <a name="98"></a> |[Top]|
| [⁽⁹⁸⁾]    | [CloudFlare has a huge offering for DNS management][CF-DNS]                                                                                       <a name="99"></a> |[Top]|
| [⁽⁹⁹⁾]    | [Yes, this is something they offer][CF-HTTPS]                                                                                                    <a name="100"></a> |[Top]|
| [⁽¹⁰⁰⁾]   | On the [Plans][CF-Plans] page it says, "Unlimited bandwidth"                                                                                     <a name="101"></a> |[Top]|
| [⁽¹⁰¹⁾]   | Cloudflare limits site to [20k files][CF-File-Limit]                                                                                             <a name="102"></a> |[Top]|
| [⁽¹⁰²⁾]   | [Cloudflare is using `pages.dev` for the domain][CF-Domain].  Also found more about it on [YouTube][CF-Domain-YouTube]                           <a name="103"></a> |[Top]|
| [⁽¹⁰³⁾]   | ["Unlimited seats for free: additional collaborators shouldn’t break the bank. With Pages, you can add them all for free."][CF-Pages]            <a name="104"></a> |[Top]|
| [⁽¹⁰⁴⁾]   | I couldn't find anything about collaborators login methods.                                                                                      <a name="105"></a> |[Top]|
| [⁽¹⁰⁵⁾]   | Workers has this, but that only shows how to [do user auth with Auth0][CF-Users].                                                                <a name="106"></a> |[Top]|
| [⁽¹⁰⁶⁾]   | Not applicable.                                                                                                                                  <a name="107"></a> |[Top]|
| [⁽¹⁰⁷⁾]   | With Workers, you get access to a Key-Value database, but you don't have a way to do forms without building a worker to handle the submission.   <a name="108"></a> |[Top]|
| [⁽¹⁰⁸⁾]   | Cloudflare is all about caching your sites.  They show you uncached traffic, you gotta pay for cached analytics.                                 <a name="109"></a> |[Top]|
| [⁽¹⁰⁹⁾]   | I could find [A / B testing for workers][CF-Workers-AB-Testing].  Not for pages.                                                                 <a name="110"></a> |[Top]|
[GH-Free]: https://github.com/pricing
[GH-Usage-Limits]: [https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#usage-limits]
[GH-Action-to-function]: https://github.com/serverless/github-action
[GH-HTTPS]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/securing-your-github-pages-site-with-https
[GH-Apexdomains]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain
[GH-Subdomains]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain
[GH-Guidelines]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#guidelines-for-using-github-pages
[GH-DefaultDomain]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#about-github-pages
[GH-Team]: https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/faq-about-changes-to-githubs-plans#how-long-will-github-free-allow-unlimited-collaborators
[GH-SAMLSSO]: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-authentication-with-saml-single-sign-on
[GH-OAuth]: https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps
[GL-Build-Minutes]: https://about.gitlab.com/releases/2020/09/01/ci-minutes-update-free-users/
[GL-Build-Time-Out]: https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners
[GL-PipeLines]: https://docs.gitlab.com/ee/ci/pipelines/
[GL-AWS-Lambda]: https://docs.gitlab.com/ee/user/project/clusters/serverless/aws.html
[GL-VerifyDomain]: https://about.gitlab.com/handbook/support/workflows/verify_pages_domain.html
[GL-LetsEncrypt]: https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/lets_encrypt_integration.html
[GL-ForumAnswers]: https://forum.gitlab.com/t/what-are-the-restrictions-for-gitlab-pages-sites/15067/6
[GL-GettingStarted]: https://docs.gitlab.com/ee/user/project/pages/getting_started_part_one.html
[GL-Pricing]: https://about.gitlab.com/pricing/
[GL-SSO]: https://about.gitlab.com/handbook/business-ops/okta/
[GL-OAuth]: https://docs.gitlab.com/ee/integration/oauth_provider.html
[GL-SAML]: https://docs.gitlab.com/ee/user/group/saml_sso/
[GL-PagesAnalytics]: https://gitlab.com/gitlab-org/gitlab-pages/-/issues/384
[GL]: https://docs.gitlab.com/ee/user/project/pages/
[NE-Features]: https://www.netlify.com/pricing/#features
[NE-TOS]: https://www.netlify.com/tos/#for-free-accounts
[NE-BuildTimeToError]: https://community.netlify.com/t/support-guide-how-long-should-netlify-builds-take/151/7
[NE-Functions]: https://docs.netlify.com/functions/overview/
[NE-DNS]: https://docs.netlify.com/domains-https/netlify-dns/
[NE-HTTPS]: https://docs.netlify.com/domains-https/https-ssl/
[NE-CustomDomains]: https://docs.netlify.com/domains-https/custom-domains/
[NE-SiteStorage]: https://community.netlify.com/t/are-there-storage-limits-on-the-starter-plan/5368/2
[NE-SAMLSSO]: https://docs.netlify.com/accounts-and-billing/team-management/saml-single-sign-on/
[NE-USERS]: https://docs.netlify.com/visitor-access/oauth-provider-tokens/
[NE-Forms]: https://www.netlify.com/pricing/#add-ons-forms
[NE-Identity]: https://www.netlify.com/pricing/#add-ons-identity
[NE-Analytics]: https://www.netlify.com/pricing/#add-ons-analytics
[NE-Split-Testing]: https://docs.netlify.com/site-deploys/split-testing/
[NE-Deployment-Options]: https://docs.netlify.com/functions/overview/#default-deployment-options
[NE]: https://netlify.com
[VE-Pricing]: https://vercel.com/pricing
[VE-Builds-Per-Hour]: https://vercel.com/docs/platform/limits#builds-per-hour-(free)
[VE-Max-Build-Duration]: https://vercel.com/docs/build-step#maximum-build-duration
[VE-Fair-Use]: https://vercel.com/docs/platform/fair-use-policy
[VE-Concurrent-Builds]: https://vercel.com/knowledge/why-are-my-vercel-builds-queued
[VE-Deploys-Per-Day]: https://vercel.com/docs/platform/limits#deployments-per-day-(free)
[VE-Analytics]: https://vercel.com/docs/analytics
[VE-Serverless]:https://vercel.com/docs/serverless-functions/introduction
[VE-Serverless-Limits]: https://vercel.com/docs/platform/limits#serverless-functions-per-deployment-(hobby)
[VE-Serverless-Timeout]: https://vercel.com/docs/platform/limits#serverless-function-execution-timeout
[VE-DNS]: https://vercel.com/knowledge/how-to-manage-vercel-dns-records
[VE-SSL]: https://vercel.com/blog/automatic-ssl-with-vercel-lets-encrypt
[VE-Limits-Files]: https://vercel.com/docs/platform/limits#files
[VE-Domains]: https://vercel.com/docs/custom-domains
[VE-Limits]: https://vercel.com/docs/platform/limits
[VE-Teams-SSO]: https://vercel.com/docs/platform/projects#sso-protection
[VE-Analytics-Limits]: https://vercel.com/docs/analytics#limits
[CF-Domain]: https://developers.cloudflare.com/pages/getting-started#add-a-custom-cname-record
[CF-Domain-YouTube]: https://youtu.be/IeHC4NwkEfc?t=524
[CF-DNS]: https://www.cloudflare.com/dns/
[CF-HTTPS]: https://support.cloudflare.com/hc/en-us/articles/360024787372-End-to-end-HTTPS-with-Cloudflare-Part-1-conceptual-overview
[CF-Pages]: https://pages.cloudflare.com/
[CF-Deploy-Build-Limit-Q]: https://twitter.com/jacebenson/status/1339791209942949889
[CF-Build-Limit]: https://developers.cloudflare.com/pages/platform/limits#builds
[CF-File-Limit]: https://developers.cloudflare.com/pages/platform/limits#files
[CF-Build-Settings]: https://developers.cloudflare.com/pages/getting-started#build-settings
[CF-Build-Config]: https://developers.cloudflare.com/pages/platform/build-configuration
[CF-Workers]: https://developers.cloudflare.com/workers/
[CF-Workers-Limits]: https://developers.cloudflare.com/workers/platform/limits
[CF-Plans]: https://pages.cloudflare.com/#plans
[CF-Users]: https://developers.cloudflare.com/workers/tutorials/authorize-users-with-auth0
[CF-Analytics]: https://www.cloudflare.com/web-analytics/
[CF-Workers-AB-Testing]: https://developers.cloudflare.com/workers/examples/ab-testing
[⁽¹⁾]: #1
[⁽²⁾]: #2
[⁽³⁾]: #3
[⁽⁴⁾]: #4
[⁽⁵⁾]: #5
[⁽⁶⁾]: #6
[⁽⁷⁾]: #7
[⁽⁸⁾]: #8
[⁽⁹⁾]: #9
[⁽¹⁰⁾]: #10
[⁽¹¹⁾]: #11
[⁽¹²⁾]: #12
[⁽¹³⁾]: #13
[⁽¹⁴⁾]: #14
[⁽¹⁵⁾]: #15
[⁽¹⁶⁾]: #16
[⁽¹⁷⁾]: #17
[⁽¹⁸⁾]: #18
[⁽¹⁹⁾]: #19
[⁽²⁰⁾]: #20
[⁽²¹⁾]: #21
[⁽²²⁾]: #22
[⁽²³⁾]: #23
[⁽²⁴⁾]: #24
[⁽²⁵⁾]: #25
[⁽²⁶⁾]: #26
[⁽²⁷⁾]: #27
[⁽²⁸⁾]: #28
[⁽²⁸ᵃ⁾]:#28a
[⁽²⁹⁾]: #29
[⁽³⁰⁾]: #30
[⁽³¹⁾]: #31
[⁽³²⁾]: #32
[⁽³³⁾]: #33
[⁽³⁴⁾]: #34
[⁽³⁵⁾]: #35
[⁽³⁶⁾]: #36
[⁽³⁷⁾]: #37
[⁽³⁸⁾]: #38
[⁽³⁹⁾]: #39
[⁽⁴⁰⁾]: #40
[⁽⁴¹⁾]: #41
[⁽⁴²⁾]: #42
[⁽⁴³⁾]: #43
[⁽⁴⁴⁾]: #44
[⁽⁴⁵⁾]: #45
[⁽⁴⁶⁾]: #46
[⁽⁴⁷⁾]: #47
[⁽⁴⁸⁾]: #48
[⁽⁴⁹⁾]: #49
[⁽⁵⁰⁾]: #50
[⁽⁵¹⁾]: #51
[⁽⁵²⁾]: #52
[⁽⁵³⁾]: #53
[⁽⁵⁴⁾]: #54
[⁽⁵⁵⁾]: #55
[⁽⁵⁶⁾]: #56
[⁽⁵⁷⁾]: #57
[⁽⁵⁸⁾]: #58
[⁽⁵⁹⁾]: #59
[⁽⁶⁰⁾]: #60
[⁽⁶¹⁾]: #61
[⁽⁶²⁾]: #62
[⁽⁶³⁾]: #63
[⁽⁶⁴⁾]: #64
[⁽⁶⁵⁾]: #65
[⁽⁶⁶⁾]: #66
[⁽⁶⁷⁾]: #67
[⁽⁶⁸⁾]: #68
[⁽⁶⁹⁾]: #69
[⁽⁷⁰⁾]: #70
[⁽⁷¹⁾]: #71
[⁽⁷²⁾]: #72
[⁽⁷³⁾]: #73
[⁽⁷⁴⁾]: #74
[⁽⁷⁵⁾]: #75
[⁽⁷⁶⁾]: #76
[⁽⁷⁷⁾]: #77
[⁽⁷⁸⁾]: #78
[⁽⁷⁹⁾]: #79
[⁽⁸⁰⁾]: #80
[⁽⁸¹⁾]: #81
[⁽⁸²⁾]: #82
[⁽⁸³⁾]: #83
[⁽⁸⁴⁾]: #84
[⁽⁸⁵⁾]: #85
[⁽⁸⁶⁾]: #86
[⁽⁸⁷⁾]: #87
[⁽⁸⁸⁾]: #88
[⁽⁸⁹⁾]: #89
[⁽⁹⁰⁾]: #90
[⁽⁹¹⁾]: #91
[⁽⁹²⁾]: #92
[⁽⁹³⁾]: #93
[⁽⁹⁴⁾]: #94
[⁽⁹⁵⁾]: #95
[⁽⁹⁶⁾]: #96
[⁽⁹⁷⁾]: #97
[⁽⁹⁸⁾]: #98
[⁽⁹⁹⁾]: #99
[⁽¹⁰⁰⁾]: #100
[⁽¹⁰¹⁾]: #101
[⁽¹⁰²⁾]: #102
[⁽¹⁰³⁾]: #103
[⁽¹⁰⁴⁾]: #104
[⁽¹⁰⁵⁾]: #105
[⁽¹⁰⁶⁾]: #106
[⁽¹⁰⁷⁾]: #107
[⁽¹⁰⁸⁾]: #108
[⁽¹⁰⁹⁾]: #109
[⁽¹¹⁰⁾]: #110
[⁽¹¹¹⁾]: #111
[Top]: #top
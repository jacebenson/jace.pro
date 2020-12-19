---
title: "CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host for free?"
subtitle: "CloudFlare Pages vs Netlify vs Zeit vs Github Pages vs Gitlab Pages"
summary: "I was looking at CloudFlare Pages and thought I want to see all the
  Places with JAMStack hosting compared with all the features."
date: 2020-12-17T21:27:27.004Z
tags: "draft"
---
# CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host?

Let me know in the comments or via a [GitHub issue](https://github.com/jacebenson/jace.pro/issues/new) if I'm missing something or got something wrong.

## Free

| ⬇ Feature / Host ➡ | [GitHub Pages][GH-1]       | [GitLab Pages][GL-1]  | [Netlify][NE-1]          | [Vercel][VE-1]         | [CloudFlare][CF-1]  |
| ------------------- | -------------------------- | --------------------- | ------------------------ | ---------------------- | ------------------- |
| Price               | $0 if Public [⁽¹⁾]         | [Free][GL-1]          | [Free][NE-1]             | [Free][VE-1]           | [Free][CF-3]        |
| **Build**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Build Limits        | 10 / hour[⁽²⁾]             | NA<sup>8</sup>        | [3 / minute][NE-4]       | [32 / hour][VE-6]      | [500 / month][CF-2] |
| Build Time to Error | NA[⁽³⁾]                    | [3 Hours][GL-2]       | [15 minutes][NE-6]       | [30 Minutes][VE-7]     | NA<sup>9</sup>      |
| Build Time/Month    | NA[⁽⁴⁾]                    | [400 minutes][GL-3]   | [300 minutes][NE-1]      | [100 Hours][VE-10]     | NA<sup>10</sup>     |
| Concurrent Builds   | NA[⁽⁵⁾]                    | [Yes][GL-7]           | [1][NE-1]                | [1][VE-4]              | [1][CF-3]           |
| Deploy Limits       | NA[⁽⁶⁾]                    | NA<sup>7</sup>        | NA<sup>40</sup>          | [100 / day][VE-5]      | [None, see preview deployments][CF-2] |
| **Serverless**      | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Serverless Functions| No[⁽⁷⁾]                    | No<sup>[?][GL-6]</sup>| [Yes][NE-3]              | [Yes][VE-8]            | [Yes][CF-4]         |
| Invocations/Mo      | NA[⁽⁸⁾]                    |                       | 125k/per site            | [100GB-hours][VE-10]   |                     |  
| Duration Allowed    | NA[⁽⁹⁾]                    |                       | 10 seconds               | 10 seconds             |                     |  
| **Domain**          | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| DNS Management      | No[⁽¹⁰⁾]                   | No                    | [Yes][NE-7]              | [Yes][VE-9]            | [Yes][CF-7]         |
| HTTPS available     | Yes[⁽¹¹⁾]                  | [Yes][GL-5]           | [Yes][NE-2]              | [Yes][VE-2]            | [Yes][CF-5]         |
| Bandwidth           | 100 GB / month[⁽¹²⁾]       | [No Limit][GL-8]      | [100 GB / month][NE-1]   | [100 GB / month][VE-1] | [No Limit][CF-3]    |
| **Site**            | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Site Limit          | 1 GB[⁽¹³⁾]                 | [10 GB][GL-8]         | [No Storage Limit][NE-5] | [10K Files][VE-3]      | [20K Files][CF-2]   |
| Default URL         | github.io[⁽¹⁴⁾]            | [gitlab.io][GL-4]     | [netlify.app][NE-2]      | [vercel.app][VE-2]     | [pages.dev][CF-6]   |
| **Teams**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| # of Team Members   | Unlimited[⁽¹⁵⁾]            | [Unlimited][GL-9]     | [1][NE-1]                | [1][VE-5]              | <hr />              |
| SSO Available       | Yes[⁽¹⁶⁾]                  | [Yes][GL-10]          | [Yes][NE-8]              | <hr />                 | <hr />              |
| **Users**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| # of Users          | Yes[⁽¹⁷⁾]                  | <hr />                | [1000/site/month][NE-11] | <hr />                 | <hr />              |
| SSO Available       | NA[⁽¹⁸⁾]                   | <hr />                | [Yes][NE-9]              | <hr />                 | <hr />              |
| **Forms**           | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Submissions/Mo      | NA[⁽¹⁹⁾]                   |                       | [100][NE-10]             |                        |                     |
| **Analytics**       | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |
| Pageviews/month     | NA[⁽²⁰⁾]                   |                       | [0][NE-12]               |                        |                     |
| **Split Testing**   | <hr />                     | <hr />                | <hr />                   | <hr />                 | <hr />              |

| References|                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
|           | **GitHub**                                                                                                                         <a name="1"></a> |
| [⁽¹⁾]     | GitHub public repos are "Free" and have access to GitHub Pages.  Private repos don't have this feature unless paid.                <a name="2"></a> |
| [⁽²⁾]     | [GitHub Pages sites have a soft limit of 10 builds per hour.][GH-Usage-Limits]                                                     <a name="3"></a> |
| [⁽³⁾]     | I couldn't find a quantity of builds can happen at once on GitHub pages.                                                           <a name="4"></a> |
| [⁽⁴⁾]     | I couldn't find any build minutes for pages. GitHub Actions, needed for Serverless, has a limit of 2000 a month                    <a name="5"></a> |
| [⁽⁵⁾]     | I couldn't find a quantity of builds can happen at once on GitHub pages.                                                           <a name="6"></a> |
| [⁽⁶⁾]     | I couldn't find any deploy limits for GitHub Pages.                                                                                <a name="7"></a> |
| [⁽⁷⁾]     | There's no native serverless function on GitHub, you can [make an action][GH-Action-to-function] to make a function on AWS.        <a name="8"></a> |
| [⁽⁸⁾]     | Not Applicable                                                                                                                     <a name="9"></a> |
| [⁽⁹⁾]     | Not Applicable                                                                                                                    <a name="10"></a> |
| [⁽¹⁰⁾]    | You can [create a CNAME][GH-Apexdomains] file for the DNS, but no way to dicate other [subdomains][GH-Subdomains] from the Repo.  <a name="11"></a> |
| [⁽¹¹⁾]    | [GitHub serves their sites over HTTPS][GH-HTTPS], if you use your own domain, you need a certificate.                             <a name="12"></a> |
| [⁽¹²⁾]    | [GitHub Pages sites have a soft bandwidth limit of 100GB per month.][GH-Usage-Limits]                                             <a name="13"></a> |
| [⁽¹³⁾]    | [Published GitHub Pages sites may be no larger than 1 GB.][GH-Usage-Limits]                                                       <a name="14"></a> |
| [⁽¹⁴⁾]    | [You can host your site on GitHub's github.io domain or your own custom domain.][GH-DefaultDomain]                                <a name="15"></a> |
| [⁽¹⁵⁾]    | [How long will GitHub Free allow unlimited collaborators?  Forever! This change is permanent.][GH-Team]                           <a name="16"></a> |
| [⁽¹⁶⁾]    | [If you're using GitHub as a organization, you can set up SAML single sign-on.][GH-SAMLSSO]                                       <a name="17"></a> |
| [⁽¹⁷⁾]    | You can point users to use [GitHub's OAuth Service][GH-OAuth].  I'm not sure how that would work for things, but it's an option.  <a name="18"></a> |
| [⁽¹⁸⁾]    |                                                                                                                                   <a name="19"></a> |
| [⁽¹⁹⁾]    |                                                                                                                                   <a name="20"></a> |
| [⁽²⁰⁾]    |                                                                                                                                   <a name="21"></a> |
| [⁽²¹⁾]    |                                                                                                                                   <a name="22"></a> |
| [⁽²²⁾]    |                                                                                                                                   <a name="23"></a> |
| [⁽²³⁾]    |                                                                                                                                   <a name="24"></a> |
| [⁽²⁴⁾]    |                                                                                                                                   <a name="25"></a> |
| [⁽²⁵⁾]    |                                                                                                                                   <a name="26"></a> |
| [⁽²⁶⁾]    |                                                                                                                                   <a name="27"></a> |
| [⁽²⁹⁾]    |                                                                                                                                   <a name="28"></a> |
| [⁽²⁷⁾]    |                                                                                                                                   <a name="29"></a> |
| [⁽²⁸⁾]    |                                                                                                                                   <a name="30"></a> |

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
[⁽²⁹⁾]: #29
[⁽³⁰⁾]: #30
[GH-1]: https://github.com/pricing
[GH-2]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#usage-limits
[GH-3]: https://github.com/serverless/github-action
[GH-4]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site
[GH-5]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#guidelines-for-using-github-pages
[GH-6]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#about-github-pages
[GH-7]: https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/faq-about-changes-to-githubs-plans#how-long-will-github-free-allow-unlimited-collaborators
[NE-1]: https://www.netlify.com/pricing/#features
[NE-2]: https://docs.netlify.com/domains-https/custom-domains/
[NE-3]: https://docs.netlify.com/functions/overview/
[NE-4]: https://www.netlify.com/tos/#for-free-accounts
[NE-5]: https://community.netlify.com/t/are-there-storage-limits-on-the-starter-plan/5368/2
[NE-6]: https://community.netlify.com/t/support-guide-how-long-should-netlify-builds-take/151/7
[NE-7]: https://docs.netlify.com/domains-https/netlify-dns/
[NE-8]: https://docs.netlify.com/accounts-and-billing/team-management/saml-single-sign-on/
[NE-9]: https://docs.netlify.com/visitor-access/oauth-provider-tokens/
[NE-10]: https://www.netlify.com/pricing/#add-ons-forms
[NE-11]: https://www.netlify.com/pricing/#add-ons-identity
[NE-12]: https://www.netlify.com/pricing/#add-ons-analytics
[VE-1]: https://vercel.com/pricing
[VE-2]: https://vercel.com/docs/custom-domains
[VE-3]: https://vercel.com/docs/platform/limits#files
[VE-4]: https://vercel.com/knowledge/why-are-my-vercel-builds-queued
[VE-5]: https://vercel.com/docs/platform/limits
[VE-6]: https://vercel.com/docs/platform/limits#builds-per-hour-(free)
[VE-7]: https://vercel.com/docs/build-step#maximum-build-duration
[VE-8]: https://vercel.com/docs/serverless-functions/introduction
[VE-9]: https://vercel.com/knowledge/how-to-manage-vercel-dns-records
[VE-10]: https://vercel.com/docs/platform/fair-use-policy
[GL-1]: https://about.gitlab.com/pricing/#gitlab-com
[GL-2]: https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners
[GL-3]: https://about.gitlab.com/releases/2020/09/01/ci-minutes-update-free-users/
[GL-4]: https://docs.gitlab.com/ee/user/project/pages/getting_started_part_one.html
[GL-5]: https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/
[GL-6]: https://docs.gitlab.com/ee/user/project/clusters/serverless/aws.html
[GL-7]: https://docs.gitlab.com/ee/ci/pipelines/
[GL-8]: https://forum.gitlab.com/t/what-are-the-restrictions-for-gitlab-pages-sites/15067/6
[GL-9]: https://about.gitlab.com/pricing/
[GL-10]: https://about.gitlab.com/handbook/business-ops/okta/
[CF-1]: https://pages.cloudflare.com/
[CF-2]: https://developers.cloudflare.com/pages/platform/limits
[CF-3]: https://pages.cloudflare.com/#plans
[CF-4]: https://developers.cloudflare.com/workers/
[CF-5]: https://blog.cloudflare.com/how-to-make-your-site-https-only/
[CF-6]: https://youtu.be/IeHC4NwkEfc?t=524
[CF-7]: https://www.cloudflare.com/dns/
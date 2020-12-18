---
title: "CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host for free?"
subtitle: "CloudFlare Pages vs Netlify vs Zeit vs Github Pages vs Gitlab Pages"
summary: "I was looking at CloudFlare Pages and thought I want to see all the
  Places with JAMStack hosting compared with all the features."
date: 2020-12-17T21:27:27.004Z
---
# CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host?

Let me know in the comments or via a [GitHub issue](https://github.com/jacebenson/jace.pro/issues/new) if I'm missing something or got something wrong.

## Free

| ⬇ Feature / Host ➡ | [GitHub Pages][GH-1]   | [Netlify][NE-1]          | [Vercel][VE-1]         | [GitLab Pages][GL-1] | [CloudFlare][CF-1]  |
| ------------------- | ---------------------- | ------------------------ | ---------------------- | -------------------- | ------------------- |
| Price               | [$0 if Public][GH-1]   | [Free][NE-1]             | [Free][VE-1]           | [Free][GL-1]         | [Free][CF-3]        |
| **BUILD**           | <hr />                 | <hr />                   | <hr />                 | <hr />               | <hr />              |
| Build Limits        | [10 / hour][GH-2]      | [3 / minute][NE-4]       | [32 / hour][VE-6]      | <sup>8</sup>         | [500 / month][CF-2] |
| Build Time to Error | <sup>5</sup>           | [15 minutes][NE-6]       | [30 Minutes][VE-7]     | [3 Hours][GL-2]      | <sup>9</sup>        |
| Build Minutes/Month | <sup>1</sup>           | [300 minutes][NE-1]      | <sup>6</sup>           | [400 minutes][GL-3]  | <sup>10</sup>       |
| Concurrent Builds   | <sup>2</sup>           | [1][NE-1]                | [1][VE-4]              | [Yes][GL-7]          | [1][CF-3]           |
| Deploy Limits       | <sup>3</sup>           | <sup>4</sup>             | [100 / day][VE-5]      | <sup>7</sup>         | [None, see preview deployments][CF-2] |
| Serverless Functions| [Yes][GH-3]            | [Yes][NE-3]              | [Yes][VE-8]             | [Yes][GL-6]          | [Yes][CF-4]         |
| **DOMAIN**          | <hr />                 | <hr />                   | <hr />                 | <hr />               | <hr />              |
| HTTPS available     | [Yes][GH-5]            | [Yes][NE-2]              | [Yes][VE-2]            | [Yes][GL-5]          | [Yes][CF-5]         |
| Bandwidth           | [100 GB / month][GH-2] | [100 GB / month][NE-1]   | [100 GB / month][VE-1] | [No Limit][GL-8]     | [No Limit][CF-3]    |
| **SITE**            | <hr />                 | <hr />                   | <hr />                 | <hr />               | <hr />              |
| Site Limit          | [1 GB][GH-2]           | [No Storage Limit][NE-5] | [10K Files][VE-3]      | [10 GB][GL-8]        | [20K Files][CF-2]   |
| Default URL         | [github.io][GH-6]      | [netlify.app][NE-2]      | [vercel.app][VE-2]     | [gitlab.io][GL-4]    | [pages.dev][CF-6]   |
  
1. I couldn't find any build minutes for pages. GitHub Actions, needed for Serverless, has a limit of 2000 a month.
2. I couldn't find a quantity of builds can happen at once on GitHub pages.
3. I couldn't find any deploy limits for GitHub Pages.
4. I couldn't find any deploy limits for Netlify.
5. I couldn't find a duration where GitHub Pages fail to build.
6. I couldn't find any build minutes for Vercel.
7. I couldn't find any deploy limits for GitLab Pages.
8. I couldn't find any build limits for GitLab Pages beyond the pipeline minutes.
9. I couldn't find a duration where Cloudflare Pages fail to build.
10. I couldn't find any build minutes for Cloudflare Pages.


[GH-1]: https://github.com/pricing
[GH-2]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#usage-limits
[GH-3]: https://github.com/serverless/github-action
[GH-4]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site
[GH-5]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#guidelines-for-using-github-pages
[GH-6]: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#about-github-pages
[NE-1]: https://www.netlify.com/pricing/#features
[NE-2]: https://docs.netlify.com/domains-https/custom-domains/
[NE-3]: https://docs.netlify.com/functions/overview/
[NE-4]: https://www.netlify.com/tos/#for-free-accounts
[NE-5]: https://community.netlify.com/t/are-there-storage-limits-on-the-starter-plan/5368/2
[NE-6]: https://community.netlify.com/t/support-guide-how-long-should-netlify-builds-take/151/7
[VE-1]: https://vercel.com/pricing
[VE-2]: https://vercel.com/docs/custom-domains
[VE-3]: https://vercel.com/docs/platform/limits#files
[VE-4]: https://vercel.com/knowledge/why-are-my-vercel-builds-queued
[VE-5]: https://vercel.com/docs/platform/limits
[VE-6]: https://vercel.com/docs/platform/limits#builds-per-hour-(free)
[VE-7]: https://vercel.com/docs/build-step#maximum-build-duration
[VE-8]: https://vercel.com/docs/serverless-functions/introduction
[GL-1]: https://about.gitlab.com/pricing/#gitlab-com
[GL-2]: https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners
[GL-3]: https://about.gitlab.com/releases/2020/09/01/ci-minutes-update-free-users/
[GL-4]: https://docs.gitlab.com/ee/user/project/pages/getting_started_part_one.html
[GL-5]: https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/
[GL-6]: https://docs.gitlab.com/ee/user/project/clusters/serverless/aws.html
[GL-7]: https://docs.gitlab.com/ee/ci/pipelines/
[GL-8]: https://forum.gitlab.com/t/what-are-the-restrictions-for-gitlab-pages-sites/15067/6
[CF-1]: https://pages.cloudflare.com/
[CF-2]: https://developers.cloudflare.com/pages/platform/limits
[CF-3]: https://pages.cloudflare.com/#plans
[CF-4]: https://developers.cloudflare.com/workers/
[CF-5]: https://blog.cloudflare.com/how-to-make-your-site-https-only/
[CF-6]: https://youtu.be/IeHC4NwkEfc?t=524
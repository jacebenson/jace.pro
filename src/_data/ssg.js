
module.exports = {
    vendors: [
        "GitHub",
        "GitLab",
        "Netlify",
        "Vercel",
        "CloudFlare",
        "Firebase",
        "Render"
    ],
    features: {
        "Build Limit": [{
            vendor: "GitHub",
            answer: "10/hour",
            detail: "GitHub Pages sites have a soft limit of 10 builds per hour.",
            source: "https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#usage-limits"
        }, {
            vendor: "GitLab",
            answer: "None",
            detail: "GitLab limits builds and other CI/CD to Pipeline Minutes. 400 Minutes are free. No Build Limit beyond that.",
            source: "https://about.gitlab.com/releases/2020/09/01/ci-minutes-update-free-users/"
        }, {
            vendor: "Netlify",
            answer: "3/Minute",
            detail: "Buried in the Terms of Service",
            source: "https://www.netlify.com/tos#:~:text=3%20deploys/minute"
        }, {
            vendor: "Vercel",
            answer: "32/hour",
            detail: "You are able to build 32 Deployments every 3600 seconds (1 hour)",
            source: "https://vercel.com/docs/platform/limits#builds-per-hour-(free)"
        }, {
            vendor: "CloudFlare",
            answer: "500/month",
            detail: "You can deploy up to 500 times per month on the free plan",
            source: "https://developers.cloudflare.com/pages/platform/limits#builds"
        }, {
            vendor: "Firebase",
            answer: "Not Applicable",
            detail: "From what I can tell, you need to do the build. No build process in Firebase that I can tell.",
            source: ""
        }, {
            vendor: "Render",
            answer: "Unlisted",
            detail: "",
            source: ""
        }],
        "Build Time to Error": [{
            vendor: "GitHub",
            answer: "10 minutes",
            detail: "I couldn't find a quantity of builds can happen at once on GitHub pages.",
            source: "https://github.community/t/page-build-timed-out/10476/7"
        }, {
            vendor: "GitLab",
            answer: "3 Hours",
            detail: "Jobs handled by the shared runners on GitLab.com, time out after 3 hours, regardless of the timeout configured in a project.",
            source: "https://docs.gitlab.com/ee/user/gitlab_com/index.html#shared-runners"
        }, {
            vendor: "Netlify",
            answer: "15 minutes",
            detail: "You should count on your builds having only 15 minutes to complete their build command.",
            source: "https://answers.netlify.com/t/support-guide-how-long-should-netlify-builds-take/151/7"
        }, {
            vendor: "Vercel",
            answer: "30 minutes",
            detail: "A build can last for 30 minutes. If the build exceeds this time, the deployment will error.",
            source: "https://vercel.com/docs/build-step#maximum-build-duration"
        }, {
            vendor: "CloudFlare",
            answer: "Unlisted",
            detail: "I cant find anything build details except Build commands and directories and Build settings",
            source: ""
        }, {
            vendor: "Firebase",
            answer: "Not Applicable",
            detail: "From what I can tell, you need to do the build. No build process in Firebase that I can tell.",
            source: ""
        }, {
            vendor: "Render",
            answer: "120 minutes",
            detail: "All builds currently have a timeout of 120 minutes.",
            source: "https://community.render.com/t/is-there-a-limit-for-how-long-a-build-is-allowed-to-take/175/3"
        }],
        "Build Time per Month": [{
            vendor: "GitHub",
            answer: "NA",
            detail: "I couldn't find any build minutes for pages. GitHub Actions, needed for Serverless, has a limit of 2000 a month",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "400 Minutes",
            detail: "400 Minutes are free",
            source: "https://about.gitlab.com/releases/2020/09/01/ci-minutes-update-free-users/"
        }, {
            vendor: "Netlify",
            answer: "300 Minutes",
            detail: "300 minutes /month(then $7 per 500)",
            source: "https://www.netlify.com/pricing/#features"
        }, {
            vendor: "Vercel",
            answer: "6000 Minutes",
            detail: "On the Fair Use Policy Page, it reads, Up to 100 Hrs.",
            source: "https://vercel.com/docs/platform/fair-use-policy"
        }, {
            vendor: "CloudFlare",
            answer: "Unlisted",
            detail: "",
            source: ""
        }, {
            vendor: "Firebase",
            answer: "Not Applicable",
            detail: "From what I can tell, you need to do the build. No build process in Firebase that I can tell.",
            source: ""
        }, {
            vendor: "Render",
            answer: "Unlisted",
            detail: "",
            source: ""
        }],
        "Concurrent Builds": [{
            vendor: "GitHub",
            answer: "🤷‍♂️",
            detail: "",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "Yes",
            detail: "For each runner a concurrent job can execute.",
            source: "https://docs.gitlab.com/ee/ci/pipelines/"
        }, {
            vendor: "Netlify",
            answer: "One",
            detail: "One Concurrent build",
            source: "https://www.netlify.com/pricing/#features"
        }, {
            vendor: "Vercel",
            answer: "One",
            detail: "Hobby is allotted One (1) build concurrently.",
            source: "https://vercel.com/knowledge/why-are-my-vercel-builds-queued"
        }, {
            vendor: "CloudFlare",
            answer: "One",
            detail: "On the Plans page it says, \"1 build at a time\"",
            source: "https://pages.cloudflare.com/#plans"
        }, {
            vendor: "Firebase",
            answer: "Not Applicable",
            detail: "From what I can tell, you need to do the build. No build process in Firebase that I can tell.",
            source: ""
        }, {
            vendor: "Render",
            answer: "Unlisted",
            detail: "I coudn't find any thing about the builds",
            source: ""
        }],
        "Deploy Limits": [{
            vendor: "GitHub",
            answer: "NA",
            detail: "",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "No",
            detail: "I couldn't find any deploy limits for GitLab Pages.",
            source: ""
        }, {
            vendor: "Netlify",
            answer: "Not Applicable",
            detail: "There is no limit listed but you will be limited by your build minutes.",
            source: ""
        }, {
            vendor: "Vercel",
            answer: "100/Day",
            detail: "",
            source: ""
        }, {
            vendor: "CloudFlare",
            answer: "Unlisted",
            detail: "I coudn't find any \"Deploy limits\" but this is probably controlled via the builds. I asked on twitter",
            source: "https://twitter.com/jacebenson/status/1339791209942949889"
        }, {
            vendor: "Firebase",
            answer: "Not Applicable",
            detail: "From what I can tell, you need to do the build. No build process in Firebase that I can tell.",
            source: ""
        }, {
            vendor: "Render",
            answer: "Unlisted",
            detail: "I coudn't find any \"Deploy limits\".",
            source: ""
        }],
        "Deploy Previews": [{
            vendor: "GitHub",
            answer: "No",
            detail: "",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "No",
            detail: "I couldn't find anything about deploys on pull requests.",
            source: ""
        }, {
            vendor: "Netlify",
            answer: "Yes",
            detail: "Deploy a live shareable preview of your production URL or any individual branch that is not your production branch.",
            source: "https://www.netlify.com/pricing/#features"
        }, {
            vendor: "Vercel",
            answer: "Yes",
            detail: "They have this... in their main page, I couldn't find it in their docs.",
            source: ""
        }, {
            vendor: "CloudFlare",
            answer: "Yes",
            detail: "On the pages site it shows \"Preview early, preview often\" and \"Preview control\" showing builds on commit, and control to who sees it.",
            source: "https://pages.cloudflare.com"
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Yes",
            source: "https://firebase.google.com/docs/hosting/test-preview-deploy"
        }, {
            vendor: "Render",
            answer: "Yes",
            detail: "Yes",
            source: "https://render.com/docs/pull-request-previews"
        }],
        "Serverless Functions": [{
            vendor: "GitHub",
            answer: "No",
            detail: "There's no native serverless function on GitHub, you can make an action to make a function on AWS.",
            source: "https://github.com/serverless/github-action"
        }, {
            vendor: "GitLab",
            answer: "No",
            detail: "You can have a runner build a AWS Lambda function.",
            source: "https://docs.gitlab.com/ee/user/project/clusters/serverless/aws.html"
        }, {
            vendor: "Netlify",
            answer: "Yes",
            detail: "These are great but keep in mind they are isolated from eachother, meaning you can't share a common file among them.",
            source: "https://www.netlify.com/pricing/#features"
        }, {
            vendor: "Vercel",
            answer: "Yes",
            detail: "Vercel has Serverless Functions. Not sure who hosts them but they have differnt limits.  12/per deployment.",
            source: "https://vercel.com/docs/serverless-functions/introduction"
        }, {
            vendor: "CloudFlare",
            answer: "Yes",
            detail: "Cloudflare has workers to do serverless stuff. This is a feature they've offered for years now.",
            source: "https://developers.cloudflare.com/workers/"
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Yes",
            source: "https://firebase.google.com/pricing/"
        }, {
            vendor: "Render",
            answer: "Not for free",
            detail: "Looks like they have this requested, but its not there yet, for $7 you could use https://www.openfaas.com/ on render.",
            source: "https://feedback.render.com/features/p/support-for-serverless-scripts"
        }],
        "Invocations/Month": [{
            vendor: "GitHub",
            answer: "",
            detail: "",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "",
            detail: "",
            source: ""
        }, {
            vendor: "Netlify",
            answer: "125k/per site/mo",
            detail: "125k per site /month($25+ when exceeded)",
            source: "https://www.netlify.com/pricing/#features"
        }, {
            vendor: "Vercel",
            answer: "100GB hours/mo",
            detail: "Vercel's Serverless functions usage is measured not in requests but in GB hours. I found this on the Fair Use Page.",
            source: "https://vercel.com/docs/platform/fair-use-policy"
        }, {
            vendor: "CloudFlare",
            answer: "100k/day",
            detail: "100,000 / day, 1000 / minute.",
            source: "https://developers.cloudflare.com/workers/platform/limits"
        }, {
            vendor: "Firebase",
            answer: "125k/mo",
            detail: "125k/mo",
            source: "https://firebase.google.com/docs/functions/quotas"
        }, {
            vendor: "Render",
            answer: "",
            detail: "",
            source: ""
        }],
        "Duration Allowed": [{
            vendor: "GitHub",
            answer: "",
            detail: "",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "",
            detail: "",
            source: ""
        }, {
            vendor: "Netlify",
            answer: "10s",
            detail: "10 second execution limit for synchronous serverless functions",
            source: "https://docs.netlify.com/functions/overview/#default-deployment-options"
        }, {
            vendor: "Vercel",
            answer: "10s",
            detail: "On the limits page, they state it's 10 seconds.",
            source: "https://vercel.com/docs/platform/limits#serverless-function-execution-timeout"
        }, {
            vendor: "CloudFlare",
            answer: "10ms",
            detail: "10ms. Wait what? How can anything happen in 10ms? I guess they are fast, always on, and has storage",
            source: "https://developers.cloudflare.com/workers/platform/limits"
        }, {
            vendor: "Firebase",
            answer: "540s",
            detail: "540s wow!",
            source: "https://firebase.google.com/docs/functions/quotas"
        }, {
            vendor: "Render",
            answer: "",
            detail: "",
            source: ""
        }],
        "DNS Management": [{
            vendor: "GitHub",
            answer: "No",
            detail: "You can create a CNAME file for the DNS, but no way to dicate other subdomains from the Repo.",
            source: "https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain"
        }, {
            vendor: "GitLab",
            answer: "No",
            detail: "GitLab doesn't manage your domains. You configure TXT Records to verify the domain.",
            source: "https://about.gitlab.com/handbook/support/workflows/verify_pages_domain.html"
        }, {
            vendor: "Netlify",
            answer: "Yes",
            detail: "Netlify offers the option to handle DNS management for you.",
            source: "https://docs.netlify.com/domains-https/netlify-dns/"
        }, {
            vendor: "Vercel",
            answer: "Yes",
            detail: "Vercel allows you to manage DNS Records on their site at noted on \"How can I manage my Vercel DNS records\"",
            source: "https://vercel.com/knowledge/how-to-manage-vercel-dns-records"
        }, {
            vendor: "CloudFlare",
            answer: "Yes",
            detail: "CloudFlare has a huge offering for DNS management",
            source: "https://www.cloudflare.com/dns/"
        }, {
            vendor: "Firebase",
            answer: "No",
            detail: "No",
            source: "https://firebase.google.com/docs/hosting/custom-domain"
        }, {
            vendor: "Render",
            answer: "No",
            detail: "",
            source: "https://render.com/docs/custom-domains#adding-a-custom-domain"
        }],
        "HTTPS Available": [{
            vendor: "GitHub",
            answer: "Yes",
            detail: "GitHub serves their sites over HTTPS, if you use your own domain, you need a certificate.",
            source: "https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/securing-your-github-pages-site-with-https"
        }, {
            vendor: "GitLab",
            answer: "Yes",
            detail: "GitLab has a integration with Let's Encrypt to automatically do this.",
            source: "https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/lets_encrypt_integration.html"
        }, {
            vendor: "Netlify",
            answer: "Yes",
            detail: "Netlify offers free HTTPS on all sites, including automatic certificate creation and renewal.",
            source: "https://docs.netlify.com/domains-https/https-ssl/"
        }, {
            vendor: "Vercel",
            answer: "Yes",
            detail: "Vercel automatically adds SSL from Let's Encrypt.",
            source: "https://vercel.com/blog/automatic-ssl-with-vercel-lets-encrypt"
        }, {
            vendor: "CloudFlare",
            answer: "Yes",
            detail: "Yes, this is something they offer",
            source: "https://support.cloudflare.com/hc/en-us/articles/360024787372-End-to-end-HTTPS-with-Cloudflare-Part-1-conceptual-overview"
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "",
            source: "https://firebase.google.com/docs/hosting"
        }, {
            vendor: "Render",
            answer: "Yes",
            detail: "Automatic SSL certificate issuance and renewal using Let’s Encrypt.",
            source: "https://render.com/docs/static-sites"
        }],
        "Bandwidth/Month": [{
            vendor: "GitHub",
            answer: "100GB/Mo",
            detail: "GitHub Pages sites have a soft bandwidth limit of 100GB per month.",
            source: "https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#usage-limits"
        }, {
            vendor: "GitLab",
            answer: "No limit",
            detail: "GitLab doesn't set a max bandwidth for pages.",
            source: "https://forum.gitlab.com/t/what-are-the-restrictions-for-gitlab-pages-sites/15067/6"
        }, {
            vendor: "Netlify",
            answer: "100GB/Mo",
            detail: "Network Bandwidth: 100GB/month — Soft",
            source: "https://www.netlify.com/tos/#for-free-accounts"
        }, {
            vendor: "Vercel",
            answer: "100GB/Mo",
            detail: "Vercel limits bandwidth to 100GB",
            source: "https://vercel.com/docs/platform/fair-use-policy"
        }, {
            vendor: "CloudFlare",
            answer: "No Limit",
            detail: "On the Plans page it says, \"Unlimited bandwidth\"",
            source: "https://pages.cloudflare.com/#plans"
        }, {
            vendor: "Firebase",
            answer: "10GB/Mo",
            detail: "",
            source: "https://firebase.google.com/docs/hosting/usage-quotas-pricing"
        }, {
            vendor: "Render",
            answer: "100GB/Mo",
            detail: "We do not have any request size restrictions. Just note that we do charge for bandwidth that exceeds 100GB in a month.",
            source: "https://community.render.com/t/request-size-limits/552"
        }],
        "Site Limit": [{
            vendor: "GitHub",
            answer: "1GB",
            detail: "Published GitHub Pages sites may be no larger than 1 GB.",
            source: "https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#usage-limits"
        }, {
            vendor: "GitLab",
            answer: "10GB",
            detail: "The only limitations are < 10GB repository size and available pipeline minutes.",
            source: "https://forum.gitlab.com/t/what-are-the-restrictions-for-gitlab-pages-sites/15067/6"
        }, {
            vendor: "Netlify",
            answer: "100GB",
            detail: "Storage: 100GB / Soft",
            source: "https://www.netlify.com/tos/#for-free-accounts"
        }, {
            vendor: "Vercel",
            answer: "12.5K Files",
            detail: "Vercel has a limit on files quantity, it's 12.5k pre build.",
            source: "https://vercel.com/docs/platform/limits#files"
        }, {
            vendor: "CloudFlare",
            answer: "20K Files",
            detail: "Cloudflare limits site to 20k files",
            source: "https://developers.cloudflare.com/pages/platform/limits#files"
        }, {
            vendor: "Firebase",
            answer: "10GB",
            detail: "10GB",
            source: "https://firebase.google.com/pricing/"
        }, {
            vendor: "Render",
            answer: "None listed",
            detail: "",
            source: "https://render.com/docs/static-sites"
        }],
        "Default URL": [{
            vendor: "GitHub",
            answer: "github.io",
            detail: "You can host your site on GitHub's github.io domain or your own custom domain.",
            source: "https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#about-github-pages"
        }, {
            vendor: "GitLab",
            answer: "gitlab.io",
            detail: "gitlab.io is the domain they share.",
            source: ""
        }, {
            vendor: "Netlify",
            answer: "netlify.app",
            detail: "By default any site Netlify is accessible viat it's Netlify subdomain [name-of-your-site].netlify.app",
            source: ""
        }, {
            vendor: "Vercel",
            answer: "vercel.app",
            detail: "Vercel defaults to .vercel.app",
            source: "https://vercel.com/docs/custom-domains"
        }, {
            vendor: "CloudFlare",
            answer: "pages.dev",
            detail: "Cloudflare is using pages.dev for the domain.",
            source: "https://developers.cloudflare.com/pages/getting-started#add-a-custom-cname-record"
        }, {
            vendor: "Firebase",
            answer: "web.app and firebaseapp.com",
            detail: "",
            source: "https://firebase.google.com/docs/hosting"
        }, {
            vendor: "Render",
            answer: "onrender.com",
            detail: "Every web service and static site on Render automatically gets a free onrender.com address which does not change.",
            source: "https://render.com/docs/custom-domains"
        }],
        "# of Team Members": [{
            vendor: "GitHub",
            answer: "Unlimited",
            detail: "How long will GitHub Free allow unlimited collaborators? Forever! This change is permanent.",
            source: "https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/faq-about-changes-to-githubs-plans#how-long-will-github-free-allow-unlimited-collaborators"
        }, {
            vendor: "GitLab",
            answer: "Unlimited",
            detail: "Unlimited as it says on their pricing page.",
            source: "https://about.gitlab.com/pricing/"
        }, {
            vendor: "Netlify",
            answer: "One",
            detail: "For free you get... one team member so for free... No team.",
            source: "https://www.netlify.com/pricing/#features"
        }, {
            vendor: "Vercel",
            answer: "One",
            detail: "For free Vercel doesn't give you access to Teams (CTRL+f teams )",
            source: "https://vercel.com/docs/platform/limits"
        }, {
            vendor: "CloudFlare",
            answer: "Unlimited",
            detail: "Unlimited seats for free: additional collaborators shouldn’t break the bank. With Pages, you can add them all for free.",
            source: "https://pages.cloudflare.com/"
        }, {
            vendor: "Firebase",
            answer: "",
            detail: "",
            source: ""
        }, {
            vendor: "Render",
            answer: "Unlimited",
            detail: "Render allows you to share your site with other Render users for free so they can help you manage it through their own Render account.",
            source: "https://render.com/docs/static-sites#unlimited-collaborators"
        }],
        "Team SSO Available": [{
            vendor: "GitHub",
            answer: "Yes",
            detail: "If you're using GitHub as a organization, you can set up SAML single sign-on",
            source: "https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-authentication-with-saml-single-sign-on"
        }, {
            vendor: "GitLab",
            answer: "Yes",
            detail: "Looks like there's integrations with Okta, so I assume you can do this with other SAML providers.",
            source: "https://about.gitlab.com/handbook/business-ops/okta/"
        }, {
            vendor: "Netlify",
            answer: "Yes",
            detail: "Team Owners can allow team members to log in to Netlify through their company's SAML signle sign on.",
            source: "https://docs.netlify.com/accounts-and-billing/team-management/saml-single-sign-on/"
        }, {
            vendor: "Vercel",
            answer: "Not for Free",
            detail: "Vercel has this, but its only for \"teams\"",
            source: "https://vercel.com/docs/platform/projects#sso-protection"
        }, {
            vendor: "CloudFlare",
            answer: "Unlisted",
            detail: "I couldn't find anything about collaborators login methods.",
            source: ""
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Firebase is owned by Google, google has their whole enterprise bit.",
            source: ""
        }, {
            vendor: "Render",
            answer: "No",
            detail: "I couldn't find anything about this",
            source: ""
        }],
        "# of Users": [{
            vendor: "GitHub",
            answer: "Yes",
            detail: "You can point users to use GitHub's OAuth Service. I'm not sure how that would work, but it's an option.",
            source: "https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps"
        }, {
            vendor: "GitLab",
            answer: "Yes",
            detail: "Like GitHub, GitLab offers itself as a OAuth2 provider.",
            source: "https://docs.gitlab.com/ee/integration/oauth_provider.html"
        }, {
            vendor: "Netlify",
            answer: "1000/site/month",
            detail: "Here's the link to the Netlify Identity details.",
            source: "https://www.netlify.com/pricing/#add-ons-identity"
        }, {
            vendor: "Vercel",
            answer: "No",
            detail: "Vercel lists solutions for Identity, but tehy don't have one with their offereings",
            source: "https://vercel.com/docs/solutions/authentication"
        }, {
            vendor: "CloudFlare",
            answer: "No",
            detail: "Workers has this, but that only shows how to do user auth with Auth0.",
            source: "https://developers.cloudflare.com/workers/tutorials/authorize-users-with-auth0"
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Yes",
            source: "https://firebase.google.com/pricing/"
        }, {
            vendor: "Render",
            answer: "Planned",
            detail: "This idea may not be excatly this, but it's like it.",
            source: "https://feedback.render.com/features/p/password-protection-for-static-sites"
        }],
        "User SSO Available": [{
            vendor: "GitHub",
            answer: "Yes",
            detail: "Users of GitHub can have SSO set up if they're part of an organization that sets that up.",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "Yes",
            detail: "Again, like GitHub, GitLab offers SAML SSO for GitLab.com groups.",
            source: "https://docs.gitlab.com/ee/user/group/saml_sso/"
        }, {
            vendor: "Netlify",
            answer: "Not for free",
            detail: "Here SAML-SSO lists as ❌ for free, and ✔ for Level 2.",
            source: "https://www.netlify.com/pricing/#add-ons-identity"
        }, {
            vendor: "Vercel",
            answer: "No",
            detail: "I didn't see anyhting along these lines when looking",
            source: ""
        }, {
            vendor: "CloudFlare",
            answer: "No",
            detail: "I didn't see anyhting along these lines when looking",
            source: ""
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Looks like they have this",
            source: "https://firebase.google.com/docs/auth/where-to-start"
        }, {
            vendor: "Render",
            answer: "",
            detail: "I didn't see anyhting along these lines when looking",
            source: ""
        }],
        "Form Submissions/Month": [{
            vendor: "GitHub",
            answer: "No",
            detail: "GitHub provides no \"Forms\" but you can leverage Issues for that.",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "No",
            detail: "GitLab provides no \"Forms\" but you can leverage Issues for that.",
            source: ""
        }, {
            vendor: "Netlify",
            answer: "100",
            detail: "100 submissions a month, and up to 10MB of uploads a month.",
            source: "https://www.netlify.com/pricing/#add-ons-forms"
        }, {
            vendor: "Vercel",
            answer: "No",
            detail: "I didn't see anyhting along these lines when looking",
            source: ""
        }, {
            vendor: "CloudFlare",
            answer: "Yes and No",
            detail: "With Workers, you get access to a Key-Value database, but you don't have a way to do forms without building a worker to handle the submission.",
            source: ""
        }, {
            vendor: "Firebase",
            answer: "No",
            detail: "",
            source: ""
        }, {
            vendor: "Render",
            answer: "Yes - via Formspree integration",
            detail: "This feels like cheating, but /shrug, it works.",
            source: "https://feedback.render.com/features/p/render-form-submissions"
        }],
        "Analytics": [{
            vendor: "GitHub",
            answer: "No",
            detail: "GitHub provides you no analytics on your websites page views.",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "Not Yet",
            detail: "Today GitLab does not provide any analytics, but being open source, there's an issue for Server-side analtyics.",
            source: "https://gitlab.com/gitlab-org/gitlab-pages/-/issues/384"
        }, {
            vendor: "Netlify",
            answer: "Not for free",
            detail: "Analytics are available for $9 a month per site.",
            source: "https://www.netlify.com/pricing/#add-ons-analytics"
        }, {
            vendor: "Vercel",
            answer: "Free is only good for 1 day",
            detail: "Vercel offers Analtyics. It can run on any host but they are limited to 1 day for free.",
            source: "https://vercel.com/docs/analytics#limits"
        }, {
            vendor: "CloudFlare",
            answer: "Yes",
            detail: "Cloudflare is all about caching your sites. They show you uncached traffic, you gotta pay for cached analytics.",
            source: ""
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Yes",
            source: "https://firebase.google.com/pricing/"
        }, {
            vendor: "Render",
            answer: "No",
            detail: "I didn't see anyhting along these lines when looking",
            source: ""
        }],
        "Split A/B Testing": [{
            vendor: "GitHub",
            answer: "No",
            detail: "GitHub provides no A/B Testing I'm aware of.",
            source: ""
        }, {
            vendor: "GitLab",
            answer: "No",
            detail: "I found some issues that are a year to four years old. Looks like this isn't available.",
            source: ""
        }, {
            vendor: "Netlify",
            answer: "Yes",
            detail: "Netlify Split Testing lets your divide your traffic to your site between different deploys.",
            source: "https://docs.netlify.com/site-deploys/split-testing/"
        }, {
            vendor: "Vercel",
            answer: "No",
            detail: "I didn't see anyhting along these lines when looking",
            source: ""
        }, {
            vendor: "CloudFlare",
            answer: "No",
            detail: "I could find A / B testing for workers. Not for pages.",
            source: "https://developers.cloudflare.com/workers/examples/ab-testing"
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Yes",
            source: "https://firebase.google.com/pricing/"
        }, {
            vendor: "Render",
            answer: "No",
            detail: "I didn't see anyhting along these lines when looking",
            source: ""
        }],
        "Allowed for Business Use": [{
            vendor: "GitHub",
            answer: "No",
            detail: "GitHub Pages is not intended for or allowed to be used as a free web hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS).",
            source: "https://docs.github.com/en/github/working-with-github-pages/about-github-pages#prohibited-uses"
        }, {
            vendor: "GitLab",
            answer: "Yes",
            detail: "With GitLab Pages, you can publish static websites directly from a repository in GitLab.  Use for any personal or business website.",
            source: "https://docs.gitlab.com/ee/user/project/pages/"
        }, {
            vendor: "Netlify",
            answer: "Yes",
            detail: "I looked and nothing says you can or cannot use for any personal or business website, however, their offerings do.",
            source: "https://answers.netlify.com/t/is-the-free-tier-safe-for-client-projects/13535"
        }, {
            vendor: "Vercel",
            answer: "No for hobby",
            detail: "Hobby accounts are restricted to non-commercial personal use only.",
            source: "https://vercel.com/docs/platform/fair-use-policy#commercial-usage"
        }, {
            vendor: "CloudFlare",
            answer: "Yes",
            detail: "I looked and nothing says you can or cannot use for any personal or business website, however, their offerings do.",
            source: "https://pages.cloudflare.com/#pricing"
        }, {
            vendor: "Firebase",
            answer: "Yes",
            detail: "Acceptable use has some simple things you agree not to",
            source: "https://cloud.google.com/terms/aup"
        }, {
            vendor: "Render",
            answer: "Yes",
            detail: "",
            source: "https://render.com/acceptable-use"
        }]
    }
};

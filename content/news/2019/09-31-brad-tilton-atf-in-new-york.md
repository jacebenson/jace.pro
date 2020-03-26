---
title: "ATF in New York"
date: 2019-09-30T20:35:49.000Z
authors: ["Brad Tilton"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=252cb7c0db94c09023f4a345ca96192b"
---
<p>I&#39;m a little late to the New York party with this post, but there are a couple of new Automated Test Framework features in the New York release that I wanted to highlight.</p>
<p>For some background, the Now Platform&#39;s <a href="https://docs.servicenow.com/bundle/newyork-application-development/page/administer/auto-test-framework/concept/automated-test-framework.html" rel="nofollow">Automated Test Framework</a> makes it easier for customers to automate customization regression testing but allowing them to build and run automated tests against a ServiceNow instance. Every release brings more test coverage and quick start tests, and New York is no different.</p>
<h3><a href="https://docs.servicenow.com/bundle/newyork-application-development/page/administer/auto-test-framework/concept/parallel-testing.html" rel="nofollow">Parallel Testing</a></h3>
<p>You can now reduce overall testing time by running test suites and tests in parallel. Running more than one test at a time will greatly reduce the overall time of your regression testing, especially when testing an entire instance after upgrades. There is some built-in collision avoidance when the system detects that multiple tests may update the same record, but care should be taken when designing tests to run in parallel to avoid resource conflicts and data dependencies. Developers can also mark tests as mutually exclusive so they cannot be run in parallel to manually avoid conflicts.</p>
<h3><a href="https://docs.servicenow.com/bundle/newyork-application-development/page/administer/auto-test-framework/reference/test-steps-server-category.html#atf-create-user" rel="nofollow">Create a User Test Step</a></h3>
<p>One of the good practices to use when designing ATF tests is to make them self-contained. Unless you are specifically trying to test against certain data, your tests should not depend on data existing in the instance or something from another test. The create a user test step allows you to create a user specifically for your test, assign roles, and impersonate. Then, when the test is completed the user is rolled back. This allows you to test against a specific user persona without having to assume that a user with the correct roles exists in that environment. </p>
<p> </p>
<p>For a full list of New York ATF features, check out the <a href="https://docs.servicenow.com/bundle/newyork-release-notes/page/release-notes/application-development/automated-test-framework-rn.html" rel="nofollow">ATF Release Notes</a>.</p>
<p>What do you think of ATF in New York?</p>
import about from "@/public/images/navbar/about.svg";
import apiTesting from "@/public/images/navbar/api-testing.svg";
import article from "@/public/images/navbar/article.svg";
import api from "@/public/images/navbar/api.svg";
import blog from "@/public/images/navbar/blog.svg";
import caseStudies from "@/public/images/navbar/case-studies.svg";
import careers from "@/public/images/navbar/careers.svg";
import contact from "@/public/images/navbar/contact.svg";
import ciTesting from "@/public/images/navbar/ci-testing.svg";
import cicd from "@/public/images/navbar/cicd.svg";
import codeBranch from "@/public/images/navbar/code-branch.svg";
import codeCoverage from "@/public/images/navbar/code-coverage.svg";
import codescan from "@/public/images/navbar/codescan.svg";
import communitygroup from "@/public/images/navbar/community-group.svg";
import contract from "@/public/images/navbar/contract.svg";
import developer from "@/public/images/navbar/developer.svg";
import documents from "@/public/images/navbar/documents.svg";
import events from "@/public/images/navbar/event.svg";
import github from "@/public/images/navbar/github.svg";
import gitlab from "@/public/images/navbar/gitlab.svg";
import jenkin from "@/public/images/navbar/jenkins.svg";
import keploy from "@/public/images/navbar/keploy.svg";
import multiPurpose from "@/public/images/navbar/multi-purpose.svg";
import regression from "@/public/images/navbar/regression.svg";
import tutorials from "@/public/images/navbar/turtorials.svg";
import unitTest from "@/public/images/navbar/unit-test.svg";
import settings from "@/public/images/navbar/settings.svg";
import testCase from "@/public/images/navbar/test-case.svg";
import testData from "@/public/images/navbar/test-data.svg";
import community from "@/public/images/navbar/community.svg";
import enterprise from "@/public/images/navbar/enterprise.svg";
export const PillarPages = [
  {
    heading: "Solutions",
    links: [
      { pagelink: "/test-data-generator", pageName: "Test Data Generation", icons: testData },
      { pagelink: "/test-case-generator", pageName: "Test Case Generation", icons: testCase },
      { pagelink: "/unit-test-generator", pageName: "Unit Test Generation", icons: unitTest },
      { pagelink: "/code-coverage", pageName: "Code Coverage", icons: codeCoverage },
      { pagelink: "/continuous-integration-testing", pageName: "CI Testing", icons: ciTesting },
      { pagelink: "/integration-testing", pageName: "Regression Testing", icons: regression },
      { pagelink: "/api-testing", pageName: "API Testing", icons: apiTesting },
      { pagelink: "/ai-code-generation", pageName: "Contract Testing", icons: contract },
    ],
  },
  {
    heading: "Integrations",
    links: [
      { pagelink: "/git", pageName: "Git", icons: codeBranch },
      { pagelink: "/jenkins", pageName: "Jenkins", icons: jenkin },
      { pagelink: "/gitlab", pageName: "GitLab", icons: gitlab }
    ],
  },
];

export const PillarPages1 = [
  {
    heading: "Open Source",
    links: [
      { pagelink: "/what-is-keploy", pageName: "What is Keploy?", icons: keploy },
      { pagelink: "/why-keploy", pageName: "Why use Keploy?", icons: documents },
      { pagelink: "/how-it-works", pageName: "How it works?", icons: settings },
      { pagelink: "/getting-started", pageName: "Getting started guide", icons: codescan },
    ],
    icons: community,
  },
  {
    heading: "Enterprise Solution",
    links: [
      { pagelink: "/api-recording", pageName: "API Call Recording and Replaying", icons: api },
      { pagelink: "/mocking", pageName: "Automatic Mocking of Dependencies", icons: developer },
      { pagelink: "/cicd-integration", pageName: "CI/CD Integration", icons: cicd },
      { pagelink: "/multi-purpose-mocks", pageName: "Multi-Purpose Mocks", icons: multiPurpose },
    ],
    icons: enterprise,
  },
];

export const PillarPages2 = [
  {
    heading: "Company",
    links: [
      { pagelink: "/about-us", pageName: "About Us", icon: "icon-about", icons: about },
      { pagelink: "/contact-us", pageName: "Contact Us", icon: "icon-contact", icons: contact },
      { pagelink: "/careers", pageName: "Careers", icon: "icon-careers", icons: careers },
    ],
  },
  {
    heading: "References",
    links: [
      { pagelink: "/tutorials", pageName: "Tutorials", icon: "icon-tutorials", icons: tutorials },
      { pagelink: "/blogs", pageName: "Blogs", icon: "icon-blogs", icons: blog },
      { pagelink: "/community-articles", pageName: "Community Articles", icon: "icon-articles", icons: article },
      { pagelink: "/case-studies", pageName: "Case Studies", icon: "icon-case-studies", icons: caseStudies },
    ],
  },
  {
    heading: "Contribute",
    links: [
      { pagelink: "/github", pageName: "GitHub", icon: "icon-github", icons: github },
      { pagelink: "/community", pageName: "Community", icon: "icon-community", icons: communitygroup },
      { pagelink: "/events", pageName: "Events", icon: "icon-events", icons: events },
    ],
  },
];

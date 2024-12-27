import WhatIsKeploy from "@/public/images/navBarIcons/WhatIsKeploy";
import WhyUseKeploy from "@/public/images/navBarIcons/WhyUseKeploy";
import HowItWorks from "@/public/images/navBarIcons/HowItWorks";
import GettingStarted from "@/public/images/navBarIcons/GettingStarted";
import About from "@/public/images/navBarIcons/About";
import Contact from "@/public/images/navBarIcons/Contact";
import Tutorial from "@/public/images/navBarIcons/Tutorial";
import Blogs from "@/public/images/navBarIcons/Blogs";
import CommunityArticles from "@/public/images/navBarIcons/CommunityArticles";
import CaseStudies from "@/public/images/navBarIcons/CaseStudies";
import Github from "@/public/images/navBarIcons/Github";
import Community from "@/public/images/navBarIcons/Community";
import KRoc from "@/public/images/navBarIcons/kRoc";
import Resource from "@/public/images/navBarIcons/Resource";


export const ProductsSection = [
    {
      heading: "Use Cases",
      links: [
        {
          pagelink: "https://keploy.io/docs/concepts/what-is-keploy/#heading",
          pageName: "What is Keploy",
          Icon: WhatIsKeploy,
        },
        {
          pagelink: "https://keploy.io/docs/keploy-explained/why-keploy/#heading",
          pageName: "Why use Keploy",
          Icon: WhyUseKeploy,
        },
        {
          pagelink: "https://keploy.io/docs/keploy-explained/how-keploy-works/#heading",
          pageName: "How it works",
          Icon:HowItWorks,
        },
        {
          pagelink: "https://keploy.io/docs/running-keploy/configuration-file/#getting-started",
          pageName: "Getting Started Guide",
          Icon: GettingStarted ,
        },
      ]
    }
  ];

export const GlossarySection = [
    {
      heading: "Use Cases",
      links: [
        {
          pagelink: "https://www.linkedin.com/company/keploy/posts/?feedView=all",
          pageName: "About Us",
          Icon: About,
        },
        {
          pagelink: "https://keploy.io/docs/concepts/support/#heading",
          pageName: "Contact Us",
          Icon: Contact,
        },
        {
          pagelink: "/coming-soon",
          pageName: "Careers",
          Icon: About,
        },
        {
          pagelink: "https://www.youtube.com/@keploy",
          pageName: "Tutorials",
          Icon: Tutorial ,
        },
        {
            pagelink: "https://keploy.io/blog/technology",
            pageName: "Blogs",
            Icon: Blogs,
        },
        {
            pagelink: "https://keploy.io/blog/community",
            pageName: "Community Articles",
            Icon: CommunityArticles,
        },
        {
            pagelink: "/coming-soon",
            pageName: "Case Studies",
            Icon: CaseStudies,
        },
        {
            pagelink: "https://github.com/keploy",
            pageName: "Github",
            Icon: Github,
        },
        {
            pagelink: "https://keploy.slack.com/join/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw",
            pageName: "Community",
            Icon: Community,
        },
        {
            pagelink: "https://writers.keploy.io/",
            pageName: "Writer's Program",
            Icon: Resource,
        },
        {
            pagelink: "/devscribe",
            pageName: "Events",
            Icon: KRoc,
        },
          
      ]
    }
  ];


  
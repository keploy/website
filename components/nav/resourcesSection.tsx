import { useState } from "react";
import DownIcon from "./DownIcon";
import { UpIcon } from "./UpIcon";
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
import Link from "next/link";
import Pricing from "@/public/images/navBarIcons/Pricing";

export default function Resources() {
  const [openDropdown, setShowDropdown] = useState(false);

  const showDropdown = () => {
    setShowDropdown(true);
  };
  const hideDropdown = () => {
    setShowDropdown(false);
  };
  const toggleDropdown = () => {
    setShowDropdown(!openDropdown);
};

const resourcesData = [
  {
    title: "Company",
    items: [
      {
        icon: <About />,
        name: "About Us",
        url: "https://www.linkedin.com/company/keploy/posts/?feedView=all",
      },
      {
        icon: <Contact />,
        name: "Contact Us",
        url: "https://keploy.io/docs/concepts/support/#heading",
      },
      {
        icon: <About />,
        name: "Careers",
        url: "/coming-soon",
        isInternal: true,
      },
      {
        icon: <Pricing />,
        name: "Pricing",
        url: "/coming-soon",
        isInternal: true,
      },
    ],
  },
  {
    title: "References",
    items: [
      {
        icon: <Tutorial />,
        name: "Tutorials",
        url: "https://www.youtube.com/@keploy",
      },
      {
        icon: <Blogs />,
        name: "Blogs",
        url: "https://keploy.io/blog/technology",
      },
      {
        icon: <CommunityArticles />,
        name: "Community Articles",
        url: "https://keploy.io/blog/community",
      },
      {
        icon: <CaseStudies />,
        name: "Case Studies",
        url: "",
      },
    ],
  },
  {
    title: "Contribute",
    items: [
      {
        icon: <Github />,
        name: "Github",
        url: "https://github.com/keploy",
      },
      {
        icon: <Community />,
        name: "Community",
        url: "https://keploy.slack.com/join/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw",
      },
      {
        icon: <Resource />,
        name: "Writer's Program",
        url: "https://writers.keploy.io/",
      },
      {
        icon: <KRoc />,
        name: "Events",
        url: "https://keploy.io/devscribe",
      },
    ],
  },
];
  return (
    <div
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className="relative flex items-center py-3 transition duration-150 ease-in-out cursor-pointer"
    >
      <div className="flex  items-center text-gray-600 hover:text-primary-100">
        <div className="flex">
          <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
            Resources
            <span className="absolute text-gray-600 text-[3px] left-[.45rem] bottom-[.15rem] w-full h-[.195rem] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </div>
        </div>
        <div onClick={toggleDropdown} >
          {openDropdown ? (
            <UpIcon className="text-gray-600" />
          ) : (
            <DownIcon className="text-gray-600" />
          )}
        </div>
      </div>

      {openDropdown && (
        <div className="fixed bg-gradient-100 pb-8 z-10 shadow-xl top-[80px] left-0 right-0 mx-auto w-full max-w-6xl h-auto cursor-auto rounded-b-2xl p-4 sm:p-6">
          {/* Changed positioning to left-0 right-0 with mx-auto and max-w for responsiveness */}
          <div className="flex flex-col md:flex-row items-start justify-between ml-20">
            {/* Use flex-col on small screens and flex-row on medium and above */}
            <div className="flex flex-col md:flex-row  w-full">
            {resourcesData.map((section, index) => (
              <div className="p-5 flex-1" key={index}>
                <div className="pb-5 text-gray-600">{section.title}</div>
                <ul className="flex flex-col gap-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.isInternal ? (
                        <Link
                          href={item.url}
                          className="flex items-center gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-semibold hover:text-primary-500 transition-colors duration-200 h-[24px]"
                        >
                          {item.icon}
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
              {/* Company Section */}
              <div className="p-5 flex-1 ">
                <div className="pb-5 text-gray-600">Company</div>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/keploy/posts/?feedView=all"
                      className="flex items-center gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <About />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/docs/concepts/support/#heading"
                      className="flex items-center gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <Contact />
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <Link
                      href={"/coming-soon"}
                      className="flex items-center gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <About />
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/coming-soon"}
                      className="flex items-center gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <Pricing />
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* References Section */}
              <div className="p-5 flex-1">
                <div className="pb-5 text-gray-600">References</div>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://www.youtube.com/@keploy"
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <Tutorial />
                      Tutorials
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://keploy.io/blog/technology"
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <Blogs />
                      Blogs
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://keploy.io/blog/community"
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <CommunityArticles />
                      Community Articles
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <CaseStudies />
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contribute Section */}
              <div className="p-5 flex-1">
                <div className="pb-5 text-gray-600">Contribute</div>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://github.com/keploy"
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <Github />
                      Github
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://join.slack.com/t/keploy/shared_invite/zt-2dno1yetd-Ec3el~tTwHYIHgGI0jPe7A"
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <Community />
                      Community
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://keploy.io/docs/"
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <Resource />
                      Resources
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://keploy.io/devscribe"
                      className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                    >
                      <KRoc />
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

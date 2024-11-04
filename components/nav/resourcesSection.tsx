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
    <>
      <div
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        className="relative flex items-center py-3 transition duration-150 ease-in-out cursor-pointer"
      >
        <div className="flex align-center text-gray-600 hover:text-primary-100">
          <div className="flex">
            <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
              Resources
              <span className="absolute text-gray-600 text-[3px] left-[.45rem] bottom-[.15rem] w-full h-[.195rem] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </div>
          </div>
          <div onClick={toggleDropdown} className="pt-4 -pl-6">
            {openDropdown ? (
              <UpIcon className="text-gray-600" />
            ) : (
              <DownIcon className="text-gray-600" />
            )}
          </div>
        </div>

        {openDropdown && (
          <div className="fixed bg-gradient-100 pb-8 z-10 shadow-xl top-[80px] left-[182px] w-[925px] h-[280px] cursor-auto rounded-2xl">
            <div>
              <div className="flex items-center justify-evenly">
                <div className="pt-[20px] px-[19px] flex justify-between items-stretch w-full">
                  <div className="p-5">
                    <div className="pb-5 text-gray-600">Company</div>
                    <div>
                      <ul className="flex flex-col gap-5">
                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <About />
                            About Us
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <Contact />
                            Contact Us
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <About />
                            Careers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="pb-5 text-gray-600">References</div>
                    <div>
                      <ul className="flex flex-col gap-5">
                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <Tutorial />
                            Tutorials
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <Blogs />
                            Blogs
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <CommunityArticles />
                            Community Articles
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <CaseStudies />
                            Case Studies
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="pb-5 text-gray-600">Contribute</div>
                    <div>
                      <ul className="flex flex-col gap-5">
                        <li>
                          <a
                            href=""
                            className="flex gap-3 font-[700] hover:text-primary-500 duration-200"
                          >
                            <Github />
                            Github
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-3 font-[700] hover:text-primary-500 duration-200"
                          >
                            <Community />
                            Community
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-3 font-[700] hover:text-primary-500 duration-200"
                          >
                            <Resource />
                            Resources
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-3 font-[700] hover:text-primary-500 duration-200"
                          >
                            <KRoc />
                            kRoc
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

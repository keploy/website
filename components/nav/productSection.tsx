import React from "react";
import { useState } from "react";
import { UpIcon } from "./UpIcon";
import DownIcon from "./DownIcon";
import OpenSource from "@/public/images/navBarIcons/OpenSource";
import EnterpriseSolution from "@/public/images/navBarIcons/EnterpriseSolution";
import WhatIsKeploy from "@/public/images/navBarIcons/WhatIsKeploy";
import WhyUseKeploy from "@/public/images/navBarIcons/WhyUseKeploy";
import HowItWorks from "@/public/images/navBarIcons/HowItWorks";
import GettingStarted from "@/public/images/navBarIcons/GettingStarted";
import ApiCallRecording from "@/public/images/navBarIcons/ApiCallRecording";
import AutomaticMocking from "@/public/images/navBarIcons/AutomaticMocking";
import CICD from "@/public/images/navBarIcons/CICD";
import MultiPurposeMocks from "@/public/images/navBarIcons/MultiPurposeMocks";
import EnterpriseSolutionImg from "@/public/images/navBarIcons/EnterpriseSolutionImg";

export default function Product() {
  const [openDropdown, setShowDropdown] = useState(false);
  const [enterpriseHover, setEnterpriseHover] = useState(false);
  const [openSourceHover, setOpenSourceHover] = useState(true);

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
      <div className="flex align-center text-gray-600 hover:text-primary-100">
        <div className="flex">
          <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
            Products
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
        <div className="fixed bg-gradient-100 pb-8 z-10 shadow-xl top-[80px] left-[28px] w-[1300px] h-[320px] cursor-auto rounded-2xl">
          <div>
            <div className="flex items-center justify-between">
              <div className="pt-[39px] pl-[19px] flex justify-between items-stretch w-full">
                <div className="p-5">
                  <div
                    className="flex gap-3 justify-center items-center hover:bg-primary-100 hover:bg-opacity-20 duration-300 rounded-[135px] p-5 mb-6"
                    onMouseEnter={() => {
                      setOpenSourceHover(true);
                      setEnterpriseHover(false);
                    }}
                  >
                    <OpenSource />
                    <div>
                      <h1 className="text-[20px] font-bold cursor-pointer">
                        Open Source
                      </h1>
                      <p className="text-[14px] text-[#797C88] cursor-pointer">
                        Open Source testing solution
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex gap-3 justify-center items-center hover:bg-primary-100 hover:bg-opacity-20 duration-300 rounded-[135px] p-5"
                    onMouseEnter={() => {
                      setEnterpriseHover(true);
                      setOpenSourceHover(false);
                    }}
                  >
                    <EnterpriseSolution />
                    <div>
                      <h1 className="text-[20px] font-bold cursor-pointer">
                        Enterprise Solution
                      </h1>
                      <p className="text-[14px] text-[#797C88] cursor-pointer">
                        Open Source testing solution
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[14px] text-gray-500 pb-5">
                    About Product
                  </p>

                  <div>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <WhatIsKeploy />
                          What is Keploy?
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <WhyUseKeploy />
                          Why use Keploy?
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <HowItWorks />
                          How it works?
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <GettingStarted />
                          Getting started guide
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-row justify-start pr-36">
                  <div>
                    {openSourceHover && (
                      <div>
                        <p className="text-[14px] text-gray-500 pb-5">
                          Features
                        </p>

                        <div>
                          <ul className="flex flex-col gap-6">
                            <li>
                              <a
                                href=""
                                className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                              >
                                <ApiCallRecording />
                                API Call Recording and Replay
                              </a>
                            </li>

                            <li>
                              <a
                                href=""
                                className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                              >
                                <AutomaticMocking />
                                Automatic Mocking of Dependencies
                              </a>
                            </li>

                            <li>
                              <a
                                href=""
                                className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                              >
                                <CICD />
                                CI/CD Integration
                              </a>
                            </li>

                            <li>
                              <a
                                href=""
                                className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                              >
                                <MultiPurposeMocks />
                                Multi Purpose Mocks
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {enterpriseHover && (
                      <div className="shadow-xl rounded-xl">
                        <div className="p-5 text-center flex justify-center flex-col gap-3 items-center">
                          <p className="text-[12px] font-inter font-[700]">
                            Want to achieve achieving 95% coverage by making{" "}
                            <br /> API calls of all possible permutations
                          </p>

                          {/* <Image
                            src="/images/navBarIcons/EnterpriseSolutionImg.png"
                            alt="Enterprise Solution image"
                            height={556}
                            width={260}
                          /> */}

                          <button className="cursor-pointer bg-primary-200 w-[50%] rounded-md font-bold shadow-lg hover:shadow-none p-1">
                            Talk to us
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

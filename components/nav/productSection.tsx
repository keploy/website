import React from "react";
import { useState , useEffect } from "react";
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
import EnterPrice from "@/public/images/navBarIcons/EnterPrice.svg"
import Image from "next/image";
import MemoizedImage from "@/public/images/navBarIcons/EnterPrice";
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

  useEffect(() => {
    const img: HTMLImageElement = document.createElement('img'); // Create an HTMLImageElement
    img.src = "/images/navBarIcons/EnterPrice.svg"; // Set the source to preload
  }, []);
  
  

  return (
    <div
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className="relative flex items-center py-3 transition duration-150 ease-in-out cursor-pointer"
    >
      <div className="flex items-center text-gray-600 hover:text-primary-100">
        <div className="flex">
          <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
            Products
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
        <div className="fixed bg-gradient-100 pb-8 z-10 shadow-xl top-[80px] left-0 right-0 mx-auto w-full max-w-6xl h-auto cursor-auto rounded-2xl p-4 sm:p-6">
          {/* Changed positioning to left-0 right-0 with mx-auto and max-w for responsiveness */}
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Use flex-col on small screens and flex-row on medium and above */}
            <div className="flex flex-col md:flex-row w-full">
              <div className="p-5 flex-1">
                <div
                  className="flex gap-3 justify-center items-center hover:bg-primary-100 hover:bg-opacity-20 duration-300 rounded-full p-5 mb-6"
                  onMouseEnter={() => {
                    setOpenSourceHover(true);
                    setEnterpriseHover(false);
                  }}
                >
                  <OpenSource />
                  <div>
                    <h1 className="text-lg font-bold cursor-pointer">Open Source</h1>
                    <p className="text-sm text-[#797C88] cursor-pointer">
                      Open Source testing solution
                    </p>
                  </div>
                </div>

                <div
                  className="flex gap-3 justify-center items-center hover:bg-primary-100 hover:bg-opacity-20 duration-300 rounded-full p-5"
                  onMouseEnter={() => {
                    setEnterpriseHover(true);
                    setOpenSourceHover(false);
                  }}
                >
                  <EnterpriseSolution />
                  <div>
                    <h1 className="text-lg font-bold cursor-pointer">Enterprise Solution</h1>
                    <p className="text-sm text-[#797C88] cursor-pointer">
                      Comprehensive enterprise testing
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-5">
                <p className="text-sm text-gray-500 pb-5">About Product</p>

                <div>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="https://keploy.io/docs/concepts/what-is-keploy/#heading"
                        className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                      >
                        <WhatIsKeploy />
                        What is Keploy?
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://keploy.io/docs/keploy-explained/why-keploy/#heading"
                        className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                      >
                        <WhyUseKeploy />
                        Why use Keploy?
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://keploy.io/docs/keploy-explained/how-keploy-works/#heading"
                        className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                      >
                        <HowItWorks />
                        How it works?
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://keploy.io/docs/running-keploy/configuration-file/#getting-started"
                        className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                      >
                        <GettingStarted />
                        Getting started guide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-1/3 p-5" style={{ minHeight: '300px' }}> {/* Set a minimum height for stability */}
              {openSourceHover && (
                  <div>
                    <p className="text-sm text-gray-500 pb-5">Features</p>

                    <div>
                      <ul className="flex flex-col gap-4">
                        <li>
                          <a
                            href="https://keploy.io/docs/concepts/what-is-keploy/#step-1--record-unique-network-interactions-as-test-case"
                            className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                          >
                            <ApiCallRecording />
                            API Call Recording and Replay
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://keploy.io/docs/concepts/reference/glossary/mocks/#overcoming-the-challenges"
                            className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                          >
                            <AutomaticMocking />
                            Automatic Mocking of Dependencies
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://keploy.io/docs/concepts/what-are-keploy-features/#-combined-test-coverage-in-cicd"
                            className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                          >
                            <CICD />
                            CI/CD Integration
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://keploy.io/docs/concepts/what-are-keploy-features/#%EF%B8%8F-multi-purpose-mocks"
                            className="flex gap-2 font-semibold hover:text-primary-500 transition-colors duration-200"
                          >
                            <MultiPurposeMocks />
                            Multi Purpose Mocks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {enterpriseHover && (
                  <div className="shadow-xl rounded-xl p-5 mt-6">
                    <div className="text-center flex flex-col gap-3 items-center">
                      <p className="text-xs font-semibold">
                        Want to achieve 95% coverage by making API calls of all possible permutations
                      </p>
                    <MemoizedImage/>
                      <button className="mt-4 bg-primary-200 w-1/2 rounded-md font-bold shadow-lg hover:shadow-none p-2">
                        <a href="https://calendar.app.google/CmnbjuDnK8J2Xuge8" target="_blank">
                          Talk to us
                        </a>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

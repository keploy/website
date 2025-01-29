"use client";

import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import CarouselIllustration from "@/public/images/features-02.png";
import UnitTesting from "@/public/images/pr-agent.png";
import Illustration from "@/public/images/glow-top.svg";
import Illustration1 from "@/public/images/glow-bottom.svg";
import WorflowImg01 from "@/public/images/api-testing.svg";

export default function Enterprise() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      {tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;}
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section id='enterprise' className="relative bg-slate-950 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none max-lg:after:hidden">
      <div className="py-12 md:py-20">
        {/* Illustration */}
        <div
          className="absolute opacity-65 inset-0 z-20 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        {/* Illustration */}
        <div
          className="absolute opacity-15 inset-0 z-20 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image
              src={Illustration1}
              className="max-w-none"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-xl lg:max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:flex space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-24">
            {/* Content */}
            <div className="lg:max-w-none lg:min-w-[524px]">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-yellow-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-yellow-400/50">
                  <span className="inline-flex bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                    Keploy Enterprise
                  </span>
                </div>
                <h3 className=" text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300/80 via-slate-200 to-slate-300/80 mb-4">
                  Confident. Scalable. Reliable.
                  <br />
                  Testing with AI for all scenarios
                </h3>
                <p className="text-lg text-zinc-200/75">
                  Keploy scales with your team - with test deduplication, GitHub
                  PR unit test agents, and CI/CD alerts. Track and improve
                  testing coverage across repositories.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0 space-y-2">
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${
                    tab !== 1
                      ? ""
                      : "[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] border-orange-700"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <svg
                    className={`shrink-0 mr-3 ${
                      tab !== 1 ? "fill-white" : "fill-orange-600"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="m7.951 14.537 6.296-7.196 1.506 1.318-7.704 8.804-3.756-3.756 1.414-1.414 2.244 2.244Zm11.296-7.196 1.506 1.318-7.704 8.804-1.756-1.756 1.414-1.414.244.244 6.296-7.196Z" />
                  </svg>
                  <div>
                    <div className=" text-lg font-semibold text-white/90 mb-1">
                      AI-Driven Test Generation
                    </div>
                    <div className="text-zinc-400">
                      Automatically generate high-quality test cases to uncover
                      edge scenarios and improve code coverage.
                    </div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${
                    tab !== 2
                      ? ""
                      : "[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] border-orange-700"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <svg
                    className={`shrink-0 mr-3 ${
                      tab !== 2 ? "fill-white" : "fill-orange-600"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="m16.997 19.056-1.78-.912A13.91 13.91 0 0 0 16.75 11.8c0-2.206-.526-4.38-1.533-6.344l1.78-.912A15.91 15.91 0 0 1 18.75 11.8c0 2.524-.602 5.01-1.753 7.256Zm-3.616-1.701-1.77-.93A9.944 9.944 0 0 0 12.75 11.8c0-1.611-.39-3.199-1.14-4.625l1.771-.93c.9 1.714 1.37 3.62 1.369 5.555 0 1.935-.47 3.841-1.369 5.555Zm-3.626-1.693-1.75-.968c.49-.885.746-1.881.745-2.895a5.97 5.97 0 0 0-.745-2.893l1.75-.968a7.968 7.968 0 0 1 .995 3.861 7.97 7.97 0 0 1-.995 3.863Zm-3.673-1.65-1.664-1.11c.217-.325.333-.709.332-1.103 0-.392-.115-.776-.332-1.102L6.082 9.59c.437.655.67 1.425.668 2.21a3.981 3.981 0 0 1-.668 2.212Z" />
                  </svg>
                  <div>
                    <div className=" text-lg font-semibold text-white/90 mb-1">
                      GitHub PR Test Agent
                    </div>
                    <div className="text-zinc-400">
                      Automate unit test generation for every new PR, ensuring
                      coverage, consistent builds across all repos.
                    </div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${
                    tab !== 3
                      ? ""
                      : "[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] border-orange-700"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <svg
                    className={`shrink-0 mr-3 ${
                      tab !== 3 ? "fill-white" : "fill-orange-600"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="m11.293 5.293 1.414 1.414-8 8-1.414-1.414 8-8Zm7-1 1.414 1.414-8 8-1.414-1.414 8-8Zm0 6 1.414 1.414-8 8-1.414-1.414 8-8Z" />
                  </svg>
                  <div>
                    <div className=" text-lg font-semibold text-white/90 mb-1">
                      Centralized Reporting Dashboard
                    </div>
                    <div className="text-zinc-400">
                      Visualize real-time metrics like test coverage, failures,
                      and quality insights in a single, easy-to-navigate
                      console.
                    </div>
                  </div>
                </button>
              </div>
              <div className="mt-10 mx-5 max-md:text-center">
                <button
                  className="text-sm font-medium rounded-full bg-gradient-to-r from-orange-600/90 via-orange-500 to-orange-400/90 text-white px-6 py-3 shadow-md hover:shadow-lg hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  onClick={() =>
                    (window.location.href =
                      "https://calendar.app.google/cXVaj6hbMUjvmrnt9")
                  } // Replace with actual CTA link
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="relative lg:max-w-none">
              <div className="relative flex flex-col" ref={tabs}>
                {/* Item 1 */}
                <Transition
                  as="div"
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => {
                    heightFix();
                  }}
                  unmount={false}
                >
                  <div>
                    <Image
                      className=" z-30 mt-5 lg:max-w-none mx-auto rounded-lg shadow-2xl "
                      src={UnitTesting}
                      width={700}
                      height={520}
                      alt="Carousel 01"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  as="div"
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => {
                    heightFix();
                  }}
                  unmount={false}
                >
                  <div>
                    <Image
                      className="z-30 lg:max-w-none mx-auto rounded-lg shadow-2xl lg:pt-20 lg:-rotate-[8deg] "
                      src={WorflowImg01}
                      width={700}
                      height={620}
                      alt="Carousel 02"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  as="div"
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => {
                    heightFix();
                  }}
                  unmount={false}
                >
                  <div>
                    <Image
                      className="lg:max-w-none mx-auto rounded-lg shadow-2xl"
                      src={CarouselIllustration}
                      width={600}
                      height={520}
                      alt="Carousel 03"
                    />
                  </div>
                </Transition>
              </div>

              {/*TODO*/}
              {/* Gear illustration */}
              {/*<Image*/}
              {/*    className="absolute opacity-55 left-0 bottom-20 -translate-x-1/2 translate-y-1/3 mix-blend-exclusion max-lg:w-32"*/}
              {/*    src={FeatureIllustration}*/}
              {/*    alt="Features 02 illustration"*/}
              {/*    width={173}*/}
              {/*    height={167}*/}
              {/*    aria-hidden="true"*/}
              {/*/>*/}
            </div>
          </div>
        </div>

        {/* Features blocks */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 lg:mt-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Block #1 */}
            <div>
              <div className="flex items-center mb-1">
                <svg
                  className="fill-zinc-400 mr-2"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9,6H18.2l-2,4H5V27H30V6ZM28,24H7V12H28Zm.1-14H20.3l1-2H28Z"
                    style={{
                      fill: "#ffffff",
                    }}
                  />
                  <polygon
                    points="25.9 14 0.3 14 4.1 27 29.7 27 25.9 14"
                    style={{
                      fill: "#fffbe6",
                    }}
                  />
                  <path
                    d="M14.54,11.41a2.076,2.076,0,0,1,2.724-1.21c2.191,1.057,4.714,1.79,7.122,1.032.37-.1.738-.214,1.1-.347,1.023-.319,2.082-1.239,3.185-.689a4.537,4.537,0,0,1,1.847,3,20.978,20.978,0,0,1-.044,8.83,13.682,13.682,0,0,1-3.506,7.026A6.838,6.838,0,0,1,22.711,31q-.5,0-1-.016a6.776,6.776,0,0,1-4.744-2.419c-2.486-2.966-3.347-6.938-3.534-10.718A13.692,13.692,0,0,1,14.54,11.41m1.281,6.5a7.156,7.156,0,0,1,4.831-.014c-.29-2.344-4.52-2.317-4.831.014m7.908-.023a8.027,8.027,0,0,1,4.821-.05c-.408-2.271-4.46-2.242-4.821.05m-5.694,6.15a2.984,2.984,0,0,0,2.279,2.717,5.521,5.521,0,0,0,5.17-.792,2.9,2.9,0,0,0,.923-1.922A12.553,12.553,0,0,1,18.035,24.041Z"
                    style={{
                      fill: "rgb(250,197,2)",
                    }}
                  />
                  <path
                    d="M15.821,17.914c.311-2.331,4.541-2.358,4.831-.014A7.156,7.156,0,0,0,15.821,17.914Zm7.908-.023c.361-2.292,4.413-2.321,4.821-.05A8.027,8.027,0,0,0,23.729,17.891Zm-5.694,6.15a12.553,12.553,0,0,0,8.372,0,2.9,2.9,0,0,1-.923,1.922,5.521,5.521,0,0,1-5.17.792A2.984,2.984,0,0,1,18.035,24.041Z"
                    style={{
                      fill: "#fffbe6",
                    }}
                  />
                </svg>
                <h3 className=" font-semibold text-white/90">
                  Smarter Test Deduplication
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Detect and remove redundant or overlapping tests, streamlining
                your suite for faster execution and cleaner results.
              </p>
            </div>
            {/* Block #2 */}
            <div>
              <div className="flex items-center mb-1">
                <svg
                  className="fill-zinc-400 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z"
                    stroke="#fafafa"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="font-semibold text-white/90">
                  Global Coverage Insights
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Track code coverage and testing performance across projects and
                teams for a comprehensive organizational view.
              </p>
            </div>
            {/* Block #3 */}
            <div>
              <div className="flex items-center mb-1">
                <svg
                  className="fill-zinc-400 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#fafafa"
                    fillRule="evenodd"
                    d="M2.75 2.5A1.75 1.75 0 001 4.25v1C1 6.216 1.784 7 2.75 7h1a1.75 1.75 0 001.732-1.5H6.5a.75.75 0 01.75.75v3.5A2.25 2.25 0 009.5 12h1.018c.121.848.85 1.5 1.732 1.5h1A1.75 1.75 0 0015 11.75v-1A1.75 1.75 0 0013.25 9h-1a1.75 1.75 0 00-1.732 1.5H9.5a.75.75 0 01-.75-.75v-3.5A2.25 2.25 0 006.5 4H5.482A1.75 1.75 0 003.75 2.5h-1zM2.5 4.25A.25.25 0 012.75 4h1a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-1zm9.75 6.25a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25h-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className=" font-semibold text-white/90">
                  Full CI/CD Integration
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Seamlessly integrate with your CI/CD pipelines to trigger tests,
                monitor failures, and notify teams in real-time.
              </p>
            </div>
            {/* Block #4 */}
            <div>
              <div className="flex items-center mb-1">
                <svg
                  className="fill-zinc-400 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <polyline
                    className="cls-1"
                    points="12 23.5 12 17.75 12 15.32"
                  />
                  <polyline className="cls-1" points="12 8.68 12 6.25 12 0.5" />
                  <polyline
                    className="cls-1"
                    points="15.83 2.42 12 6.25 8.17 2.42"
                  />
                  <polyline
                    className="cls-1"
                    points="8.17 21.58 12 17.75 15.83 21.58"
                  />
                  <polyline
                    className="cls-1"
                    points="21.96 17.75 16.98 14.88 14.88 13.66"
                  />
                  <polyline
                    className="cls-1"
                    points="9.13 10.34 7.02 9.13 2.04 6.25"
                  />
                  <polyline
                    className="cls-1"
                    points="5.62 3.89 7.02 9.13 1.78 10.53"
                  />
                  <polyline
                    className="cls-1"
                    points="18.38 20.11 16.98 14.88 22.22 13.47"
                  />
                  <polyline
                    className="cls-1"
                    points="2.04 17.75 7.02 14.88 9.13 13.66"
                  />
                  <polyline
                    className="cls-1"
                    points="14.88 10.34 16.98 9.13 21.96 6.25"
                  />
                  <polyline
                    className="cls-1"
                    points="18.38 3.89 16.98 9.13 22.22 10.53"
                  />
                  <polyline
                    className="cls-1"
                    points="5.62 20.11 7.02 14.88 1.78 13.47"
                  />
                  <polygon
                    className="cls-1"
                    points="14.88 10.34 14.88 13.66 12 15.32 9.13 13.66 9.13 10.34 12 8.68 14.88 10.34"
                  />
                </svg>
                <h3 className=" font-semibold text-white/90">
                  Dedicated Enterprise Support
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Get priority access to Keploy’s expert team for guidance,
                troubleshooting, and onboarding tailored to your needs.
              </p>
            </div>
            {/* Block #5 */}
            <div>
              <div className="flex items-center mb-1">
                <svg
                  className="fill-[#fafafa] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14.6.085 8 2.885 1.4.085c-.5-.2-1.4-.1-1.4.9v11c0 .4.2.8.6.9l7 3c.3.1.5.1.8 0l7-3c.4-.2.6-.5.6-.9v-11c0-1-.9-1.1-1.4-.9ZM2 2.485l5 2.1v8.8l-5-2.1v-8.8Zm12 8.8-5 2.1v-8.7l5-2.1v8.7Z" />
                </svg>
                <h3 className=" font-semibold text-white/90">
                  Cross-Repository Metrics
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Gain a unified view of test health, coverage, and trends across
                all repositories within your organization.
              </p>
            </div>
            {/* Block #6 */}
            <div>
              <div className="flex items-center mb-1">
                <svg
                  className="fill-[#fafafa] mr-2"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 74.999 74.999"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M33.511,71.013c15.487,0,28.551-10.563,32.375-24.859h9.113L61.055,22L47.111,46.151h8.006 c-3.44,8.563-11.826,14.628-21.605,14.628c-12.837,0-23.28-10.443-23.28-23.28c0-12.836,10.443-23.28,23.28-23.28 c6.604,0,12.566,2.768,16.809,7.196l5.258-9.108c-5.898-5.176-13.619-8.32-22.065-8.32C15.034,3.987,0,19.019,0,37.5 C-0.002,55.981,15.03,71.013,33.511,71.013z" />
                  </g>
                </svg>
                <h3 className=" font-semibold text-white/90">
                  Edge Case Detection{" "}
                </h3>
              </div>
              <p className="text-sm text-zinc-400">
                Leverage AI to identify edge scenarios missed by conventional
                tests, maximizing robustness and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

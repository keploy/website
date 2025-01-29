"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import RecordReplayImage from "@/public/images/record-replay.gif";
import SmallTestimonialImg from "@/public/images/small-testimonial.jpg";
import WorflowImg03 from "@/public/images/integration-testing.svg";
import OSSCLIRecord from "@/public/images/pet-record.png";

const tabs = [
  {
    title: "Record & Replay",
    description:
      "Records API calls coming to server into test cases and mocks (databases, http calls) using eBPF.",
    img: RecordReplayImage,
    imgAlt: "Carousel image 01",
  },
  {
    title: "Built for CI/CD",
    description:
      "Seamlessly integrates into pipelines (github actions, gitlab runners, bitbucket) without extra setup.",
    img: WorflowImg03,
    imgAlt: "Calculates Coverage",
  },
  {
    title: "Coverage-Friendly",
    description:
      "Works with JUnit, PyTest, Jest, Go-Test, and more to calculate test-coverage",
    img: OSSCLIRecord,
    imgAlt: "Carousel image 03",
  },
];

export default function IntegrationTesting() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section className="mt-12">
      <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab} vertical>
        <div className=" relative mx-auto max-w-6xl px-4 sm:px-6 ">
          <div className="opacity-55 absolute -top-[45%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]" />

          <div className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]" />

          <div className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]" />

          <div className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] rounded-full -rotate-12 bg-gradient-to-bl from-orange-400/15 to-pink-400/5 blur-[70px]" />

          <div className="border-b py-14 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-10">
            <div className="flex flex-col items-center justify-between  md:flex-row md:gap-8 lg:gap-16">
              {/* Left content */}
              <div className="shrink-0 md:w-[500px] [&_>*]:pl-7">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-green-600 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-green-600">
                  <span className="inline-flex bg-gradient-to-r from-orange-900 to-orange-700 bg-clip-text text-transparent">
                    API Testing Agent
                  </span>
                </div>
                <div className="relative mb-6 border-l [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.400/.25),transparent)1] after:absolute after:left-0 after:top-0 after:h-4 after:w-px after:origin-bottom after:-translate-y-full after:animate-shine after:bg-[linear-gradient(180deg,_transparent,_theme(colors.orange.700/.5)_25%,_theme(colors.orange.700)_50%,_theme(colors.orange.700/.5)_75%,_transparent)] after:opacity-0">
                  <div>
                    <h2 className=" bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent text-3xl font-semibold  md:text-4xl">
                      {" "}
                      Turn API Calls into Test Cases & Mocks
                    </h2>
                    <p className=" text-slate-800/70 py-7">
                      Automate API testing with{" "}
                      <b className="text-accent-success/80">open-source</b>{" "}
                      platform that records calls, replays them, and generates
                      mocks. Integrates into CI/CD without needing test
                      environments and gets you coverage.
                    </p>
                  </div>

                  {/* Buttons */}
                  <TabList className="space-y-1">
                    {tabs.map((tab, index) => (
                      <Tab key={index} as={Fragment}>
                        <div>
                          <button
                            className={`-mx-2 flex gap-2 p-2 text-left transition-opacity focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-orange-300 ${
                              selectedTab !== index
                                ? "opacity-50 hover:opacity-70"
                                : ""
                            }}`}
                          >
                            <svg
                              className={`shrink-0 mt-1 ${
                                selectedTab !== index
                                  ? "fil-theme-secondary-90"
                                  : "fill-orange-500"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                            >
                              <path d="m14.092 5.207-8.207 8.207-3.592-3.591 1.414-1.415 2.178 2.178 6.793-6.793 1.414 1.414Z" />
                            </svg>
                            <span>
                              <span className="font-medium text-orange-600">
                                {tab.title}
                              </span>
                              <span className="text-gray-700"> - </span>
                              <span className="text-gray-700">
                                {tab.description}
                              </span>
                            </span>
                          </button>
                          <div className="border-b border-gray-200 mx-4 my-2"></div>
                        </div>
                      </Tab>
                    ))}
                  </TabList>
                  <div className="mt-8">
                    <div className="flex items-center gap-3">
                      <Image
                        className="inline-flex shrink-0 rounded-full"
                        src={SmallTestimonialImg}
                        width={24}
                        height={24}
                        alt="Small testimonial"
                      />
                      <div className="text-sm font-medium text-indigo-900/90">
                        <span>Senior Executive Member</span>
                        <span className="text-gray-700"> - </span>
                        <a
                          className="text-theme-secondary/70 transition-colors text-xs"
                          href="#0"
                        >
                          Maruti Suzuki
                        </a>
                      </div>
                    </div>
                    <p className="mb-4 font-nacelle text-theme-secondary/70 mt-2">
                      “Our collaboration with Keploy was remarkable. Their
                      proactive support and platform have added significant
                      business value to code-quality. ”
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <TabPanels className="shrink-0 md:w-[540px]" data-aos="fade-up">
                <div className="relative flex flex-col">
                  {tabs.map((tab, index) => (
                    <Transition
                      key={index}
                      as="div"
                      show={selectedTab === index}
                      className={`transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:absolute data-[enter]:data-[closed]:-translate-y-6 data-[leave]:data-[closed]:translate-y-12 data-[closed]:opacity-0 data-[enter]:duration-500 data-[leave]:duration-300`}
                      unmount={false}
                      appear={true}
                    >
                      <TabPanel as={Fragment} static={true}>
                        <Image
                          width={540}
                          height={520}
                          src={tab.img}
                          alt={tab.imgAlt}
                        />
                      </TabPanel>
                    </Transition>
                  ))}
                </div>
                <div className="mt-2 text-center max-md:text-center">
                  <button
                    className="text-sm font-medium rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-400/70 text-white px-6 py-3 shadow-md hover:shadow-lg hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/keploy/keploy")
                    } // Replace with actual CTA link
                  >
                    Try Open Source
                  </button>
                </div>
              </TabPanels>
            </div>
          </div>
        </div>
      </TabGroup>
    </section>
  );
}

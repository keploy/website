"use client";

import { useRef, useState, Fragment } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Logo01 from "@/public/images/community-bunny-1.png";
import Logo02 from "@/public/images/logo-02.svg";
import Logo03 from "@/public/images/logo-03.svg";
import Logo04 from "@/public/images/logo-04.svg";
import Logo05 from "@/public/images/logo-05.svg";
import Logo06 from "@/public/images/logo-06.svg";
import Logo07 from "@/public/images/logo-07.svg";
import Logo08 from "@/public/images/logo-08.svg";
import Logo09 from "@/public/images/logo-09.svg";
import jenkins from "@/public/images/jenkins.svg";
import gitlab from "@/public/images/gitlab.svg";
import bitbucket from "@/public/images/bitbucket.svg";
import oracle from "@/public/images/oracle-logo.svg";
import docker from "@/public/images/docker.svg";
import kubernetes from "@/public/images/kubernetes.svg";
import mongo from "@/public/images/mongodb-logo.svg";
import postgres from "@/public/images/postgres.svg";
import mysql from "@/public/images/mysql-logo.svg";
import redis from "@/public/images/redis-logo.svg";
import nhost from "@/public/images/prisma.svg";
import dynamo from "@/public/images/dynamodb-logo.svg";
import gin from "@/public/images/gin.svg";
import echo from "@/public/images/echo.png";
import gorilla from "@/public/images/gorilla.png";
import django from "@/public/images/django.svg";
import dotnet from "@/public/images/dotnet.svg";
import pytest from "@/public/images/pytest.svg";
import junit from "@/public/images/JUnit.svg";
import python from "@/public/images/python.svg";
import ts from "@/public/images/typescript.svg";
import csharp from "@/public/images/csharp.svg";
import rust from "@/public/images/rust.svg";
import golang from "@/public/images/Go-Logo_Aqua.svg";
import java from "@/public/images/java-icon.svg";
import php from "@/public/images/php-logo.svg";

export default function Integrations() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-20 mb-32">
        <div className="bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent max-w-3xl mx-auto text-center pb-12">
          <h2 className="h3 ">AI Testing Across Your Stack </h2>
        </div>
        <div>
          <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
            {/* Buttons */}
            <div className="flex justify-center">
              <TabList className="relative mb-8 inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] max-[480px]:max-w-[180px] min-[480px]:mb-12">
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 0
                        ? "bg-gradient-to-r from-orange-600/90 via-orange-500 to-orange-400/90 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 0 ? "text-white" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                    </svg>
                    <span>Languages</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 1
                        ? "bg-gradient-to-r from-orange-600/90 via-orange-500 to-orange-400/90 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 1 ? "text-white" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Zm.132 7.204A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
                    </svg>
                    <span>Databases</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 2
                        ? "bg-gradient-to-r from-orange-600/90 via-orange-500 to-orange-400/90 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 2 ? "text-white" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M3 2a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V2Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V2Z" />
                    </svg>
                    <span>Frameworks</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 3
                        ? "bg-gradient-to-r from-orange-600/90 via-orange-500 to-orange-400/90 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 3 ? "text-white" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M.06 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 1 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331A2.162 2.162 0 0 1 .06 10.003Zm7.855-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33a.172.172 0 0 0 .17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.084 2.023a.172.172 0 0 0-.17-.001h.001ZM9.075.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.924.285a2.173 2.173 0 0 1 2.15 0h.001Z" />
                    </svg>
                    <span>CI/CD</span>
                  </button>
                </Tab>
              </TabList>
            </div>

            {/* Tab panels */}
            <TabPanels className="relative flex h-[324px] items-center justify-center">
              {/* Small blue dots */}
              <div className="absolute -z-10">
                <svg
                  className="fill-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  width={164}
                  height={41}
                  viewBox="0 0 164 41"
                  fill="none"
                >
                  <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                  <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                  <circle cx={1} cy={15} r={1} />
                  <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                  <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                  <circle cx={8} cy={8} r={1} />
                  <circle cx={8} cy={15} r={1} />
                  <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                  <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                  <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                  <circle cx={8} cy={33} r={1} />
                  <circle cx={1} cy={40} r={1} />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 7)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 0)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 25)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 32)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 7)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 25)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 14)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 25)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 32)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 39)"
                  />
                </svg>
              </div>
              {/* Blue glow */}
              <div className="absolute -z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={432}
                  height={160}
                  viewBox="0 0 432 160"
                  fill="none"
                >
                  <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                    <path
                      className="fill-blue-500"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_2044_9"
                      x={0}
                      y={0}
                      width={432}
                      height={160}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={32}
                        result="effect1_foregroundBlur_2044_9"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              {/* Horizontal lines */}
              <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-blue-500"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-blue-500"></div>
              {/* Diagonal lines */}
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Vertical lines */}
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Logos */}
              <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image
                      className="relative"
                      src={Logo01}
                      width={90}
                      height={90}
                      alt="Keploy Bunny"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col" ref={tabsRef}>
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 0}
                    unmount={false}
                    className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-125"
                  >
                    <div className="absolute -translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={java}
                            width={23}
                            height={22}
                            alt="Logo 02"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={ts}
                            width={22}
                            height={22}
                            alt="Logo 03"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={python}
                            width={24}
                            height={22}
                            alt="Logo 04"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-y-[82px] translate-x-[216px]">
                      <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={rust}
                            width={50}
                            height={50}
                            alt="Logo 05"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={golang}
                            width={50}
                            height={50}
                            alt="Logo 06"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={csharp}
                            width={25}
                            height={25}
                            alt="Logo 07"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={Logo08}
                            width={20}
                            height={20}
                            alt="Logo 08"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={php}
                            width={20}
                            height={20}
                            alt="Logo 09"
                          />
                        </div>
                      </div>
                    </div>
                  </Transition>
                </TabPanel>

                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="article"
                    show={selectedTab === 1}
                    unmount={false}
                    className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-125"
                  >
                    <div className="absolute -translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={mongo}
                            width={22}
                            height={22}
                            alt="Logo 03"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={oracle}
                            width={24}
                            height={22}
                            alt="Logo 04"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={Logo05}
                            width={25}
                            height={25}
                            alt="Logo 05"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-y-[82px] translate-x-[216px]">
                      <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={postgres}
                            width={23}
                            height={22}
                            alt="Logo 02"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={mysql}
                            width={25}
                            height={25}
                            alt="Logo 07"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={redis}
                            width={20}
                            height={18}
                            alt="Logo 06"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={dynamo}
                            width={21}
                            height={13}
                            alt="Logo 09"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={nhost}
                            width={20}
                            height={20}
                            alt="Logo 08"
                          />
                        </div>
                      </div>
                    </div>
                  </Transition>
                </TabPanel>

                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="article"
                    show={selectedTab === 2}
                    unmount={false}
                    className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-125"
                  >
                    <div className="absolute -translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={django}
                            width={23}
                            height={22}
                            alt="Logo 02"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={dotnet}
                            width={22}
                            height={22}
                            alt="Logo 03"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={gin}
                            width={24}
                            height={22}
                            alt="Logo 04"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-y-[82px] translate-x-[216px]">
                      <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={gorilla}
                            width={25}
                            height={25}
                            alt="Logo 05"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={echo}
                            width={20}
                            height={18}
                            alt="Logo 06"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={pytest}
                            width={25}
                            height={25}
                            alt="Logo 07"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={Logo08}
                            width={20}
                            height={20}
                            alt="Logo 08"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={junit}
                            width={21}
                            height={13}
                            alt="Logo 09"
                          />
                        </div>
                      </div>
                    </div>
                  </Transition>
                </TabPanel>

                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="article"
                    show={selectedTab === 3}
                    unmount={false}
                    className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-125"
                  >
                    <div className="absolute -translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={docker}
                            width={22}
                            height={22}
                            alt="Logo 03"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[136px]">
                      <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={jenkins}
                            width={24}
                            height={22}
                            alt="Logo 04"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={gitlab}
                            width={25}
                            height={25}
                            alt="Logo 05"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-y-[82px] translate-x-[216px]">
                      <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={bitbucket}
                            width={23}
                            height={22}
                            alt="Logo 02"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={kubernetes}
                            width={25}
                            height={25}
                            alt="Logo 07"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[216px] translate-y-[82px]">
                      <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                          <Image
                            className="relative"
                            src={Logo06}
                            width={20}
                            height={18}
                            alt="Logo 06"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={Logo02}
                            width={21}
                            height={13}
                            alt="Logo 09"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute translate-x-[292px] opacity-40">
                      <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                          <Image
                            className="relative"
                            src={Logo08}
                            width={20}
                            height={20}
                            alt="Logo 08"
                          />
                        </div>
                      </div>
                    </div>
                  </Transition>
                </TabPanel>
              </div>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}

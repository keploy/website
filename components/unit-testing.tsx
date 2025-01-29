"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles copy";
import Illustration from "@/public/images/glow-top.svg";
import "aos/dist/aos.css";
import CarouselIllustration from "@/public/images/utg-hero.png";
import Illustration1 from "@/public/images/glow-bottom.svg";
import UnitTesting from "@/public/images/pr-agent.png";
import VSCode from "@/public/images/utg-vscode.png";
import Reviews from "@/components/reviews";

export default function UnitTest() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section className="relative bg-slate-950 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none max-lg:after:hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
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
        {/* Illustration 2*/}
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

        {/* Section content */}
        <div className="max-w-xl mx-auto md:max-w-none pt-48 pb-24 flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
          {/* Content */}
          <div
            className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
            data-aos="fade-down"
          >
            {/* Content #1 */}
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-yellow-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-yellow-400/50">
              <span className="inline-flex bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                Unit Testing Agent
              </span>
            </div>
            <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-r from-orange-300/80 via-slate-200 to-slate-300/80 pb-6 md:pb-8">
              Smart Unit Tests, automatically as PRs!
            </h3>
            <p className="text-lg text-zinc-200/90 mb-10">
              No flakes, no time waste —{" "}
              <br className="hidden sm:block lg:hidden" /> just accurate unit
              tests with high-coverage.
            </p>

            <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
              <button
                className={`flex items-center text-sm font-medium rounded border w-full px-3 py-2 transition duration-150 ease-in-out
                    ${
                      tab !== 1
                        ? "text-black/60 border-theme-secondary hover:text-black/80 hover:border-black/40"
                        : "text-black/90 border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-orange-600/10 shadow-sm shadow-orange-500/10"
                    }`}
                onMouseEnter={() => {
                  setTab(1);
                }}
              >
                <svg
                  className={`shrink-0 mr-3 ${
                    tab !== 1 ? "fill-[#fafafa]" : "fill-orange-500/80"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="text-zinc-200">
                  Accurate Tests, Zero Flakiness
                </span>
              </button>

              <button
                className={`flex items-center text-sm font-medium rounded border w-full px-3 py-2 transition duration-150 ease-in-out
                    ${
                      tab !== 2
                        ? "text-black/60 border-theme-secondary hover:text-black/80 hover:border-black/40"
                        : "text-black/90 border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-orange-600/10 shadow-sm shadow-orange-500/10"
                    }`}
                onMouseEnter={() => {
                  setTab(2);
                }}
              >
                <svg
                  className={`shrink-0 mr-3 ${
                    tab !== 2 ? "fill-white" : "fill-orange-500/80"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                </svg>
                <span className="text-zinc-200">Language-Trained AI Tests</span>
              </button>

              <button
                className={`flex items-center text-sm font-medium rounded border w-full px-3 py-2 transition duration-150 ease-in-out
                    ${
                      tab !== 3
                        ? "text-black/60 border-theme-secondary hover:text-black/80 hover:border-black/40"
                        : "text-black/90 border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-orange-600/10 shadow-sm shadow-orange-500/10"
                    }`}
                onMouseEnter={() => {
                  setTab(3);
                }}
              >
                <svg
                  className={`shrink-0 mr-3 ${
                    tab !== 3 ? "fill-white" : "fill-orange-500/80"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                </svg>
                <span className="text-zinc-200">
                  Auto PRs, 100% Test Coverage
                </span>
              </button>
            </div>
            <div className="mt-10 max-md:text-center">
              <button
                className="text-sm font-medium rounded-full bg-gradient-to-r from-orange-600/90 via-orange-500 to-orange-400/90 text-white px-6 py-3 shadow-md hover:shadow-lg hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={() =>
                  (window.location.href = "vscode:extension/Keploy.keployio")
                } // Replace with actual CTA link
              >
                Install Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className="md:w-5/12 lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative py-24 -mt-12">
              {/* Particles animation */}
              <Particles
                className="absolute inset-0"
                quantity={20}
                staticity={30}
              />

              <div className="flex items-center justify-center ">
                <div className="relative flex w-48 h-48 justify-center items-center">
                  {/* Icons */}
                  <Transition
                    show={tab === 1}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 "
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                  >
                    <div className="absolute z-30">
                      <div className="relative flex items-center justify-center w-16 h-16 border border-transparent  -rotate-[10deg] before:absolute before:inset-0 ">
                        <div>
                          <Image
                            className=" mt-0 md:mb-0 max-w-md md:max-w-lg mx-auto lg:max-w-none  md:mt-60 "
                            src={VSCode}
                            width={700}
                            height={820}
                            alt="Carousel 02"
                          />
                        </div>
                        {/*<svg*/}
                        {/*  className="relative fill-slate-200"*/}
                        {/*  xmlns="http://www.w3.org/2000/svg"*/}
                        {/*  width="23"*/}
                        {/*  height="25"*/}
                        {/*>*/}
                        {/*  <Star color="#fafafa" />*/}
                        {/*</svg>*/}
                      </div>
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 3}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 "
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                  >
                    <div className="absolute z-30">
                      <div className="relative flex items-center justify-center w-16 h-16 border border-transparent  -rotate-[5deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 ">
                        <div>
                          <Image
                            className=" mt-0 md:mb-0 max-w-xs md:max-w-lg mx-auto lg:max-w-none  md:mt-60 "
                            src={UnitTesting}
                            width={650}
                            height={820}
                            alt="Carousel 02"
                          />
                        </div>
                        {/*<svg*/}
                        {/*    className="relative fill-slate-200"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*    width="22"*/}
                        {/*    height="22"*/}
                        {/*>*/}
                        {/*  <path*/}
                        {/*      d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z"/>*/}
                        {/*</svg>*/}
                      </div>
                      {/* Illustration */}
                    </div>
                  </Transition>
                  <Transition
                    show={tab === 2}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 "
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                  >
                    <div className="absolute z-30">
                      <div className="relative flex items-center justify-center w-16 h-16 border border-transparent -rotate-[10deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 ">
                        <div>
                          <Image
                            className="mt-0 md:mb-0 max-w-sm md:max-w-lg mx-auto lg:max-w-none  md:mt-60 "
                            src={CarouselIllustration}
                            width={650}
                            height={820}
                            alt="Carousel 02"
                          />
                        </div>
                        {/*<svg*/}
                        {/*    className="relative fill-slate-200"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*    width="22"*/}
                        {/*    height="22"*/}
                        {/*>*/}
                        {/*  <path*/}
                        {/*      d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z"/>*/}
                        {/*</svg>*/}
                      </div>
                      {/* Illustration */}
                    </div>
                    {/*<div className="absolute">*/}
                    {/* Halo effect */}
                    {/*<svg*/}
                    {/*    className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"*/}
                    {/*    width="480"*/}
                    {/*    height="480"*/}
                    {/*    viewBox="0 0 480 480"*/}
                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                    {/*>*/}
                    {/*  <defs>*/}
                    {/*    <radialGradient*/}
                    {/*        id="pulse-a"*/}
                    {/*        cx="50%"*/}
                    {/*        cy="50%"*/}
                    {/*        r="50%"*/}
                    {/*    >*/}
                    {/*      <stop offset="0%" stopColor="#FF6F00"/>*/}
                    {/*      {" "}*/}
                    {/*      /!* Brighter Orange *!/*/}
                    {/*      <stop offset="50%" stopColor="#FF9800"/>*/}
                    {/*      {" "}*/}
                    {/*      /!* Light Orange *!/*/}
                    {/*      <stop offset="80%" stopColor="#FFFFFF"/>*/}
                    {/*      {" "}*/}
                    {/*      /!* Pure White *!/*/}
                    {/*      <stop offset="100%" stopColor="#FF6F00"/>*/}
                    {/*      {" "}*/}
                    {/*      /!* Brighter Orange *!/*/}
                    {/*    </radialGradient>*/}
                    {/*  </defs>*/}
                    {/*  <g fillRule="evenodd">*/}
                    {/*    <path*/}
                    {/*        className="pulse"*/}
                    {/*        fill="url(#pulse-a)"*/}
                    {/*        fillRule="evenodd"*/}
                    {/*        d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"*/}
                    {/*    />*/}
                    {/*    <path*/}
                    {/*        className="pulse pulse-1"*/}
                    {/*        fill="url(#pulse-a)"*/}
                    {/*        fillRule="evenodd"*/}
                    {/*        d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"*/}
                    {/*    />*/}
                    {/*    <path*/}
                    {/*        className="pulse pulse-2"*/}
                    {/*        fill="url(#pulse-a)"*/}
                    {/*        fillRule="evenodd"*/}
                    {/*        d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"*/}
                    {/*    />*/}
                    {/*  </g>*/}
                    {/*</svg>*/}
                    {/* Grid */}
                    {/*<div*/}
                    {/*    className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">*/}
                    {/*  <div className="h-[200%] animate-endless">*/}
                    {/*    <div*/}
                    {/*        className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"/>*/}
                    {/*    <div*/}
                    {/*        className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.orange.500)_48px,_theme(colors.orange.500)_49px)]"/>*/}
                    {/*    <div*/}
                    {/*        className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"/>*/}
                    {/*    <div*/}
                    {/*        className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.orange.500)_48px,_theme(colors.orange.300)_49px)]"/>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    {/*  <div*/}
                    {/*      className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-zinc-900/30 before:rounded-2xl">*/}
                    {/*    /!*<svg*!/*/}
                    {/*    /!*    className="relative fill-slate-200"*!/*/}
                    {/*    /!*    xmlns="http://www.w3.org/2000/svg"*!/*/}
                    {/*    /!*    width="22"*!/*/}
                    {/*    /!*    height="22"*!/*/}
                    {/*    /!*>*!/*/}
                    {/*    /!*  <BicepsFlexed color="#fafafa"/>*!/*/}
                    {/*    /!*</svg>*!/*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reviews />
      </div>
    </section>
  );
}

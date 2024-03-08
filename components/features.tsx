"use client";

import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/record-tc4155904b397e0fbc1237.gif";
import TestDeduplication from "@/public/images/record-replaye538dde2a6e078f1b5a5.gif";
import NativeIntegration from "@/public/images/replay-tc31305e1d2286fe485b27.gif";
import FeaturesElement from "@/public/images/features-element.png";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import deDuplication from "@/public/images/CaptureAndReplayV2.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import CopyButton from "@/public/images/icons8-copy-96.png";
import ClipboardJS from "clipboard";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const clipboard = new ClipboardJS(copyButtonRef.current!, {
      target: () => codeRef.current!,
    });

    clipboard.on("success", (e) => {
      // You can customize the success behavior here (e.g., show a notification).
      console.log("Copied to clipboard:", e.text);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <section className="relative mb-20 ">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-neutral-100 pointer-events-none mb-16"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-secondary-300">
              Keploy for developers
            </h1>
            <p className="text-xl text-gray-600">
              simplified testing, capturing network interactions and generating
              automated tests
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6 pb-3 md:pb-10 sm:pb-3">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 text-secondary-300 mb-3">
                  Give your teams the tool they need to move faster
                </h3>
                <p className="text-xl text-gray-600">
                  Accelerate development with streamlined testing, capturing
                  network calls, automating scenarios, and seamless tool
                  integration.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0 ">
                <a
                  className={`flex items-center text-lg p-5 rounded border ease-in-out mb-3  transition duration-300 hover:shadow-lg ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg "
                      : "bg-gray-200 border-transparent shadow-lg "
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-secondary-300 ">
                      Test and Stubs Generation
                    </div>
                    <div className="text-gray-600">
                      Record and replay complex, distributed API flows as mocks
                      and stubs. It's like time machine for tests!
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-primary-300 "
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border ease-in-out mb-3 transition duration-300 hover:shadow-lg ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent shadow-lg"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-secondary-300">
                      Test Deduplication
                    </div>
                    <div className="text-gray-600">
                      Automatically detect and remove duplicate tests, ideal for
                      scenarios recorded in live-environments.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-primary-300"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border ease-in-out mb-3 transition duration-300 hover:shadow-lg ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent shadow-lg"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-secondary-300">
                      Native Integration
                    </div>
                    <div className="text-gray-600">
                      Merge Keploy tests with testing libraries(JUnit, go-test,
                      py-test, jest) for combined test coverage.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-primary-300"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex items-center justify-center">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col ">
                      {/* <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
                      <div className=" mb-14">
                        <Player
                          autoplay
                          loop
                          src={testAndStubsGen}
                          className="w-full"
                          // style={{ height: "500px", width: "500px" }}
                          keepLastFrame={true}
                        >
                          <Controls
                            visible={false}
                            buttons={["play", "repeat", "frame", "debug"]}
                          />
                        </Player>
                      </div>

                      <div
                        ref={codeRef}
                        className="absolute bottom-0 text-left overflow-hidden flex items-center animate-float w-full"
                      >
                        <div className="bg-gray-900 p-3 rounded-md flex-grow w-7/12 overflow-clip">
                          <pre className="text-green-300 text-xs md:text-sm lg:text-base w-11/12 truncate">
                            <code>
                              $ curl -O
                              https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh
                              && source keploy.sh
                            </code>
                          </pre>
                        </div>
                        <div className="absolute right-3 bottom-2">
                          <button
                            ref={copyButtonRef}
                            onClick={() =>
                              navigator.clipboard.writeText(
                                "curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh"
                              )
                            }
                            className="ml-2"
                          >
                            <Image
                              src={CopyButton}
                              alt="Copy"
                              className="w-6 h-6"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full "
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="flex flex-col justify-between">
                      {/* <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
                      {/*<Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
                      <Player
                        autoplay
                        loop
                        src={deDuplication}
                        // style={{ height: "500px", width: "500px" }}
                        keepLastFrame={true}
                      >
                        <Controls
                          visible={false}
                          buttons={["play", "repeat", "frame", "debug"]}
                        />
                      </Player>
                    </div>

                    <div
                        ref={codeRef}
                        className="absolute bottom-0 text-left overflow-hidden flex items-center animate-float w-full"
                    >
                      <div className="bg-gray-900 p-3 rounded-md flex-grow w-7/12 overflow-clip">
                          <pre className="text-green-300 text-xs md:text-sm lg:text-base w-11/12 truncate">
                            <code>
                              $ curl -O
                              https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh
                              && source keploy.sh
                            </code>
                          </pre>
                      </div>
                      <div className="absolute right-3 bottom-2">
                        <button
                            ref={copyButtonRef}
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    "curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh"
                                )
                            }
                            className="ml-2"
                        >
                          <Image
                              src={CopyButton}
                              alt="Copy"
                              className="w-6 h-6"
                          />
                        </button>
                      </div>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={NativeIntegration}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      {/*<Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
                      {/*<div className="md:max-w-none absolute w-full left-0 text-left transform animate-float" style={{ top: '100%' }}><CopyButton codeToCopy={"curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh"} /></div>*/}
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div
            className=" max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300"
        >
          <div>
            <a
                className="btn text-secondary-300 bg-primary-300 hover:font-semibold w-full mb-4 sm:w-auto sm:mb-0"
                href="https://keploy.io/docs"
            >
              Documentation{" "}
            </a>
          </div>
          <div>
            <a
                className="btn text-white bg-secondary-300 hover:font-semibold w-full sm:w-auto sm:ml-4"
                href="https://forms.gle/jGBbyRyh9H7AKXZX6"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

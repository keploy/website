'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import NativeIntegration from '@/public/images/replay-tc31305e1d2286fe485b27.gif';
import testAndStubsGen from '@/public/images/TestGenHighlighted.json';
import deDuplication from '@/public/images/CaptureAndReplayV2.json';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const LottiePlayer = dynamic(()=>import("./LottiePlayer"),{ssr:false}) 
export default function FeaturesMobileView() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative mb-20 lg:hidden">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 mb-16 pointer-events-none bg-neutral-100"
        aria-hidden="true"
      />
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-gray-200" />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 h2 text-secondary-300">
              Keploy for developers
            </h1>
            <p className="text-xl text-gray-600">
              simplified testing, capturing network interactions and generating
              automated tests
            </p>
          </div>

          {/* Section content */}
          <div className="pb-3 pt-5 md:grid md:grid-cols-12 md:gap-6 md:pb-10 sm:pb-3">
            {/* Content */}
            <div
              className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="mb-8 md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="mb-3 h3 text-secondary-300">
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
                <div
                  className={`flex items-center text-lg p-5 rounded border ease-in-out mb-3  transition duration-300 hover:shadow-lg ${
                    tab !== 1
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg '
                      : 'bg-gray-200 border-transparent shadow-lg '
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div className="flex flex-col">

                    <div className="flex items-center">

                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight text-secondary-300 ">
                      Record Replay API Flows
                    </div>
                    <div className="text-gray-600">
                      Record and replay complex, distributed API flows as mocks and stubs. It's like time machine for tests!
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg
                      className="w-3 h-3 fill-primary-300 "
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                    </div>
                    <div>
                      <Link className="btn mt-4 text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0" href="/stub-generation">Explore More</Link>
                    </div>
                  </div>

                </div>
                <Link
                  className={`flex items-center text-lg p-5 rounded border ease-in-out mb-3 transition duration-300 hover:shadow-lg ${
                    tab !== 2
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent shadow-lg'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                <div className="flex flex-col">

                  <div className="flex items-center">

                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight text-secondary-300">
                      Find Duplicate Tests
                    </div>
                    <div className="text-gray-600">
                      Find redundant tests that doesn't add to the test coverage. Automatically detect and remove duplicate tests, ideal for big-teams crowd-sourcing tests.
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
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
                    </div>
                    <div>
                      <Link className="btn mt-4 text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0" href="/test-duplication">Explore More</Link>
                    </div>
                </div>
                </Link>
                <Link
                  className={`flex items-center text-lg p-5 rounded border ease-in-out mb-3 transition duration-300 hover:shadow-lg ${
                    tab !== 3
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent shadow-lg'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                <div className="flex flex-col">
                  <div className="flex items-center">
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight text-secondary-300">
                      Works with JUnit, PyTest, Jest, Go-Test in CI/CD
                    </div>
                    <div className="text-gray-600">
                      Merge Keploy tests coverage with unit testing libraries for combined test coverage gating in CI/CD pipelines like Jenkins, Github Actions.

                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
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
                  </div>
                  <div>
                      <Link className="btn mt-4 text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0" href="/native-integration">Explore More</Link>
                  </div>
                </div>
                </Link>
              </div>
            </div>

            {/* Tabs items */}
            <div className="flex items-center justify-center max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1">
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
                      {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
                      <div className=" mb-14">
                        <LottiePlayer VideoPath={testAndStubsGen}/>
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
                      {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
                      {/*<Image className="absolute left-0 w-full transform md:max-w-none animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
                     
                      <LottiePlayer VideoPath={deDuplication}/>
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
                        className="mx-auto rounded md:max-w-none"
                        src={NativeIntegration}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      {/*<Image className="absolute left-0 w-full transform md:max-w-none animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
                      {/*<div className="absolute left-0 w-full text-left transform md:max-w-none animate-float" style={{ top: '100%' }}><CopyButton codeToCopy={"curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh"} /></div>*/}
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        >
          <div>
            <Link
              className="w-full mb-4 btn text-secondary-300 bg-primary-300 hover:font-semibold sm:w-auto sm:mb-0"
              href="https://keploy.io/docs"
            >
              Documentation{' '}
            </Link>
          </div>
          <div>
            <Link
              className="w-full text-white btn bg-secondary-300 hover:font-semibold sm:w-auto sm:ml-4"
              href="https://calendar.app.google/8Ncpff4QnAhpVnYd8"
            >
              Meet Maintainers{' '}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
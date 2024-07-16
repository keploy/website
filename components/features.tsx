"use client";

import React, {useRef} from "react";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import deDuplication from "@/public/images/CaptureAndReplayV2.json";
import Link from "next/link";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook
import { ScrollTrigger } from "gsap/all";
import _ScrollTrigger from "gsap/ScrollTrigger";
import FeaturesMobileView from "./FeatureMoblieView";
import dynamic from "next/dynamic";
const LottiePlayer = dynamic(() => import("./LottiePlayer"), { ssr: false });
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TestAndStubGenerationImage = () => {
  return (
    <div className="inline-flex flex-col w-full imageToShow " id="img-1">
      {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
      <div className=" mb-2 h-[50%]">
        <LottiePlayer VideoPath={testAndStubsGen} />
      </div>
      
    </div>
  );
};

const TestDuplicationImage = () => {
  return (
    <div className="w-full relative imageToShow" id="img-2">
      {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
      {/*<Image className="absolute left-0 w-full transform md:max-w-none animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
      <LottiePlayer VideoPath={deDuplication} className="h-[60vh]" />
    </div>
  );
};



  
  // const heightFix = () => {
  //   if (tabs.current && tabs.current.parentElement)
  //     tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  // };
  

const TextSection = ({
  svg,
  heading,
  description,
  btnDescription,
  btnLink,
}: {
  svg: any;
  heading: string;
  description: string;
  btnDescription?: string;
  btnLink?: any;
}) => {
  return (
    <div className="flex flex-col items-center pl-4 mt-6 mb-8 text-center md:block md:mb-0 h-min md:text-left md:mt-0 text-details">
      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 bg-white rounded-full ">
        {svg}
      </div>
      <div className="mb-1 text-2xl font-bold leading-snug tracking-tight md:text-4xl text-secondary-300">
        {heading}
      </div>
      <div className="text-gray-600 md:text-lg">{description}</div>
      {btnDescription && (
        <div>
          <Link
            className="btn mt-8 text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0"
            href={btnLink}
          >
            {btnDescription}
          </Link>
        </div>
      )}
    </div>
  );
};

export default function Features() {
  const container = useRef(null);

useGSAP(
  () => {
    const details: any = gsap.utils.toArray(".detail");

    const images: any = gsap.utils.toArray(".imageToShow");

    gsap.set(images[1], { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".content-container",
      start: "top top",
      end: "bottom bottom",
      pin: ".right-content",
    });

    ScrollTrigger.create({
      trigger: ".content-container",
      start: "top top",
      end: "bottom bottom",
      pin: ".heading-text",
    });

    details.forEach((detail: any) => {
      gsap.set(detail, { opacity: 1 }); 

      ScrollTrigger.create({
        trigger: detail,
        start: "top 20%", 
        end: "center center",
        onEnter: () => gsap.set(detail, { opacity: 0 }),
        onLeaveBack: () => gsap.set(detail, { opacity: 1 }),
        scrub: 1, 
      });
    });

    gsap.to(images[0], {
      scrollTrigger: {
        trigger: details[1],
        start: "center center",
        end: "center center",
        scrub: 1,
      },
      opacity: 0,
    });
    gsap.to(images[1], {
      scrollTrigger: {
        trigger: details[1],
        start: "center center",
        end: "center center",
        scrub: 1,
      },
      opacity: 1,
    });
  },
  { scope: container }
);

  return (
    <>
      <FeaturesMobileView />
      <section ref={container} className="relative hidden lg:block">
        <div className="absolute left-0 right-0 max-w-3xl pt-2 mx-auto mt-16 text-center top-6 heading-text">
          <h1 className="mb-2 text-5xl font-bold text-secondary-300">
            Keploy for Developers
          </h1>
          <p className="text-xl text-gray-600">
            smart API testing, capture network calls and generate tests with stubs
          </p>
        </div>
        <div className="relative grid max-w-6xl grid-cols-2 gap-16 pt-[30vh] pb-[50vh]  mx-auto  content-container">
          <div className="mt-20 space-y-[50vh]  ">
            <div
              className="flex items-center detail"
              data-marker-content="img-1"
            >
              <TextSection
                svg={
                  <svg
                    className="w-6 h-6 fill-primary-300 "
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                }
                heading={"Record Replay API Flows"}
                description=" Record and replay complex, distributed API flows as mocks and stubs. It's like time machine for tests!"
                btnDescription="Explore More"
                btnLink="/docs/server/sdk-installation/go"
              />
            </div>
            <div className="flex items-center detail">
              <TextSection
                svg={
                  <svg
                    className="w-6 h-6 fill-primary-300"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      fillRule="nonzero"
                    />
                  </svg>
                }
                heading={"Find Duplicate Tests"}
                description="Find redundant tests that doesn't add to the test coverage. Automatically detect and remove duplicate tests, ideal for big-teams crowd-sourcing tests."
                btnDescription="Explore More"
                btnLink="/docs/server/sdk-installation/go/"
              />
            </div>
            <div className="flex items-center detail">
              <TextSection
                svg={
                  <svg
                    className="w-6 h-6 fill-primary-300"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                      fillRule="nonzero"
                    />
                  </svg>
                }
                heading={"Works with JUnit, PyTest, Jest, Go-Test in CI/CD"}
                description="Merge Keploy tests coverage with unit testing libraries for combined test coverage gating in CI/CD pipelines like Jenkins, Github Actions."
                btnDescription="Explore More"
                btnLink="/docs/server/sdk-installation/go/"
              />
            </div>
          </div>
          <div className="flex items-center [&>*]:absolute relative  justify-center h-min [&>*]:top-0 right-content">
            <TestAndStubGenerationImage />
            <TestDuplicationImage />
          </div>
        </div>
      </section>
    </>
  );
}
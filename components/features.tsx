"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import FeaturesMobileView from "./FeatureMoblieView";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import deDuplication from "@/public/images/CaptureAndReplayV2.json";
import dynamic from "next/dynamic";
import Image from "next/image";
import f from "@/public/images/f.gif"
import d from "@/public/images/d.gif"

gsap.registerPlugin(ScrollTrigger);

// const LottiePlayer = dynamic(() => import("./LottiePlayer"), { ssr: false });

const TestAndStubGenerationImage = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="flex flex-col w-full imageToShow relative" id="img-1">
      <div className="mb-2 h-[75%]">
        {/* {isActive && <LottiePlayer VideoPath={testAndStubsGen} />} */}
        {isActive && <Image src={d} alt="fjkhkgfh"/> }
      </div>
    </div>
  );
};

const TestDuplicationImage = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="flex flex-col w-full imageToShow relative" id="img-2">
      <div className="mb-2 h-[75%]">
        {/* {isActive && <LottiePlayer VideoPath={deDuplication} />} */}
        {isActive && <Image src={f} alt="fjkhkgfh"/>}
      </div>
    </div>
  );
};

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
        <div className="mt-8">
          <Link
            className="btn  text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0"
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
  // const container = useRef<HTMLDivElement | null>(null);

  const [activeImages, setActiveImages] = useState<boolean[]>([false, false]);

  // Use Intersection Observer to detect when the container is in view
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) {
      // Container is out of view, kill all ScrollTriggers and reset state
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      setActiveImages([false, false]);
      return;
    }

    // Container is in view, set up GSAP animations
    const details = gsap.utils.toArray<HTMLElement>(".detail");
    const images = gsap.utils.toArray<HTMLElement>(".imageToShow");

    gsap.set(images, { opacity: 0, y: 50 });

    const detailImageMapping = [
      { detail: details[0], image: images[0] }, 
      { detail: details[1], image: images[1] }, 
    ];

    detailImageMapping.forEach((mapping, index) => {
      ScrollTrigger.create({
        trigger: mapping.detail,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => {
          gsap.to(mapping.image, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          setActiveImages((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        },
        onLeaveBack: () => {
          gsap.to(mapping.image, {
            opacity: 0,
            y: 50, 
            duration: 0.8,
            ease: "power2.out",
          });
          setActiveImages((prev) => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
          });
        },
        scrub: true,
      });
    });

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

    if (detailImageMapping.length > 1 && images.length > 1) {
      gsap.to(images[0], {
        scrollTrigger: {
          trigger: detailImageMapping[1].detail,
          start: "center center",
          end: "center center",
          scrub: 1,
        },
        opacity: 0,
      });
      gsap.to(images[1], {
        scrollTrigger: {
          trigger: detailImageMapping[1].detail,
          start: "center center",
          end: "center center",
          scrub: 1,
        },
        opacity: 1,
      });
    }

    // Make each detail disappear as soon as it hits the top boundary
    details.forEach((detail: HTMLElement) => {
      gsap.set(detail, { opacity: 1 });
      ScrollTrigger.create({
        trigger: detail,
        start: "top 20%", // When the detail hits the top 20% of the viewport
        end: "center center",
        onEnter: () => gsap.to(detail, { opacity: 0, duration: 0.5, ease: "power2.out" }),
        onLeaveBack: () => gsap.to(detail, { opacity: 1, duration: 0.5, ease: "power2.out" }),
        scrub: 1,
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [inView]);

  return (
    <>
      <FeaturesMobileView />
      <section className="relative hidden lg:block">
        <div className="absolute left-0 right-0 max-w-3xl pt-2 mx-auto mt-16 text-center top-6 heading-text">
          <h1 className="mb-2 text-5xl font-bold text-secondary-300">
            Keploy for Developers
          </h1>
          <p className="text-xl text-gray-600">
            smart API testing, capture network calls and generate tests with stubs
          </p>
        </div>
        <div className="relative grid max-w-6xl grid-cols-2 gap-16 pt-[30vh] pb-[50vh]  mx-auto  content-container">
          <div className="mt-20 space-y-[60vh]" ref={inViewRef}>
            <div className="flex items-center detail" data-marker-content="img-1">
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
                btnLink="https://keploy.io/docs/keploy-explained/introduction/"
              />
            </div>
            <div className="flex items-center detail" data-marker-content="img-2">
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
                btnLink="https://keploy.io/docs/keploy-cloud/deduplication/"
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
                btnLink=" https://keploy.io/docs/server/sdk-installation/go/"
              />
            </div>
          </div>
          <div className="flex flex-col items-center relative justify-center h-min right-content space-y-8 mt-[20vh]">
            <TestAndStubGenerationImage isActive={activeImages[0]} />
            <TestDuplicationImage isActive={activeImages[1]} />
          </div>
        </div>
      </section>
    </>
  );
}
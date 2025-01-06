"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import FeaturesMobileView from "./FeatureMoblieView";
import Image from "next/image";
import testAndStubsGen from "@/public/images/testAndStubsGen.webp";
import deDuplication from "@/public/images/deDuplication.webp"

gsap.registerPlugin(ScrollTrigger);

const TestAndStubGenerationImage = ({ isVisible }: { isVisible: boolean }) => (
  <div className="flex flex-col w-full imageToShow relative" id="img-1">
    <div className="mb-2 h-[75%] mt-[20vh]">
      {isVisible && <Image src={testAndStubsGen} alt="tests and stub gen gif" />}
    </div>
  </div>
);

const TestDuplicationImage = ({ isVisible }: { isVisible: boolean }) => (
  <div className="flex flex-col w-full imageToShow relative" id="img-2">
    <div className="mt-[200px]">
      {isVisible && <Image src={deDuplication} alt="dedup image gif" className="h-5/6 w-5/6" />}
    </div>
  </div>
);

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
            className="btn text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0"
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
  const [image1Visible, setImage1Visible] = useState(false);
  const [image2Visible, setImage2Visible] = useState(false);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      setImage1Visible(false);
      setImage2Visible(false);
      return;
    }
  
    const details = gsap.utils.toArray<HTMLElement>(".detail");
    const images = gsap.utils.toArray<HTMLElement>(".imageToShow");
  
    gsap.set(images, { opacity: 0, y: 50 });
  
    ScrollTrigger.create({
      trigger: details[0],
      start: "top 80%", 
      end: "bottom 25%",
      onEnter: () => {
        gsap.to(images[0], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        setImage1Visible(true);
      },
      onLeaveBack: () => {
        gsap.to(images[0], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        });
        setImage1Visible(false);
      },
      scrub: true,
    });
  
    ScrollTrigger.create({
      trigger: details[2],
      start: "top 80%",
      end: "top 100%",
      onEnter: () => {
        gsap.to(images[0], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        });
        setImage1Visible(false);
        gsap.to(images[1], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        setImage2Visible(true);
      },
      onLeave: () => {
        gsap.to(images[1], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out"
        });
        setImage2Visible(false);
        gsap.to(images[1], {  // Add this to show image1 again
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        setImage2Visible(true);
      },
      onLeaveBack: () => {
        gsap.to(images[1], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        });
        setImage2Visible(false);
        gsap.to(images[0], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        setImage1Visible(true);
      },
      scrub: true,
    });
  
    ScrollTrigger.create({
      trigger: ".content-container",
      start: "bottom bottom", 
      end: "+=200", 
      onUpdate: (self) => {
        gsap.to(".heading-text", {
          opacity: 1 - self.progress, 
          duration: 0.2,
          ease: "power2.out",
        });
      },
      scrub: true,
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
      pin: "top",
    });
  
    details.forEach((detail: HTMLElement) => {
      gsap.set(detail, { opacity: 1 });
      ScrollTrigger.create({
        trigger: detail,
        start: "top 20%",
        end: "center center",
        onEnter: () =>
          gsap.to(detail, { opacity: 0, duration: 0.5, ease: "power2.out" }),
        onLeaveBack: () =>
          gsap.to(detail, { opacity: 1, duration: 0.5, ease: "power2.out" }),
        scrub: 1,
      });
    });
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [inView]);
  
  

  return (
    <>
      <div className="max-w-3xl pt-2 mx-auto mt-16 text-center top-6 heading-text">
        <h1 className="mb-4 text-5xl font-bold text-secondary-300">
          Keploy for Developers
        </h1>
        <p className="text-xl text-gray-600">
          smart API testing, capture network calls and generate tests with stubs
        </p>
      </div>
      <FeaturesMobileView />
      <section className="relative hidden lg:block" ref={inViewRef}>
        <div className="relative grid max-w-6xl grid-cols-2 gap-16 pt-[10vh] mb-[40vh] mx-auto content-container">
          <div className="mt-20 space-y-[35vh]">
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
          <div className="flex flex-col items-center relative justify-center h-min right-content mt-[25vh]">
            <TestAndStubGenerationImage isVisible={image1Visible} />
            <TestDuplicationImage isVisible={image2Visible} />
          </div>
        </div>
      </section>
    </>
  );
}
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import FeaturesBg from '@/public/images/record-tc4155904b397e0fbc1237.gif';
import TestDeduplication from '@/public/images/record-replaye538dde2a6e078f1b5a5.gif';
import NativeIntegration from '@/public/images/replay-tc31305e1d2286fe485b27.gif';
import FeaturesElement from '@/public/images/features-element.png';
import testAndStubsGen from '@/public/images/TestGenHighlighted.json';
import deDuplication from '@/public/images/CaptureAndReplayV2.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import CopyButton from '@/public/images/icons8-copy-96.png';
import ClipboardJS from 'clipboard';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook
import { ScrollTrigger } from 'gsap/all';
import _ScrollTrigger from 'gsap/ScrollTrigger';
import FeaturesMobileView from './FeatureMoblieView';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TestAndStubGenerationImage = () => {
  return (
    <div className="inline-flex flex-col w-full imageToShow " id="img-1">
      {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
      <div className=" mb-2 h-[50%]">
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
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </div>
      <CopyCode />
    </div>
  );
};

const TestDuplicationImage = () => {
  return (
    <div className="w-full relaive imageToShow" id="img-2">
      {/* <Image className="mx-auto rounded md:max-w-none" src={FeaturesBg} width={500} height="462" alt="Features bg" /> */}
      {/*<Image className="absolute left-0 w-full transform md:max-w-none animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
      <Player
        autoplay
        loop
        src={deDuplication}
        keepLastFrame={true}
        className="h-[60vh]"
      >
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
      <CopyCode />
    </div>
  );
};

const CopyCode = () => {
  const codeRef = useRef<HTMLDivElement>(null);

  const copyButtonRef = useRef<HTMLButtonElement>(null);
  // const heightFix = () => {
  //   if (tabs.current && tabs.current.parentElement)
  //     tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  // };
  useEffect(() => {
    // heightFix();

    const clipboard = new ClipboardJS(copyButtonRef.current!, {
      target: () => codeRef.current!,
    });

    clipboard.on('success', (e) => {
      // You can customize the success behavior here (e.g., show a notification).
      console.log('Copied to clipboard:', e.text);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={codeRef}
        className="bottom-0 flex items-center w-full mb-8 overflow-hidden text-left md:mb-0 animate-float"
      >
        <div className="flex-grow w-7/12 p-3 bg-gray-900 rounded-md overflow-clip">
          <pre className="w-11/12 text-xs text-green-300 truncate md:text-sm lg:text-base">
            <code>
              $ curl -O
              https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh &&
              source keploy.sh
            </code>
          </pre>
        </div>
        <div className="absolute right-3 bottom-2">
          <button
            ref={copyButtonRef}
            onClick={() =>
              navigator.clipboard.writeText(
                'curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh'
              )
            }
            className="ml-2"
          >
            <Image src={CopyButton} alt="Copy" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

const TextSection = ({
  svg,
  heading,
  description,
}: {
  svg: any;
  heading: string;
  description: string;
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
    </div>
  );
};

export default function Features() {
  const container = useRef(null);

  useGSAP(
    () => {
      const details = gsap.utils.toArray('.detail');

      const images: any = gsap.utils.toArray('.imageToShow');

      ScrollTrigger.create({
        trigger: '.content-container',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.right-content',
      });

      ScrollTrigger.create({
        trigger: '.content-container',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.heading-text',
      });

      details.forEach((detail: any, index) => {
        gsap.to(detail, {
          scrollTrigger: {
            trigger: detail,
            start: 'top-=400 middle',
            end: 'middle middle',
            scrub: 1,
          },
          opacity: 0,
        });

        ScrollTrigger.create({
          trigger: detail,
          start: 'top-=600 middle',
          end: 'middle -20%',
          onUpdate: () => [
            images.forEach((image: any, i: number) => {
              if (i === index) {
                gsap.to(image, {
                  opacity: 1,
                });
              } else {
                gsap.to(image, {
                  opacity: 0,
                });
              }
            }),
          ],
        });
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
            Keploy for developers
          </h1>
          <p className="text-xl text-gray-600">
            simplified testing, capturing network interactions and generating
            automated tests
          </p>
        </div>
        <div className="relative grid max-w-6xl grid-cols-2 gap-16 pt-[30vh] pb-[50vh]  mx-auto  content-container">
          <div className=" space-y-[50vh]  ">
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
                heading={' Test and Stubs Generation'}
                description=" Record and replay complex, distributed API flows as mocks and stubs. It's like time machine for tests!"
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
                heading={'Test Deduplication'}
                description="Automatically detect and remove duplicate tests, ideal for scenarios recorded in live-environments."
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
                heading={'Native Integration'}
                description="Merge Keploy tests with testing libraries(JUnit, go-test, py-test, jest) for combined test coverage."
              />
            </div>
          </div>
          <div className="flex items-center [&>*]:absolute relative  justify-center h-min [&>*]:top-0 right-content">
            <TestAndStubGenerationImage />
            <TestDuplicationImage />
            <div className="bottom-0 inline-flex flex-col imageToShow">
              <Image
                className="w-full h-auto mx-auto rounded md:max-w-none"
                src={NativeIntegration}
                width={400}
                height="462"
                alt="Features bg"
              />
              {/*<Image className="absolute left-0 w-full transform md:max-w-none animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />*/}
              {/*<div className="absolute left-0 w-full text-left transform md:max-w-none animate-float" style={{ top: '100%' }}><CopyButton codeToCopy={"curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh"} /></div>*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

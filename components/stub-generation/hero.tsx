import VideoThumb from '@/public/images/demo-thumbnail.png';
import ModalVideo from '@/components/modal-video';
import Image from "next/image";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import { TrustedBy } from '../trustedBy';
export default function Hero() {
  return (
    <section className="relative bg-neutral-100 text-gray-800 overflow-hidden">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none " aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#f5f5f5" offset="50%" />
              <stop stopColor="#EAEAEA" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" opacity={0.85} />
            <circle cx="155" cy="443" r="64" opacity={0.85} />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-5 md:pt-40">
          <div >
            <p className="text-2xl text-center  text-accent-200 mb-4 md:mb-20">
              Transforming User Scenarios into Reliable Test Data Instantly!
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-start md:gap-8 md:flex-row ">
          <div className="md:flex-1">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5.5xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-4 md:mb-6 ">
                  Effortless Stub Generation
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200"> for Comprehensive Test Coverage!</span>
                </h1>
                
                <p className="text-xl text-accent-200 mb-8">
                  Seamlessly Convert User Interactions into Precise Test Cases and Data Stubs 🚀
                </p>
              </div>
            </div>
          <div className="md:flex-1 ">
              <Player
                autoplay
                loop
                src={testAndStubsGen}
                className="w-full"
                // style={{ height: "500px", width: "370px" }}
                keepLastFrame={true}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
         

          </div>
        </div>
      </div>
      <TrustedBy />
    </section>
  );
}


/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import VideoThumb from '@/public/images/demo-thumbnail.webp';
import ModalVideo from '@/components/modal-video';
import Image from "next/image";
import TestimonialImage from "@/public/images/users/Nutanix_Logo.svg";
import React, { useEffect, useState } from "react";
import CopyButton from './utils/copyButton';
import { TrustedBy } from './trustedBy';
import Link from 'next/link';
import APItext from "@/public/images/apiText.png";
import Banner from './ui/banner';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; 

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on component mount and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1038); // Adjust this breakpoint as needed
    };
    
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1 " aria-hidden="true">
      <div className='mb-24'>
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
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 gap-16">

          {/* Section header */}
          <div className=" text-center pb-12 md:pb-16">

            {/* <div className='flex flex-row text-xs md:text-sm lg:text-sm bg-inherit justify-center  items-center my-4 gap-2 mb-5' data-aos="zoom-y-out" data-aos-delay="150">
              <div className='z-40 shadow-[4px_10px_15px_rgba(0,0,0,0.25)] rounded-full bg-neutral-100  '>
              <span className=" text-secondary-300 mx-1 pl-2">
              Automate
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200 mr-1">
              your integration tests now!
              </span>
              <button className='bg-[#fcaf7f] rounded-full ml-2 p-2'>
                  <p>   <span className=" text-secondary-300 mx-1">
                  Join</span> 
                  <Link
                      href="https://forms.gle/waYcLSASm9dfE9tC9"
                    >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200 mr-1">
                   Cloud Waitlist
                   </span>
                    </Link>
                   </p>
              </button>
              </div>
            </div> */}

            <p className="text-xl sm:text-2xl text-accent-200 mb-4 leading-snug sm:leading-normal my-4"
               data-aos="zoom-y-out" data-aos-delay="150">
              2 minutes to 90% test coverage!
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary-300 font-extrabold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5"
              data-aos="zoom-y-out"
            >
              AI Generated Tests
              <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200">
                that actually work!
              </span>
            </h1>

            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg sm:text-xl text-center text-accent-200 mb-8 leading-snug sm:leading-normal lg:text-center"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                <b>Open Source</b> Platform for converting API calls to Test Cases with Data Mocks
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center  md:space-x-4 lg:space-x-4 " data-aos="zoom-y-out"
                   data-aos-delay="300">
        <div className="mb-4">
                  {/* Wrapping Link with NeonButton */}
                  <Link
                  className="btn text-secondary-300  bg-primary-300 hover:text-gradient-500 w-full sm:w-auto sm:mb-0 group flex items-center justify-center gap-2"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdj9q7dyRh3D7ZzRExHLWRRkNPOnLnFfrbKqSwqH3Ur4HzP4g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Cloud Waiting List 
                  <OpenInNewIcon className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 h-5 w-5" />
                  </Link>
                </div>
                <div className='mb-4'>
                  {/* Wrapping Link with NeonButton */}
                    <Link
                      className="btn text-white bg-green-900 hover:text-emerald-200 w-full  sm:mb-0"
                      href="https://github.com/Keploy/keploy"
                    >
                      Explore Open Source Now 
                    </Link>
                </div>
              </div>
            </div>
          </div>
{/* <Banner /> */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Keploy Demo video"
            video="https://www.youtube.com/embed/gvWvpqWM48s"
            videoWidth={768}
            videoHeight={432}
          />
        </div>

      </div>
      <TrustedBy />
    </section>
  );
}

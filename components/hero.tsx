import VideoThumb from '@/public/images/demo-thumbnail.png'
import ModalVideo from '@/components/modal-video'
import Image from "next/image";
import TestimonialImage from "@/public/images/users/Nutanix_Logo.svg";
import React from "react";
import CopyButton from './utils/copyButton';
import { TrustedBy } from './trustedBy';
import Link from 'next/link';
import APItext from "@/public/images/apiText.png"
export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1 " aria-hidden="true">
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

        {/* Hero content */}
        <div className="pt-0 pb-12 md:pt-8 md:pb-20 gap-16">

          {/* Section header */}
          <div className=" text-center pb-12 md:pb-16">
            <p className="text-2xl text-accent-200 mb-4 dark:text-sky-500 " data-aos="zoom-y-out" data-aos-delay="150">
              5 minutes to 90% test coverage!
            </p>
            <h1
              className="lg:text-6xl text-5xl text-secondary-300 dark:text-sky-500 font-extrabold leading-tighter tracking-tighter mb-4 md:mt-16 lg:mt-24"
              data-aos="zoom-y-out"
            >
              {" "}
              {"AI Generated "}
              <span
                className="absolute hidden md:inline font-pencil font-light pt-2 text-green-900  dark:text-green-500"
                style={{
                  top: "0.8em",
                  transform: "rotate(-10deg)",
                }}
              >
                ^
                <span
                  className="absolute lg:bottom-44 bottom-28 -left-2 hidden md:inline font-pencil font-light text-3xl lg:text-5xl text-green-900 dark:text-green-500"
                  style={{
                    transform: "rotate(-5deg)",
                  }}
                >
                  API
                </span>
              </span> 
              Tests
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-orange-500">
                that actually work!
              </span>


            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl lg:text-center text-center text-accent-200 mb-8 dark:text-orange-300" data-aos="zoom-y-out" data-aos-delay="150">
                <b>Open Source</b> Platform for converting API calls to Test Cases with Data Mocks
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link className="btn text-secondary-300 bg-primary-300 hover:text-gradient-500 w-full mb-4 sm:w-auto sm:mb-0" href="https://www.github.com/keploy/keploy">Try Open Source</Link>
                </div>
                <div>
                  <Link className="btn text-white bg-green-900 dark:bg-green-500 dark:hover:text-green-200 hover:text-emerald-200 w-full sm:w-auto sm:ml-4" href="https://forms.gle/waYcLSASm9dfE9tC9">Join Cloud Waitlist </Link>
                </div>
              </div>
              {/* <div className="code">
                <pre>
                  <code>
                  <CopyButton codeToCopy={"Hello World!!"} />
                  </code>
                </pre>
              </div> */}
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Keploy Demo video"
            video="https://www.youtube.com/embed/gvWvpqWM48s"
            videoWidth={768}
            videoHeight={432} />
        </div>

      </div>
      <TrustedBy/>
      {/*Trusted by users section*/}

    </section>
  )
}

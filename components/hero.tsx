import VideoThumb from '@/public/images/demo-thumbnail.png'
import ModalVideo from '@/components/modal-video'
import Image from "next/image";
import TestimonialImage from "@/public/images/users/Nutanix_Logo.svg";
import React from "react";
import CopyButton from './utils/copyButton';
import { TrustedBy } from './trustedBy';
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
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 gap-16">

          {/* Section header */}
          <div className=" text-center pb-12 md:pb-16">
            <p className="text-2xl text-accent-200 mb-4 " data-aos="zoom-y-out" data-aos-delay="150">
              2 minutes to 90% test coverage!
            </p>
            <h1 className="lg:text-6xl text-5xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-4 " data-aos="zoom-y-out">AI Generated Tests <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200">that actually work!</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl lg:text-left text-center text-accent-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Open source Tool for converting user-traffic to Test Cases and Data Stubs
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0" href="https://calendar.app.google/8Ncpff4QnAhpVnYd8">Book Cloud Demo</a>
                </div>
                <div>
                  <a className="btn text-white bg-secondary-300 hover:text-primary-300 w-full sm:w-auto sm:ml-4" href="https://www.github.com/keploy/keploy">Try Locally</a>
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
            video="https://www.youtube.com/embed/23yQaY81Zho"
            videoWidth={768}
            videoHeight={432} />
        </div>

      </div>
      <TrustedBy/>
      {/*Trusted by users section*/}

    </section>
  )
}

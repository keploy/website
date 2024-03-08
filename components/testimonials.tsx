"use client";
import Image from "next/image";
import MarutiLogo from "@/public/images/users/Logo_for_Maruti_Suzuki.svg";
import NutanixLogo from "@/public/images/users/Nutanix_Logo.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const testimonialData = [
  {
    image1: MarutiLogo,
    content1:
      "Our recent collaboration with Keploy was truly remarkable. Keploy team provided exceptional support and remained highly proactive throughout the entire experience. Keploy platform has added business value to Maruti Suzuki.",
    author1: "Executive Member",
    company1: "@Maruti Suzuki",
  },
  {
    image1: NutanixLogo,
    content1: "Makes it easy to unit test my complex systems with realistic test data.",
    author1: "Staff Engineer",
    company1: "@Nutanix",
  },
  // Add more testimonials as needed
];

//Mobile view array

const testimonialDataMobile = [
  {
    image: MarutiLogo,
    content:
      "Our recent collaboration with Keploy was truly remarkable. Keploy team provided exceptional support and remained highly proactive throughout the entire experience. Keploy platform has added business value to Maruti Suzuki.",
    author: "Executive Member",
    company: "@Maruti Suzuki",
  },
  {
    image: NutanixLogo,
    content:
      "Makes it easy to unit test my complex systems with realistic test data.",
    author: "Staff Engineer",
    company: "@Nutanix",
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative bg-gradient-to-tr from-secondary-400 to-secondary-100 ">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32 "
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#DFDFDF" offset="0%" />
              <stop stopColor="#00163d" offset="77.402%" />
              <stop stopColor="#00061A" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 0)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
          </g>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-03)"
            fillRule="evenodd"
          >
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl" data-aos="zoom-y-out">
            <Carousel
              showThumbs={false}
              showStatus={false}
              selectedItem={index}
              onChange={(newIndex) => setIndex(newIndex)}
              autoPlay={true}
              interval={2000}
              infiniteLoop={true}
            >
              {testimonialDataMobile.map((testimonial, index) => (
                <div className="flex  min-h-full" key={index}>
                  <div className="relative min-h-full flex flex-1 items-center border-2 border-gray-200 border-opacity-25 bg-gradient-to-bl from-neutral-300 to-neutral-200 rounded-lg transition duration-300 hover:shadow-xl">
                    <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                      {/* (testimonial content) */}
                      <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                        <Image
                          className="relative mt-16 max-h-6"
                          src={testimonial.image}
                          width={96}
                          height={96}
                          alt="Testimonial image"
                        />
                      </div>
                      <blockquote className="text-xl font-medium mb-4 text-accent-200 italic">
                        {testimonial.content}
                      </blockquote>
                      <cite className="block font-bold text-lg not-italic mb-1 text-primary-300">
                        {testimonial.author}
                      </cite>
                      <div className="text-gray-600 text-seconday-300">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/*<div className="max-w-6xl mx-auto px-4 sm:px-6">*/}
      {/*  <div className="py-12 md:py-20">*/}

      {/*    /!* Testimonials *!/*/}
      {/*    <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">*/}
      {/*      <div className="relative flex items-start border-2 border-gray-200 border-opacity-25 rounded bg-gradient-to-bl from-neutral-300 to-neutral-200 rounded-lg transition duration-300 hover:shadow-xl">*/}

      {/*        /!* Testimonial *!/*/}
      {/*        <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">*/}
      {/*          <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2 ">*/}
      {/*            <svg className="absolute top-0 right-0 -mr-12 w-16 h-16 fill-current text-primary-300" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">*/}
      {/*              <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />*/}
      {/*            </svg>*/}
      {/*            <Image className="relative " src={TestimonialImage} width={196} height={196} alt="Maruti Suzuki Testimonial" />*/}
      {/*          </div>*/}
      {/*          <blockquote className="text-xl font-medium mb-4 text-accent-200 italic">*/}
      {/*            “ Our recent collaboration with Keploy was truly remarkable. <br/> Keploy team provided exceptional support and remained highly proactive throughout the entire experience.*/}
      {/*              <br/> Keploy platform has added business value to Maruti Suzuki “*/}
      {/*          </blockquote>*/}
      {/*          <cite className="block font-bold text-lg not-italic mb-1 text-primary-300">Executive Member</cite>*/}
      {/*          <div className="text-gray-600 text-seconday-300">@Maruti Suzuki</div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
}

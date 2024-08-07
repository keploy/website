import Image from "next/image";
import PixisTestimonial from "@/public/images/users/pixis.png";
import InstaAstroTestimonial from "@/public/images/users/InstaAstro-Logo.svg";
import AmazonLogo from "@/public/images/users/Amazon-Logo.png";
import RelianceTestimonial from "@/public/images/users/reliance-retail-logo.png";
import WhatfixTestimonial from "@/public/images/users/Whatfix_Logo_RGB_Color.png";
import MarutiSuzukiLogo from "@/public/images/users/Logo_for_Maruti_Suzuki.svg";
import NutanixLogo from "@/public/images/users/Nutanix_Logo.svg";
import LambdaTestTestimonial from "@/public/images/users/LambdaTest-320-180.png";
import LeadsquareTestimonial from "@/public/images/users/leadsquare.png";
import EdurekaTestimonial from "@/public/images/users/edureka_logo.png";

export const TrustedBy =() =>{
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="py-12 md:py-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center ">
          <div className="h5 text-gray-500">Trusted by</div>
        </div>

        <div className="relative inline-flex flex-nowrap no-scrollbar ">
          <div className="py-4 md:py-12 animate-marquee whitespace-nowrap flex items-center w-max">
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w- md:w-40"
                src={PixisTestimonial}
                alt="Pixis Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={InstaAstroTestimonial}
                alt="Instaastro Testimonial"
              />
            </span>
            <span className="mx-2 flex-none">
              <Image
                className="relative w-32  md:pt-2 md:w-40"
                src={AmazonLogo}
                alt="Amazon"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:pb-3  md:w-40"
                src={RelianceTestimonial}
                alt="Reliance Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={WhatfixTestimonial}
                alt="Whatfix Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={MarutiSuzukiLogo}
                alt="Pixis Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={NutanixLogo}
                alt="Pixis Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={LambdaTestTestimonial}
                alt="Lambdatest Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={LeadsquareTestimonial}
                alt="Leadsquare Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={EdurekaTestimonial}
                alt="Edureka Testimonial"
              />
            </span>
          </div>
          <div
            className="py-4 md:py-12 animate-marquee whitespace-nowrap flex items-center w-max"
            aria-hidden="true"
          >
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w- md:w-40"
                src={PixisTestimonial}
                alt="Pixis Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={InstaAstroTestimonial}
                alt="Instaastro Testimonial"
              />
            </span>
            <span className="mx-2 flex-none">
              <Image
                className="relative w-32  md:pt-2 md:w-40"
                src={AmazonLogo}
                alt="Amazon"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:pb-3  md:w-40"
                src={RelianceTestimonial}
                alt="Reliance Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={WhatfixTestimonial}
                alt="Whatfix Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={MarutiSuzukiLogo}
                alt="Pixis Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={NutanixLogo}
                alt="Pixis Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={LambdaTestTestimonial}
                alt="Lambdatest Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={LeadsquareTestimonial}
                alt="Leadsquare Testimonial"
              />
            </span>
            <span className="mx-4 flex-none">
              <Image
                className="relative w-32 md:w-40"
                src={EdurekaTestimonial}
                alt="Edureka Testimonial"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
 )
}

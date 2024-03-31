import VideoThumb from '@/public/images/demo-thumbnail.png';
import ModalVideo from '@/components/modal-video';
import Image from "next/image";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";

export default function Hero() {
  return (
    <section className="relative bg-neutral-100  text-gray-800 overflow-hidden">
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
                <h1 className="text-4xl md:text-5.5xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-4 md:mb-24 ">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-10">

          <div className="max-w-3xl mx-auto text-center ">
            <div className="h5 text-gray-500">Trusted by</div>
          </div>

          <div className="relative flex overflow-x-auto no-scrollbar ">
            <div className="py-4 md:py-10 animate-marquee2 whitespace-nowrap flex items-center">
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w- md:w-40" src="/images/users/pixis.png" alt="Pixis Testimonial" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w-40" src="/images/users/InstaAstro-Logo.svg" alt="Instaastro Testimonial" />
              </span>
              <span className="mx-2 flex-none">
                <img className="relative w-32  md:pt-2 md:w-40" src="/images/users/Amazon-Logo.png" alt="Amazon" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:pb-3  md:w-40" src="/images/users/reliance-retail-logo.png" alt="Reliance Testimonial" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w-40" src="/images/users/Whatfix_Logo_RGB_Color.png" alt="Whatfix Testimonial" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w-40" src="/images/users/Logo_for_Maruti_Suzuki.svg" alt="Pixis Testimonial" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w-40" src="/images/users/Nutanix_Logo.svg" alt="Pixis Testimonial" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w-40" src="/images/users/LambdaTest-320-180.png" alt="Lambdatest Testimonial" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w-40" src="/images/users/leadsquare.png" alt="Leadsquare Testimonial" />
              </span>
              <span className="mx-4 flex-none">
                <img className="relative w-32 md:w-40" src="/images/users/edureka_logo.png" alt="Edureka Testimonial" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


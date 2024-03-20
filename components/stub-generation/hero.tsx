import VideoThumb from '@/public/images/demo-thumbnail.png';
import ModalVideo from '@/components/modal-video';
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-neutral-100  text-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div >
            <p className="text-2xl text-center  text-accent-200 mb-20">
              Transforming User Scenarios into Reliable Test Data Instantly!
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 ">
            <div className="md:flex-1">
              <div className="text-left">
                <h1 className="text-5xl lg:text-6xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-24">
                  Effortless Stub Generation
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-200"> for Comprehensive Test Coverage!</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Seamlessly Convert User Interactions into Precise Test Cases and Data Stubs 🚀
                </p>
              </div>
            </div>

            <div className="md:flex-1 flex justify-center">
              <Image
                src={VideoThumb}
                width={768}
                height={432}
                alt="Keploy Demo video"
                className="shadow-lg"
              />
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
            <div className="py-4 md:py-12 animate-marquee2 whitespace-nowrap flex items-center">
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


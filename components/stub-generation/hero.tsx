import VideoThumb from '@/public/images/demo-thumbnail.png';
import ModalVideo from '@/components/modal-video';
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-800"> {/* Assuming bg-white and text-gray-800 are your color theme classes */}
      
      {/* Background illustration omitted for brevity */}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Central headline */}
          <p className="text-2xl text-center text-accent-200 mb-20">
            Transforming User Scenarios into Reliable Test Data Instantly!
          </p>

          {/* Main content */}
          <div className="flex flex-wrap justify-center items-center gap-16 ">

            {/* Content on the left */}
            <div className="md:flex-1">
              {/* Section header */}
              <div className="text-left">
                <h1 className="lg:text-5.5xl text-5xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-12">
                  Effortless Stub Generation
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-200"> for Comprehensive Test Coverage!</span>
                </h1>
                <p className="text-xl text-accent-200 mb-8">
                  Seamlessly Convert User Interactions into Precise Test Cases and Data Stubs!
                </p>
                {/* <div className="flex justify-start gap-4">
                  <a className="btn text-secondary-300 bg-orange-300 hover:bg-orange-400" href="https://forms.gle/jGBbyRyh9H7AKXZX6">Join Waitlist</a>
                  <a className="btn text-white bg-orange-500 hover:bg-orange-600" href="https://www.github.com/keploy/keploy">Try Locally</a>
                </div> */}
              </div>
            </div>

            {/* Image on the right */}
            <div className="md:flex-1 flex justify-center">
              <Image
                src={VideoThumb}
                width={768}
                height={432}
                alt="Keploy Demo video"
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* Trusted by users section omitted for brevity */}

    </section>
  );
}

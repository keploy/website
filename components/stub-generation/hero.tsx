import VideoThumb from '@/public/images/demo-thumbnail.png';
import ModalVideo from '@/components/modal-video';
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-800 overflow-hidden"> {/* Added overflow-hidden for background illustration */}

      {/* Background illustration here (assuming you add this in your full code) */}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24"> {/* Adjusted padding to prevent overlap */}

          {/* Central headline */}
          <div className="shadow-md"> {/* Added shadow for text separation */}
            <p className="text-3xl text-center  text-accent-200 mb-20">
              Transforming User Scenarios into Reliable Test Data Instantly!
            </p>
          </div>

          {/* Main content */}
          <div className="flex flex-wrap justify-center items-center gap-16 ">

            {/* Content on the left */}
            <div className="md:flex-1">
              {/* Section header */}
              <div className="text-left">
                <h1 className="text-5xl lg:text-6xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-12">
                  Effortless Stub Generation
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-200"> for Comprehensive Test Coverage!</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Seamlessly Convert User Interactions into Precise Test Cases and Data Stubs!
                </p>
                {/* <div className="flex justify-start gap-4">
                  <a className="btn bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" href="https://forms.gle/jGBbyRyh9H7AKXZX6">Join Waitlist</a>
                  <a className="btn bg-gray-800 text-white hover:bg-black hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" href="https://www.github.com/keploy/keploy">Try Locally</a>
                </div> */}
              </div>
            </div>

            {/* Image on the right */}
            <div className="md:flex-1 flex justify-center">
              {/* Assuming Image is a Next.js component */}
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
      
      {/* ... rest of your section ... */}

    </section>
  );
}


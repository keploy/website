"use client";

import Image, { StaticImageData } from "next/image";

export default function Banner(props: {
  title: string;
  subtitle: string;
  paraText: string;
  btnTextLeft: string;
  btnTextRight: string;
  bannerImage: StaticImageData;
}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-secondary-300  rounded-lg  py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-primary-300 mb-3"> {props.title} </h3>
                {props.subtitle && (
                  <h4 className="h4 text-white mb-3 ">{props.subtitle}</h4>
                )}
                {props.paraText && (
                  <p className="text-neutral-300 text-lg mb-6">
                    {props.paraText}
                  </p>
                )}
                <div
                  className="flex flex-col lg:flex-row items-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="btn text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0"
                      href="https://calendar.app.google/8Ncpff4QnAhpVnYd8"
                    >
                      {props.btnTextLeft}
                    </a>
                  </div>
                  <div>
                    <a
                      className="btn text-white bg-secondary-300 hover:text-primary-300 w-full border-white sm:w-auto sm:ml-4 sm:mt-4 lg:mt-0"
                      href="https://www.github.com/keploy/keploy"
                    >
                      {props.btnTextRight}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 hidden lg:block ">
              <Image src={props.bannerImage} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

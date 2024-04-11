import React from "react";
import { TrustedBy } from "../trustedBy";
import dynamic from "next/dynamic";
interface HeroProps {
  titleTop: string;
  titleBottom: string;
  subtitleTop: string;
  subtitleBottom: string;
  animationSrc?: object | string; // Can be either a Lottie animation object or a string URL
  showTrustedBy?: boolean; // Optional prop, defaulting to true
}

const LottiePlayer = dynamic(() => import("../LottiePlayer"), { ssr: false });
const Hero: React.FC<HeroProps> = ({
  titleTop,
  titleBottom,
  subtitleTop,
  subtitleBottom,
  animationSrc,
  showTrustedBy = true,
}) => {
  return (
    <section className="relative bg-neutral-100 text-gray-800 overflow-hidden">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none "
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
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
        <div className="pt-32 pb-5 md:pt-40">
          <div>
            <p className="text-2xl text-center  text-accent-200 mb-4 md:mb-20">
              {subtitleTop}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-start md:gap-8 md:flex-row ">
            <div className="md:flex-1">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5.5xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-4 md:mb-6 ">
                  {titleTop}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200">
                    {titleBottom}
                  </span>
                </h1>

                <p className="text-xl text-accent-200 mb-8">{subtitleBottom}</p>
              </div>
            </div>
            {animationSrc && (
              <div className="md:flex-1 ">
                <LottiePlayer VideoPath={animationSrc} />
              </div>
            )}
          </div>
        </div>
      </div>
      {showTrustedBy && <TrustedBy />}
    </section>
  );
};

export default Hero;

"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Testimonial = ({
  content,
  author,
  company,
  image,
}: {
  content: string;
  author: string;
  company: string;
  image: any;
}) => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".quote-character", {
        scrollTrigger: {
          trigger: ".quote-container",
          scrub: 1,
          start: "top bottom",
          end: "bottom+=100 bottom",
        },
        opacity: 1,
        stagger: 1,
        duration: 3,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="max-w-6xl px-4 mx-auto my-16">
      <p className="text-lg md:text-2xl quote-container">
        <span className="quote-character opacity-[0.2]">"</span>
        {content.split("").map((character, index) => {
          if (character) {
            return (
              <span key={index} className="quote-character opacity-[0.2]">
                {character}
              </span>
            );
          }
        })}

        <span className="quote-character opacity-[0.2]">"</span>
      </p>
      <div className="relative flex items-center gap-4 px-4 py-4 mt-8 text-sm rounded-lg md:text-xl ">
        <Image src={image} alt="logo" className="w-auto h-4" />
        <p className="font-bold">
          {author} <span className="text-lg md:text-2xl">/</span> {company}
        </p>

        <div className="absolute top-0 bottom-0 left-0 w-1/2 rounded-md bg-gradient-to-r from-primary-200 -z-1"></div>
      </div>
    </div>
  );
};
export { Testimonial };

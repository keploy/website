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
          start: "top+=200 bottom",
          end: "bottom+=300 bottom",
        },
        opacity: 1,
        stagger: 1,
        duration: 3,
      });
      gsap.to(".gradient-container", {
        scrollTrigger: {
          trigger: ".gradient-container",
          scrub: 1,
          start: "bottom+=20 bottom",
          end: "bottom+=300 bottom",
        },
        width: "100%",
        duration: 4,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="max-w-6xl px-4 mt-56 lg:mt-32 md:mt-40   mx-auto my-16">
      <p className="text-lg md:text-2xl quote-container text-secondary-300">
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
        <p className="font-bold text-accent-200">
          {author} <span className="text-lg md:text-2xl">/</span> {company}
        </p>

        <div className="absolute top-0 bottom-0 left-0 w-0 rounded-md bg-gradient-to-r from-primary-200 -z-1 gradient-container"></div>
      </div>
    </div>
  );
};
export { Testimonial };

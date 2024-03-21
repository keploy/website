"use client";
import Image from "next/image";
import MarutiLogo from "@/public/images/users/Logo_for_Maruti_Suzuki.svg";
import NutanixLogo from "@/public/images/users/Nutanix_Logo.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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
    content1:
      "Makes it easy to unit test my complex systems with realistic test data.",
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
          markers: true,
        },
        opacity: 1,
        stagger: 1,
        duration: 3,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="px-4">
      <p className="text-lg text-white md:text-2xl quote-container">
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
      <div className="flex items-center gap-4 px-4 py-4 mt-8 text-sm text-white rounded-lg md:text-xl bg-gradient-to-r from-secondary-500">
        <Image src={image} alt="logo" className="w-auto h-4" />
        <p className="font-bold">
          {author} <span className="text-lg md:text-2xl">/</span> {company}
        </p>
      </div>
    </div>
  );
};
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative py-24 bg-gradient-to-tr from-secondary-400 to-secondary-100">
      <div className="flex flex-col max-w-6xl gap-16 mx-auto">
        {testimonialDataMobile.map((testimonial, index) => (
          <Testimonial
            key={index}
            content={testimonial.content}
            author={testimonial.author}
            company={testimonial.company}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
}

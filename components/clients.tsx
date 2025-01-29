import Marquee from "react-fast-marquee";
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

const images = [
  { src: RelianceTestimonial, alt: "Reliance Testimonial" },
  { src: PixisTestimonial, alt: "Pixis Testimonial" },
  { src: InstaAstroTestimonial, alt: "InstaAstro Testimonial" },
  { src: AmazonLogo, alt: "Amazon" },
  { src: WhatfixTestimonial, alt: "Whatfix Testimonial" },
  { src: MarutiSuzukiLogo, alt: "Maruti Suzuki Logo" },
  { src: NutanixLogo, alt: "Nutanix Logo" },
  { src: LambdaTestTestimonial, alt: "LambdaTest Testimonial" },
  { src: LeadsquareTestimonial, alt: "Leadsquare Testimonial" },
  { src: EdurekaTestimonial, alt: "Edureka Testimonial" },
];

export default function Client() {
  return (
    <div className="mx-auto max-w-[1150px] px-4 sm:px-6 mt-10 mb-20">
      {/*className="border-b py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">*/}

      <Marquee gradientColor="#F5F5F5" gradientWidth={200} gradient={true}>
        {images.map(({ src, alt }) => (
          <span
            key={alt}
            className="mx-4 flex-none flex items-center justify-center"
          >
            <Image
              className="relative w-32 md:w-40 h-auto mx-1 opacity-85" // Ensure consistent height
              src={src}
              alt={alt}
              style={{ objectFit: "contain" }} // Maintain aspect ratio
            />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

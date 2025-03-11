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
import G2Reviews from "@/public/images/users/g2review.svg";
import Google_For_Startups from "@/public/images/users/GoogleStartupsSvgs.svg";
import CNCF from "@/public/images/users/cncfSvg.svg";
import GSOC from "@/public/images/users/gsocSvg.svg";
import Marquee from "@/components/magicui/marquee";

const images = [
  { src: PixisTestimonial, alt: "Pixis Testimonial" },
  { src: InstaAstroTestimonial, alt: "InstaAstro Testimonial" },
  { src: AmazonLogo, alt: "Amazon" },
  { src: RelianceTestimonial, alt: "Reliance Testimonial" },
  { src: WhatfixTestimonial, alt: "Whatfix Testimonial" },
  { src: MarutiSuzukiLogo, alt: "Maruti Suzuki Logo" },
  { src: NutanixLogo, alt: "Nutanix Logo" },
  { src: LambdaTestTestimonial, alt: "LambdaTest Testimonial" },
  { src: LeadsquareTestimonial, alt: "Leadsquare Testimonial" },
  { src: EdurekaTestimonial, alt: "Edureka Testimonial" },
];

const images_2 = [
  {src:G2Reviews,alt:"G2 Reviews"},
  {src:GSOC,alt:"Google Summer of Code"},
  {src:Google_For_Startups,alt:"Google for Startups"},
  {src:CNCF,alt:"Cloud Native Computing Foundation"},
]
export const TrustedBy = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="h5 text-gray-500">Trusted by</div>
        </div>

        {/* Marquee Component */}
        <Marquee className="" repeat={3} pauseOnHover>
          {images.map(({ src, alt }) => (
            <span key={alt} className="mx-4 flex-none flex items-center justify-center">
              <Image
                className="relative w-32 md:w-40 h-auto" // Ensure consistent height
                src={src}
                alt={alt}
                style={{ objectFit: "contain" }} // Maintain aspect ratio
              />
            </span>
          ))}
        </Marquee>

        <Marquee className="" repeat={3} pauseOnHover>
          {images_2.map(({ src, alt }) => (
            <span key={alt} className="mx-4 flex-none flex items-center justify-center">
              <Image
                className="relative w-32 md:w-40 h-auto" // Ensure consistent height
                src={src}
                alt={alt}
                style={{ objectFit: "contain" }} // Maintain aspect ratio
              />
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

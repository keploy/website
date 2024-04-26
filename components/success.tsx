import React from 'react';
import CommunityBunny from "@/public/images/community-bunny.png";
import Image from 'next/image';
interface SuccessProps {
  heading: string;
  subHeading: string;
  ctaText: string;
  ctaClickFunction: () => void;  // Adjust the function type if it needs to accept parameters or return something
}

const Success: React.FC<SuccessProps> = ({ heading, subHeading, ctaText, ctaClickFunction }) => {
  return (
    <div className="w-full h-full shadow-lg sm:shadow-none  flex flex-col justify-between items-center p-4">
      <Image src={CommunityBunny} alt='success' height={144} width={144} />
      <div className="text-center mt-8">
        <h1 className="text-xl text-secondary-300 font-bold">{heading}</h1>
        <p className="text-lg mt-4">{subHeading}</p>
      </div>
      <button
        onClick={ctaClickFunction}
        className="btn text-secondary-300 bg-primary-300 mb-4 sm:mb-0 px-4 py-3 rounded text-base font-bold border-1 border-transparent text-white shadow mt-4">
        {ctaText}
      </button>
    </div>
  );
}

export default Success;

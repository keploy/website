import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
type StoryCardProps = {
  imagesrc: string | StaticImageData;
  CardDescription: string;
  slug: string;
};

const StoryCard = ({ imagesrc, CardDescription, slug }: StoryCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 bg-gray-100 rounded-md mx-auto  hover:scale-101 duration-150">
      <Link href={`/webstories/${slug}`}>
        <Image
          src={imagesrc}
          alt={CardDescription}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="p-3 border border-slate-200">
          <p>{CardDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;

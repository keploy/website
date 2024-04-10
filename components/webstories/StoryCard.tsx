import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
type StoryCardProps = {
  imagesrc: string | StaticImageData;
  CardDescription: string;
  slug: string;
  categories : string[]
};

const StoryCard = ({ imagesrc, CardDescription, slug , categories }: StoryCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 bg-gray-100 rounded-md mx-auto  hover:shadow-lg hover:shadow-gray-500 duration-150">
      <Link href={`/webstories/${slug}`}>
        <Image
          src={imagesrc}
          alt={CardDescription}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="p-3 ">
          <p>{CardDescription}</p>
        </div>
        <div className="flex flex-row gap-2 p-1 m-2 justify-end">
        {categories.map((category,key)=>(
          <p className="text-xs text-gray-500">{category}</p>
        ))}
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;

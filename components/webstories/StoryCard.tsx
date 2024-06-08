import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type StoryCardProps = {
  imagesrc: string | StaticImageData;
  CardDescription: string;
  slug: string;
  categories: string[];
};

const StoryCard = ({
  imagesrc,
  CardDescription,
  slug,
  categories,
}: StoryCardProps) => {
  const key = `${slug}-${categories.join("-")}`;

  return (
    <div
      key={key}
      className="flex flex-col h-full items-center hover:cursor-pointer border border-gray-300 rounded-md mx-auto hover:shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] duration-150"
    >
      <Link target="_blank" href={`/webstories/${slug}`}>
        <div className="w-full h-0 pb-[150%] relative">
          <Image
            src={imagesrc}
            alt={CardDescription}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md md:rounded-none"
          />
        </div>
        <div className="flex-grow p-4 flex flex-col justify-between">
          <div className="flex justify-start px-2 pt-2 text-secondary-300 text-sm m-1 ml-1 whitespace-pre-line">
            <p className="text-sm font-semibold xl:text-lg md:text-lg">
              {CardDescription}
            </p>
          </div>
          <div className="flex flex-row gap-2 p-1 justify-end">
            {categories.map((category, index) => (
              <p key={index} className="text-xs text-gray-500">
                {category}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;

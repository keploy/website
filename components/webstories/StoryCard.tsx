import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className="relative flex flex-col h-full items-center hover:cursor-pointer border border-gray-300 rounded-md mx-auto hover:shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] duration-150 group"
    >
      <Link target="_blank" href={`/webstories/${slug}`}>
        <div className="w-full h-0 pb-[150%] relative">
          <Image
            src={imagesrc}
            alt={CardDescription}
            height={500}
            width={500}
            objectFit="cover"
            className="rounded-t-md md:rounded-none"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <FontAwesomeIcon icon={faPlay} className="text-white text-4xl" />
          </div>
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

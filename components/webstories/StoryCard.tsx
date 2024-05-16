import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type StoryCardProps = {
  imagesrc: string | StaticImageData;
  CardDescription: string;
  slug: string;
  categories: string[];
  settingSlugStories: (slug: string) => void;
};

const StoryCard = ({
  imagesrc,
  CardDescription,
  slug,
  categories,
  settingSlugStories,
}: StoryCardProps) => {

  const key = `${slug}-${categories.join("-")}`;
  const ClickingStories = () => {
    settingSlugStories(slug);
  }

  return (
    <div
      key={key}
      className="flex flex-col  items-center hover:cursor-pointer aspect-w-2 aspect-h-3 justify-center border border-gray-300 rounded-md mx-auto hover:shadow-lg hover:shadow-gray-500 duration-150"
      onClick={ClickingStories}
    >
      <div className="w-full">
        <Image
          src={imagesrc}
          alt={CardDescription}
          layout="responsive"
          className= " w-full h-full rounded-t-md md:rounded-none"
        />
      </div>
      <div className="flex-grow p-4">
        <div className="flex justify-start px-2 pt-2 text-secondary-300 text-sm m-1 ml-1 whitespace-pre-line ">
          <p className=" text-sm font-semibold xl:text-lg md:text-lg ">{CardDescription}</p>
        </div>
        <div className="flex flex-row gap-2 p-1 justify-end">
          {categories.map((category, index) => (
            <p key={index} className="text-xs text-gray-500">
              {category}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

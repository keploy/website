import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faArrowUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"; // Added faShareAlt icon
import Link from "next/link";
import CustomizedDialogs from "./ShareComponent";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import { NextRouter } from "next/router";
const LottiePlayer = dynamic(()=>import("./LottiePlayerWebStories"),{ssr:false}) 

type StoriesProps = {
  imageUrl: string | StaticImageData;
  Heading: string;
  text: string;
  swipeText?: string;
  swipeLink?: string;
  image: Boolean;
};

const Stories = ({
  Story,
  totalLen,
  currentIndex,
}: {
  Story: StoriesProps;
  totalLen: number;
  currentIndex: number;
}) => {
  const lines = Array.from({ length: totalLen }, (_, i) => i);
  return (
    <>
      <div className="relative h-full mt-10 rounded-xl z-30 border border-gray-200">
        {Story.image ? (
          <Image
            src={Story.imageUrl}
            layout="fill"
            alt="image"
            objectFit="cover"
            className="relative h-full w-full rounded-xl "
          />
        ) : (
            <LottiePlayer VideoPath={Story.imageUrl}/>
        )}

        <div className="absolute w-full flex flex-row h-5 gap-1 ">
          {lines.map((line, key) => (
            <hr
              className={`h-1 w-full ${key==totalLen-1 ? "mr-1":""} ${key==0 ? "ml-1":""}  mt-2 rounded border pointer-events-none ${
                line <= currentIndex
                  ? currentIndex == line
                    ? "loader border-slate-300"
                    : "bg-primary-300"
                  : "bg-slate-100"
              }`}
              key={key}
            />
          ))}
        </div>

        <div className="flex flex-row justify-end">
          {/* Empty div for the share button */}
          <div className="cursor-pointer mx-5 mt-5 scale-125">
            <CustomizedDialogs  />
          </div>
        </div>
        <div className={`absolute w-full bottom-0 animate-grow `}>
          <div className="bg-secondary-300 opacity-60 p-8 rounded-xl">
            <h1 className="text-2xl text-slate-50">{Story.Heading}</h1>
            <p className="text-slate-50">{Story.text}</p>
          </div>
          {Story.swipeLink && Story.swipeText && (
            <Link href={Story.swipeLink}>
              <div className="absolute inset-x-0 bottom-10 opacity-25 hover:opacity-100 duration-300 flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-orange-200 mr-1 animate-bounce"
                />
                <p className="bg-gradient-300 p-2 rounded-3xl text-center text-secondary-300 flex items-center hover:scale-105 duration-300">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="mx-1 text-secondary-300 bg-gradient-300  p-1 rounded-full"
                  />
                  {Story.swipeText}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Stories;

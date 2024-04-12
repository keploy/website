import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type StoriesProps = {
  imageUrl: string;
  Heading: string;
  text: string;
  swipeText?: string;
  swipeLink?: string;
};

const Stories = ({
  Story,
  totalLen,
  currentIndex,
}: {
  Story: StoriesProps;
  totalLen: number;
  currentIndex:number;
}) => {
  const lines = Array.from({ length: totalLen }, (_, i) => i);
  return (
    <>
      <div
        className="relative h-full mt-10 rounded-xl z-30"
        style={{
          backgroundImage: `url(${Story.imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row h-5">
          {lines.map((line, key) => (
            <hr
              className={`h-1 w-full mx-1.5 mt-2 rounded border pointer-events-none border-slate-300 ${
                line <= currentIndex
                  ? (currentIndex == line ? ("loader border-slate-300"):("bg-gradient-200"))
                  : "bg-orange-200"
              }`}
              key={key}
            />
            
          ))}
        </div>
        <div className={`absolute w-full bottom-0 animate-grow `}>
          <div className="bg-black opacity-50 p-8 rounded-xl">
            <h1 className="text-2xl text-slate-50">{Story.Heading}</h1>
            <p className="text-slate-50">{Story.text}</p>
          </div>
          {Story.swipeLink && Story.swipeText && (
            <Link href={Story.swipeLink}>
              <div className="absolute inset-x-0 bottom-10 opacity-25 hover:opacity-100 duration-300 flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-secondary-200 mr-1 animate-bounce"
                />

                <p className="bg-secondary-100 p-2 rounded-3xl text-center text-gray-200 flex items-center hover:scale-105 duration-300">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="mx-1 bg-secondary-200 p-1 rounded-full text-gray-200"
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

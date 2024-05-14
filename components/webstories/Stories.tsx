import React, { memo, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faArrowUp,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CustomizedDialogs from "./ShareComponent";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";
import { useState } from "react";

type TestAndStubsGenType = typeof testAndStubsGen;

const LottiePlayer = dynamic(() => import("./LottiePlayerWebStories"), {
  ssr: false,
});

type StoriesProps = {
  imageUrl: string | StaticImageData | TestAndStubsGenType;
  Heading?: string;
  text?: string;
  swipeText?: string;
  swipeLink?: string;
  image: Boolean;
};

const Stories = ({
  Story,
  totalLen,
  currentIndex,
  Next,
  paused,
}: {
  Story: StoriesProps;
  totalLen: number;
  currentIndex: number;
  Next: Boolean;
  paused: (pause:Boolean)=>void;
}) => {
  const [contentAvailable, setContentAvailable] = useState<Boolean>(false);
  const lines = Array.from({ length: totalLen }, (_, i) => i);
  const [isPaused, setIsPaused] = useState<Boolean>(false);

  useEffect(() => {
    if (Story.Heading && Story.text) {
      setContentAvailable(true);
    } else {
      setContentAvailable(false);
    }
  }, [Story]);

  const handlePauseResume = () => {
    paused(!isPaused);
    setIsPaused(!isPaused);
  };

  return (
    <>
      <div className="relative h-full mt-10 rounded-xl z-30 border border-gray-300">
        <div className="absolute flex flex-row w-full justify-end z-30">
          <div className="absolute z-10 w-full flex flex-row h-5 gap-1">
            {lines.map((line, key) => {
              const isCurrentLine = line === currentIndex;
              const isLastLine = key === totalLen - 1;
              const isFirstLine = key === 0;
              let lineClass = "";

              if (Next) {
                if (line <= currentIndex) {
                  if (isCurrentLine) {
                    lineClass = isPaused
                      ? "loader paused bg-slate-100"
                      : "loader  bg-slate-100";
                  } else {
                    lineClass = "bg-primary-300";
                  }
                } else {
                  lineClass = "bg-slate-100";
                }
              } else {
                if (line <= currentIndex) {
                  if (isCurrentLine) {
                    lineClass = isPaused
                      ? "loaderBack paused bg-slate-100"
                      : "loaderBack notPaused bg-slate-100";
                  } else {
                    lineClass = "bg-primary-300";
                  }
                } else {
                  lineClass = "bg-slate-100";
                }
              }

              return (
                <hr
                  className={`h-1 w-full ${isLastLine ? "mr-1" : ""} ${
                    isFirstLine ? "ml-1" : ""
                  } mt-2 rounded pointer-events-none ${lineClass}`}
                  key={key}
                />
              );
            })}
          </div>

          <div className="flex flex-row mx-5 mt-5 z-10 gap-5">
            <div>
              <FontAwesomeIcon
                icon={isPaused ? faPlay : faPause}
                onClick={handlePauseResume}
                className="scale-150"
              />
            </div>
            <div className="cursor-pointer scale-125">
              <CustomizedDialogs />
            </div>
          </div>
        </div>
        {Story.image &&
        (typeof Story.imageUrl === "string" ||
          (typeof Story.imageUrl === "object" &&
            "height" in Story.imageUrl)) ? (
          <Image
            src={Story.imageUrl as string}
            layout="fill"
            alt="image"
            objectFit="cover"
            className="h-full w-full rounded-xl"
          />
        ) : (
          <LottiePlayer
            VideoPath={Story.imageUrl}
            className="flex flex-col h-full w-full rounded-xl"
          />
        )}
        <div className="flex flex-row justify-end"></div>
        <div className={`absolute w-full bottom-0 animate-grow`}>
          {Story.Heading && Story.text && (
            <div className="bg-secondary-300 opacity-80 p-8 rounded-b-xl rounded-t-sm">
              <h1 className="text-2xl text-slate-50 font-bold mb-3">
                {Story.Heading}
              </h1>
              <p className="text-slate-50">{Story.text}</p>
            </div>
          )}

          {Story.swipeLink && Story.swipeText && (
            <Link href={Story.swipeLink}>
              <div
                className={`absolute inset-x-0 bottom-10 ${
                  contentAvailable ? "opacity-25" : "opacity-100"
                }  hover:opacity-100 duration-300 flex flex-col justify-center items-center`}
              >
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-orange-400 mr-1 animate-bounce text-"
                />
                <p className="bg-gradient-300 p-2 rounded-3xl text-center text-secondary-300 flex items-center hover:scale-105 duration-300">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="mx-1 text-secondary-300 bg-gradient-300 p-1 rounded-full"
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

export default memo(Stories);

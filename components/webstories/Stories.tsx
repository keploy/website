import React, { memo, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faArrowUp,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CustomizedDialogs from "./components/ShareComponent";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import CircularLoader from "./components/circularLoader";
import { useSwipeable } from "react-swipeable";

const LottiePlayer = dynamic(() => import("./LottiePlayerWebStories"), {
  ssr: false,
});

type StoriesProps = {
  imageUrl?: string | StaticImageData;
  Heading?: string;
  text?: string;
  swipeText?: string;
  swipeLink?: string;
  image: Boolean; // Use boolean instead of Boolean
};

type StoriesComponentProps = {
  Story: StoriesProps;
  totalLen: number;
  currentIndex: number;
  Next: Boolean;
  paused: (pause: Boolean) => void;
  animationDuration: string;
  timerScreen: Boolean;
  handleNextStory: () => void;
  handlePrevStory: () => void;
  slug: string | string[];
};

const Stories = ({
  Story,
  totalLen,
  currentIndex,
  Next,
  paused,
  animationDuration,
  timerScreen,
  handleNextStory,
  handlePrevStory,
  slug,
}: StoriesComponentProps) => {
  const [contentAvailable, setContentAvailable] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLongPress, setIsLongPress] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lines = Array.from({ length: totalLen }, (_, i) => i);

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

  const handleSwipeUp = () => {
    window.location.href = "/webstories";
  };

  const handleLongPress = () => {
    handlePauseResume();
  };

  const handlers = useSwipeable({
    onSwipedUp: handleSwipeUp,
    trackMouse: true,
    onTouchStartOrOnMouseDown: () => {
      setIsLongPress(false);
      timerRef.current = setTimeout(() => {
        setIsLongPress(true);
        handleLongPress();
      }, 300);
    },
    onTouchEndOrOnMouseUp: () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        handlePauseResume();
        timerRef.current = null;
      }
    },
  });

  return (
    <div className="relative h-full lg:mt-10 xl:mt-10 md:rounded-xl lg:rounded-xl xl:rounded-xl z-30 border border-gray-500">
      {timerScreen && (
        <div className="absolute flex opacity-70 md:rounded-xl lg:rounded-xl xl:rounded-xl inset-0 z-50 w-full h-full justify-center bg-black">
          <CircularLoader slug={slug} />
        </div>
      )}
      <div className="absolute flex z-10 w-full h-full">
        <div
          className="inset-0 w-full h-full justify-center"
          onClick={handlePrevStory}
        ></div>
        <div
          {...handlers}
          className="inset-0 w-full h-full justify-center"
        ></div>
        <div
          className="inset-0 w-full h-full justify-center"
          onClick={handleNextStory}
        ></div>
      </div>
      <div className="absolute flex flex-row w-full justify-end z-30">
        <div className="absolute z-10 w-full flex flex-row h-5 gap-1">
          {lines.map((line, key) => {
            const isCurrentLine = line === currentIndex;
            const isLastLine = key === totalLen - 1;
            const isFirstLine = key === 0;
            let lineClass = "";

            if (Next) {
              if (line <= currentIndex) {
                lineClass = isCurrentLine
                  ? isPaused
                    ? "loader paused bg-slate-100"
                    : "loader bg-slate-100"
                  : "bg-primary-300";
              } else {
                lineClass = "bg-slate-100";
              }
            } else {
              if (line <= currentIndex) {
                lineClass = isCurrentLine
                  ? isPaused
                    ? "loaderBack paused bg-slate-100"
                    : "loaderBack notPaused bg-slate-100"
                  : "bg-primary-300";
              } else {
                lineClass = "bg-slate-100";
              }
            }

            const loaderClassApplied = lineClass.includes("loader");

            return (
              <hr
                key={key}
                className={`h-1 w-full ${isLastLine ? "mr-1" : ""} ${
                  isFirstLine ? "ml-1" : ""
                } mt-2 md:rounded-xl lg:rounded-xl xl:rounded-xl pointer-events-none ${lineClass}`}
                style={
                  loaderClassApplied
                    ? ({
                        "--animation-duration": animationDuration,
                      } as React.CSSProperties)
                    : {}
                }
              />
            );
          })}
        </div>
        <div className="flex flex-row mx-5 pt-3 mt-5 z-10 gap-8">
          <div>
            <FontAwesomeIcon
              icon={isPaused ? faPlay : faPause}
              onClick={handlePauseResume}
              className="scale-150 text-slate-200 cursor-pointer"
            />
          </div>
          <div className="cursor-pointer scale-125">
            <CustomizedDialogs handlingPauseBehindScenes={handlePauseResume} />
          </div>
        </div>
      </div>

      {Story.image &&
      (typeof Story.imageUrl === "string" ||
        (typeof Story.imageUrl === "object" && "height" in Story.imageUrl)) ? (
        <Image
          src={Story.imageUrl as string}
          alt="image"
          objectFit="cover"
          className="h-full w-full md:rounded-xl lg:rounded-xl xl:rounded-xl"
          priority
        />
      ) : (
        <LottiePlayer
          VideoPath={Story.imageUrl}
          className="flex flex-col h-full w-full md:rounded-xl lg:rounded-xl xl:rounded-xl"
        />
      )}

      {currentIndex < totalLen - 1 && (
        <div className="absolute w-full z-30 bottom-0 animate-grow cursor-text">
          <div className="bg-secondary-300 opacity-80 p-8 md:rounded-b-xl md:rounded-t-sm lg:rounded-b-xl lg:rounded-t-sm xl:rounded-t-sm xl:rounded-b-xl">
            {Story.Heading && (
              <h1 className="text-2xl text-slate-50 font-bold mb-3">
                {Story.Heading}
              </h1>
            )}
            {Story.text && <p className="text-slate-50">{Story.text}</p>}
          </div>
        </div>
      )}

      {Story.swipeLink && Story.swipeText && (
        <Link href={Story.swipeLink}>
          <div
            className={`absolute inset-x-0 bottom-10 ${
              contentAvailable ? "opacity-25" : "opacity-100"
            } hover:opacity-100 duration-300 flex flex-col justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-orange-400 mr-1 animate-bounce"
            />
            <p className="bg-gradient-300 p-2 rounded-3xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl text-center text-secondary-300 flex items-center hover:scale-105 duration-300">
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
  );
};

export default memo(Stories);

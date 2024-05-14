import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Stories from "./Stories";
import Image, { StaticImageData } from "next/image";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";

type TestAndStubsGenType = typeof testAndStubsGen;

type WebStoryItem = {
  imageUrl: string | StaticImageData | TestAndStubsGenType;
  Heading?: string;
  text?: string;
  swipeText?: string;
  swipeLink?: string;
  image: Boolean;
};

type WebStoriesProps = {
  data: WebStoryItem[];
};

const WebStories = ({ data }: WebStoriesProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [next, setNext] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStoryIndex !== data.length - 1) {
        handleNext();
      }
    }, 5100);

    return () => clearInterval(interval);
  }, [currentStoryIndex]);

  const handlePrev = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );

    setNext(false);
  };

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setNext(true);
  };

  const handleReplay = () => {
    setCurrentStoryIndex(0);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };
  const currentStory = data[currentStoryIndex];
  return (
    <div>
      <div className="flex flex-row h-screen gap-10 justify-center cursor-pointer">
        <Image
          src={currentStory.imageUrl as string}
          layout="fill"
          alt="image"
          objectFit="cover"
          className="h-full w-full opacity-30  blur-lg rounded-xl"
        />
        <button
          onClick={handlePrev}
          className={`relative bg-secondary-300 text-slate-200 w-10 h-10 rounded-full border border-solid my-auto ${
            currentStoryIndex === 0
              ? "disabled:bg-secondary-300 disabled:text-white opacity-30 cursor-not-allowed"
              : ""
          }`}
          disabled={currentStoryIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          key={currentStoryIndex}
          className=" flex flex-col h-5/6  mt-8  basis-4/5 md:basis-7/12 lg:basis-4/12 xl:basis-3/12 self-center cursor-pointer"
          onKeyDown={handleKeyDown}
          tabIndex={0} // Ensure the div is focusable
          style={{ height: "90%" }}
        >
          <Stories
            Story={currentStory}
            totalLen={data.length}
            currentIndex={currentStoryIndex}
            Next={next}
          />

          <p
            className={` ${
              currentStoryIndex == data.length - 1 ? "opacity-100" : "opacity-0"
            }  mt-5 content-end text-sm  text-center text-slate-600`}
          >
            If you like Keploy, give it a star on GitHub and follow us on
            Twitter ❤️
          </p>
        </div>
        {currentStoryIndex === data.length - 1 ? (
          <button
            onClick={handleReplay}
            className="relative bg-secondary-300 text-slate-200 w-10 h-10 rounded-full border border-solid my-auto"
          >
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`relative bg-secondary-300 text-slate-200 w-10 h-10 rounded-full border border-solid my-auto ${
              currentStoryIndex === data.length - 1
                ? "disabled:bg-orange-600 disabled:text-orange-200 cursor-not-allowed"
                : ""
            }`}
            disabled={currentStoryIndex === data.length - 1}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default WebStories;

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Stories from "./Stories";
import { StaticImageData } from "next/image";

type WebStoryItem = {
  imageUrl: string|StaticImageData;
  Heading: string;
  text: string;
  swipeText?: string;
  swipeLink?: string;
  image: Boolean;
};

type WebStoriesProps = {
  data: WebStoryItem[];
};

const WebStories = ({ data }: WebStoriesProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handlePrev = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
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
  console.log(data);
  const currentStory = data[currentStoryIndex];

  return (
    <div>
      <div className="relative flex flex-row h-screen gap-10 justify-center cursor-pointer">
        <div className="absolute inset-0 backdrop-filter backdrop-blur-3xl cursor-pointer" />
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
          className="basis-4/5 md:basis-7/12 lg:basis-4/12 xl:basis-3/12 self-center h-5/6 cursor-pointer"
          onKeyDown={handleKeyDown}
          tabIndex={0} // Ensure the div is focusable
        >
          <Stories
            Story={currentStory}
            totalLen={data.length}
            currentIndex={currentStoryIndex}
          />
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

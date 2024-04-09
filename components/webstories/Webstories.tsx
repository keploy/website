"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Stories from "./Stories";

type WebStoryItem = {
  imageUrl: string;
  text: string;
  swipeText?: string;
  swipeLink?: string;
};

type WebStoriesProps = {
  data: WebStoryItem[];
};

const WebStories = ({ data }: WebStoriesProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [stack, setStack] = useState<number[]>([]);

  const handlePrev = () => {
    if (currentStoryIndex !== 0) {
      const updatedStack = stack.slice(0, -1);
      setStack(updatedStack);
    } else {
      setStack([]);
    }
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (currentStoryIndex !== data.length - 1) {
      const updatedStack = [...stack, currentStoryIndex + 1];
      setStack(updatedStack);
    } else {
      const updatedStack = [...stack, 0];
      setStack(updatedStack);
    }
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentStory = data[currentStoryIndex];
  console.log(stack)
  return (
    <div>
      <div className="flex flex-row h-screen  gap-10 justify-center backdrop-blur overflow-hidden ">
        <button
          onClick={handlePrev}
          className={`bg-slate-300 w-10 h-10 rounded-full border border-solid my-auto ${
            currentStoryIndex === 0
              ? "disabled:bg-gray-900 disabled:text-orange-500 cursor-not-allowed"
              : ""
          }`}
          disabled={currentStoryIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div key={currentStoryIndex} className="sm:basis-7/12 md:basis-5/12 lg:basis-3/12 self-center h-5/6">
          <Stories
            Story={currentStory}
            totalLen={data.length}
            Stack={stack}
          />
        </div>
        <button
          onClick={handleNext}
          className={`bg-slate-300 w-10 h-10 rounded-full border border-solid my-auto ${
            currentStoryIndex === data.length-1
              ? "disabled:bg-gray-900 disabled:text-yellow-500 cursor-not-allowed"
              : ""
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default WebStories;

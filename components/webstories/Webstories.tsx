import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Stories from "./Stories";

type WebStoryItem = {
  imageUrl: string;
  Heading: string;
  text: string;
  swipeText?: string;
  swipeLink?: string;
};

type WebStoriesProps = {
  data: WebStoryItem[];
};

const WebStories = ({ data }: WebStoriesProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [stack, setStack] = useState<number[]>([0]);

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

  const handleReplay = () => {
    setCurrentStoryIndex(0);
    setStack([0]);
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "ArrowRight") {
  //     handleNext();
  //   } else if (event.key === "ArrowLeft") {
  //     handlePrev();
  //   }
  // };

  const currentStory = data[currentStoryIndex];

  return (
    <div>
      <div className="flex flex-row h-screen mt-5 gap-10 justify-center backdrop-blur overflow-hidden ">
        <button
          onClick={handlePrev}
          className={`bg-gradient-300 text-gradient-200 w-10 h-10 rounded-full border border-solid my-auto ${
            currentStoryIndex === 0
              ? "disabled:bg-orange-600 disabled:text-orange-200 cursor-not-allowed"
              : ""
          }`}
          disabled={currentStoryIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          tabIndex={0}
          key={currentStoryIndex}
          className="basis-4/5 md:basis-7/12 lg:basis-4/12 xl:basis-3/12 self-center h-5/6 overflow-y-hidden"
          onClick={handleNext}
        >
          <Stories Story={currentStory} totalLen={data.length} Stack={stack} />
        </div>

        {currentStoryIndex === data.length - 1 ? (
          <button
            onClick={handleReplay}
            className="bg-gradient-300 text-gradient-200 w-10 h-10 rounded-full border border-solid my-auto"
          >
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`bg-gradient-300 text-gradient-200 w-10 h-10 rounded-full border border-solid my-auto ${
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

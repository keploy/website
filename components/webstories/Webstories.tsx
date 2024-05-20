import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import Stories from "./Stories";
import Link from "next/link";
import { StaticImageData } from "next/image";
import testAndStubsGen from "@/public/images/TestGenHighlighted.json";


type TestAndStubsGenType = typeof testAndStubsGen;

type WebStoryItem = {
  imageUrl?: string | StaticImageData | TestAndStubsGenType;
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
  const [totalTime, setTotalTime] = useState<number>(3000);
  const [animatingDuration, setanimatingDuration] = useState<string>("3s");
  const [timer, setTimer] = useState<Boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const remainingTimeRef = useRef(totalTime);
  const startTimestampRef = useRef<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mainDivRef = useRef<HTMLDivElement | null>(null);

  const Pausing = (pause: Boolean) => {
    if (pause) {
      stopTimer();
    } else {
      resumeTimer();
    }
  };

  const startTimer = (duration: number) => {
    startTimestampRef.current = Date.now();
    intervalRef.current = setTimeout(() => {
      handleNext();
      remainingTimeRef.current = totalTime;
      startTimer(totalTime);
      if (currentStoryIndex == data.length - 1) {
        setTimer(true);
      } else {
        setTimer(false);
      }
    }, duration);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
      const elapsedTime = Date.now() - (startTimestampRef.current ?? 0);
      remainingTimeRef.current -= elapsedTime;
    }
  };

  const resumeTimer = () => {
    startTimer(remainingTimeRef.current);
  };

  useEffect(() => {
    // Setting window width when component mounts
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    console.log();
  }, []);

  useEffect(() => {
    if (currentStoryIndex < data.length - 1) {
      setTimer(false);
    }
    console.log(timer);
  }, [timer, currentStoryIndex]);

  useEffect(() => {
    if (currentStory.text) {
      var time = TimeAccToContent(currentStory.text);
      setTotalTime(time * 1000 + 200);
      setanimatingDuration(`${time}s`);
      console.log(time);
    }
    startTimer(totalTime);

    return () => stopTimer();
  }, [currentStoryIndex]);

  useEffect(() => {
    if (mainDivRef.current) {
      mainDivRef.current.focus();
    }
  }, []);

  const handlePrev = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));

    setNext(false);
  };

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === data.length - 1 ? data.length - 1 : prevIndex + 1
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
    } else if (event.key === "Escape") {
      window.location.href = "/webstories"; // Replace with your target URL
    }
  };

  const TimeAccToContent = (content: string) => {
    if (!content) {
      return 0;
    }
    const wordsPerSecond = 5;
    const wordCount = content.split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerSecond);
    return readingTimeMinutes;
  };

  const currentStory = data[currentStoryIndex];
  return (
    <div
      className="w-full h-full opacity-100 cursor-pointer"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={mainDivRef}
    >
      {/* <Image
        src={data[0].imageUrl as string}
        alt="image"
        layout="fill"
        objectFit="cover"
        className="relative z-10 h-full object-cover w-full blur-2xl opacity-60 md:rounded-xl lg:rounded-xl xl:rounded-xl"
      /> */}

      <div className="flex flex-row h-screen md:gap-10 lg:gap-10 xl:gap-10 gap-1 justify-center cursor-pointer">
        {windowWidth > 1024 && (
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
        )}
        <div
          key={currentStoryIndex}
          className="flex flex-col h-screen w-full  md:my-10 lg:mt-8 xl:mt-8 md:basis-12/12 lg:basis-6/12 xl:basis-3/12 self-center cursor-pointer"
          style={{ height: "100%" }}
        >
          <Stories
            Story={currentStory}
            totalLen={data.length}
            currentIndex={currentStoryIndex}
            Next={next}
            paused={Pausing}
            animationDuration={`${animatingDuration}`}
            timerScreen={timer}
            handleNextStory={handleNext}
            handlePrevStory={handlePrev}
          />
          {windowWidth >= 1024 && (
            <p
              className={`${
                currentStoryIndex == data.length - 1
                  ? "opacity-100"
                  : "opacity-0"
              } mt-5 content-end text-sm text-center text-slate-200`}
            >
              If you like Keploy, give it a star on{" "}
              <span>
                {" "}
                <Link
                  href={"https://github.com/keploy/"}
                  target=""
                  className="hover:underline"
                >
                  GitHub
                </Link>{" "}
              </span>{" "}
              and follow us on{" "}
              <Link
                href={"https://twitter.com/keployio"}
                className="hover:underline"
              >
                {" "}
                Twitter
              </Link>{" "}
              ❤️
            </p>
          )}
        </div>
        {currentStoryIndex === data.length - 1
          ? windowWidth > 1024 && (
              <button
                onClick={handleReplay}
                className="relative bg-secondary-300 text-slate-200 w-10 h-10 rounded-full border border-solid my-auto"
              >
                <FontAwesomeIcon icon={faRedoAlt} />
              </button>
            )
          : windowWidth > 1024 && (
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

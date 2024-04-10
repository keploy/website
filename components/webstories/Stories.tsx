import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
type StoriesProps = {
  imageUrl: string;
  text: string;
  swipeText?: string;
  swipeLink?: string;
};

const Stories = ({
  Story,
  totalLen,
  Stack,
}: {
  Story: StoriesProps;
  totalLen: number;
  Stack: number[];
}) => {
  const lines = Array.from({ length: totalLen }, (_, i) => i);

  return (
    <>
      <div
        className="relative h-full drop-shadow-md rounded-xl m-auto border border-slate-200"
        style={{
          backgroundImage: `url(${Story.imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row h-5">
          {lines.map((line, key) => (
            <hr
              className={`h-1 w-full mx-1 mt-2 rounded border border-slate-300 ${
                Stack[Stack.length - 1] >= line ? "bg-orange-600" : "bg-orange-200"
              }`}
              key={key}
            />
          ))}
        </div>
        <div className={`absolute  bottom-0 animate-grow `}>
          <div className="bg-orange-500 opacity-70 p-8 rounded-xl">
            <h1 className="text-2xl text-slate-50">{Story.text}</h1>
            <p className="text-slate-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              inventore eum praesentium quos aspernatur! Sunt itaque praesentium
              mollitia culpa nisi eum accusantium qui sequi a veniam. Nostrum
              itaque ullam nobis!
            </p>
          </div>
          {Story.swipeLink && Story.swipeText && (
            <Link href={Story.swipeLink}>
              <div className="absolute inset-x-0 bottom-10 opacity-25 hover:opacity-100 duration-300 flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-white mr-1 animate-bounce"
                />

                <p className="bg-slate-100 p-2 rounded-3xl text-center text-black flex items-center hover:scale-105 duration-300">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="mx-1 bg-gray-300 p-1 rounded-full"
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

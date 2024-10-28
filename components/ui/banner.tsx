"use client";

import React, { useState } from "react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;
  return (
    <div className=" flex lg:flex-row flex-col gap-16 py-10 xl:px-32 xl:pr-64 lg:px-211200 px-4 justify-center lg:gap-20 items-center w-screen lg:p-7  lg:h-40 h-auto bg-neutral-100 shadow-2xl shadow-gray-500  fixed z-99999 bottom-0 top">
      <button
        onClick={() => {
          setShowBanner(false);
        }}
        className="absolute top-0 right-7 w-4 h-4 cursor-pointer font-semibold text-2xl text-gray-400"
      >
        &times;
      </button>
      <div className=" flex lg:flex-row flex-col justify-center gap-6 lg:gap-2 items-center">
        <div className="flex items-center mr-4">
          <div className=" h-[60px] w-[60px] pr-2 overflow-hidden rounded-full bg-gray-100 shadow-custom border border-gray-200  ">
            <img src="images/conf/kep.png" alt="" />
          </div>
          <div className="border-t-2 border-gray-400 w-8 h-[1px] border-dashed"></div>
          <img
            className=" h-5 text-green-600"
            src="images/conf/tick.svg"
            alt=""
          />
          <div className="border-t-2 border-gray-400 w-8 h-[1px] border-dashed"></div>

          <div>
            <img
              className=" h-[60px] p-3 bg-secondary-300 rounded-full"
              src="images/conf/vscode.svg"
              alt=""
            />
          </div>
        </div>

        <hr className="hidden lg:block h-16 w-[1px] bg-gray-400" />
        <div className=" lg:self-start  flex justify-between flex-col ml-1 max-w-[450px]">
          <p className=" font-bold text-secondary-400 text-center flex items-center justify-center lg:justify-normal font-inter text-lg">
            Keploy For VS Code{" "}
            <label className=" bg-purple-300 rounded-xl text-sm text-purple-600 font-normal px-2 ml-2 ">
              free
            </label>
          </p>
          <p className=" text-gray-500 leading-6 text-center lg:text-start">
            A Visual Studio Code extension designed to help developers record
            and replay test cases directly within the IDE.
          </p>
        </div>
      </div>
      <div>
        <a
          className=" bg-primary-300 hover:text-purple-900 transition-all duration-200 text-secondary-300 font-inter rounded px-5 py-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
        >
          Try Now
        </a>
      </div>
    </div>
  );
};

export default Banner;

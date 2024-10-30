"use client";

import React, { useState } from "react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;
  return (
    <div className="  flex flex-row  py-2 lg:py-6 lg:pt-7 xl:px-10  px-4 justify-start sm:justify-center sm:gap-8 lg:gap-20 items-center w-screen lg:p-7  lg:h-10 h-auto bg-gradient-to-r from-gradient-200 to-gradient-300 ">
      <button
        onClick={() => {
          setShowBanner(false);
        }}
        className="absolute top-0 right-7 w-4 h-4 cursor-pointer font-semibold text-2xl text-gray-400"
      >
        &times;
      </button>
      <div className=" flex lg:flex-row flex-col justify-center  lg:gap-2 items-center">
        <div className="flex items-center mr-4 gap-3">
          <p className=" font-semibold text-neutral-200 text-center flex items-center justify-center lg:justify-normal font-inter lg:text-lg">
            Keploy For VS Code{" "}
            {/* <label className=" bg-purple-300 rounded-xl text-sm text-purple-600 font-normal px-2 ml-2 ">
              free
            </label> */}
          </p>
          <div className=" relative h-[36px] w-[36px] pr-1  rounded-full bg-gray-100 border border-gray-200  ">
            <img src="images/conf/kep.png" alt="" />
            <img
              className=" absolute -top-[6px] -right-4 h-[25px] p-1 bg-secondary-300 rounded"
              src="images/conf/vscode.svg"
              alt=""
            />
          </div>

          <div></div>
        </div>

        <hr className="hidden lg:block opacity-80 h-8 w-[1px] bg-accent-500" />
        <div className=" lg:self-start  flex justify-between ml-1 ">
          <p className=" hidden lg:block text-neutral-200 leading-5 opacity-80 text-center text-sm lg:text-start">
            A Visual Studio Code extension designed to help developers <br />
            record and replay test cases directly within the IDE.
          </p>
        </div>
      </div>
      <div>
        <a
          className="  bg-secondary-300 hover:text-purple-500 transition-all duration-200 text-neutral-100 font-inter rounded lg:px-5 px-2 text-sm lg:text-base py-2"
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

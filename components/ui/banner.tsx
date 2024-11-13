"use client";

import React, { useState } from "react";
import { FiX } from "react-icons/fi"; 

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="fixed hidden top-16 lg:top-20 left-0 right-0 z-50 lex flex-row lg:flex-row items-center justify-between bg-gradient-to-r from-secondary-300 to-secondary-100 py-2 px-2 sm:px-6 lg:py-0 shadow-lg shadow-gray-400">

      {/* Banner Content */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto text-center lg:text-left">
        {/* Logo and title */}
        <div className=" items-center gap-2 sm:gap-3 hidden lg:flex">
          <div className="flex items-center p-1 sm:p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code logo"
              className="h-10 w-10 sm:h-12 sm:w-12 bg-white rounded-full border-2 border-gray-200 shadow-xl"
            />
          </div>
          <h2 className="font-bold text-white font-inter text-sm sm:text-base lg:text-xl ">
            Supercharge Your Development
          </h2>
        </div>

        {/* Divider for desktop view */}
        <div className="hidden lg:block border-l border-accent-500 h-10 opacity-80" />

        {/* Description */}
        <p className="text-white opacity-90 text-xs sm:text-sm lg:text-base max-w-full  lg:max-w-lg leading-snug sm:leading-tight">
          Discover how the Keploy VS Code extension lets you easily record and
          replay test cases within your IDE.
        </p>
      </div>

      {/* Action buttons and close button */}
      <div className="flex flex-row sm:flex-row sm:items-center justify-center gap-1 sm:gap-3 lg:gap-4  sm:mt-0">
        <a
          href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-400 hover:bg-primary-500 text-neutral-100 font-inter rounded px-0 sm:px-2 ml-1 lg:px-6 py-1 lg:py-2 text-xs sm:text-sm lg:text-base text-center transition-all duration-200 shadow-md"
        >
          Get Started for Free
        </a>
        <button
          onClick={() => setShowBanner(false)}
          className="text-gray-300 hover:text-white font-semibold text-lg sm:text-xl lg:text-2xl cursor-pointer transition-transform transform hover:scale-110"
          aria-label="Close Banner"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default Banner;

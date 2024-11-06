"use client";

import React, { useState } from "react";
import { FiX } from "react-icons/fi"; // Assuming react-icons is installed

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-50 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-secondary-300 to-secondary-100 py-0 px-4 sm:px-6 lg:py-0 shadow-lg shadow-gray-400">

      {/* Banner Content */}
      <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto text-center lg:text-left">
        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center p- sm:p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code logo"
              className="h-12 w-12 sm:h-12 sm:w-12 bg-white rounded-full border-2 border-gray-200 shadow-xl"
            />
          </div>
          <h2 className="font-bold text-white font-inter text-base sm:text-lg lg:text-xl">
            Supercharge Your Development
          </h2>
        </div>

        {/* Divider for desktop view */}
        <div className="hidden lg:block border-l border-accent-500 h-10 opacity-80" />

        {/* Description */}
        <p className="text-white opacity-90 text-sm sm:text-base max-w-xs lg:max-w-lg leading-tight">
          Discover how the Keploy VS Code extension lets you easily record and
          replay test cases within your IDE.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:mt-3 lg:mt-0 bg-primary-400 hover:bg-primary-500 text-neutral-100 font-inter rounded px-4 sm:px-5 lg:px-6 py-2 text-sm lg:text-base transition-all duration-200 shadow-md mr-0 sm:mr-0 lg:mr-4"
        >
          Get Started for Free
        </a>
        <button
          onClick={() => setShowBanner(false)}
          className=" text-gray-300 hover:text-white font-semibold text-lg sm:text-xl lg:text-2xl cursor-pointer transition-transform transform hover:scale-120"
          aria-label="Close Banner"
        >
          <FiX />
        </button>
      </div>
    
    </div>
  );
};

export default Banner;

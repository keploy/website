"use client";

import React, { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-screen bg-neutral-100 shadow-2xl shadow-gray-500 py-10 lg:h-40 lg:p-7 xl:px-32 xl:pr-64 lg:px-211200 px-4 flex lg:flex-row flex-col justify-between items-center gap-16 z-[99999]">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-0 right-7 w-4 h-4 cursor-pointer font-semibold text-2xl text-gray-400"
        aria-label="Close Banner"
      >
        &times;
      </button>
      
        <div className="flex items-center mr-4">
          <div className="h-[60px] w-[60px] pr-2 overflow-hidden rounded-full bg-gray-100 shadow-custom border border-gray-200">
            <img src="images/conf/kep.png" alt="Keploy Logo" />
          </div>
          <div className="border-t-2 border-gray-400 w-8 h-[1px] border-dashed" />
          <img className="h-5 text-green-600" src="images/conf/right_arrow.png" alt="Checkmark" />
          <div className="border-t-2 border-gray-400 w-8 h-[1px] border-dashed" />
          <div>
            <img
              className="h-[60px] p-3 bg-secondary-300 rounded-full"
              src="images/conf/vscode.svg"
              alt="VS Code Logo"
            />
          </div>
        </div>

        
        <div className="flex flex-col justify-between ml-1 max-w-[450px] lg:self-start">
          <p className="font-bold text-secondary-400 text-center lg:text-left text-lg flex items-center justify-center lg:justify-start">
            Keploy Extension For VS Code
            <span className="bg-purple-300 rounded-xl text-sm text-purple-600 font-normal px-2 ml-2">
              Free
            </span>
          </p>
          <p className="text-gray-500 leading-6 text-center lg:text-left">
          Designed for Visual Studio Code, this extension helps developers capture and replay test cases effortlessly within the IDE.
          </p>
        </div>
      
      
         <a 
         href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
         className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
         Try Now
      </a>
        
    
    </div>
  );
};

export default Banner;

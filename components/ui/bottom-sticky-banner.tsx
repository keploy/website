import React, { useState, useEffect } from "react";
import {
  XMarkIcon,
  CommandLineIcon,
  SparklesIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const KeployStickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const bannerDismissed = localStorage.getItem(
      "keploy_vscode_banner_dismissed"
    );
    if (bannerDismissed) {
      setIsVisible(false);
    }
    const timer = setTimeout(() => {
      setShowPulse(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleDismiss = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("keploy_vscode_banner_dismissed", "true");
    }, 300);
  };

  const handleClick = () => {
    window.open(
      "https://marketplace.visualstudio.com/items?itemName=Keploy.keployio",
      "_blank"
    );
  };

  if (!isVisible) return null;

  const getLeftPosition = (index: number): string =>
    `${(index * 200).toString()}px`;
  const getTopPosition = (index: number): string =>
    `${((index % 2) * 20).toString()}px`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-99999 transform transition-transform duration-300 ${
        isAnimating ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-gradient-to-r from-secondary-300 via-secondary-100 to-secondary-300 shadow-xl border-t border-primary-300/20">
        <div className="max-w-7xl mx-auto px-3 py-4 md:px-6 md:py-6 lg:px-8 relative overflow-hidden">
          {/* Background decoration - Hidden on mobile */}
          <div className="absolute inset-0 opacity-10 hidden md:block">
            <div className="absolute inset-0 rotate-12 transform scale-150">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="absolute h-2 w-40 bg-primary-300"
                  style={{
                    left: getLeftPosition(i),
                    top: getTopPosition(i),
                    opacity: 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating icons decoration - Hidden on mobile */}
          <div className="absolute top-0 right-0 opacity-10 hidden md:block">
            <CodeBracketIcon className="h-24 w-24 text-primary-300 animate-float" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 relative">
            {/* Icon and Text Section */}
            <div className="flex-1 flex items-start md:items-center gap-3 md:gap-4 min-w-0 w-full">
              <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-primary-300 bg-opacity-20 animate-float shrink-0">
                <CommandLineIcon className="h-7 w-7 text-primary-300" />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 bg-primary-300/10 rounded-full px-3 py-1">
                    <SparklesIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-300" />
                    <span className="text-xs md:text-sm font-semibold mt-0.5 text-primary-300 whitespace-nowrap">
                      NEW VS CODE EXTENSION
                    </span>
                  </div>
                  <BoltIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-300 animate-pulse" />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2">
                  <span className="text-sm md:text-base text-neutral-100 font-medium">
                    Transform your testing workflow with Keploy
                  </span>
                  <span className="hidden md:inline text-primary-300">•</span>
                  <span className="text-xs md:text-sm text-primary-300/80 whitespace-nowrap">
                    Join {`100+ `} developers
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={handleClick}
                className="relative flex-1 md:flex-initial px-4 md:px-6 py-2 md:py-2.5 text-sm font-semibold
                         bg-primary-300 text-white rounded-md hover:bg-primary-400
                         transition-all duration-200 shadow-sm hover:shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              >
                {/* Pulse background - separate from content */}
                {showPulse && (
                  <span className="absolute -inset-1 rounded-md bg-primary-300 opacity-20 animate-pulse" />
                )}
                {/* Button content - always visible */}
                <div className="relative flex items-center justify-center gap-2">
                  Install Extension
                  <ArrowRightIcon className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </button>

              <button
                onClick={handleDismiss}
                className="p-2 rounded-md hover:bg-secondary-400 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                aria-label="Dismiss"
              >
                <XMarkIcon className="h-5 w-5 text-neutral-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeployStickyBanner;

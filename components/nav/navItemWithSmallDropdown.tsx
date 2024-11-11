import React, { useState } from "react";
import Link from "next/link";
import { UpIcon } from "./UpIcon";
import DownIcon from "./DownIcon";
import Image from 'next/image';

import illustration from "@/public/images/navbar/illustration.png";
// Interface Definitions
export interface NavItemWithSmallDropdownProps {
  heading: string;
  dropdownData: DropdowndataInterface[];
  openDropdown: string | null;
  handleDropdownToggle: (dropdownName: string) => void;
}

export interface DropdowndataInterface {
  heading: string;
  links: LinkDatainterface[];
  icons: string;
}

export interface LinkDatainterface {
  pagelink: string;
  pageName: string;
  icon?: string; // Optional icon property
  icons: string;
}

export default function NavItemWithSmallDropdown({
  heading,
  dropdownData,
  openDropdown,
  handleDropdownToggle,
}: NavItemWithSmallDropdownProps) {
  const [activeTab, setActiveTab] = useState<number>(0); // Track active tab index

  // Handle tab switching
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Dropdown Heading */}
      <div
        className="flex items-center text-gray-600 hover:text-primary-300 cursor-pointer"
        onClick={() => handleDropdownToggle(heading.toLowerCase())}
        role="button"
        tabIndex={0} // Make it keyboard accessible
        onKeyDown={(e) => e.key === "Enter" && handleDropdownToggle(heading.toLowerCase())} // Handle keyboard interaction
      >
        <span className="font-medium mr-2">{heading}</span>
        <span className="pt-1.5">
          {openDropdown === heading.toLowerCase() ? (
            <UpIcon className="text-current" />
          ) : (
            <DownIcon className="text-current" />
          )}
        </span>
      </div>

      {/* Dropdown Content */}
      {openDropdown === heading.toLowerCase() && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg pb-4 z-10 w-[800px] p-4 border border-gray-300 rounded-md">
          {heading.toLowerCase() === "resources" && (
            <div className="flex justify-between">
              {dropdownData.map((section, sectionIndex) => (
                <div key={sectionIndex} className="w-1/3">
                  <h2 className="text-lg font-medium text-gray-800 mb-4 leading-[21px] font-inter">
                    {section.heading}
                  </h2>
                  <ul className="space-y-2 mt-10">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="flex items-center space-x-2">
                        {link.icon && (
                          <span className={`inline-block w-5 h-5 ${link.icon} mr-2`}></span>
                        )}

                        <Link
                          href={link.pagelink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-primary-500 transition duration-150 font-inter text-sm font-bold leading-[19.5px]"
                        ><Image
                            src={link.icons}
                            alt={link.pageName}
                            width={27}
                            height={27}
                            className="mr-2" // Space between image and text
                          />
                          <span>{link.pageName}</span> {/* Ensures text is part of flex layout */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          )}

          {heading.toLowerCase() === "solutions" && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg z-10 w-[1058px] p-4 border border-gray-300 rounded-md">
              <div className="flex space-x-8">

                {/* First Column for Heading 1 */}
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800 mb-4 leading-[21px] font-inter">{dropdownData[0]?.heading}</h2>
                  <ul className="space-y-4 mt-10 ">
                    {dropdownData[0]?.links.slice(0, 4).map((solution, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Link href={solution.pagelink} target="_blank" rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-primary-500 transition duration-150 font-inter text-sm font-bold leading-[19.5px]">
                          <Image
                            src={solution.icons}
                            alt={solution.pageName}
                            width={27}
                            height={27}
                          />
                          <span>{solution.pageName}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Second Column for Next 4 Links */}
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800 mb-4 leading-[21px] font-inter"></h2>

                  <ul className="space-y-4 mt-16">
                    {dropdownData[0]?.links.slice(4, 8).map((solution, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Link href={solution.pagelink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary-500 transition duration-150 font-inter text-sm font-bold leading-[19.5px]"
                        >
                          <Image
                            src={solution.icons}
                            alt={solution.pageName}
                            width={27}
                            height={27}
                          />
                          <span> {solution.pageName}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Third Column for Heading 2 */}
                {dropdownData[1] && (
                  <div className="flex-1">
                    <h2 className="text-lg font-medium text-gray-800 mb-4 leading-[21px] font-inter">{dropdownData[1]?.heading}</h2>
                    <ul className="space-y-4 mt-10">
                      {dropdownData[1]?.links.map((solution, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Link href={solution.pagelink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary-500 transition duration-150 font-inter text-sm font-bold leading-[19.5px]"
                          >
                            <Image
                              src={solution.icons}
                              alt={solution.pageName}
                              width={27}
                              height={27}
                            />
                            <span>{solution.pageName}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}






          {/* Dropdown Content */}
          {openDropdown === "products" && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg z-10 w-[1058px] p-4 border border-gray-300 rounded-md">
              <div className="flex justify-between">

                {/* Left Section: "Open Source" and "Enterprise Solution" buttons */}
                <div className="w-1/4 bg-gray-50 p-4 rounded-md">
                  {dropdownData.map((section, index) => (
                    <button
                      key={section.heading}
                      onClick={() => handleTabClick(index)}
                      className={`flex item-center p-4 gap-4 w-[242px] h-[86px] rounded-full transition-colors duration-150 ${activeTab === index ? "bg-[#FFB9861F] text-primary-700" : "bg-white text-black"}`}
                    >
                      <Image
                        src={section.icons}
                        alt={section.links[0]?.pageName} // Corrected to use the first link's pageName
                        width={27}
                        height={27}
                      />
                      <div className="flex flex-col">
                        <span className="font-space-grotesk text-[16px] font-bold">{section.heading}</span>
                        <p className="font-space-grotesk text-[12px] font-medium text-gray-500">{section.links[0]?.pageName}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Right Section: "About Product" and "Features" */}
                <div className="flex w-2/3 space-x-8">

                  {/* About Product Section */}
                  <div className="w-1/2">
                    <h2 className="text-lg font-medium text-gray-800 mb-4 leading-[21px] font-inter">About Product</h2>
                    <ul className="space-y-3 mt-10">
                      {dropdownData[0]?.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="flex items-center space-x-2">
                          <Link href={link.pagelink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary-500 transition duration-150 font-inter text-sm font-bold leading-[19.5px]"
                          >
                            <Image
                              src={link.icons}
                              alt={link.pageName}
                              width={27}
                              height={27}
                            />
                            <span>{link.pageName}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Section */}
                  <div className="w-1/2">

                    {activeTab === 0 ? (
                      <div className="">
                        <h2 className="text-lg font-medium text-gray-800 mb-4 leading-[21px] font-inter">Features</h2>
                        <ul className="space-y-3 mt-10">
                          {dropdownData[1]?.links.map((link, linkIndex) => (
                            <li key={linkIndex} className="flex items-center space-x-2">
                              <Link href={link.pagelink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary-500 transition duration-150 font-inter text-sm font-bold leading-[19.5px]"
                              >
                                <Image
                                  src={link.icons}
                                  alt={link.pageName}
                                  width={27}
                                  height={27}
                                />
                                <span> {link.pageName}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                    ) : (
                      <div className="p-4 bg-gray-100 rounded-md shadow-md flex flex-col justify-center items-center mt-10">
                        <p className=" mb-4 text-[12px] leading-[18px] font-bold font-inter">Want to achieve 95% coverage by making API calls of all possible permutations?</p>
                        <button className="px-4 py-2 bg-[#FFB9861F] text-black rounded-md text-[12px] leading-[18px] font-bold transition">
                          Join the waitlist
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}

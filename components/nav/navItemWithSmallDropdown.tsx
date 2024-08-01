import React, { useState } from "react";
import Link from "next/link";
import { UpIcon } from "./UpIcon";
import DownIcon from "./DownIcon";
import Image from "next/image";

export interface NavItemWithSmallDropdownProps {
  heading: string;
  dropdownData: DropdowndataInterface[];
}

export interface DropdowndataInterface {
  heading: string;
  links: LinkDatainterface[];
}
export interface LinkDatainterface {
  pagelink: string;
  pageName: string;
  pageSvg: string;
}
export default function NavItemWithSmallDropdown({
  heading,
  dropdownData,
}: NavItemWithSmallDropdownProps) {
  const [openDropdown, setShowDropdown] = useState(false);
  const showDropdown = () => {
    setShowDropdown(true);
  };
  const hideDropdown = () => {
    setShowDropdown(false);
  };
  const toggleDropdown = () => {
    setShowDropdown(!openDropdown);
  };

  return (
    <div
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className="relative flex items-center py-3 transition duration-150 ease-in-out cursor-pointer"
    >
      <div className="flex align-center text-gray-600">
        <div className="flex">
          <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
            {heading}
            <span className="absolute text-primary-300 left-0 bottom-0 w-full h-[.195rem] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </div>
          <div onClick={toggleDropdown} className="pt-4">
            {openDropdown ? (
              <UpIcon className="text-current" />
            ) : (
              <DownIcon className="text-current" />
            )}
          </div>
        </div>
      </div>
      {openDropdown && (
        <div className="fixed top-20 left-[40%] bg-neutral-100 pb-8 z-10 w-[300px] h-[150px] shadow-lg">
          <div className="flex justify-evenly items-start">
            <div className="flex items-center justify-evenly max-w-[15rem]">
              {openDropdown && (
                <div>
                  <div>
                    {dropdownData.map((item) => (
                      <div className="flex flex-row gap-5">
                        {dropdownData.map((lists) => (
                          <ul>
                            {lists.links.map((links) => (
                              <li className="flex flex-col gap-4 hover:bg-[#e5905e] px-9 py-4 hover:opacity-65">
                                <Link
                                  href={links.pagelink}
                                  target="_blank"
                                  className="flex hover:text-[#fff]"
                                >
                                  {links.pageSvg && (
                                    <img src={links.pageSvg} className="pr-2" />
                                  )}
                                  {links.pageName}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
      <div className="flex align-center text-gray-600 hover:text-primary-300">
        <div className="font-medium mr-2">{heading}</div>
        <div onClick={toggleDropdown} className="pt-1.5">
          {openDropdown ? (
            <UpIcon className="text-current" />
          ) : (
            <DownIcon className="text-current" />
          )}
        </div>
      </div>
      {openDropdown && (
        <div className="absolute top-full bg-[#eeeded] pb-8 z-10">
          <div>
            <div className="flex items-center justify-between">
              {dropdownData.map((lists) => (
                <div key={lists.heading}>
                  {" "}
                  <span className="font-bold text-secondary-300 uppercase px-3 py-3 flex items-center transition duration-150 ease-in-out">
                    {lists.heading}
                  </span>
                  <ul>
                    {lists.links.map((link) => (
                      <li key={link.pageName}>
                        {" "}
                        {/* Ensure to add a key for list items when mapping */}
                        <Link
                          target="_blank"
                          href={link.pagelink}
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group"
                        >
                          {link.pageName}
                          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, {useState} from "react";
import Link from "next/link";
import UpIcon from "@/public/images/up-chevron.svg"
import DownIcon from "@/public/images/down-chevron.svg"
import Image from "next/image";

export interface NavItemWithSmallDropdownProps {
    heading: string;
    dropdownData: DropdowndataInterface[];
  }

  export interface DropdowndataInterface{
    heading:string;
    links:LinkDatainterface[]
  }
  export interface LinkDatainterface{
    pagelink:string;
    pageName:string;
  }
export default function NavItemWithSmallDropdown({heading,dropdownData}:NavItemWithSmallDropdownProps){
    const [openDropdown,setShowDropdown] = useState(false)
    const showDropdown = ()=>{
        setShowDropdown(true)
    }
    const hideDropdown = ()=>{
        setShowDropdown(false)
    }
    const toggleDropdown =()=>{
        setShowDropdown(!openDropdown)
    }

    return(
        <div
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="relative flex items-center py-3 transition duration-150 ease-in-out cursor-pointer"
              >
                <div className="flex align-center text-gray-600 hover:text-primary-300">
                <div className="font-medium mr-2">
                  Resources
                </div>
                <Image onClick={toggleDropdown} src={ openDropdown ? UpIcon : DownIcon} alt="up or down icon" height={12} width={12} />
                </div>
                {openDropdown && (
                  <div
                    className="absolute top-full mt-1 bg-neutral-100 pb-8 z-10"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        {dropdownData.map((lists) => (
                          <div key={lists.heading}>
                            {" "}
                            <span className="font-bold text-secondary-300 uppercase px-5 py-3 flex items-center transition duration-150 ease-in-out">
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
                                    className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap	"
                                  >
                                    {link.pageName}
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
    )
}
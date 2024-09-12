import { useState } from "react";
import { UpIcon } from "./UpIcon";
import DownIcon from "./DownIcon";
import OpenSource from "@/public/images/navBarIcons/OpenSource";
import EnterpriseSolution from "@/public/images/navBarIcons/EnterpriseSolution";
import WhatIsKeploy from "@/public/images/navBarIcons/WhatIsKeploy";
import WhyUseKeploy from "@/public/images/navBarIcons/WhyUseKeploy";
import HowItWorks from "@/public/images/navBarIcons/HowItWorks";
import GettingStarted from "@/public/images/navBarIcons/GettingStarted";

export default function Product() {
  const [openDropdown, setShowDropdown] = useState(false);
  const [enterpriseHover, setEnterpriseHover] = useState(false);
  const [openSourceHover, setOpenSourceHover] = useState(true);

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
      <div className="flex align-center text-gray-600 hover:text-[#FF914D]">
        <div className="flex">
          <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
            Products
            <span className="absolute text-[#666666] text-[3px] left-[.45rem] bottom-[.15rem] w-full h-[.195rem] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </div>
        </div>
        <div onClick={toggleDropdown} className="pt-4 -pl-6">
          {openDropdown ? (
            <UpIcon className="text-[#666666]" />
          ) : (
            <DownIcon className="text-[#666666]" />
          )}
        </div>
      </div>

      {openDropdown && (
        <div className="fixed bg-[#F5F5F5] pb-8 z-10 shadow-xl top-[80px] left-[28px] w-[1300px] h-[320px] cursor-auto rounded-3xl">
          <div>
            <div className="flex items-center justify-between">
              <div className="pt-[39px] pl-[19px] flex gap-[80px] justify-between items-stretch w-full">
                <div className="p-5">
                  <div
                    className="flex gap-3 justify-center items-center hover:bg-primary-100 hover:bg-opacity-20 duration-300 rounded-[135px] p-5 mb-6"
                    onMouseEnter={() => {
                      setOpenSourceHover(true);
                      setEnterpriseHover(false);
                    }}
                  >
                    <OpenSource />
                    <div>
                      <h1 className="text-[20px] font-bold cursor-pointer">
                        Open Source
                      </h1>
                      <p className="text-[14px] text-[#797C88] cursor-pointer">
                        Open Source testing solution
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex gap-3 justify-center items-center hover:bg-primary-100 hover:bg-opacity-20 duration-300 rounded-[135px] p-5"
                    onMouseEnter={() => {
                      setEnterpriseHover(true);
                      setOpenSourceHover(false);
                    }}
                  >
                    <EnterpriseSolution />
                    <div>
                      <h1 className="text-[20px] font-bold cursor-pointer">
                        Enterprise Solution
                      </h1>
                      <p className="text-[14px] text-[#797C88] cursor-pointer">
                        Open Source testing solution
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[14px] text-[#677489] pb-5">
                    About Product
                  </p>

                  <div>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <WhatIsKeploy />
                          What is Keploy?
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <WhyUseKeploy />
                          Why use Keploy?
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <HowItWorks />
                          How it works?
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <GettingStarted />
                          Getting started guide
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-row justify-start pr-28">
                  <div>{enterpriseHover && <div>enterprise</div>}</div>
                  <div>{openSourceHover && <div>openSourceHover</div>}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

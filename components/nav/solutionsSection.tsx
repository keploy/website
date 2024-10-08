import { useState } from "react";
import DownIcon from "./DownIcon";
import { UpIcon } from "./UpIcon";
import TestDataGeneration from "@/public/images/navBarIcons/TestDataGeneration";
import TestCaseGeneration from "@/public/images/navBarIcons/TestCaseGeneration";
import UnitTestGeneration from "@/public/images/navBarIcons/UnitTestGeneration";
import CodeCoverage from "@/public/images/navBarIcons/CodeCoverage";
import CITesting from "@/public/images/navBarIcons/CITesting";
import RegressionTesting from "@/public/images/navBarIcons/RegressionTesting";
import APITesting from "@/public/images/navBarIcons/APITesting";
import ContractTesting from "@/public/images/navBarIcons/ContractTesting";
import Git from "@/public/images/navBarIcons/Git";
import Jenkins from "@/public/images/navBarIcons/Jenkins";
import Gitlab from "@/public/images/navBarIcons/Gitlab";

export default function Solutions() {
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
      <div className="flex align-center text-gray-600 hover:text-primary-100">
        <div className="flex">
          <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
            Solutions
            <span className="absolute text-gray-600 text-[3px] left-[.45rem] bottom-[.15rem] w-full h-[.195rem] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </div>
        </div>
        <div onClick={toggleDropdown} className="pt-4 -pl-6">
          {openDropdown ? (
            <UpIcon className="text-gray-600" />
          ) : (
            <DownIcon className="text-gray-600" />
          )}
        </div>
      </div>

      {openDropdown && (
        <div className="fixed bg-gradient-100 pb-8 z-10 shadow-xl top-[80px] left-[182px] w-[925px] h-[280px] cursor-auto rounded-2xl">
          <div>
            <div className="flex items-center justify-evenly">
              <div className="pt-[20px] px-[19px] flex justify-between items-stretch w-full">
                <div className="p-5">
                  <div className="pb-5 text-gray-600">Solutions</div>
                  <div>
                    <ul className="flex flex-col gap-5">
                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <TestDataGeneration />
                          Test Data Generation
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <TestCaseGeneration />
                          Test Case Generation
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <UnitTestGeneration />
                          Unit Test Generation
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <CodeCoverage />
                          Code Coverage
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-5">
                  <div className="p-5">
                    <div>
                      <ul className="flex flex-col gap-5">
                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <CITesting />
                            CI Testing
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <RegressionTesting />
                            Regression Testing
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <APITesting />
                            API Testing
                          </a>
                        </li>

                        <li>
                          <a
                            href=""
                            className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                          >
                            <ContractTesting />
                            Contract Testing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="pb-5 text-gray-600">Integrations</div>
                  <div>
                    <ul className="flex flex-col gap-5">
                      <li className="flex gap-2 font-[700] hover:text-primary-500 duration-200">
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <Git />
                          Git
                        </a>
                      </li>

                      <li className="flex gap-2 font-[700] hover:text-primary-500 duration-200">
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <Jenkins />
                          Jenkins
                        </a>
                      </li>

                      <li className="flex gap-2 font-[700] hover:text-primary-500 duration-200">
                        <a
                          href=""
                          className="flex gap-2 font-[700] hover:text-primary-500 duration-200"
                        >
                          <Gitlab />
                          Gitlab
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

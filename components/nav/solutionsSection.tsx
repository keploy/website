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
      <div className="flex items-center text-gray-600 hover:text-primary-100">
        <div className="flex">
          <div className="font-medium text-gray-600 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap relative group">
            Solutions
            <span className="absolute text-gray-600 text-[3px] left-[.45rem] bottom-[.15rem] w-full h-[.195rem] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </div>
        </div>
        <div onClick={toggleDropdown} className="pt-1">
          {openDropdown ? (
            <UpIcon className="text-gray-600" />
          ) : (
            <DownIcon className="text-gray-600" />
          )}
        </div>
      </div>

      {openDropdown && (
        <div className="fixed bg-gradient-100 pb-8 z-10 shadow-xl top-[80px] left-0 right-0 mx-auto w-full max-w-6xl h-auto cursor-auto rounded-2xl p-4 sm:p-6">
          {/* Responsive Flex Layout */}
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Solutions Section */}
            <div className="p-5 flex-1">
              <div className="pb-5 text-gray-600">Solutions</div>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://keploy.io/test-data-generator"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <TestDataGeneration />
                    </div>
                    <span>Test Data Generation</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://keploy.io/test-case-generator"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <TestCaseGeneration />
                    </div>
                    <span>Test Case Generation</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://keploy.io/unit-test-generator"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <UnitTestGeneration />
                    </div>
                    <span>Unit Test Generation</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://keploy.io/code-coverage"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <CodeCoverage />
                    </div>
                    <span>Code Coverage</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* More Solutions Section */}
            <div className="p-5 flex-1">
              <div className="pb-5 text-gray-600">More Solutions</div>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://keploy.io/continuous-integration-testing"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <CITesting />
                    </div>
                    <span>CI Testing</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://keploy.io/docs/concepts/reference/glossary/regression-testing/#heading"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <RegressionTesting />
                    </div>
                    <span>Regression Testing</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://keploy.io/api-testing"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <APITesting />
                    </div>
                    <span>API Testing</span>
                  </a>
                </li>

                <li>
                  <a
                    href={"https://keploy.io/contract-testing"}
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <ContractTesting />
                    </div>
                    <span>Contract Testing</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Integrations Section */}
            <div className="p-5 flex-1">
              <div className="pb-5 text-gray-600">Integrations</div>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://keploy.io/docs/ci-cd/github/#heading"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <Git />
                    </div>
                    <span>Git</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://keploy.io/docs/ci-cd/jenkins/#heading"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <Jenkins />
                    </div>
                    <span>Jenkins</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://keploy.io/docs/ci-cd/gitlab/#heading"
                    className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200"
                  >
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                      <Gitlab />
                    </div>
                    <span>Gitlab</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
import Jenkins from "@/public/images/navBarIcons/Jenkins";
import Gitlab from "@/public/images/navBarIcons/Gitlab";
import Github from "@/public/images/navBarIcons/Github";

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

  const solutionsData = [
    {
      title: "Solutions",
      items: [
        {
          icon: <TestDataGeneration />,
          name: "Test Data Generation",
          url: "/test-data-generator",
        },
        {
          icon: <TestCaseGeneration />,
          name: "Test Case Generation",
          url: "/test-case-generator",
        },
        {
          icon: <UnitTestGeneration />,
          name: "Unit Test Generation",
          url: "/unit-test-generator",
        },
        {
          icon: <CodeCoverage />,
          name: "Code Coverage",
          url: "/code-coverage",
        },
      ],
    },
    {
      title: "More Solutions",
      items: [
        {
          icon: <CITesting />,
          name: "CI Testing",
          url: "/continuous-integration-testing",
        },
        {
          icon: <RegressionTesting />,
          name: "Regression Testing",
          url: "/docs/concepts/reference/glossary/regression-testing/#heading",
        },
        {
          icon: <APITesting />,
          name: "API Testing",
          url: "/api-testing",
        },
        {
          icon: <ContractTesting />,
          name: "Contract Testing",
          url: "/contract-testing",
        },
      ],
    },
    {
      title: "Integrations",
      items: [
        {
          icon: <Github />,
          name: "Github",
          url: "https://keploy.io/docs/ci-cd/github/#heading",
        },
        {
          icon: <Jenkins />,
          name: "Jenkins",
          url: "https://keploy.io/docs/ci-cd/jenkins/#heading",
        },
        {
          icon: <Gitlab />,
          name: "Gitlab",
          url: "https://keploy.io/docs/ci-cd/gitlab/#heading",
        },
      ],
    },
  ];
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
        <div className="fixed bg-gradient-100 pb-8 z-10 shadow-xl top-[80px] left-0 right-0 mx-auto w-full max-w-6xl h-auto cursor-auto rounded-b-2xl p-4 sm:p-6">
          {/* Responsive Flex Layout */}
          <div className="flex flex-col md:flex-row items-start justify-between ml-20">
            {/* Solutions Section */}
            {solutionsData.map((section, sectionIndex) => (
              <div className="p-5 flex-1" key={sectionIndex}>
                <div className="pb-5 text-gray-600">{section.title}</div>
                <ul className="flex flex-col gap-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.url}
                        className="flex items-center gap-3 font-semibold hover:text-primary-500 transition-colors duration-200 h-[24px]"
                      >
                        <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

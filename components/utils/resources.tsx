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
import Github from "@/public/images/navBarIcons/Github";
export const PillarPages = [
    {
      heading: "Use Cases",
      links: [
        {
          pagelink: "/test-data-generator",
          pageName: "Test Data Generation",
          Icon: TestDataGeneration,
        },
        {
          pagelink: "/test-case-generator",
          pageName: "Test Case Generation",
          Icon: TestCaseGeneration,
        },
        {
          pagelink: "/unit-test-generator",
          pageName: "Unit Test Generation",
          Icon:UnitTestGeneration,
        },
        {
          pagelink: "/code-coverage",
          pageName: "Code Coverage",
          Icon: CodeCoverage ,
        },
        {
          pagelink: "/continuous-integration-testing",
          pageName: "CI Testing",
          Icon: CITesting,
        },
        {
          pagelink: "/integration-testing",
          pageName: "Regression Testing",
          Icon: RegressionTesting,
        },
        {
          pagelink: "/api-testing",
          pageName: "API Testing",
          Icon: APITesting,
        },
        {
          pagelink: "/contract-testing",
          pageName: "Contract Testing",
          Icon: ContractTesting,
        },
        {
          pagelink: "https://keploy.io/docs/ci-cd/github/#heading",
          pageName: "Github",
          Icon: Github,
        },
        {
          pagelink: "https://keploy.io/docs/ci-cd/jenkins/#heading",
          pageName: "Jenkins",
          Icon: Jenkins,
        },
        {
          pagelink: "https://keploy.io/docs/ci-cd/gitlab/#heading",
          pageName: "GitLab",
          Icon: Gitlab,
        }
      ]
    }
  ];

  export const Products = [
    
  ];
  
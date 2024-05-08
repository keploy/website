
export const DependencyWaitTimeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );

  export const ManualStubCreationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
    </svg>
  );

  export const DataVariabilityConcernsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );

  export const ErrorHandlingChallengesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  export const ScalabilityTestingDifficultiesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="#0C1C3E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6l3 6h12l3-6" />
      <path d="M3 18l3-6h12l3 6" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  );

  export const CollaborationIcon = () => (
    <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
        <g strokeWidth="2">
          <path
            className="stroke-current text-primary-500"
            d="M32 8C19.6 8 8 19.6 8 32s11.6 24 24 24 24-11.6 24-24S44.4 8 32 8z"
          />
          <path className="stroke-current text-secondary-300" d="M40 24l-8 8-8-8" />
          <path className="stroke-current text-secondary-300" d="M32 40V24" />
        </g>
      </g>
    </svg>
  );
export const featuresData = [
    {
      title: 'Centralized Test Suite',
      icon:<DependencyWaitTimeIcon />,
      description: 'Keploy provides a centralized folder to organize and store all test cases, ensuring easy access and version control for team members.',
    },
    {
      title: 'Integrate with CI/CD Tools',
      icon: <ManualStubCreationIcon />,
      description: "Seamlessly integrate Keploy with your CI/CD pipelines for automated test execution and continuous feedback loops.",
    },
    {
      title: 'Reporting and Analytics',
      icon: <ScalabilityTestingDifficultiesIcon />,
      description: "Visualize testing progress, identify areas for improvement, and make informed decisions to drive continuous improvement in testing practices.",
    },
    {
      title: 'Real-time Test Execution',
      icon: <DataVariabilityConcernsIcon />,
      description: "Monitor test results, identify bottlenecks, and make data-driven decisions to streamline testing processes and improve overall efficiency.",
    },
    {
      title: 'Collaborative Test Management',
      icon: <CollaborationIcon />,
      description: "Share test cases, collaborate on test scripts, and leverage collective insights to drive efficiency and effectiveness in your testing endeavors.",
    }
  ];
  export const faqQuestions =[
    {
        title: "How does Keploy's centralized test case benefit teams?",
        answer:
        "A centralized testsuite streamlines test case management, ensuring easy access, organization, and version control. Teams can efficiently collaborate, share, and reuse test cases, fostering consistency and efficiency in testing efforts."
    },
    {
        title: "Can Keploy accommodate different testing methodologies and frameworks?",
        answer:
        "Yes, Keploy is designed to support various testing methodologies and frameworks, including Agile, Waterfall, and hybrid approaches. It offers flexibility and customization options to adapt to the specific needs of different projects and teams."
    },
    {
        title: "What reporting capabilities does Keploy offer?",
        answer:
        "Keploy provides comprehensive reporting tools to generate insights into test coverage, execution status, and defect trends. Teams can access detailed reports, track progress, and make data-driven decisions to improve testing effectiveness and product quality."
    },
    {
        title: "Is Keploy suitable for teams of all sizes and industries?",
        answer:
        "Keploy caters to teams of all sizes and industries, from small startups to large enterprises. Its scalable features, intuitive interface, and customizable options make it adaptable to diverse testing needs and requirements across different domains and sectors."
    },
]
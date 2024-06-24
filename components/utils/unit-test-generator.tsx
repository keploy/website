
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


export const featuresData = [
    {
      title: 'Enhanced Test Coverage',
      icon:<DependencyWaitTimeIcon />,
      description: 'Improve testing scope to cover complex edge cases effectively.',
    },
    {
      title: 'Detailed Coverage Reports',
      icon: <ManualStubCreationIcon />,
      description: "Obtain detailed coverage reports in Cobertura format for comprehensive analysis.",
    },
    {
      title: 'Automated Test Generation',
      icon: <ScalabilityTestingDifficultiesIcon />,
      description: 'Quickly automate unit test creation, reducing manual effort significantly.',
    },
    {
      title: 'Language Support',
      icon: <DataVariabilityConcernsIcon />,
      description: 'Generate reliable tests for Node and Golang based applications easily.',
    },
    {
      title: 'Time-Effective Solution',
      icon: <ErrorHandlingChallengesIcon />,
      description: "With Keploy, you can optimize testing by automating test creation based on single testcase.",
    }
  ];
  export const faqQuestions =[
    {
      title: "What is Keploy's Unit Test Generator (UTG)?",
      answer:
        "Keploy's UTG automates the creation of unit tests based on code semantics, enhancing test coverage and reliability.",
    },
    {
      title: "Can Keploy handle large codebases efficiently?",
      answer:
        "Yes, Keploy is designed to handle large codebases efficiently, though processing time may vary based on project size and complexity.",
    },
    {
      title: "How does Keploy contribute to improving unit test coverage?",
      answer:
        "By providing a zero code platform for automated testing, Keploy empowers developers to scale up their unit test coverage without extensive coding knowledge. This integration enhances testing reports, ultimately boosting confidence in the product's quality.",
    },
    {
      title: "Is Keploy cost-effective for automated unit testing?",
      answer:"Yes, Keploy optimizes costs by automating repetitive testing tasks and improving overall test efficiency."
    },
    {
      title: "How does Keploy generate coverage reports?",
      answer:"Keploy generates detailed Cobertura format reports, offering insights into test effectiveness and code quality."
    }
  ]

  
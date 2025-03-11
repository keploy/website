
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
      title: 'Automated Test Generation',
      icon:<DependencyWaitTimeIcon />,
      description: 'Automatically generates test cases from API traffic, making it easier to create integration tests without manual effort, ensuring all interactions between components are tested.',
    },
    {
      title: 'Zero-Code Testing',
      icon: <ManualStubCreationIcon />,
      description: "Simplify integration testing by allowing developers to test services without writing extensive test scripts, ensuring faster implementation of integration tests.",
    },
    {
      title: 'CI/CD Integration',
      icon: <ScalabilityTestingDifficultiesIcon />,
      description: "Integrate Keploy with popular CI/CD tools like GitHub, GitLab, Jenkins, and others, enabling developers to incorporate continuous testing into their existing CI pipelines effortlessly.",
    },
    {
      title: 'Mocking and Stubbing Support',
      icon: <DataVariabilityConcernsIcon />,
      description: "Keploy supports the creation of mocks and stubs from real API interactions, enabling developers to simulate dependencies in integration tests, which reduces the complexity of setting up test environments.",
    },
    {
      title: 'End-to-End Validation',
      icon: <ErrorHandlingChallengesIcon />,
      description: "eploy's ability to capture and replay traffic ensures that integration tests cover full end-to-end scenarios, verifying that all services and components interact correctly under various conditions.",
    },
    {
      title: 'Test Consistency Across Environments',
      icon: <CollaborationIcon />,
      description: "Keploy helps maintain test consistency by running the same integration tests across different environments without the need for separate configuration, ensuring reliable and repeatable test results.",
    }
  ];
  export const faqQuestions =[
    {
        title: "What is integration testing and why is it important?",
        answer:
        "Testing interactions between components to ensure they work together. It's crucial for identifying issues between modules and improving software reliability."
    },
    {
        title: "How does Keploy automate testing?",
        answer:
        "Keploy generates test cases from real API traffic and replays them to test integrations automatically, reducing manual effort."
    },
    {
        title: "Is Keploy suitable for microservices?",
        answer:
        "Yes, it captures interactions between microservices, generating tests and mocks for validating service interactions"
    },
    {
        title: "Does Keploy support CI/CD integration?",
        answer:
        "Yes, Keploy integrates with CI tools like Jenkins and GitHub Actions for automated integration tests in your CI/CD pipeline."
    },
    {
        title: "How does Keploy help with mocking and stubbing?",
        answer:
        "It creates stubs and mocks from real traffic to simulate dependencies, aiding in isolated and effective testing."
    },
    {
        title: "Do I need to code for tests in Keploy?",
        answer:
        "No, Keploy's zero-code platform automatically generates integration tests from real interactions, eliminating the need for manual coding.",
    },
]
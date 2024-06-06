
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
      title: 'AI-Generated Tests',
      icon:<DependencyWaitTimeIcon />,
      description: 'Keploy uses AI to create tests automatically, reducing manual effort and ensuring thorough coverage.',
    },
    {
      title: 'Automated E2E Testing',
      icon: <ManualStubCreationIcon />,
      description: "Keploy simplifies automated unit testing by generating test cases based on actual usage patterns.",
    },
    {
      title: 'Enhanced Test Accuracy',
      icon: <ScalabilityTestingDifficultiesIcon />,
      description: "With AI-generated tests, Keploy ensures more accurate and reliable testing outcomes.",
    },
    {
      title: 'Easy Integration',
      icon: <DataVariabilityConcernsIcon />,
      description: "Integrating Keploy into your workflow is straightforward, making AI-generated tests and automated unit testing accessible to all developers.",
    },
    {
      title: 'Reduced Development Time',
      icon: <CollaborationIcon />,
      description: "Keploy’s automated unit testing speeds up the development process, allowing for quicker releases.",
    }
  ];
  export const faqQuestions =[
    {
        title: "What are AI-generated tests in Keploy?",
        answer:
        "AI-generated tests in Keploy are automated test cases created by analyzing real user interactions and application behavior."
    },
    {
        title: "How does Keploy assist with automated E2E testing?",
        answer:
        "Yes, Keploy simplifies automated E2E testing by automatically generating test cases, reducing the need for manual test creation."
    },
    {
        title: "What reporting capabilities does Keploy offer?",
        answer:
        "Keploy provides comprehensive reporting tools to generate insights into test coverage, execution status, and defect trends. Teams can access detailed reports, track progress, and make data-driven decisions to improve testing effectiveness and product quality."
    },
    {
        title: "Is it easy to integrate Keploy into existing workflows?",
        answer:
        "Yes, integrating Keploy into existing workflows such as GitLab, GitHub, Jenkins etc.. is straightforward, making it easy for developers to start using AI-generated tests and automated unit testing."
    },
    {
      title: "What is the primary benefit of using Keploy for automated unit testing?",
      answer:
      "The primary benefit of using Keploy for automated unit testing is the significant reduction in manual effort required for test creation, leading to faster and more efficient testing processes."
  }
]
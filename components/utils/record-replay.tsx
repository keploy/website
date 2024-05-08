
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
      title: 'Intuitive Recording Interface',
      icon:<DependencyWaitTimeIcon />,
      description: 'A user-friendly recording interface, to easily capture interactions with the application.Simply start Keploy to record and begin creating test scenarios effortlessly.',
    },
    {
      title: 'Dynamic Test Case Generation',
      icon: <ManualStubCreationIcon />,
      description: "With Keploy's Record and Replay feature, recorded interactions are automatically translated into test cases.",
    },
    {
      title: 'Error Debugging and Analysis',
      icon: <ScalabilityTestingDifficultiesIcon />,
      description: "Quickly identify and resolve issues with Keploy's built-in error analysis. Pinpoint errors in the playback process, and streamline the troubleshooting process for faster resolution of issues.",
    },
    {
      title: 'Cross-Platform Compatibility',
      icon: <DataVariabilityConcernsIcon />,
      description: "Keploy's Record and Replay feature seamlessly integrates with a wide range of platforms and environments",
    },
    {
      title: 'Customizable Options',
      icon: <ErrorHandlingChallengesIcon />,
      description: "Tailor the settings to suit your testing needs with Keploy's customizable options. Identify noise, add filters, adjust application startup time with custom configuration options.",
    },
    {
      title: 'Collaborative Environment',
      icon: <CollaborationIcon />,
      description: "Share recorded test cases, collaborate on test scripts, and leverage collective insights to drive continuous improvement in testing practices.",
    }
  ];
  export const faqQuestions =[
    {
        title: "How does Keploy's Record and Replay feature work?",
        answer:
        "Keploy uses eBPF instrumentation for Record and Replay, which enables keploy to record interactions with an application and then replay them to generate test cases automatically. It captures user actions and translates them into dynamic test scenarios, streamlining the testing process without the need for manual scripting or coding."
    },
    {
        title: " Is Keploy compatible with different operating systems and platforms?",
        answer:
        "Yes, Keploy seamlessly integrates with a wide range of platforms and environments, offering cross-platform compatibility. Whether you're working on Windows, macOS, or Linux, Keploy ensures consistency and efficiency in your testing processes across diverse operating systems."
    },
    {
        title: "How does Keploy help in error debugging and analysis?",
        answer:
        "Keploy includes built-in error analysis tools that enable users to quickly identify and resolve issues within their applications. By providing detailed insights into errors encountered during testing, Keploy empowers teams to efficiently debug and troubleshoot problems, ensuring the reliability and stability of their software."
    },
    {
        title: "Can I customize replay settings according to my testing requirements?",
        answer:
        "Yes, Keploy offers customizable replay options to tailor the testing process to your specific needs. You can adjust settings such as noise identification, apply filters, and modify application startup time, allowing for greater control and precision in your testing procedures."
    },
    {
        title: "Is Keploy suitable for collaborative testing environments?",
        answer:
        "Keploy provides a collaborative testing environment where teams can share recorded test cases, collaborate on test scripts, and leverage collective insights to enhance testing practices. This collaborative approach fosters teamwork, knowledge sharing, and continuous improvement in software testing processes."
    },
    {
        title: "Does Keploy require extensive training to use its features?",
        answer:
        " Keploy features an intuitive recording interface that makes it easy for users to capture interactions with applications and create test scenarios effortlessly. With its user-friendly design and automated processes, Keploy minimizes the need for extensive training or coding knowledge, enabling teams to streamline their testing processes quickly and efficiently."
    },
]
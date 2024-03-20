import { ReactElement } from "react";

export default function Features() {
    return (
      <section className="bg-neutral-100 text-gray-900 py-20 px-4 sm:px-6"> {/* Set the background to white and text to gray/black */}
        {/* Container to center content and padding */}
        <div className="container mx-auto px-4">
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl text-center  text-accent-200 mb-4">Transforming interactions into realistic, diverse, and customizable stubs for precise testing</h2> {/* Use orange for the heading */}
            <h2 className="h2 font-bold text-secondary-300">
              With Keploy's stub generation{" "}
              <span className="relative inline-block pl-1 border-l-2 border-primary-400" data-aos="fade-right" data-aos-delay="200">{" "}
                <span
                    className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-50 opacity-50"
                    aria-hidden="true"
                />
                <span className="relative text-orange-500 " data-aos="fade-in" data-aos-delay="500">eliminate&nbsp;</span></span>
            </h2>
          </div>
          {/* <div className="max-w-3xl mx-auto text-center ">
            <h2 className="text-3xl text-secondary-300">
              Replicate data from{" "}
              <span className="relative inline-block pl-1 border-l-2 border-primary-400" data-aos="fade-right" data-aos-delay="200">{" "}
                <span
                    className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-50 opacity-50"
                    aria-hidden="true"
                />
                <span className="relative text-accent-100 " data-aos="fade-in" data-aos-delay="500">any source &nbsp;</span></span>
            </h2>
          </div> */}
          
          {/* Grid of features */}
          <div className="flex flex-col flex-wrap justify-center">
          <div className="flex flex-col sm:flex-row justify-center">
        {blocksData.slice(0, 3).map((block, index) => (
          <TextBlock key={index} heading={block.title} subHeading={block.description} icon={block.icon} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center">
        {blocksData.slice(3, 5).map((block, index) => (
          <TextBlock key={index} heading={block.title} subHeading={block.description} icon={block.icon}  />
        ))}
      </div>
    </div>
        </div>
      </section>
    );
  }


//   const TextBlock = (props: { heading: string, subHeading: string }) => {
//     return (
//       <div className="flex flex-col items-center justify-center bg-white text-black p-6 hover:border-orange-500 border border-transparent shadow-lg hover:shadow-xl transition-shadow duration-200 w-auto max-w-xs">
//         <div className="mb-8">
//           <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-white">
//             {/* icon placeholder */}
//           </div>
//         </div>
//         <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">{props.heading}</h4>
//         <p className="text-gray-600 text-center">{props.subHeading}</p>
//       </div>
//     );
//   };
  const TextBlock = (props: { heading: string, subHeading: string ,icon:ReactElement}) => {
    // Add Tailwind classes for gradient on hover
    return (
      <div className="flex flex-col items-center justify-center bg-neutral-100 text-black p-4 border-transparent shadow-md transition-shadow duration-200 w-auto max-w-xs hover:bg-gradient-to-r from-orange-100 via-orange-100 to-orange-200">
        <div className="mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full border-1 border-white">
          {props.icon}
          </div>
        </div>
        <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">{props.heading}</h4>
        <p className="text-gray-600 text-center">{props.subHeading}</p>
      </div>
    );
  };

  export const DependencyWaitTimeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );

  export const ManualStubCreationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
    </svg>
  );

  export const DataVariabilityConcernsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );

  export const ErrorHandlingChallengesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  export const ScalabilityTestingDifficultiesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF914D" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6l3 6h12l3-6" />
      <path d="M3 18l3-6h12l3 6" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  );

  
const blocksData = [
  {
    title: 'Dependency Wait Time',
    icon:<DependencyWaitTimeIcon />,
    description: 'Eliminates waiting for dependent components, allowing parallel work and accelerating the development process.'
  },
  {
    title: 'Manual Stub Creation',
    icon:<ManualStubCreationIcon />,
    description: 'Removes the laborious task of manually creating stubs, saving significant time and effort in the testing process.'
  },
  {
    title: 'Data Variability Concerns',
    icon: <DataVariabilityConcernsIcon />,
    description: 'Provides diverse and dynamic data sets automatically, removing concerns about generating varied inputs for testing scenarios.'
  },
  {
    title: 'Error Handling Challenges',
    icon:<ErrorHandlingChallengesIcon />,
    description: 'Streamlines testing of error responses and edge cases, ensuring robust error handling mechanisms without extensive manual testing.'
  },
  {
    title: 'Scalability Testing Difficulties',
    icon:<ScalabilityTestingDifficultiesIcon />,
    description: 'Simplifies scalability testing by automatically stubbing system performance under various loads.'
  }
];
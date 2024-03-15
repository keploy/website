export default function Features() {
    return (
      <section className="bg-white text-gray-900 py-20 px-4 sm:px-6"> {/* Set the background to white and text to gray/black */}
        {/* Container to center content and padding */}
        <div className="container mx-auto px-4">
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Key Features of Our Tool</h2> {/* Use orange for the heading */}
            <p className="text-xl mt-4">
              Transforming interactions into realistic, diverse, and customizable stubs for precise testing.
            </p>
          </div>
          
          {/* Grid of features */}
          <div className="flex flex-col flex-wrap justify-center">
      <div className="flex justify-center">
        {blocksData.slice(0, 3).map((block, index) => (
          <TextBlock key={index} heading={block.title} subHeading={block.description} />
        ))}
      </div>
      <div className="w-full flex justify-center"> {/* Ensure this div takes full width and centers its children */}
        {blocksData.slice(3, 5).map((block, index) => (
          <TextBlock key={index} heading={block.title} subHeading={block.description} />
        ))}
      </div>
    </div>
        </div>
      </section>
    );
  }


  const TextBlock = (props: { heading: string, subHeading: string }) => {
    return (
      <div className="flex flex-col items-center justify-center bg-white text-black p-6 hover:border-orange-500 border border-transparent shadow-lg hover:shadow-xl transition-shadow duration-200 w-auto max-w-xs">
        <div className="mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black border-2 border-white">
            {/* icon placeholder */}
          </div>
        </div>
        <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">{props.heading}</h4>
        <p className="text-gray-600 text-center">{props.subHeading}</p>
      </div>
    );
  };
  
const blocksData = [
  {
    title: 'Dependency Wait Time',
    icon: 'dependencyIcon', // Replace with your actual icon component or path
    description: 'Eliminates waiting for dependent components, allowing parallel work and accelerating the development process.'
  },
  {
    title: 'Manual Stub Creation',
    icon: 'manualStubIcon', // Replace with your actual icon component or path
    description: 'Removes the laborious task of manually creating stubs, saving significant time and effort in the testing process.'
  },
  {
    title: 'Data Variability Concerns',
    icon: 'dataVariabilityIcon', // Replace with your actual icon component or path
    description: 'Provides diverse and dynamic data sets automatically, removing concerns about generating varied inputs for testing scenarios.'
  },
  {
    title: 'Error Handling Challenges',
    icon: 'errorHandlingIcon', // Replace with your actual icon component or path
    description: 'Streamlines testing of error responses and edge cases, ensuring robust error handling mechanisms without extensive manual testing.'
  },
  {
    title: 'Scalability Testing Difficulties',
    icon: 'scalabilityTestingIcon', // Replace with your actual icon component or path
    description: 'Simplifies scalability testing by automatically stubbing system performance under various loads.'
  }
];
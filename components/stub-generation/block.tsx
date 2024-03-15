import { ReactComponentElement } from "react";

const Item = (props:{ title:string, description:string, SvgComponent:Function }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded shadow-xl h-full text-center">
      <props.SvgComponent />
      <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">{props.title}</h4>
      <p className="text-gray-600 mb-4">{props.description}</p>
      {/* <button className="mt-auto bg-secondary-500 text-white text-sm px-4 py-2 rounded shadow hover:bg-secondary-600 transition-colors">Learn More</button> */}
    </div>
  );
};

const FasterDevSvg = () => (
     <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-secondary-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-primary-500" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-secondary-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-primary-500" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
);

export default function ProblemBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gradient-to-b from-secondary-500 to-secondary-100  pointer-events-none" aria-hidden="true"/>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"/>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className=" w-full text-center pb-6 md:pb-10">
          <h1 className="h1 mb-4 text-secondary-300 whitespace-nowrap">Smart generation - Enhanced development</h1>
          <div className="flex justify-center w-full">
          <h3 className="h3 text-xl text-gray-600">  &nbsp; ❌ &nbsp; &nbsp; Employ &nbsp; &nbsp; ❌ &nbsp;  </h3>

          </div>
          </div>

          {/* Items */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Item 
              title="Faster Development and Testing" 
              description="Enables teams to validate components without waiting for the entire system to be implemented." 
              SvgComponent={FasterDevSvg}
            />
            <Item 
              title="Isolation of Components" 
              description="Ensure that each part of the system can be tested without relying on the complete system." 
              SvgComponent={FasterDevSvg}
            />
            <Item 
              title="Improved Collaboration" 
              description="Promotes collaboration between teams by allowing them to work independently on different components." 
              SvgComponent={FasterDevSvg}
            />
            <Item 
              title="Comprehensive Testing Scenarios" 
              description="Simulate various scenarios helping testers assess different system responses and identify potential issues before deployment." 
              SvgComponent={FasterDevSvg}
            />
            <Item 
              title="Cost-Effectiveness" 
              description="Less time and effort required to create and maintain compared to fully functional services." 
              SvgComponent={FasterDevSvg}
            />
            <Item 
              title="Early Detection of Issues" 
              description="Allows teams to identify and address problems in the early stages of development, reducing the likelihood of costly fixes later in the process." 
              SvgComponent={FasterDevSvg}
            />
            </div>
            <div className="flex justify-center md:justify-center gap-4 mt-4">
                <a className="btn text-secondary-300 bg-primary-300 hover:text-white" href="https://forms.gle/jGBbyRyh9H7AKXZX6">Try Keploy</a>
                {/* <a className="btn text-white bg-secondary-300 hover:text-primary-300" href="https://www.github.com/keploy/keploy">Try Locally</a> */}
              </div>
        </div>
      </div>
    </section>
  )
}
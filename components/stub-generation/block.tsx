import { ReactComponentElement } from "react";
import { blocksData } from "../utils/stub-generation";
const Item = (props:{ title:string, description:string, SvgComponent:Function }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded shadow-xl h-full text-center">
      {props.SvgComponent()}
      <h4 className="text-xl font-bold leading-snug tracking-tight text-accent-200 mb-1">{props.title}</h4>
      <p className="text-gray-600 mb-4">{props.description}</p>
      {/* <button className="mt-auto bg-secondary-500 text-white text-sm px-4 py-2 rounded shadow hover:bg-secondary-600 transition-colors">Learn More</button> */}
    </div>
  );
};

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
          <h3 className="h3 text-xl text-gray-600 flex justify-center items-center">
  <span className="inline-block transform rotate-180">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  </span>
  &nbsp; Employ &nbsp;
  <span className="inline-block transform rotate-180">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  </span>
</h3>
          </div>
          </div>

          {/* Items */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {blocksData.map((block, index) => (
              <Item 
                key={index}
                title={block.title} 
                description={block.description} 
                SvgComponent={block.SvgComponent}
              />
            ))}
          </div>
            <div className="flex justify-center md:justify-center gap-4 mt-4">
                <a className="btn text-secondary-300 bg-primary-300 hover:text-white" href="https://www.github.com/keploy/keploy">Try Keploy</a>
              </div>
        </div>
      </div>
    </section>
  )
}
import { ReactComponentElement } from "react";

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

export const FasterDevIcon = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <path d="M13 2L3 14h9l-1 8 9-12h-9l1-8z" />  </svg>);
export const IsolationIcon = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <rect x="3" y="3" width="6" height="6" rx="1" />    <rect x="15" y="3" width="6" height="6" rx="1" />    <rect x="3" y="15" width="6" height="6" rx="1" />    <rect x="15" y="15" width="6" height="6" rx="1" />  </svg>);
export const CollaborationIcon = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <circle cx="9" cy="9" r="3" />    <circle cx="15" cy="15" r="3" />    <line x1="9" y1="9" x2="15" y2="15" />  </svg>);
export const TestingScenariosIcon = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">    <path d="M3 17l6-6-4-4V7l4 4 6-6" />    <circle cx="17" cy="17" r="3" />  </svg>);
export const CostEffectivenessIcon = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">    <path d="M12 1v22M5 7h14M3 14h18M8 11l1 1 3-3M16 16l-1 1-3-3" />  </svg>);
export const EarlyDetectionIcon = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">    <path d="M12 9v6l3 3m4-12v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9" />    <path d="M6 6l12-4v4H6z" />  </svg>);
export const MdiLightningBolt = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <path d="M13 2L3 14h9l-1 8 9-12h-9l1-8z" />  </svg>);
export const FluentPuzzleCubePiece20Filled = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <rect x="3" y="3" width="6" height="6" rx="1" />    <rect x="15" y="3" width="6" height="6" rx="1" />    <rect x="3" y="15" width="6" height="6" rx="1" />    <rect x="15" y="15" width="6" height="6" rx="1" />  </svg>);
export const OpenmojiCollaboration = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <circle cx="9" cy="9" r="3" />    <circle cx="15" cy="15" r="3" />    <line x1="9" y1="9" x2="15" y2="15" />  </svg>);
export const RiCheckboxMultipleLine = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <path d="M3 17l6-6-4-4V7l4 4 6-6" />    <circle cx="17" cy="17" r="3" />  </svg>);
export const StreamlineBrowserCheck = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <polyline points="3 7 9 7 12 3 21 3 21 21 3 21 3 7" />    <path d="M9 15l2 2 4-4" />  </svg>);
export const PsPiggyBankCoins = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <path d="M20 16V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" />    <circle cx="12" cy="16" r="1" />    <path d="M8 20a2 2 0 0 0 2-2" />    <path d="M16 20a2 2 0 0 1-2-2" />  </svg>);
export const MaterialSymbolsLightEarlyOnOutline = () => (  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 24 24" fill="#FF914D" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">    <path d="M12 9v6l3 3m4-12v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9" />    <path d="M6 6l12-4v4H6z" />  </svg>);
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
            <Item 
              title="Faster Development and Testing" 
              description="Enables teams to validate components without waiting for the entire system to be implemented." 
              SvgComponent={MdiLightningBolt}
            />
            <Item 
              title="Isolation of Components" 
              description="Ensure that each part of the system can be tested without relying on the complete system." 
              SvgComponent={FluentPuzzleCubePiece20Filled}
            />
            <Item 
              title="Improved Collaboration" 
              description="Promotes collaboration between teams by allowing them to work independently on different components." 
              SvgComponent={OpenmojiCollaboration}
            />
            <Item 
              title="Comprehensive Testing Scenarios" 
              description="Simulate various scenarios helping testers assess different system responses and identify potential issues before deployment." 
              SvgComponent={StreamlineBrowserCheck}
            />
            <Item 
              title="Cost-Effectiveness" 
              description="Less time and effort required to create and maintain compared to fully functional services." 
              SvgComponent={PsPiggyBankCoins}
            />
            <Item 
              title="Early Detection of Issues" 
              description="Allows teams to identify and address problems in the early stages of development, reducing the likelihood of costly fixes later in the process." 
              SvgComponent={MaterialSymbolsLightEarlyOnOutline}
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
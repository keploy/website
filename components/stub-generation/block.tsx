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
export const FluentPuzzleCubePiece20Filled = () => (
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
      <g transform="translate(22, 22)" strokeWidth="2">
        <path className="stroke-current text-secondary-300" d="M15.794 1.29a1 1 0 0 1 1.414 0l1.503 1.503a1 1 0 0 1 0 1.414L17.208 5.71a1 1 0 0 1-1.414 0L14.29 4.207a1 1 0 0 1 0-1.414l1.503-1.503Z" />
        <path className="stroke-current text-primary-500" d="M5.5 17H7v-4H3v1.5A2.5 2.5 0 0 0 5.5 17ZM7 8v4H3V8h4Zm5 4H8V8h4v4Zm-4 1h4v4H8v-4Zm5-5v4h4V8h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM3 7h4V3H5.5A2.5 2.5 0 0 0 3 5.5V7Zm5 0V3h4v4H8Z" />
      </g>
    </g>
  </svg>
);
 const MdiLightningBolt = () => (
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
      <g transform="translate(20, 16)" strokeWidth="2">
        <path className="stroke-current text-secondary-300" d="M11 15H6l7-14v8h5l-7 14v-8Z" />
      </g>
    </g>
  </svg>
);
 const OpenmojiCollaboration = () => (
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
      <g strokeWidth="2">
        <circle className="stroke-current text-secondary-300" cx="21" cy="17" r="3"></circle>
        <circle className="stroke-current text-secondary-300" cx="55.992" cy="26.324" r="3"></circle>
        <circle className="stroke-current text-secondary-300" cx="29.993" cy="47.008" r="3"></circle>
        <path className="stroke-current text-secondary-300" d="m15.437 27.104l3.081-2.714l4.834-.198l2.969 2.827l.684 3.98l-12.081-.008zm35.054 9.326l3.082-2.714l4.834-.198l2.968 2.827l.685 3.98l-12.082-.007zM24.485 57.112l3.081-2.714l4.835-.198l2.968 2.827l.684 3.98l-12.081-.008z"></path>
        <path className="stroke-current text-primary-500" strokeLinecap="round" strokeLinejoin="round" d="M15 30s1-4.311 3-5.311s4-1 6 0S27 30 27 30"></path>
        <path className="stroke-current text-primary-500" strokeLinecap="round" strokeLinejoin="round" d="M49.992 39.324s1-4.311 3-5.311s4-1 6 0s3 5.31 3 5.31"></path>
        <path className="stroke-current text-primary-500" strokeLinecap="round" strokeLinejoin="round" d="M23.993 60.008s1-4.311 3-5.311s4-1 6 0s3 5.31 3 5.31"></path>
      </g>
    </g>
  </svg>
);
 const RiCheckboxMultipleLine = () => (
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
      <g transform="translate(12, 12)" strokeWidth="1">
        <path className="stroke-current text-secondary-300" strokeLinecap="round" strokeLinejoin="round" d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.992C17 21.55 16.551 22 15.992 22H3.008A1.006 1.006 0 0 1 2 20.992l.003-12.985C2.003 7.451 2.452 7 3.01 7H7Zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3Zm6 2H4.003L4 20h11V9Zm-6.498 9l-3.535-3.536L6.38 13.05l2.121 2.122l4.243-4.243l1.414 1.414L8.502 18Z" />
      </g>
    </g>
  </svg>
);
const StreamlineBrowserCheck = () => (
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
      {/* Centering the icon group within the viewBox */}
      <g transform="translate(21.5, 21.5) scale(1.5)" strokeWidth="2" className="stroke-current text-primary-500">
        <path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-12 3h13" />
        <path d="m4 9l2 1.5l3.5-4" />
      </g>
    </g>
  </svg>
);
const PsPiggyBankCoins = () => (
  <svg className="w-16 h-16 p-1 -mt-1 mb-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" >
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
      <g transform="translate(16, 10) scale(0.06)" fill="currentColor">
        <path d="M469 192h-32q-7 0-10-6q-9-14-20-22l-2-2V64h-21q-32 0-60 28l-2 2v-7q0-35-25.5-61T235 0q-35 0-60.5 25T149 87q0 13 2 20q-27 10-55 38l-43-15l-17-17q-14-14-30 0q-13 15 0 30l26 26l36 12q-25 38-25 86v32l19 175q2 16 14.5 27t28.5 11h29q13 0 25-8t16-22l15-43q33 10 72 7l13 36q12 28 41 28h30q16 0 28.5-11.5T388 471l9-85q29-29 40-60q3-8 13-8h4q24 0 42-18t18-42v-23q-2-18-14.5-30.5T469 192zM237 43q18 0 31.5 13T282 87q0 19-13 32t-32 13q-19-2-32-14.5T192 87t13-31t32-13zm232 217q0 7-5 12t-12 5h-4q-36 0-53 37q-9 22-34 49l-7 6l-11 100h-29l-24-68l-17 2q-11 2-28 2q-29 0-62-10l-21-9l-28 83h-29L85 297v-30q0-43 26-75q12-4 15-13v-4q13-13 45-30q26 30 64 30q47 0 72-38h2q14 7 41-11q2-1 6-4.5t7-4.5v64l6 7q6 6 11 10l5.5 5.5l4.5 5.5q18 28 47 28h32v23zm-128-68q0 9-6 15t-15 6t-15-6t-6-15t6-15t15-6t15 6t6 15z" />
      </g>
    </g>
  </svg>
);
const MaterialSymbolsLightEarlyOnOutline = () => (
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" >
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-primary-300" width="64" height="64" rx="32" />
      <g transform="translate(20, 20) scale(1.75)" fill="currentColor">
        <path d="M17 20.692q-1.115 0-1.904-.788q-.788-.789-.788-1.904q0-1.135.788-1.913q.789-.78 1.904-.78q1.135 0 1.913.78q.78.778.78 1.913q0 1.115-.78 1.904q-.778.788-1.913.788Zm-.442-6.615v-1.77h.884v1.77h-.884Zm0 9.615v-1.769h.884v1.77h-.884Zm3.548-8.17l-.633-.628l1.252-1.252l.627.633l-1.246 1.246Zm-6.812 6.81l-.627-.607l1.252-1.271l.627.627l-1.252 1.252Zm7.63-3.89v-.884h1.768v.884h-1.769Zm-9.616 0v-.884h1.769v.884h-1.77Zm9.417 3.89l-1.246-1.251l.627-.627l1.252 1.246l-.633.633Zm-6.812-6.805l-1.246-1.252l.627-.627l1.252 1.246l-.633.633ZM5.615 21q-.69 0-1.152-.462Q4 20.075 4 19.385V6.615q0-.69.463-1.152Q4.925 5 5.615 5h1.77V2.77h1.077V5h7.153V2.77h1V5h1.77q.69 0 1.152.463q.463.462.463 1.152v4H5v8.77q0 .23.192.423q.193.192.423.192h4v1h-4ZM5 9.615h14v-3q0-.23-.192-.423Q18.615 6 18.385 6H5.615q-.23 0-.423.192Q5 6.385 5 6.615v3Zm0 0V6v3.615Z"></path>
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
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import React from 'react';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section  className="max-sm:w-[100vw]   flex flex-col items-center mt-[6rem] gap-10 justify-center relative text-center h-[60vh] w-[70vw] m-auto ">
          <img  src="https://www.adecco.com/en-us/-/media/project/adecco/adeccous/resources/benefits-for-workers-and-employers-who-return-to-work-header.jpg?h=800&iar=0&w=1920&hash=C26F834AF70384665C47049C19FEBFF8" className='z-[0] absolute  left-0  rounded-lg   opacity-70 h-[100%] w-[100%]'></img>
          <div className='absolute  left-0 h-[100%] w-[100%] z-[0] bg-black opacity-70'></div>
          <h1 key="logo" className="text-4xl text-white relative opacity-85 lg:text-5xl  max-sm:text-xl z-[100]">
            API tests faster than unit tests,
            <br className="hidden lg:flex  text-white  z-[100] opacity-85" /> from user traffic.
          </h1>
          <p key="logo" className="text-white  z-[100] opacity-85 text-md basiersquare-medium lg:text-xl">
            Come join us.
          </p>
          <a
            href="#jobs"
            key="logo"
            className="bg-[#FF914D] w-[300px] flex justify-center z-[100]  rounded-lg  py-3 px-4 text-white"

          >
            See open positions{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </section>

     

        <section className="mx-auto mt-[3rem]  mb-[3rem] max-w-7xl  lg:mb-[8rem] lg:mt-[8rem]">
          <h2 className="text-3xl lg:text-5xl max-md:text-center">Perks & Benefits</h2>
          <div className="mt-12 grid grid-cols-1 justify-start gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Unlimited Holiday", "Competitive Salary", "Stock Options", "In-house Bar", "Growth", "Private Healthcare", "Work from Home", "Retirement"].map((perk) => (
              <div key={perk} className="rounded-md bg-[#e2e8f0] py-4 px-4">
                <h3>{perk}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-[10rem] max-w-7xl" id="jobs">
          <h2 className="text-3xl lg:text-5xl max-md:text-center">Current Openings</h2>
          <div className="mt-12 flex flex-col space-y-6">
            {[
              { title: "Junior Frontend Developer", location: "United Kingdom, Remote", salary: "£30k" },
              { title: "Software Engineer, Web", location: "United Kingdom, Remote", salary: "£45k" },
              { title: "Software Engineer, Mobile", location: "United Kingdom, Remote", salary: "£45k" },
              { title: "Senior Software Engineer, Security", location: "United Kingdom, Remote", salary: "£85k+" },
              { title: "Senior Software Engineer, Web", location: "United Kingdom, Remote", salary: "£85k+" }
            ].map((job) => (
              <span
                key={job.title}
                href="/"
                className="flex w-full flex-col rounded-lg bg-[#e2e8f0] py-6 px-6 lg:flex-row lg:items-center"
              >
                <div className="basis-1/2">
                  <span className="ogg-medium text-xl text-[#2d2d2d] lg:text-2xl">{job.title}</span>
                </div>
                <div className="basis-1/2">
                  <span className="plain-regular text-md text-[#93928e] lg:text-lg">{job.location}</span>
                </div>
                <div>
                  <span href="/" className="text-md lg:text-lg">{job.salary}</span>
                </div>
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

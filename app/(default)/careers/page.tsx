import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import React from 'react';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="max-md:p-10 mx-auto mt-20 mb-[7rem] justify-center space-y-3 pt-4 text-center md:px-6 lg:mt-[11rem] lg:mb-[14.5rem] lg:space-y-6">
          <h1 key="logo" className="text-4xl lg:text-7xl">
            API tests faster than unit tests,
            <br className="hidden lg:flex" /> from user traffic.
          </h1>
          <p key="logo" className="text-md basiersquare-medium lg:text-xl">
            Come join us.
          </p>
          <a
            href="#jobs"
            key="logo"
            className="bg-[#FF914D]  inline-flex items-center rounded-lg  py-3 px-4 text-white"
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

        <section className="mx-auto mt-[3rem] mb-[3rem] flex max-w-7xl lg:mb-[8rem] lg:mt-[8rem]">
          <p className="w-[90rem] text-xl lg:text-3xl max-md:justify-center justify-center">
            Keploy is a developer-centric API testing tool that creates tests along with built-in mocks, faster than unit tests. Keploy not only records API calls but also records database calls and replays them during testing, making it easy to use, powerful, and extensible.
          </p>
        </section>

        <section className="mx-auto mt-[3rem] mb-[3rem] max-w-7xl lg:mb-[8rem] lg:mt-[8rem]">
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

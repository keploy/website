"use client";
import RootLayout from "@/app/layout";
import CaseStudyCard from "@/components/caseStudyCard";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import CaseStudySearch from "@/components/caseStudySearch";
import { useState } from "react";

const pageMetadata = {
  title:
    "Case Studies by Keploy | One-click API test with OpenSource and Free API Testing Tool",
  description:
    "Detailed case studies by Keploy about optimizing and testing using keploy API Tools. Learn how Keploy helps you automate API testing and improve code coverage",
  keywords:
    "API test, FREE API Testing Tool, API Testing tool, case studies, keploy case studies",
};

const sampleCaseStudies = [
  {
    title: "Read how Maruti Suzuki Managed to reduce their TAT by 50%",
    text: "Read how Maruti Suzuki Managed to reduce their TAT by 50%",
    imageUrl: "/images/gradient.png",
    tags: ["Maruti Suzuki", "TAT", "Reduction"],
  },
  {
    title:
      "Read how Company X Increased productivity by 20% using Keploy API tests",
    text: "Read how Company X Increased productivity by 20%",
    imageUrl: "/images/gradient.png",
    tags: ["Company X", "Productivity", "Keploy API tests"],
  },
  {
    title: "Read how Company Y Reduced their testing time by 30% using Keploy",
    text: "Read how Company Y Reduced their testing time by 30%",
    imageUrl: "/images/gradient.png",
    tags: ["Company Y", "Testing", "Keploy"],
  },
  {
    title:
      "Read how Company Z Improved their code coverage by 40% using Keploy",
    text: "Read how Company Z Improved their code coverage by 40%",
    imageUrl: "/images/gradient.png",
    tags: ["Company Z", "Code Coverage", "Keploy"],
  },
  {
    title: "Read how Company A Reduced their testing time by 30% using Keploy",
    text: "Read how Company A Reduced their testing time by 30%",
    imageUrl: "/images/gradient.png",
    tags: ["Company A", "Testing", "Keploy"],
  },
  {
    title:
      "Read how Company B Improved their code coverage by 40% using Keploy",
    text: "Read how Company B Improved their code coverage by 40%",
    imageUrl: "/images/gradient.png",
    tags: ["Company B", "Code Coverage", "Keploy"],
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
    
  return (
    <RootLayout metadata={pageMetadata}>
      <div className="overflow-x-clip relative flex flex-col items-center">
        <div className=" flex flex-col h-[80svh] justify-center items-start min-w-[60vw] mx-10 md:mx-auto overflow-x-clip max-w-[100vw]">
          <div className="max-w-[80vw] px-4 sm:px-6 lg:px-8 mx-auto mb-10 flex-nowrap text-nowrap">
            <a
              href="/newcasestudy"
              className="bg-blue-600 bg-[url('/images/gradient.png')] bg-no-repeat bg-cover bg-center px-4 py-4 rounded-lg text-center"
            >
              <p className="me-2 inline-block text-white font-bold flex-shrink">
                Latest Case Study by Keploy
              </p>
              <p className=" hidden sm:inline-flex py-2 px-3 items-center gap-x-2 text font-medium rounded-full underline underline-offset-8 text-white hover:underline-offset-2 transition-all">
                Read now
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </a>
          </div>
          <h1 className="sm lg:text-5xl text-5xl font-extrabold leading-tighter tracking-tighter my-5 bg-clip-text text-left text-transparent bg-gradient-to-r from-gradient-300 to-gradient-400">
            Case Studies
          </h1>
          <p className="text-left ml-1 text-secondary-100 max-w-3xl">
            Detailed case studies by Keploy about optimizing and testing using
            keploy API Tools. Learn how Keploy helps you automate API testing
            and improve code coverage.
          </p>
          <Image
            src="/images/gradient-star.png"
            alt=""
            width={300}
            height={300}
            className="absolute left-[0%] top-[10svh] -z-10 max-w-[300px] max-h-[300px] w-[30vw] h-[30vw] animate-float"
          />
          <div className="absolute right-[90%] md:right-[-10%] md:top-[35svh] top-[50svh] rounded-full overflow-clip aspect-square max-w-[300px] max-h-[300px] w-[30vw] h-[30vw] -z-10 drop-shadow-[0px_0px_50px_rgba(254,66,41,1)] animate-float">
            <Image
              src="/images/gradient.png"
              alt=""
              width={700}
              height={400}
              className="-z-10 w-full h-full object-fill"
            />
          </div>
          <div className="absolute right-[5%] top-[15svh] md:left-[-5%] md:top-[60svh]  rounded-full overflow-clip aspect-square max-w-[200px] max-h-[200px] w-[20vw] h-[20vw] -z-10 drop-shadow-[0px_0px_50px_rgba(254,66,41,1)] animate-float">
            <Image
              src="/images/gradient.png"
              alt=""
              width={700}
              height={400}
              className="-z-10 w-full h-full object-fill"
            />
          </div>
        </div>
        <CaseStudySearch setSearch={setSearch} />
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10 md:max-w-[70vw] max-w-[80vw] w-full mb-10">
          {sampleCaseStudies.filter(e => e.text.toLowerCase().includes(search.toLowerCase())).map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              title={caseStudy.title}
              text={caseStudy.text}
              imageUrl={caseStudy.imageUrl}
              tags={caseStudy.tags}
            />
          ))}
        </div>
      </div>
      <Footer />
    </RootLayout>
  );
}

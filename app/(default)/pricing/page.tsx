import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import FAQ, { Question } from "@/components/pillar-page/faq";
import Link from "next/link";
import { Bullets } from "@/components/bullets";

const BulletsData: Record<string, string[]> = {
  Card1: [
    "Record and replay complex, distributed API flows as mocks and stubs.",
    "Lorem ipsum dolor, sit amet  cupiditate. Hic, nostrum consequuntur.",
    "unit testing libraries for combined test coverage",
  ],
  Card2: [
    "Convert API calls as tests and mocks/stubs",
    "Lorem ipsum dolor, sit amet  cupiditate. Hic, nostrum consequuntur.",
    "unit testing libraries for combined test coverage",
  ],
  Card3: [
    "Convert API calls as tests and mocks/stubs",
    "Lorem ipsum dolor, sit cupiditate. Hic, nostrum consequuntur.",
    "unit testing libraries for combined test coverage",
  ],
};

const Questions: Question[] = [
  {
    title: "What is Custom Plan?",
    answer: "It's a FAQ component built with Tailwind CSS.",
  },
  {
    title: "How does it work?",
    answer: "Click on a title to reveal the answer.",
  },
  {
    title: "Is Enterprise Plan necessary?",
    answer: "Not necessary, but it simplifies styling.",
  },
  {
    title: "Is Custom Plan necessary?",
    answer: "A small Startup/Projects have great place start.",
  },
  {
    title: "What is Enterprise Plan?",
    answer: "Not necessary, but it simplifies by book a call.",
  },
];
export default function () {
  return (
    <div>
      <Header />

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 gap-16">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <div className="max-w-3xl  mx-auto text-center ">
                <h1 className="mb-4 h2 text-secondary-300">
                  Find perfect plan for you!
                </h1>
              </div>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-lg sm:text-xl text-center text-accent-200 mb-8 leading-snug sm:leading-normal lg:text-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  <b>Open Source</b> Try our free plan and upgrade the plan.
                  Cumque accusantium id quas ullam reiciendis quia?
                </p>
              </div>
            </div>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center space-x-4"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div className="mb-4">
                {/* Wrapping Link with NeonButton */}
                <Link
                  className="btn text-slate-100 rounded-[12px] bg-green-700 hover:text-white w-full sm:w-auto sm:mb-0"
                  href="https://app.keploy.io/"
                >
                  Full Features List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto px-3 grid max-w-[83rem] grid-cols-1 gap-4 items-center  md:grid-cols-2 lg:grid-cols-4">
          {/* Free tier Plan */}
          <div className=" bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-[#FF914D] text-base font-semibold leading-7">
                Existing
              </h3>
              <p className="mt-4 gap-x-2">
                <span className="text-gray-900 text-4xl font-bold tracking-tight ">
                  Free
                </span>
              </p>
              <p className="text-gray-600 mt-6 text-sm leading-7  h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, si Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
            <ul className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 ">
              <Bullets lists={BulletsData.Card1} />
              <button className="text-[#FF914D] ring-1 ring-inset ring-[#FF914D] hover:ring-[#FF914D] focus-visible:outline-[#FF914D] mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                Button
              </button>
              <span>Questions?</span>
            </ul>
          </div>
          {/* Custom Plan */}
          <div className=" bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-[#FF914D] text-base font-semibold leading-7">
                Custom
              </h3>
              <p className="mt-4 gap-x-2">
                <span className="text-gray-900 text-4xl font-bold tracking-tight ">
                  $5
                </span>
              </p>
              <p className="text-gray-600 mt-6 text-sm leading-7  h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, nihil. Totam, quas! Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <ul className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 ">
              <Bullets lists={BulletsData.Card1} />
              <button className="text-[#FF914D] ring-1 ring-inset ring-[#FF914D] hover:ring-[#FF914D] focus-visible:outline-[#FF914D] mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                Buy Now
              </button>
              <span>Questions?</span>
            </ul>
          </div>

          {/* Perfect Plan */}
          <div className=" bg-[#00163D]  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-[#FF914D] text-base font-semibold leading-7">
                Perfect
              </h3>
              <p className="mt-4 gap-x-2">
                <span className="text-white text-4xl font-bold tracking-tight ">
                  $13
                </span>
              </p>
              <p className="text-white mt-6 text-sm leading-7  h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, nihil. Totam, quas!
              </p>
            </div>

            <ul className=" text-white mt-8 space-y-3 text-sm leading-6 sm:mt-10 ">
              <Bullets lists={BulletsData.Card2} />
              <button className="text-white ring-1 ring-inset bg-[#d67538]  mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                Buy Now
              </button>
              <span>Questions?</span>
            </ul>
          </div>
          {/* Enterprise Plan */}
          <div className=" bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-[#FF914D] text-base font-semibold leading-7">
                Enterprise
              </h3>
              <p className="mt-4 gap-x-2">
                <span className=" text-gray-400 text-sm pb-0 block h-6 ">
                  Lorem, ipsum dolor.
                </span>
                <span className="text-gray-900 text-4xl font-bold tracking-tight ">
                  $522
                </span>
              </p>
              <p className="text-gray-600 mt-6 text-sm leading-7  h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, nihil. Totam, quas!
              </p>
            </div>

            <ul className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 ">
              <Bullets lists={BulletsData.Card3} />
              <button className="text-[#FF914D] ring-1 ring-inset ring-[#FF914D] hover:ring-[#FF914D] focus-visible:outline-[#FF914D] mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                Book a Call
              </button>
              <span>Questions?</span>
            </ul>
          </div>
        </div>
      </section>
      {/*  FAQ section */}
      <section>
        <div className="max-w-full flex items-center justify-center mx-auto py-20 sm:py-40">
          <FAQ questions={Questions} />;
        </div>
      </section>
      <Footer />
    </div>
  );
}

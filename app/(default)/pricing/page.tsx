import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import {
  Bullets,
  bulletsType,
} from "@/components/webstories/components/Bullets";
import { FAQ } from "@/components/webstories/components/FAQ";
import { Heading } from "@/components/webstories/components/Heading";
import Link from "next/link";

export const lists: bulletsType = [
  "A growing library of awesome components",
  "Lorem ipsum dolor, sit amet  cupiditate. Hic, nostrum consequuntur.",
  "A contact library of lorem components",
];

const faqData = [
  {
    question: "What is this component?",
    answer: "It's a FAQ component built with Tailwind CSS.",
  },
  {
    question: "How does it work?",
    answer: "Click on a question to reveal the answer.",
  },
  {
    question: "Is Tailwind CSS necessary?",
    answer: "Not necessary, but it simplifies styling.",
  },
  {
    question: "Is Tailwind CSS necessary?",
    answer: "Not necessary, but it simplifies styling.",
  },
  {
    question: "Is Tailwind CSS necessary?",
    answer: "Not necessary, but it simplifies styling.",
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
              <Heading
                content={"We've got you covered"}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary-300 font-extrabold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5"
              />
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-lg sm:text-xl text-center text-accent-200 mb-8 leading-snug sm:leading-normal lg:text-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  <b>Open Source</b> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque accusantium id quas ullam reiciendis
                  quia?
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
        <div
          className="mx-auto max-sm:px-2 grid max-w-[83rem] grid-cols-1 gap-4 items-center md:grid-cols-2
        xl:grid-cols-4"
        >
          <div className=" bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-emerald-600 text-base font-semibold leading-7">
                Existing
              </h3>
              <p className="mt-4 gap-x-2">
                <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                  Free
                </span>
              </p>
              <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, si Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
            <ul className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100">
              <Bullets lists={lists} />
              <button className="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                Button
              </button>
              <span>Questions?</span>
            </ul>
          </div>

          <div className="dark:bg-black dark:border-white/[0.2] bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-emerald-600 text-base font-semibold leading-7">
                Custom
              </h3>
              <p className="mt-4 gap-x-2">
                <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                  $5
                </span>
              </p>
              <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, nihil. Totam, quas! Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <ul className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100">
              <Bullets lists={lists} />
              <button className="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                Buy Now
              </button>
              <span>Questions?</span>
            </ul>
          </div>
          <div className="dark:bg-black dark:border-white/[0.2] bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]    rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-emerald-600 text-base font-semibold leading-7">
                lorem
              </h3>
              <p className="mt-4 gap-x-2">
                <span className="text-white text-4xl font-bold tracking-tight dark:text-white">
                  $13
                </span>
              </p>
              <p className="text-white mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, nihil. Totam, quas!
              </p>
            </div>

            <ul className=" text-white mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100">
              <Bullets lists={lists} />
              <button className="text-white ring-1 ring-inset bg-green-600  mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                loreml
              </button>
              <span>Questions?</span>
            </ul>
          </div>
          <div className="dark:bg-black dark:border-white/[0.2] bg-white/60  rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div>
              <h3 className="text-emerald-600 text-base font-semibold leading-7">
                Pages
              </h3>
              <p className="mt-4 gap-x-2">
                <span className=" text-gray-400 text-sm pb-0 block h-6 dark:text-white">
                  Lorem, ipsum dolor.
                </span>
                <span className="text-gray-900 text-4xl font-bold tracking-tight dark:text-white">
                  $1,222
                </span>
              </p>
              <p className="text-gray-600 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, nihil. Totam, quas!
              </p>
            </div>

            <ul className="text-gray-600 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100">
              <Bullets lists={lists} />
              <button className="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full">
                Buy
              </button>
              <span>Questions?</span>
            </ul>
          </div>
        </div>
      </section>
      {/*  FAQ section */}
      <section>
        <div className="max-w-7xl mx-auto py-20 sm:py-40">
          <Heading
            content={"Frequently Asked Questions"}
            className={
              "mt-2 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-5xl"
            }
          />
          <div className=" grid grid-cols-1 gap-2 mt-2 md:grid-cols-1 xl:grid-cols-2 ">
            {faqData.map((item) => {
              return <FAQ question={item.question} answer={item.answer} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

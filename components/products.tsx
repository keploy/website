import Image from "next/image";
import WorflowImg01 from "@/public/images/api-testing.svg";
import WorflowImg02 from "@/public/images/unit-testing.svg";
import WorflowImg03 from "@/public/images/integration-testing.svg";
import Spotlight from "@/components/spotlight";
import { ChevronRight } from "lucide-react";

export default function Products() {
  return (
    <section>
      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 mb-12 ">
        <div className="pb-12 md:pb-20 ">
          <div className="opacity-55 absolute -top-[115%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]" />

          <div className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]" />

          <div className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]" />

          <div className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] rounded-full -rotate-12 bg-gradient-to-bl from-orange-400/15 to-pink-400/5 blur-[70px]" />

          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-24 text-center md:pb-15">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-800/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-800/50">
              <span className="inline-flex bg-gradient-to-r from-slate-600/50 to-slate-900/50 bg-clip-text text-transparent">
                Tailored Workflows
              </span>
            </div>
            <h2 className="leading-tight text-center bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent text-3xl font-semibold md:text-4xl">
              Maximize Coverage, Minimize Effort
            </h2>
            <p className="text-base text-slate-800/70 text-center mt-4 text-md leading-tight">
              A unified testing platform that writes, validates your tests using
              AI.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className=" realtive group mx-auto mt-5 grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3 ">
            {/* Card 1 */}
            <a
              className="group/card relative border-black/10 shadow-md transition-shadow hover:shadow-lg h-full overflow-hidden rounded-2xl bg-slate-50 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-900/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-neutral-50 shadow-lg after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-gray-200/50 after:via-gray-100/25 after:to-gray-200/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-orange-900 text-theme-primary opacity-0 transition-opacity group-hover/card:opacity-95 z-20"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>

                {/* Image */}
                <Image
                  className="inline-flex pt-8"
                  src={WorflowImg02}
                  width={450}
                  height={288}
                  alt="Workflow 02"
                />

                {/* Content */}
                <div className="p-6 z-20">
                  <div className="mb-3">
                    <div className="btn-sm leading-tight p-16 text-center bg-gradient-to-l from-indigo-900 to-purple-950 bg-clip-text text-transparent relative rounded-full  px-5 py-1.5 text-md font-semibold before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.blue.700/.15),theme(colors.blue.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      Unit Testing
                      <span className="py-1.5 inline-flex justify-center items-center rounded-full font-semibold text-sm transition-transform transform group-hover:translate-x-1">
                        <ChevronRight
                          size={16}
                          className="transition-transform text-indigo-900 duration-300 group-hover:text-indigo-800/90 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                  <p className="text-accent-highlight/90 z-20 pl-2">
                    Unit testing has never been this easy. Trade complex setups
                    for one-click, accurate test generation with full coverage
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a
              className="group/card relative border-black/10 shadow-md transition-shadow hover:shadow-lg h-full overflow-hidden rounded-2xl bg-slate-50 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-900/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="https://github.com/keploy/keploy"
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-neutral-50 shadow-lg after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-gray-200/50 after:via-gray-100/25 after:to-gray-200/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-orange-900 text-theme-primary opacity-0 transition-opacity group-hover/card:opacity-95 z-20"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex mt-16 mb-5"
                  src={WorflowImg03}
                  width={450}
                  height={288}
                  alt="Workflow 03"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <div className="btn-sm leading-tight p-16 text-center bg-gradient-to-l from-indigo-900 to-purple-950 bg-clip-text text-transparent relative rounded-full  px-5 py-1.5 text-md font-semibold before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.blue.700/.15),theme(colors.blue.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      Integration Testing
                      <span className="py-1.5 inline-flex justify-center items-center rounded-full font-semibold text-sm transition-transform transform group-hover:translate-x-1">
                        <ChevronRight
                          size={16}
                          className="transition-transform text-indigo-900 duration-300 group-hover:text-indigo-800/90 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                  <p className="text-accent-highlight/90 z-20 pl-2">
                    Automate integration tests with mocks, record-and-replay,
                    replicating complex system interactions effortlessly
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a
              className="group/card relative border-black/10 shadow-md transition-shadow hover:shadow-lg h-full overflow-hidden rounded-2xl bg-slate-50 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-900/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="https://calendar.app.google/cXVaj6hbMUjvmrnt9"
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-neutral-50 shadow-lg after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-br after:from-gray-200/50 after:via-gray-100/25 after:to-gray-200/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-orange-900 text-theme-primary opacity-0 transition-opacity group-hover/card:opacity-95 z-20"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>

                <Image
                  className="inline-flex my-9"
                  src={WorflowImg01}
                  width={450}
                  height={288}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <div className="btn-sm leading-tight p-16 text-center bg-gradient-to-l from-indigo-900 to-purple-950 bg-clip-text text-transparent relative rounded-full  px-5 py-1.5 text-md font-semibold before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.blue.700/.15),theme(colors.blue.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      API Testing
                      <span className="py-1.5 inline-flex justify-center items-center rounded-full font-semibold text-sm transition-transform transform group-hover:translate-x-1">
                        <ChevronRight
                          size={16}
                          className="transition-transform text-indigo-900 duration-300 group-hover:text-indigo-800/90 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                  <p className="text-accent-highlight/90 z-20 pl-2">
                    Be the first, be fast—automate API testing with Keploy
                    catching issues early for faster results
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}

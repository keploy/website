import Image from "next/image";
import Particles from "./particles copy";
import Highlighter, { HighlighterItem } from "./highlighter";

import FeatureImg01 from "@/public/images/security_hero_c8c8ba9dd1.png";
import FeatureImg02 from "@/public/images/global-network.png";
import FeatureImg03 from "@/public/images/feature-image-03.png";

export default function Security() {
  return (
    <section className="relative md:pt-32">
      <div className="opacity-55 absolute -top-[115%] border-2 -right-[5%] w-[50%] h-[80%] rounded-full rotate-12 bg-gradient-to-br from-orange-400/10 to-orange-500/10 blur-[80px]" />

      <div className="opacity-55 absolute top-[35%] -left-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-[90px]" />

      <div className="absolute top-[35%] -right-[30%] w-[45%] h-[60%] rounded-full rotate-45 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 blur-[90px]" />

      <div className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] rounded-full -rotate-12 bg-gradient-to-bl from-orange-400/15 to-pink-400/5 blur-[70px]" />

      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
           <h2 className="leading-tight text-center bg-gradient-to-l from-orange-500/95 to-purple-950/95 bg-clip-text text-transparent text-3xl font-semibold md:text-4xl">
              Trusted, Secure, Community-Driven
            </h2>
          </div>

          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F4A261" />
                    <stop offset="100%" stopColor="#E76F51" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#F4A261" />
                              <stop
                                offset="100%"
                                stopColor="#E76F51"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div
                        className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-orange-900 rounded-full blur-[120px] opacity-70" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-orange-700 rounded-full blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                              Industry-Leading Security & Compliance
                            </h3>
                            <p className="text-slate-400">
                              <b>
                                GDPR, ISO, Regulated Penetration Testing, SOC2,
                                HIPAA Compliant.
                              </b>{" "}
                              Our solutions adhere to the highest industry
                              standards, ensuring your data is secure and
                              compliant with global regulations
                            </p>
                          </div>
                        </div>
                        {/*<div>*/}
                        {/*  <a className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="#0">*/}
                        {/*    <span className="relative inline-flex items-center">*/}
                        {/*      Learn more <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>*/}
                        {/*    </span>*/}
                        {/*  </a>*/}
                        {/*</div>*/}
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <Image
                          className="py-10 absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0"
                          src={FeatureImg01}
                          width="504"
                          height="400"
                          alt="Feature 01"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #2 */}
              <div className="md:col-span-7" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-950 rounded-[inherit] z-20 overflow-hidden">
                    <div
                      className="absolute right-0 top-0 blur-2xl"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="342"
                        height="393"
                      >
                        <defs>
                          <linearGradient
                            id="bs-a"
                            x1="19.609%"
                            x2="50%"
                            y1="14.544%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#F4A261" />
                            <stop
                              offset="100%"
                              stopColor="#E76F51"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#bs-a)"
                          fillRule="evenodd"
                          d="m104 .827 461 369-284 58z"
                          transform="translate(0 -112.827)"
                          opacity=".7"
                        />
                      </svg>
                    </div>
                    <div
                      className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 bg-orange-900 rounded-full blur-[120px] opacity-70" />
                      <div className="absolute w-1/4 h-1/4 translate-z-0 bg-orange-700 rounded-full blur-[40px]" />
                    </div>

                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            Trusted by Global Networks
                          </h3>
                          {/*<p className="text-slate-400">Your login box must find the right balance between user convenience, privacy and security.</p>*/}
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className=" py-6 absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src={FeatureImg02}
                          width={536}
                          height={230}
                          alt="Feature 02"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
              <div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Radial gradient */}
                    <div
                      className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 bg-orange-900 rounded-full blur-[120px] opacity-70" />
                      <div className="absolute w-1/4 h-1/4 translate-z-0 bg-orange-900 rounded-full blur-[40px]" />
                    </div>

                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            Built on Open Source & Collaboration
                          </h3>
                          <p className="text-slate-400">
                            Fully maintained open-source edition(Apache 2.0
                            license)
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src={FeatureImg03}
                          width={230}
                          height={230}
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}

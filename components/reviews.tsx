import React from "react";
import Image from "next/image";

import TestimonialImg01 from "@/public/images/g2-review-user1.jpg";
import TestimonialImg02 from "@/public/images/g2-review-user2.jpeg";
import TestimonialImg03 from "@/public/images/g2-review-user3.jpeg";
function Reviews() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20 border-b border-slate-800">
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st Testimonial */}
            <article
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <header className="mb-3">
                <Image
                  className="rounded-full inline-flex"
                  src={TestimonialImg01}
                  width="40"
                  height="40"
                  alt="Testimonial 01"
                />
                {/* Stars */}
                <div className="mt-4">
                  <div className="flex space-x-1">
                    <button>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-300 italic">
                  "Using keploy really helps increase velocity while ensuring
                  high quality"
                </p>
              </div>
              <footer className="text-sm  font-medium text-slate-300 hover:text-white transition duration-150 ease-in-out">
                {/*<a */}
                {/*    className="text-slate-300 hover:text-white transition duration-150 ease-in-out"*/}
                {/*    href="#0"*/}
                {/*>*/}
                G2
                {/*</a>{" "}*/}- <span className="text-orange-500/80">5/5</span>
              </footer>
            </article>
            {/* 2nd Testimonial */}
            <article
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <header className="mb-3">
                <Image
                  className="rounded-full inline-flex"
                  src={TestimonialImg02}
                  width="40"
                  height="40"
                  alt="Testimonial 02"
                />
                {/* Stars */}
                <div className="mt-4">
                  <div className="flex space-x-1">
                    <button>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-300 italic">
                  "Solid Unit Test Engineer for Modern Teams. The Github PR
                  agent is awesome!"
                </p>
              </div>
              <footer className="text-sm font-medium text-slate-300 hover:text-white transition duration-150 ease-in-out">
                {/*<a*/}
                {/*    className="text-slate-300 hover:text-white transition duration-150 ease-in-out"*/}
                {/*    href="#0"*/}
                {/*>*/}
                Capterra
                {/*</a>{" "}*/}-{" "}
                <span className="text-orange-500/80">4.9/5</span>
              </footer>
            </article>
            {/* 3rd Testimonial */}
            <article
              className="h-full flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <header className="mb-3">
                <Image
                  className="rounded-full inline-flex"
                  src={TestimonialImg03}
                  width="40"
                  height="40"
                  alt="Testimonial 03"
                />
                {/* Stars */}
                <div className="mt-4">
                  <div className="flex space-x-1">
                    <button>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="grow mb-3">
                <p className="text-slate-300 italic">
                  "Future of Microservices Testing. I don't write unit tests
                  now!"
                </p>
              </div>
              <footer className="text-sm  font-medium text-slate-300 hover:text-white transition duration-150 ease-in-out">
                {/*<a*/}
                {/*    className="text-slate-300 hover:text-white transition duration-150 ease-in-out"*/}
                {/*    href="#0"*/}
                {/*>*/}
                G2
                {/*</a>{" "}*/}- <span className="text-orange-500/80">5/5</span>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

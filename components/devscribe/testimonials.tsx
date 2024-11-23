import Image from 'next/image'

import GoogleImage from '@/public/images/conf/GoogleForDevelopers_logo_lockup_KO.png'
import MoTImage from '@/public/images/conf/ministry-of-testing.svg'
import CNCFImage from '@/public/images/conf/cncf-white.svg'
import Keploy from '@/public/images/conf/keploy.svg'
import ReactPlay from '@/public/images/conf/ReactPlay Logo.svg'
import LTSponsor from '@/public/images/conf/LambdaTest.f1670267318.png'
import LL from '@/public/images/conf/Loft.svg'
import HOP from '@/public/images/conf/Logotype white 3.2 trn.png'
import N4J from '@/public/images/conf/Official logo - White.png'
import STSpeaker from '@/public/images/conf/Siddhant Agarwal.png'
import KVSpeaker from '@/public/images/conf/Khushboo Verma.jpg'
import HRSpeaker from '@/public/images/conf/Hrittik Roy speaker.jpg'
import SKSpeaker from '@/public/images/conf/Sparsh Kesari.jpg'
import ABSpeaker from '@/public/images/conf/1517489127951.jpeg'
import BASpeaker from '@/public/images/conf/bala.png'
import NGSpeaker from '@/public/images/conf/neha.jpeg'
import GKSpeaker from '@/public/images/conf/gourav.jpeg'


import React from "react";
import Link from 'next/link'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 ">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Sponsor</h2>
            <p className="text-xl text-gray-400">
              Please reach out to if you need to register as a Sponsor, email us - devrel[at]keploy[dot]io
            </p>
          </div>
          <div className="max-w-sm mx-auto grid grid-cols-1 gap-1 items-start lg:max-w-none py-12 md:py-20 text-center">
            <div className="flex flex-col h-full p-6 " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">

                  <Link href="https://developers.google.com/" title="Go to Google" target="_blank" rel="noopener">
                <Image decoding="async" width="393"
                   height="129"
                   src={GoogleImage}
                   className="logo text-center"
                   alt="Google logo"
                   loading="lazy"/>
              </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700  text-center">
            <h3 className="h3 pt-10">Community Partners</h3>
          </div>

          <div className="max-w-sm mx-auto grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-3 items-start lg:max-w-none py-6 md:py-10 ">
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4 max-h-fit ">
                  <Link href="https://www.meetup.com/ministry-of-testing-bengaluru/" title="Go to MoT" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={MoTImage}
                           className="logo text-center"
                           alt="MoT logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4 h-4/5">

                  <Link href="https://keploy.io" title="Go to Keploy" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={Keploy}
                           className="logo text-center h-4/5"
                           alt="Keploy logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4  justify-center">
                  <Link href="https://community.cncf.io/noida/" title="Go to CNCG Noida" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={CNCFImage}
                           className="logo text-center"
                           alt="CNCF logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-12 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-5  justify-center">
                  <Link href="https://reactplay.io/" title="Go to ReactPlay" target="_blank" rel="noopener">
                    <Image decoding="async" width="160"
                           height="110"
                           src={ReactPlay}
                           className="logo text-center"
                           alt="ReactPlay logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-12 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-5  justify-center">
                  <Link href="https://www.loft.sh/" title="Go to Loft" target="_blank" rel="noopener">
                    <Image decoding="async" width="160"
                           height="90"
                           src={LL}
                           className="logo text-center"
                           alt="LoftLabs logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4  justify-center">
                  <Link href="https://www.lambdatest.com/" title="Go to Google" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={LTSponsor}
                           className="logo text-center"
                           alt="Lambdatest Logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4  justify-center">
                  <Link href="https://hoppscotch.com/" title="Go to Hoppscotch" target="_blank" rel="noopener">
                    <Image decoding="async" width="8000"
                           height="309"
                           src={HOP}
                           className="logo text-center"
                           alt="Hoppscotch logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4  justify-center">
                  <Link href="https://neo4j.com/" title="Go to Neo4j" target="_blank" rel="noopener">
                    <Image decoding="async" width="160"
                           height="110"
                           src={N4J}
                           className="logo text-center"
                           alt="Neo4j logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mt-6 pt-5 border-t border-gray-700 py-6 md:py-20  border-t border-gray-800 ">
            <h2 className="h2 mb-4">Speakers</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={NGSpeaker} width={108} height={108} alt="Speaker 01" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Neha Gupta</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/neha-gup/"> Co-Founder, Keploy</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={STSpeaker} width={108} height={108} alt="Speaker 01" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Siddhant Agrawal</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/sidagarwal04/"> Developer Relations Lead APAC (Neo4j)</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={KVSpeaker} width={108} height={108} alt="Speaker 02" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Khushboo Verma</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/verma-khushboo"> Platform Engineer at Appwrite</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={HRSpeaker} width={108} height={108} alt="Speaker 03" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Hrittik Roy</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/hrittikhere"> Platform Advocate at LoftLabs</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={SKSpeaker} width={108} height={108} alt="Speaker 04" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Sparsh Kesari</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/sparshk98/"> Senior DevRel, LambdaTest</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={ABSpeaker} width={108} height={108} alt="Speaker 05" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Ashutosh S. Bhakare</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/abhakare/"> Google Developer Expert</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={BASpeaker} width={108} height={108} alt="Speaker 05" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Balasundaram</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://x.com/balaintwt">Kubernetes Enthusiasts</Link>
              </div>
            </div>


            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image
                      quality={100}
                      className="rounded-full flex-grow" src={GKSpeaker} width={108} height={108} alt="Speaker 05" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Gourav Kumar</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/gourav-kumar-b20108173/">Senior Software Engineer, Keploy</Link>
              </div>
            </div>

            {/* <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={Comingsoon} width={108} height={108} alt="Speaker 10" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc_zbty8au-SRSHqklhFIEXr3suxXEg66l6beB3vHP9Rm0u4w/viewform"  className="text-gray-200 not-italic">Talk about your Open-source Journey</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc_zbty8au-SRSHqklhFIEXr3suxXEg66l6beB3vHP9Rm0u4w/viewform"> Submit CFP Now</Link>
              </div>
            </div> */}

            {/* 2nd testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={Comingsoon} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div> */}
            {/*  <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>*/}
            {/*  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">*/}
            {/*    <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</Link>*/}
            {/*  </div>*/}
            {/* </div> */}

            {/*/!* 3rd testimonial *!/*/}
            {/*<div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">*/}
            {/*  <div>*/}
            {/*    <div className="relative inline-flex flex-col mb-4">*/}
            {/*      <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />*/}
            {/*      <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />*/}
            {/*      </svg>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>*/}
            {/*  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">*/}
            {/*    <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</Link>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>

        </div>
      </div>
    </section>
  )
}

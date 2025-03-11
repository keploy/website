import Image from 'next/image'

import GoogleImage from '@/public/images/conf/GoogleForStartups_Horizontal_RGB.png'
import MoTImage from '@/public/images/conf/ministry-of-testing.svg'
import CNCFImage from '@/public/images/conf/cncf-white.svg'
import Keploy from '@/public/images/conf/keploy.svg'
import STSpeaker from '@/public/images/conf/STSpeaker.jpeg'
import Docker from '@/public/images/conf/docker.png'
import ReactPlay from '@/public/images/conf/ReactPlay Logo.svg'
import LTSponsor from '@/public/images/conf/LambdaTest.f1670267318.png'
import FU from '@/public/images/conf/foss-unitedlogo-white.png'
import ShubhamSpeaker from '@/public/images/conf/shubham.jpeg'
import HMSpeaker from '@/public/images/conf/hm - Haimantika Mitra.jpg'
import AOspeaker from '@/public/images/conf/Aditya Oberai speaker.jpg'
import RGspeaker from '@/public/images/conf/Robin Gupta spkear.jpeg'
import GPspeaker from '@/public/images/conf/Gunesh Patil speaker.png'
import TAspeaker from '@/public/images/conf/Tapas Adhikary speaker.jpeg'
import HRspeaker from '@/public/images/conf/Hrittik Roy speaker.jpg'
import KMspeaker from '@/public/images/conf/Karan Speaker.jpeg'
import SBspeaker from '@/public/images/conf/Sangam Biradar speaker.jpg'
import KDspeaker from '@/public/images/conf/Kunal Deo Speaker.jpeg'
import MKspeaker from '@/public/images/conf/Megha Kadur Speaker.jpg'
import LNspeaker from '@/public/images/conf/Leon Nues Speaker.jpg'

import Comingsoon from '@/public/images/conf/coming-soon-mystery-retail-concept-vector-13969461.jpg'
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

                  <Link href="https://opensource.google/" title="Go to Google" target="_blank" rel="noopener">
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
                  <Link href="https://community.cncf.io/noida/" title="Go to Google" target="_blank" rel="noopener">
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
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4  justify-center">
                  <Link href="" title="Go to Google" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={ReactPlay}
                           className="logo text-center"
                           alt="ReactPlay logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div className="text-center">
                <div className="relative inline-flex flex-col mb-4 max-h-fit text-center ">
                  <Link href="" title="Go to MoT" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={FU}
                           className="logo w-auto  max-h-fit"
                           alt="MoT logo"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4  justify-center">
                  <Link href="" title="Go to Google" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={Docker}
                           className="logo text-center"
                           alt="Docker"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4  justify-center">
                  <Link href="" title="Go to Google" target="_blank" rel="noopener">
                    <Image decoding="async" width="393"
                           height="129"
                           src={LTSponsor}
                           className="logo text-center"
                           alt="Lambdatest"
                           loading="lazy"/>
                  </Link>
                </div>
              </div>
            </div>
            {/*<div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">*/}
            {/*  <div>*/}
            {/*    <div className="relative inline-flex flex-col mb-4 ">*/}

            {/*      <Link href="https://keploy.io" title="Go to Keploy" target="_blank" rel="noopener">*/}
            {/*        <Image decoding="async" width="393"*/}
            {/*               height="129"*/}
            {/*               src={Keploy}*/}
            {/*               className="logo text-center h-4/5"*/}
            {/*               alt="Keploy logo"*/}
            {/*               loading="lazy"/>*/}
            {/*      </Link>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="flex flex-col h-full p-3 justify-center " data-aos="fade-up">*/}
            {/*  <div>*/}
            {/*    <div className="relative inline-flex flex-col mb-4  justify-center">*/}
            {/*      <Link href="https://community.cncf.io/noida/" title="Go to Google" target="_blank" rel="noopener">*/}
            {/*        <Image decoding="async" width="393"*/}
            {/*               height="129"*/}
            {/*               src={CNCFImage}*/}
            {/*               className="logo text-center"*/}
            {/*               alt="CNCF logo"*/}
            {/*               loading="lazy"/>*/}
            {/*      </Link>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
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
                      className="rounded-full flex-grow" src={STSpeaker} width={108} height={108} alt="Speaker 01" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <cite className="text-gray-200 not-italic">Stephanie Taylor</cite> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/stephaniertaylor/"> Program Manager at Google for (GSoC)</Link>
              </div>
            </div>
            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={KDspeaker} width={108} height={108} alt="Speaker 02" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/kunal-deo-2893806"  className="text-gray-200 not-italic">Kunal Deo</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/kunal-deo-2893806"> Lead Customer Engineer - AI, Google</Link>
              </div>
            </div>
            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={ShubhamSpeaker} width={108} height={108} alt="Speaker 02" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/slayerjain/"  className="text-gray-200 not-italic">Shubham Jain</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/slayerjain/"> Co-Founder, Keploy</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={RGspeaker} width={108} height={108} alt="Speaker 05" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/polymorphicrobin/"  className="text-gray-200 not-italic">Robin Gupta</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/polymorphicrobin/">Vice President - Engineering/AppliedAI, Provar</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={AOspeaker} width={108} height={108} alt="Speaker 02" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/adityaoberai1/"  className="text-gray-200 not-italic">Aditya Oberai</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/adityaoberai1/"> Developer Advocate, Appwrite</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={HMSpeaker} width={108} height={108} alt="Speaker 04" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/haimantika-mitra/"  className="text-gray-200 not-italic">Haimantika Mitra</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/haimantika-mitra/">Developer Advocate, Hashnode</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={TAspeaker} width={108} height={108} alt="Speaker 06" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/tapasadhikary/"  className="text-gray-200 not-italic">Tapas Adhikary</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/tapasadhikary/">Co-Founder, CreoWis Technologies</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={GPspeaker} width={108} height={108} alt="Speaker 07" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/guneshpatil/"  className="text-gray-200 not-italic">Gunesh Patil</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/guneshpatil/">Senior Tech Lead, Ushur Inc</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={SBspeaker} width={108} height={108} alt="Speaker 08" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/sangambiradar/"  className="text-gray-200 not-italic">Sangam Biradar</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/sangambiradar/">Open Source Contributor</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={KMspeaker} width={108} height={108} alt="Speaker 09" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/mvkaran"  className="text-gray-200 not-italic">Karan M.V.</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/mvkaran/">Sr DevRel Manager, GitHub</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={HRspeaker} width={108} height={108} alt="Speaker 09" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/hrittikhere"  className="text-gray-200 not-italic">Hrittik Roy</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/hrittikhere">Platform Advocate, Loft Labs</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={MKspeaker} width={108} height={108} alt="Speaker 09" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://www.linkedin.com/in/megha-kadur/"  className="text-gray-200 not-italic">Megha Kadur</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/megha-kadur/">Senior Software Engineer, Barracuda Networks</Link>
              </div>
            </div>

            <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={LNspeaker} width={108} height={108} alt="Speaker 09" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://linkedin.com/in/leon-nunes"  className="text-gray-200 not-italic">Leon Nunes</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://linkedin.com/in/leon-nunes">Customer Success Engineer, Solo.io</Link>
              </div>
            </div>
            {/* <div className="flex flex-col flex flex-grow h-full p-6 " data-aos="fade-up">
              <div>
                <div className="flex ">
                  <Image className="rounded-full flex-grow" src={Comingsoon} width={108} height={108} alt="Speaker 10" />
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSclnnqTRA4x_YhG67eLNOK3LO4-ttqobbMZ5gbUclGNQDvmCg/viewform"  className="text-gray-200 not-italic">Talk about your Open-source Journey</Link> <br/>
                <Link className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSclnnqTRA4x_YhG67eLNOK3LO4-ttqobbMZ5gbUclGNQDvmCg/viewform"> Submit CFP Now</Link>
              </div>
            </div> */}

            {/* 2nd testimonial */}
            {/*<div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">*/}
            {/*  <div>*/}
            {/*    <div className="relative inline-flex flex-col mb-4">*/}
            {/*      <Image className="rounded-full" src={Comingsoon} width={48} height={48} alt="Testimonial 02" />*/}
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

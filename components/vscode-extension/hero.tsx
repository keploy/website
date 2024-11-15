/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import Link from 'next/link';
import Image from "next/image";
import GoodByePic from "@/public/images/main.svg";
import Demo from "@/public/images/demovscode.gif";
import StorylaneEmbed from "@/components/vscode-extension/demo";

export default function Hero() {
    return (
        <section className="relative">

            {/* Illustration behind hero content */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
                <div className='mb-24'>
                    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#f5f5f5" offset="50%" />
                                <stop stopColor="#EAEAEA" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g fill="url(#illustration-01)" fillRule="evenodd">
                            <circle cx="1232" cy="128" r="128" opacity={0.85} />
                            <circle cx="155" cy="443" r="64" opacity={0.85} />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20 gap-16">

                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <p className="text-xl sm:text-2xl text-accent-200 mb-4 leading-snug sm:leading-normal" data-aos="zoom-y-out" data-aos-delay="150">
                            2 minutes to 90% test coverage!
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary-300 font-extrabold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5" data-aos="zoom-y-out">
                            AI Generated Unit and Integration Tests
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-500 to-gradient-200">
                                that actually work!
                            </span>
                        </h1>

                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg sm:text-xl text-center text-accent-200 mb-8 leading-snug sm:leading-normal lg:text-center" data-aos="zoom-y-out" data-aos-delay="150">
                                VS Code Extension to Generate Unit Tests in One Click
                            </p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:space-x-4 lg:space-x-4" data-aos="zoom-y-out" data-aos-delay="300">
                                <div className="mb-4">
                                    <Link target="_blank" rel="noopener noreferrer" className="btn text-secondary-300 bg-primary-300 hover:text-gradient-500 w-full sm:w-auto sm:mb-0" href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio">
                                        Try Now
                                    </Link>
                                </div>
                                <div className='mb-4'>
                                    <Link className="btn text-white bg-green-900 hover:text-emerald-200 w-full sm:mb-0" href="https://app.keploy.io/signin">
                                        See Demo
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="my-6 px-8">
                            <p className="text-3xl py-6"><b>Say goodbye to endless hours spent manually writing test cases</b></p>
                            <p className="text-xl text-gray-600">Keploy generates comprehensive test cases generated in seconds, you’ll reduce back-and-forth discussions and minimize missed edge cases. No more follow-up questions on coverage or gaps—just high-quality code and faster feedback for the entire team.</p>
                            {/* Center GoodByePic image */}
                            <div className="flex justify-center my-8">
                                <Image src={Demo} alt="Goodbye" className="rounded-lg w-full h-full"  />
                            </div>
                        </div>

                        <div className="my-16">
                            <p className="text-3xl py-6 text-center">
                                <b>Keploy Interactive Demo: How It Works!</b>
                            </p>
                            {/* Center Demo GIF */}
                            <div className="flex justify-center items-center" style={{height: "80vh"}}>
                                <StorylaneEmbed/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
"use client";

import React, { useRef, FC } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import FeaturesMobileView from "../FeatureMoblieView";
import Pic1 from "@/public/images/pic1.svg";
import Pic3 from "@/public/images/pic3.svg";
import Pic4 from "@/public/images/pic4.svg";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const GenerateTestsImage: FC = () => {
    return (
        <div className="inline-flex flex-col w-full imageToShow" id="img-1">
            <div className="mb-2 h-[50%] py-2">
                <img src={Pic1.src} alt="Image 1" className="w-full h-full object-cover rounded" />
            </div>
        </div>
    );
};

const ReplayValidateImage: FC = () => {
    return (
        <div className="inline-flex flex-col w-full imageToShow" id="img-2">
            <div className="mb-2 h-[50%] py-2">
                <img src={Pic4.src} alt="Image 2" className="w-full h-full object-cover rounded" />
            </div>
        </div>
    );
};

const RealTimeImage: FC = () => {
    return (
        <div className="inline-flex flex-col w-full imageToShow" id="img-3">
            <div className="mb-2 h-[50%] py-2">
                <img src={Pic3.src} alt="Image 3" className="w-full h-full object-cover rounded" />
            </div>
        </div>
    );
};

interface TextSectionProps {
    svg: React.ReactNode;
    heading: string;
    description: string;
    btnDescription?: string;
    btnLink?: string;
}

const TextSection: FC<TextSectionProps> = ({
                                               svg,
                                               heading,
                                               description,
                                               btnDescription,
                                               btnLink,
                                           }) => {
    return (
        <div className="flex flex-col items-center pl-4 mt-6 mb-8 text-center md:block md:mb-0 h-min md:text-left md:mt-0 text-details">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 bg-white rounded-full ">
                {svg}
            </div>
            <div className="mb-1 text-2xl font-bold leading-snug tracking-tight md:text-4xl text-secondary-300">
                {heading}
            </div>
            <div className="text-gray-600 md:text-lg">{description}</div>
            {btnDescription && btnLink && (
                <div>
                    <Link
                        className="btn mt-8 text-secondary-300 bg-primary-300 hover:text-white w-full mb-4 sm:w-auto sm:mb-0"
                        href={btnLink}
                    >
                        {btnDescription}
                    </Link>
                </div>
            )}
        </div>
    );
};

const Features: FC = () => {
    const container = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const details = gsap.utils.toArray<HTMLDivElement>(".detail");
            const images = gsap.utils.toArray<HTMLDivElement>(".imageToShow");

            gsap.set(images[1], { opacity: 0 });
            gsap.set(images[2], { opacity: 0 });

            ScrollTrigger.create({
                trigger: ".content-container",
                start: "top top",
                end: "bottom bottom",
                pin: ".right-content",
            });

            ScrollTrigger.create({
                trigger: ".content-container",
                start: "top top",
                end: "bottom bottom",
                pin: ".heading-text",
            });

            details.forEach((detail) => {
                gsap.set(detail, { opacity: 1 });

                ScrollTrigger.create({
                    trigger: detail,
                    start: "top 20%",
                    end: "center center",
                    onEnter: () => gsap.set(detail, { opacity: 0 }),
                    onLeaveBack: () => gsap.set(detail, { opacity: 1 }),
                    scrub: 1,
                });
            });

            gsap.to(images[0], {
                scrollTrigger: {
                    trigger: details[1],
                    start: "center center",
                    end: "center center",
                    scrub: 1,
                },
                opacity: 0,
            });
            gsap.to(images[1], {
                scrollTrigger: {
                    trigger: details[1],
                    start: "center center",
                    end: "center center",
                    scrub: 1,
                },
                opacity: 1,
            });
            gsap.to(images[1], {
                scrollTrigger: {
                    trigger: details[2],
                    start: "center center",
                    end: "center center",
                    scrub: 1,
                },
                opacity: 0,
            });
            gsap.to(images[2], {
                scrollTrigger: {
                    trigger: details[2],
                    start: "center center",
                    end: "center center",
                    scrub: 1,
                },
                opacity: 1,
            });
        },
        { scope: container }
    );

    return (
        <>
            <FeaturesMobileView />
            <section ref={container} className="relative hidden lg:block">
                <div className="absolute left-0 right-0 max-w-3xl pt-2 mx-auto mt-16 text-center top-6 heading-text">
                    <h1 className="mb-2 text-5xl font-bold text-secondary-300">
                        Here's What Keploy Does
                    </h1>
                    <p className="text-xl text-gray-600">
                        Keploy takes the hassle out of writing unit and integration tests. With test cases generated in seconds, you can focus more on development and less on manual test creation. It ensures complete coverage, catches edge cases early
                    </p>
                </div>
                <div className="relative grid max-w-6xl grid-cols-2 gap-16 pt-[50vh] pb-[50vh] mx-auto content-container">
                    <div className="mt-20 space-y-[50vh]">
                        <div className="flex items-center detail" data-marker-content="img-1">
                            <TextSection
                                svg={<svg className="w-6 h-6 fill-primary-300" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" /></svg>}
                                heading="Generate Tests with a Click"
                                description=" With one click, Keploy’s VS Code extension automatically analyzes code functions and generates well-structured unit tests. Save time on test creation and ensure code is covered effectively."
                                btnDescription="Explore More"
                                btnLink="/vscode-extension"
                            />
                        </div>
                        <div className="flex items-center detail">
                            <TextSection
                                svg={<svg className="w-6 h-6 fill-primary-300" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" /></svg>}
                                heading="Replay and Validate Code Changes Instantly"
                                description="Keploy enables developers to replay tests with each code change to ensure stability. Quickly verify that new updates don’t introduce regressions or break existing functionality."
                                btnDescription="Explore VS Code Extension"
                                btnLink="/vscode-extension"
                            />
                        </div>
                        <div className="flex items-center detail">
                            <TextSection
                                svg={<svg className="w-6 h-6 fill-primary-300" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fillRule="nonzero" /></svg>}
                                heading="Real-Time Code Coverage Insights"
                                description="Keploy’s extension highlights untested code in real-time, helping developers keep track of their coverage metrics and identify gaps while they code."
                                btnDescription="Explore VS Code Extension"
                                btnLink="/vscode-extension"
                            />
                        </div>
                    </div>
                    <div className="flex items-center [&>*]:absolute relative justify-center h-min [&>*]:top-0 right-content">
                        <GenerateTestsImage />
                        <ReplayValidateImage />
                        <RealTimeImage />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
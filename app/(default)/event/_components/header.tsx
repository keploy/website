"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "@/components/ui/mobile-menu";
import { FaSlack } from "react-icons/fa";
import { StarIcon } from "@heroicons/react/24/solid";
import CountingNumbers from "@/components/utils/countingNumbers";

export default function Header() {
    const [top, setTop] = useState<boolean>(true);
    const [starsCount, setStarsCount] = useState<number>(0);

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    useEffect(() => {
        const fetchStarsCount = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/repos/keploy/keploy"
                );
                if (response.ok) {
                    const data = await response.json() as { stargazers_count: number };
                    const stars = data.stargazers_count;
                    return stars;
                } else {
                    console.error("Failed to fetch stars count", response.statusText);
                    return 0; // Return a default value in case of error
                }
            } catch (error) {
                console.error("Error fetching stars count:", error);
                return 0; // Return a default value in case of error
            }
        };

        void fetchStarsCount().then(setStarsCount);
    }, []);

    return (
        <header
            className={`fixed w-full z-30 bg-white transition duration-300 ease-in-out ${!top ? "shadow-lg" : ""}`}
        >
            <div className="container mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        <Link href="/" className="flex items-center">
                            {/* <Image src="/images/logo.png" width={40} height={40} alt="Keploy Logo" /> */}
                            <span className="ml-2 text-xl font-bold text-gray-900">Keploy</span>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        <div className="flex grow justify-end flex-wrap items-center">
                            <div className="border border-primary-400 rounded-md overflow-hidden p-2.5 border-opacity-40 relative transition-all  group">
                                {/* Sliding effect span */}
                                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-orange-500 opacity-10 transition-transform duration-1000 ease-out group-hover:translate-x-[-400%]" />

                                <Link
                                    className="flex items-center gap-2 text-sm text-primary-400 font-extrabold transition-colors hover:text-primary-500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Keploy Github Repo"
                                    data-radix-collection-item=""
                                    href="https://www.github.com/keploy/keploy"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Github Logo</title>
                                        <path
                                            d="M8 .2C3.6.2 0 3.8 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V14c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-gradient-500 opacity-30 hover:text-primary-500"> | </span>
                                    <span className="text-base flex gap-1">
                                        <StarIcon className="size-4 text-yellow-300 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_2px_#FFD700]" />
                                    </span>
                                    <span className="text-base flex gap-1"> <CountingNumbers className="" /></span>
                                </Link>
                            </div>
                            <Link href="https://forms.gle/1GapWjqvTr82NHbr5"
                                className="flex flex-row items-center gap-2 px-4 py-2 rounded-md text-gray-200 bg-green-800 ml-3" target="_blank">
                                <FaSlack />
                                <span>Join Slack</span>
                            </Link>
                        </div>
                    </nav>

                    <MobileMenu starsCount={starsCount} />
                </div>
            </div>
        </header>
    );
}

"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import MobileMenu from "../ui/mobile-menu";
import Image from "next/image";
import DevScribe from "@/public/images/conf/devscribe.png";

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
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  useEffect(() => {
    const fetchStarsCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/keploy/keploy"
        );
        if (response.ok) {
          const data = await response.json();
          // Convert starsCount to 1-digit decimal with 'K'
          let stars = data.stargazers_count;
          console.log(stars);
          // let roundedStars = Math.round(data.stargazers_count / 50) * 50;
          // let formattedStars = (roundedStars / 1000).toFixed(1) + "K";
          setStarsCount(stars);
        } else {
          // let roundedStars = Math.round(parseInt(starsCount) / 50) * 50;
          // let formattedStars = (roundedStars / 1000).toFixed(1) + "K";
          // setStarsCount(formattedStars);
          console.error("Failed to fetch stars count", response.statusText);
        }
      } catch (error) {
        // let roundedStars = Math.round(parseInt(starsCount) / 50) * 50;
        // let formattedStars = (roundedStars / 1000).toFixed(1) + "K";
        // setStarsCount(formattedStars);
        console.error("Error fetching stars count:", error);
      }
    };

    fetchStarsCount();
  }, []);

  return (
    <header
      className={`fixed w-full z-30 fill-current bg-gray-900 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "fill-current backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 flex-1">
            <Link target="_blank" href="https://forms.gle/1GapWjqvTr82NHbr5"><Image className=" flex-grow" src={DevScribe} width={208} height={108} alt="Logo DevScribe" /> </Link>
            {/*<Logo />*/}
          </div>

          <div className="header-btn-container flex-1 justify-end hidden lg:flex">
            <div data-aos="fade-up " data-aos-delay="400">
              <Link className="ml-3 btn rounded-lg border border-primary-400 rounded-md overflow-hidden p-2.5 border-opacity-40 hover:text-primary-300 w-full mb-4 sm:w-auto sm:mb-0" target="_blank" href="https://forms.gle/1GapWjqvTr82NHbr5">Submit CFP
                <svg className=" ml-3 w-3 h-3 shrink-0 fill-current" viewBox="0 0 23 23">
                  <path d=  "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
                </svg>
              </Link>
            </div>
            <div data-aos="fade-up " data-aos-delay="400">
              <Link className="ml-3 btn rounded-lg text-white bg-secondary-300 hover:text-primary-300 w-full mb-4 sm:w-auto sm:mb-0 whitespace-pre " target="_blank" href="https://forms.gle/X1XQkbZy9AaARHeZ9">Register  🔥</Link>
            </div>

          </div>

          <MobileMenu starsCount={starsCount} />
        </div>
      </div>
    </header>
  );
}

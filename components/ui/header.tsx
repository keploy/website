"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import CountingNumbers from "../utils/countingNumbers";
import { isTypeOfExpression } from "typescript";
import NavItemWithSmallDropdown, {DropdowndataInterface,LinkDatainterface} from "@/components/nav/navItemWithSmallDropdown";
import { PillarPages } from "../utils/resources";
export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [starsCount, setStarsCount] = useState<number>(1000);
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
      className={`fixed w-full z-30 bg-neutral-100 transition duration-300 ease-in-out ${
        !top ? "bg-neutral-100 backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 flex-grow-0 w-2/12 ">
            <Logo />
          </div>
          {/* Desktop navigation */}
          <nav className="hidden lg:flex  flex-grow-0 w-6/12">
            {/* Desktop privacy-policy in links */}
            <ul className="flex grow justify-end flex items-center">
              <li>
                <Link
                  target="_blank"
                  href="https://keploy.io/docs"
                  className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://keploy.io/blog/technology"
                  className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Tech Blog
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://keploy.io/blog/community"
                  className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Articles
                </Link>
              </li>
              <div className="px-5">
                {" "}
                <NavItemWithSmallDropdown
                  heading="Resources"
                  dropdownData={PillarPages}
                />
              </div>
            </ul>
          </nav>
          <div className="header-btn-container flex-grow-0 w-4/12 justify-end hidden lg:flex">
            <div className="border border-primary-400 rounded-md overflow-hidden p-2.5 border-opacity-40 ">
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
                <span className="text-gradient-500 opacity-30 hover:text-primary-500">
                  {" "}
                  |
                </span>
                <span className="text-base flex gap-1"> ⭐️ <CountingNumbers className="" /></span>
              </Link>
            </div>
            <Link
              href="https://forms.gle/waYcLSASm9dfE9tC9"
              target="_blank"
              className="btn-sm text-gray-200 bg-secondary-300  hover:text-primary-300 ml-3"
            >
              <span>Join Waitlist</span>
              {/*<svg className="w-3 h-3 fill-current   hover:text-primary-300 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />*/}
              {/*</svg>*/}
            </Link>
          </div>

          <MobileMenu starsCount={starsCount} />
        </div>
      </div>
    </header>
  );
}

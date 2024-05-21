"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import CountingNumbers from "../utils/countingNumbers";
import Image from "next/image";
import { UpIcon } from "../nav/UpIcon";
import DownIcon from "../nav/DownIcon";
import { PillarPages } from "../utils/resources";
interface MobileMenuProps {
  starsCount: number;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ starsCount }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [showResourcesDropdown,setShowResourcesDropdown] =useState<boolean>(false)
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex lg:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/*<ul className="px-5 py-2">*/}
          {/*  <li>*/}
          {/*    <Link href="/privacy-policy" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Sign in</Link>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2" onClick={() => setMobileNavOpen(false)}>*/}
          {/*      <span>Sign up</span>*/}
          {/*      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">*/}
          {/*        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />*/}
          {/*      </svg>*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}

          <ul className="px-5 py-2">
            <li>
              <div className="border border-primary-400 rounded overflow-hidden p-2 border-opacity-25 sm:border-opacity-100">
                <Link
                  className="flex items-center ml-4 mt-2 gap-2 text-sm text-primary-400 font-extrabold transition-colors hover:text-primary-300"
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
                  <span className="text-base flex gap-1"> ⭐️ <CountingNumbers start={starsCount} className="" /></span>
                </Link>
              </div>
              {/*<Link href="/privacy-policy" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Github</Link>*/}
            </li>
            <li>
              <Link
                href="https://keploy.io/docs"
                className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="https://blog.keploy.io"
                className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://community.keploy.io"
                className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Community
              </Link>
            </li>
            <div
              onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
              className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Resources
              <div className="pl-2">
                {showResourcesDropdown ? (
                  <UpIcon className="text-current" />
                ) : (
                  <DownIcon className="text-current" />
                )}
              </div>
            </div>
            {showResourcesDropdown &&
              PillarPages.map((lists) => (
                <div key={lists.heading} className="pl-4">
                  {" "}
                  <span className="font-bold text-secondary-300 uppercase px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    {lists.heading}
                  </span>
                  <ul className="px-4 ">
                    {lists.links.map((link) => (
                      <li key={link.pageName}>
                        {" "}
                        {/* Ensure to add a key for list items when mapping */}
                        <Link
                          target="_blank"
                          href={link.pagelink}
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap	"
                        >
                          {link.pageName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            {/*<li>*/}
            {/*  <Link href="/program" className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out">Program</Link>*/}
            {/*</li>*/}
            <li>
              <Link
                href="https://calendar.app.google/8Ncpff4QnAhpVnYd8"
                className="btn-sm text-gray-200 bg-secondary-300 mt-3  hover:text-primary-300 ml-3"
              >
                <span>Book Cloud Demo</span>
                <svg
                  className="w-3 h-3 fill-current   hover:text-primary-300 shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}

export default MobileMenu;
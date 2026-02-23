"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import CountingNumbers from "../utils/countingNumbers";
import Image from "next/image";
import { UpIcon } from "../nav/UpIcon";
import DownIcon from "../nav/DownIcon";
import { PillarPages } from "../utils/resources";
import { StarIcon } from "@heroicons/react/24/solid";
import { ProductsSection } from "../utils/Products";
import { GlossarySection } from "../utils/Products";

interface MobileMenuProps {
  starsCount: number;
  vsCodeInstalls?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ starsCount, vsCodeInstalls }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [showResourcesDropdown,setShowResourcesDropdown] =useState<boolean>(false);
  const [showProductsDropdown,setShowProductsDropdown] =useState<boolean>(false);
  const [showGlossaryDropdown,setShowGlossaryDropdown] =useState<boolean>(false);
  const [vscodeInstallCount, setVscodeInstallCount] = useState<string>(vsCodeInstalls || "1M+");

  useEffect(() => {
    // Fetch VS Code extension install count from the marketplace
    const fetchVSCodeStats = async () => {
      try {
        const response = await fetch(
          "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json;api-version=7.1-preview.1",
            },
            body: JSON.stringify({
              filters: [{ criteria: [{ filterType: 7, value: "Keploy.keployio" }] }],
              flags: 914,
            }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          const stats = data?.results?.[0]?.extensions?.[0]?.statistics;
          const installStat = stats?.find(
            (s: { statisticName: string; value: number }) => s.statisticName === "install"
          );
          if (installStat) {
            const count = installStat.value as number;
            const formatted = Intl.NumberFormat("en-US", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(count);
            setVscodeInstallCount(formatted);
          }
        }
      } catch (error) {
        console.error("Error fetching VS Code stats:", error);
      }
    };
    fetchVSCodeStats();
  }, []);
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
                <span className="text-base flex gap-1"><CountingNumbers className="" /></span>
              </Link>
            </div>
            </li>
            {/* VS Code Extension Stats */}
            <li>
            <div className="border border-primary-400 rounded-md overflow-hidden p-2.5 border-opacity-40 relative transition-all group mt-2">
              {/* Sliding effect span */}
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-orange-500 opacity-10 transition-transform duration-1000 ease-out group-hover:translate-x-[-400%]" />
              <Link
                className="flex items-center gap-2 text-sm text-primary-400 font-extrabold transition-colors hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Keploy VS Code Extension"
                href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
              >
                {/* VS Code Icon */}
                <svg className="h-5 w-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <title>VS Code Logo</title>
                  <clipPath id="clip-mobile-vscode">
                    <path d="M70.912 2.898L38.17 31.128 15.32 16.042 2.074 22.408l22.238 27.582L2.074 77.59 15.32 83.958l22.848-15.09 32.744 28.228 14.888-5.952V8.85L70.912 2.9zm.82 66.064L50.26 50l21.47-18.96v37.92z" />
                  </clipPath>
                  <linearGradient id="gradient-mobile-vscode" x1="50" y1="2.898" x2="50" y2="97.094" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#1a9ed4" />
                    <stop offset="1" stopColor="#1163b5" />
                  </linearGradient>
                  <path fill="url(#gradient-mobile-vscode)" clipPath="url(#clip-mobile-vscode)" d="M85.8 2.898L2.074 35.362v29.276l83.726 32.456 12.2-6.276V9.174L85.8 2.898zm-14.068 66.064L50.26 50l21.47-18.96v37.92z" />
                </svg>
                <span className="text-gradient-500 opacity-30 hover:text-primary-500"> | </span>
                <span className="text-base flex gap-1">
                  <svg className="size-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-base flex gap-1">{vscodeInstallCount}</span>
              </Link>
            </div>
            </li>
            <li>
                <Link
                  target="_blank"
                  href="https://keploy.io/devscribe"
                  className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  DevScribe
                </Link>
              </li>
            {/* <li>
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
            </li> */}
             <div
              onClick={() => setShowProductsDropdown(!showProductsDropdown)}
              className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Products
              <div className="pl-2">
                {showProductsDropdown ? (
                  <UpIcon className="text-current" />
                ) : (
                  <DownIcon className="text-current" />
                )}
              </div>
            </div>
            {showProductsDropdown &&
            ProductsSection.map((lists) => (
              <div key={lists.heading} className="pl-4">
                {/* <span className="font-bold text-secondary-300 uppercase px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  {lists.heading}
                </span> */}
                <ul className="px-4">
                  {lists.links.map((link) => (
                    <li key={link.pageName} className="flex items-center py-2">
                      {link.Icon &&    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                        <link.Icon  /> </div>} {/* Render Icon if available */}
                      {link.pagelink.startsWith("/") ? (
                        <Link
                          target="_blank"
                          href={link.pagelink}
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap"
                        >
                          {link.pageName}
                        </Link>
                      ) : (
                        <a
                          target="_blank"
                          href={link.pagelink}
                          rel="noopener noreferrer"
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap"
                        >
                          {link.pageName}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
              <div
              onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
              className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Solutions
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
                {/* <span className="font-bold text-secondary-300 uppercase px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  {lists.heading}
                </span> */}
                <ul className="px-4">
                  {lists.links.map((link) => (
                    <li key={link.pageName} className="flex items-center py-2">
                      {link.Icon &&<div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                        <link.Icon  /> </div>} {/* Render Icon if available */}
                      {link.pagelink.startsWith("/") ? (
                        <Link
                          target="_blank"
                          href={link.pagelink}
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap"
                        >
                          {link.pageName}
                        </Link>
                      ) : (
                        <a
                          target="_blank"
                          href={link.pagelink}
                          rel="noopener noreferrer"
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap"
                        >
                          {link.pageName}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
             <li>
              <Link
                href="https://keploy.io/docs"
                className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Docs
              </Link>
            </li>
            <div
              onClick={() => setShowGlossaryDropdown(!showGlossaryDropdown)}
              className="font-medium text-gray-600  hover:text-primary-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Resources
              <div className="pl-2">
                {showGlossaryDropdown ? (
                  <UpIcon className="text-current" />
                ) : (
                  <DownIcon className="text-current" />
                )}
              </div>
            </div>
            {showGlossaryDropdown &&
            GlossarySection.map((lists) => (
              <div key={lists.heading} className="pl-4">
                {/* <span className="font-bold text-secondary-300 uppercase px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  {lists.heading}
                </span> */}
                <ul className="px-4">
                  {lists.links.map((link) => (
                    <li key={link.pageName} className="flex items-center py-2">
                      {link.Icon && <link.Icon  />} {/* Render Icon if available */}
                      {link.pagelink.startsWith("/") ? (
                        <Link
                          target="_blank"
                          href={link.pagelink}
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap"
                        >
                          {link.pageName}
                        </Link>
                      ) : (
                        <a
                          target="_blank"
                          href={link.pagelink}
                          rel="noopener noreferrer"
                          className="font-medium text-gray-600 hover:text-primary-300 px-3 py-3 flex items-center transition duration-150 ease-in-out whitespace-nowrap"
                        >
                          {link.pageName}
                        </a>
                      )}
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
                href="https://app.keploy.io"
                className="btn-sm text-gray-200 bg-secondary-300 mt-3  hover:text-primary-300 ml-3"
              >
                <span>Try now for free</span>
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
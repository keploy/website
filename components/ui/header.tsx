"use client";

import Logo from "./logo";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { useMediaQuery } from "react-responsive";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import MobileMenu from "./mobile-menu";
import CountingNumbers from "../utils/countingNumbers";
import NavItemsContainer from "../nav/nav_items_container";
import { usePathname } from "next/navigation";



export default function Header() {
  const [top, setTop] = useState(false);

  const [isHeaderHidden, setIsHeaderhidden] = useState(false);
  const lastYRef = useRef(0);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastYRef.current;

    if (Math.abs(diff) > 50) {
      setIsHeaderhidden(diff > 0)

      lastYRef.current = y
    }
  })

  const avoid_routes = ["/devscribe", "/gittogether"]
  const pathname = usePathname();

  if (avoid_routes?.includes(pathname)) {
    return null
  }

  if (isDesktop) {

    return (
      <header className="relative">
        <motion.div
          animate={isHeaderHidden ? "hidden" : "visible"}
          variants={{
            hidden: {
              y: "-110%",
            },
            visible: {
              y: "0%",
            }
          }}
          transition={{ duration: 0.4, ease: "circInOut" }}
          className="fixed top-5 inset-x-0 max-w-6xl w-fit mx-auto px-6 z-50">

          <div className="w-fit mx-auto px-5 py-4 border-4 border-secondary-300/15 bg-white shadow-lg rounded-full flex items-center justify-between gap-9 xl:gap-20">
            <div className="shrink-0 flex-grow-0 w-[110px] overflow-hidden ms-2">
              <Logo height="45" width="240" />
            </div>

            <NavItemsContainer />

            <div className="flex items-center gap-2">
              <Link
                className="flex items-center gap-2 text-sm text-primary-400 font-extrabold transition-colors hover:text-primary-500 px-4 py-2 rounded-full border border-secondary-400/15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Keploy Github Repo"
                href="https://www.github.com/keploy/keploy"
              >
                <svg className="h-5 w-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <title>Github Logo</title>
                  <path
                    d="M8 .2C3.6.2 0 3.8 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V14c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="text-gradient-500 opacity-30 hover:text-primary-500"> | </span>
                <CountingNumbers />
              </Link>
              <Link
                href="https://app.keploy.io/signin"
                target="_blank"
                className="btn-sm text-gray-200 bg-secondary-300 hover:text-primary-300 rounded-full"
              >
                <span>Sign In</span>
                <svg
                  className="w-3 h-3 fill-current hover:text-primary-300 shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </header>
    );
  } else {
    return (
      <header className={`lg:hidden fixed w-full z-30 bg-neutral-100 transition duration-300 ease-in-out ${!top ? "bg-neutral-100 backdrop-blur-sm shadow-lg" : ""}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0 mr-4 flex-grow-0 w-2/12">
              <Logo />
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
    );
  }
}

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MainNav, MobileNav } from "./index";
import { GitHubStars } from "../github-stars";
import { Vscode } from "../vscode-number";
import { Keploy } from "../icons";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

export function Header() {
  const scrolled = useHeaderScroll();

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-colors duration-300    ${
        scrolled ? "bg-background shadow-sm ease-in-out" : "bg-transparent"
      }`}
    >
      {scrolled}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <header className="flex h-[4.5rem] items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center mb-2">
              <Keploy.fullLogo />
            </Link>
            <div className="hidden flex-1 items-center justify-center md:flex">
              <MainNav />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <Vscode />
            <GitHubStars />
            <Button
              variant="default"
              asChild
              className="hidden sm:flex text-white px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out items-center justify-center relative overflow-hidden "
              // className="hidden sm:flex text-white/95 px-4 py-1 hover:bg-orange-500/95 bg-orange-500 border-2 border-orange-100/70 transition duration-150 ease-in-out items-center rounded-full relative overflow-hidden group absolute inset-0 -translate-x-full hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 opacity-20 btn text-sm py-2 px-6 text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg hover:shadow-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"
            >
              <Link
                href="https://app.keploy.io"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                Sign In
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </Link>
            </Button>
            <MobileNav />
          </div>
        </header>
      </div>
    </div>
  );
}

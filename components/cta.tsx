import Link from "next/link";
import { RocketIcon, Video } from "lucide-react";

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto mb-12 mt-4 sm:px-6 p-8 ">
        <div className="relative px-8 py-8 md:py-20 rounded-3xl overflow-hidden border-2 max-w-6xl  shadow:xl">
          {/* Radial gradient */}
          <div
            className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-orange-500 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-orange-400 rounded-full blur-[40px]" />
          </div>
          {/* Blurred shape */}
          <div
            className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs5-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF4500" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#bs5-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-theme-secondary to-theme-secondary pb-3">
                The Test Fast Platform
              </div>
            </div>
            <h2 className="h2 text-theme-secondary/90 pb-4">
              Empower Your Testing Process
            </h2>
            <p className="text-lg text-theme-secondary mb-8">
              Streamline and accelerate your testing workflows with our
              cutting-edge platform, offering seamless solutions for API, unit,
              and integration testing—all in one place.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4">
              <div>
                <Link
                  className="btn text-sm py-2 px-6 gap-3 text-white bg-orange-500 hover:bg-orange-500/90 border-2 border-orange-100/90 w-full transition duration-150 ease-in-out flex items-center justify-center relative overflow-hidden group"
                  href="https://calendar.app.google/cXVaj6hbMUjvmrnt9"
                  aria-label="Schedule a Demo"
                >
                  <Video />
                  <span>Schedule a Demo</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
              </div>

              <div>
                <Link
                  className="btn text-sm py-2 px-6 text-accent-success border-[0.15rem] border-accent-success/90 hover:bg-accent-success/5 w-full transition duration-150 ease-in-out flex items-center justify-center relative overflow-hidden group"
                  href="https://keploy.io/docs/"
                  aria-label="Explore Documentation"
                >
                  <RocketIcon
                    size={16}
                    className="mr-2 transition-transform hover:scale-105"
                  />
                  Explore Documentation
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-accent-success/20 to-transparent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

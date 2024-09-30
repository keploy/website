import Logo from '../ui/logo'
import React from "react";
import Link from "next/link";
import CNCF from '@/public/images/cncf-landscape.png'

import GSA from '@/public/images/gsa.png'
import Image from "next/image";

export default function ConfFooter() {
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-accent-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-neutral-300">
              <Link href="https://keploy.io/docs/security/" className="text-neutral-300 hover:text-primary-300 hover:underline transition duration-150 ease-in-out">Security</Link> · <Link href="https://docs.keploy.io/privacy-policy/" className="text-neutral-300 hover:text-primary-300 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>

          {/* 2nd block */}
          {/*<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">*/}
          {/*  <h6 className="text-primary-300 font-medium mb-2">Products</h6>*/}
          {/*  <ul className="text-sm">*/}
          {/*    <li className="mb-2">*/}
          {/*      <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Web Studio</Link>*/}
          {/*    </li>*/}
          {/*    <li className="mb-2">*/}
          {/*      <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">DynamicBox Flex</Link>*/}
          {/*    </li>*/}
          {/*    <li className="mb-2">*/}
          {/*      <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Programming Forms</Link>*/}
          {/*    </li>*/}
          {/*    <li className="mb-2">*/}
          {/*      <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Integrations</Link>*/}
          {/*    </li>*/}
          {/*    <li className="mb-2">*/}
          {/*      <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Command-line</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h6 className="text-primary-300 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="https://keploy.io/docs" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link href="https://keploy.io/blog/technology" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Tech Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="https://keploy.io/blog/community" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Community Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="https://keploy.io/sitemap.xml" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Sitemap</Link>
              </li>
              {/*<li className="mb-2">*/}
              {/*  <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Support Center</Link>*/}
              {/*</li>*/}
              {/*<li className="mb-2">*/}
              {/*  <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Partners</Link>*/}
              {/*</li>*/}
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h6 className="text-primary-300 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Home</Link>
              </li>
              {/*<li className="mb-2">*/}
              {/*  <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">About us</Link>*/}
              {/*</li>*/}
              {/*<li className="mb-2">*/}
              {/*  <Link href="#0" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Company values</Link>*/}
              {/*</li>*/}
              <li className="mb-2">
                <Link href="https://keploy.io/docs/security/" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Security</Link>
              </li>
              <li className="mb-2">
                <Link href="https://keploy.io/docs/privacy-policy/" className="text-neutral-300 hover:text-primary-300 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
            </ul>
          </div>


          <div className="sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h6 className="text-primary-300 font-medium mb-2">Find us on CNCF Landscape</h6>
            <Link href="https://landscape.cncf.io/?item=app-definition-and-development--continuous-integration-delivery--keploy" target="_blank">
              <Image width={200} height={100} src={CNCF} alt="CNCF Landscape" className="w-full" />
            </Link>
            <Link href="https://blog.google/intl/en-in/introducing-the-eighth-cohort-of-google-for-startups-accelerator-india/" target="_blank">
              <Image width={200} height={100} src={GSA} alt="CNCF Landscape" className="w-full py-2" />
            </Link>
          </div>


          {/* 5th block */}
          {/*<div className="sm:col-span-6 md:col-span-3 lg:col-span-3">*/}
          {/*  <h6 className="text-primary-300 font-medium mb-2">Find us on CNCF Landscape</h6>*/}
          {/*  <p className="text-sm text-neutral-300 mb-4">Get the latest news and articles to your inbox every month.</p>*/}
          {/*  <form>*/}
          {/*    <div className="flex flex-wrap mb-4">*/}
          {/*      <div className="w-full">*/}
          {/*        <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>*/}
          {/*        <div className="relative flex items-center max-w-xs">*/}
          {/*          <input id="newsletter" type="email" className="form-input w-full text-primary-300 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />*/}
          {/*          <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">*/}
          {/*            <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>*/}
          {/*            <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">*/}
          {/*              <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />*/}
          {/*            </svg>*/}
          {/*          </button>*/}
          {/*        </div>*/}
          {/*        /!* Success message *!/*/}
          {/*        /!* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> *!/*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </form>*/}
          {/*</div>*/}

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link target="_blank" href="https://twitter.com/Keployio" className="flex justify-center items-center text-secondary-300 hover:text-primary-300 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="22px" viewBox="0 -16 20 40" >
                    <path d="M 20.476562 0.00390625 L 24.464844 0.00390625 L 15.753906 10.167969 L 26 23.996094 L 17.976562 23.996094 L 11.691406 15.609375 L 4.503906 23.996094 L 0.511719 23.996094 L 9.828125 13.125 L 0 0.00390625 L 8.226562 0.00390625 L 13.90625 7.671875 Z M 19.078125 21.558594 L 21.285156 21.558594 L 7.027344 2.3125 L 4.65625 2.3125 Z M 19.078125 21.558594 " />                  
                  </svg>
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link target="_blank" href="https://www.github.com/keploy/keploy" className="flex justify-center items-center text-secondary-300 hover:text-primary-300 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            {/*<li className="ml-4">*/}
            {/*  <Link href="#0" className="flex justify-center items-center text-secondary-300 hover:text-primary-300 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">*/}
            {/*    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />*/}
            {/*    </svg>*/}
            {/*  </Link>*/}
            {/*</li>*/}
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-neutral-300 mr-4">&copy; Keploy Inc 2023. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}

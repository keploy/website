import Image from 'next/image';
import CommunityBunny from '@/public/images/community-bunny.png';
import React from 'react';

export default function Community() {
  return (
    <section className="relative xl:-mt-[20vh]">
      <div className="max-w-3xl mx-auto text-center ">
        <h2 className="h2 text-secondary-300 ">
          🐰 Join the Keploy community ✨
        </h2>
      </div>

      <div className="relative ">
        {/* <Image
          src={CommunityBunny}
          alt="Community bunny"
          layout="fill"
          objectFit="contain"
        /> */}

        <div className="relative z-10 flex flex-col items-center justify-between py-12 md:flex-row md:py-20">
          <div className="flex flex-col items-center w-9/12 space-y-4 md:flex-1 md:items-end md:space-y-4">
            {/* Left Side Cards */}
            <a
              href="https://twitter.com/Keployio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-full p-4 bg-white border rounded-lg shadow-md xl:w-1/2 md:w-3/4 border-accent-500 hover:shadow-xl"
            >
              <div className="text-center">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:mr-2"
                >
                  <path
                    d="M31.439 6.599c-1.11.496-2.303.832-3.557.983a6.256 6.256 0 0 0 2.723-3.458 12.3 12.3 0 0 1-3.933 1.516 6.165 6.165 0 0 0-4.52-1.972c-3.42 0-6.193 2.798-6.193 6.251 0 .488.056.963.16 1.422-5.15-.262-9.712-2.75-12.767-6.53a6.289 6.289 0 0 0-.838 3.141 6.265 6.265 0 0 0 2.755 5.203 6.138 6.138 0 0 1-2.805-.782v.08c0 3.028 2.134 5.553 4.968 6.128a6.187 6.187 0 0 1-2.797.107c.788 2.482 3.075 4.29 5.786 4.338a12.359 12.359 0 0 1-7.693 2.676c-.5 0-.993-.03-1.478-.087a17.404 17.404 0 0 0 9.493 2.808c11.394 0 17.623-9.522 17.623-17.78 0-.268-.006-.539-.018-.807a12.654 12.654 0 0 0 3.088-3.233l.003-.004Z"
                    fill="#259DF4"
                  />
                </svg>
              </div>
              <div className="mt-2 ml-2">
                <h2 className="text-lg font-semibold sm:text-md">Twitter</h2>
                <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                  Let's talk about regression testing!
                </p>
              </div>
            </a>

            <a
              href="https://github.com/keploy/keploy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-full p-4 bg-white border rounded-lg shadow-md xl:w-1/2 md:w-3/4 border-accent-500 hover:shadow-xl"
            >
              <div className="text-center">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:mr-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.05 1.281A15.1 15.1 0 0 0 1.132 13.957a15.088 15.088 0 0 0 10.145 16.74c.76.138 1.029-.334 1.029-.732v-2.567c-4.217.917-5.107-2.029-5.107-2.029a4.04 4.04 0 0 0-1.677-2.214c-1.363-.926.11-.926.11-.926a3.178 3.178 0 0 1 2.309 1.556 3.224 3.224 0 0 0 4.392 1.26 3.206 3.206 0 0 1 .927-2.02c-3.355-.38-6.876-1.677-6.876-7.411a5.836 5.836 0 0 1 1.547-4.049 5.502 5.502 0 0 1 .149-3.993s1.27-.408 4.151 1.547c2.475-.68 5.088-.68 7.563 0 2.882-1.955 4.142-1.547 4.142-1.547a5.474 5.474 0 0 1 .186 3.965 5.836 5.836 0 0 1 1.547 4.049c0 5.8-3.53 7.069-6.895 7.411a3.566 3.566 0 0 1 1.029 2.78v4.141c0 .491.269.871 1.038.723a15.096 15.096 0 0 0 9.98-16.698A15.09 15.09 0 0 0 16.05 1.28Z"
                    fill="#262626"
                  />
                </svg>
              </div>
              <div className="mt-2 ml-2">
                <h2 className="text-lg font-semibold sm:text-md">Github</h2>
                <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                  Contribute code to Keploy or report a bug
                </p>
              </div>
            </a>
            <a
              href="https://join.slack.com/t/keploy/shared_invite/zt-2dno1yetd-Ec3el~tTwHYIHgGI0jPe7A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-full p-4 bg-white border rounded-lg shadow-md md:hidden xl:w-1/2 md:w-3/4 border-accent-500 hover:shadow-xl"
            >
              <div className="text-center">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:mr-2"
                >
                  <path
                    d="M6.583 20.522a3.28 3.28 0 1 1-3.28-3.28h3.28v3.28ZM8.227 20.522a3.28 3.28 0 0 1 6.559 0v8.197a3.28 3.28 0 1 1-6.56 0v-8.197Z"
                    fill="#E01E5A"
                  />
                  <path
                    d="M11.498 6.56a3.28 3.28 0 1 1 3.28-3.28v3.28h-3.28ZM11.5 8.223a3.28 3.28 0 0 1 0 6.56H3.28a3.28 3.28 0 1 1 0-6.56h8.22Z"
                    fill="#36C5F0"
                  />
                  <path
                    d="M25.422 11.502a3.28 3.28 0 1 1 3.28 3.28h-3.28v-3.28ZM23.778 11.5a3.28 3.28 0 1 1-6.56 0V3.28a3.28 3.28 0 1 1 6.56 0v8.22Z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M20.498 25.441a3.28 3.28 0 1 1-3.28 3.28v-3.28h3.28ZM20.498 23.802a3.28 3.28 0 1 1 0-6.56h8.222a3.28 3.28 0 1 1 0 6.56H20.5Z"
                    fill="#ECB22E"
                  />
                </svg>
              </div>
              <div className="mt-2 ml-2">
                <h2 className="text-lg font-semibold sm:text-md">Slack</h2>
                <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                  Connect and chat with other Keploy users
                </p>
              </div>
            </a>
          </div>

          <div className="flex-col items-center justify-end hidden md:flex md:flex-1">
            <div className="items-center justify-center hidden bg-cover md:flex md:flex-1">
              <Image src={CommunityBunny} alt="Image" />
            </div>
            <a
              href="https://join.slack.com/t/keploy/shared_invite/zt-2dno1yetd-Ec3el~tTwHYIHgGI0jPe7A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-full p-4 bg-white border rounded-lg shadow-md xl:w-1/2 md:w-3/4 border-accent-500 hover:shadow-xl"
            >
              <div className="text-center">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:mr-2"
                >
                  <path
                    d="M6.583 20.522a3.28 3.28 0 1 1-3.28-3.28h3.28v3.28ZM8.227 20.522a3.28 3.28 0 0 1 6.559 0v8.197a3.28 3.28 0 1 1-6.56 0v-8.197Z"
                    fill="#E01E5A"
                  />
                  <path
                    d="M11.498 6.56a3.28 3.28 0 1 1 3.28-3.28v3.28h-3.28ZM11.5 8.223a3.28 3.28 0 0 1 0 6.56H3.28a3.28 3.28 0 1 1 0-6.56h8.22Z"
                    fill="#36C5F0"
                  />
                  <path
                    d="M25.422 11.502a3.28 3.28 0 1 1 3.28 3.28h-3.28v-3.28ZM23.778 11.5a3.28 3.28 0 1 1-6.56 0V3.28a3.28 3.28 0 1 1 6.56 0v8.22Z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M20.498 25.441a3.28 3.28 0 1 1-3.28 3.28v-3.28h3.28ZM20.498 23.802a3.28 3.28 0 1 1 0-6.56h8.222a3.28 3.28 0 1 1 0 6.56H20.5Z"
                    fill="#ECB22E"
                  />
                </svg>
              </div>
              <div className="mt-2 ml-2">
                <h2 className="text-lg font-semibold sm:text-md">Slack</h2>
                <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                  Connect and chat with other Keploy users
                </p>
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center w-9/12 mt-4 space-y-4 md:flex-1 md:items-start md:space-y-4 md:mt-0">
            {/* Right Side Cards */}
            <a
              href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-full p-4 bg-white border rounded-lg shadow-md xl:w-1/2 md:w-3/4 border-accent-500 hover:shadow-xl"
            >
              <div className="text-center">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:mr-2"
                >
                  <path
                    d="m16.7 27.165-6.561-.117c-2.125-.041-4.255.04-6.338-.382-3.168-.632-3.393-3.73-3.628-6.328A43.327 43.327 0 0 1 .586 9.345C.93 7.312 2.288 6.1 4.386 5.967c7.084-.479 14.215-.423 21.283-.198.746.02 1.498.132 2.234.26 3.634.62 3.722 4.13 3.957 7.086a39.213 39.213 0 0 1-.313 8.95c-.36 2.456-1.05 4.514-3.957 4.713-3.644.26-7.204.468-10.858.402 0-.015-.021-.015-.031-.015Z"
                    fill="#fff"
                  />
                  <path
                    d="m16.7 27.165-6.561-.117c-2.125-.041-4.255.04-6.338-.382-3.168-.632-3.393-3.73-3.628-6.328A43.327 43.327 0 0 1 .586 9.345C.93 7.312 2.288 6.1 4.386 5.967c7.084-.479 14.215-.423 21.283-.198.746.02 1.498.132 2.234.26 3.634.62 3.722 4.13 3.957 7.086a39.213 39.213 0 0 1-.313 8.95c-.36 2.456-1.05 4.514-3.957 4.713-3.644.26-7.204.468-10.858.402 0-.015-.021-.015-.031-.015Zm-3.857-6.215c2.746-1.539 5.44-3.052 8.17-4.58-2.752-1.539-5.44-3.052-8.17-4.58v9.16Z"
                    fill="red"
                  />
                </svg>
              </div>
              <div className="mt-2 ml-2">
                <h2 className="text-lg font-semibold sm:text-md">Youtube</h2>
                <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                  Learn with Keploy team and community videos
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/74471957"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-full p-4 bg-white border rounded-lg shadow-md xl:w-1/2 md:w-3/4 border-accent-500 hover:shadow-xl"
            >
              <div className="text-center">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:mr-2"
                >
                  <g clipPath="url(#linkedin_inline_svg__a)">
                    <path
                      d="M0 2.346C0 1.086 1.06.062 2.365.062h27.27C30.941.063 32 1.085 32 2.346v27.306c0 1.26-1.059 2.282-2.365 2.282H2.365C1.059 31.934 0 30.913 0 29.652V2.345Z"
                      fill="#069"
                    />
                    <path
                      d="M9.723 26.735v-14.35H4.935v14.35h4.789ZM7.33 10.427c1.67 0 2.709-1.102 2.709-2.479-.031-1.408-1.04-2.48-2.677-2.48-1.64 0-2.71 1.072-2.71 2.48 0 1.377 1.04 2.479 2.646 2.479h.031Zm5.044 16.308h4.788v-8.013c0-.428.031-.857.158-1.163.346-.857 1.133-1.745 2.456-1.745 1.733 0 2.426 1.316 2.426 3.245v7.676h4.788v-8.228c0-4.407-2.362-6.458-5.512-6.458-2.583 0-3.718 1.438-4.348 2.418h.032v-2.08h-4.788c.062 1.345 0 14.348 0 14.348Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="linkedin_inline_svg__a">
                      <path fill="#fff" d="M0 0h32v32H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-2 ml-2">
                <h2 className="text-lg font-semibold sm:text-md">LinkedIn</h2>
                <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                  {' '}
                  Follow us and connect with other Keploy engineers!
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* <div className="relative grid h-screen grid-cols-12 grid-rows-6 gap-12">
          <div className="absolute left-0 right-0 hidden bg-cover md:flex -z-10 place-content-center">
            <Image src={CommunityBunny} alt="Image" className="max-w-3xl"></Image>
          </div>
          <a
            href="https://twitter.com/Keployio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start w-full col-start-6 col-end-8 row-start-1 row-end-2 p-4 bg-white border rounded-lg shadow-md border-accent-500 hover:shadow-xl"
          >
            <div className="text-center">
              <svg
                width="50%"
                height="50%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:mr-2"
              >
                <path
                  d="M31.439 6.599c-1.11.496-2.303.832-3.557.983a6.256 6.256 0 0 0 2.723-3.458 12.3 12.3 0 0 1-3.933 1.516 6.165 6.165 0 0 0-4.52-1.972c-3.42 0-6.193 2.798-6.193 6.251 0 .488.056.963.16 1.422-5.15-.262-9.712-2.75-12.767-6.53a6.289 6.289 0 0 0-.838 3.141 6.265 6.265 0 0 0 2.755 5.203 6.138 6.138 0 0 1-2.805-.782v.08c0 3.028 2.134 5.553 4.968 6.128a6.187 6.187 0 0 1-2.797.107c.788 2.482 3.075 4.29 5.786 4.338a12.359 12.359 0 0 1-7.693 2.676c-.5 0-.993-.03-1.478-.087a17.404 17.404 0 0 0 9.493 2.808c11.394 0 17.623-9.522 17.623-17.78 0-.268-.006-.539-.018-.807a12.654 12.654 0 0 0 3.088-3.233l.003-.004Z"
                  fill="#259DF4"
                />
              </svg>
            </div>
            <div className="mt-2 ml-2">
              <h2 className="text-lg font-semibold sm:text-md">Lu.ma</h2>
              <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                Let's talk about regression testing!
              </p>
            </div>
          </a>

          <a
            href="https://twitter.com/Keployio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start w-full col-start-3 col-end-5 row-start-2 row-end-3 p-4 bg-white border rounded-lg shadow-md border-accent-500 hover:shadow-xl"
          >
            <div className="text-center">
              <svg
                width="50%"
                height="50%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:mr-2"
              >
                <path
                  d="M31.439 6.599c-1.11.496-2.303.832-3.557.983a6.256 6.256 0 0 0 2.723-3.458 12.3 12.3 0 0 1-3.933 1.516 6.165 6.165 0 0 0-4.52-1.972c-3.42 0-6.193 2.798-6.193 6.251 0 .488.056.963.16 1.422-5.15-.262-9.712-2.75-12.767-6.53a6.289 6.289 0 0 0-.838 3.141 6.265 6.265 0 0 0 2.755 5.203 6.138 6.138 0 0 1-2.805-.782v.08c0 3.028 2.134 5.553 4.968 6.128a6.187 6.187 0 0 1-2.797.107c.788 2.482 3.075 4.29 5.786 4.338a12.359 12.359 0 0 1-7.693 2.676c-.5 0-.993-.03-1.478-.087a17.404 17.404 0 0 0 9.493 2.808c11.394 0 17.623-9.522 17.623-17.78 0-.268-.006-.539-.018-.807a12.654 12.654 0 0 0 3.088-3.233l.003-.004Z"
                  fill="#259DF4"
                />
              </svg>
            </div>
            <div className="mt-2 ml-2">
              <h2 className="text-lg font-semibold sm:text-md">Twitter</h2>
              <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                Let's talk about regression testing!
              </p>
            </div>
          </a>

          <a
            href="https://github.com/keploy/keploy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start w-full col-start-4 col-end-6 row-start-3 row-end-4 p-4 bg-white border rounded-lg shadow-md border-accent-500 hover:shadow-xl"
          >
            <div className="text-center">
              <svg
                width="50%"
                height="50%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:mr-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.05 1.281A15.1 15.1 0 0 0 1.132 13.957a15.088 15.088 0 0 0 10.145 16.74c.76.138 1.029-.334 1.029-.732v-2.567c-4.217.917-5.107-2.029-5.107-2.029a4.04 4.04 0 0 0-1.677-2.214c-1.363-.926.11-.926.11-.926a3.178 3.178 0 0 1 2.309 1.556 3.224 3.224 0 0 0 4.392 1.26 3.206 3.206 0 0 1 .927-2.02c-3.355-.38-6.876-1.677-6.876-7.411a5.836 5.836 0 0 1 1.547-4.049 5.502 5.502 0 0 1 .149-3.993s1.27-.408 4.151 1.547c2.475-.68 5.088-.68 7.563 0 2.882-1.955 4.142-1.547 4.142-1.547a5.474 5.474 0 0 1 .186 3.965 5.836 5.836 0 0 1 1.547 4.049c0 5.8-3.53 7.069-6.895 7.411a3.566 3.566 0 0 1 1.029 2.78v4.141c0 .491.269.871 1.038.723a15.096 15.096 0 0 0 9.98-16.698A15.09 15.09 0 0 0 16.05 1.28Z"
                  fill="#262626"
                />
              </svg>
            </div>
            <div className="mt-2 ml-2">
              <h2 className="text-lg font-semibold sm:text-md">Github</h2>
              <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                Contribute code to Keploy or report a bug
              </p>
            </div>
          </a>
          <a
            href="https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start w-full col-start-4 col-end-6 row-start-3 row-end-4 p-4 bg-white border rounded-lg shadow-md border-accent-500 hover:shadow-xl"
          >
            <div className="text-center">
              <svg
                width="50%"
                height="50%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:mr-2"
              >
                <path
                  d="M6.583 20.522a3.28 3.28 0 1 1-3.28-3.28h3.28v3.28ZM8.227 20.522a3.28 3.28 0 0 1 6.559 0v8.197a3.28 3.28 0 1 1-6.56 0v-8.197Z"
                  fill="#E01E5A"
                />
                <path
                  d="M11.498 6.56a3.28 3.28 0 1 1 3.28-3.28v3.28h-3.28ZM11.5 8.223a3.28 3.28 0 0 1 0 6.56H3.28a3.28 3.28 0 1 1 0-6.56h8.22Z"
                  fill="#36C5F0"
                />
                <path
                  d="M25.422 11.502a3.28 3.28 0 1 1 3.28 3.28h-3.28v-3.28ZM23.778 11.5a3.28 3.28 0 1 1-6.56 0V3.28a3.28 3.28 0 1 1 6.56 0v8.22Z"
                  fill="#2EB67D"
                />
                <path
                  d="M20.498 25.441a3.28 3.28 0 1 1-3.28 3.28v-3.28h3.28ZM20.498 23.802a3.28 3.28 0 1 1 0-6.56h8.222a3.28 3.28 0 1 1 0 6.56H20.5Z"
                  fill="#ECB22E"
                />
              </svg>
            </div>
            <div className="mt-2 ml-2">
              <h2 className="text-lg font-semibold sm:text-md">Slack</h2>
              <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                Connect and chat with other Keploy users
              </p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start w-full col-start-9 col-end-11 row-start-1 row-end-2 p-4 bg-white border rounded-lg shadow-md border-accent-500 hover:shadow-xl"
          >
            <div className="text-center">
              <svg
                width="50%"
                height="50%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:mr-2"
              >
                <path
                  d="m16.7 27.165-6.561-.117c-2.125-.041-4.255.04-6.338-.382-3.168-.632-3.393-3.73-3.628-6.328A43.327 43.327 0 0 1 .586 9.345C.93 7.312 2.288 6.1 4.386 5.967c7.084-.479 14.215-.423 21.283-.198.746.02 1.498.132 2.234.26 3.634.62 3.722 4.13 3.957 7.086a39.213 39.213 0 0 1-.313 8.95c-.36 2.456-1.05 4.514-3.957 4.713-3.644.26-7.204.468-10.858.402 0-.015-.021-.015-.031-.015Z"
                  fill="#fff"
                />
                <path
                  d="m16.7 27.165-6.561-.117c-2.125-.041-4.255.04-6.338-.382-3.168-.632-3.393-3.73-3.628-6.328A43.327 43.327 0 0 1 .586 9.345C.93 7.312 2.288 6.1 4.386 5.967c7.084-.479 14.215-.423 21.283-.198.746.02 1.498.132 2.234.26 3.634.62 3.722 4.13 3.957 7.086a39.213 39.213 0 0 1-.313 8.95c-.36 2.456-1.05 4.514-3.957 4.713-3.644.26-7.204.468-10.858.402 0-.015-.021-.015-.031-.015Zm-3.857-6.215c2.746-1.539 5.44-3.052 8.17-4.58-2.752-1.539-5.44-3.052-8.17-4.58v9.16Z"
                  fill="red"
                />
              </svg>
            </div>
            <div className="mt-2 ml-2">
              <h2 className="text-lg font-semibold sm:text-md">Youtube</h2>
              <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                Learn with Keploy team and community videos
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/74471957"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start w-full col-start-9 col-end-11 row-start-2 row-end-3 p-4 bg-white border rounded-lg shadow-md border-accent-500 hover:shadow-xl"
          >
            <div className="text-center">
              <svg
                width="50%"
                height="50%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:mr-2"
              >
                <g clipPath="url(#linkedin_inline_svg__a)">
                  <path
                    d="M0 2.346C0 1.086 1.06.062 2.365.062h27.27C30.941.063 32 1.085 32 2.346v27.306c0 1.26-1.059 2.282-2.365 2.282H2.365C1.059 31.934 0 30.913 0 29.652V2.345Z"
                    fill="#069"
                  />
                  <path
                    d="M9.723 26.735v-14.35H4.935v14.35h4.789ZM7.33 10.427c1.67 0 2.709-1.102 2.709-2.479-.031-1.408-1.04-2.48-2.677-2.48-1.64 0-2.71 1.072-2.71 2.48 0 1.377 1.04 2.479 2.646 2.479h.031Zm5.044 16.308h4.788v-8.013c0-.428.031-.857.158-1.163.346-.857 1.133-1.745 2.456-1.745 1.733 0 2.426 1.316 2.426 3.245v7.676h4.788v-8.228c0-4.407-2.362-6.458-5.512-6.458-2.583 0-3.718 1.438-4.348 2.418h.032v-2.08h-4.788c.062 1.345 0 14.348 0 14.348Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="linkedin_inline_svg__a">
                    <path fill="#fff" d="M0 0h32v32H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>gitgit
            <div className="mt-2 ml-2">
              <h2 className="text-lg font-semibold sm:text-md">LinkedIn</h2>
              <p className="mt-1 text-gray-600 md:text-sm sm:text-sm ">
                {" "}
                Follow us and connect with other Keploy engineers!
              </p>
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
}

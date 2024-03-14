"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Installation = () => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  const handleclick = (index: number) => {
    let codeToCopy = "";
    switch (index) {
      case 0:
        codeToCopy =
          "curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source";
        break;
      case 1:
        codeToCopy = "keploy record -c 'go run main.go'";
        break;
      case 2:
        codeToCopy = "keploy test -c 'go run main.go' --delay 10";
        break;
      default:
        break;
    }

    if (codeToCopy !== "") {
      navigator.clipboard.writeText(codeToCopy).catch((error) => {
        console.error("Error copying code to clipboard: ", error);
      });
    }

    setCheckedIndex(index);
    setTimeout(() => {
      setCheckedIndex(null);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 ">
      {/* Hero content */}
      <div className="pt-30 pb-12 md:pt-30 md:pb-20 rounded-lg p-10 gap-16">
        {/* Section header */}
        <div className="text-center pb-10 md:pb-10">
          <h1
            className="lg:text-3xl text-3xl text-secondary-400 font-extrabold leading-tighter tracking-tighter mb-4 "
            data-aos="zoom-y-out"
          >
            Getting Started
            <br />
          </h1>
          <h1
            className="lg:text-2xl text-2xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-4 "
            data-aos="zoom-y-out"
          >
            Start Recording Test cases with code-less integration
            <br />
          </h1>
        </div>

        <div
          className="max-w-4xl mx-auto pb-12 md:pb-16 "
          data-aos="zoom-y-out"
        >
          <h1 className="text-2xl text-secondary-300 font-semibold leading-tighter tracking-tighter mb-4 ">
            1. Installing
          </h1>
          <div className="flex flex-row gap-5">
            <div className="bg-gray-900 p-4 rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-green-300 flex-grow sm:text-sm lg:text-base">
                {" "}
                curl -O
                https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh
                && source
              </code>
              <Image
                priority
                src={
                  checkedIndex === 0 ? "/images/tick.svg" : "/images/copy.svg"
                }
                height={25}
                width={25}
                onClick={() => handleclick(0)}
                alt="copy icon"
                className="cursor-pointer ml-2"
              />
              {checkedIndex == 0 ? (
                <div className=" text-green-300 ml-1">copied</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div
          className="max-w-4xl mx-auto pb-12 md:pb-16 "
          data-aos="zoom-y-out"
        >
          <h1 className="text-2xl text-secondary-300  font-semibold leading-tighter tracking-tighter mb-4 ">
            2. Record
          </h1>
          <div className="flex flex-row gap-5">
            <div className="bg-gray-900 p-4  rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-green-300 flex-grow sm:text-sm lg:text-base">
                {" "}
                keploy record -c 'go run main.go'
              </code>
              <Image
                priority
                src={
                  checkedIndex === 1 ? "/images/tick.svg" : "/images/copy.svg"
                }
                height={25}
                width={25}
                onClick={() => handleclick(1)}
                alt="Copy Icon"
                className="cursor-pointer ml-2"
              />
              {checkedIndex == 1 ? (
                <div className=" text-green-300 ml-1">copied</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto pb-12 md:pb-16" data-aos="zoom-y-out">
          <h1 className="text-2xl text-secondary-300  font-semibold leading-tighter tracking-tighter mb-4 ">
            3. Test
          </h1>
          <div className="flex flex-row gap-5">
            <div className="bg-gray-900 p-4  rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-green-300 flex-grow sm:text-sm lg:text-base">
                {" "}
                keploy test -c 'go run main.go' --delay 10
              </code>
              <Image
                priority
                src={
                  checkedIndex === 2 ? "/images/tick.svg" : "/images/copy.svg"
                }
                height={25}
                width={25}
                onClick={() => handleclick(2)}
                alt="Copy Icon"
                className="cursor-pointer ml-2"
              />
              {checkedIndex == 2 ? (
                <div className=" text-green-300 ml-1">copied</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <Link href="http://keploy.io/docs/">
          <p className="text-center text-gray-700 hover:underline">
            Explore More on Docs
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Installation;

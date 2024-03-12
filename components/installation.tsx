"use client";
import React, { useState } from "react";
import Image from "next/image";

const Installation = () => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  const handleclick = (index: number) => {
    let codeToCopy = "";
    switch (index) {
      case 0:
        codeToCopy =
          "curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh";
        break;
      case 1:
        codeToCopy = "keploy record -c 'CMD_TO_RUN_APP'";
        break;
      case 2:
        codeToCopy = "keploy test -c 'CMD_TO_RUN_APP' --delay 10";
        break;
      default:
        break;
    }

    if (codeToCopy !== "") {
      navigator.clipboard
        .writeText(codeToCopy)
        .then(() => {
          console.log("Code copied to clipboard");
        })
        .catch((error) => {
          console.error("Error copying code to clipboard: ", error);
        });
    }

    setCheckedIndex(index);
    setTimeout(() => {
      setCheckedIndex(null);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
      {/* Hero content */}
      <div className="pt-30 pb-12 md:pt-30 md:pb-20 border border-slate-300 rounded-lg p-10 gap-16">
        {/* Section header */}
        <div className="text-center pb-10 md:pb-10">
          <h1
            className="lg:text-3xl text-3xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-4 "
            data-aos="zoom-y-out"
          >
            Getting Started
            <br />
          </h1>
          <h1
            className="lg:text-2xl text-2xl text-secondary-300 font-extrabold leading-tighter tracking-tighter mb-4 "
            data-aos="zoom-y-out"
          >
            Available on
            <br />
          </h1>
        </div>
        {/* <div className="max-w-3xl mx-auto flex flex-row justify-between gap-1">
            <Image
            priority
            src={"/images/windows.png"}
            height={50}
            width={50}
            alt="Working on windows"
            />
            <Image
            priority
            src={"/images/linux.png"}
            height={50}
            width={50}
            alt="Working on windows"
            />
            <Image
            priority
            src={"/images/macos.png"}
            height={50}
            width={50}
            alt="Working on windows"
            />

           
        </div> */}
        <div className="max-w-4xl mx-auto pb-12 md:pb-16">
          <h1 className="text-2xl text-secondary-300  font-semibold leading-tighter tracking-tighter mb-4 ">
            1. Installing
          </h1>
          <div className="flex flex-row gap-3">
            <div className="bg-slate-700 p-4  rounded-lg flex flex-row">
              <code className=" text-slate-200">
                {" "}
                curl -O
                https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh
                &amp;&amp; source keploy.sh
              </code>
              <Image
                priority
                src={
                  checkedIndex === 0 ? "/images/tick.svg" : "/images/copy.svg"
                }
                height={25}
                width={25}
                onClick={() => handleclick(0)}
                alt="Follow us on Twitter"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto pb-12 md:pb-16">
          <h1 className="text-2xl text-secondary-300  font-semibold leading-tighter tracking-tighter mb-4 ">
            2. Record
          </h1>
          <div className="flex flex-row gap-5">
            <div className="bg-slate-700 p-4  rounded-lg flex flex-row items-center flex-grow">
              <code className=" text-slate-200 flex-grow">
                {" "}
                keploy record -c "CMD_TO_RUN_APP"
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
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto pb-12 md:pb-16">
          <h1 className="text-2xl text-secondary-300  font-semibold leading-tighter tracking-tighter mb-4 ">
            3. Test
          </h1>
          <div className="flex flex-row gap-5">
            <div className="bg-slate-700 p-4  rounded-lg flex flex-row items-center flex-grow">
              <code className=" text-slate-200 flex-grow">
                {" "}
                keploy test -c "CMD_TO_RUN_APP" --delay 10
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
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500">Let The Testing Begin</p>
      </div>
    </div>
  );
};

export default Installation;

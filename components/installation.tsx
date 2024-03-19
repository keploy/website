"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
const Installation = () => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="success" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
      </IconButton>
    </React.Fragment>
  );

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

    setOpen(true);

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
          <h1 className="h2 mb-4 text-secondary-300" data-aos="zoom-y-out">
            Getting Started
            <br />
          </h1>
          <h1 className="text-xl text-gray-600" data-aos="zoom-y-out">
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
             
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            className="btn text-secondary-300 bg-primary-300 hover:font-semibold w-full mb-4 sm:w-auto sm:mb-0"
            href="https://keploy.io/docs"
          >
            Explore more on Docs{" "}
          </a>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Copied to Clipboard"
          action={action}
        />
      </div>
    </div>
  );
};

export default Installation;
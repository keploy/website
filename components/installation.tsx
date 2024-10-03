"use client";
import React, { useState } from "react";
import Image from "next/image";
import Snackbar from "@mui/material/Snackbar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import CopyButton from "@/public/images/icons8-copy-96.png";
import SvgIcon from "@mui/material/SvgIcon";
import { IconButton as MuiButton } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import { NeonGradientCard } from "./magicui/NeonGradientCard";

const Installation = () => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);
  const [open, setOpen] = React.useState(false);

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
      <MuiButton color={"success"} onClick={handleClose}>
        <SvgIcon component={CloseRoundedIcon} inheritViewBox />
      </MuiButton>
    </React.Fragment>
  );

  const handleclick = (index: number) => {
    let codeToCopy = "";
    switch (index) {
      case 0:
        codeToCopy =
          "curl --silent -O -L https://keploy.io/install.sh && source install.sh";
        break;
      case 1:
        codeToCopy = "keploy record -c CMD_TO_RUN_APP";
        break;
      case 2:
        codeToCopy = "keploy test -c CMD_TO_RUN_APP --delay 10";
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
            1. Installing 📥
          </h1>
          <p className=" text-gray-700 mb-2 text-xs md:text-sm lg:text-base">
            Integrate Keploy by installing the open-source agent locally. No
            code-changes required.
          </p>
          <div className="flex flex-row gap-5">
            <div className="bg-gray-900 p-4 rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-green-300 flex-grow text-xs md:text-sm lg:text-base truncate break-words">
                {" "}
                curl --silent -O -L https://keploy.io/install.sh && source install.sh
              </code>
              <Image
                priority
                src={checkedIndex === 0 ? "/images/tick.svg" : CopyButton}
                height={25}
                width={25}
                onClick={() => handleclick(0)}
                alt="copy icon"
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto pb-9 md:pb-16 " data-aos="zoom-y-out">
          <h1 className="text-2xl text-secondary-300  font-semibold leading-tighter tracking-tighter mb-4 ">
            2. Record 🎬
          </h1>
          <p className=" text-gray-700 mb-2 text-xs md:text-sm lg:text-base">
            Start your app with keploy to convert API calls as tests and
            mocks/stubs. Make some API calls to your app.
          </p>

          <div className="flex flex-row gap-5">
            <div className="bg-gray-900 p-4  rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-green-300 flex-grow text-xs md:text-sm lg:text-base truncate break-words">
                {" "}
                keploy record -c CMD_TO_RUN_APP
              </code>
              <Image
                priority
                src={checkedIndex === 1 ? "/images/tick.svg" : CopyButton}
                height={25}
                width={25}
                onClick={() => handleclick(1)}
                alt="Copy Icon"
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
          <p className=" text-gray-700 mb-0 mt-2 text-xs md:text-sm lg:text-base leading-6">
            <code className="text-gray-700 bg-gray-300 p-0.5 mx-1 rounded">CMD_TO_RUN_APP</code> is the command to start you app. Say,
            <code className="text-gray-700 bg-gray-300 p-0.5 mx-1 rounded">
              python main.py
            </code>{" "}
            or{" "}
            <code className="text-gray-700 bg-gray-300 p-0.5 mx-1 rounded">
              npm start
            </code>{" "}
            or{" "}
            <code className="text-gray-700 bg-gray-300 p-0.5 mx-1 rounded">
              java -jar xyz.jar
            </code>{" "}
            or
            <code className="text-gray-700 bg-gray-300 p-0.5 mx-1 rounded">
              go run main.go
            </code>
          </p>
        </div>
        <div className="max-w-4xl mx-auto pb-12 md:pb-16" data-aos="zoom-y-out">
          <h1 className="text-2xl text-secondary-300  font-semibold leading-tighter tracking-tighter mb-4 ">
            3. Test 🧪
          </h1>
          <p className=" text-gray-700 mb-2 mt-1 text-xs md:text-sm lg:text-base">
            Shut down Database , Redis , Kafka and other services. Keploy don't need
            those during test.
          </p>

          <div className="flex flex-row gap-5">
            <div className="bg-gray-900 p-4  rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-green-300 flex-grow text-xs md:text-sm lg:text-base truncate break-words">
                {" "}
                keploy test -c CMD_TO_RUN_APP --delay 10
              </code>
              <Image
                priority
                src={checkedIndex === 2 ? "/images/tick.svg" : CopyButton}
                height={25}
                width={25}
                onClick={() => handleclick(2)}
                alt="Copy Icon"
                className="cursor-pointer ml-2"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <a href="https://www.github.com/keploy/keploy" className="h-[50px] justify-center">
          <NeonGradientCard borderSize={3}
              className=" text-secondary-300 text-center bg-primary-300 w-[200px] md:text-sm lg:text-base hover:font-semibold mb-4  sm:mb-0"
            >Explore on Github
          </NeonGradientCard>
        </a>
        </div>
        <div className=" max-w-sm">
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message="Copied to Clipboard"
            action={action}
            ContentProps={{
              sx: {
                background: "black",
                color: "#86EFAC",
                maxWidth: "250px",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Installation;

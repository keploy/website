import React, { useState } from "react";
import Image from "next/image";
import HorizontalLinearStepper from "./stepper";
const ContentStarting = () => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);
  const handleclick = (index: number) => {
    let codeToCopy = "";
    switch (index) {
      case 0:
        codeToCopy =
          'keploy record -c "npm run dev"';
        break;
      case 1:
        codeToCopy = "fetch";
        break;
      case 2:
        codeToCopy = "curl --request GET \  --url http://localhost:8000/students";
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
    <div className="p-10 items-center ">
      {" "}
      {/* Increased padding */}
      <p className=" font-headingProgress text-center mt-6 text-4xl text-slate-50 mb-10 font-bold">
        Generating Automatic Testcases
      </p>
      <div className="flex flex-col gap-10 text-base ">
        <div className="flex flex-row gap-5">
          <div className="h-10 w-2 rounded bg-slate-200"></div>
          <h1 className="text-base flex-grow">
            For Starting the Keploy and Recording Test Cases. 
            <br />
            <p className=" text-neutral-400 text-sm m-2"> Copy the below code and execute in the terminal </p>
            <div className="bg-gray-700 max-w-full p-4 m-2 rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-white flex-grow sm:text-sm lg:text-base">
                {" "}
                keploy record -c "npm run dev"
              </code>
              <Image
                priority
                src={
                  checkedIndex === 0 ? "/tick.svg" : "/copy.svg"
                }
                height={25}
                width={25}
                onClick={() => handleclick(0)}
                alt="copy icon"
                className="cursor-pointer ml-2"
              />
              
            </div>
          </h1>
        </div>
        
        <div className="flex flex-row gap-5">
          <div className="h-10 w-2 rounded bg-slate-200"></div>
          <h1 className="text-base flex-grow">
            Now you can Open use Curl for making calls to API endpoint and Keploy will capture it!!
            <br/>
            <p className="text-neutral-400 text-sm m-2">Open a new tab and Paste the following command in it:</p>
            <div className="bg-gray-700 max-w-full p-4 m-2 rounded-lg flex flex-row items-center flex-grow overflow-x-auto">
              <code className=" text-white flex-grow sm:text-sm lg:text-base">
                {" "}
                curl --request GET \  --url http://localhost:8000/students
              </code>
              <Image
                priority
                src={
                  checkedIndex === 2 ? "/tick.svg" : "/copy.svg"
                }
                height={25}
                width={25}
                onClick={() => handleclick(2)}
                alt="copy icon"
                className="cursor-pointer ml-2"
              />
              
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContentStarting;

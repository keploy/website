import React from "react";
import logo from "@/public/images/atg/defaultlogo.svg";
import Image from "next/image";
const DefaultEditorPage = ({lightTheme}:{lightTheme:boolean}) => {
  return (
    <div className="h-full w-full flex gap-2 flex-col items-center justify-center bg-neutral-200    border border-gray-200  ">
      <Image
        src={logo}
        
        alt="Logo"
        width={200}
        height={200}
        className=" basis-2/3 mt-2 w-full"
      />
      {/* <p className="text-center basis-1/3  text-slate-700 font-bold text-4xl">
        Welcome to Keploy
      </p> */}
    </div>
  );
};

export default DefaultEditorPage;

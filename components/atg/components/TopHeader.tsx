import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Link from "next/link";
import CropFreeIcon from '@mui/icons-material/CropFree'; // Import fullscreen icon
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'; // Import fullscreen exit icon
import useFullScreen from "../fullscreen";

// Define the MaterialUI switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#f5f5f5", // Gray track when checked
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#ff914d", // Button color
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#EAEAEA", // Gray track when unchecked
    borderRadius: 20 / 2,
  },
}));

const TopHeader = ({
  settingTheme,
  enterFullScreen,
  enterSmallScreen,
  fullscreen,
}: {
  settingTheme: () => void;
  enterFullScreen:()=>void;
  enterSmallScreen:()=>void;
  fullscreen:boolean;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    settingTheme();
    document.body.classList.toggle("dark-mode", !isDarkMode); // Add a class to the body element
  };

  const toggleScreen = ()=>{
    if(fullscreen){
      enterSmallScreen();
    }else{
      enterFullScreen();
    }
  }

  
  return (
    <div
      className={`flex justify-between items-center p-2 rounded-t-md ${
        isDarkMode ? "bg-[#1a1d23] text-white" : "bg-neutral-200 text-black"
      }`}
    >
      <Image
        src={logo}
        alt="Logo"
        width={200}
        height={200}
        className=" flex-auto"
      />
      <div
        className={`font-semibold py-1 shadow-inner w-full text-center mr-6 rounded-md border ${
          isDarkMode
            ? "bg-[#171a1e] text-white border-neutral-600"
            : "bg-white text-gray-500 border-gray-200"
        }`}
      >
        <p className={`content-end text-sm text-center`}>
          If you like Keploy, give it a star on{" "}
          <span>
            {" "}
            <Link
              href={"https://github.com/keploy/"}
              target=""
              className="hover:underline"
            >
              GitHub
            </Link>{" "}
          </span>{" "}
          and follow us on{" "}
          <Link
            href={"https://twitter.com/keployio"}
            className="hover:underline"
          >
            {" "}
            Twitter
          </Link>{" "}
          ❤️
        </p>
      </div>
      <div className="flex items-center scale-[0.80]">
        <FormControlLabel
          control={
            <MaterialUISwitch checked={isDarkMode} onChange={toggleTheme} />
          }
          label=""
          className="ml-4"
        />
        <button onClick={toggleScreen} className="ml-4">
          {fullscreen ? (
            <FullscreenExitIcon style={{ color: isDarkMode ? "white" : "black" }} />
          ) : (
            <CropFreeIcon style={{ color: isDarkMode ? "white" : "black" }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TopHeader;

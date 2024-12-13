import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const LottiePlayer = ({VideoPath , className}:{VideoPath:any , className?:string}) => {
  return (  
    <div>
       <Player
        autoplay
        loop
        src={VideoPath}
        className={className ? className : "w-full max-w-xs md:max-w-sm lg:max-w-md"} // Adjust width for different screen sizes
        style={{ height: "60%" }} // Reduced height for responsiveness
        keepLastFrame={true}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default LottiePlayer;

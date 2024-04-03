import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const LottiePlayer = ({VideoPath , className}:{VideoPath:any , className?:string}) => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={VideoPath}
        className={className ? (className):("w-full")}
        // style={{ height: "500px", width: "370px" }}
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

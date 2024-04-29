import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const LottiePlayer = ({
  VideoPath,
  className,
}: {
  VideoPath: any;
  className?: string;
}) => {
  return (
    <div
      className="absolute h-full my-auto"
    >
      <Player
        autoplay
        loop
        src={VideoPath}
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

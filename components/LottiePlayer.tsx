import React from "react";
import LottieLight from 'react-lottie-player/dist/LottiePlayerLight';


const LottiePlayer = ({VideoPath , className}:{VideoPath:any , className?:string}) => {
  return (  
    <div>
       <LottieLight
        useSubframes={false}
        speed={3}
        play
        animationData={VideoPath}
        className={className ? className : "w-full max-w-xs md:max-w-sm lg:max-w-md"} // Adjust width for different screen sizes
        style={{ height: "50%" }} // Reduced height for responsiveness
      >
      </LottieLight>
      </div>
  );
};

export default LottiePlayer;

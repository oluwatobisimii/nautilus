import React, { useEffect } from "react";
import Button from "./shared/Button";
import video from "../assets/video.mp4";
import heroBg from "../assets/heroBg.png";



function Hero() {
  useEffect(() => {
    document.getElementById("video").play();
  }, []);

  return (
    <div className="bg-[#150e3b] md:h-[55vh] lg:h-[80vh] relative overflow-hidden">
      <div className="w-full h-full absolute z-0 overflow-hidden bg-green-100 mix-blend-overlay">
        <img src={heroBg} alt="" className="w-full " />
      </div>
      <div className="container mx-auto p-10 md:px-10 lg:px-20 flex h-full lg:py-0 relative z-10 justify-between">
        <div className=" md:w-[80%] lg:w-[60%] xl:w-[45%] space-y-8  font-cabinet self-center">
          <p className="text-6xl md:text-7xl lg:6xl 2xl:text-7xl 2xl:font-normal font-light leading-16 text-white">
            Creating a reality from the future you can imagine
          </p>
          <p className="text-base font-bold leading-normal text-blue-100">
            We help startups architect and build infrastructure to scale
          </p>
          <Button>
            <a href="https://chp.nautilustech.xyz/" target="_blank" rel="noreferrer">Choose a cloud provider</a>
          </Button>
        </div>
      </div>
      <div className="w-[65%] bg-red-200 absolute right-0 z-0 top-0 h-[80vh]">
        <div className="absolute w-full h-full z-20 bg-gradient-to-r from-[#080421] to-[#00256000] top-0 "></div>
        <video
          className="w-full h-full m-0 aspect-video object-cover"
          src={video}
          autoPlay
          loop
          id="video"
        />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import Typo from "./Typo";
import ReactPlayer from 'react-player'

const Midsection = () => {
  return (
    <div className="w-full h-full flex z-50">
      <div className="w-[50%]">
        <Typo />
      </div>

      <div className="w-[50%] ">
      <div className="absolute  circle2 opacity-20 "></div>

        <div className="w-[700px] h-[400px] mr-28 relative mt-28 ">
          {/* <div className="absolute top-[10%] circle2 opacity-20 "></div> */}

          {/* react player */}
          <div className="">
          <ReactPlayer url='https://www.youtube.com/watch?v=w2FpU36XqAE' controls  width={700} className=" top-0 absolute  w-full h-full" />
          </div>
          {/* react player end */}
        </div>
      </div>
    </div>
  );
};

export default Midsection;

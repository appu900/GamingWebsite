import React from "react";
import { TypeAnimation } from "react-type-animation";
import TextTransition, { presets } from "react-text-transition";
import { useState } from "react";
const TEXTS = ["BGMI", "VALORANT", "BATTLESHIP", "GTA V"];

const Typo = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="text-white px-[16%]">
      <div className="mt-32">
        <TextTransition
          className="text-6xl font-bold mt-2"
          springConfig={presets.wobbly}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </div>

      {/* next section */}

      <div className="mt-10 text-3xl font-semibold">
        <p>PLAY GAMES LIKE A</p>
        <p className="">
          <span className="text-4xl font-bold text-blue-800">PRO </span>AND SHOW YOUR GAMING SKIILS TO THE WORLD
        </p>
         <h1>THE WORLD WITH US</h1>
        <div className="w-full border-t border-blue-600 shadow-3xl shadow-blue-500/50 mt-24  "></div>
       
      </div>
    </div>
  );
};

export default Typo;

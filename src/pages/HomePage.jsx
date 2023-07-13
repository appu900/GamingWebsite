import React from "react";
import Navbar from "../components/Navbar";
import Typo from "../components/Typo";
import Midsection from "../components/Midsection";

const HomePage = () => {
  return (
    <div className="h-[4000px] w-full bg-black">
      <div className="circle absolute top-[4%] opacity-10"></div>
      <Navbar />
      <Midsection />
    </div>
  );
};

export default HomePage;

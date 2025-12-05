import React from "react";
import Logo from "../components/Navbar/Logo";
import Cryp from "../components/Cryp/Cryp";

const Wallet = () => {
  return (
    <>
     <div className="w-full flex items-center justify-between px-6 py-6 relative bg-white ">

      {/* Title */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-[28px] font-semibold text-[#1d1d1d]">
          Select a Wallet
        </h2>

        {/* Animated underline */}
        <div className="relative w-[120px] h-[3px] mt-1 bg-transparent overflow-hidden">
          <div className="absolute inset-0 bg-transparent">
            <div className="h-[3px] w-[30px] bg-[#4c3bff] rounded-full animate-slide"></div>
          </div>
        </div>
      </div>

      {/* Right icons */}
      <div className="flex gap-3">
        <div className="w-[40px] h-[40px] rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 cursor-pointer"></div>
        <div className="w-[40px] h-[40px] rounded-lg bg-[#2C2C35] cursor-pointer"></div>
      </div>

    </div>
    <Cryp/>
    </>
  );
};

export default Wallet;

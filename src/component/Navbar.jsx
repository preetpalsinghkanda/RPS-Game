import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="border-3 my-8 border-[hsl(246,11%,37%)] flex justify-between max-w-3xl rounded-xl mx-auto px-6 py-4">
      <img src={logo} alt="" />
      <div className="border bg-white px-12 rounded-xl py-3">
        <p className="font-bold text-[hsl(229,64%,46%)]  tracking-widest">
          SCORE
        </p>
        <span className="text-6xl text-[hsl(229,25%,31%)] font-bold">12</span>
      </div>
    </div>
  );
};

export default Navbar;

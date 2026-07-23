import React from "react";
import logo from "../assets/logo.svg";

const Navbar = ({ score }) => {
  return (
    <div className="md:border-4 border-2 items-center my-8 border-[#ffffff4e] flex md:mx-auto justify-between md:min-w-2xl sm:min-w-md min-w-full rounded-xl mx-auto px-6 py-4">
      <img className="h-15 md:h-auto" src={logo} alt="" />
      <div className="border flex flex-col justify-center items-center bg-white md:px-12 px-4 rounded-md md:rounded-xl py-2 md:py-3">
        <p className="font-bold text-[hsl(229,64%,46%)]  tracking-widest">
          SCORE
        </p>
        <span className="md:text-6xl text-3xl  text-[hsl(229,25%,31%)] font-bold">
          {score}
        </span>
      </div>
    </div>
  );
};

export default Navbar;

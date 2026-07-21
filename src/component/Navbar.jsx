import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="border flex justify-between max-w-3xl rounded-xl mx-auto px-6 py-4">
      <img src={logo} alt="" />
      <div className="border px-12 rounded-xl py-3">
        <p className="font-bold  tracking-widest">SCORE</p>
        <span className="text-6xl font-bold">12</span>
      </div>
    </div>
  );
};

export default Navbar;

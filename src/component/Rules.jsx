import React from "react";
import closeIcon from "../assets/icon-close.svg";
import rulesImg from "../assets/image-rules.svg";

const Rules = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white px-12 rounded-xl  flex flex-col  gap-10 py-8">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-3xl text-[hsl(229,25%,31%)]">RULES</h4>
          <img className="cursor-pointer" src={closeIcon} alt="" />
        </div>

        <img className="" src={rulesImg} alt="" />
      </div>
    </div>
  );
};

export default Rules;

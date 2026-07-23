import React from "react";
import closeIcon from "../assets/icon-close.svg";
import rulesImg from "../assets/image-rules.svg";

const Rules = ({ isRulesOpen, setIsRulesOpen }) => {
  return (
    isRulesOpen && (
      <div className="fixed z-15 inset-0 flex justify-center items-center bg-black/50">
        <div className="bg-white md:px-12 px-8 rounded-xl  flex flex-col  gap-10 md:py-8 py-6">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-3xl text-[hsl(229,25%,31%)]">
              RULES
            </h4>
            <img
              onClick={() => setIsRulesOpen(false)}
              className="cursor-pointer"
              src={closeIcon}
              alt=""
            />
          </div>

          <img className="" src={rulesImg} alt="" />
        </div>
      </div>
    )
  );
};

export default Rules;

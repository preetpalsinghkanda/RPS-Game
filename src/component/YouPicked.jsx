import React from "react";
import scissor from "../assets/icon-scissors.svg";

const YouPicked = ({ userPicked, randomRPS }) => {
  return (
    <div className="mx-auto my-10 flex gap-20">
      <div className="text-white gap-12 items-center flex flex-col">
        <h4 className="font-semibold text-2xl tracking-widest">YOU PICKED</h4>
        <div
          className={`h-64 shadow-xl  ${userPicked.bgColor} w-64 flex items-center justify-center  rounded-full`}
        >
          <span className="h-46 bg-white flex items-center justify-center w-46 border rounded-full">
            <img className="h-25" src={userPicked.img} alt="" />
          </span>
        </div>
      </div>

      <div className="text-white  gap-12 items-center flex flex-col">
        <h4 className="font-semibold text-2xl tracking-widest">
          THE HOUSE PICKED
        </h4>
        <div
          className={`h-64  w-64 flex ${randomRPS.bgColor} items-center justify-center  rounded-full `}
        >
          <span
            className={`h-46  ${randomRPS.img ? "bg-white" : "bg-[#182341bb]"} flex items-center justify-center w-46  rounded-full`}
          >
            {randomRPS.img && (
              <img className="h-25" src={randomRPS.img} alt="" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default YouPicked;

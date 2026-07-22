import React from "react";
import bgTriangle from "../assets/bg-triangle.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";
import "../App.css";

const Home = () => {
  return (
    <div className=" flex flex-col py-32 justify-center ">
      <div className="flex  h-full  justify-center">
        <div className="paper -top-25 left-35  relative bg-[hsl(230,89%,62%)] h-52 w-52 shadow-lg flex items-center justify-center rounded-full ">
          <span className="bg-[#ffffff] shadow-inner w-39 h-39 flex items-center justify-center  rounded-full">
            <img
              className="z-10  w-22 h-22 object-contain"
              src={paper}
              alt=""
            />
          </span>
        </div>
        <img className="h-80" src={bgTriangle} alt="" />
        <div className=" relative -top-25 right-35 bg-[hsl(39,89%,49%)] h-52 w-52 shadow-lg flex items-center justify-center rounded-full ">
          <span className="bg-white w-39 h-39 flex items-center justify-center  rounded-full">
            <img
              className="z-10  w-22 h-22 object-contain"
              src={scissor}
              alt=""
            />
          </span>
        </div>
      </div>

      <div className=" bottom-45 mx-auto relative bg-[hsl(349,71%,52%)] h-52 w-52 shadow-lg flex items-center justify-center rounded-full ">
        <span className="bg-white w-39 h-39 flex items-center justify-center  rounded-full">
          <img className="z-10  w-22 h-22 object-contain" src={rock} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Home;

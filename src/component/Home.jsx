import React from "react";
import bgTriangle from "../assets/bg-triangle.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";
import "../App.css";

const Home = ({ setUserIsPicked, userPicked }) => {
  return (
    <div className=" flex flex-col md:py-32 py-20 justify-center ">
      <div className="flex gap-3  h-full  justify-center">
        <div
          onClick={() =>
            setUserIsPicked({
              name: "paper",
              img: paper,
              bgColor: "bg-[hsl(230,89%,62%)]",
            })
          }
          className="paper cursor-pointer -top-25 left-35  md:relative bg-[hsl(230,89%,62%)] md:h-52 md:w-52 h-26 w-26 shadow-lg flex items-center justify-center rounded-full "
        >
          <span className="bg-[#ffffff] shadow-inner  w-19 h-19 md:w-39 md:h-39 flex items-center justify-center  rounded-full">
            <img
              className="z-10 w-11 h-11  md:w-22 md:h-22 object-contain"
              src={paper}
              alt=""
            />
          </span>
        </div>
        <img className="md:h-80  h-0" src={bgTriangle} alt="" />
        <div
          onClick={() =>
            setUserIsPicked({
              name: "scissor",
              img: scissor,
              bgColor: "bg-[hsl(39,89%,49%)]",
            })
          }
          className=" cursor-pointer md:relative -top-25 right-35 bg-[hsl(39,89%,49%)] h-26 w-26 md:h-52 md:w-52 shadow-lg flex items-center justify-center rounded-full "
        >
          <span className="bg-white md:w-39 w-19 h-19 md:h-39 flex items-center justify-center  rounded-full">
            <img
              className="z-10 h-11 w-11 md:w-22 md:h-22 object-contain"
              src={scissor}
              alt=""
            />
          </span>
        </div>
      </div>

      <div
        onClick={() =>
          setUserIsPicked({
            name: "rock",
            img: rock,
            bgColor: "bg-[hsl(349,71%,52%)]",
          })
        }
        className=" cursor-pointer bottom-45 mx-auto md:relative bg-[hsl(349,71%,52%)] h-26 w-26 md:h-52 md:w-52 shadow-lg flex items-center justify-center rounded-full "
      >
        <span className="bg-white h-19 w-19 md:w-39 md:h-39 flex items-center justify-center  rounded-full">
          <img
            className="z-10 h-11 w-11 md:w-22 md:h-22 object-contain"
            src={rock}
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Home;

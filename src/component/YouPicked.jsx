import React, { useEffect } from "react";
import scissor from "../assets/icon-scissors.svg";

const YouPicked = ({
  userPicked,
  randomRPS,
  isWinner,
  setIsWinner,
  playAgain,
  score,
  setScore,
}) => {
  useEffect(() => {
    if (!userPicked.img || !randomRPS.img) return;
    if (userPicked.img === randomRPS.img) {
      setIsWinner("draw");
    } else if (
      (userPicked.name === "rock" && randomRPS.name === "scissor") ||
      (userPicked.name === "paper" && randomRPS.name === "rock") ||
      (userPicked.name === "scissor" && randomRPS.name === "paper")
    ) {
      setIsWinner("user");
      setScore((prev) => prev + 1);
    } else {
      setIsWinner("computer");
      setScore((prev) => Math.max(prev - 1, 0));
    }
  }, [userPicked.name, randomRPS.name]);

  return (
    <div className="mx-auto  mt-20 flex flex-col gap-12  justify-around  md:min-w-2xl min-w-full  ">
      <div className="flex justify-around md:gap-20 md:min-w-2xl min-w-full">
        <div className="text-white flex-col-reverse md:gap-12 gap-8 items-center flex md:flex-col">
          <h4 className="font-semibold md:text-2xl tracking-widest">
            YOU PICKED
          </h4>
          <div
            className={`md:h-64  h-38 w-38 ${isWinner === "user" ? "md:shadow-[0_0_0_55px_rgba(255,255,255,0.05),0_0_0_115px_rgba(255,255,255,0.04),0_0_0_180px_rgba(255,255,255,0.03)] shadow-[0_0_0_20px_rgba(255,255,255,0.05),0_0_0_50px_rgba(255,255,255,0.05),0_0_0_85px_rgba(255,255,255,0.05)]" : ""} md:w-64 flex ${userPicked.bgColor} items-center justify-center  rounded-full`}
          >
            <span className="md:h-46 h-28 w-28 bg-white flex items-center justify-center md:w-46 border rounded-full">
              <img className="md:h-25" src={userPicked.img} alt="" />
            </span>
          </div>
        </div>

        {isWinner && (
          <div className="md:flex whitespace-nowrap hidden gap-6 flex-col justify-center items-center">
            <h3 className="  font-bold text-white text-6xl">
              {isWinner === "user"
                ? "YOU WIN"
                : isWinner === "computer"
                  ? "YOU LOSE"
                  : "DRAW"}
            </h3>
            <button
              onClick={playAgain}
              className="tracking-widest hover:text-[hsl(349,71%,52%)] hover:cursor-pointer text-[hsl(246,11%,37%)] bg-white  font-bold text-xl w-full rounded-md py-2"
            >
              PLAY AGAIN
            </button>
          </div>
        )}

        <div className="text-white flex-col-reverse md:gap-12 gap-8 items-center flex md:flex-col">
          <h4 className="font-semibold md:text-2xl tracking-widest">
            THE HOUSE PICKED
          </h4>

          <div
            className={`md:h-64 h-38 w-38 ${isWinner === "computer" ? "md:shadow-[0_0_0_55px_rgba(255,255,255,0.05),0_0_0_115px_rgba(255,255,255,0.04),0_0_0_180px_rgba(255,255,255,0.03)] shadow-[0_0_0_20px_rgba(255,255,255,0.05),0_0_0_50px_rgba(255,255,255,0.05),0_0_0_85px_rgba(255,255,255,0.05)]" : ""} md:w-64 flex ${randomRPS.bgColor} items-center justify-center  rounded-full `}
          >
            <span
              className={`md:h-46 h-28 w-28  ${randomRPS.img ? "bg-white" : "bg-[#182341bb]"} flex items-center justify-center md:w-46  rounded-full`}
            >
              {randomRPS.img && (
                <img className="md:h-25" src={randomRPS.img} alt="" />
              )}
            </span>
          </div>
        </div>
      </div>

      {isWinner && (
        <div className="flex whitespace-nowrap md:hidden gap-6 flex-col justify-center items-center">
          <h3 className="  font-bold text-white text-6xl">
            {isWinner === "user"
              ? "YOU WIN"
              : isWinner === "computer"
                ? "YOU LOSE"
                : "DRAW"}
          </h3>
          <button
            onClick={playAgain}
            className="tracking-widest px-12 hover:text-[hsl(349,71%,52%)] hover:cursor-pointer text-[hsl(246,11%,37%)] bg-white  font-semibold text-xl  rounded-md py-2"
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
};

export default YouPicked;

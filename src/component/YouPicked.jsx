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
    <div className="mx-auto my-10 flex gap-20">
      <div className="text-white gap-12 items-center flex flex-col">
        <h4 className="font-semibold text-2xl tracking-widest">YOU PICKED</h4>
        <div
          className={`h-64 ${isWinner === "user" ? "shadow-[0_0_0_55px_rgba(255,255,255,0.05),0_0_0_115px_rgba(255,255,255,0.04),0_0_0_180px_rgba(255,255,255,0.03)]" : ""} w-64 flex ${userPicked.bgColor} items-center justify-center  rounded-full`}
        >
          <span className="h-46 bg-white flex items-center justify-center w-46 border rounded-full">
            <img className="h-25" src={userPicked.img} alt="" />
          </span>
        </div>
      </div>

      {isWinner && (
        <div className="flex gap-6 flex-col justify-center items-center">
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

      <div className="text-white  gap-12 items-center flex flex-col">
        <h4 className="font-semibold text-2xl tracking-widest">
          THE HOUSE PICKED
        </h4>

        <div
          className={`h-64 ${isWinner === "computer" ? "shadow-[0_0_0_55px_rgba(255,255,255,0.05),0_0_0_115px_rgba(255,255,255,0.04),0_0_0_180px_rgba(255,255,255,0.03)]" : ""} w-64 flex ${randomRPS.bgColor} items-center justify-center  rounded-full `}
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

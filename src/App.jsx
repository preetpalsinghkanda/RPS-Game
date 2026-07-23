import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Rules from "./component/Rules";
import Home from "./component/Home";
import YouPicked from "./component/YouPicked";
import paper from "./assets/icon-paper.svg";
import rock from "./assets/icon-rock.svg";
import scissor from "./assets/icon-scissors.svg";

const App = () => {
  const RPS = [
    {
      name: "paper",
      img: paper,
      bgColor: "bg-[hsl(230,89%,62%)]",
    },
    {
      name: "rock",
      img: rock,
      bgColor: "bg-[hsl(349,71%,52%)]",
    },
    {
      name: "scissor",
      img: scissor,
      bgColor: "bg-[hsl(39,89%,49%)]",
    },
  ];

  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [userPicked, setUserIsPicked] = useState({});
  const [score, setScore] = useState(() => {
    return Number(localStorage.getItem("score")) || 0;
  });
  const [randomRPS, setRandomRPS] = useState({});

  const [isWinner, setIsWinner] = useState("");

  const playAgain = () => {
    setUserIsPicked({});
    setRandomRPS({});
    setIsWinner(null);
  };

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    if (Object.keys(userPicked).length > 0) {
      const timer = setTimeout(() => {
        setRandomRPS(RPS[Math.floor(Math.random() * RPS.length)]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [userPicked]);

  return (
    <div className="flex  flex-col">
      <Navbar score={score} />

      <Rules isRulesOpen={isRulesOpen} setIsRulesOpen={setIsRulesOpen} />
      {Object.keys(userPicked).length === 0 && (
        <Home setUserIsPicked={setUserIsPicked} userPicked={userPicked} />
      )}
      {Object.keys(userPicked).length > 0 && (
        <YouPicked
          userPicked={userPicked}
          randomRPS={randomRPS}
          isWinner={isWinner}
          setIsWinner={setIsWinner}
          playAgain={playAgain}
          score={score}
          setScore={setScore}
        />
      )}

      <button
        onClick={() => setIsRulesOpen(true)}
        className="border-2  cursor-pointer
       self-end md:mx-10 border-[#ffffff91] mx-auto my-20  md:my-0  md:absolute bottom-6  tracking-widest font-semibold text-white rounded-lg px-10 py-2"
      >
        RULES
      </button>
    </div>
  );
};

export default App;

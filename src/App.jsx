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
      name: "Paper",
      img: paper,
      bgColor: "bg-[hsl(230,89%,62%)]",
    },
    {
      name: "Rock",
      img: rock,
      bgColor: "bg-[hsl(349,71%,52%)]",
    },
    {
      name: "Scissor",
      img: scissor,
      bgColor: "bg-[hsl(39,89%,49%)]",
    },
  ];

  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [userPicked, setIsPicked] = useState({});
  const [score, setScore] = useState(0);
  const [randomRPS, setRandomRPS] = useState({});

  useEffect(() => {
    setRandomRPS(RPS[Math.floor(Math.random() * RPS.length)]);
  }, [YouPicked]);

  return (
    <div className="flex  flex-col">
      <Navbar score={score} />
      <Rules isRulesOpen={isRulesOpen} setIsRulesOpen={setIsRulesOpen} />
      {Object.keys(userPicked).length === 0 && (
        <Home setIsPicked={setIsPicked} userPicked={userPicked} />
      )}
      {Object.keys(userPicked).length > 0 && (
        <YouPicked userPicked={userPicked} randomRPS={randomRPS} />
      )}

      <button
        onClick={() => setIsRulesOpen(true)}
        className="border-2  cursor-pointer
       self-end mx-10 border-[#ffffff91] absolute bottom-6  tracking-widest font-semibold text-white rounded-lg px-10 py-2"
      >
        RULES
      </button>
    </div>
  );
};

export default App;

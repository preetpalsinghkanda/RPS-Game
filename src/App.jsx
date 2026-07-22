import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Rules from "./component/Rules";
import Home from "./component/Home";
import YouPicked from "./component/YouPicked";

const App = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [userPicked, setIsPicked] = useState({});

  return (
    <div className="flex  flex-col">
      <Navbar />
      <Rules isRulesOpen={isRulesOpen} setIsRulesOpen={setIsRulesOpen} />
      {Object.keys(userPicked).length === 0 && (
        <Home setIsPicked={setIsPicked} userPicked={userPicked} />
      )}
      {Object.keys(userPicked).length > 0 && <YouPicked userPicked={userPicked} />}

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

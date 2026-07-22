import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Rules from "./component/Rules";
import Home from "./component/Home";

const App = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Rules isRulesOpen={isRulesOpen} setIsRulesOpen={setIsRulesOpen} />
      <Home />

      <button
        onClick={() => setIsRulesOpen(true)}
        className="border-2 cursor-pointer
       self-end mx-10 border-[#ffffff91] relative bottom-67 tracking-widest font-semibold text-white rounded-lg px-10 py-2"
      >
        RULES
      </button>
    </div>
  );
};

export default App;
